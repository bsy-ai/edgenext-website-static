import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Zap, Box, Globe, ShoppingCart, Gamepad2, Trophy, GraduationCap, Play, Settings, BarChart2, Film, Shield, Check, Rss, Newspaper, ArrowUpRight, Cog, BarChart as ChartBar, FileVideo, Lock, Network, Activity, ShieldAlert, Radar, Server } from 'lucide-react';

const AntiDDoS: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('high-throughput');


  const features = {
    'high-throughput': {
      icon: <Network className="text-[#0EB623]" size={24} />, 
      title: "High Throughput",
      description: "Engineered to handle massive volumes of traffic with powerful cleaning capabilities at the device level.",
      benefits: [
        "Handles up to 100Gbps and 100Mpps packet scrubbing",
        "2× performance improvement over traditional solutions",
        "Ideal for large-scale attack scenarios with high concurrency"
      ]
    },
    'low-latency': {
      icon: <Activity className="text-[#0EB623]" size={24} />, 
      title: "Low Latency",
      description: "Optimized for real-time protection with ultra-low response delay.",
      benefits: [
        "Process under 20μs latency",
        "~50% lower delay than traditional solutions",
        "Enhances experience for latency-sensitive applications"
      ]
    },
    'flexible-compatibility': {
      icon: <Lock className="text-[#0EB623]" size={24} />, 
      title: "Wide Compatibility",
      description: "Adapts seamlessly to various network environments and bandwidth needs.",
      benefits: [
        "Supports 10G / 25G / 40G / 100G NICs",
        "Ensures deployment across diverse hardware environments",
        "Suitable for enterprise-level customization"
      ]
    },
    'agile-deployment': {
      icon: <Settings className="text-[#0EB623]" size={24} />, 
      title: "Agile Deployment",
      description: "Lightweight and software-based design for rapid rollout and flexible scaling.",
      benefits: [
        "Pure software deployment—no hardware lock-in",
        "Easy to batch-deploy and maintain",
        "Scalable for growing business demands"
      ]
    },
    'universal-compatibility': {
      icon: <Server className="text-[#0EB623]" size={24} />, 
      title: "High Versatility",
      description: "Built on general-purpose X86 servers, minimizing cost while maximizing interoperability.",
      benefits: [
        "Compatible with mainstream server infrastructure",
        "No need for proprietary hardware",
        "Lower TCO with high performance and flexibility"
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
                <span className="text-gray-900">EdgeNext</span>
                <span className="animated-gradient-text block mt-2">Anti-DDoS</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto font-light">
                Enterprise-grade Anti-DDoS protection with instant mitigation, intelligent filtering, and global coverage—engineered to keep your services online under any threat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact_us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-500 flex items-center justify-center relative overflow-hidden"
                >
                  <span className="relative z-10">Start Now</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0EB623] to-[#0EA620] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0EB623] to-[#0EA620] blur opacity-30 group-hover:opacity-75 transition-all duration-500 group-hover:blur-md"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Benefits Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-6 text-gray-900">AI-Powered Security at Every Layer</h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Performance and protection, engineered for complex digital environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 to-transparent rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0EB623]/20 to-[#0EB623]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Comprehensive Threat Defense</h3>
                  <p className="text-gray-600">
                    Supports traffic scrubbing across Layers 3 to 7, thoroughly blocking and filtering all types of threats.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 to-transparent rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0EB623]/20 to-[#0EB623]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Server className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Intelligent Protection</h3>
                  <p className="text-gray-600">
                    Leverages AI and global threat intelligence, combined with behavioral analysis and signature learning, to deliver adaptive, real-time defense.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 to-transparent rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0EB623]/20 to-[#0EB623]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Access Control</h3>
                  <p className="text-gray-600">
                    Enables IP whitelisting and blacklisting, with botnet intelligence to filter out malicious IPs.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 to-transparent rounded-2xl transform transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0EB623]/20 to-[#0EB623]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Real-Time Monitoring & Alerts</h3>
                  <p className="text-gray-600">
                    Provides live attack monitoring and instant alerts, enabling instant visibility into ongoing threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Anti-DDoS Section */}
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-medium mb-6">Global Anti-DDoS<br />Local Strike Power</h2>
                <p className="text-lg text-gray-600 mb-6">
                  EdgeNext Anti-DDoS equips Internet Data Centers with high-speed, scalable DDoS defense designed for peak resilience.
                </p>
                <p className="text-lg text-gray-600">
                  Featuring local software deployment, a unified control hub, and dynamic cluster scaling, it ensures rapid mitigation, seamless network performance, and always-on protection—so your infrastructure stays fast, stable, and secure even under massive attack traffic.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0EB623]/10 via-transparent to-[#0EB623]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <img 
                  src="/map.png" 
                  alt="Global Network Map" 
                  className="rounded-2xl shadow-lg transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Core Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-medium mb-4">Core Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Advanced security features designed to protect, accelerate, and scale web applications
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-3">
                <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                  {Object.entries(features).map(([key, feature]) => (
                      <button
                        key={key}
                        onClick={() => setActiveFeature(key)}
                        className={`group flex-shrink-0 w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-500 relative overflow-hidden ${
                          activeFeature === key 
                            ? 'bg-[#0EB623] text-white shadow-lg'
                            : 'hover:bg-[#0EB623] hover:text-white'
                        }`}
                      >
                        <div className={`transition-colors duration-300 ${
                          activeFeature === key 
                            ? 'text-white' 
                            : 'text-[#0EB623] group-hover:text-white'
                        }`}>
                          {feature.icon}
                        </div>
                        <span className="font-medium whitespace-nowrap relative z-10">{feature.title}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0EB623] to-[#0EA620] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="bg-white rounded-xl p-8 shadow-lg group hover:shadow-xl transition-all duration-500">
                  <div className="mb-8">
                    <h3 className="text-2xl font-medium mb-4">{features[activeFeature].title}</h3>
                    <p className="text-gray-600">{features[activeFeature].description}</p>
                  </div>

                  <h4 className="font-semibold mb-4">Key Benefits</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features[activeFeature].benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="group flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-[#0EB623]/5 transition-all duration-300"
                      >
                        <Check className="text-[#0EB623] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Scenarios Section */}
        <section className="py-16 md:py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">Real-World Scenarios, Real-Time Defense</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Practical protection for your most critical digital assets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6">
                  <Network className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Network-Layer DDoS Attacks</h3>
                <p className="text-gray-300">
                  Blocks and cleans malicious traffic before it ever reaches the data center, preventing server downtime from DDoS attacks.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6">
                  <Server className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Backend Resource Strain</h3>
                <p className="text-gray-300">
                  Filters invalid requests at the network edge to reduce server and bandwidth load, improving resource efficiency and system stability.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Traffic Monitoring & Intelligent Defense</h3>
                <p className="text-gray-300">
                  Continuously monitors traffic in real time, identifies abnormal behaviors, and dynamically adjusts protection strategies to ensure network security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Looking for more Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-medium mb-4">Looking for more?</h2>
              <p className="text-lg text-gray-600">
                Explore our latest insights and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Radar className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">What Is Adaptive Threat Modulation, and Why Is It Key for DDoS Resilience?</h3>
                <p className="text-gray-600 mb-6">
                  Adaptive threat modulation is a cybersecurity approach that dynamically adjusts defense mechanisms to respond to evolving threats...
                </p>
                <a href="/resources/blog/what-is-adaptive-threat-modulation-and-why-is-it-key-for-ddos-resilience-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform duration-300" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ShieldAlert className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">How Can Businesses Detect and Defend Against Multi-Vector DDoS Attacks?</h3>
                <p className="text-gray-600 mb-6">
                  Multi-vector DDoS attacks are hazardous because they combine multiple attack methods simultaneously to overwhelm a target's defens...
                </p>
                <a href="/resources/blog/how-can-businesses-detect-and-defend-against-multi-vector-ddos-attacks-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform duration-300" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">How Can Businesses Prepare a Preemptive DDoS Defense Strategy?</h3>
                <p className="text-gray-600 mb-6">
                  A preemptive DDoS defense strategy is essential for businesses because it prepares them to detect and mitigate attacks before the...
                </p>
                <a href="/resources/blog/how-can-businesses-prepare-a-preemptive-ddos-defense-strategy-" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform duration-300" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

{/* Final CTA Section – career style */}
<section className="py-16 md:py-24 bg-[#0EB623]">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
        Ready to defend your digital assets?
      </h2>
      <p className="text-lg text-white/90 mb-8">
        Join the leading companies leveraging EdgeNext for unparalleled DDoS protection across emerging markets.
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

export default AntiDDoS;