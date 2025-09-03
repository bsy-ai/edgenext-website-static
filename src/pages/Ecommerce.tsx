import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, ShoppingCart, Globe, Shield, Zap, Check, Network, Cloud, Lock, Activity, Building2, Database, Gauge } from 'lucide-react';
import CountUp from 'react-countup';

const Ecommerce: React.FC = () => {
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

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !hasScrolled) {
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

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
                  <span className="text-gray-900">Powering the Future</span>
                  <span className="animated-gradient-text block mt-2">of E-Commerce</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  As global e-commerce expands, brands rely on innovation and service quality to boost traffic, loyalty, and sales. EdgeNext empowers them with seamless, localized solutions to stay ahead.
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
                  src="/ecommerce1.png"
                  alt="E-commerce Team"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* All-In-One Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                <span className="text-[#0EB623]">All-In-One,</span> Global E-Commerce Delivery
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                EdgeNext provides an all-in-one acceleration and protection layer tailored for e-commerce. Whether you're expanding into MENA, SEA, or Central Asia, we deliver a localized, secure, and responsive experience for your shoppers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Network className="text-[#0EB623]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-4">Localized CDN + Acceleration</h3>
                    <p className="text-gray-600">
                      Deliver lightning-fast user experiences worldwide with a fully localized edge network and 1,700+ PoPs—designed to bypass cross-border latency and routing challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="text-[#0EB623]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-4">24/7 DDoS & WAF Protection</h3>
                    <p className="text-gray-600">
                      Stay protected day and night. Our multi-layered security stack includes AI-driven WAF and real-time DDoS detection with instant mitigation—keeping your business online, even under attack.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gauge className="text-[#0EB623]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-4">Instant Auto-Scaling</h3>
                    <p className="text-gray-600">
                      Anticipate traffic spikes before they happen. EdgeNext automatically scales bandwidth and compute resources in real-time, so you never miss a sale—even during viral campaigns or mega sales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-[#0EB623]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-4">Multi-Region Support & Compliance</h3>
                    <p className="text-gray-600">
                      Operate confidently across regulatory-heavy markets. Our infrastructure is tailored for GDPR, PDPA, and regional data sovereignty laws—ensuring high-speed delivery without compliance risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Key Benefits</div>
              <h2 className="text-4xl font-medium mb-4">Grow Faster in Emerging Markets</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                EdgeNext fuels next-gen shopping experiences with localized acceleration, security, and real-time infrastructure—ready for wherever your brand goes next.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Cloud className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Accelerated</span> Global Rollout
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Leverage EdgeNext's localized infrastructure and orchestration tools to roll out e-commerce services across all over the world.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Auto-scaling for flash sales and peak traffic</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Centralized console for rapid multi-region rollout</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Auto-scaling for flash sales, viral campaigns, and holiday spikes</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/ecommerce2.png"
                  alt="Global Rollout"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <img 
                  src="/ecommerce3.png"
                  alt="Edge Security"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Lock className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Integrated Edge Security</span> Built In
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Attacks often spike during promotions. We intercept them before they reach your origin.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">AI-driven bot filtering at edge nodes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">24/7 DDoS mitigation with real-time telemetry</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Application-layer WAF with localized rule tuning</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Hyper-Localized</span> User Experience
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our edge platform optimizes delivery for regions with high mobile usage, limited infrastructure, and complex regulations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Local DNS resolution + CDN edge cache acceleration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Adaptive routing for unstable networks (Africa, SEA)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Secure, high-quality experience for every session</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/ecommerce4.jpg"
                  alt="User Experience"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Free Trial Section */}
        <section className="py-12 bg-gradient-to-r from-yellow-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-2">Test our services for your business needs</h2>
                <p className="text-gray-600">
                  Scale faster with localized edge support—built for e-commerce growth.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-gray-700 rounded-xl hover:text-[#0EB623] font-medium transition-colors">
                  Learn more
                </a>
                <a href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors font-medium">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Resources</div>
              <h2 className="text-4xl font-medium mb-4">Looking for More?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how EdgeNext helped fast-growing e-commerce platforms overcome latency, scalability, and security hurdles—unlocking new opportunities in emerging markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl mb-4">Dynamic Acceleration Solution for Top E-commerce in China</h3>
                <p className="text-gray-600 mb-6">
                  How we helped China's largest online retailer handle massive traffic spikes during major sales events with 95%+ cache hit rates and fastest response times.
                </p>
                <a href="/dynamic-acceleration-solution-for-top-e-commerce-in-china" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl mb-4">Global Delivery – Top Ecommerce in SEA</h3>
                <p className="text-gray-600 mb-6">
                  Enabled fast and stable livestreaming for major sales events across Southeast Asia's booming ecommerce market with redundant infrastructure and analytics.
                </p>
                <a href="/global-delivery-top-ecommerce-in-sea" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl mb-4">CDN Gaming Solution for US Top Gaming Company</h3>
                <p className="text-gray-600 mb-6">
                  Optimized game downloads and ensured seamless play with intelligent edge delivery, handling traffic surges up to 12x daily average.
                </p>
                <a href="/cdn-gaming-solution-for-us-top-gaming-company" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Ready to Grow Your Business Globally?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  EdgeNext empowers e-commerce platforms with ultra-low latency, reliable uptime, and localized delivery—so you can scale across emerging markets with confidence.
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
                <form className="ecommerce-contact-form space-y-4" onSubmit={handleSubmit}>
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

export default Ecommerce;