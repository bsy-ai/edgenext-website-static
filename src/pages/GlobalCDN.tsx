import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Shield, Lock, Settings, Globe, ShoppingCart, Gamepad2, Building2, GraduationCap, Zap, Check, Newspaper, ArrowUpRight, ShieldCheck, Key, Shield as FileShield, ShieldAlert, Rocket, DollarSign, Gauge, Network, Headphones, BarChart2, Users, Image, Database, Shield as ShieldIcon, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalCDN: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('performance');
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
    performance: {
      icon: <Zap size={24} />,
      title: "Performance Optimization",
      description: "Accelerate content delivery with intelligent routing and advanced caching algorithms that dynamically optimize for the fastest path to your users.",
      benefits: [
        "Smart routing technology reduces latency",
        "Real-time performance monitoring and automatic optimization",
        "Predictive content prefetching based on user behavior patterns",
        "Adaptive compression algorithms for different network conditions"
      ]
    },
    'cache-control': {
      icon: <Database size={24} />,
      title: "Advanced Cache Control",
      description: "Advanced caching mechanisms that provide granular control over content delivery and updates.",
      benefits: [
        "Custom cache rules and configurations",
        "Instant cache purge capabilities",
        "Edge-side caching logic",
        "Cache hit ratio optimization"
      ]
    },
    'access-management': {
      icon: <Lock size={24} />,
      title: "Granular Access Management",
      description: "Comprehensive security solutions to protect your content and infrastructure from threats.",
      benefits: [
        "IP-based access control",
        "Geographic restrictions",
        "Rate limiting capabilities",
        "Custom security rules"
      ]
    },
    'multi-origin': {
      icon: <Network size={24} />,
      title: "Multi-Origin Resilience",
      description: "Ensure high availability and fault tolerance with multi-origin support and intelligent failover.",
      benefits: [
        "Automatic failover between origins",
        "Load balancing across origins",
        "Origin health monitoring",
        "Geographic origin routing"
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
                <span className="text-gray-900">Global Content Delivery</span>
                <span className="animated-gradient-text block mt-2">Without Boundaries</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto font-light">
                EdgeNext's Global CDN delivers lightning-fast content with unparalleled performance across 1700+ points of presence worldwide, with dominant coverage in Southeast Asia, China, and MENA regions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Start Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
                <Link 
                  to="/contact_us"
                  className="glass-card border border-gray-200 text-gray-800 font-medium px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/80 hover:border-[#0EB623]/20 hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
              <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">1700+</div>
                <div className="text-sm md:text-base text-gray-700">Global Points of Presence</div>
              </div>
              <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">80+</div>
                <div className="text-sm md:text-base text-gray-700">Tbps Total Bandwidth</div>
              </div>
              <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">60B+</div>
                <div className="text-sm md:text-base text-gray-700">Requests Processed Daily</div>
              </div>
              <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">{"<30ms"}</div>
                <div className="text-sm md:text-base text-gray-700">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EdgeNext Global CDN Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.08),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Why Choose EdgeNext Global CDN?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our content delivery network is built for speed, reliability, and global reach with special focus on emerging markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Optimized Performance */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Optimized Performance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Advanced caching algorithms for faster content delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Smart routing optimization for minimal latency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Real-time performance monitoring and optimization</span>
                  </li>
                </ul>
              </div>

              {/* Enhanced Security */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Enhanced Security</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Multi-layered DDoS protection up to Layer 7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Web Application Firewall with custom rules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">SSL/TLS encryption and bot protection</span>
                  </li>
                </ul>
              </div>

              {/* Cost Efficiency */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Cost Efficiency</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Pay-as-you-go pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Bandwidth optimization for cost savings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Predictable pricing for better budgeting</span>
                  </li>
                </ul>
              </div>

              {/* Customizable Solutions */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Customizable Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Flexible configuration options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Tailored enterprise solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Custom feature development</span>
                  </li>
                </ul>
              </div>

              {/* Global Coverage */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Global Coverage</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">1,700+ nodes in 300+ cities ensure minimal latency worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Regional content optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Local ISP partnerships worldwide</span>
                  </li>
                </ul>
              </div>

              {/* Expert Support */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Headphones className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Expert Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">24/7 dedicated support team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Multi-language support available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600">Proactive monitoring and alerts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Network Excellence Section */}
        <section className="py-24 relative overflow-hidden bg-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">Regional Network Excellence</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Delivering unparalleled performance across strategic markets with specialized infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Southeast Asia CDN */}
              <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)] transition-all duration-500">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Southeast Asia CDN</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">SEA Delivery Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Extensive Global Network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Tailored Solutions for SEA Challenges</span>
                  </li>
                </ul>
                <Link to="/southeast_asia_cdn" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Explore SEA CDN <ArrowRight className="ml-2 group-hover:translate-x-1" size={16} />
                </Link>
              </div>

              {/* China CDN */}
              <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)] transition-all duration-500">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">China CDN</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Cross-border Content Delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">ICP license support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Local cache optimization</span>
                  </li>
                </ul>
                <Link to="/china_cdn" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Explore China CDN <ArrowRight className="ml-2 group-hover:translate-x-1" size={16} />
                </Link>
              </div>

              {/* MENA CDN */}
              <div className="group bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/40 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)] transition-all duration-500">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">MENA CDN</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Compliance-Ready Infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Deep Local Partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-[#0EB623] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">Optimized Arabic Content Delivery</span>
                  </li>
                </ul>
                <Link to="/mea_cdn" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Explore MENA CDN <ArrowRight className="ml-2 group-hover:translate-x-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.08),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Customer Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading companies achieve remarkable results with EdgeNext
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* E-commerce Case Study */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Global Delivery – Top Ecommerce in SEA</h3>
                <p className="text-gray-600 mb-6">
                  Enabled fast and stable livestreaming for major sales events across Southeast Asia's booming ecommerce market with redundant infrastructure and analytics.
                </p>
                <Link to="/global-delivery-top-ecommerce-in-sea" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              {/* Gaming Case Study */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">CDN Gaming Solution for US Top Gaming Company</h3>
                <p className="text-gray-600 mb-6">
                  Optimized game downloads and ensured seamless play with intelligent edge delivery solutions.
                </p>
                <Link to="/case-study/cdn-gaming-solution-for-us-top-gaming-company" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              {/* Media Case Study */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Film className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Media on Demand Solution for Top Global Short Video Platform</h3>
                <p className="text-gray-600 mb-6">
                  Enhanced video delivery and reduced buffering time across global short-form content platforms.
                </p>
                <Link to="/media-on-demand-solution-for-top-global-short-video-platform" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read Case Study <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-24 relative overflow-hidden bg-gray-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Core Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful capabilities that make EdgeNext the preferred choice for global content delivery
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                  {Object.entries(features).map(([key, feature]) => (
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
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-medium mb-4">{features[activeFeature].title}</h3>
                  <p className="text-gray-600 mb-8">{features[activeFeature].description}</p>

                  <h4 className="font-semibold mb-4">Key Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features[activeFeature].benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300"
                      >
                        <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0EB623] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                  Ready to Transform Your Global Content Delivery?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Join the leading companies leveraging EdgeNext for unparalleled performance across emerging markets.
                </p>
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Start Your Free Trial
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="global-cdn-contact-form space-y-4" onSubmit={handleSubmit}>
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

export default GlobalCDN;