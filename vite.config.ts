import path from "path"
import fs from "fs"
import { execSync } from "child_process"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    // Serve post images from src/posts/md during development
    {
      name: 'serve-post-images',
      configureServer(server) {
        server.middlewares.use('/post-images', (req, res, next) => {
          const filePath = path.join(__dirname, 'src/posts/md', req.url || '');
          if (fs.existsSync(filePath)) {
            res.setHeader('Content-Type', getContentType(filePath));
            fs.createReadStream(filePath).pipe(res);
          } else {
            next();
          }
        });
      },
    },
    // Watch for post changes and regenerate
    {
      name: 'watch-posts',
      configureServer(server) {
        const postsDir = path.join(__dirname, 'src/posts/md');
        let timeout: NodeJS.Timeout | null = null;

        const regenerate = () => {
          console.log('\n[posts] Regenerating posts...');
          try {
            execSync('node scripts/generate-posts.js', { cwd: __dirname, stdio: 'inherit' });
          } catch (e) {
            console.error('[posts] Failed to regenerate');
          }
        };

        fs.watch(postsDir, { recursive: true }, (event, filename) => {
          if (filename?.endsWith('.md')) {
            // Debounce regeneration
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(regenerate, 300);
          }
        });
      },
    },
  ],
  build: {
    outDir: "_site",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api/graphql': {
        target: 'http://localhost:4001',
        changeOrigin: true,
      },
    },
  },
})

function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const types: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.ogg': 'video/ogg',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
  };
  return types[ext] || 'application/octet-stream';
}
