import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Zap, Box, Globe, ShoppingCart, Gamepad2, Trophy, GraduationCap, Play, Settings, BarChart2, Film, Shield, Check, Rss, Newspaper, ArrowUpRight, Cog, BarChart as ChartBar, FileVideo, Lock, Music, Tv, ChevronDown, Users } from 'lucide-react';

const LiveStreaming: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('live-streaming-support');
  const [showAllScenarios, setShowAllScenarios] = useState(false);

  const features = {
    'live-streaming-support': {
      icon: <Play className={`${activeFeature === 'live-streaming-support' ? 'text-white' : 'text-[#0EB623] group-hover:text-white'} transition-colors duration-300`} size={20} />, 
      title: 'Live Streaming Support',
      description: 'Deliver full-process live streaming coverage with high-quality, low-latency, and secure playback across all protocols and devices.',
      benefits: [
        'Support for RTMP, HLS, HTTP-FLV, SRT protocols',
        'One-click integration with end-to-end delivery (push, transcode, slice, distribute)',
        'Multi-device compatibility and full-network coverage'
      ]
    },
    'hd-transcoding': {
      icon: <Film className={`${activeFeature === 'hd-transcoding' ? 'text-white' : 'text-[#0EB623] group-hover:text-white'} transition-colors duration-300`} size={20} />,
      title: 'HD Transcoding & Adaptive Streaming',
      description: 'Enhance user experience and bandwidth efficiency with high-definition transcoding and intelligent bitrate adaptation.',
      benefits: [
        'Supports 4K, HDR10, and Dolby 5.1 professional formats',
        'Automatic network-based bitrate adaptation',
        'Boosted quality with reduced bandwidth consumption'
      ]
    },
    'global-acceleration': {
      icon: <Globe className={`${activeFeature === 'global-acceleration' ? 'text-white' : 'text-[#0EB623] group-hover:text-white'} transition-colors duration-300`} size={20} />,
      title: 'Global Acceleration & Low Latency',
      description: 'Ensure ultra-smooth playback with intelligent routing and deep edge coverage designed for high-concurrency scenarios.',
      benefits: [
        '1500+ global edge nodes with 90 Tbps bandwidth capacity',
        'Sub-5ms latency through smart scheduling',
        '20% reduction in buffering rates at massive scale'
      ]
    },
    'security-content-control': {
      icon: <Shield className={`${activeFeature === 'security-content-control' ? 'text-white' : 'text-[#0EB623] group-hover:text-white'} transition-colors duration-300`} size={20} />,
      title: 'Full-Link Security & Content Control',
      description: 'Protect your streams and content with robust security features and rich processing capabilities.',
      benefits: [
        'Built-in DRM, anti-leech tokens, and IP whitelisting',
        'Instant stream blocking and blacklist control',
        'Supports recording, time-shifting, watermarking, and screenshots'
      ]
    },
    'smart-operations': {
      icon: <Settings className={`${activeFeature === 'smart-operations' ? 'text-white' : 'text-[#0EB623] group-hover:text-white'} transition-colors duration-300`} size={20} />,
      title: 'Smart Operations & Visualization',
      description: 'Simplify O&M with integrated monitoring tools, APIs, and real-time insights through a user-friendly dashboard.',
      benefits: [
        'Full compatibility with OBS and FFmpeg',
        'Real-time metrics, log access, and alert callbacks',
        'Lower O&M workload with streamlined management tools'
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
            background: 'linear-gradient(99.13deg, #FCD9E3 -1.32%, #EED8F4 15.4%, #E5DBFB 30.15%, #E1E3FB 45.85%, #DFECF9 57.28%, #E7F0ED 67.21%, #F2F7E1 77.37%, #EFFAE1 86.51%, #DDFCEA 96.1%)'
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[60px] font-bold mb-4 md:mb-6 leading-[1.1]">
                <span className="text-gray-900">Live Streaming</span>
                <span className="animated-gradient-text block mt-2">Without Limits</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto font-light">
                Live Streaming Built for Global Scale Deliver smooth, real-time streams to every corner of the world — using EdgeNext's distributed edge cloud and local ISP integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact_us" 
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">Product Benefits</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Powerful streaming capabilities designed for global scale and exceptional viewer experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">High-Volume Request Efficiency</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Powered by EdgeNext's intelligent routing and redundant infrastructure, the platform handles tens of millions of concurrent requests—ensuring ultra-low latency, high concurrency, and stable global performance.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Box className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">One-Stop Solution</h3>
                <p className="text-sm md:text-base text-gray-600">
                  From capture to delivery, EdgeNext offers a fully integrated live streaming solution—seamlessly combining recording, media processing, global distribution, and real-time analytics.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Smart Adaptive Bitrate (ABR)</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Our ABR technology dynamically adjusts resolution and bitrate to real-time network conditions, enabling HD playback with minimal buffering—even in low-bandwidth environments.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Global Reach</h3>
                <p className="text-sm md:text-base text-gray-600">
                  With 1,500+ edge nodes and strategically placed video centers, EdgeNext provides real-time live streaming coverage in 290+ cities—bridging creators and audiences worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Scenarios Section with Show More functionality */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.05)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 text-gray-900">Application Scenarios</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Powerful streaming solutions for every industry need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* E-commerce Live Streaming */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="/ecommerce.png"
                    alt="E-commerce Live Streaming"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <ShoppingCart className="text-[#0EB623]" size={20} />
                    </div>
                    <h3 className="text-xl font-medium text-white">E-commerce Live Streaming</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-[#0EB623] font-medium mb-3">Bring your products closer to customers—instantly.</p>
                  <p className="text-gray-600 mb-4">Support high-concurrency sales events with low-latency, secure delivery. Whether it's live shopping streams or cross-border e-commerce, our infrastructure scales dynamically to meet traffic peaks.</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={16} className="text-gray-500" />
                      <p className="text-sm text-gray-500">Live shopping, global e-commerce</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2"> 
                      <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">Tbps-level bandwidth scaling for flash sales</span>
                    </div>
                    <div className="flex items-start gap-2"> 
                      <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">Boost conversion rates by 15%+</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sporting Events */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg" 
                    alt="Sporting Events"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <Trophy className="text-[#0EB623]" size={20} />
                    </div>
                    <h3 className="text-xl font-medium text-white">Sporting Events</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-[#0EB623] font-medium mb-3">Capture the thrill of the game—anywhere in the world.</p>
                  <p className="text-gray-600 mb-4">Stream major sports and eSports events with cinematic quality and sub-100ms latency. Our platform supports multi-language audio tracks and live-to-VOD workflows.</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={16} className="text-gray-500" />
                      <p className="text-sm text-gray-500">Football tournaments, eSports competitions</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2"> 
                      <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">4K/HDR transcoding with Dolby audio</span>
                    </div>
                    <div className="flex items-start gap-2"> 
                      <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">Time-shift and replay for extended content value</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {showAllScenarios && (
                <>
                  {/* Online Education */}
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg" 
                        alt="Online Education"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                          <GraduationCap className="text-[#0EB623]" size={20} />
                        </div>
                        <h3 className="text-xl font-medium text-white">Online Education</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-[#0EB623] font-medium mb-3">Create learning experiences that connect—without interruption.</p>
                      <p className="text-gray-600 mb-4">Support interactive teaching and enterprise training with low-latency delivery, DRM protection, and optimized access for remote regions.</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users size={16} className="text-gray-500" />
                          <p className="text-sm text-gray-500">Online classes, corporate training</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start gap-2"> 
                          <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">300ms latency with proprietary weak network optimization</span>
                        </div>
                        <div className="flex items-start gap-2"> 
                          <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">DRM encryption and watermarking to prevent content leaks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Entertainment & Concerts */}
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg" 
                        alt="Entertainment & Concerts"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                          <Music className="text-[#0EB623]" size={20} />
                        </div>
                        <h3 className="text-xl font-medium text-white">Entertainment & Concerts</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-[#0EB623] font-medium mb-3">Turn live moments into unforgettable experiences.</p>
                      <p className="text-gray-600 mb-4">Whether it's a virtual concert or a high-traffic talent show, we enable instant-on playback, large-scale audience interaction, and built-in content moderation.</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users size={16} className="text-gray-500" />
                          <p className="text-sm text-gray-500">Talent shows, live concerts</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-start gap-2"> 
                          <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">GOP caching for instant first-frame playback</span>
                        </div>
                        <div className="flex items-start gap-2"> 
                          <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">Smart scheduling for millions of concurrent viewers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Media Broadcasting */}
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 md:col-span-2">
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src="https://images.pexels.com/photos/3938465/pexels-photo-3938465.jpeg" 
                        alt="Media Broadcasting"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                          <Tv className="text-[#0EB623]" size={20} />
                        </div>
                        <h3 className="text-xl font-medium text-white">Media Broadcasting</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-[#0EB623] font-medium mb-3">Broadcast your voice—everywhere it matters.</p>
                      <p className="text-gray-600 mb-4">From newsrooms to gala events, our solution supports time-shift viewing, compliance workflows, and cross-platform publishing. Reach every screen, with zero compromise.</p>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users size={16} className="text-gray-500" />
                          <p className="text-sm text-gray-500">News conferences, live events</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-start gap-2"> 
                          <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">7-day time-shift playback</span>
                        </div>
                        <div className="flex items-start gap-2"> 
                          <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">Delay + review workflows</span>
                        </div>
                        <div className="flex items-start gap-2"> 
                          <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">Multi-protocol support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Show More/Less Button */}
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowAllScenarios(!showAllScenarios)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-[#0EB623] hover:text-white transition-all duration-300 shadow-sm"
              >
                {showAllScenarios ? 'Show Less' : 'Show More Scenarios'}
                <ChevronDown className={`transition-transform duration-300 ${showAllScenarios ? 'rotate-180' : ''}`} size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">Core Features</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Advanced streaming capabilities designed for professional broadcasting and content delivery
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                <div className="lg:col-span-3">
                  <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 lg:min-w-[250px]">
                    {Object.entries(features).map(([key, feature]) => (
                      <button
                        key={key}
                        onClick={() => setActiveFeature(key)}
                        className={`flex-shrink-0 w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 group ${
                          activeFeature === key 
                            ? 'bg-[#0EB623] text-white shadow-lg'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className={`transition-colors duration-300 ${
                          activeFeature === key 
                            ? 'text-white' 
                            : 'text-[#0EB623] group-hover:text-white'
                        }`}>
                          {feature.icon}
                        </div>
                        <span className="font-medium text-left break-words">
                          {feature.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">{features[activeFeature].title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">{features[activeFeature].description}</p>

                    <h4 className="font-semibold mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {features[activeFeature].benefits.map((benefit, index) => (
                        <div 
                          key={index} 
                          className="flex items-start sm:items-center gap-2 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <Check className="text-[#0EB623] flex-shrink-0 mt-0.5 sm:mt-0" size={20} />
                          <span className="text-sm md:text-base text-gray-600 break-words">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Nodes Section */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-white">Powering Performance, Wherever You Are</h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                Our global network of specialized processing nodes ensures optimal streaming performance across every region
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* GPU Processing Node */}
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 hover:bg-gray-800/80 transition-all duration-300">
                <h3 className="text-xl font-medium mb-4">GPU Processing Node</h3>
                <p className="text-sm text-gray-400 mb-6">Riyadh, Saudi Arabia</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <p className="text-gray-300 text-sm">Optimized for high-performance media tasks such as adaptive bitrate streaming and real-time rendering.</p>
                  </div>
                </div>
              </div>
              
              {/* Standard Processing Nodes */}
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 hover:bg-gray-800/80 transition-all duration-300">
                <h3 className="text-xl font-medium mb-4">Standard Processing Nodes</h3>
                <p className="text-sm text-gray-400 mb-6">Hong Kong, Singapore</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <p className="text-gray-300 text-sm">Supports essential transcoding workloads, including H.265 encoding and conventional stream processing.</p>
                  </div>
                </div>
              </div>
              
              {/* Live Streaming Ingest Nodes */}
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 hover:bg-gray-800/80 transition-all duration-300">
                <h3 className="text-xl font-medium mb-4">Live Streaming Ingest Nodes</h3>
                <p className="text-sm text-gray-400 mb-6">Globally Deployed</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <p className="text-gray-300 text-sm">Dynamically scheduled to ensure stable and low-latency live stream ingestion across any region.</p>
                  </div>
                </div>
              </div>
              
              {/* Content Delivery Nodes */}
              <div className="bg-gray-800 rounded-2xl p-6 md:p-8 hover:bg-gray-800/80 transition-all duration-300">
                <h3 className="text-xl font-medium mb-4">Content Delivery Nodes</h3>
                <p className="text-sm text-gray-400 mb-6">1500+ Global Edge Locations</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <p className="text-gray-300 text-sm">Built for massive-scale playback and distribution with deep coverage and intelligent routing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking for more Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">Looking for more?</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Explore our latest insights and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Newspaper className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-3 md:mb-4">Blog</div>
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Why Are AI-Powered CDN Platforms the Future of Video Streaming and OTT Services?</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Discover how artificial intelligence is revolutionizing content delivery networks and shaping the future of streaming services.
                </p>
                <a href="/resources/blog/why-are-ai-powered-cdn-platforms-the-future-of-video-streaming-and-ott-services-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-3 md:mb-4">Case Study</div>
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">CDN Gaming Solution for US Top Gaming Company</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  How we helped a leading gaming company optimize their content delivery for millions of players worldwide.
                </p>
                <a href="/case-study/cdn-gaming-solution-for-us-top-gaming-company" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-3 md:mb-4">Case Study</div>
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Global Delivery – Top Ecommerce in SEA</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Transforming online shopping experiences across Southeast Asia with optimized content delivery.
                </p>
                <a href="/case-study/global-delivery-top-ecommerce-in-sea" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact_us" 
                className="inline-flex items-center bg-[#0EB623] text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-[#0EA620] transition-all duration-300"
              >
                Contact Us
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>

   {/* CTA Section – career style */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
        Ready to Transform Your Global Content Delivery?
      </h2>
      <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
        Trusted by businesses scaling across the globe—and thriving in emerging markets. 
        From Southeast Asia to Central Asia and Africa, EdgeNext delivers content with speed, 
        security, and a human-first touch.
      </p>
      <a 
        href="/contact_us"
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

export default LiveStreaming;