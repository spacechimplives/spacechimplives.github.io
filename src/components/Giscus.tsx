import { useEffect, useRef } from 'react';
import { useTheme } from './theme-provider';

export default function Giscus() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Determine effective theme
    let effectiveTheme = theme;
    if (theme === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    // Clear any existing giscus iframe
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'spacechimplives/spacechimplives.github.io');
    script.setAttribute('data-repo-id', 'R_kgDONJDVng');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDONJDVns4C97do');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '1');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', effectiveTheme === 'dark' ? 'transparent_dark' : 'light');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    containerRef.current.appendChild(script);
  }, [theme]);

  return (
    <div className="mt-16 pt-8 border-t border-border">
      <h2 className="text-xl font-semibold mb-6 text-muted-foreground">Comments</h2>
      <div ref={containerRef} className="giscus-container" />
    </div>
  );
}
