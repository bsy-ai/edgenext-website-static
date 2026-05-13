import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Copy, ChevronUp, Twitter, Linkedin, Mail } from 'lucide-react';
import { getNewsBySlug, getRelatedNews } from '../utils/newsDataParser';
import { formatDate, formatRelativeTime, generateShareUrls, getCategoryColor, getCategoryIcon, getReadTimeText, generateBreadcrumbs } from '../utils/newsUtils';
import NotFound from '../../NotFound';
import { PageTransition } from '../../../components/PageTransition';
import '../styles/news-content.css';

const NewsDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  if (!slug) {
    return (
      <PageTransition>
        <NotFound />
      </PageTransition>
    );
  }

  const article = getNewsBySlug(slug);

  if (!article) {
    return (
      <PageTransition>
        <NotFound />
      </PageTransition>
    );
  }

  const relatedNews = getRelatedNews(article, 3);
  const shareUrls = generateShareUrls(article);
  const breadcrumbs = generateBreadcrumbs(article);

  // 滚动到顶部功能
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 复制链接功能
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrls.copy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  // 原生分享功能
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: shareUrls.copy,
        });
      } catch (err) {
        console.error('分享失败:', err);
      }
    } else {
      setShareMenuOpen(!shareMenuOpen);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <section className="pt-20 pb-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-gray-400">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-600 truncate max-w-[200px]">{crumb.label}</span>
                  ) : (
                    <Link
                      to={crumb.href}
                      className="text-[#0EB623] hover:text-[#0a9e1e] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative pb-12 overflow-hidden bg-gray-50">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                {/* Back Button */}
                <Link
                  to="/newsroom"
                  className="inline-flex items-center gap-2 text-[#0EB623] hover:text-[#0a9e1e] transition-colors mb-6"
                >
                  <ArrowLeft size={20} />
                  Back to News
                </Link>

                {/* Category and Date */}
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: getCategoryColor(article.category) }}
                  >
                    <span>{getCategoryIcon(article.category)}</span>
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-[32px] md:text-[48px] font-medium mb-6 leading-[1.2] w-full text-gray-900">
                  {article.title}
                </h1>

                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <time dateTime={article.publishedAt}>
                      {formatDate(article.publishedAt)}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{getReadTimeText(article.readTime)}</span>
                  </div>
                </div>

                {/* Tags */}
                {article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Share Button */}
                <div className="relative">
                  <button
                    onClick={handleNativeShare}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0EB623] text-white rounded-lg hover:bg-[#0a9e1e] transition-colors"
                  >
                    <Share2 size={16} />
                    Share Article
                  </button>

                  {/* Share Menu */}
                  {shareMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-10 min-w-[200px]">
                      <div className="flex flex-col gap-2">
                        <a
                          href={shareUrls.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Twitter size={16} className="text-blue-500" />
                          Twitter
                        </a>
                        <a
                          href={shareUrls.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Linkedin size={16} className="text-blue-700" />
                          LinkedIn
                        </a>
                        <a
                          href={shareUrls.email}
                          className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Mail size={16} className="text-gray-600" />
                          Email
                        </a>
                        <button
                          onClick={copyToClipboard}
                          className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Copy size={16} className="text-gray-600" />
                          {copySuccess ? 'Copied!' : 'Copy Link'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-[200px] md:h-[300px] object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/newsphoto/EdgeNext-National-Pulse.jpg';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="news-content">
              <div
                className="max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </div>
        </section>

        {/* Article Footer */}
        <section className="py-8 bg-gray-50 border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="text-sm text-gray-600">
                  Published: {formatDate(article.publishedAt)} • {formatRelativeTime(article.publishedAt)}
                </p>
                <p className="text-sm text-gray-600">
                  Author: {article.author}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Share:</span>
                <div className="flex gap-2">
                  <a
                    href={shareUrls.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} className="text-blue-500" />
                  </a>
                  <a
                    href={shareUrls.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} className="text-blue-700" />
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Copy link"
                  >
                    <Copy size={16} className={copySuccess ? 'text-green-500' : 'text-gray-600'} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedNews.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 text-center">
                Related Articles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedNews.map((relatedArticle) => (
                  <article
                    key={relatedArticle.id}
                    className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
                  >
                    <Link to={`/resources/news/${relatedArticle.slug}`}>
                      <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                        <img
                          src={relatedArticle.thumbnail}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/newsphoto/EdgeNext-National-Pulse.jpg';
                          }}
                        />
                        <div
                          className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: getCategoryColor(relatedArticle.category) }}
                        >
                          {relatedArticle.category}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="text-xs text-gray-500 mb-2">
                          {formatRelativeTime(relatedArticle.publishedAt)}
                        </div>

                        <h3 className="font-medium text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300 line-clamp-2 mb-2">
                          {relatedArticle.title}
                        </h3>

                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedArticle.description}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <section className="py-16 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Learn more about EdgeNext solutions</h2>
                <p className="text-white/90">
                  Explore our products and services to find the best solution for your business.
                </p>
              </div>
              <a
                href="/contact-us"
                className="px-8 py-4 bg-white text-[#0EB623] rounded-xl hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#0EB623] text-white rounded-full shadow-lg hover:bg-[#0a9e1e] transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}

      {/* Click outside to close share menu */}
      {shareMenuOpen && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShareMenuOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default NewsDetail;
