import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Home, Search, RefreshCw, Zap, Globe, Shield, Server, Database, Cloud, Network, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [floatingIcons, setFloatingIcons] = useState<Array<{id: number, icon: React.ReactNode, x: number, y: number}>>([]);

  const icons = [
    <Zap className="text-[#0EB623]" size={24} />,
    <Globe className="text-blue-500" size={24} />,
    <Shield className="text-purple-500" size={24} />,
    <Server className="text-orange-500" size={24} />,
    <Database className="text-red-500" size={24} />,
    <Cloud className="text-cyan-500" size={24} />,
    <Network className="text-pink-500" size={24} />,
    <Activity className="text-yellow-500" size={24} />
  ];

  const handleRefresh = () => {
    setIsAnimating(true);
    setClickCount(prev => prev + 1);
    
    // Add floating icons
    const newIcons = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    }));
    
    setFloatingIcons(prev => [...prev, ...newIcons]);
    
    setTimeout(() => {
      setIsAnimating(false);
      setFloatingIcons(prev => prev.filter(icon => !newIcons.includes(icon)));
    }, 2000);

    // Easter egg after 5 clicks
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
    }
  };

  const suggestions = [
    { title: 'Global CDN', path: '/global_cdn', description: 'Accelerate your content delivery worldwide' },
    { title: 'Edge Cloud Server', path: '/ecs', description: 'Deploy applications closer to your users' },
    { title: 'Anti-DDoS Protection', path: '/anti_ddos', description: 'Protect your infrastructure from attacks' },
    { title: 'Live Streaming', path: '/live_streaming', description: 'Deliver smooth real-time streams globally' },
    { title: 'Gaming Solutions', path: '/gaming', description: 'Optimize your gaming infrastructure' },
    { title: 'Contact Us', path: '/contact_us', description: 'Get in touch with our experts' }
  ];

  useEffect(() => {
    // Clean up floating icons after animation
    const timer = setTimeout(() => {
      setFloatingIcons([]);
    }, 3000);

    return () => clearTimeout(timer);
  }, [floatingIcons]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative overflow-hidden">
        {/* Floating Icons */}
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            initial={{ x: item.x, y: item.y, opacity: 0, scale: 0 }}
            animate={{ 
              x: item.x + (Math.random() - 0.5) * 200,
              y: item.y - 200,
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: 360
            }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute pointer-events-none z-10"
            style={{ left: item.x, top: item.y }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Easter Egg */}
        {showEasterEgg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-[#0EB623] mb-2">Easter Egg Found!</h3>
              <p className="text-gray-600">You're persistent! Here's a special message from the EdgeNext team: "Keep exploring, keep building!"</p>
            </div>
          </motion.div>
        )}

        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated 404 */}
            <motion.div
              animate={isAnimating ? { 
                scale: [1, 1.1, 1], 
                rotate: [0, 5, -5, 0],
                color: ['#111827', '#0EB623', '#111827']
              } : {}}
              transition={{ duration: 0.5 }}
              className="text-[120px] md:text-[200px] font-bold leading-none mb-8 select-none"
              style={{ 
                background: 'linear-gradient(45deg, #0EB623, #0EA620, #0EB623)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}
            >
              404
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              Oops! This page got lost in the <span className="text-[#0EB623]">edge</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Don't worry! Even our global edge network sometimes can't find what you're looking for. 
              Let's get you back on track.
            </motion.p>

            {/* Interactive Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link 
                to="/"
                className="group bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Home className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
                Back to Home
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>

              <button
                onClick={handleRefresh}
                className="group border-2 border-[#0EB623] text-[#0EB623] hover:bg-[#0EB623] hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center"
              >
                <RefreshCw className={`mr-2 transition-transform duration-300 ${isAnimating ? 'animate-spin' : 'group-hover:rotate-180'}`} size={20} />
                Try Again
                {clickCount > 0 && (
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {clickCount}
                  </span>
                )}
              </button>
            </motion.div>

            {/* Search Suggestions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-medium mb-6 flex items-center justify-center gap-2">
                <Search className="text-[#0EB623]" size={24} />
                Maybe you were looking for...
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestions.map((suggestion, index) => (
                  <motion.div
                    key={suggestion.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <Link to={suggestion.path} className="block">
                      <h3 className="text-lg font-medium mb-2 group-hover:text-[#0EB623] transition-colors duration-300">
                        {suggestion.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {suggestion.description}
                      </p>
                      <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                        Explore
                        <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-medium mb-6">While you're here, did you know?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0EB623] mb-2">1500+</div>
                  <div className="text-gray-600">Global Edge Nodes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0EB623] mb-2">90+</div>
                  <div className="text-gray-600">Tbps Network Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0EB623] mb-2">&lt;30ms</div>
                  <div className="text-gray-600">Global Response Time</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;