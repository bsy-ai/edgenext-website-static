import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Zap, Box, Globe, ShoppingCart, Gamepad2, Building2, Check, Network, Cloud, Lock, Activity, Shield, Settings, DollarSign, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const IPTransit: React.FC = () => {
  const [activeTab, setActiveTab] = useState('challenges');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.company.trim() && formData.country.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', country: '' });
      }, 3000);
    } else {
      alert('Please fill in all required fields: Full Name, Work Email, Company, and Country/Region');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #E8F5E8 0%, #F0E8FF 50%, #E8F0FF 100%)'
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[60px] font-bold mb-6 leading-[1.1]">
                <span className="text-gray-900">EdgeNext </span>
                <span className="animated-gradient-text">IP Transit</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
                Reliable global connectivity with 1,500+ nodes—EdgeNext IP Transit powers scalable, cost-effective cross-border access for modern enterprises.
              </p>
              <a 
                href="/contact_us"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
              >
                Start Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Engineered for Real-Time Performance */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Product Benefits</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Engineered for <span className="text-[#0EB623]">Real-Time Performance</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Flexible Deployment Models</h3>
                <p className="text-gray-600">
                  Available as standalone service or bundled with CDN and edge computing to meet diverse business needs and reduce integration costs.
                </p>
              </div>


              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Diverse Billing Options</h3>
                <p className="text-gray-600">
                  Offers buyout or commit + 95th percentile billing models. Pay-as-you-go flexibility helps improve cost control by up to 30%.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Enterprise-Grade Support</h3>
                <p className="text-gray-600">
                  Includes IP resources, DDoS protection, traffic monitoring, and 24/7 operation & maintenance to ensure service stability and data security.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Built for Cross-Border Digital Leaders */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Built for <span className="text-[#0EB623]">Cross-Border Digital Leaders</span>
              </h2>
            </div>

            <div className="space-y-16">
              {/* Gaming Enterprises */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                    alt="Gaming Infrastructure"
                    className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Gaming Enterprises</h3>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Pain Point: Poor user experience and regulatory complexity</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                        <Check className="text-[#0EB623]" size={16} />
                      </div>
                      <span className="text-[#0EB623] text-lg">Solution: Multi-carrier redundancy and intelligent routing reduce disruptions. Custom IP resources ensure compliance.</span>
                    </div>
                  </div>
                  <a 
                    href="/gaming"
                    className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* E-Commerce Platforms */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-1 lg:order-2">
                  <img 
                    src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
                    alt="E-Commerce Platform"
                    className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-medium mb-4">E-Commerce Platforms</h3>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Pain Point: High latency and bandwidth costs</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                        <Check className="text-[#0EB623]" size={16} />
                      </div>
                      <span className="text-[#0EB623] text-lg">Solution: Global nodes optimize cross-border routing, cutting latency by 50%. Flexible pricing lowers costs by 30%. 7-day onboarding into overseas markets.</span>
                    </div>
                  </div>
                  <a 
                    href="/e_commerce"
                    className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Cloud Service Providers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
                    alt="Cloud Service Provider"
                    className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium mb-4">Cloud Service Providers</h3>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Pain Point: Limited international network access</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                        <Check className="text-[#0EB623]" size={16} />
                      </div>
                      <span className="text-[#0EB623] text-lg">Solution: EdgeNext enables node-level access and rapid provisioning to meet dynamic global demand.</span>
                    </div>
                  </div>
                  <a 
                    href="/telcos-isp-iigs"
                    className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solving the Complexities of Global Connectivity */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Solving the Complexities of Global Connectivity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">01</div>
                <h3 className="text-xl font-medium mb-4">Challenge: High-cost, hard-to-access international bandwidth</h3>
                <p className="text-[#0EB623] mb-6">
                  Our solution: Standardized IP Transit offerings for simplified procurement
                </p>
                <p className="text-gray-600">
                  Results: 30-40% cost savings; deployment time cut from months to 10 days
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">02</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Latency and instability from congested global routes</h3>
                <p className="text-[#0EB623] mb-6">
                  Our solution: 1,500+ nodes and intelligent routing for optimized paths
                </p>
                <p className="text-gray-600">
                  Results: 50%+ latency reduction and smoother application performance
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">03</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Gaps in IP resources, security, and technical support</h3>
                <p className="text-[#0EB623] mb-6">
                  Our solution: Robust IP pool, continuous DDoS security, and 24/7 tech support
                </p>
                <p className="text-gray-600">
                  Results: Increased service uptime, stronger security posture, and operational peace of mind
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Case Study */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Customer Case Study
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A multinational technology firm faced high transmission delays between global bare metal servers, slowing edge computing operations and degrading user experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="space-y-4">
                    <button
                      onClick={() => setActiveTab('challenges')}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeTab === 'challenges' 
                          ? 'bg-[#0EB623] text-white' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <RefreshCw size={20} className={activeTab === 'challenges' ? 'text-white' : 'text-[#0EB623]'} />
                        <span className="font-medium">Key Challenges</span>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveTab('solution')}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeTab === 'solution' 
                          ? 'bg-[#0EB623] text-white' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Settings size={20} className={activeTab === 'solution' ? 'text-white' : 'text-[#0EB623]'} />
                        <span className="font-medium">Our Solution</span>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setActiveTab('results')}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeTab === 'results' 
                          ? 'bg-[#0EB623] text-white' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Activity size={20} className={activeTab === 'results' ? 'text-white' : 'text-[#0EB623]'} />
                        <span className="font-medium">Measured Results</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="bg-gray-50 rounded-xl p-8">
                    {activeTab === 'challenges' && (
                      <div>
                        <h3 className="text-2xl font-medium mb-6">Key Challenges</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                              </svg>
                            </div>
                            <span className="text-gray-700">300ms+ latency impacting cross-border data transfer</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                            </div>
                            <span className="text-gray-700">Inefficient data synchronization extended delivery timelines</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                              </svg>
                            </div>
                            <span className="text-gray-700">Traditional bandwidth procurement lacked scalability</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'solution' && (
                      <div>
                        <h3 className="text-2xl font-medium mb-6">Our Solution</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">Cost-Effective Bandwidth: Commit + 95th percentile billing model to reduce operating costs</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">High-Speed Links: Dedicated global routing across EdgeNext infrastructure</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">Rapid Rollout: Core region deployment in 7 days</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">Full-Service Support: 24/7 monitoring and assistance</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'results' && (
                      <div>
                        <h3 className="text-2xl font-medium mb-6">Measured Results</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">Latency cut to under 120ms</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">60% increase in synchronization efficiency</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">35% reduction in bandwidth costs</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">40% rise in customer satisfaction</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">Enabled entry into 3 new international markets</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
                <h3 className="text-xl font-medium mb-4">CDN Gaming Solution for US Top Gaming Company</h3>
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
                <h3 className="text-xl font-medium mb-4">Global Delivery – Top Ecommerce in SEA</h3>
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
                href="/resources/blog"
                className="inline-flex items-center bg-[#0EB623] text-white font-medium px-8 py-4 rounded-xl hover:bg-[#0EA620] transition-all duration-300"
              >
                View All Resources
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Ready to Accelerate Your Global Content Delivery?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Trusted by businesses scaling across the globe—and thriving in emerging markets. From Southeast Asia to Central Asia and Africa, EdgeNext delivers content with speed, security, and a human-first touch.
                </p>
                <a 
                  href="/contact_us"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="ip-transit-contact-form space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-white/90 mb-2">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Work Email</label>
                    <input 
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Company</label>
                    <input 
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Country/Region</label>
                    <input 
                      type="text"
                      placeholder="Enter your country or region"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-[#0EB623] hover:bg-opacity-90'
                    }`}
                  >
                    {isSubmitted ? '✓ Message Sent!' : 'Get in Touch'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IPTransit;