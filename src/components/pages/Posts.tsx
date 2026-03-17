import { useState } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '@/posts';
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 10;

export default function PostsPage() {
  const [page, setPage] = useState(1);

  const sortedPosts = [...posts]
    .filter((p) => !p.meta.draft)
    .sort((a, b) => {
      const dateA = new Date(a.meta.date || '1970-01-01');
      const dateB = new Date(b.meta.date || '1970-01-01');
      return dateB.getTime() - dateA.getTime();
    });

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const visiblePosts = sortedPosts.slice(0, page * POSTS_PER_PAGE);
  const hasMore = page < totalPages;

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-1"
      style={{
        width: '100%',
        padding: '3vw 6vw',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <ul>
        {visiblePosts.map((p) => (
          <li key={p.slug} className="mb-8 flex gap-4 p-4 border border-white/20 rounded-lg">
            {p.meta.image && p.meta.image !== '/blog-images/default.png' && (
              <Link to={`/blog/${p.slug}`} className="shrink-0">
                <img src={p.meta.image} alt="" className="w-32 h-20 object-cover rounded" />
              </Link>
            )}
            <div>
              <h2 className="text-xl font-semibold">
                <Link to={`/blog/${p.slug}`}>{p.meta.title}</Link>
              </h2>
              <p className="text-xs text-foreground/50 mb-2">
                {new Date(p.meta.date || '').toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-base text-foreground/80">
                {(p.meta.summary || p.content?.replace(/[#*_\[\]()]/g, '').slice(0, 500))}...
              </p>
            </div>
          </li>
        ))}
      </ul>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() => setPage(page + 1)}
            className="border-white/20"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}
