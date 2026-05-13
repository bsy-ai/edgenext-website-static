import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Network, Shield, Globe, Check, Zap, Monitor, Cloud, Lock, Activity, Server, Database, Settings, Gamepad2, Laptop, Smartphone, LampDesk as Desktop } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const Gaming: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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


  // Expanded list of client logos for scrolling effect
  const clientLogos = [
    { name: 'Boltshift', icon: <Zap className="text-[#0EB623]" size={24} /> },
    { name: 'Lightbox', icon: <Monitor className="text-[#0EB623]" size={24} /> },
    { name: 'GlobalBank', icon: <Globe className="text-[#0EB623]" size={24} /> },
    { name: 'Spherule', icon: <Activity className="text-[#0EB623]" size={24} /> },
    { name: 'Nietzsche', icon: <Shield className="text-[#0EB623]" size={24} /> },
    { name: 'FeatherDev', icon: <Server className="text-[#0EB623]" size={24} /> },
    { name: 'GameForge', icon: <Gamepad2 className="text-[#0EB623]" size={24} /> },
    { name: 'CloudNine', icon: <Cloud className="text-[#0EB623]" size={24} /> },
    { name: 'SecureNet', icon: <Lock className="text-[#0EB623]" size={24} /> },
    { name: 'DataFlow', icon: <Database className="text-[#0EB623]" size={24} /> }
  ];

  // Double the logos array for seamless infinite scroll
  const doubledLogos = [...clientLogos, ...clientLogos];

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
                  <span className="text-gray-900">Game-Changing</span>
                  <span className="animated-gradient-text block mt-2">Infrastructure</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  From low-latency delivery to regional infrastructure—EdgeNext empowers gaming companies with seamless, localized solutions to stay ahead.
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
                  src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                  alt="Gaming Infrastructure"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Level Up Gaming Performance Globally */}
        <section className="py-24 bg-white" id="stats-section">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Level Up Gaming Performance <span className="text-[#0EB623]">Globally</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to convert, engage, and retain more players worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && <CountUp end={1500} suffix="+" duration={2} />}
                  {!hasScrolled && "1500+"}
                </div>
                <div className="text-xl font-medium mb-2">Global PoPs</div>
                <p className="text-gray-600">Strategic points of presence worldwide</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && <CountUp end={90} suffix="+" duration={2} />}
                  {!hasScrolled && "90+"}
                </div>
                <div className="text-xl font-medium mb-2">Tbps Network</div>
                <p className="text-gray-600">Total network capacity</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && <CountUp end={30} prefix="<" suffix="ms" duration={2} />}
                  {!hasScrolled && "<30ms"}
                </div>
                <div className="text-xl font-medium mb-2">Response Time</div>
                <p className="text-gray-600">Ultra-low latency delivery</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && <CountUp end={60} suffix="M+" duration={2} />}
                  {!hasScrolled && "60M+"}
                </div>
                <div className="text-xl font-medium mb-2">Daily Threats Blocked
</div>
                <p className="text-gray-600">Real-time security at global scale
</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gaming Infrastructure Built for the Future */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Gaming Infrastructure <span className="text-[#0EB623]">Built for the Future</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful, edge-first gaming solutions that scale with your player base—wherever they are
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Cloud className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Global</span> Edge Network
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Deploy games fast and scale effortlessly with our powerful global infrastructure.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">1500+ PoPs for instant activation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Scale to meet growing player demands</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Launch updates across regions in minutes</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/security.jpg"
                  alt="Global Edge Network"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <img
                  src="/network.jpg"
                  alt="Security Protection"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Advanced</span> Security Protection
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Keep your games and players safe with comprehensive security solutions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">DDoS protection up to 4.5 Tbps per node</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Anti-cheat and anti-bot measures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Real-time threat monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Activity className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">
                    <span className="text-[#0EB623]">Real-time</span> Analytics
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Get deep insights into your game's performance and player experience.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Live performance monitoring</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Player engagement metrics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Network health analytics</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/speed.jpg"
                  alt="Real-time Analytics"
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
                  Scale faster with localized edge support—built for game growth.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard" target="_blank" rel="noopener" className="px-6 py-3 bg-white text-gray-700 rounded-xl hover:text-[#0EB623] font-medium transition-colors">
                  Learn more
                </a>
                <a href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard" target="_blank" rel="noopener" className="px-6 py-3 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors font-medium">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Gaming Scenarios */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-4">
                Real-World Gaming <span className="text-[#0EB623]">Scenarios</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Accelerate experiences that matter—from global matches to livestreams.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Global Gaming Acceleration</h3>
                <p className="text-gray-600">
                  Deliver a unified gaming experience for global players—across ISPs, devices, and game types—with ultra-low latency edge delivery.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Livestream Gaming</h3>
                <p className="text-gray-600">
                  Secure interactive livestreaming at scale with DDoS protection, anti-hotlinking, and low-latency routing to keep the action flowing.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Browser Games</h3>
                <p className="text-gray-600">
                  Deliver high-res assets, audio, and ads fast—directly to players' browsers with low latency.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Mobile Games</h3>
                <p className="text-gray-600">
                  Speed up in-game content and app updates for smoother play, even on mobile networks.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Desktop className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">PC and Console Games</h3>
                <p className="text-gray-600">
                  Handle large updates and global launches with stable, high-performance infrastructure.
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
                Ready to Power the Future of Gaming?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10">
                From low-latency delivery to regional infrastructure—EdgeNext localizes performance where it matters most.
              </p>

              <a
                href="/contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 group"
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

export default Gaming;