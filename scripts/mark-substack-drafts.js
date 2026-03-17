import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const zipFile = path.join(__dirname, '../Ta6Z3gDbSluLijhNJDLQog.zip');
const postsDir = path.join(__dirname, '../src/posts/md');

// Extract posts.csv from zip
const csvContent = execSync(`unzip -p "${zipFile}" posts.csv`, { encoding: 'utf-8' });

// Parse CSV
const lines = csvContent.trim().split('\n');
const header = lines[0].split(',');
const postIdIdx = header.indexOf('post_id');
const isPublishedIdx = header.indexOf('is_published');
const postDateIdx = header.indexOf('post_date');

let updated = 0;
let notFound = 0;

for (let i = 1; i < lines.length; i++) {
  // Simple CSV parsing (handles our case)
  const parts = lines[i].split(',');
  const postId = parts[postIdIdx]; // e.g., "187932849.the-physics-of-types"
  const isPublished = parts[isPublishedIdx] === 'true';
  const postDate = parts[postDateIdx] || '';

  // Extract slug from post_id
  const match = postId.match(/^\d+\.(.+)$/);
  if (!match) continue;
  const slug = match[1];

  const mdPath = path.join(postsDir, `${slug}.md`);

  if (!fs.existsSync(mdPath)) {
    notFound++;
    continue;
  }

  // Read current content
  let content = fs.readFileSync(mdPath, 'utf-8');

  // Update draft status
  const isDraft = !isPublished;
  content = content.replace(/^draft: (true|false)$/m, `draft: ${isDraft}`);

  // Update date if we have one and current is empty
  if (postDate && content.includes('date: ""')) {
    const dateOnly = postDate.split('T')[0];
    content = content.replace('date: ""', `date: "${dateOnly}"`);
  }

  fs.writeFileSync(mdPath, content, 'utf-8');

  if (isDraft) {
    console.log(`Marked as draft: ${slug}`);
  }
  updated++;
}

console.log(`\nUpdated ${updated} posts, ${notFound} not found in md files`);
