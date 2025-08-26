import { NewsArticle } from './newsDataParser';

// 格式化日期
export const formatDate = (dateString: string, locale: string = 'en-US'): string => {
  const date = new Date(dateString);
  
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// 格式化相对时间
export const formatRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Yesterday';
  } else if (diffInDays < 7) {
    return `${diffInDays} days ago`;
  } else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInDays / 365);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

// 截取文本
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  
  // 尝试在单词边界截断
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastSpace > maxLength * 0.8) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  return truncated + '...';
};

// 生成阅读时间文本
export const getReadTimeText = (minutes: number): string => {
  if (minutes <= 1) {
    return '1 min read';
  }
  return `${minutes} min read`;
};

// 排序新闻文章
export const sortNews = (
  articles: NewsArticle[], 
  sortBy: 'date_desc' | 'date_asc' | 'title' | 'category'
): NewsArticle[] => {
  return [...articles].sort((a, b) => {
    switch (sortBy) {
      case 'date_desc':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      case 'date_asc':
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
             case 'title':
         return a.title.localeCompare(b.title, 'en-US');
       case 'category':
         if (a.category === b.category) {
           return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
         }
         return a.category.localeCompare(b.category, 'en-US');
      default:
        return 0;
    }
  });
};

// 过滤新闻文章
export const filterNews = (
  articles: NewsArticle[],
  filters: {
    category?: string;
    search?: string;
    tags?: string[];
    dateRange?: {
      start: string;
      end: string;
    };
  }
): NewsArticle[] => {
  let filtered = [...articles];
  
  // 按分类过滤
  if (filters.category && filters.category !== 'All') {
    filtered = filtered.filter(article => article.category === filters.category);
  }
  
  // 按搜索关键词过滤
  if (filters.search) {
    const searchTerm = filters.search.toLowerCase();
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  // 按标签过滤
  if (filters.tags && filters.tags.length > 0) {
    filtered = filtered.filter(article =>
      filters.tags!.some(tag => article.tags.includes(tag))
    );
  }
  
  // 按日期范围过滤
  if (filters.dateRange) {
    const startDate = new Date(filters.dateRange.start);
    const endDate = new Date(filters.dateRange.end);
    filtered = filtered.filter(article => {
      const articleDate = new Date(article.publishedAt);
      return articleDate >= startDate && articleDate <= endDate;
    });
  }
  
  return filtered;
};

// 分页函数
export const paginateNews = (
  articles: NewsArticle[],
  page: number,
  itemsPerPage: number
): {
  items: NewsArticle[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} => {
  const totalItems = articles.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const items = articles.slice(startIndex, endIndex);
  
  return {
    items,
    totalPages,
    currentPage,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};

// 生成面包屑导航
export const generateBreadcrumbs = (
  article?: NewsArticle
): Array<{ label: string; href: string }> => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/newsroom' },
  ];
  
  if (article) {
    if (article.category !== 'Others') {
      breadcrumbs.push({
        label: article.category,
        href: `/newsroom?category=${encodeURIComponent(article.category)}`
      });
    }
    breadcrumbs.push({
      label: article.title,
      href: `/resources/news/${article.slug}`
    });
  }
  
  return breadcrumbs;
};

// 生成分享链接
export const generateShareUrls = (article: NewsArticle, baseUrl: string = 'https://www.edgenext.com') => {
  const url = `${baseUrl}/resources/news/${article.slug}`;
  const text = `${article.title} - EdgeNext`;
  
  return {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
         email: `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(`${article.description}\n\nRead more: ${url}`)}`,
    copy: url,
  };
};

// 获取分类颜色
export const getCategoryColor = (category: string): string => {
  const colorMap: Record<string, string> = {
    'Partnerships': '#10B981', // emerald
    'Infrastructure': '#3B82F6', // blue
    'Awards': '#F59E0B', // amber
    'Events': '#8B5CF6', // violet
    'Product': '#EF4444', // red
    'Acquisition': '#6366F1', // indigo
    'Team': '#EC4899', // pink
    'Technology': '#0EB623', // brand green
    'Others': '#6B7280', // gray
  };
  
  return colorMap[category] || colorMap['Others'];
};

// 获取分类图标
export const getCategoryIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    'Partnerships': '🤝',
    'Infrastructure': '🏗️',
    'Awards': '🏆',
    'Events': '🎪',
    'Product': '🚀',
    'Acquisition': '🔄',
    'Team': '👥',
    'Technology': '⚡',
    'Others': '📰',
  };
  
  return iconMap[category] || iconMap['Others'];
};

// 清理HTML内容用于搜索
export const cleanHtmlForSearch = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, '') // 移除HTML标签
    .replace(/&[^;]+;/g, ' ') // 移除HTML实体
    .replace(/\s+/g, ' ') // 合并多个空格
    .trim();
};

// 高亮搜索关键词
export const highlightSearchTerms = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) {
    return text;
  }
  
  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>');
};

// 获取统计信息
export const getNewsStats = (articles: NewsArticle[]) => {
  const totalArticles = articles.length;
  const categories = getAllCategories(articles);
  const totalReadTime = articles.reduce((sum, article) => sum + article.readTime, 0);
  const avgReadTime = Math.round(totalReadTime / totalArticles);
  
  const recentArticles = articles.filter(article => {
    const articleDate = new Date(article.publishedAt);
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return articleDate >= thirtyDaysAgo;
  }).length;
  
  return {
    totalArticles,
    categoriesCount: categories.length,
    avgReadTime,
    recentArticles,
    totalReadTime,
  };
};

// 获取所有分类及其文章数量
export const getAllCategories = (articles: NewsArticle[]): Array<{ name: string; count: number; color: string; icon: string }> => {
  const categoryCount: Record<string, number> = {};
  
  articles.forEach(article => {
    categoryCount[article.category] = (categoryCount[article.category] || 0) + 1;
  });
  
  return Object.entries(categoryCount).map(([name, count]) => ({
    name,
    count,
    color: getCategoryColor(name),
    icon: getCategoryIcon(name),
  })).sort((a, b) => b.count - a.count);
};
