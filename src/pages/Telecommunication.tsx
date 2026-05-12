import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Network, Shield, Globe, Check, Zap, Radio, Cloud, Lock, Activity, Server, Database, Settings } from 'lucide-react';
import CountUp from 'react-countup';

const Telecommunication: React.FC = () => {
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
                  <span className="text-gray-900">Game-Changer for</span>
                  <span className="animated-gradient-text block mt-2">ISPs & IIGs</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  From cost-cutting to service innovation, EdgeNext helps ISPs and IIGs break free from the price war, build scalable offerings, and unlock new profit engines—faster, safer, and smarter.
                </p>
                <a
                  href="/contact-us"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="/telco.png"
                  alt="Telecommunication Team"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industry Challenges Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium tracking-wider mb-4">Industry Challenges</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Navigating the Toughest <span className="text-[#0EB623]">Challenges</span> in Telecom
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Overcome critical obstacles with innovative solutions designed for modern telecom providers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Price War & Lack of Differentiation</h3>
                <p className="text-gray-600">
                  Competing solely on price leads to margin erosion and makes it hard to stand out in an increasingly crowded market.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Bandwidth Cost vs. Scalability</h3>
                <p className="text-gray-600">
                  Increasing demand for bandwidth requires scalable infrastructure that doesn't break the budget while maintaining quality.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Cybersecurity Threats</h3>
                <p className="text-gray-600">
                  Telcos are frequent targets of DDoS attacks and infrastructure-level threats that can impact service reliability and customer trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Shape the Future Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  Shape the <span className="text-[#0EB623]">Future</span> of Connectivity
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  From rollout to reliability, our goal is simple: deliver seamless infrastructure where it matters most. Because great networks don't just connect—they empower.
                </p>
                <a
                  href="/contact-us"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="text-[#0EB623]" size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-center">Unlock New Value</h3>
                </div>

                <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="text-[#0EB623]" size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-center">Grow with New Revenue</h3>
                </div>

                <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="text-[#0EB623]" size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-center">Lead the Market</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium tracking-wider mb-4">Key Benefits</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Grow Faster in Emerging Markets</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                EdgeNext fuels next-gen telco experiences with localized acceleration, security, and real-time infrastructure—ready for wherever your network goes next.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Cloud className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    Unlock New <span className="text-[#0EB623]">Value</span> with Trusted Expertise
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Expand your product and service offerings by leveraging EdgeNext's proven experience working with 170+ ISPs and IIGs.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Backed by global telco collaboration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Enable faster time-to-market</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Extend capabilities with ease</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/partner.jpg"
                  alt="Trusted Expertise"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <img
                  src="/partner2.jpg"
                  alt="Revenue Growth"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    Diversify Offerings, <span className="text-[#0EB623]">Drive New Revenue</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Grow your product line and create resellable services that help unlock additional revenue opportunities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Enrich your service portfolio</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Resell solutions tailored for your market</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Open new channels for recurring revenue</span>
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
                    Stay Ahead in <span className="text-[#0EB623]">Competitive Markets</span>
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Strengthen your position in a fast-moving telco landscape with reliable edge technology and global reach.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Boost performance with edge-first delivery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Stand out with low-latency infrastructure</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623] flex-shrink-0" size={20} />
                    <span className="text-gray-600">Serve customers across emerging markets</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/partner3.jpg"
                  alt="Competitive Edge"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Edge-Ready Solutions Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium tracking-wider  mb-4">Application Scenarios</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Edge-Ready Solutions for <span className="text-[#0EB623]">Every Scenario</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Define ambitious benchmarks for real-world use cases across every industry — inspiring your team to aim higher and deliver more, wherever they operate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/static-acceleration.jpg"
                  alt="ISP/IIG Caching CDN"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">ISP/IIG Caching CDN</h3>
                <p className="text-gray-600">
                  Deploy a dedicated caching node inside your data center to reduce international bandwidth costs. Seamlessly integrated with EdgeNext's system, it delivers high-demand content faster—resellable, scalable, and telco-friendly.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/ddos.png"
                  alt="DDoS System Solution"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">DDoS System Solution</h3>
                <p className="text-gray-600">
                  Protect your network with intelligent detection, smart mitigation, and ultra-clean traffic. Our DDoS solution helps you defend attacks and monetize clean bandwidth at the same time.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/streaming.png"
                  alt="IPTV Solution"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">IPTV Solution</h3>
                <p className="text-gray-600">
                  Quickly launch IPTV services with local + global content integration. Powered by EdgeNext's VOD and live streaming CDN, this solution enables telcos to grow in today's digital media landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-gradient-to-r from-[#0EB623] to-[#0CA61F] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12)_0%,transparent_55%)]" />

         <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Ready to Power the Next Generation of Telco Services?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10">
                EdgeNext helps telcos build ultra-reliable, low-latency infrastructure with global reach and local agility—so you can scale faster, serve better, and lead in a connected future.
              </p>

              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={20}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Telecommunication;