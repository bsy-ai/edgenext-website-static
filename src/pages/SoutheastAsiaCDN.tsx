import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Shield, Globe, Zap, Check, Network, Cloud, Lock, Activity, Building2, Smartphone } from 'lucide-react';

const SoutheastAsiaCDN: React.FC = () => {
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
                <h1 className="text-[40px] md:text-[60px] font-bold mb-6 leading-[1.1]">
                  <span className="animated-gradient-text">Southeast Asia CDN</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#0EB623]">
                  Built for Speed, Scale, and Fragmented Networks.
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  EdgeNext delivers ultra-low latency and resilient CDN services across Southeast Asia with intelligent edge caching, mobile-first routing, and strong ISP interconnectivity—helping you scale performance-critical apps across diverse markets without compromise.
                </p>
                <a 
                  href="/contact_us"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="/SoutheastAsiaCDN.jpg"
                  alt="Southeast Asia Digital Infrastructure"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Why Content Delivery in SEA <span className="text-[#0EB623]">Isn't Easy—Yet</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At the core of Southeast Asia's delivery challenges lie fragmented infrastructure, uneven connectivity, and rising security threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Widely Spread Population</h3>
                <p className="text-gray-600">
                  With 6,000+ islands and low urban density, consistent coverage is hard to achieve—especially outside major hubs.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Stressed Network</h3>
                <p className="text-gray-600">
                  Rapid digital growth has outpaced infrastructure, causing congestion and instability during peak usage.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Security Concerns</h3>
                <p className="text-gray-600">
                  Frequent cyber threats across SEA put digital assets at risk without region-specific mitigation.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Unequal Network Development</h3>
                <p className="text-gray-600">
                  Internet speed and quality vary drastically—what works in Singapore may fail in Cambodia or Laos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Taking Your Goals to <span className="text-[#0EB623]">New Heights in SEA</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored Edge Architecture. Built to Overcome Regional Limits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/SoutheastAsiaCDN.jpg"
                  alt="Regional Delivery Optimization"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Regional Delivery Optimization</h3>
                <p className="text-gray-600">
                  Optimize content delivery with intelligent routing and edge optimization tailored for Southeast Asia's unique network landscape.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Cross-Border Delivery"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Cross-Border Delivery</h3>
                <p className="text-gray-600">
                  Seamless content delivery across SEA borders with optimized routing and local cache optimization for reduced latency.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/static-acceleration.jpg"
                  alt="Integrated Cloud Security"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Integrated Cloud Security</h3>
                <p className="text-gray-600">
                  Comprehensive security features designed for SEA's threat landscape with real-time protection and monitoring.
                </p>
              </div>
            </div>

            <div className="text-center">
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

        {/* Expanded Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Key Benefits</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Future-Ready Learning at Global Scale</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As global demand for online learning surges, EdgeNext delivers the speed, stability, and scalability needed to meet it—seamlessly and securely
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">Regional Delivery Optimization</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our proprietary smart routing and caching algorithm is tuned for Southeast Asia's geography. We minimize hops, route via low-latency ISPs, and localize caching to match user behavior.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Adaptive caching for high-volume cities & low-connectivity areas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Proprietary routing to avoid congested public paths</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">High availability for both mobile and fixed-line users</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/SoutheastAsiaCDN.jpg"
                  alt="Regional Optimization"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                  alt="Cross-Border Delivery"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Cross-Border</span> Content Delivery
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  EdgeNext connects international platforms to SEA audiences with optimized acceleration and consistent quality.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Backbone built on 1,500+ PoPs and robust ISP peering</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Low-latency static and dynamic content delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Ideal for web apps, downloads, VOD, and live content</span>
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
                  Our integrated edge security stack defends against modern digital threats while maintaining performance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Real-time defense via WAF, Anti-DDoS, and bot mitigation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Origin shielding to protect backend infrastructure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Seamless integration with delivery workflows</span>
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Custom Solutions. Local Support. Real Impact.</h2>
                <p className="text-white/90">
                  Every platform is different—so we build around you. With tailor-made acceleration strategies and dedicated bilingual support, EdgeNext helps you navigate Southeast Asia's complexity with confidence and control.
                </p>
              </div>
              <a 
                href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Looking for more?</h2>
              <p className="text-xl text-gray-600">
                Explore our latest insights and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl mb-4">What Is Adaptive Threat Modulation, and Why Is It Key for DDoS Resilience?</h3>
                <p className="text-gray-600 mb-6">
                  Adaptive threat modulation is a cybersecurity approach that dynamically adjusts defense mechanisms to respond to evolving threats...
                </p>
                <a href="/what-is-adaptive-threat-modulation-and-why-is-it-key-for-ddos-resilience" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl mb-4">How Can Businesses Detect and Defend Against Multi-Vector DDoS Attacks</h3>
                <p className="text-gray-600 mb-6">
                  Multi-vector DDoS attacks are hazardous because they combine multiple attack methods simultaneously to overwhelm a target's defenses...
                </p>
                <a href="/resources/blog/how-can-businesses-detect-and-defend-against-multi-vector-ddos-attacks-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl mb-4">How Can Businesses Prepare a Preemptive DDoS Defense Strategy</h3>
                <p className="text-gray-600 mb-6">
                  A preemptive DDoS defense strategy is essential for businesses because it prepares them to detect and mitigate attacks before the...
                </p>
                <a href="/resources/blog/how-can-businesses-prepare-a-preemptive-ddos-defense-strategy-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Deliver Smarter in Southeast Asia
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  EdgeNext delivers custom-tailored CDN solutions with local compliance expertise and 24/7 bilingual support—so you can focus on growing your business in Southeast Asia with confidence.
                </p>
                <a 
                  href="/contact_us" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="southeast-asia-cdn-contact-form space-y-4" onSubmit={handleSubmit}>
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

export default SoutheastAsiaCDN;