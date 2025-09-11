import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import caseStudies from '../data/caseStudies';

const CaseStudies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Most recent');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredAndSortedItems = useMemo(() => {
    let filtered = caseStudies.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.overview.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy === 'Most recent') {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === 'Oldest first') {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    return filtered;
  }, [searchTerm, sortBy]);

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
                Case Studies
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Discover how leading companies achieve exceptional results with EdgeNext solutions.
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none"
                    aria-label="Search case studies"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none bg-white"
                  aria-label="Sort case studies by"
                >
                  <option value="Most recent">Most recent</option>
                  <option value="Oldest first">Oldest first</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {currentItems.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No case studies found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentItems.map((item, index) => (
                  <article 
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  >
                    <Link to={`/case-study/${item.slug}`} className="block">
                      <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                        <img 
                          src={item.slug === "beijing-2022-winter-olympic-games-cdn-streaming-solution" ? "/Beijing2022WinterOlympicGamesCDNStreamingSolution.png" : item.slug === "dynamic-acceleration-solution-for-top-e-commerce-in-china" ? "/Dynamic Acceleration case study.png" : item.slug === "global-delivery-solution-for-top-photo-beauty-app-in-china" ? "/GlobalDeliverySolutionforTopPhotoBeautyAppinChina.jpg" : item.slug === "media-on-demand-solution-for-top-global-short-video-platform" ? "/MediaonDemandSolutionforTopGlobalShortVideoPlatform.jpg" : item.slug === "cdn-gaming-solution-for-us-top-gaming-company" ? "/CDNGamingSolutionforUSTopGamingCompany.jpg" : item.slug === "global-delivery-top-ecommerce-in-sea" ? "/GlobalDeliveryTopEcommerceinSEA.jpg" : item.slug === "cctv-cdn-streaming-solution" ? "/CCTVCDN StreamingSolution.png" : item.slug === "giant-network-cdn-gaming-solution" ? "/GiantNetworkCDNGamingSolution.jpg" : (item.imageUrl || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <time dateTime={item.date}>{formatDate(item.date)}</time>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                          {item.overview.substring(0, 150)}...
                        </p>
                        
                        <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                          Read more
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

export default CaseStudies;