

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Shield, Lock, Settings, Globe, ShoppingCart, Gamepad2, Building2, GraduationCap, Zap, Check, Newspaper, ArrowUpRight, ShieldCheck, Key, Shield as FileShield, ShieldAlert, Rocket, DollarSign, Network, Activity } from 'lucide-react';

const SecurityCDN: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('acceleration');

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
  const features = {
    'acceleration': {
      icon: <Zap className="text-[#0EB623]" size={24} />,
      title: "Acceleration",
      description: "Performance optimization with smart routing and caching strategies.",
      benefits: [
        "Smart routing optimization",
        "Static caching",
        "Automatic content optimization"
      ]
    },
    'ddos-protection': {
      icon: <ShieldAlert className="text-[#0EB623]" size={24} />,
      title: "DDoS Protection",
      description: "Mitigates large-scale attacks at the edge with high-capacity scrubbing and AI-driven filtering.",
      benefits: [
        "Real-time detection and mitigation",
        "Up to 4.5 Tbps protection",
        "Multi-layer defense across L3/L4/L7 attacks"
      ]
    },
    'access-control': {
      icon: <Key className="text-[#0EB623]" size={24} />,
      title: "Access Control",
      description: "Comprehensive and customizable access control tailored to diverse user needs — from IP and geo-based rules to behavioral and contextual policies.",
      benefits: [
        "IP-based access control",
        "Geographic restrictions",
        "Flexible access policy customization"
      ]
    },
    'webpage-protection': {
      icon: <FileShield className="text-[#0EB623]" size={24} />,
      title: "Webpage Protection",
      description: "Comprehensive webpage security with WAF, bot protection, and content security policies.",
      benefits: [
        "Web Application Firewall (WAF)",
        "Bot detection and prevention",
        "Optimized Resource Efficiency"
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
            background: 'linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%)'
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[60px] font-bold mb-4 md:mb-6 leading-[1.1]">
                <span className="text-gray-900">EdgeNext Security CDN</span>
                <span className="animated-gradient-text block mt-2">Where Acceleration Meets Protection</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto font-light">
                In the world's most complex markets, performance alone isn't enough. You need speed, security, and trust—all built into one edge-native platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <span className="relative z-10">Get started for free!</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Accelerated. Stable. Secure. Section */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Accelerated. Stable. Secure.</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Enterprise-grade protection with uncompromising performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Key className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Intelligent Acceleration</h3>
                <p className="text-gray-300 text-sm">
                  dynamic-static hybrid separation + efficient caching + smart routing for faster, more stable delivery
                </p>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">High Availability</h3>
                <p className="text-gray-300 text-sm">
                  Load balancing, traffic control, instant failover, and offline mode for uninterrupted service
                </p>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">End-to-End Encryption</h3>
                <p className="text-gray-300 text-sm">
                  HTTPS encryption across the full path between users and origin servers to protect user data
                </p>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Security Architecture</h3>
                <p className="text-gray-300 text-sm">
                  AI-powered multi-engine defense with 4.5 Tbps DDoS protection capacity
                </p>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <ShieldAlert className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Vulnerability Response</h3>
                <p className="text-gray-300 text-sm">
                  24/7 monitoring and rapid 0-day vulnerability patching
                </p>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Key className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Bot Defense</h3>
                <p className="text-gray-300 text-sm">
                  Updated daily to outsmart new and evolving bots, with detection across 15 categories and hundreds of signatures
                </p>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Precision Protection</h3>
                <p className="text-gray-300 text-sm">
                  Multi-dimensional rules and flexible strategies for business-specific security policy
                </p>
              </div>
              
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">DDoS Mitigation</h3>
                <p className="text-gray-300 text-sm">
                  Attack traffic excluded from billing, ensuring cost-effective protection
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#0EB623]/5 to-[#0EB623]/10 rounded-2xl p-6 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium mb-3 md:mb-4">Enjoy your 14 Days Free today!</h2>
                  <p className="text-sm md:text-lg text-gray-600">
                    Global edge acceleration + full-link HTTPS boosts both speed and security.
                  </p>
                </div>
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto whitespace-nowrap bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Get started for free!
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">Comprehensive Security Features</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Explore our advanced security capabilities designed to protect your digital assets
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
              <div className="lg:col-span-3">
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveFeature('acceleration')}
                    className={`flex-shrink-0 w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 group ${
                      activeFeature === 'acceleration' 
                        ? 'bg-[#0EB623] text-white shadow-lg'
                        : 'text-gray-600 hover:bg-[#0EB623] hover:text-white'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      activeFeature === 'acceleration' 
                        ? 'text-white' 
                        : 'text-[#0EB623] group-hover:text-white'
                    }`}>
                      <Zap size={24} />
                    </div>
                    <span className="font-medium text-left whitespace-nowrap">Acceleration</span>
                  </button>
                  
                  {Object.entries(features).filter(([key]) => key !== 'acceleration').map(([key, feature]) => (
                    <button
                      key={key}
                      onClick={() => setActiveFeature(key)}
                      className={`flex-shrink-0 w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 group ${
                        activeFeature === key 
                          ? 'bg-[#0EB623] text-white shadow-lg'
                          : 'text-gray-600 hover:bg-[#0EB623] hover:text-white'
                      }`}
                    >
                      <div className={`transition-colors duration-300 ${
                        activeFeature === key 
                          ? 'text-white' 
                          : 'text-[#0EB623] group-hover:text-white'
                      }`}>
                        {feature.icon}
                      </div>
                      <span className="font-medium text-left whitespace-nowrap">{feature.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">{features[activeFeature].title}</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">{features[activeFeature].description}</p>

                  <h4 className="font-semibold mb-4">Key Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features[activeFeature].benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                        <span className="text-sm md:text-base text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Challenges Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.03),transparent_70%)]"></div>
            
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">The Challenges You Face. The Answers We Offer.</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Discover how EdgeNext solves your most pressing security and performance challenges
              </p>
            </div>
             
            {/* Horizontal Scrollable Cards on Mobile */}
            <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 snap-x relative z-10">
              {/* Card 1 */}
              <div className="min-w-[300px] md:min-w-0 flex-shrink-0 snap-center group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">01</div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Speed Up Every Click</h3>
                <p className="text-gray-600 mb-6">
                  Heavy content, global users, and sluggish cross-border access slow down site performance.
                </p>
                
                {/* Industry Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">E-commerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Media</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Finance</span>
                </div>
                
                {/* Solution */}
                <div className="flex items-center gap-3 bg-[#0EB623]/10 p-4 rounded-xl">
                  <Zap className="text-[#0EB623] flex-shrink-0" size={24} />
                  <p className="text-[#0EB623] font-medium">Global edge acceleration + full-link HTTPS boosts both speed and security.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="min-w-[300px] md:min-w-0 flex-shrink-0 snap-center group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">02</div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Handle Sudden Spikes Like a Pro</h3>
                <p className="text-gray-600 mb-6">
                  Viral campaigns or flash sales overwhelm origin servers.
                </p>
                
                {/* Industry Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">E-commerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Social Media</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Video</span>
                </div>
                
                {/* Solution */}
                <div className="flex items-center gap-3 bg-[#0EB623]/10 p-4 rounded-xl">
                  <Network className="text-[#0EB623] flex-shrink-0" size={24} />
                  <p className="text-[#0EB623] font-medium">Global traffic scheduling + distributed caching ensures stability under pressure.</p>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="min-w-[300px] md:min-w-0 flex-shrink-0 snap-center group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">03</div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Stop DDoS Before It Stops You</h3>
                <p className="text-gray-600 mb-6">
                  Origin exposure leads to easy targeting and service disruptions.
                </p>
                
                {/* Industry Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Gaming</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Finance</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">E-commerce</span>
                </div>
                
                {/* Solution */}
                <div className="flex items-center gap-3 bg-[#0EB623]/10 p-4 rounded-xl">
                  <ShieldAlert className="text-[#0EB623] flex-shrink-0" size={24} />
                  <p className="text-[#0EB623] font-medium">AI-powered traffic scrubbing + validation mechanisms blocks malicious traffic and protects your origin.</p>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="min-w-[300px] md:min-w-0 flex-shrink-0 snap-center group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">04</div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Patch the Gaps Before Hackers Do</h3>
                <p className="text-gray-600 mb-6">
                  Attackers exploit vulnerabilities to steal data or deface your site.
                </p>
                
                {/* Industry Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Government</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Education</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">E-commerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Payment</span>
                </div>
                
                {/* Solution */}
                <div className="flex items-center gap-3 bg-[#0EB623]/10 p-4 rounded-xl">
                  <Shield className="text-[#0EB623] flex-shrink-0" size={24} />
                  <p className="text-[#0EB623] font-medium">WAF + AI threat engine thwarts SQL injections, XSS, and other exploits.</p>
                </div>
              </div>
              
              {/* Card 5 */}
              <div className="min-w-[300px] md:min-w-0 flex-shrink-0 snap-center group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">05</div>
                <h3 className="text-xl md:text-2xl font-medium mb-3">Outsmart the Crawlers</h3>
                <p className="text-gray-600 mb-6">
                  Malicious bots steal sensitive data and disrupt your services.
                </p>
                
                {/* Industry Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">E-commerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Ticketing</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">Media</span>
                </div>
                
                {/* Solution */}
                <div className="flex items-center gap-3 bg-[#0EB623]/10 p-4 rounded-xl">
                  <Activity className="text-[#0EB623] flex-shrink-0" size={24} />
                  <p className="text-[#0EB623] font-medium">Behavioral analysis + smart rate limiting filters out abnormal access attempts.</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Indicators for Mobile */}
            <div className="flex justify-center gap-2 mt-6 md:hidden">
              <button className="w-3 h-3 rounded-full bg-[#0EB623]"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">Find the Right Plan for Your Business</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                All yearly packages include exclusive discounts. Pricing may vary by region. Sign up to learn more.
              </p>
            </div>

            {/* Desktop Pricing Table */}
            <div className="hidden lg:block mb-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="py-6 px-6 text-left bg-gray-50 border-b border-gray-200"></th>
                      <th className="py-6 px-6 text-center bg-gray-50 border-b border-gray-200">
                        <div className="text-xl font-bold text-gray-800">Basic</div>
                      </th>
                      <th className="py-6 px-6 text-center bg-gray-50 border-b border-gray-200">
                        <div className="text-xl font-bold text-gray-800">Pro</div>
                      </th>
                      <th className="py-6 px-6 text-center bg-gray-50 border-b border-gray-200">
                        <div className="text-xl font-bold text-gray-800">Business(Custom)</div>
                      </th>
                    </tr> 
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Price / Month</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <div className="text-2xl font-bold text-[#0EB623]">$180</div>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <div className="text-2xl font-bold text-[#0EB623]">$480</div>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <div className="text-2xl font-bold text-[#0EB623]">Custom Pricing</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Price / Year</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <a href="https://home.console.edgenext.com/#/uc/register" className="text-gray-500 text-sm hover:text-[#0EB623] transition-colors">Sign up for more details</a>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <a href="https://home.console.edgenext.com/#/uc/register" className="text-gray-500 text-sm hover:text-[#0EB623] transition-colors">Sign up for more details</a>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <a href="https://home.console.edgenext.com/#/uc/register" className="text-gray-500 text-sm hover:text-[#0EB623] transition-colors">Sign up for more details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Included Traffic</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">500GB</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">1,000GB</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">2,000+GB</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Recommended For</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">Personal & small business sites</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">SME portals / schools / gov sites</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">Enterprise systems & SaaS portals</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Max Services Supported</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">10</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">10</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">20+</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">QPS</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">1,000</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">4,000</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">14,000+</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">WAF Mode</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">Observation</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">+ Intercept + Ban</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">+ Intercept + Ban</td>
                    </tr>
                    <tr> 
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Bot Protection</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">–</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">–</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <Check className="text-[#0EB623] inline-block" size={20} />
                        <span className="ml-1">Supported</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Custom Rules</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">10 / domain</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">20 / domain</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">100+ / domain</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Anti-DDoS</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">Universal engine</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">Universal engine</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">Custom defense policies</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200 font-medium">Support</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">Email + Ticket</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">8×5 Email + IM + Ticket</td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">24×7 Email + IM + Phone Support</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 border-b border-gray-200"></td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <a 
                          href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors font-medium"
                        >
                          Activate Now
                        </a>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <a 
                          href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors font-medium"
                        >
                          Upgrade to Pro
                        </a>
                      </td>
                      <td className="py-4 px-6 border-b border-gray-200 text-center">
                        <a 
                          href="/Contact_us"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors font-medium"
                        >
                          Contact Us
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Pricing Cards */}
            <div className="lg:hidden space-y-8">
              {/* Basic Plan */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-50 py-6 px-6 border-b border-gray-200">
                  <div className="text-xl font-bold text-gray-800 text-center">Basic</div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#0EB623] mb-1">$180</div>
                    <div className="text-gray-500 text-sm">per month</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Included Traffic</span>
                      <span className="font-medium">500GB</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Max Services</span>
                      <span className="font-medium">10</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">QPS</span>
                      <span className="font-medium">1,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">WAF Mode</span>
                      <span className="font-medium">Observation</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Bot Protection</span>
                      <span className="font-medium">–</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Custom Rules</span>
                      <span className="font-medium">10 / domain</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Anti-DDoS</span>
                      <span className="font-medium">Universal engine</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Support</span>
                      <span className="font-medium">Email + Ticket</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                      href="#" 
                      className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors font-medium"
                    >
                      Activate Now
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-50 py-6 px-6 border-b border-gray-200">
                  <div className="text-xl font-bold text-gray-800 text-center">Pro</div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#0EB623] mb-1">$480</div>
                    <div className="text-gray-500 text-sm">per month</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Included Traffic</span>
                      <span className="font-medium">1,000GB</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Max Services</span>
                      <span className="font-medium">10</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">QPS</span>
                      <span className="font-medium">4,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">WAF Mode</span>
                      <span className="font-medium">+ Intercept + Ban</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Bot Protection</span>
                      <span className="font-medium">–</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Custom Rules</span>
                      <span className="font-medium">20 / domain</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Anti-DDoS</span>
                      <span className="font-medium">Universal engine</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Support</span>
                      <span className="font-medium">8×5 Email + IM + Ticket</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                     href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors font-medium"
                    >
                      Upgrade to Pro
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Business Plan */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gray-50 py-6 px-6 border-b border-gray-200">
                  <div className="text-xl font-bold text-gray-800 text-center">Business</div>
                </div>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#0EB623] mb-1">Custom Pricing</div>
                    <div className="text-gray-500 text-sm">per month</div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Included Traffic</span>
                      <span className="font-medium">2,000+GB</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Max Services</span>
                      <span className="font-medium">20+</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">QPS</span>
                      <span className="font-medium">14,000+</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">WAF Mode</span>
                      <span className="font-medium">+ Intercept + Ban</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Bot Protection</span>
                      <span className="font-medium">Supported</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Custom Rules</span>
                      <span className="font-medium">100+ / domain</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Anti-DDoS</span>
                      <span className="font-medium">Custom defense policies</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-600">Support</span>
                      <span className="font-medium">24×7 Email + IM + Phone Support</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a 
                     href="/contact_us"
                     target="_blank"
                     rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-lg hover:bg-[#0EA620] transition-colors font-medium"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-500 text-sm">
                Need a custom plan? <a href="/company/contact" className="text-[#0EB623] font-medium hover:underline">Contact our sales team</a> for enterprise-grade solutions.
              </p>
            </div>
          </div>
        </section>

                {/* Global Security Network Map Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Global Security Network Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                EdgeNext SCDN nodes combine high-performance acceleration with localized protection in Asia, Europe, and beyond.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-lg hover:shadow-xl transition-all duration-500">
              <div style={{ width: '100%', height: '500px' }}>
                <iframe 
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="100%" 
                  height="100%" 
                  src="/scdnmap.html" 
                  allowFullScreen
                  title="Security CDN Global Network Map"
                ></iframe>
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
                <a href="/what-is-adaptive-threat-modulation-and-why-is-it-key-for-ddos-resilience" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
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
                <a href="/cdn-gaming-solution-for-us-top-gaming-company" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
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
                <a href="/global-delivery-top-ecommerce-in-sea" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={16} />
                </a>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/newsroom" 
                className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center group"
              >
                Explore our latest news
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-[#0EB623] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 md:mb-6">
                  Ready to Transform Your Global Content Delivery?
                </h2>
                <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8">
                  Trusted by businesses scaling across the globe—and thriving in emerging markets. From Southeast Asia to Central Asia and Africa, EdgeNext delivers content with speed, security, and a human-first touch.
                </p>
                <a 
                  href="https://home.console.edgenext.com/#/uc/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-4 md:mb-6">Contact Us</h3>
                <form className="scdn-form" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-white/90 mb-2 text-sm md:text-base">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 text-sm md:text-base">Work Email</label>
                    <input 
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 text-sm md:text-base">Company</label>
                    <input 
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white text-sm md:text-base"
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
                    className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 mt-4 ${
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

export default SecurityCDN;