import React from 'react';
import { ArrowRight, Newspaper, ArrowUpRight } from 'lucide-react';

export const TechnologyAdvantage: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Looking for <span className="text-[#0EB623]">more?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Newspaper className="text-[#0EB623]" size={24} />
            </div>
            <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
            <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">Why Are AI-Powered CDN Platforms the Future of Video Streaming?</h3>
            <p className="text-gray-600 mb-6">
              Discover how artificial intelligence is revolutionizing content delivery networks and shaping the future of streaming services.
            </p>
            <a href="/resources/blog/why-are-ai-powered-cdn-platforms-the-future-of-video-streaming-and-ott-services-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
              Read the blog <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
            </a>
          </div>

          <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Newspaper className="text-[#0EB623]" size={24} />
            </div>
            <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
            <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">How a Leading Gaming Company Accelerated Global Downloads</h3>
            <p className="text-gray-600 mb-6">
              Learn how we helped a major gaming company optimize their content delivery for millions of players worldwide.
            </p>
            <a href="/case-study/cdn-gaming-solution-for-us-top-gaming-company" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
              Read the case study <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
            </a>
          </div>

          <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
            <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Newspaper className="text-[#0EB623]" size={24} />
            </div>
            <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
            <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">Transforming E-Commerce in Southeast Asia</h3>
            <p className="text-gray-600 mb-6">
              Discover how we helped a leading e-commerce platform improve performance and user experience across Southeast Asia.
            </p>
            <a href="/case-study/global-delivery-top-ecommerce-in-sea" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
              Read the case study <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/resources/blog" 
            className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors duration-300"
          >
            View All Resources
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};