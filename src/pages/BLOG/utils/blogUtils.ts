import {
  parseJsonBlogData,
  ParsedBlogPost,
  getCategories,
  getPostsByCategory,
  searchPosts,
  isVisibleBlogPost,
  BlogSeo
} from './jsonDataParser';

export type { BlogSeo, BlogFaqItem } from './jsonDataParser';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  content: string;
  relatedPosts: string[];
  thumbnail: string;
  thumbnailCandidates?: string[];
  category?: string;
  seo?: BlogSeo;
  hide?: boolean;
}

// 将ParsedBlogPost转换为BlogPost格式
function convertParsedPost(parsedPost: ParsedBlogPost): BlogPost {
  return {
    slug: parsedPost.slug,
    title: parsedPost.title,
    date: parsedPost.date,
    author: parsedPost.author,
    description: parsedPost.description,
    content: parsedPost.content,
    relatedPosts: parsedPost.relatedPosts,
    thumbnail: parsedPost.thumbnail,
    thumbnailCandidates: parsedPost.thumbnailCandidates,
    category: parsedPost.category,
    seo: parsedPost.seo,
    hide: parsedPost.hide
  };
}

function getBlogPosts(includeHidden = false): BlogPost[] {
  const parsedPosts = parseJsonBlogData();
  const filtered = includeHidden ? parsedPosts : parsedPosts.filter(isVisibleBlogPost);
  return filtered.map(convertParsedPost);
}

/** 全部 slug（含 hide），用于静态路由 */
export function getAllPostSlugs(): string[] {
  return getBlogPosts(true).map(post => post.slug);
}

/** 直链访问：含 hide 文章 */
export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts(true);
  return posts.find(post => post.slug === slug) || null;
}

/** 列表展示：不含 hide 文章 */
export function getAllPosts(): BlogPost[] {
  const posts = getBlogPosts(false);
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Sitemap：含 hide 文章 */
export function getAllPostsForSitemap(): BlogPost[] {
  const posts = getBlogPosts(true);
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedPosts(currentSlug: string, relatedSlugs: string[]): BlogPost[] {
  const posts = getBlogPosts(false);
  return posts.filter(post =>
    relatedSlugs.includes(post.slug) && post.slug !== currentSlug
  );
}

export function getAllCategories(): string[] {
  return getCategories();
}

export function getPostsByCategoryName(category: string): BlogPost[] {
  const parsedPosts = getPostsByCategory(category);
  return parsedPosts.map(convertParsedPost);
}

export function searchBlogPosts(query: string): BlogPost[] {
  const parsedPosts = searchPosts(query);
  return parsedPosts.map(convertParsedPost);
}
