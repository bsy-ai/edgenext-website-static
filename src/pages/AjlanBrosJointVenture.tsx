import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Check, Globe, Shield, Zap, Server, Database, RefreshCw, Cloud, Building2, Map, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const AjlanBrosJointVenture: React.FC = () => {
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
                <div className="text-[#0EB623] text-sm font-medium mb-4">News • October 18, 2023</div>
                <h1 className="text-[32px] md:text-[48px] font-medium mb-6 leading-[1.2] w-full">
                  EdgeNext and Ajlan & Bros Holding Group Ink Transformative Joint Venture Agreement to Revolutionize CDN, Edge Cloud, and Cloud Security in the MENA Region
                </h1>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/EdgeNextandAjlan&BrosHoldingGroupInk.jpg"
                    alt="EdgeNext and Ajlan & Bros Joint Venture"
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
                    Dubai, October 18, 2023 – EdgeNext, a global frontrunner in Content Delivery Network (CDN), edge cloud and cloud security solutions, and Ajlan & Bros Holding Group, one of the leading conglomerates in the Middle East, are excited to announce their groundbreaking joint venture at GITEX 2023. This collaboration aims to provide state-of-the-art CDN, edge cloud, and cloud security products tailored for the Middle East and North Africa (MENA) region and beyond.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    The partnership underscores both companies' commitment to addressing the growing demand for efficient, secure, and scalable digital solutions in the region, catering to businesses ranging from budding startups to well-established enterprises.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">Highlights of the Joint Venture</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="text-[#0EB623]" size={16} />
                      </div>
                      <span className="text-gray-600"><strong>Innovation at the Forefront:</strong> Leveraging EdgeNext's proven expertise in CDN/edge cloud and Ajlan & Bros Holding Group's deep understanding of regional needs, the joint venture will introduce groundbreaking technologies and solutions that drive the digital frontier in the MENA region.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <Check className="text-[#0EB623]" size={16} />
                      </div>
                      <span className="text-gray-600"><strong>Local Support with Global Expertise:</strong> By combining local insights with global technological prowess, the collaboration promises unparalleled local customer support tailored to the unique challenges and opportunities of the MENA market.</span>
                    </li>
                  </ul>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Ammar Enaya, CEO of Ajlan Tech, said: "As a diversified international enterprise, we continue to focus on top enterprises and emerging technologies, optimizing our investment strategy when deploying our resources. We believe that this cooperation with EdgeNext can introduce leading CDN and cloud computing services to land in Saudi Arabia. By optimizing the advanced technology and experience provided by our business partners, we can contribute to the development of Saudi Arabia's digital economy and economic structural transformation."
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Echoing this sentiment, Robert Sha, CEO of EdgeNext International Holdings Limited, remarked: "Saudi Arabia and the Middle Eastern markets have become the focus of global enterprises and investors. This close partnership with Ajlan & Bros Holding aims to establish a leading cloud computing platform in Saudi Arabia, bringing EdgeNext's advanced cloud computing product experience, technological innovation capabilities, and service experience to Saudi Arabia, promoting the prosperity of Saudi Arabia's digital economy and helping global enterprises seize new opportunities for development in the Middle East! This is another milestone achievement for EdgeNext's internationalization."
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    In the Middle East and North Africa region, EdgeNext has completed the construction and coverage of network infrastructure in major countries such as Saudi Arabia, the United Arab Emirates, Turkey, Bahrain, Iraq, Egypt, Jordan, and other countries, providing localized and customized edge cloud services for global enterprise customers. Currently, EdgeNext has become one of the largest and most competitive edge network resource providers in the Middle East and North Africa region.
                  </p>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    The joint venture will commence operations immediately, with a roadmap of innovative products and services to be rolled out over the coming months. Partners, stakeholders, and customers can anticipate engaging events and announcements detailing the initiatives' progress.
                  </p>

                  <div className="border-t border-gray-200 my-12"></div>

                  <h2 className="text-2xl font-medium mb-4">About EdgeNext</h2>
                  <p className="text-gray-600 mb-8">
                    As a global edge cloud service provider, EdgeNext has built 2,000+ edge nodes in 250+ cities worldwide and has deep interconnection partnerships with 100+ mainstream operators worldwide, providing integrated edge cloud services of "network + security + computing" for global enterprise customers. EdgeNext has continuously worked toward node and infrastructure expansion in the MENA to provide effective solutions to major ISPs, local and global organizations and business partners tailored to their needs.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">About Ajlan & Bros Holding</h2>
                  <p className="text-gray-600 mb-8">
                    Ajlan & Bros Holding (hereafter referred to as "the Group"), owned by the Alajlan family, is a global diversified conglomerate with multi-channel business sectors covering financial services, consumer-oriented manufacturing, healthcare provision, education, gaming, metal & mining, hospitality & tourism, logistics, etc. The Group employs over 15,000 staff in more than 25 countries, across 75 companies. The Alajlan family, one of the most well-known family businesses in the Middle East, ranks 33rd in 2023 Forbes' top 100 family businesses in the Arab World.
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
                        <span className="text-gray-600">Joint venture announced at GITEX 2023</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Focus on CDN, edge cloud, and cloud security</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Tailored for MENA region's unique needs</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Network infrastructure in 8+ MENA countries</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Related Services</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Globe className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Content Delivery Network</div>
                        </div>
                      </div>
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
                          <Shield className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Cloud Security</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a 
                      href="/company/contact"
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
                <a href="/resources/news/edgenext-ajlan-bros-aj-cloud-launch-mena" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                      alt="EdgeNext and Ajlan & Bros Launch AJ Cloud"
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

              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <a href="/resources/news/edgenext-commercis-strategic-cloud-partnership-gitex" className="block">
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

              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <a href="/resources/news/edgenext-national-pulse-strategic-partnership" className="block">
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

export default AjlanBrosJointVenture;