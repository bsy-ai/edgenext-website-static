import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Shield, Globe, Zap, Check, Network, Cloud, Lock, FileText, Building2, Smartphone } from 'lucide-react';

const ChinaCDN: React.FC = () => {
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
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-[40px] md:text-[60px] font-medium mb-6 leading-[1.1]">
                  <span className="animated-gradient-text font-bold">China CDN</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#0EB623]">
                  Your Strategic Partner for Content Delivery in China
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  EdgeNext offers licensed CDN services, advanced edge security, and full ICP compliance support to help you scale in China—without compromising speed, security, or control.
                </p>
                <Link 
                  to="/contact_us"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="/chinacdn.png"
                  alt="China Digital Infrastructure"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Challenging China Content Delivery Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                What's Challenging <span className="text-[#0EB623]">China Content Delivery?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate the unique challenges of delivering content in China's complex digital landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Complex Network Environment in China</h3>
                <p className="text-gray-600">
                  China's unique internet infrastructure requires specialized routing and optimization strategies for reliable content delivery.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Perplexing Regulations</h3>
                <p className="text-gray-600">
                  Navigating ICP licensing, data sovereignty laws, and compliance requirements can be overwhelming without local expertise.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Security Concerns</h3>
                <p className="text-gray-600">
                  Protecting content and user data while maintaining compliance with local security regulations requires specialized solutions.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Stable Services</h3>
                <p className="text-gray-600">
                  Ensuring consistent performance and uptime across China's diverse regions and network conditions is critical for success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shape the Future Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Shape the Future of <span className="text-[#0EB623]">Digital Delivery in China</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlock the potential of China's digital market with our comprehensive CDN solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/chinacdn.png"
                  alt="Accelerated Cross-Border Delivery"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Accelerated Cross-Border Delivery</h3>
                <p className="text-gray-600">
                  Optimize content delivery between China and global markets with intelligent routing and edge optimization.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/streaming.png"
                  alt="Seamless Streaming & VOD"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Seamless Streaming & VOD</h3>
                <p className="text-gray-600">
                  Deliver high-quality video content with adaptive bitrate streaming and local cache optimization for Chinese audiences.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/static-acceleration.jpg"
                  alt="Enterprise-Grade Cloud Security"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Enterprise-Grade Cloud Security</h3>
                <p className="text-gray-600">
                  Protect your content and users with advanced security features designed for China's regulatory environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking Through the Digital Great Wall Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Breaking Through the <span className="text-[#0EB623]">Digital Great Wall</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Overcome China's unique digital challenges with our specialized solutions
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Accelerated</span> Cross-Border Delivery
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Bridge the gap between China and global markets with optimized routing and intelligent caching strategies.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Intelligent cross-border routing optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Local edge caching for faster content delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Multi-ISP connectivity for redundancy</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/chinacdn.png"
                  alt="Cross-Border Delivery"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <img 
                  src="/streaming.png"
                  alt="Streaming & VOD"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Seamless</span> Streaming & VOD
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Deliver exceptional video experiences with adaptive streaming and local optimization for Chinese networks.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Adaptive bitrate streaming for all devices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Local CDN nodes for reduced latency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Real-time analytics and monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Enterprise-Grade</span> Cloud Security
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Protect your content and comply with Chinese regulations using our comprehensive security framework.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">DDoS protection and threat mitigation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Data encryption and secure transmission</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Compliance with local security regulations</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/static-acceleration.jpg"
                  alt="Cloud Security"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ICP License Banner Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-2">Wondering If You Need an ICP License in China?</h2>
                <p className="text-gray-600">
                  If you plan to host content within mainland China, an ICP license is mandatory. EdgeNext helps you determine if it's required—and guides you through the process with speed and clarity.
                </p>
              </div>
              <Link 
                to="/icp-license"
                className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Case Studies – <span className="text-[#0EB623]">Powering Real Results in China</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading companies achieve success in China with EdgeNext
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl font-medium mb-4">Global Delivery Solution for Top Photo Beauty App in China</h3>
                <p className="text-gray-600 mb-6">
                  How we helped a leading photo beauty app achieve 40% faster load times and 99.9% uptime across China's diverse network landscape.
                </p>
                <Link to="/global-delivery-solution-for-top-photo-beauty-app-in-china" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl font-medium mb-4">Dynamic Acceleration Solution for Top E-commerce in China</h3>
                <p className="text-gray-600 mb-6">
                  Discover how a major e-commerce platform reduced page load times by 60% and increased conversion rates during peak shopping seasons.
                </p>
                <Link to="/dynamic-acceleration-solution-for-top-e-commerce-in-china" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Ready to Accelerate Your Next China Launch?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  From live campaigns to high-frequency content updates, EdgeNext helps digital brands scale reliably in China's fast-moving internet environment.
                </p>
                <Link 
                  to="/contact_us"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="china-cdn-contact-form space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-white/90 mb-2">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
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
                    {isSubmitted ? '✓ Message Sent!' : 'Contact Us'}
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

export default ChinaCDN;