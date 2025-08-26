import blogsData from '../content/blogs/blogs.json';
import photoNames from '../content/blogs/blog-photo-name.json';

// 缓存解析后的数据
let cachedParsedPosts: ParsedBlogPost[] | null = null;
let cachedCategories: string[] | null = null;

// 搜索索引缓存
interface SearchIndex {
  post: ParsedBlogPost;
  searchText: string; // 预计算的小写搜索文本
}
let searchIndex: SearchIndex[] | null = null;

export interface ParsedBlogPost {
  slug: string;
  title: string;
  date: string;
  timestamp: number;
  author: string;
  description: string;
  content: string;
  thumbnail: string;
  relatedPosts: string[];
  category?: string;
  thumbnailCandidates?: string[];
}

// 从时间戳提取作者信息？？？
function extractAuthorFromTimestamp(timestamp: number): string {
  const authors = ['Kaiyue', 'EdgeNext Team', 'Tech Writer', 'Content Team'];
  return authors[timestamp % authors.length];
}

function extractDescription(content: string): string {
  // 移除HTML标签
  const plainText = content.replace(/<[^>]*>/g, '');
  // 取前200个字符作为描述
  return plainText.substring(0, 200) + (plainText.length > 200 ? '...' : '');
}

function splitTitleToWords(title: string): string[] {
  return title
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
}
//图片
function buildHyphenPrefixes(words: string[], minWords: number = 3, maxWords?: number): string[] {
  const max = Math.min(words.length, maxWords ?? words.length);
  const prefixes: string[] = [];
  for (let len = max; len >= Math.max(minWords, 1); len--) {
    const prefix = words.slice(0, len).join('-');
    prefixes.push(prefix);
  }
  return prefixes;
}


function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractCategory(title: string, content: string): string {
  const categories = {
    'cdn': ['cdn', 'content delivery', 'caching'],
    'security': ['ddos', 'security', 'firewall', 'protection'],
    'server': ['server', 'vps', 'bare metal', 'hosting'],
    'optimization': ['speed', 'performance', 'optimization', 'wordpress'],
    'cloud': ['cloud', 'edge computing', 'infrastructure'],
    'technology': ['ai', 'machine learning', 'blockchain', 'iot']
  };

  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => 
      titleLower.includes(keyword) || contentLower.includes(keyword)
    )) {
      return category;
    }
  }
  
  return 'general';
}

// 计算字符串相似度（简化版编辑距离）
function calculateSimilarity(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  
  if (len1 === 0) return len2;
  if (len2 === 0) return len1;
  
  let matches = 0;
  const maxLen = Math.max(len1, len2);
  
  for (let i = 0; i < Math.min(len1, len2); i++) {
    if (str1[i] === str2[i]) {
      matches++;
    }
  }
  
  return matches / maxLen;
}

// 标准化字符串（去除撇号、标点符号等）
function normalizeString(str: string): string {
  return str.toLowerCase()
    .replace(/[''""`]/g, '') // 去除各种撇号和引号
    .replace(/[?!.,:;]/g, '') // 去除标点符号
    .replace(/\s+/g, ' ') // 标准化空格
    .trim();
}

// 新增：使用blog-photo-name.json进行标题与图片文件名的映射
export function findMatchingPhotoName(title: string): string | null {
  const normalizedTitle = normalizeString(title);
  let bestMatch: string | null = null;
  let bestScore = 0;
  
  for (const photoName of photoNames) {
    const normalizedPhotoName = normalizeString(photoName.replace(/-/g, ' '));
    
    // 1. 完全匹配检查
    if (normalizedTitle.includes(normalizedPhotoName) || normalizedPhotoName.includes(normalizedTitle)) {
      return photoName;
    }
    
    // 1.5. 特殊包含关系检查（处理标题包含文件名的情况）
    // 这特别适用于标题比文件名长，但包含文件名的情况
    if (normalizedTitle.length > normalizedPhotoName.length) {
      // 检查标题是否包含文件名的所有单词
      const photoWords = normalizedPhotoName.split(/\s+/).filter(word => word.length > 2);
      const titleWords = normalizedTitle.split(/\s+/).filter(word => word.length > 2);
      
      const containedWords = photoWords.filter(word => 
        titleWords.some(titleWord => titleWord.includes(word) || word.includes(titleWord))
      );
      
      // 如果文件名的大部分单词都在标题中，认为匹配
      if (containedWords.length >= photoWords.length * 0.8) {
        // 额外验证：检查核心主题词是否匹配，避免跨主题错误匹配
        const coreWords = photoWords.filter(word => word.length > 3); // 只考虑较长的核心词
        const coreMatches = coreWords.filter(word => 
          titleWords.some(titleWord => 
            titleWord.includes(word) || word.includes(titleWord)
          )
        );
        
        // 核心词匹配度必须达到90%以上，且至少有2个核心词
        if (coreWords.length >= 2 && coreMatches.length / coreWords.length >= 0.9) {
          return photoName;
        }
      }
    }
    
    // 2. 按文件名长度截取标题进行匹配（核心逻辑）
    // 文件名通常是标题的前半部分，所以截取相同长度的标题部分来比较
    const photoLength = normalizedPhotoName.length;
    const titlePrefix = normalizedTitle.substring(0, photoLength);
    
    // 计算相同长度下的相似度
    const lengthBasedSimilarity = calculateSimilarity(titlePrefix, normalizedPhotoName);
    
    // 如果相似度大于75%，认为匹配（降低阈值）
    if (lengthBasedSimilarity > 0.75) {
      if (lengthBasedSimilarity > bestScore) {
        bestScore = lengthBasedSimilarity;
        bestMatch = photoName;
      }
    }
    
    // 3. 备用方案：单词级别的前缀匹配
    const titleWords = normalizedTitle.split(/\s+/).filter(word => word.length > 2);
    const photoWords = normalizedPhotoName.split(/\s+/).filter(word => word.length > 2);
    
    if (photoWords.length >= 3 && titleWords.length >= photoWords.length) {
      // 截取标题的前N个单词（N=文件名单词数）
      const titlePrefix = titleWords.slice(0, photoWords.length);
      
      // 计算前缀单词的匹配度
      let wordMatches = 0;
      for (let i = 0; i < photoWords.length; i++) {
        if (i < titlePrefix.length) {
          const wordSimilarity = calculateSimilarity(titlePrefix[i], photoWords[i]);
          if (wordSimilarity > 0.8) {
            wordMatches++;
          }
        }
      }
      
      const wordMatchRatio = wordMatches / photoWords.length;
      
      // 如果单词匹配度大于80%
      if (wordMatchRatio > 0.8 && wordMatches >= 3) {
        if (wordMatchRatio > bestScore) {
          bestScore = wordMatchRatio;
          bestMatch = photoName;
        }
      }
    }
  }
  
  return bestMatch;
}

export function parseJsonBlogData(): ParsedBlogPost[] {
  // 如果有缓存，直接返回
  if (cachedParsedPosts) {
    return cachedParsedPosts;
  }

  const parsedPosts: ParsedBlogPost[] = [];
  
  try {
    if (!Array.isArray(blogsData)) {
      console.error('blogs.json is not an array');
      return [];
    }

    blogsData.forEach((item: any, index: number) => {
      try {
        const keys = Object.keys(item);
        
        if (keys.length >= 3) {
          const titleKey = keys[0];
          const titleValue = item[titleKey];

          const timestampKey = keys[1];
          const timestampValue = item[timestampKey];
          
          const contentKey = keys[2];
          const contentValue = item[contentKey];
          
          const title = typeof titleValue === 'string' ? titleValue : titleKey;
          const timestamp = typeof timestampValue === 'number' ? timestampValue : parseInt(timestampKey);
          const content = typeof contentValue === 'string' ? contentValue : contentKey;
          
          const slug = generateSlug(title);
          const date = new Date(timestamp).toISOString().split('T')[0];
          const author = extractAuthorFromTimestamp(timestamp);
          const description = extractDescription(content);
          const category = extractCategory(title, content);
          
          // 使用新的映射方法确定缩略图
          const matchingPhotoName = findMatchingPhotoName(title);
          let thumbnail = '/blog/photo/default.jpg'; // 默认图片
          
          if (matchingPhotoName) {
            // 检查文件是否存在，优先使用jpg格式
            thumbnail = `/blog/photo/${matchingPhotoName}.jpg`;
          } else {
            // 如果没有匹配，回退到原来的逻辑
            const words = splitTitleToWords(title);
            const prefixes = buildHyphenPrefixes(words, 3, Math.min(words.length, 16));
            const baseCandidates = prefixes.map(p => `/blog/photo/${p}`);
            thumbnail = `${baseCandidates[0]}.jpg`;
          }
          
          // 生成相关文章（简化处理）
          const relatedPosts = parsedPosts
            .filter(post => post.category === category && post.slug !== slug)
            .slice(0, 3)
            .map(post => post.slug);

          const parsedPost: ParsedBlogPost = {
            slug,
            title,
            date,
            timestamp,
            author,
            description,
            content,
            thumbnail,
            relatedPosts,
            category
          };

          parsedPosts.push(parsedPost);
        }
      } catch (error) {
        console.error(`Error parsing blog post at index ${index}:`, error);
      }
    });

    parsedPosts.sort((a, b) => b.timestamp - a.timestamp);
    
    // 更新相关文章
    parsedPosts.forEach(post => {
      post.relatedPosts = parsedPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3)
        .map(p => p.slug);
    });

    // 缓存解析结果
    cachedParsedPosts = parsedPosts;
    
    // 构建搜索索引
    searchIndex = parsedPosts.map(post => ({
      post,
      searchText: `${post.title} ${post.description}`.toLowerCase()
    }));
    
    return parsedPosts;
  } catch (error) {
    console.error('Error parsing blog data:', error);
    return [];
  }
}


export function getCategories(): string[] {
  // 如果有缓存，直接返回
  if (cachedCategories) {
    return cachedCategories;
  }
  
  const posts = parseJsonBlogData();
  const categories = Array.from(new Set(posts.map(post => post.category || 'general')));
  
  // 缓存结果
  cachedCategories = categories.sort();
  return cachedCategories;
}


export function getPostsByCategory(category: string): ParsedBlogPost[] {
  const posts = parseJsonBlogData();
  return posts.filter(post => post.category === category);
}

export function searchPosts(query: string): ParsedBlogPost[] {
  // 确保数据已解析和索引已构建
  parseJsonBlogData();
  
  if (!searchIndex) {
    return [];
  }
  
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) {
    return cachedParsedPosts || [];
  }
  
  // 使用预建的搜索索引进行快速搜索
  return searchIndex
    .filter(item => item.searchText.includes(searchTerm))
    .map(item => item.post);
}
