import React from 'react';
import { Globe, Zap, ShieldCheck, Network, Server, Cloud, ArrowRight, Shield, Lock } from 'lucide-react';

export const EmergingMarkets: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-[#149925] text-white">
      {/* Dark background with subtle patterns */}
      <div className="absolute inset-0 bg-[#149925]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            <span className="block mb-1 text-white">Building the Edge,</span>
            <span className="text-white">Where It's Most Needed</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-between mb-10">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 pr-0 md:pr-8 lg:pr-12">
            <p className="text-white/90 text-lg max-w-lg">
              EdgeNext delivers fast, secure, and scalable digital 
              infrastructure — built at the edge, for the next wave of 
              global growth.
            </p>
          </div>
          
          <div className="w-full md:w-1/4 lg:w-1/4 mb-6 md:mb-0 border-l border-white/30 pl-6 lg:pl-8">
            <div className="text-4xl font-bold text-white mb-2">&lt;30ms</div>
            <div className="text-lg text-white/90">Global Response Time</div>
          </div>
          
          <div className="w-full md:w-1/4 lg:w-1/4 border-l border-white/30 pl-6 lg:pl-8">
            <div className="text-4xl font-bold text-white mb-2">60M+</div>
            <div className="text-lg text-white/90">Daily Threats Blocked</div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-[#1a2e40] rounded-xl p-6 hover:bg-[#1a2e40]/90 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
            <div className="w-12 h-12 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0EB623]/40 transition-all duration-300">
              <Zap className="text-[#0EB623] group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Connect at the Speed of Now</h3>
            <p className="text-white/80 group-hover:text-white mb-4">Stream, load, and deliver — instantly, at the edge.</p>
            <a href="/dynamic-acceleration" className="text-[#0EB623] group-hover:text-white inline-flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              Learn more <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
          
          {/* Card 2 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-[#1a2e40]/90 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
            <div className="w-12 h-12 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0EB623]/40 transition-all duration-300">
              <Shield className="text-white group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Security at the Edge</h3>
            <p className="text-white/80 group-hover:text-white mb-4">Built-in protection from DDoS, DNS threats, and access risks.</p>
            <a href="/anti_ddos" className="text-[#0EB623] group-hover:text-white inline-flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              Learn more <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
          
          {/* Card 3 */}
          <div className="group bg-[#1a2e40] rounded-xl p-6 hover:bg-[#1a2e40]/90 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
            <div className="w-12 h-12 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0EB623]/40 transition-all duration-300">
              <Server className="text-[#0EB623] group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Launch Closer<br />Run Faster</h3>
            <p className="text-white/80 group-hover:text-white mb-4">Deploy compute at the edge for real-time performance.</p>
            <a href="/vps" className="text-[#0EB623] group-hover:text-white inline-flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              Learn more <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
          
          {/* Card 4 */}
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-[#1a2e40]/90 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
            <div className="w-12 h-12 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0EB623]/40 transition-all duration-300">
              <Network className="text-white group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Compliance Built In</h3>
            <p className="text-white/80 group-hover:text-white mb-4">ICP, RIM, and localization — handled for you.</p>
            <a href="/icp-license" className="text-[#0EB623] group-hover:text-white inline-flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              Learn more <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
          
          {/* Card 5 */}
          <div className="group bg-[#1a2e40] rounded-xl p-6 lg:col-span-2 hover:bg-[#1a2e40]/90 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-all duration-500">
            <div className="w-12 h-12 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0EB623]/40 transition-all duration-300">
              <Globe className="text-[#0EB623] group-hover:text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Deliver Deep in High-Growth Regions</h3>
            <p className="text-white/80 group-hover:text-white mb-4">Tailored for performance in booming markets.</p>
            <a href="/global_cdn" className="text-[#0EB623] group-hover:text-white inline-flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              Learn more <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};