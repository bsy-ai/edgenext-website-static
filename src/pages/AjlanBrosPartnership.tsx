import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Check, Globe, Shield, Zap, Server, Database, RefreshCw, Cloud, Building2, Map, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const AjlanBrosPartnership: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="text-[#0EB623] text-sm font-medium mb-4">News • March 6, 2024</div>
                <h1 className="text-[32px] md:text-[48px] font-medium mb-6 leading-[1.2] w-full">
                  EdgeNext and Ajlan & Bros Holding Group Announce the Launch of AJ Cloud: A Pioneering Cloud Solution Platform for the MENA Region
                </h1>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/EdgeNextandAjlan&BrosHoldingGroupAnnouncetheLaunchofAJCloudAPioneeringCloudSolutionPlatformfortheMENARegion.jpg"
                    alt="EdgeNext and Ajlan & Bros Partnership"
                    className="w-full h-[200px] md:h-[250px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Riyadh, Mar 06, 2024 – EdgeNext, a leader in content delivery network, edge cloud, and cloud security solutions, in partnership with Ajlan & Bros Holding Group, a major conglomerate in the Middle East, is thrilled to announce the launch of AJ Cloud. This joint venture marks the first-of-its-kind regional cloud solution platform for the Middle East and North Africa (MENA), signifying a major stride in the region's digital transformation.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Understanding the unique requirements of the MENA market, AJ Cloud is meticulously designed to resonate with local businesses and cultures. The platform offers tailored content delivery, live streaming, cloud security, and edge cloud computing solutions, ensuring each solution is relevant and impactful in addressing the region's needs.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Our commitment to localization is evident in our extensive network, boasting over 41 points of presence across more than 15 countries. This widespread presence leverages strategic partnerships with top ISPs and telecoms, ensuring unmatched service delivery and reliability.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    AJ Cloud emerges from a foundation of innovation and local market understanding, combining EdgeNext's global technological expertise with the regional insights of Ajlan & Bros Holding Group. This venture is set to revolutionize cloud services in the MENA region, focusing on customer-centric solutions that drive business growth and digital excellence.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    From an agreement inked last year, the joint venture has already established a robust regional presence, positioning AJ Cloud as a pivotal player in the MENA digital landscape.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    "We are excited to launch AJ Cloud, a platform that not only represents technological advancement but also a deep understanding of the MENA market," said Robert Sha, CEO of EdgeNext. Ajlan Mohammed Al Ajlan, Deputy Group CEO of Ajlan & Bros Holding added, "Our collaboration is a testament to our commitment to providing innovative and localized cloud solutions that will significantly contribute to the digital economy of the Kingdom." Ammar Enaya, CEO of AJTECH, said," This joint venture will play a significant role in contributing to the economic growth and development of the Kingdom, which is in line with the Vision 2030 initiative. The investment of the JV company is expected to reach a staggering USD 918 million, which will undoubtedly positively impact the economy and various industries within the Kingdom. Furthermore, the creation of more than 200 job opportunities is a testament to the commitment of the JV company to support the local workforce and provide opportunities for professional development and growth.
                  </p>

                  <div className="border-t border-gray-200 my-12"></div>

                  <h2 className="text-2xl font-medium mb-4">About EdgeNext</h2>
                  <p className="text-gray-600 mb-8">
                    EdgeNext, a leading provider in the global edge cloud service arena, boasts an impressive infrastructure of over 1,500 edge nodes spread across more than 290 cities globally. The company has established profound interconnection collaborations with over 100 key operators worldwide. These partnerships enable EdgeNext to offer comprehensive edge cloud services that encompass networking, security, and computing, catering to the diverse needs of its global enterprise clientele.
                  </p>

                  <p className="text-gray-600 mb-8">
                    Dedicated to enhancing its reach and capabilities, EdgeNext has been actively expanding its nodes and infrastructure within the Middle East and North Africa (MENA) region. This expansion aims to deliver effective, bespoke solutions to major Internet Service Providers (ISPs), local and international organizations, and business partners, ensuring their unique requirements are met precisely and efficiently.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">About Ajlan & Bros Holding Group</h2>
                  <p className="text-gray-600 mb-8">
                    Ajlan & Bros Holding (hereafter referred to as "the Group"), owned by the Alajlan family, is a global diversified conglomerate with multi-channel business sectors covering financial services, consumer-oriented manufacturing, healthcare provision, education, gaming, metal & mining, hospitality & tourism, logistics, etc. The Group employs over 15,000 staff in more than 25 countries across 75 companies. The Alajlan family, one of the most well-known family businesses in the Middle East, ranks 20th in 2022 Forbes' top 100 family businesses in the Arab World.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">About Ajlan & Bros Technology (AJTECH)</h2>
                  <p className="text-gray-600 mb-8">
                    Ajlan & Bros Technology (AJTECH) is a leading provider of technical services, offering a wide range of consultancy, executions, and operations in partnership with top niche technology makers and providers. Our services span across critical facilities, infrastructure, solutions, cybersecurity, and safe smart cities, catering to various business domains in both the public and private sectors.
                  </p>

                  <p className="text-gray-600 mb-8">
                    By closely following the Kingdom's vision 2030, we aim to contribute to the growth and advancement of the technology sector in the Kingdom, empowering organizations to embrace digital transformation and harness the potential of emerging technologies.
                  </p>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Key Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">First-of-its-kind regional cloud solution for MENA</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">41+ points of presence across 15+ countries</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">USD 918 million investment</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Creation of 200+ job opportunities</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Related Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Cloud className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Edge Cloud Computing</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Globe className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Content Delivery</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Shield className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Cloud Security</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Zap className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Live Streaming</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a 
                      href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                      target="_blank"
                      rel="noopener"
                      className="w-full bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center group transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related News Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium mb-4">Related News</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest announcements from EdgeNext
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <a href="/edgenext-edge-cloud-servers-add-new-nodes-in-12-countries-accelerating-global-expansion-for-businesses" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                      alt="EdgeNext Edge Cloud Servers"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime="2025-03-25">March 25, 2025</time>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      EdgeNext Edge Cloud Servers Add New Nodes in 12 Countries
                    </h3>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </a>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <a href="/edgenext-and-national-pulse-form-strategic-partnership-to-drive-innovation-and-market-expansion" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                      alt="EdgeNext and National Pulse Partnership"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime="2024-10-16">October 16, 2024</time>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      EdgeNext and National Pulse Form Strategic Partnership
                    </h3>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </a>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <a href="/edgenext-and-commercis-announce-strategic-cloud-partnership-at-gitex-for-iraq-expansion" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg"
                      alt="EdgeNext and Commercis Partnership"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime="2024-10-15">October 15, 2024</time>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      EdgeNext and Commercis Announce Strategic Cloud Partnership at GITEX
                    </h3>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Ready to transform your digital infrastructure?</h2>
                <p className="text-white/90">
                  Explore EdgeNext's cloud solutions and accelerate your business growth.
                </p>
              </div>
              <a 
                href="/company/contact" 
                className="px-8 py-4 bg-white text-[#0EB623] rounded-xl hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AjlanBrosPartnership;