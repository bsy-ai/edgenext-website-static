import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Zap, Globe, Network, Shield, Clock, Database, Settings, ShoppingCart, Gamepad2, Building2, Check, ArrowUpRight } from 'lucide-react';
import { createEmptyContactForm } from '../utils/contactFormDefaults';

const DynamicAcceleration: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ecommerce');

  const useCases = {
    ecommerce: {
      title: 'E-commerce Transactions & Search APIs',
      description: 'Use Case: High-volume product queries, checkout processes, and payment interfaces where every millisecond counts',
      solutions: [
        'Smart scheduling ensures consistent speed even during flash sales',
        'Traffic control protects backends from overload',
        'Edge access reduces round-trip delays'
      ]
    },
    gaming: {
      title: 'Gaming Access & Logic Execution',
      description: 'Use Case: Player logins, role sync, and in-game combat logic requiring ultra-low latency and regional availability',
      solutions: [
        'Regional edge access and global protocol support',
        'Multi-source routing avoids bottlenecks',
        'Stability across traffic surges'
      ]
    },
    saas: {
      title: 'SaaS Platforms & Multi-Tenant API Calls',
      description: 'Use Case: Enterprise systems with API-heavy backend services under concurrent access from multiple tenants',
      solutions: [
        'Cache and frequency control based on user scope',
        'Predictive routing to stabilize bursty behavior',
        'Scales without compromising latency'
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
            background: 'linear-gradient(135deg, #E8F5E8 0%, #F0E8FF 50%, #E8F0FF 100%)'
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[60px] font-bold mb-6 leading-[1.1]">
                <span className="text-gray-900">EdgeNext Dynamic</span>
                <span className="animated-gradient-text block mt-2">Acceleration</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-5xl mx-auto font-light">
                EdgeNext Dynamic Acceleration is purpose-built to optimize API performance, real-time communications, and dynamic content delivery. From financial transactions to game logic and SaaS APIs, ensure your dynamic workloads are fast, reliable, and globally consistent.
              </p>
              <a 
                href="/contact_us"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
              >
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Engineered for Real-Time Performance */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Product Benefits</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Engineered for <span className="text-[#0EB623]">Real-Time Performance</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Smart Scheduling & Route Optimization</h3>
                      <p className="text-gray-600">
                        DOLFIN dynamically routes requests based on geography and network quality, with TCP/TLS acceleration built-in
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Intelligent Origin Handling</h3>
                      <p className="text-gray-600">
                        Supports custom caching rules (URI parameters, headers, cookies) and enables primary-backup origin, weighted routing, and multi-origin switching to improve hit ratio and reliability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Global Edge Transit</h3>
                      <p className="text-gray-600">
                        Leverages global nodes for near-user access and optimized backhaul, reducing cross-border and inter-carrier latency
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="/dynamic-acceleration.png"
                  alt="Team collaboration"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
              <div className="order-2 lg:order-1">
                <img 
                  src="/dynamic-acceleration-2.png"
                  alt="Performance optimization"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              
              <div className="order-1 lg:order-2 space-y-8">
                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Protocol Acceleration</h3>
                      <p className="text-gray-600">
                        Full support for HTTP/2, HTTP/3, QUIC, and TLS 1.3 to enhance performance on mobile devices and in weak network environments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                      <Check className="text-[#0EB623]" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Dynamic Traffic Control</h3>
                      <p className="text-gray-600">
                        Implements concurrency limits, rate limiting, and access frequency management to ensure origin server stability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Acceleration for Diverse Use Cases */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Tailored Acceleration for <span className="text-[#0EB623]">Diverse Use Cases</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built for moments that move fast—from flash sales to real-time sync—EdgeNext ensures dynamic experiences never miss a beat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="space-y-4">
                    {Object.entries(useCases).map(([key, useCase]) => (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          activeTab === key 
                            ? 'bg-[#0EB623] text-white' 
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {key === 'ecommerce' && <ShoppingCart size={20} />}
                          {key === 'gaming' && <Gamepad2 size={20} />}
                          {key === 'saas' && <Building2 size={20} />}
                          <span className="font-medium">
                            {useCase.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-medium mb-4">{useCases[activeTab].title}</h3>
                    <p className="text-gray-600 mb-6">{useCases[activeTab].description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium mb-4">Our Solution</h4>
                      <div className="space-y-3">
                        {useCases[activeTab].solutions.map((solution, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-700">
                              {solution === 'Traffic control protects backends from overload' 
                                ? 'Advanced traffic control protects backend systems from spikes and overload, ensuring service stability'
                               : solution === 'Edge access reduces round-trip delays'
                                 ? 'Edge access reduces round-trip latency, enabling faster and more responsive user experiences'
                               : solution === 'Predictive routing to stabilize bursty behavior'
                                 ? 'Predictive routing to mitigate traffic bursts'
                                : solution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solving the Complexities of Global Connectivity */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Solving the Complexities of Global Connectivity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">01</div>
                <h3 className="text-base font-medium mb-3 text-gray-600">Slow API Responses</h3>
                <p className="text-lg font-medium text-[#0EB623]">
                  TCP/TLS optimization and dynamic scheduling improve request response time
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">02</div>
                <h3 className="text-base font-medium mb-3 text-gray-600">Cross-Border Instability</h3>
                <p className="text-lg font-medium text-[#0EB623]">
                  Global transit nodes stabilize routes across ISPs and borders
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">03</div>
                <h3 className="text-base font-medium mb-3 text-gray-600">Origin Overload from Request Spikes</h3>
                <p className="text-lg font-medium text-[#0EB623]">
                  Millisecond-level caching and request throttling prevent origin collapses
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">04</div>
                <h3 className="text-base font-medium mb-3 text-gray-600">Unbalanced Multi-Source Routing</h3>
                <p className="text-lg font-medium text-[#0EB623]">
                  Intelligent origin configuration (primary/backup, weighted, and health checks)
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">05</div>
                <h3 className="text-base font-medium mb-3 text-gray-600">Debugging Complexity</h3>
                <p className="text-lg font-medium text-[#0EB623]">
                  End-to-end tracing and performance monitoring tools accelerate root cause analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Surpassing Standards for Outstanding Success */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Surpassing Standards for Outstanding Success
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/GlobalDeliverySolutionforTopPhotoBeautyAppinChina.jpg"
                  alt="Dynamic Acceleration Solution"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-medium mb-4">Global Delivery Solution for Top Photo Beauty App in China</h3>
                  <a href="/case-study/global-delivery-solution-for-top-photo-beauty-app-in-china" className="inline-flex items-center text-[#0EB623] font-medium hover:gap-2 transition-all duration-300">
                    Read Full Case Study <ArrowUpRight className="ml-2" size={16} />
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-medium mb-3">The Challenge</h4>
                  <p className="text-gray-600">
                    During peak promotional campaigns, slow dynamic API responses caused delays in user interaction and shopping cart errors, reducing platform performance and hurting revenue.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-medium mb-3">The Solution</h4>
                  <p className="text-gray-600">
                    EdgeNext deployed dynamic acceleration across all API endpoints, with millisecond-level caching and smart origin scheduling to manage traffic loads.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="text-lg font-medium mb-3">The Results</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Platform remained stable during flash sales and traffic spikes</li>
                    <li>• API responsiveness improved significantly, boosting user experience</li>
                    <li>• Origin traffic load dropped by 35%+, enhancing availability and uptime</li>
                    <li>• Conversion rates and revenue saw measurable increases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Footer - Careers Style */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Real-Time Demands, Real Results.
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Accelerate your APIs, scale your interactions, and never compromise
                on performance—even when traffic surges.
              </p>
              <a 
                href="/contact_us"
                target="_blank"
                rel="noopener noreferrer"
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

export default DynamicAcceleration;