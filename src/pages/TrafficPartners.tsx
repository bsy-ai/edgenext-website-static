import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const Partners: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[56px] font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-gray-900">The Path to Success</span>
                <span className="animated-gradient-text block mt-2">with EdgeNext</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Partner with EdgeNext to accelerate innovation, expand market reach, and build future-ready solutions—together, with trust and support at every step.
              </p>
              <a 
                href="https://share-na2.hsforms.com/15pGd3NNFSySn2eP3Lr08bQ2toy7" 
                target="_blank"
                rel="noopener"
                className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300"
              >
                Become a Partner
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* What Makes EdgeNext the Right Partner? Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                What Makes EdgeNext the <span className="text-[#0EB623]">Right Partner?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We set ambitious yet achievable benchmarks, pushing boundaries while ensuring real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Accelerate User Experience */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/telco1.png"
                  alt="Maximize Revenue"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Accelerate User Experience</h3>
                <p className="text-gray-600">
                Integrate EdgeNext's CDN nodes within your network to deliver  premium content at ultra-low latency — achieving first-screen  load times under 10ms for video-on-demand, live streaming,  and gaming acceleration.
                </p>
              </div>

              {/* Protect Against DDoS Attacks */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/telco2.png"
                  alt="Drive Global Growth"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Reduce International Bandwidth Costs</h3>
                <p className="text-gray-600">
                By hosting more localized resources through EdgeNext's CDN deployment, partners can save over 90% of international IP transit bandwidth, minimizing cross-border traffic and improving overall efficiency.
                </p>
              </div>

              {/* Enrich Network Content Resources*/}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/discount.jpg"
                  alt="Tiered Discounting"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Enrich Network Content Resources</h3>
                <p className="text-gray-600">
                Gain access to a broader range of global content sources, enhancing the diversity and quality of your network's traffic ecosystem.
                </p>
              </div>

              {/* Empower Your Network */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/support.jpg"
                  alt="Seamless Integration"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Empower Your Network</h3>
                <p className="text-gray-600">
                Enable your infrastructure to handle richer digital experiences and prepare for future demand in media, gaming, and real-time applications
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* four Ways to Partner Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Cooperation Process</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Build with EdgeNext in Four Easy Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our collaboration process is straightforward and transparent, consisting of four key phases:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1: Technical Discussion */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-[#0EB623] text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">Technical Discussion</h3>
                <p className="text-gray-600 text-center">
                  Assess network topology, peering capabilities, and CDN deployment potential.
                </p>
              </div>

              {/* Step 2: Agreement Signing */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-[#0EB623] text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">Agreement Signing</h3>
                <p className="text-gray-600 text-center">
                  Finalize partnership terms and responsibilities.
                </p>
              </div>

              {/* Step 3: Deployment */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-[#0EB623] text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">Deployment</h3>
                <p className="text-gray-600 text-center">
                  Jointly deploy and configure EdgeNext CDN nodes within your infrastructure.
                </p>
              </div>

              {/* Step 4: Service Activation */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-[#0EB623] text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">Service Activation</h3>
                <p className="text-gray-600 text-center">
                  Launch and optimize traffic routing to deliver high-quality content to local users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growing Together Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-sm text-[#0EB623] font-medium mb-4">Milestones</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  Growing Together with <br />Our Global Partner
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Our journey with partners is built on scale, trust, and long-term value—here's what we've achieved, together:
                </p>

                {/* Responsive stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center sm:text-left">
                    <div className="text-5xl sm:text-6xl font-bold text-[#0EB623] mb-2">1500+</div>
                    <div className="text-gray-600">Global Points of Presence</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-5xl sm:text-6xl font-bold text-[#0EB623] mb-2">170+</div>
                    <div className="text-gray-600">ISP & IIG Partners Worldwide</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-5xl sm:text-6xl font-bold text-[#0EB623] mb-2">10+</div>
                    <div className="text-gray-600">Years of Industry Experience</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="/telco1.png"
                    alt="VR Technology"
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="partner-form" className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                Ready to grow—together?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join EdgeNext to unlock new markets, grow your revenue, and empower your customers with edge-first technology.
              </p>
              <a 
                href="https://share-na2.hsforms.com/15pGd3NNFSySn2eP3Lr08bQ2toy7"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Become a Partner
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

export default Partners;