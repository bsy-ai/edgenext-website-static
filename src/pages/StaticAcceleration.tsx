import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Zap, Globe, Network, Shield, Clock, Database, Settings, ShoppingCart, Gamepad2, Building2, Check, ArrowUpRight, Image, FileText, Video, Smartphone, Download, RefreshCw } from 'lucide-react';

const StaticAcceleration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('website');
  
  const useCases = {
    website: {
      title: 'Website Acceleration',
      description: 'Use cases: High-traffic portals, e-commerce platforms, and corporate websites that demand fast load times and stability—especially during peak events or geo-distributed access surges.',
      solutions: [
        'Edge caching to reduce latency',
        'Gzip compression to speed up page loads',
        'TLS acceleration for faster secure delivery'
      ]
    },
    vod: {
      title: 'Video-on-Demand Acceleration',
      description: 'Use cases: Educational platforms, video streaming services, and game video platforms that serve distributed audiences and require smooth playback, fast start times, and minimal buffering.',
      solutions: [
        'Content slicing and regional edge caching',
        'Parallel scheduling to reduce buffering',
        'High cache hit ratio for smoother playback'
      ]
    },
    files: {
      title: 'Large File Downloads',
      description: 'Use cases: Gaming, software, and IoT vendors distributing large files like patches or firmware images, facing peak-time slowdowns and delivery instability.',
      solutions: [
        'Edge caching + concurrency optimization',
        'Resume support for interrupted downloads',
        'Multi-source fallback for stability'
      ]
    },
    unified: {
      title: 'Integrated Content Delivery',
      description: 'Use cases: Modern portals often host mixed content like web pages, videos, downloads, requiring unified distribution and performance consistency.',
      solutions: [
        'Multi-dimensional caching strategy',
        'Automated delivery orchestration',
        'Improved consistency and availability'
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #F0F8F0 0%, #E8F0FF 50%, #F0F0FF 100%)'
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-gray-900">EdgeNext Static </span>
                <br />
                <span className="animated-gradient-text">Acceleration</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
                EdgeNext Static Acceleration delivers high-performance, low-latency content distribution for websites, apps, video-on-demand, and large file downloads. Built for scale, security, and real-time efficiency.
              </p>
              <a 
                href="/contact_us" 
                className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
              >
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </a>
            </div>
          </div>
        </section>


        {/* Built to Deliver More Than Speed */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Product Benefits</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Built to Deliver <span className="text-[#0EB623]">More Than Speed</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">High Performance</h3>
                      <p className="text-gray-600">
                        Powered by EdgeNext's TUENNA transmission algorithm and DOLFIN smart scheduling, enabling millisecond-level response and stable global delivery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Versatile Functions</h3>
                      <p className="text-gray-600">
                        Supports HTTPS, HTTP/3, video slicing, second-level cache purging, intelligent compression, origin backup, and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Safe & Reliable</h3>
                      <p className="text-gray-600">
                        Hotlink protection, access control, and origin authentication provide comprehensive content security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/static-acceleration.jpg"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="order-2 lg:order-1">
                <img 
                  src="/static-acceleration-2.png"
                  alt="Performance optimization"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Intelligent Monitoring</h3>
                      <p className="text-gray-600">
                        24/7 network monitoring and multi-layer alerts ensure high availability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Easy Deployment</h3>
                      <p className="text-gray-600">
                        Standardized integration compatible with object storage platforms and major cloud in the market.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Reduced Origin Load</h3>
                      <p className="text-gray-600">
                        Smart edge caching distributes traffic, enhancing system stability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Acceleration for Diverse Use Cases */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Tailored Acceleration for <span className="text-[#0EB623]">Diverse Use Cases</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From portals to streaming to large downloads, EdgeNext ensures faster load times, stable delivery, and seamless experiences—wherever your users are.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="space-y-4">
                    {Object.entries(useCases).map(([key, useCase]) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          activeTab === key 
                            ? 'bg-[#0EB623] text-white' 
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {key === 'website' && <Globe size={20} className={activeTab === key ? 'text-white' : 'text-[#0EB623]'} />}
                          {key === 'vod' && <Video size={20} className={activeTab === key ? 'text-white' : 'text-[#0EB623]'} />}
                          {key === 'files' && <Download size={20} className={activeTab === key ? 'text-white' : 'text-[#0EB623]'} />}
                          {key === 'unified' && <Smartphone size={20} className={activeTab === key ? 'text-white' : 'text-[#0EB623]'} />}
                          <span className="font-medium">
                            {useCase.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-medium mb-4">{useCases[activeTab].title}</h3>
                    <p className="text-gray-600 mb-6">{useCases[activeTab].description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-4">Our Solution</h4>
                      <div className="space-y-3">
                        {useCases[activeTab].solutions.map((solution, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">{solution === 'Automated delivery orchestration' ? 'Automated configuration' : solution === 'TLS acceleration for faster secure delivery' ? 'TLS acceleration for enhanced secure delivery' : solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solving the Complexities of Global Connectivity */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Solving the Complexities of Global Connectivity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">01</div>
                <h3 className="text-xl font-medium mb-4">Challenge: High Loading Latency</h3>
                <p className="text-[#0EB623]">
                  Local content access, accelerated by 1,500+ global edge nodes with smart scheduling for low-latency.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">02</div>
                <h3 className="text-xl font-medium mb-4">Challenge: High Bandwidth Costs</h3>
                <p className="text-[#0EB623]">
                  Achieves high cache hit ratio (&gt;99%) significantly reducing origin bandwidth usage.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">03</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Content Hotlinking</h3>
                <p className="text-[#0EB623]">
                  Multi-layer hotlink protection (Referer, timestamp, Cookie, etc.) and rate limiting to secure assets.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">04</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Slow Content Updates</h3>
                <p className="text-[#0EB623]">
                  SHAQUE instant refresh ensures content is updated and effective within seconds.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">05</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Unstable Origin Server</h3>
                <p className="text-[#0EB623]">
                  Multi-origin retrieval, origin failover, and offline caching ensure continuous service availability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">06</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Origin Overload</h3>
                <p className="text-[#0EB623]">
                  Traffic is absorbed at the edge, reducing load and risk on primary infrastructure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Looking for more? */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Looking for more?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our latest insights and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4">Why Are AI-Powered CDN Platforms the Future of Video Streaming and OTT Services?</h3>
                <p className="text-gray-600 mb-6">
                  Discover how artificial intelligence is revolutionizing content delivery networks and shaping the future of streaming services.
                </p>
                <a href="/resources/blog/why-are-ai-powered-cdn-platforms-the-future-of-video-streaming-and-ott-services-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Gamepad2 className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl font-medium mb-4">CDN Gaming Solution for a Top US Gaming Company</h3>
                <p className="text-gray-600 mb-6">
                  How we helped a leading gaming company optimize their content delivery for millions of players worldwide.
                </p>
                <a href="/case-study/cdn-gaming-solution-for-us-top-gaming-company" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <ShoppingCart className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl font-medium mb-4">Global Delivery for a Leading E-Commerce Platform in Southeast Asia</h3>
                <p className="text-gray-600 mb-6">
                  Transforming online shopping experiences across Southeast Asia with optimized content delivery.
                </p>
                <a href="/case-study/global-delivery-top-ecommerce-in-sea" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/blog" 
                className="inline-flex items-center bg-[#0EB623] text-white font-medium px-8 py-4 rounded-xl hover:bg-[#0EA620] transition-all duration-300"
              >
                View All Resources
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Footer - Careers Style */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Ready to Accelerate Your Static Content?
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Trusted by businesses scaling across the globe—and thriving in emerging markets.
                From Southeast Asia to Central Asia and Africa, EdgeNext delivers content with
                speed, security, and a human-first touch.
              </p>
              <a 
                href="/contact_us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StaticAcceleration;