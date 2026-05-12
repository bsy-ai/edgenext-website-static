import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Shield, Lock, Settings, Globe, ShoppingCart, Gamepad2, Building2, GraduationCap, Zap, Check, Newspaper, ArrowUpRight, ShieldCheck, Key, Shield as FileShield, ShieldAlert, Rocket, DollarSign, Network, Server, Database, BarChart2, Mail, Activity } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const DNSSecurity: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('website-hosting');
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

  const features = {
    'smart-routing': {
      icon: <Network className="text-[#0EB623]" size={24} />,
      title: "Smart Routing",
      description: "Advanced routing logic with support for EDNS, IPv4/IPv6 dual-stack, and automatic adjustments based on user location.",
      benefits: [
        "Geo-based intelligent routing for global users",
        "IPv4/IPv6 dual-stack compatibility",
        "Adaptive path optimization to reduce resolution time"
      ]
    },
    'security-protection': {
      icon: <Shield className="text-[#0EB623]\" size={24} />,
      title: "Security Protection",
      description: "Multi-layer security with built-in DDoS protection, DNSSEC validation, and real-time threat intelligence.",
      benefits: [
        "Built-in DDoS mitigation",
        "DNSSEC validation and signing",
        "Real-time threat intelligence"
      ]
    },
    'batch-configuration': {
      icon: <Settings className="text-[#0EB623]" size={24} />,
      title: "Batch Configuration",
      description: "Streamlined management of DNS records with bulk operations and automated updates.",
      benefits: [
        "Bulk record management",
        "Automated updates and synchronization",
        "Version control and rollback"
      ]
    },
    'traffic-management': {
      icon: <BarChart2 className="text-[#0EB623]\" size={24} />,
      title: "Intelligent Traffic Management",
      description: "Advanced traffic steering with health checks and automatic failover capabilities.",
      benefits: [
        "Health monitoring and failover",
        "Load balancing across regions",
        "Traffic steering policies"
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
                <span className="text-gray-900">Security DNS</span>
                <span className="animated-gradient-text block">Secure Every Resolution, Everywhere</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto font-light">
                EdgeNext Security DNS helps translate domain names into IP addresses with high availability and scalability—ensuring fast, stable, and secure resolution for your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="group bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-500 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Request a Demo</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0EB623] to-[#0EA620] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0EB623] to-[#0EA620] blur opacity-30 group-hover:opacity-75 transition-all duration-500 group-hover:blur-md"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits Section */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Product Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Performance and protection, engineered for complex digital environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">High Availability</h3>
                <p className="text-gray-300 text-sm">
                  High-availability architecture ensures uninterrupted DNS resolution and continuous service uptime
                </p>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Robust Security</h3>
                <p className="text-gray-300 text-sm">
                  Distributed high-defense clusters provide comprehensive protection against DDoS and other threats
                </p>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Network className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Intelligent Resolution</h3>
                <p className="text-gray-300 text-sm">
                  Supports 200+ network route with geo-aware IPv4/IPv6 resolution for optimal user performance
                </p>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:bg-gray-800 transition-all duration-300">
                <div className="w-12 h-12 bg-[#0EB623]/20 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Global Coverage</h3>
                <p className="text-gray-300 text-sm">
                  DNS servers deployed across six continents with sub-second propagation for record updates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Always Ready Support Section */}
        <section className="py-24 bg-gray-50" id="stats-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Always Ready Support!</h2>
                <p className="text-lg text-gray-600 mb-8">
                  With years of global edge deployment, trusted partnerships, and billions of DNS queries resolved daily, EdgeNext Security DNS is built on proven scale and unmatched resilience.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-gray-600">
                      Our DNS specialists are available anytime to help you stay online and resilient.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Presence</h3>
                    <p className="text-gray-600">
                      With clusters across 6 continents, your users enjoy lightning-fast resolution—wherever they are.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg"
                  alt="Global Network Infrastructure"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 right-0 bg-white/90 backdrop-blur-sm rounded-2xl p-8 m-6 shadow-lg space-y-8"
                >
                  <div>
                    <div className="text-4xl font-bold text-[#0EB623] mb-2" translate="no">
                      {hasScrolled && <CountUp end={50} duration={2} />}+
                    </div>
                    <p className="text-gray-600">Covered Countries in Emerging Markets</p>
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-[#0EB623] mb-2" translate="no">
                      {hasScrolled && <CountUp end={1500} duration={2} />}+
                    </div>
                    <p className="text-gray-600">Global Points of Presence</p>
                  </div>

                  <div>
                    <div className="text-4xl font-bold text-[#0EB623] mb-2" translate="no">
                      {hasScrolled && <CountUp end={90} duration={2} />}+
                    </div>
                    <p className="text-gray-600">Tbps Redundant Bandwidth</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6">Where EdgeNext Protection Makes the Difference</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced security features designed to protect, accelerate, and scale web applications
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
              <div className="lg:col-span-3 mb-6 lg:mb-0">
                <div className="flex flex-nowrap lg:flex-col gap-3 md:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide h-full">
                  <button
                    onClick={() => setActiveFeature('website-hosting')}
                    className={`flex-shrink-0 w-auto lg:w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                      activeFeature === 'website-hosting'
                        ? 'bg-[#0EB623] text-white shadow-lg'
                        : 'hover:bg-[#0EB623] hover:text-white'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      activeFeature === 'website-hosting'
                        ? 'text-white'
                        : 'text-[#0EB623] group-hover:text-white'
                    }`}>
                      <Globe size={20} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium whitespace-nowrap">Website Hosting</span>
                  </button>

                  <button
                    onClick={() => setActiveFeature('email-services')}
                    className={`flex-shrink-0 w-auto lg:w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                      activeFeature === 'email-services'
                        ? 'bg-[#0EB623] text-white shadow-lg'
                        : 'hover:bg-[#0EB623] hover:text-white'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      activeFeature === 'email-services'
                        ? 'text-white'
                        : 'text-[#0EB623] group-hover:text-white'
                    }`}>
                      <Mail size={20} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium whitespace-nowrap">Email Services</span>
                  </button>

                  <button
                    onClick={() => setActiveFeature('high-traffic')}
                    className={`flex-shrink-0 w-auto lg:w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                      activeFeature === 'high-traffic'
                        ? 'bg-[#0EB623] text-white shadow-lg'
                        : 'hover:bg-[#0EB623] hover:text-white'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      activeFeature === 'high-traffic'
                        ? 'text-white'
                        : 'text-[#0EB623] group-hover:text-white'
                    }`}>
                      <Activity size={20} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium whitespace-nowrap">High-Concurrency Workloads</span>
                  </button>

                  <button
                    onClick={() => setActiveFeature('cross-network')}
                    className={`flex-shrink-0 w-auto lg:w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                      activeFeature === 'cross-network'
                        ? 'bg-[#0EB623] text-white shadow-lg'
                        : 'hover:bg-[#0EB623] hover:text-white'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      activeFeature === 'cross-network'
                        ? 'text-white'
                        : 'text-[#0EB623] group-hover:text-white'
                    }`}>
                      <Network size={20} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium whitespace-nowrap">Cross-Region Access</span>
                  </button>

                  <button
                    onClick={() => setActiveFeature('cdn-acceleration')}
                    className={`flex-shrink-0 w-auto lg:w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                      activeFeature === 'cdn-acceleration'
                        ? 'bg-[#0EB623] text-white shadow-lg'
                        : 'hover:bg-[#0EB623] hover:text-white'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      activeFeature === 'cdn-acceleration'
                        ? 'text-white'
                        : 'text-[#0EB623] group-hover:text-white'
                    }`}>
                      <Zap size={20} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium whitespace-nowrap">CDN Acceleration</span>
                  </button>

                  <button
                    onClick={() => setActiveFeature('dns-attacks')}
                    className={`flex-shrink-0 w-auto lg:w-full flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 text-sm md:text-base ${
                      activeFeature === 'dns-attacks'
                        ? 'bg-[#0EB623] text-white shadow-lg'
                        : 'hover:bg-[#0EB623] hover:text-white'
                    }`}
                  >
                    <div className={`transition-colors duration-300 ${
                      activeFeature === 'dns-attacks'
                        ? 'text-white'
                        : 'text-[#0EB623] group-hover:text-white'
                    }`}>
                      <Shield size={20} className="flex-shrink-0" />
                    </div>
                    <span className="font-medium whitespace-nowrap">DNS Attack Defense</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">
                    {activeFeature === 'website-hosting' && 'Website Hosting'}
                    {activeFeature === 'email-services' && 'Email Services'}
                    {activeFeature === 'high-traffic' && 'High-Concurrency Workloads'}
                    {activeFeature === 'cross-network' && 'Cross-Network / Cross-Region Access'}
                    {activeFeature === 'cdn-acceleration' && 'CDN Acceleration'}
                    {activeFeature === 'dns-attacks' && 'Defense Against DNS Attacks'}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                    {activeFeature === 'website-hosting' && 'Use A records to point domain names to the corresponding server IPs, enabling users to access the website directly.'}
                    {activeFeature === 'email-services' && 'Configure MX records based on your email provider\'s requirements to ensure proper sending and receiving of emails.'}
                    {activeFeature === 'high-traffic' && 'When multiple servers support the same service, weighted round-robin DNS can distribute traffic evenly, balancing server load on individual servers.'}
                    {activeFeature === 'cross-network' && 'Leverage intelligent DNS resolution to dynamically return the optimal server address based on users\' geographic locations and network conditions, improving access speed.'}
                    {activeFeature === 'cdn-acceleration' && 'Use CNAME records to redirect traffic to your CDN provider\'s alias, enhancing website load speed and download efficiency.'}
                    {activeFeature === 'dns-attacks' && 'In the event of massive DNS DDoS attacks, Security DNS can absorb high volumes of malicious queries and maintain resolution stability.'}
                  </p>

                  <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Key Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 flex-grow">
                    {activeFeature === 'website-hosting' && (
                      <>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Simple A record configuration</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Enables fast and direct website access</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Supports stable domain resolution</span>
                        </div>
                      </>
                    )}

                    {activeFeature === 'email-services' && (
                      <>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Accurate mail routing</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Smooth email communication</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Easy DNS integration for email</span>
                        </div>
                      </>
                    )}

                    {activeFeature === 'high-traffic' && (
                      <>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Efficient traffic distribution</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Improved server load balancing</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Enhanced system performance</span>
                        </div>
                      </>
                    )}

                    {activeFeature === 'cross-network' && (
                      <>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">ISP-aware resolution</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Regional access optimization</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Faster response time for users</span>
                        </div>
                      </>
                    )}

                    {activeFeature === 'cdn-acceleration' && (
                      <>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Faster content delivery</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Improved page load times</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Seamless CDN integration</span>
                        </div>
                      </>
                    )}

                    {activeFeature === 'dns-attacks' && (
                      <>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">High-volume query resistance</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">24/7 resolution availability</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 md:p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300">
                          <Check className="text-[#0EB623] flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-xs md:text-sm">Continuous service protection</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Real-World DNS Challenges Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">Addressing Real-World DNS Challenges</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Overcome critical DNS obstacles with innovative solutions designed for modern digital environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">01</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Slow or Unstable Domain Resolution</h3>
                <p className="text-[#0EB623]">
                  Smart DNS resolution routes user traffic to the most optimal nodes, enhancing both speed and reliability.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">02</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Complex Multi-Domain Management & Security Requirements</h3>
                <p className="text-[#0EB623]">
                  Private and isolated DNS clusters ensure compliance, brand separation, and enhanced security.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">03</div>
                <h3 className="text-xl font-medium mb-4">Challenge: Cross-Region Latency & Unstable Routing</h3>
                <p className="text-[#0EB623]">
                  Utilizes automated failover and smart traffic scheduling across regions and ISPs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Looking for more Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium mb-4">Looking for more?</h2>
              <p className="text-xl text-gray-600">
                Explore our latest insights and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Network className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4">Why Are DNS Amplification Attacks Still a Major Threat in Modern DDoS Campaigns</h3>
                <p className="text-gray-600 mb-6">
                  DNS amplification attacks exploit the Domain Name System (DNS) to generate massive traffic that overwhelms a target's network...
                </p>
                <a href="/why-are-dns-amplification-attacks-still-a-major-threat-in-modern-ddos-campaigns" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowUpRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4">How Can Businesses Detect and Defend Against Multi-Vector DDoS Attacks?</h3>
                <p className="text-gray-600 mb-6">
                  Multi-vector DDoS attacks are hazardous because they combine multiple attack methods...
                </p>
                <a href="/resources/blog/how-can-businesses-detect-and-defend-against-multi-vector-ddos-attacks-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowUpRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <ShieldAlert className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4">How Can Businesses Prepare a Preemptive DDoS Defense Strategy?</h3>
                <p className="text-gray-600 mb-6">
                  A preemptive DDoS defense strategy is essential for businesses because it prepares them...
                </p>
                <a href="/resources/blog/how-can-businesses-prepare-a-preemptive-ddos-defense-strategy-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowUpRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

         {/* Final CTA Section – simplified, no form */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Looking for DNS You Can Trust Globally?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                EdgeNext Security DNS is built to scale with your business—especially in complex regions like China, Southeast Asia, and MENA.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Get in Touch
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

export default DNSSecurity;