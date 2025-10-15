import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Check, Globe, Shield, Zap, Server, Database, RefreshCw, Cloud, Building2, Map, MapPin, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChatLabsVivaTech: React.FC = () => {
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
                <div className="text-[#0EB623] text-sm font-medium mb-4">News • June 15, 2023</div>
                <h1 className="text-[32px] md:text-[48px] font-medium mb-6 leading-[1.2] w-full">
                  EdgeNext x ChatLabs- Happy Hour at VivaTech 2023
                </h1>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="/edgenext-chatlabs-vivatech-1.jpeg"
                    alt="EdgeNext x ChatLabs Happy Hour at VivaTech"
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
                    Let's raise a glass to a fantastic Happy Hour celebration with our partners Michel Tjoeng and Xiana Chin 覃心璇 at ChatLabs at Vivatech 2023! Thank you to all the amazing participants who made this event unforgettable. 🥂With innovation, growth, and success in mind, let's build a brighter future together. Connect with our Senior Global Director, Brett Roberts, during the event to explore more business opportunities.🕶️
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img 
                        src="/edgenext-chatlabs-vivatech-2.jpeg"
                        alt="EdgeNext x ChatLabs Happy Hour at VivaTech"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img 
                        src="/edgenext-chatlabs-vivatech-3.jpeg"
                        alt="EdgeNext x ChatLabs Happy Hour at VivaTech"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-12"></div>

                  <h2 className="text-2xl font-medium mb-4">About VivaTech</h2>
                  <p className="text-gray-600 mb-8">
                    VivaTech (Viva Technology) is Europe's biggest startup and tech event, bringing together startups, tech leaders, major corporations, and investors to celebrate innovation. It's a global meeting place for business transformation and growth, showcasing the latest technological innovations and fostering collaboration between startups and established companies.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">About EdgeNext</h2>
                  <p className="text-gray-600 mb-8">
                    EdgeNext is a prominent leader in the global edge cloud services industry, with a robust infrastructure of over 1,500 edge nodes spanning more than 290 cities worldwide. The company has built strong interconnection partnerships with over 100 key operators across the globe, enabling it to deliver comprehensive edge cloud services, including networking, security, and computing, to meet the varied needs of its enterprise clients.
                  </p>

                  <p className="text-gray-600 mb-8">
                    As part of its ongoing commitment to expanding its presence and capabilities, EdgeNext has been actively growing its infrastructure throughout the Asia Pacific, China, and Middle East & Africa regions. This expansion allows EdgeNext to provide tailored, high-performance solutions for major Internet Service Providers (ISPs), local businesses, international organizations, and strategic partners, ensuring their specific needs are met with precision and efficiency.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">About ChatLabs</h2>
                  <p className="text-gray-600 mb-8">
                    ChatLabs is a leading provider of innovative communication and social media solutions, specializing in helping businesses expand their digital presence in China and beyond. With a deep understanding of the Chinese market and social media landscape, ChatLabs offers comprehensive strategies and tools for companies looking to establish and grow their brand in this dynamic region.
                  </p>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Event Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Networking with industry leaders</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Partnership celebration with ChatLabs</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Exploring business opportunities</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Innovation showcase at VivaTech 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Key Contacts</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Brett Roberts</div>
                          <div className="text-sm text-gray-500">Senior Global Director, EdgeNext</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Michel Tjoeng</div>
                          <div className="text-sm text-gray-500">Partner, ChatLabs</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Xiana Chin 覃心璇</div>
                          <div className="text-sm text-gray-500">Partner, ChatLabs</div>
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
                <a href="/edgenext-partners-with-chatlabs-to-offer-comprehensive-technology-solutions-for-content-delivery-and-social-media-expansion-into-china-and-beyond" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                      alt="EdgeNext and ChatLabs Partnership"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime="2023-06-14">June 14, 2023</time>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      EdgeNext Partners with Chatlabs to Offer Comprehensive Technology Solutions
                    </h3>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </a>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <a href="/resources/news/edgenext-streaming-media-trendsetting-products" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                      alt="EdgeNext Streaming Media Trendsetting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime="2023-06-15">June 15, 2023</time>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      EdgeNext Unified Global Edge Cloud Platform Recognized as Trendsetting Product
                    </h3>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read more
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </a>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <a href="/resources/news/edgenext-streaming-media-east-2023" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                      alt="EdgeNext at Streaming Media East"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <time dateTime="2023-05-23">May 23, 2023</time>
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      EdgeNext attended Streaming Media East 2023
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
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Ready to enhance your digital infrastructure?</h2>
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

export default ChatLabsVivaTech;