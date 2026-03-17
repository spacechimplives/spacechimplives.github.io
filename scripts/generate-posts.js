import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDir = path.join(__dirname, '../src/posts/md');
const outputFile = path.join(__dirname, '../src/posts/generated-posts.ts');
const publicImagesDir = path.join(__dirname, '../public/post-images');

// Media extensions to copy
const mediaExtensions = [
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp',
  '.mp4', '.webm', '.ogg',
  '.mp3', '.wav'
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyMedia(sourceDir, slug) {
  const destDir = path.join(publicImagesDir, slug);

  if (!fs.existsSync(sourceDir)) return;

  const files = fs.readdirSync(sourceDir);
  const mediaFiles = files.filter(f =>
    mediaExtensions.includes(path.extname(f).toLowerCase())
  );

  if (mediaFiles.length > 0) {
    ensureDir(destDir);

    for (const mediaFile of mediaFiles) {
      const src = path.join(sourceDir, mediaFile);
      const dest = path.join(destDir, mediaFile);
      fs.copyFileSync(src, dest);
      console.log(`  Copied: ${slug}/${mediaFile}`);
    }
  }
}

function rewriteImagePaths(content, slug) {
  // Rewrite relative image paths to use /post-images/{slug}/
  // Matches: ![alt](./image.png) or ![alt](image.png)
  return content.replace(
    /!\[([^\]]*)\]\((?:\.\/)?([^)\/][^)]*\.(?:png|jpg|jpeg|gif|svg|webp))\)/gi,
    `![$1](/post-images/${slug}/$2)`
  );
}

function findPosts(dir) {
  const posts = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Check for index.md in subdirectory
      const indexPath = path.join(fullPath, 'index.md');
      if (fs.existsSync(indexPath)) {
        const fileContent = fs.readFileSync(indexPath, 'utf-8');
        const { data, content } = matter(fileContent);
        const slug = entry.name;

        // Copy media from post directory
        copyMedia(fullPath, slug);

        // Rewrite image paths in content
        const rewrittenContent = rewriteImagePaths(content, slug);

        posts.push({
          slug,
          meta: data,
          content: rewrittenContent
        });
      }
    } else if (entry.name.endsWith('.md')) {
      // Traditional flat markdown file
      const fileContent = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(fileContent);
      const slug = entry.name.replace(/\.md$/, '');
      posts.push({
        slug,
        meta: data,
        content
      });
    }
  }

  return posts;
}

// Ensure public images directory exists
ensureDir(publicImagesDir);

const posts = findPosts(postsDir);

// Generate TypeScript file
const output = `// This file is auto-generated. Do not edit manually.
export const generatedPosts = ${JSON.stringify(posts, null, 2)} as const;
`;

fs.writeFileSync(outputFile, output, 'utf-8');
console.log(`Generated posts file with ${posts.length} posts`);
