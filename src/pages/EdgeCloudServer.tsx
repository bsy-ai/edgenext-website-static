import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Zap, Box, Globe, ShoppingCart, Gamepad2, Trophy, GraduationCap, Play, Settings, BarChart2, Film, Shield, Check, Rss, Newspaper, ArrowUpRight, Cog, BarChart as ChartBar, FileVideo, Lock, Network, Activity, ShieldAlert, Radar, Server, Database, Cloud, Car, Building2, Camera, Rocket } from 'lucide-react';
import { useEffect } from 'react';
import CountUp from 'react-countup';

const EdgeCloudServer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('new-emerging');
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: ''
  });
  const [isTrialSubmitted, setIsTrialSubmitted] = useState(false);
  const [trialFormData, setTrialFormData] = useState({
    email: '',
    company: ''
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3');
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

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trialFormData.email.trim() && trialFormData.company.trim()) {
      setIsTrialSubmitted(true);
      setTimeout(() => {
        setIsTrialSubmitted(false);
        setTrialFormData({ email: '', company: '' });
      }, 3000);
    }
  };

  const handleTrialInputChange = (field: string, value: string) => {
    setTrialFormData(prev => ({ ...prev, [field]: value }));
  };

  const tabs = {
    'new-emerging': {
      title: 'New Emerging Market Regions',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Asia</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Kazakhstan – Pavlodar</li>
              <li>Uzbekistan – Tashkent</li>
              <li>Pakistan – Karachi</li>
              <li>Nepal – Kathmandu</li>
              <li>Mongolia – Ulaanbaatar</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-4">Middle East</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Saudi Arabia – Riyadh</li>
              <li>Iraq – Baghdad</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Africa</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Nigeria – Lagos</li>
              <li>Kenya – Nairobi</li>
              <li>South Africa – Johannesburg</li>
              <li>Libya – Tripoli</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-4">Oceania</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Australia – Sydney</li>
            </ul>
          </div>
        </div>
      )
    },
    'mature': {
      title: 'Mature Market Regions',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Asia</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Hong Kong, China</li>
              <li>Singapore</li>
            </ul>

            <h4 className="text-lg font-semibold mt-8 mb-4">Middle East</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Dubai, United Arab Emirates</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">North America</h4>
            <ul className="space-y-3 text-gray-600">
              <li>Los Angeles, United States</li>
            </ul>
          </div>
        </div>
      )
    },
    'specs': {
      title: 'Instance Specifications',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4">vCPU</th>
                <th className="text-left py-4 px-4">Memory</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">1 vCPU</td>
                <td className="py-4 px-4">2 GB / 4 GB</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">2 vCPU</td>
                <td className="py-4 px-4">4 GB / 8 GB</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">4 vCPU</td>
                <td className="py-4 px-4">8 GB / 16 GB</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">8 vCPU</td>
                <td className="py-4 px-4">16 GB / 32 GB</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">16 vCPU</td>
                <td className="py-4 px-4">32 GB / 64 GB</td>
              </tr>
              <tr>
                <td className="py-4 px-4">32 vCPU</td>
                <td className="py-4 px-4">64 GB</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    'deal': {
      title: 'Exclusive New User Deal',
      content: (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4">Subscription Term</th>
                <th className="text-left py-4 px-4">Discount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">1 Month</td>
                <td className="py-4 px-4">10% off</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-4">6 Months</td>
                <td className="py-4 px-4">10% off → 19% off</td>
              </tr>
              <tr>
                <td className="py-4 px-4">12 Months</td>
                <td className="py-4 px-4">20% off → 28% off</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
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
                <span className="text-gray-900">Ultra-Fast Edge Cloud</span>
                <span className="animated-gradient-text block mt-2">Servers Worldwide</span>
              </h1>
              <p className="text-base md:text-xl text-[#0EB623] mb-6 md:mb-8 max-w-3xl mx-auto font-medium">
                Lightweight global cloud hosting. Go edge in 30 seconds
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-4xl mx-auto font-light">
                EdgeNext Edge Cloud Server (ECS) leverages 1,700+ global edge nodes to create an edge computing network, bringing cloud power closer to end users. It delivers low-latency, scalable services worldwide, with a focus on emerging markets with high computing demand across Asia, the Middle East, Africa, North America, and Oceania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0EB623] to-[#0EA620] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0EB623] to-[#0EA620] blur opacity-30 group-hover:opacity-75 transition-all duration-500 group-hover:blur-md"></div>
                </a>
                <a 
                  href="/contact_us" 
                  className="glass-card border border-gray-200 text-gray-800 font-medium px-8 py-4 rounded-xl hover:bg-white/80 hover:border-[#0EB623]/20 hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Start Your Free Trial Section */}
        <section id="free-trial" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-4">Get Started in Minutes</h2>
              <p className="text-lg text-gray-600 mb-2">
                Gain free, hands-on experience with EdgeNext ECS
              </p>
              <p className="text-lg text-gray-600 mb-12">
                Test out ECS performance with a 30-day free trial. Choose from nodes across Asia, Africa, Oceania, and North America
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-medium mb-6">Trial Specs:</h3>
              
              <div className="grid grid-cols-2 gap-8 mb-8 text-left">
                <div className="flex items-center gap-3">
                  <div className="text-[#0EB623]">
                    <Server size={20} />
                  </div>
                  <div className="font-medium">1vCPU</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-[#0EB623]">
                    <Database size={20} />
                  </div>
                  <div className="font-medium">1GB RAM</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-[#0EB623]">
                    <Cloud size={20} />
                  </div>
                  <div className="font-medium">40GB Cloud Disk</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-[#0EB623]">
                    <Network size={20} />
                  </div>
                  <div className="font-medium">1Mbps Bandwidth</div>
                </div>
              </div>

              <form className="edge-cloud-server-trial-form space-y-6" onSubmit={handleTrialSubmit}>
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={trialFormData.email}
                    onChange={(e) => handleTrialInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    placeholder="Company name" 
                    value={trialFormData.company}
                    onChange={(e) => handleTrialInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0EB623] focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center ${
                    isTrialSubmitted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-[#0EB623] hover:bg-[#0EA620] text-white'
                  }`}
                >
                  {isTrialSubmitted ? '✓ Trial Request Sent!' : (
                    <>
                      Start Free Trial
                      <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Global Map Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-medium text-center mb-6">Global Coverage, Local Performance</h2>
            <p className="text-xl text-gray-600 text-center mb-8">
              Deploy your applications closer to your users with our strategic edge nodes worldwide
            </p>
            
            <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
              <iframe
                src="/kepler-gl-1.html"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                title="EdgeNext Global Network Map"
                className="absolute inset-0"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#0EB623] mb-2" translate='no'>
                  {hasScrolled && <CountUp end={16} duration={2} />}
                  {!hasScrolled && "16"}
                </div>
                <div className="text-lg text-gray-700">Live Nodes</div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-[#0EB623] mb-2" translate='no'>
                  {hasScrolled && <CountUp end={7} duration={2} />}
                  {!hasScrolled && "7"}
                </div>
                <div className="text-lg text-gray-700">Nodes in Progress</div>
              </div>
              
              <div className="text-center">
                <div className="text-6xl font-bold text-[#0EB623] mb-2" translate='no'>
                  {hasScrolled && <CountUp end={6} duration={2} />}
                  {!hasScrolled && "6"}
                </div>
                <div className="text-lg text-gray-700">Continents Covered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits Section */}
        <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Why Choose EdgeNext?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Superior performance and reliability for your mission-critical applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">Sub-Second Latency</h3>
                <p className="text-gray-600">Reduce latency by up to 80% with our edge locations positioned closer to your users worldwide.</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">Global Scale</h3>
                <p className="text-gray-600">Edge nodes not only in developed regions, but in emerging markets like Libya, Pakistan, Uzbekistan — deploy where others can't.</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">Built-In Compliance</h3>
                <p className="text-gray-600">Meet regional data laws and bank-level security needs with localized infrastructure and multilayer protection.</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">Flexible Customizable</h3>
                <p className="text-gray-600">Tailor CPU, memory, storage, and regions to your needs. Deploy across multiple regions and AZs for low latency and resilience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Limited Time Offer CTA Banner */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0EB623]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6">
                Limited Time Offer
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
                Up to 50% off Monthly, Plus Another 10% off per Year
              </h2>
              
              <p className="text-xl text-white/90 mb-8">
                Get started with ECS today and experience the power of edge computing within 5 minutes
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/90 backdrop-blur-md text-[#0EB623] rounded-xl font-medium hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Claim Discount
                </a>
                <span className="text-white/90">
                  Offer ends soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Powerful Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to deploy and manage edge applications at scale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-[#0EB623]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Instant Deployment</h3>
                  <p className="text-gray-600">
                    Deploy your applications in seconds with our one-click deployment system and automated scaling.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Settings className="text-[#0EB623]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Auto-Scaling</h3>
                  <p className="text-gray-600">
                    Automatically scale resources up or down based on demand with intelligent load balancing across nodes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart2 className="text-[#0EB623]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-600">
                    Monitor performance, traffic, and resource usage with comprehensive analytics and alerts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="text-[#0EB623]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Edge Storage</h3>
                  <p className="text-gray-600">
                    Distributed storage with automatic replication and backup across edge locations, up to 20 cloud disks per instance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Network className="text-[#0EB623]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Private Networking</h3>
                  <p className="text-gray-600">
                    Deploy in your own Virtual Private Network (VPC) with isolated subnets and custom access policies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="text-[#0EB623]" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Multi-Layered Security</h3>
                  <p className="text-gray-600">
                    Protect your workloads with built-in firewalls and intrusion detection, creating a bank-level defense layer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Edge-Ready Solutions Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-[#0EB623] text-sm font-medium mb-4">APPLICATION SCENARIOS</div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Perfect for Every Use Case</h2>
            <p className="text-xl text-gray-600 mb-16 max-w-4xl">
              See how EdgeNext ECS powers applications across industries
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
                  alt="Gaming & Entertainment"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Gaming & Entertainment</h3>
                <p className="text-gray-600 mb-4">
                  Reduce game latency by <span className="text-[#0EB623] font-medium">57%</span> and provide seamless multiplayer experiences with edge servers close to players.
                </p>
                <p className="text-[#0EB623] font-medium">60ms → 26ms average latency</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                  alt="IoT & Smart Cities"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">IoT & Smart Cities</h3>
                <p className="text-gray-600 mb-4">
                  Process IoT data at the edge for real-time decision making and reduced bandwidth costs.
                </p>
                <p className="text-[#0EB623] font-medium">90% reduction in data transfer</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/streaming.png"
                  alt="Content Delivery"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Content Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Deliver video, images, and static content with lightning-fast speeds and <span className="text-[#0EB623] font-medium">99.9%</span> availability.
                </p>
                <p className="text-[#0EB623] font-medium">3x faster content delivery</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg"
                  alt="Scalable Commerce"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Scalable Commerce</h3>
                <p className="text-gray-600 mb-4">
                  Handle seasonal surges, high-volume transactions, and flash sales with elastic compute and load balancing.
                </p>
                <p className="text-[#0EB623] font-medium">2× faster response during peak traffic</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg"
                  alt="Secure Workloads"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Secure Workloads</h3>
                <p className="text-gray-600 mb-4">
                  Power fintech, healthcare, and other critical apps with encrypted, high-concurrency cloud infrastructure.
                </p>
                <p className="text-[#0EB623] font-medium">99.5% uptime for secure transactions</p>
              </div>

              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg"
                  alt="Edge AI Deployment"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Edge AI Deployment</h3>
                <p className="text-gray-600 mb-4">
                  Run pre-trained AI models at the edge for voice, image, and chatbot services. Cut latency bottlenecks.
                </p>
                <p className="text-[#0EB623] font-medium">Real-time inference under 20ms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right plan for your project, with flexible performance options and competitive pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Devs Plan */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <h3 className="text-2xl font-bold mb-6">Devs</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="font-medium">1v2G</div>
                      <p className="text-gray-400 text-sm">start from $12.77/mo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="font-medium">2v4G</div>
                      <p className="text-gray-400 text-sm">start from $25.29/mo</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium py-3 rounded-xl transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <h3 className="text-2xl font-bold mb-6">Pro</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="font-medium">4v8G</div>
                      <p className="text-gray-400 text-sm">start from $50.07/mo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="font-medium">8v16G</div>
                      <p className="text-gray-400 text-sm">start from $99.14/mo</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium py-3 rounded-xl transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
              
              {/* Business Plan */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <h3 className="text-2xl font-bold mb-6">Business</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="font-medium">16v32G</div>
                      <p className="text-gray-400 text-sm">start from $196.29/mo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-[#0EB623] flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="font-medium">32v64G</div>
                      <p className="text-gray-400 text-sm">start from $388.66/mo</p>
                    </div>
                  </div>
                </div>
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium py-3 rounded-xl transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="/contact_us" className="inline-flex items-center text-[#0EB623] font-medium hover:gap-2 transition-all duration-300">
                Contact Us for Custom Plans
                <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Looking for More Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-medium text-center mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 text-center mb-16">
              See how leading companies are transforming their businesses with EdgeNext
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-4">Top Gaming Company</h3>
                <p className="text-[#0EB623] font-medium mb-2">30% Lower Cloud Costs</p>
                <p className="text-gray-600 mb-6">
                  Deployed custom edge nodes to support its rapid growth across MEA, SEA, and Europe with <span className="text-[#0EB623] font-medium">30%+</span> cost savings, smoother gameplay.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Car className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-4">Auto + VoT Company</h3>
                <p className="text-[#0EB623] font-medium mb-2">Compliant Expansion into Central Asia</p>
                <p className="text-gray-600 mb-6">
                Ensured regional compliance and improved connectivity across Central Asia with local edge nodes and optimized networking.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-4">Micro-drama Studio</h3>
                <p className="text-[#0EB623] font-medium mb-2">80% Less Video Buffering</p>
                <p className="text-gray-600 mb-6">
                  Reduced buffering by <span className="text-[#0EB623] font-medium">80%</span> and cut transmission distance by over <span className="text-[#0EB623] font-medium">90%</span>, with caches pushed closer to users and a custom network solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-r from-[#0EB623] to-[#0CA61F] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Ready to Experience the Edge Advantage?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Join thousands of businesses already growing with EdgeNext. Start your free trial today and see the difference for yourself.
                </p>
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={24} />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-medium text-white mb-6 text-left">Need Custom Solutions?</h3>
                <form className="edge-cloud-server-contact-form space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-white/90 mb-2">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all duration-300 focus:bg-white/20"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all duration-300 focus:bg-white/20"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all duration-300 focus:bg-white/20"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all duration-300 focus:bg-white/20"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 group ${
                      isSubmitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-[#0EB623] hover:bg-opacity-90'
                    }`}
                  >
                    {isSubmitted ? '✓ Message Sent!' : (
                      <>
                        Contact Sales Team
                        <ArrowRight className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" size={20} />
                      </>
                    )}
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

export default EdgeCloudServer;