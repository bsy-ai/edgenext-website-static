import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Globe, Network, Shield, Zap, Check, Cloud, Lock, Activity, Building2, Smartphone, Server } from 'lucide-react';
import { createEmptyContactForm } from '../utils/contactFormDefaults';

const MENACDN: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(createEmptyContactForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.company.trim() && formData.country.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(createEmptyContactForm());
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
                  <span className="text-gray-900">Middle East & North</span>
                  <span className="animated-gradient-text block mt-2">Africa (MENA) CDN</span>
                </h1>
                <p className="text-lg md:text-xl text-[#0EB623] mb-8">
                  Optimized for Complex Networks and Diverse User Demands
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  EdgeNext delivers ultra-low latency and secure CDN services across the Middle East and North Africa with adaptive edge caching, region-specific routing, and deep ISP interconnectivity—helping you overcome fragmented infrastructure and deliver consistently high performance across the Middle East and North Africa.
                </p>
                <a 
                  href="/contact_us"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden">
                <img
                  src="/mena-cdn.png"
                  alt="Digital Team Collaboration"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emerging Markets, Expanding Opportunities */}
        <section className="py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Emerging Markets, <span className="text-[#0EB623]">Expanding Opportunities</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Growing Internet Penetration</h3>
                <p className="text-white/80">
                  Internet penetration in MENA reached 76.9% in 2023, up from just 65% in 2019 (Internet World Stats). New users continue to come online across rural and suburban areas.
                </p>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">E-commerce & OTT Acceleration</h3>
                <p className="text-white/80">
                  Online shopping, fintech, and streaming platforms are projected to grow 20-30% YoY in GCC and North African markets (PwC, Statista), creating new infrastructure needs.
                </p>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Check className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Cloud & Smart City Investment</h3>
                <p className="text-white/80">
                  Regional governments are investing heavily in smart city development and edge cloud infrastructure—especially in the UAE, Saudi Arabia, and Egypt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's Challenging MENA Content Delivery? */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  What's Challenging <span className="text-[#0EB623]">MENA Content Delivery?</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl">
                  Navigate the unique challenges of delivering content in MENA's complex digital landscape
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Network className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Uneven Internet Access</h3>
                  <p className="text-gray-600">
                    Only about half the region's population has access to mobile internet, with major gaps between cities and rural areas.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Infrastructure Gaps</h3>
                  <p className="text-gray-600">
                    Some countries in MENA have strong 5G networks, while others still rely on outdated 2G or 3G, causing unstable connections.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Rising Cyber Risks</h3>
                  <p className="text-gray-600">
                    More digital activity has led to more cyberattacks—especially in places with weak protection against threats like DDoS and data breaches.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Big Differences in Speed</h3>
                  <p className="text-gray-600">
                    Internet speeds vary a lot—from over 140 Mbps in Saudi Arabia to under 25 Mbps in countries like Iraq—leading to poor performance in many areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Taking Your Goals to New Heights in MENA */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.08),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Taking Your Goals to <span className="text-[#0EB623]">New Heights in MENA</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored Edge Architecture. Built to Overcome Regional Limits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/mena-cdn.png"
                  alt="MENA Delivery Optimization"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">MENA Delivery Optimization</h3>
                <p className="text-gray-600">
                  Optimize content delivery with intelligent routing and edge optimization tailored for MENA's unique network landscape.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="/streaming.png"
                  alt="Cross-Border Content Delivery"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Cross-Border Content Delivery & Streaming</h3>
                <p className="text-gray-600">
                  Seamless content delivery across MENA borders with optimized routing and local cache optimization for reduced latency.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Enterprise-Grade Security"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Enterprise-Grade Security</h3>
                <p className="text-gray-600">
                  Comprehensive security features designed for MENA's threat landscape with real-time protection and monitoring.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/contact_us" 
                className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
              >
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.03)_0%,transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Key Benefits</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Built to Power the MENA Region's Digital Ascent
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                EdgeNext equips businesses with the scalable delivery, security, and speed needed to meet growing user demand—across borders, devices, and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">MENA</span> Delivery Optimization
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  EdgeNext leverages local partnerships and years of experience serving media, gaming, and commerce in the region. Our proprietary routing algorithms and edge caching maximize performance for MENA's unique network structure.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">City-level edge caching for high-density regions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Adaptive routing based on real-time ISP conditions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">High cache-hit ratios even in underserved markets</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="/mena-cdn.png"
                  alt="MENA Delivery Optimization"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <img 
                  src="/streaming.png"
                  alt="Cross-Border Content Delivery"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Globe className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Cross-Border</span> Content Delivery & Streaming
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  EdgeNext's strategically deployed PoPs in the Gulf, North Africa, and UAE ensure seamless performance for platforms serving both local and international users.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Low-latency delivery for web, app, downloads, and VOD</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Optimized encoding, failover, and acceleration for streaming</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Proven scale for e-commerce, government, and OTT clients</span>
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
                    <span className="text-[#0EB623]">Enterprise-Grade</span> Security
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Protect your content and infrastructure without slowing it down. EdgeNext's integrated Cloud Shield safeguards assets while accelerating performance.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Layered Anti-DDoS and WAF protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Bot and API threat management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Seamless integration into your delivery workflow</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                  alt="Enterprise-Grade Security"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Custom Solutions. Local Support. Real Impact.</h2>
                <p className="text-white/90">
                  Every platform is different—so we build around you. With tailor-made acceleration strategies and dedicated bilingual support, EdgeNext helps you navigate Middle East & North Africa's complexity with confidence and control.
                </p>
              </div>
              <Link 
                to="/contact_us"
                className="px-8 py-4 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Looking for more? */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-4">Looking for more?</h2>
              <p className="text-xl text-gray-600">
                Explore our latest insights and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4">What Is Adaptive Threat Modulation, and Why Is It Key for DDoS Resilience?</h3>
                <p className="text-gray-600 mb-6">
                  Adaptive threat modulation is a cybersecurity approach that dynamically adjusts defense mechanisms to respond to evolving threats...
                </p>
                <Link to="/what-is-adaptive-threat-modulation-and-why-is-it-key-for-ddos-resilience" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </Link>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4">What Are the Implications of Serverless VPS in the Context of Modern App Hosting</h3>
                <p className="text-gray-600 mb-6">
                  Serverless VPS is redefining modern app hosting by offering unparalleled scalability, cost efficiency, and simplicity. Abstracting server management allows developers to focus on innovation...
                </p>
                <Link to="/what-are-the-implications-of-serverless-vps-in-the-context-of-modern-app-hosting" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </Link>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Blog</div>
                <h3 className="text-xl font-medium mb-4">What Are the Emerging Standards for IoT Device Authentication in Smart Factories?</h3>
                <p className="text-gray-600 mb-6">
                  IoT device authentication is critical in smart factories because it ensures secure communication and operation between devices, preventing unauthorized access and potential cyber threats...
                </p>
                <Link to="/what-are-the-emerging-standards-for-iot-device-authentication-in-smart-factories" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the blog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center bg-[#0EB623] text-white font-medium px-8 py-4 rounded-xl hover:bg-[#0EA620] transition-all duration-300"
              >
                View All Resources
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-24 bg-[#0EB623] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Lead the Next Digital Breakthrough in MENA
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  With deep local insight, ultra-reliable delivery, and 24/7 bilingual support, EdgeNext helps you launch, scale, and dominate across the Middle East & North Africa—without compromising speed, security, or control.
                </p>
                <Link 
                  to="/contact_us" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="mena-cdn-contact-form space-y-4" onSubmit={handleSubmit}>
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

export default MENACDN;