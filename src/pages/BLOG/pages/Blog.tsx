import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ArrowRight, Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { getAllPosts, getAllCategories, searchBlogPosts } from '../utils/blogUtils';

interface BlogItem {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  thumbnail: string;
  thumbnailCandidates?: string[];
  category?: string;
}

const Blog: React.FC = () => {
  const isBrowser = typeof sessionStorage !== 'undefined';

  // 从sessionStorage恢复状态，如果没有则使用默认值（SSR 环境下跳过）
  const [searchTerm, setSearchTerm] = useState(() => {
    return isBrowser ? (sessionStorage.getItem('blogSearchTerm') || '') : '';
  });
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [sortBy, setSortBy] = useState(() => {
    return isBrowser ? (sessionStorage.getItem('blogSortBy') || 'Most recent') : 'Most recent';
  });
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return isBrowser ? (sessionStorage.getItem('blogSelectedCategory') || 'all') : 'all';
  });
  const [currentPage, setCurrentPage] = useState(() => {
    if (!isBrowser) return 1;
    const savedPage = sessionStorage.getItem('blogCurrentPage');
    return savedPage ? parseInt(savedPage) : 1;
  });
  const itemsPerPage = 9;

  // 保存状态到sessionStorage
  useEffect(() => {
    sessionStorage.setItem('blogSearchTerm', searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    sessionStorage.setItem('blogSortBy', sortBy);
  }, [sortBy]);

  useEffect(() => {
    sessionStorage.setItem('blogSelectedCategory', selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    sessionStorage.setItem('blogCurrentPage', currentPage.toString());
  }, [currentPage]);

  // 防抖搜索逻辑
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms 防抖延迟

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // 当筛选条件改变时，重置到第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, selectedCategory, sortBy]);

  // 页面加载时恢复状态
  useEffect(() => {
    // 从sessionStorage恢复状态
    const savedSearchTerm = sessionStorage.getItem('blogSearchTerm');
    const savedSortBy = sessionStorage.getItem('blogSortBy');
    const savedCategory = sessionStorage.getItem('blogSelectedCategory');
    const savedPage = sessionStorage.getItem('blogCurrentPage');
    
    if (savedSearchTerm !== null) setSearchTerm(savedSearchTerm);
    if (savedSortBy !== null) setSortBy(savedSortBy);
    if (savedCategory !== null) setSelectedCategory(savedCategory);
    if (savedPage !== null) setCurrentPage(parseInt(savedPage));
  }, []);

  // 获取所有分类（缓存）
  const categories = useMemo(() => getAllCategories(), []);

  // 优化的数据获取和过滤逻辑
  const filteredAndSortedItems = useMemo(() => {
    let filtered: BlogItem[];

    // 如果有搜索词，使用优化的搜索函数
    if (debouncedSearchTerm.trim()) {
      const searchResults = searchBlogPosts(debouncedSearchTerm);
      filtered = searchResults.map(post => ({
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        slug: post.slug,
        thumbnail: post.thumbnail,
        thumbnailCandidates: post.thumbnailCandidates,
        category: post.category
      }));
    } else {
      // 没有搜索词时，获取所有文章
      const allPosts = getAllPosts();
      filtered = allPosts.map(post => ({
        title: post.title,
        description: post.description,
        date: post.date,
        author: post.author,
        slug: post.slug,
        thumbnail: post.thumbnail,
        thumbnailCandidates: post.thumbnailCandidates,
        category: post.category
      }));
    }

    // 按分类筛选
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // 排序
    if (sortBy === 'Most recent') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'Oldest first') {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return filtered;
  }, [debouncedSearchTerm, sortBy, selectedCategory]);

  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredAndSortedItems.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 重置所有图片的加载状态，确保分页后图片能正确加载
    setTimeout(() => {
      const images = document.querySelectorAll('img[data-base]');
      images.forEach(img => {
        if (img instanceof HTMLImageElement) {
          delete (img as any)._initDone;
          delete (img as any)._baseCandidates;
          delete (img as any)._extCandidates;
          delete (img as any)._baseIndex;
          delete (img as any)._extIndex;
          // 清除所有自定义状态
        }
      });
    }, 100);
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
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
                Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Expert insights, technical deep-dives, and industry analysis from the EdgeNext team.
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
                <div className="relative flex-1 w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none"
                    aria-label="Search blog posts"
                  />
                </div>
                
                <div className="flex gap-3">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-8 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none bg-white appearance-none cursor-pointer"
                      aria-label="Filter by category"
                    >
                      <option value="all">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none bg-white"
                    aria-label="Sort posts by"
                  >
                    <option value="Most recent">Most recent</option>
                    <option value="Oldest first">Oldest first</option>
                  </select>
                </div>
              </div>
              
              {/* Results count and active filters */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {selectedCategory !== 'all' && (
                    <span className="ml-2">
                      in <span className="font-medium text-[#0EB623]">{selectedCategory}</span>
                    </span>
                  )}
                  {searchTerm && (
                    <span className="ml-2">
                      for "<span className="font-medium text-[#0EB623]">{searchTerm}</span>"
                    </span>
                  )}
                </p>
                {(selectedCategory !== 'all' || searchTerm) && (
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchTerm('');
                      setCurrentPage(1);
                    }}
                    className="mt-2 text-sm text-[#0EB623] hover:underline"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {currentItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No blog posts found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentItems.map((item) => (
                  <article 
                    key={item.slug}
                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  > 
                    <Link to={`/resources/blog/${item.slug}`} className="block">
                      <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                        <img 
                          src={item.thumbnail || "/dynamic-acceleration.png"}
                          alt="Blog post thumbnail"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            if (!(el as any)._initDone) {
                              // 优先使用数据层给出的 thumbnailCandidates（精确 jpg/png/webp 候选）
                              // 找不到时才走旧的拆词穷举逻辑（兜底）
                              let allCandidates: string[];
                              if (item.thumbnailCandidates && item.thumbnailCandidates.length > 0) {
                                allCandidates = item.thumbnailCandidates;
                              } else {
                                const bases: string[] = [];
                                const current = item.thumbnail || "/blogphoto/placeholder";
                                const noExt = current.replace(/\.[^.]+$/, '');
                                const parts = noExt.replace(/^.*\/blogphoto\//, '').split('-');
                                const minLen = 3;
                                const prefixList: string[] = [];
                                for (let len = parts.length; len >= minLen; len--) {
                                  prefixList.push(parts.slice(0, len).join('-'));
                                }
                                for (const p of prefixList) {
                                  bases.push(`/blogphoto/${p}`);
                                  bases.push(`/blogphoto/${p.toLowerCase()}`);
                                }
                                const exts = ['jpg', 'png', 'webp'];
                                allCandidates = bases.flatMap(b => exts.map(ext => `${b}.${ext}`));
                              }
                              (el as any)._candidates = allCandidates;
                              (el as any)._candidateIndex = 0;
                              (el as any)._initDone = true;
                            }

                            const cands = (el as any)._candidates as string[];
                            const idx = (el as any)._candidateIndex as number;

                            if (idx >= cands.length) {
                              el.src = "/dynamic-acceleration.png";
                              return;
                            }

                            (el as any)._candidateIndex = idx + 1;
                            el.src = cands[idx];
                          }}
                          data-base={item.thumbnail ? item.thumbnail.replace(/\.[^.]+$/, '') : undefined}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <time dateTime={item.date}>{formatDate(item.date)}</time>
                            <span>•</span>
                            <span>by {item.author}</span>
                          </div>
                          {item.category && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0EB623]/10 text-[#0EB623] border border-[#0EB623]/20">
                              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                          Read article
                          <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
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
                            currentPage === page
                              ? 'bg-[#0EB623] text-white'
                              : 'text-gray-600 hover:text-[#0EB623] hover:bg-gray-50'
                          }`}
                          aria-label={`Go to page ${page}`}
                          aria-current={currentPage === page ? 'page' : undefined}
                        >
                          {page}
                        </button>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#0EB623] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  aria-label="Next page"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
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

export default Blog;