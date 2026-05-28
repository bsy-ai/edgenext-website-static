#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Import blog and news data utilities
import { getAllPostsForSitemap } from '../src/pages/BLOG/utils/blogUtils.js';
import { getAllNews } from '../src/pages/NEWS/utils/newsDataParser.js';

const SITE_URL = (process.env.SITE_URL || 'https://www.edgenext.com').replace(/\/+$/, '');

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function toLastmodDate(input?: string | Date): string {
  const d = input ? (typeof input === 'string' ? new Date(input) : input) : new Date();
  if (Number.isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

/** Parse vite-react-ssg RouteRecord paths from routes.tsx (path: 'segment' syntax). */
function extractStaticPathsFromRoutesTsx(routesFile: string): string[] {
  const src = fs.readFileSync(routesFile, 'utf8');
  const out = new Set<string>();
  const re = /\bpath:\s*['"]([^'"]+)['"]/g;

  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    const p = (m[1] || '').trim();
    if (!p) continue;
    if (p.includes(':')) continue;
    if (p.includes('*')) continue;

    const urlPath = p.startsWith('/') ? p : `/${p}`;
    out.add(urlPath);
  }

  out.add('/');
  out.add('/resources/blog');
  out.add('/newsroom');

  return Array.from(out);
}

interface UrlEntry {
  loc: string;
  lastmod?: string;
}

function uniqByLoc(entries: UrlEntry[]): UrlEntry[] {
  const map = new Map<string, UrlEntry>();
  for (const e of entries) map.set(e.loc, e);
  return Array.from(map.values());
}

async function main() {
  console.log('[sitemap] Starting sitemap generation...');

  const routesFile = path.join(process.cwd(), 'src', 'routes.tsx');

  const staticPaths = extractStaticPathsFromRoutesTsx(routesFile);
  console.log(`[sitemap] Found ${staticPaths.length} static routes`);

  // Static routes: only <loc>, no <lastmod>
  const staticEntries: UrlEntry[] = staticPaths.map((p) => ({
    loc: `${SITE_URL}${p}`,
  }));

  // Blog entries: <loc> + <lastmod>
  const blogPosts = getAllPostsForSitemap();
  console.log(`[sitemap] Found ${blogPosts.length} blog posts`);
  
  const blogEntries: UrlEntry[] = blogPosts.map((p) => ({
    loc: `${SITE_URL}/resources/blog/${p.slug}`,
    lastmod: toLastmodDate(p.date),
  }));

  // News entries: <loc> + <lastmod>
  const newsArticles = getAllNews();
  console.log(`[sitemap] Found ${newsArticles.length} news articles`);
  
  const newsEntries: UrlEntry[] = newsArticles.map((n) => ({
    loc: `${SITE_URL}/resources/news/${n.slug}`,
    lastmod: toLastmodDate(n.publishedAt),
  }));

  // Combine and deduplicate
  const all = uniqByLoc([...staticEntries, ...blogEntries, ...newsEntries]);

  // Generate XML
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    all
      .map((u) => {
        let entry = `  <url>\n    <loc>${escapeXml(u.loc)}</loc>`;
        if (u.lastmod) {
          entry += `\n    <lastmod>${escapeXml(u.lastmod)}</lastmod>`;
        }
        entry += `\n  </url>`;
        return entry;
      })
      .join('\n') +
    `\n</urlset>\n`;

  // Write to public/sitemap.xml
  const outFile = path.join(process.cwd(), 'public', 'sitemap.xml');
  await fs.ensureDir(path.dirname(outFile));
  await fs.writeFile(outFile, xml, 'utf8');

  console.log(`[sitemap] Successfully wrote ${all.length} URLs to ${outFile}`);
  console.log(`[sitemap] - Static routes: ${staticEntries.length}`);
  console.log(`[sitemap] - Blog posts: ${blogEntries.length}`);
  console.log(`[sitemap] - News articles: ${newsEntries.length}`);
}

main().catch((err) => {
  console.error('[sitemap] Generation failed:', err);
  process.exitCode = 1;
});

