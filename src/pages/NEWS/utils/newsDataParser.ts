import newsData from '../content/newsroom.json';

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  tags: string[];
  thumbnail: string;
  readTime: number;
  featured: boolean;
}

// 新闻分类关键词映射
const categories = {
  'Partnerships': ['partnership', 'partner', 'collaborate', 'announce', 'strategic', 'joint venture', 'memorandum'],
  'Infrastructure': ['nodes', 'infrastructure', 'pop', 'servers', 'expansion', 'network', 'edge cloud'],
  'Awards': ['award', 'certification', 'recognition', 'top', 'best', 'included', 'cmmi', 'wins'],
  'Events': ['attend', 'event', 'conference', 'expo', 'team', 'meet', 'happy hour', 'vivatech'],
  'Product': ['launch', 'platform', 'new', 'upgrade', 'features'],
  'Acquisition': ['acquisition', 'completes', 'merger'],
  'Team': ['team', 'office', 'member', 'staff'],
  'Technology': ['technology', 'innovation', 'solution', 'service', 'cloud', 'cdn'],
};

// 根据内容自动分类
function categorizeArticle(title: string, content: string): string {
  const text = (title + ' ' + content).toLowerCase();
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => text.includes(keyword))) {
      return category;
    }
  }
  
  return 'Others';
}

// 根据分类选择缩略图
function selectThumbnail(title: string, category: string): string {
  const titleLower = title.toLowerCase();
  
  // 精确匹配特定文章
  if (titleLower.includes('chatlabs') && titleLower.includes('partner')) {
    return '/newsphoto/Edgenext-and-chatlabs.png';
  }
  if (titleLower.includes('edge cloud servers') && titleLower.includes('12 countries')) {
    return '/newsphoto/Edge-CLoud-Servers-Expansionjpg.jpg';
  }
  if (titleLower.includes('national pulse')) {
    return '/newsphoto/EdgeNext-National-Pulse.jpg';
  }
  if (titleLower.includes('commercis')) {
    return '/newsphoto/EdgeNext-Commercis.jpeg';
  }
  if (titleLower.includes('aj cloud') || (titleLower.includes('ajlan') && titleLower.includes('launch'))) {
    return '/newsphoto/AJ-Cloud-PR-Photo.jpg';
  }
  if (titleLower.includes('ajlan') && titleLower.includes('joint venture')) {
    return '/newsphoto/Edgenext-Ajilan-bros-holding-group-ink.jpg';
  }
  if (titleLower.includes('safenames')) {
    return '/newsphoto/EdgeNext-and-Safenames-1.png';
  }
  if (titleLower.includes('new self-built pops')) {
    return '/newsphoto/New-Pops.jpg';
  }
  if (titleLower.includes('adtiming')) {
    return '/newsphoto/Ad-Timing.jpg';
  }
  if (titleLower.includes('top cloud computing')) {
    return '/newsphoto/Top-cloud-computing-service.png';
  }
  if (titleLower.includes('jet-stream') || titleLower.includes('epeak')) {
    return '/newsphoto/EdgeNext-JetStream-EPEAK-live-streaming-EO-China.jpg';
  }
  if (titleLower.includes('commercenext ecommerce')) {
    return '/newsphoto/Edgenext-in-commerceNext.jpeg';
  }
  if (titleLower.includes('ddos protection')) {
    return '/newsphoto/Top-DDOS-protection.png';
  }
  if (titleLower.includes('streaming media') && titleLower.includes('trendsetting')) {
    return '/newsphoto/Edgenext-unified-global-edge-cloud-platform.jpg';
  }
  if (titleLower.includes('vivatech') || titleLower.includes('happy hour')) {
    return '/newsphoto/happyhour.jpeg';
  }
  if (titleLower.includes('streaming media east')) {
    return '/newsphoto/EdgeNext-attended-Streaming-Media-East-2023.jpeg';
  }
  if (titleLower.includes('new team member') || titleLower.includes('edgey')) {
    return '/newsphoto/Simple-New-Team-Member-Announcement-Instagram-Post.png';
  }
  if (titleLower.includes('apac team') && titleLower.includes('office')) {
    return '/newsphoto/EdgeNext-APAC-team-has-a-new-office.jpg';
  }
  if (titleLower.includes('sigma eurasia dubai')) {
    return '/newsphoto/Edgnext-attended-sigma.jpeg';
  }
  if (titleLower.includes('5 best streaming video cdn')) {
    return '/newsphoto/EdgeNext-5-best-streaming-video-cdn-by-geekflare.png';
  }
  if (titleLower.includes('seven best cdn providers')) {
    return '/newsphoto/EdgeNext-wins-the-seven-best-CDN-providers-in-2023-awarded-by-Guru99.png';
  }
  if (titleLower.includes('ice london')) {
    return '/newsphoto/EdgeNext-first-day-at-ICE-London-2023.jpg';
  }
  if (titleLower.includes('mcit') || titleLower.includes('leap')) {
    return '/newsphoto/EdgeNext-team-meets-MCIT-at-LEAP-2023.png';
  }
  if (titleLower.includes('chinacache') || titleLower.includes('acquisition')) {
    return '/newsphoto/Edgenext-completes-acquisition.png';
  }
  if (titleLower.includes('cmmi')) {
    return '/newsphoto/Edfbext-has-been-awarded-prestigious-certification.png';
  }
  if (titleLower.includes('ptc')) {
    return '/newsphoto/EdgeNext-at-PTC-2023-Honolulu.jpg';
  }
  if (titleLower.includes('tunis') || titleLower.includes('tunisia')) {
    return '/newsphoto/EdgeNext-new-self-built-pop-in-tunis-tunisia.png';
  }
  if (titleLower.includes('smw')) {
    return '/newsphoto/EdgeNext-team-at-SMW-2022.jpeg';
  }
  if (titleLower.includes('playcon')) {
    return '/newsphoto/EdgeNext-at-Playcon-2022.jpeg';
  }
  if (titleLower.includes('memorandum') && titleLower.includes('saudi')) {
    return '/newsphoto/EdgeNext-MoC-with-Ajlan-Bros-and-Aofei-for-digital-infrastructure-in-saudi-arabia.png';
  }
  
  // 基于分类的默认缩略图
  switch (category) {
    case 'Partnerships':
      return '/newsphoto/Edgenext-and-chatlabs.png';
    case 'Infrastructure':
      return '/newsphoto/New-Pops.jpg';
    case 'Awards':
      return '/newsphoto/Top-cloud-computing-service.png';
    case 'Events':
      return '/newsphoto/EdgeNext-attended-Streaming-Media-East-2023.jpeg';
    case 'Product':
      return '/newsphoto/Edgenext-unified-global-edge-cloud-platform.jpg';
    case 'Acquisition':
      return '/newsphoto/Edgenext-completes-acquisition.png';
    case 'Team':
      return '/newsphoto/EdgeNext-APAC-team-has-a-new-office.jpg';
    default:
      return '/newsphoto/EdgeNext-National-Pulse.jpg';
  }
}

// 生成文章摘要
function generateDescription(content: string): string {
  // 移除HTML标签
  const cleanText = content.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ');
  
  // 提取前150个字符作为描述
  if (cleanText.length <= 150) {
    return cleanText.trim();
  }
  
  // 尝试在句号处截断
  const sentences = cleanText.split(/[.。]/);
  let description = '';
  
  for (const sentence of sentences) {
    if ((description + sentence).length > 150) {
      break;
    }
    description += sentence + '。';
  }
  
  return description.trim() || cleanText.substring(0, 150).trim() + '...';
}

// 生成URL友好的slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 移除特殊字符
    .replace(/\s+/g, '-') // 空格替换为连字符
    .replace(/-+/g, '-') // 多个连字符合并为一个
    .replace(/^-+|-+$/g, ''); // 移除首尾连字符
}

// 估算阅读时间（分钟）
function calculateReadTime(content: string): number {
  const cleanText = content.replace(/<[^>]*>/g, '');
  const wordCount = cleanText.split(/\s+/).length;
  const readingSpeed = 200; // 每分钟阅读200词
  return Math.max(1, Math.ceil(wordCount / readingSpeed));
}

// 生成标签
function generateTags(title: string, content: string, category: string): string[] {
  const text = (title + ' ' + content).toLowerCase();
  const tags: string[] = [category];
  
  // 技术相关标签
  if (text.includes('cdn')) tags.push('CDN');
  if (text.includes('cloud')) tags.push('Cloud');
  if (text.includes('edge')) tags.push('Edge Computing');
  if (text.includes('security')) tags.push('Security');
  if (text.includes('streaming')) tags.push('Streaming');
  if (text.includes('gaming')) tags.push('Gaming');
  if (text.includes('ddos')) tags.push('DDoS Protection');
  
  // 地区相关标签
  if (text.includes('china')) tags.push('China');
  if (text.includes('mena')) tags.push('MENA');
  if (text.includes('africa')) tags.push('Africa');
  if (text.includes('asia')) tags.push('Asia');
  if (text.includes('dubai')) tags.push('Dubai');
  if (text.includes('saudi')) tags.push('Saudi Arabia');
  
  return [...new Set(tags)]; // 去重
}

// 解析新闻数据
export function parseNewsData(): NewsArticle[] {
  return newsData.map((item, index) => {
    const [title, dateString, content] = item;
    const category = categorizeArticle(title, content);
    const slug = generateSlug(title);
    const description = generateDescription(content);
    const thumbnail = selectThumbnail(title, category);
    const readTime = calculateReadTime(content);
    const tags = generateTags(title, content, category);
    
    // 将日期字符串转换为ISO格式
    const publishedAt = new Date(dateString).toISOString();
    
    return {
      id: `news-${index + 1}`,
      title,
      slug,
      description,
      content,
      publishedAt,
      author: 'EdgeNext Team',
      category,
      tags,
      thumbnail,
      readTime,
      featured: index < 3, // 前3篇设为精选
    };
  }).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// 获取所有新闻文章
export function getAllNews(): NewsArticle[] {
  return parseNewsData();
}

// 根据slug获取文章
export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return getAllNews().find(article => article.slug === slug);
}

// 获取所有分类
export function getAllCategories(): string[] {
  const news = getAllNews();
  const categorySet = new Set(news.map(article => article.category));
  return Array.from(categorySet);
}

// 根据分类获取文章
export function getNewsByCategory(category: string): NewsArticle[] {
  return getAllNews().filter(article => article.category === category);
}

// 搜索新闻
export function searchNews(query: string): NewsArticle[] {
  const lowercaseQuery = query.toLowerCase();
  return getAllNews().filter(article =>
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.description.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// 获取精选新闻
export function getFeaturedNews(): NewsArticle[] {
  return getAllNews().filter(article => article.featured);
}

// 获取相关文章
export function getRelatedNews(currentArticle: NewsArticle, limit: number = 3): NewsArticle[] {
  const allNews = getAllNews();
  
  // 过滤掉当前文章
  const otherNews = allNews.filter(article => article.id !== currentArticle.id);
  
  // 优先显示同分类的文章
  const sameCategoryNews = otherNews.filter(article => article.category === currentArticle.category);
  
  // 如果同分类文章不够，补充其他文章
  const related = sameCategoryNews.slice(0, limit);
  if (related.length < limit) {
    const remaining = limit - related.length;
    const otherCategoryNews = otherNews
      .filter(article => article.category !== currentArticle.category)
      .slice(0, remaining);
    related.push(...otherCategoryNews);
  }
  
  return related;
}
