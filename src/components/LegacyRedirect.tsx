import { useParams, Navigate } from 'react-router-dom';
import { getAllPostSlugs } from '../pages/BLOG/utils/blogUtils';
import { getAllNews } from '../pages/NEWS/utils/newsDataParser';

/**
 * 处理旧版 URL 重定向
 * 旧格式: /<slug>/
 * 新格式: /resources/blog/<slug>/ 或 /resources/news/<slug>/
 */
export const LegacyRedirect = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }
  
  const blogSlugs = getAllPostSlugs();
  if (blogSlugs.includes(slug)) {
    return <Navigate to={`/resources/blog/${slug}`} replace />;
  }

  const allNews = getAllNews();
  const newsSlug = allNews.find(article => article.slug === slug);
  if (newsSlug) {
    return <Navigate to={`/resources/news/${slug}`} replace />;
  }

  return <Navigate to="/404" replace />;
};

