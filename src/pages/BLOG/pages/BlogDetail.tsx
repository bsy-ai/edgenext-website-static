import React from 'react';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPostBySlug, getRelatedPosts } from '../utils/blogUtils';
import NotFound from '../../NotFound';
import { PageTransition } from '../../../components/PageTransition';
import '../styles/blog-content.css';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  if (!slug) {
    return (
      <PageTransition>
        <NotFound />
      </PageTransition>
    );
  }

  const blogPost = getPostBySlug(slug);
  
  if (!blogPost) {
    return (
      <PageTransition>
        <NotFound />
      </PageTransition>
    );
  }

  const relatedPosts = getRelatedPosts(slug, blogPost.relatedPosts);

  // 返回博客列表页面，保持之前的浏览状态
  const handleBackToBlog = () => {
    navigate('/resources/blog');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* 返回按钮 */}
              <button
                onClick={handleBackToBlog}
                className="inline-flex items-center gap-2 text-[#0EB623] hover:text-[#0EA620] font-medium mb-6 transition-colors duration-300 group"
              >
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" size={20} />
                Back to Blog
              </button>
              
              <div className="text-[#0EB623] text-sm font-medium mb-4">{blogPost.date} • by {blogPost.author}</div>
              <h1 className="text-[32px] md:text-[48px] font-medium mb-6 leading-[1.2]">
                {blogPost.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              {/* Category and reading info */}
              {blogPost.category && (
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#0EB623]/10 text-[#0EB623] border border-[#0EB623]/20">
                    {blogPost.category.charAt(0).toUpperCase() + blogPost.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.ceil(blogPost.content.replace(/<[^>]*>/g, '').split(' ').length / 200)} min read
                  </span>
                </div>
              )}
              
              <article className="prose prose-lg max-w-none prose-p:mb-6 prose-headings:mt-8 prose-headings:mb-4 prose-a:text-[#0EB623] prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md">
                <div 
                  dangerouslySetInnerHTML={{ __html: blogPost.content }} 
                  className="blog-content"
                />
              </article>
              

            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <Link to={`/resources/blog/${post.slug}`} className="block">
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <time dateTime={post.date}>{post.date}</time>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                          {post.title}
                        </h3>
                        
                        <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                          Read more
                          <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Need protection against DDoS attacks?</h2>
                  <p className="text-white/90">
                    Explore EdgeNext's security solutions and protect your business from cyber threats.
                  </p>
                </div>
                <a 
                  href="/products/anti-ddos" 
                  className="px-8 py-4 bg-white text-[#0EB623] rounded-xl hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;