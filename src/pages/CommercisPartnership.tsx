import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Check, Globe, Shield, Zap, Server, Database, RefreshCw, Cloud, Building2, Map, MapPin, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommercisPartnership: React.FC = () => {
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
                <div className="text-[#0EB623] text-sm font-medium mb-4">News • October 15, 2024</div>
                <h1 className="text-[32px] md:text-[48px] font-medium mb-6 leading-[1.2] w-full">
                  EdgeNext and Commercis Announce Strategic Cloud Partnership at GITEX for Iraq Expansion
                </h1>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/EdgeNextandCommercisAnnounceStrategicCloudPartnershipatGITEXforIraqExpansion.jpeg"
                    alt="EdgeNext and Commercis Partnership"
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
                    DUBAI, United Arab Emirates–(BUSINESS WIRE)–EdgeNext, a global leader in cloud infrastructure and edge computing services, is excited to announce a strategic partnership with Commercis Plc, a leading connectivity, cybersecurity, and innovative IT solutions provider at Gitex 2024. This collaboration will enable the expansion of EdgeNext's cloud delivery services throughout Iraq, bringing transformative improvements to the country's digital landscape.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    This partnership will integrate Commercis's regional infrastructures with EdgeNext's global network of over 1,500 edge nodes. Together, the companies will deliver high-performance content delivery, cloud security, and low-latency services to enterprises and public sectors across Iraq.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    One of the key elements of this partnership is cloud gaming in Iraq, which will provide exclusive access to globally leading gaming platforms, enhancing the gaming experience for users in the region. The cloud gaming will be supported by EdgeNext's gaming platform, with Commercis's extensive regional infrastructure offering scalable rack space and reliable connectivity to key data centers across Iraq, ensuring seamless access to global gaming services.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    "Our partnership with Commercis will be pivotal in bringing cutting-edge cloud and gaming services to Iraq. With this collaboration, we aim to address the region's growing demand for high-performance digital infrastructure," said Terence Wang, the EdgeNext COO.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    "Commercis regional presence and expertise, coupled with EdgeNext's technology, will enable us to offer unparalleled digital performance to customers," added Alan Afrasiab, Group CEO at Commercis. " This partnership marks a significant step forward in our vision to enhance digital infrastructure across Iraq. By leveraging EdgeNext's cutting-edge technology and expertise in edge computing, we aim to deliver faster, more reliable, and secure services to meet the growing demands of our customers. We look forward to supporting the increasing demand for fast, reliable content distribution across Iraq."
                  </p>

                  <div className="border-t border-gray-200 my-12"></div>

                  <h2 className="text-2xl font-medium mb-4">About EdgeNext</h2>
                  <p className="text-gray-600 mb-8">
                    EdgeNext, a leading provider in the global edge cloud service arena, boasts an impressive infrastructure of over 1,500 edge nodes spread across more than 250 cities globally. The company has established profound interconnection collaborations with over 100 key operators worldwide. These partnerships enable EdgeNext to offer comprehensive edge cloud services that encompass networking, security, and computing, catering to the diverse needs of its global enterprise clientele.
                  </p>

                  <p className="text-gray-600 mb-8">
                    Dedicated to enhancing its reach and capabilities, EdgeNext has been actively expanding its nodes and infrastructure within the Middle East and North Africa (MENA) region. This expansion aims to deliver effective, bespoke solutions to major Internet Service Providers (ISPs), local and international organizations, and business partners, ensuring their unique requirements are met precisely and efficiently.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">About Commercis Plc</h2>
                  <p className="text-gray-600 mb-8">
                    Commercis Plc is a holding company overseeing a group of businesses focused on delivering innovative technology and connectivity solutions with an emphasis on cybersecurity. As the parent company of Talia, DataGrid Network, and Quika, Commercis is a leading global operator in satellite and terrestrial networks, providing secure communications for enterprises worldwide. With offices across Europe, the Middle East, and Africa, Commercis ensures timely, responsive service and support to its customers. Additionally, its global partner ecosystem extends its reach, ensuring strong local presence and reliable services even in regions without direct offices.
                  </p>

                  <div className="border-t border-gray-200 my-12"></div>

                  <h2 className="text-2xl font-medium mb-4">Contacts</h2>
                  <p className="text-gray-600 mb-2">
                    Email: <a href="mailto:marketing@edgenext.com" className="text-[#0EB623] hover:underline">marketing@edgenext.com</a>
                  </p>
                  <p className="text-gray-600 mb-8">
                    For more information, visit us at <a href="http://www.edgenext.com" className="text-[#0EB623] hover:underline" target="_blank" rel="noopener noreferrer">www.edgenext.com</a>.
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
                        <span className="text-gray-600">Strategic partnership announced at Gitex 2024</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Expansion of cloud delivery services in Iraq</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Focus on cloud gaming services</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Integration of regional and global infrastructure</span>
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
                          <div className="font-medium">Edge Cloud Server</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Globe className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Global CDN</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Gamepad2 className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Cloud Gaming</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a 
                      href="#" 
                      className="w-full bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center group transition-all duration-300"
                    >
                      Contact Us
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
                <a href="/edgenext-and-ajlan-bros-holding-group-announce-the-launch-of-aj-cloud-a-pioneering-cloud-solution-platform-for-the-mena-region" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                      alt="EdgeNext and Ajlan & Bros Launch"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime="2024-03-06">March 6, 2024</time>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      EdgeNext and Ajlan & Bros Holding Group Announce the Launch of AJ Cloud
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

export default CommercisPartnership;