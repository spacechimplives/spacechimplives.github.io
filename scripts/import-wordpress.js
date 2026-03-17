import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the XML file
const xmlPath = path.join(__dirname, '..', 'spacechimplife.WordPress.2026-03-16.xml');
const xml = fs.readFileSync(xmlPath, 'utf-8');

// Simple XML parser for WordPress export
function extractItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const getField = (field) => {
      const regex = new RegExp(`<${field}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${field}>`);
      const m = itemXml.match(regex);
      return m ? m[1] : '';
    };

    const getWpField = (field) => {
      const regex = new RegExp(`<wp:${field}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:${field}>`);
      const m = itemXml.match(regex);
      return m ? m[1] : '';
    };

    const postType = getWpField('post_type');
    if (postType !== 'post') continue;

    const title = getField('title');
    const content = getField('content:encoded') || getField('content');
    const status = getWpField('status');
    const postName = getWpField('post_name');
    const postDate = getWpField('post_date');

    // Skip empty posts
    if (!title.trim() && !content.trim()) continue;

    items.push({
      title,
      content,
      status,
      slug: postName || slugify(title),
      date: postDate ? postDate.split(' ')[0] : '',
      draft: status !== 'publish'
    });
  }

  return items;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Convert WordPress HTML/Gutenberg blocks to Markdown
function htmlToMarkdown(html) {
  if (!html) return '';

  let md = html;

  // Remove WordPress Gutenberg block comments
  md = md.replace(/<!-- wp:[^>]*-->/g, '');
  md = md.replace(/<!-- \/wp:[^>]*-->/g, '');

  // Convert headings
  md = md.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  md = md.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  md = md.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
  md = md.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n');
  md = md.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, '\n##### $1\n');
  md = md.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, '\n###### $1\n');

  // Convert paragraphs
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '\n$1\n');

  // Convert links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');

  // Convert bold/strong
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');

  // Convert italic/em
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');

  // Convert blockquotes
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (match, content) => {
    return '\n> ' + content.trim().replace(/\n/g, '\n> ') + '\n';
  });

  // Convert code blocks
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '\n```\n$1\n```\n');
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, '\n```\n$1\n```\n');
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, '`$1`');

  // Convert lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, content) => {
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  });
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, content) => {
    let i = 1;
    return content.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, () => `${i++}. $1\n`);
  });

  // Convert images
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)');

  // Convert figures
  md = md.replace(/<figure[^>]*>([\s\S]*?)<\/figure>/gi, '$1');
  md = md.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, '*$1*');

  // Convert line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n');

  // Convert divs and spans (just remove tags)
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1');
  md = md.replace(/<span[^>]*>([\s\S]*?)<\/span>/gi, '$1');

  // Convert horizontal rules
  md = md.replace(/<hr[^>]*\/?>/gi, '\n---\n');

  // Decode HTML entities
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#8217;/g, "'");
  md = md.replace(/&#8216;/g, "'");
  md = md.replace(/&#8220;/g, '"');
  md = md.replace(/&#8221;/g, '"');
  md = md.replace(/&#8211;/g, '–');
  md = md.replace(/&#8212;/g, '—');
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));

  // Remove any remaining HTML tags
  md = md.replace(/<[^>]+>/g, '');

  // Clean up extra whitespace
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();

  return md;
}

// Generate frontmatter
function generateFrontmatter(post) {
  const lines = ['---'];
  lines.push(`title: "${post.title.replace(/"/g, '\\"')}"`);

  // Generate summary from content (first 150 chars)
  const summary = post.content
    .replace(/<[^>]+>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 150);
  lines.push(`summary: "${summary.replace(/"/g, '\\"')}"`);

  lines.push(`image: "/blog-images/default.png"`);

  if (post.date) {
    lines.push(`date: "${post.date}"`);
  }

  if (post.draft) {
    lines.push(`draft: true`);
  }

  lines.push('---');
  return lines.join('\n');
}

// Main
const posts = extractItems(xml);
console.log(`Found ${posts.length} blog posts`);

const outputDir = path.join(__dirname, '..', 'src', 'posts', 'md');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write new markdown files (don't delete existing ones to preserve manual posts)
let publishedCount = 0;
let draftCount = 0;

for (const post of posts) {
  if (!post.slug) continue;

  const frontmatter = generateFrontmatter(post);
  const markdown = htmlToMarkdown(post.content);
  const fullContent = frontmatter + '\n\n' + markdown;

  const filename = post.slug + '.md';
  const filepath = path.join(outputDir, filename);

  fs.writeFileSync(filepath, fullContent);

  if (post.draft) {
    draftCount++;
  } else {
    publishedCount++;
  }

  console.log(`Written: ${filename} (${post.draft ? 'draft' : 'published'})`);
}

console.log(`\nDone! Created ${publishedCount} published posts and ${draftCount} drafts.`);
console.log('Now run: npm run generate-posts');
