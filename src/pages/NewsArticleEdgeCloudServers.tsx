import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Check, Globe, Shield, Zap, Server, Database, RefreshCw, Cloud, Building2, Map, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsArticleEdgeCloudServers: React.FC = () => {
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
                <div className="text-[#0EB623] text-sm font-medium mb-4">News • March 24, 2025</div>
                <h1 className="text-[32px] md:text-[48px] font-medium mb-6 leading-[1.2] w-full">
                  EdgeNext Edge Cloud Servers Add New Nodes in 12 Countries! Accelerating Global Expansion for Businesses
                </h1>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden shadow-md">
                  <img 
                    src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
                    alt="EdgeNext Global Network"
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
                    EdgeNext Technology has officially launched the upgraded ECS 2.0, adding new infrastructure deployments in 12 countries, including Kazakhstan, Uzbekistan, Pakistan, Nepal, Mongolia, Iraq, Saudi Arabia, Nigeria, South Africa, Kenya, Libya, and Australia. This expansion covers key regions such as Asia, the Middle East, Africa, North America, and Oceania.
                  </p>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    This upgrade marks EdgeNext as the first global provider to establish complete cloud service capabilities in emerging markets such as Kazakhstan, Uzbekistan, and Pakistan, with a service network covering key countries along the "Belt and Road" initiative, fully supporting businesses in seizing early opportunities in global expansion.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-medium mb-4">Low-latency, scalable edge cloud servers (ECS)</h2>
                    <p className="text-gray-600 mb-4">
                      Full coverage in five major regions: Asia, Middle East, Africa, North America, and Oceania, with 16 country node resources available (more resources coming soon, stay tuned)!
                    </p>
                  </div>

                  <h2 className="text-2xl font-medium mb-4">Recommended Nodes in Emerging Markets (New):</h2>
                  <div className="overflow-x-auto mb-8">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Region</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Node Resources</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium" rowSpan={5}>Asia</td>
                          <td className="py-3 px-4 text-gray-600">Mongolia (Ulaanbaatar)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">Kazakhstan (Pavlodar)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">Uzbekistan (Tashkent)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">Pakistan (Karachi)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">Nepal (Kathmandu)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium" rowSpan={2}>Middle East</td>
                          <td className="py-3 px-4 text-gray-600">Iraq (Baghdad)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">Saudi Arabia (Riyadh)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium" rowSpan={4}>Africa</td>
                          <td className="py-3 px-4 text-gray-600">Nigeria (Lagos)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">Kenya (Nairobi)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">South Africa (Johannesburg)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 text-gray-600">Libya (Tripoli)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-3 px-4 font-medium">Oceania</td>
                          <td className="py-3 px-4 text-gray-600">Australia (Sydney)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h2 className="text-2xl font-medium mb-4">New User Promotion</h2>
                  <div className="bg-[#0EB623]/5 rounded-xl p-6 mb-8">
                    <p className="text-gray-700 mb-4">New users get a 30-day free trial + additional discounts (in USD)</p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-center gap-2">
                        <Check className="text-[#0EB623]" size={18} />
                        <span>1 month: 10% off</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-[#0EB623]" size={18} />
                        <span>6 months: 19% off</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-[#0EB623]" size={18} />
                        <span>12 months: 28% off</span>
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      <strong>Specifications:</strong> All specifications are available and customizable.
                    </p>
                    <p className="text-gray-700">
                      <strong>Event duration:</strong> Effective immediately until May 31, 2025.
                    </p>
                  </div>

                  <h2 className="text-2xl font-medium mb-4">Flexible configuration customized on-demand</h2>
                  <p className="text-gray-600 mb-8">
                    EdgeNext ECS supports users in configuring resources according to business needs, flexibly choosing server specifications, memory, and storage types, and relying on global multi-regional, multi-availability zone deployments to ensure low latency and high availability.
                  </p>

                  <div className="border-t border-gray-200 my-8"></div>

                  <h2 className="text-2xl font-medium mb-4">Comprehensive Technological Architecture Upgrade</h2>
                  <p className="text-gray-600 mb-6">
                    The new EdgeNext ECS, through over 1700+ edge nodes worldwide, builds a network of edge computing power, bringing cloud computing capabilities closer to the user side and providing global users with low-latency, scalable edge computing services. A wide variety of high-performance cloud servers support multiple CPU, memory, and storage configurations to achieve optimal performance, enhance service availability, and meet diverse business needs, including video, online gaming, live streaming, IoT, artificial intelligence, and real-time data processing and analysis.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                          <Cloud className="text-[#0EB623]" size={20} />
                        </div>
                        <h3 className="text-lg font-medium">Complete Cloud IaaS Ecosystem</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Providing users with bare metal servers (BMS), distributed storage, object storage, VPC private networks, LB load balancing, and other services, which can be quickly and dynamically adjusted according to business needs.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                          <Shield className="text-[#0EB623]" size={20} />
                        </div>
                        <h3 className="text-lg font-medium">Data Compliance Assurance</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Supporting 100% localized data storage, meeting multi-national data regulatory compliance requirements, and building a strong defense for data safety.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                          <Zap className="text-[#0EB623]" size={20} />
                        </div>
                        <h3 className="text-lg font-medium">End-to-End Ultra-Low Latency</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Based on the distributed architecture of edge computing, by deploying resources closer to the user side, end-to-end latency is reduced to milliseconds.
                      </p>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mt-1">
                          <RefreshCw className="text-[#0EB623]" size={20} />
                        </div>
                        <h3 className="text-lg font-medium">Agile Resource Delivery</h3>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Supports the creation of cloud host resources within 1-3 minutes, responding quickly to business expansion and temporary resource needs, significantly shortening the business launch cycle, and seizing market opportunities.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mb-4">Intelligent Scheduling, Instant Scaling</h3>
                  <p className="text-gray-600 mb-8">
                    Intelligent traffic scheduling and instant scaling capabilities support the bearing of sudden traffic surges and smooth expansion. Distributed storage capabilities are enhanced, with cloud disk performance leading 4-6 times that of native hard disks, ensuring business continuity and availability.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">Real-World Success Stories</h2>
                  
                  <h3 className="text-xl font-medium mb-3">Empowering Global Practice for Enterprises</h3>
                  <p className="text-gray-600 mb-6">
                    A well-known automaker has expanded into Central Asia, ensuring data localization compliance. The automaker deployed its smart car networking operation management platform on EdgeNext nodes in Kazakhstan and Uzbekistan. Data sovereignty compliance is ensured through EdgeNext's edge cloud servers, which flexibly allocate computing resources and optimize network communication. This successfully helped the enterprise to manage over ten thousand vehicles in Kazakhstan centrally, enhancing local operational efficiency and laying a solid foundation for fully exploring the Central Asian market.
                  </p>

                  <h3 className="text-xl font-medium mb-3">Rapid Implementation of Cross-National Business for Gaming</h3>
                  <p className="text-gray-600 mb-6">
                    A major gaming company launched and promoted its games in Central Asia, the Middle East, and South America, facing challenges such as high concurrent pressures, network delays, and cross-regional operation management. EdgeNext's high-performance edge cloud servers create a high-quality end-user experience, helping clients win consistent recognition from overseas markets and players: stably supporting massive players, intelligent traffic scheduling in various regions, + high-speed bandwidth optimizing network paths, significantly reducing latency. Operational teams can maintain remote maintenance via a web interface, real-time monitoring, and flexible resource allocation to ensure smooth game operation.
                  </p>

                  <h3 className="text-xl font-medium mb-3">Cross-National Growth in Audio and Video Communication (RTC)</h3>
                  <p className="text-gray-600 mb-6">
                    An enterprise expanded its real-time audio and video communication (RTC) business in the Middle East, covering scenarios such as short videos, online meetings, and interactive live broadcasts, facing the dual challenges of massive video storage and playback smoothness. EdgeNext edge cloud servers deploy computing and storage resources near users, reducing latency by 90% and significantly enhancing the viewing experience, thus helping the enterprise quickly tap into the local market. It also supports minute-level expansion from GB to TB level, supporting the steady growth of customer business.
                  </p>

                  <h2 className="text-2xl font-medium mb-4">Edge Computing Needs in the AI Era</h2>
                  <p className="text-gray-600 mb-8">
                    The rapid development of artificial intelligence technology is driving the widespread application of edge computing, with enterprises experiencing a surge in demand for high-performance, low-latency computing resources. Especially in AI scenarios such as autonomous driving, intelligent manufacturing, real-time data analysis, and video recognition, edge cloud servers enhance the efficiency of AI tasks through local computing, distributed computing processing, and low-latency data transmission.
                  </p>

                  <p className="text-gray-600 mb-8">
                    EdgeNext is striving to expand its global edge cloud nodes, build cloud computing infrastructure resources in emerging markets, and further open up the "last mile" for enterprises going global.
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
                        <span className="text-gray-600">12 new countries added to global network</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">First provider with complete cloud services in emerging markets</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">30-day free trial for new users</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Check className="text-[#0EB623]" size={16} />
                        </div>
                        <span className="text-gray-600">Up to 28% discount on annual plans</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Coverage Regions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0EB623]"></div>
                        <span className="text-gray-600">Asia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0EB623]"></div>
                        <span className="text-gray-600">Middle East</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0EB623]"></div>
                        <span className="text-gray-600">Africa</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0EB623]"></div>
                        <span className="text-gray-600">North America</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0EB623]"></div>
                        <span className="text-gray-600">Oceania</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Related Products</h3>
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
                          <Server className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Bare Metal Server</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Database className="text-[#0EB623]" size={18} />
                        </div>
                        <div>
                          <div className="font-medium">Object Storage</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a 
                      href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center group transition-all duration-300"
                    >
                      Try for Free
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
                      <time dateTime="2024-10-15">October 15, 2024</time>
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
                      src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
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
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Ready to expand your global reach?</h2>
                <p className="text-white/90">
                  Try EdgeNext Edge Cloud Servers and accelerate your business in emerging markets.
                </p>
              </div>
              <a 
                href="/vps" 
                className="px-8 py-4 bg-white text-[#0EB623] rounded-xl hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsArticleEdgeCloudServers;