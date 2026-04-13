/** Production site origin (no trailing slash). Override with VITE_SITE_URL in .env */
const raw = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();
export const SITE_ORIGIN = (raw ? raw.replace(/\/+$/, '') : '') || 'https://www.edgenext.com';

/** Fallback when route has no entry in PAGE_SEO_BY_PATH — matches index.html */
export const DEFAULT_PAGE_TITLE = 'EdgeNext | Building the Edge for What\'s Next';
export const DEFAULT_PAGE_DESCRIPTION =
  'EdgeNext - Leading cloud service provider for content delivery, security, and edge computing solutions in complex emerging markets.';
