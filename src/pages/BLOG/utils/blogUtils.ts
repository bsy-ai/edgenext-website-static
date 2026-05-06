import { parseJsonBlogData, ParsedBlogPost, getCategories, getPostsByCategory, searchPosts } from './jsonDataParser';

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
    category: parsedPost.category
  };
}

function getBlogPosts(): BlogPost[] {
  const parsedPosts = parseJsonBlogData();
  return parsedPosts.map(convertParsedPost);
}

export function getAllPostSlugs(): string[] {
  const posts = getBlogPosts();
  return posts.map(post => post.slug);
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getAllPosts(): BlogPost[] {
  const posts = getBlogPosts();
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedPosts(currentSlug: string, relatedSlugs: string[]): BlogPost[] {
  const posts = getBlogPosts();
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