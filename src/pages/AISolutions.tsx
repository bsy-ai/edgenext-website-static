import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, BrainCircuit, Network, Zap, Shield, Database, Globe, Server, Cpu, Mail } from 'lucide-react';

const AISolutions: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pb-32 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(14,182,35,0.1),transparent_70%)]"></div>
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(14, 182, 35, 0.3) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(14, 182, 35, 0.3) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-[#0EB623]/50 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s linear infinite alternate`,
                  opacity: 0.5 + Math.random() * 0.5
                }}
              ></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[60px] font-bold mb-4 md:mb-6 leading-[1.1] text-white">
                Unleash the Potential of AI and Connect Every Future
              </h1>
              <h2 className="text-xl md:text-2xl text-[#0EB623] mb-6">
                Personal Intelligent Assistant × Enterprise Full-Stack Empowerment
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Experience the transformative power of AI with EdgeNext. From personal assistants that help you think faster and work smarter, to enterprise-grade AI infrastructure that drives secure, scalable innovation—we empower every step of your digital evolution.
              </p>
              <a 
                href="https://www.edgenext.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0EB623] to-[#0EA620] text-white rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(14,182,35,0.4)] transition-all duration-500 group"
              >
                <span>Learn more</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-800">What We Offer</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1 - Personal AI Assistant */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0EB623]/30">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BrainCircuit className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-800">Personal AI Assistant</h3>
                <p className="text-gray-600 mb-6">
                  Powered by advanced large language models, EdgeNext's AI assistant delivers articulate, context-aware, and intelligent conversations. Whether you're writing, exploring new ideas, or solving complex problems, our assistant is designed to enhance productivity with a human-like touch.
                </p>
              </div>

              {/* Card 2 - Full-Stack AI Solutions for Enterprises */}
              <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0EB623]/30">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-800">Full-Stack AI Solutions for Enterprises</h3>
                <p className="text-gray-600 mb-6">
                  From industry-specific model applications to high-performance GPU infrastructure, EdgeNext delivers end-to-end AI solutions across sectors including finance, government, healthcare, and manufacturing. Deploy private models on powerful all-in-one machines to fully unlock your enterprise potential—securely and efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features Section */}
        <section className="py-24 bg-gray-900 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(14,182,35,0.1),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">Built to Accelerate, Designed to Empower</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Feature 1 - Edge Acceleration */}
              <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:bg-black/60 transition-all duration-500 hover:-translate-y-2 hover:border-[#0EB623]/30">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Network className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Edge Acceleration</h3>
                <p className="text-gray-300">
                  EdgeNext's globally distributed edge nodes, coupled with intelligent computing capabilities, ensure ultra-low latency and high stability—no matter where your users are.
                </p>
              </div>

              {/* Feature 2 - Integrated Empowerment */}
              <div className="group bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:bg-black/60 transition-all duration-500 hover:-translate-y-2 hover:border-[#0EB623]/30">
                <div className="w-14 h-14 bg-[#0EB623]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-white">Integrated Empowerment</h3>
                <p className="text-gray-300">
                  At the intersection of AI and infrastructure, EdgeNext fuels the future of intelligent computing—enabling smarter decisions, streamlined operations, and enhanced customer experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  EdgeNext delivers cutting-edge AI solutions that drive innovation, enhance efficiency, and create competitive advantages. Let's build the future of your business together.
                </p>
                <a 
                  href="https://www.edgenext.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Explore AI Solutions
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="ai-solutions-contact-form space-y-4">
                  <div>
                    <label className="block text-white/90 mb-2">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Work Email</label>
                    <input 
                      type="email"
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Company</label>
                    <input 
                      type="text"
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Country/Region</label>
                    <input 
                      type="text"
                      placeholder="Enter your country or region"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-white text-[#0EB623] font-medium px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all duration-300"
                  >
                    Get in Touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Want to see what EdgeNext AI can do for you?</h2>
              </div>
              <a 
                href="https://www.edgenext.ai" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#0EB623] text-white rounded-xl shadow-[0_0_20px_rgba(14,182,35,0.3)] hover:bg-[#0EA620] hover:shadow-[0_0_30px_rgba(14,182,35,0.5)] transition-all duration-300 font-medium whitespace-nowrap flex items-center"
              >
                Visit edgenext.ai
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

export default AISolutions;