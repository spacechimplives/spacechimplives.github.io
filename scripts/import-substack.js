import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const substackPostsDir = path.join(__dirname, '../posts');
const outputPostsDir = path.join(__dirname, '../src/posts/md');

// Get existing slugs
const existingSlugs = new Set();
const entries = fs.readdirSync(outputPostsDir, { withFileTypes: true });
for (const entry of entries) {
  if (entry.isDirectory()) {
    existingSlugs.add(entry.name);
  } else if (entry.name.endsWith('.md')) {
    existingSlugs.add(entry.name.replace(/\.md$/, ''));
  }
}

console.log(`Found ${existingSlugs.size} existing posts`);

// Setup turndown for HTML to markdown
const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
});

// Remove Substack subscription widgets
turndown.addRule('removeSubscriptionWidgets', {
  filter: function (node) {
    return node.classList && node.classList.contains('subscription-widget-wrap-editor');
  },
  replacement: function () {
    return '';
  }
});

// Get Substack HTML files
const htmlFiles = fs.readdirSync(substackPostsDir).filter(f => f.endsWith('.html'));
console.log(`Found ${htmlFiles.length} Substack posts`);

let imported = 0;
let skipped = 0;

for (const htmlFile of htmlFiles) {
  // Extract slug from filename: 170445943.how-much-energy-does-it-take-to-learn.html
  const match = htmlFile.match(/^\d+\.(.+)\.html$/);
  if (!match) {
    console.log(`Skipping invalid filename: ${htmlFile}`);
    continue;
  }

  const slug = match[1];

  // Check for duplicates
  if (existingSlugs.has(slug)) {
    console.log(`Skipping duplicate: ${slug}`);
    skipped++;
    continue;
  }

  // Read and parse HTML
  const htmlPath = path.join(substackPostsDir, htmlFile);
  const html = fs.readFileSync(htmlPath, 'utf-8');

  // Create a proper HTML document for JSDOM
  const dom = new JSDOM(`<html><body>${html}</body></html>`);
  const document = dom.window.document;

  // Remove subscription widgets
  const widgets = document.querySelectorAll('.subscription-widget-wrap-editor');
  widgets.forEach(w => w.remove());

  // Get content
  const contentHtml = document.body.innerHTML;

  // Convert to markdown
  let markdown = turndown.turndown(contentHtml);

  // Fix LaTeX: \middot should become \cdot
  markdown = markdown.replace(/\\middot/g, '\\cdot');

  // Generate title from slug
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Create frontmatter (no date available in these files)
  const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: ""
draft: false
---

`;

  const fullContent = frontmatter + markdown;
  const outputPath = path.join(outputPostsDir, `${slug}.md`);

  fs.writeFileSync(outputPath, fullContent, 'utf-8');
  console.log(`Imported: ${slug}`);
  imported++;
  existingSlugs.add(slug);
}

console.log(`\nImport complete: ${imported} new posts, ${skipped} duplicates skipped`);
