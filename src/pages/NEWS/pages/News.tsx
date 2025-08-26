import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ArrowRight, Search, ChevronLeft, ChevronRight, Filter, Calendar, Tag } from 'lucide-react';
import { getAllNews } from '../utils/newsDataParser';
import { formatRelativeTime, sortNews, filterNews, paginateNews, getCategoryColor, getCategoryIcon, getReadTimeText, getAllCategories } from '../utils/newsUtils';

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'date_desc' | 'date_asc' | 'title' | 'category'>('date_desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 9;

  // 获取所有新闻和分类
  const allNews = getAllNews();
  const categories = getAllCategories(allNews);

  // 过滤和排序新闻
  const filteredAndSortedNews = useMemo(() => {
    let filtered = filterNews(allNews, {
      category: selectedCategory,
      search: searchTerm,
    });
    
    return sortNews(filtered, sortBy);
  }, [allNews, selectedCategory, searchTerm, sortBy]);

  // 分页处理
  const paginationData = useMemo(() => {
    return paginateNews(filteredAndSortedNews, currentPage, itemsPerPage);
  }, [filteredAndSortedNews, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (sort: typeof sortBy) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortBy('date_desc');
    setCurrentPage(1);
  };

  // 生成分页数字
  const renderPaginationNumbers = () => {
    const { totalPages, currentPage: page } = paginationData;
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', page - 1, page, page + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[56px] font-medium mb-6 leading-[1.1] tracking-tight text-gray-900">
                News and Insights
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                The latest updates, partnerships, and product releases from EdgeNext.
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
                <div className="relative flex-1 w-full max-w-lg">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search news and insights..."
                    value={searchTerm}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none"
                    aria-label="Search news articles"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap justify-center">
                  <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value as typeof sortBy)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none bg-white"
                    aria-label="Sort articles by"
                  >
                    <option value="date_desc">Most recent</option>
                    <option value="date_asc">Oldest first</option>
                    <option value="title">Title</option>
                    <option value="category">Category</option>
                  </select>
                  
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:border-[#0EB623] transition-colors bg-white"
                    aria-label="Show filters"
                  >
                    <Filter size={20} />
                    Filters
                  </button>
                </div>
              </div>

              {/* Category Filter (展开时显示) */}
              {showFilters && (
                <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200 max-w-4xl mx-auto">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      onClick={() => handleCategoryChange('All')}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === 'All'
                          ? 'bg-[#0EB623] text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      All ({allNews.length})
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => handleCategoryChange(category.name)}
                        className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          selectedCategory === category.name
                            ? 'text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={{
                          backgroundColor: selectedCategory === category.name ? category.color : undefined
                        }}
                      >
                        <span>{category.icon}</span>
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                  
                  {(searchTerm || selectedCategory !== 'All') && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <button
                        onClick={clearFilters}
                        className="text-sm text-gray-600 hover:text-[#0EB623] transition-colors"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-[#0EB623]">{allNews.length}</div>
                <div className="text-sm text-gray-600">articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0EB623]">{categories.length}</div>
                <div className="text-sm text-gray-600">categories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0EB623]">{filteredAndSortedNews.length}</div>
                <div className="text-sm text-gray-600">results</div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {paginationData.items.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse other categories</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-[#0EB623] text-white rounded-xl hover:bg-[#0a9e1e] transition-colors"
                >
                  View all news
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {paginationData.items.map((article) => (
                    <article 
                      key={article.id}
                      className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                    >
                      <Link to={`/resources/news/${article.slug}`} className="block">
                        <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                          <img 
                            src={article.thumbnail}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/newsphoto/EdgeNext-National-Pulse.jpg';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Category Badge */}
                          <div 
                            className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1"
                            style={{ backgroundColor: getCategoryColor(article.category) }}
                          >
                            <span>{getCategoryIcon(article.category)}</span>
                            {article.category}
                          </div>
                          
                          {/* Featured Badge */}
                          {article.featured && (
                            <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Featured
                            </div>
                          )}
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Calendar size={14} />
                            <time dateTime={article.publishedAt}>
                              {formatRelativeTime(article.publishedAt)}
                            </time>
                            <span>•</span>
                            <span>{article.author}</span>
                            <span>•</span>
                            <span>{getReadTimeText(article.readTime)}</span>
                          </div>
                          
                          <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300 line-clamp-2">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                            {article.description}
                          </p>
                          
                          {/* Tags */}
                          {article.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {article.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                                >
                                  <Tag size={10} />
                                  {tag}
                                </span>
                              ))}
                              {article.tags.length > 3 && (
                                <span className="text-xs text-gray-400">+{article.tags.length - 3}</span>
                              )}
                            </div>
                          )}
                          
                          <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                            Read more
                            <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {paginationData.totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handlePageChange(paginationData.currentPage - 1)}
                      disabled={!paginationData.hasPrevPage}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#0EB623] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={20} />
                      Previous
                    </button>

                    <div className="flex gap-1">
                      {renderPaginationNumbers().map((page, index) => (
                        <React.Fragment key={index}>
                          {page === '...' ? (
                            <span className="px-3 py-2 text-gray-400">...</span>
                          ) : (
                            <button
                              onClick={() => handlePageChange(page as number)}
                              className={`px-3 py-2 rounded-lg transition-colors duration-200 ${
                                paginationData.currentPage === page
                                  ? 'bg-[#0EB623] text-white'
                                  : 'text-gray-600 hover:text-[#0EB623] hover:bg-gray-50'
                              }`}
                              aria-label={`Go to page ${page}`}
                              aria-current={paginationData.currentPage === page ? 'page' : undefined}
                            >
                              {page}
                            </button>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <button
                      onClick={() => handlePageChange(paginationData.currentPage + 1)}
                      disabled={!paginationData.hasNextPage}
                      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#0EB623] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      aria-label="Next page"
                    >
                      Next
                      <ChevronRight size={20} />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Start your free trial</h2>
                <p className="text-white/90">
                  Join thousands of companies already growing with EdgeNext.
                </p>
              </div>
              <a 
                href="/contact_us" 
                className="px-8 py-4 bg-white text-[#0EB623] rounded-xl hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
