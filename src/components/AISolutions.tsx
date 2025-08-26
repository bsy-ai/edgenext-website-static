import React from 'react';
import { ArrowRight, BrainCircuit, Network, Zap, Shield, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AISolutions: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,182,35,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(14,182,35,0.1),transparent_70%)]"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(14, 182, 35, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(14, 182, 35, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-[#0EB623]/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-[#0EB623]/20 rounded-full mb-6">
            <BrainCircuit className="text-[#0EB623] mr-2" size={18} />
            <span className="text-[#0EB623] text-sm font-medium">AI-POWERED SOLUTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
            AI That Powers Your Edge. And Beyond.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            EdgeNext brings cutting-edge AI directly to the edge—enabling faster decisions, smarter performance, and secure, scalable innovation for every business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:bg-black/60 transition-all duration-500 hover:-translate-y-2 hover:border-[#0EB623]/30">
            <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Database className="text-[#0EB623]" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-4 text-white">Personal AI Assistant
</h3>
            <p className="text-gray-400 mb-6">
              AI-powered conversations designed to assist with writing, exploration, and complex problem-solving.
            </p> 
          </div>

          <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:bg-black/60 transition-all duration-500 hover:-translate-y-2 hover:border-[#0EB623]/30">
            <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Network className="text-[#0EB623]" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-4 text-white">Intelligent Edge Acceleration</h3>
            <p className="text-gray-400 mb-6">
              Leverage AI and edge computing to reduce latency and ensure stable, real-time responsiveness across regions.
            </p>
          </div>

          <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:bg-black/60 transition-all duration-500 hover:-translate-y-2 hover:border-[#0EB623]/30">
            <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Network className="text-[#0EB623]" size={28} />
            </div>
            <h3 className="text-xl font-medium mb-4 text-white">Enterprise-Grade AI Infrastructure</h3>
            <p className="text-gray-400 mb-6">
              End-to-end AI solutions with dedicated GPU servers and private model deployment for maximum performance.
            </p>
          </div> 
        </div>

        <div className="text-center">
          <Link
            to="/ai-solutions" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0EB623] to-[#0EA620] text-white rounded-xl hover:shadow-[0_0_30px_rgba(14,182,35,0.4)] transition-all duration-500 group"
          >
            <span>Learn more</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};