import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrustedBy } from '../components/TrustedBy';
import { ArrowRight, Check, Globe, MapPin, ChevronDown, ChevronUp, ShoppingCart, Gamepad2, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalNetwork: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const toggleRegion = (region: string) => {
    if (activeRegion === region) {
      setActiveRegion(null);
    } else {
      setActiveRegion(region);
    }
  };

  const regions = {
    'North America': [
      'Los Angeles', 'Chicago', 'Seattle', 'Santa Clara', 'Ashburn', 'Miami', 'San Jose', 
      'New York', 'Montreal', 'Dallas', 'Denver', 'Toronto', 'Vancouver'
    ],
    'Latin America & the Caribbean': [
      'São Paulo', 'Rio de Janeiro', 'Fortaleza', 'Mexico City', 'Buenos Aires', 'Santiago', 
      'Bogotá', 'Queretaro', 'Lima', 'Brasilia', 'Salvador', 'Asuncion', 'Caracas'
    ],
    'Europe': [
      'Paris', 'Marseille', 'Madrid', 'London', 'Milan', 'Amsterdam', 'Frankfurt', 'Helsinki', 'Baku'
    ],
    'Africa': [
      'Johannesburg', 'Cape Town', 'Lagos', 'Tunis', 'Algiers', 'Addis Ababa', 'Dar es Salaam', 
      'Cairo', 'Casablanca', 'Tripoli', 'N\'Djamena', 'Brazzaville', 'Kinshasa', 'Libreville', 
      'Nairobi', 'Antananarivo', 'Lilongwe', 'Niamey', 'Rabat', 'Gaborone', 'Kigali', 'Dodoma', 
      'Kampala', 'Lusaka'
    ],
    'Middle East': [
      'Fujairah', 'Dubai', 'Manama', 'Baghdad', 'Mosul', 'Sulaymaniyah', 'Erbil', 'Baqubah', 
      'Jeddah', 'Riyadh', 'Dammam', 'Muscat', 'Amman', 'Doha', 'Beirut', 'Istanbul', 
      'Kuwait City', 'AlHillah', 'Nablus', 'Sana\'a'
    ],
    'Asia': [
      'Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Toshkent', 'Bangkok', 'Chon Buri', 'Muang Pathum Thani', 
      'Hong Kong', 'Taipei', 'Macau', 'Vientiane', 'Seoul', 'Singapore', 'Manila', 'Cebu', 'Davao', 
      'Karachi', 'Lahore', 'Kathmandu', 'Almaty', 'Astana', 'Pavlodar', 'Ulaanbaatar', 'Yangon', 
      'Mandalay', 'Naypyidaw', 'Jakarta', 'Surabaya', 'Semarang', 'Medan', 'Makassar', 'Tangerang', 
      'Lampung', 'Palembang', 'Batam', 'Pekanbaru', 'Bandung', 'Yogyakarta', 'Depok', 'Denpasar', 
      'Banjarmasin', 'Kuala Lumpur', 'Johorbaru', 'Kuching', 'Kota Kinabalu', 'Dhaka', 'Jessore', 
      'Comilla', 'Noakhali', 'Chittagong', 'Sylhet', 'Khulna', 'Gazipur', 'Bandar Seri Begawan', 
      'Phnom Penh', 'Tokyo', 'Osaka', 'Mumbai', 'New Delhi', 'Noida'
    ],
    'Oceania': [
      'Sydney', 'Auckland'
    ],
    'Mainland China': [
      'Heilongjiang', 'Liaoning', 'Jilin', 'Hebei', 'Henan', 'Hubei', 'Hunan', 'Shandong', 
      'Shanxi', 'Anhui', 'Zhejiang', 'Jiangsu', 'Fujian', 'Guangdong', 'Hainan', 'Sichuan', 
      'Yunnan', 'Guizhou', 'Qinghai', 'Gansu', 'Jiangxi', 'Inner Mongolia', 'Ningxia', 'Xinjiang', 
      'Tibet', 'Guangxi', 'Shaanxi', 'Shanghai', 'Chongqing', 'Beijing', 'Tianjin'
    ],
    'Coming Soon': [
      'Denver', 'Toronto', 'Vancouver', 'Lima', 'Brasilia', 'Salvador', 'Asuncion', 'Caracas', 
      'Helsinki', 'Baku', 'Cape Town', 'Algiers', 'Addis Ababa', 'Dar es Salaam', 'Casablanca', 
      'N\'Djamena', 'Brazzaville', 'Libreville', 'Lilongwe', 'Niamey', 'Rabat', 'Kigali', 'Kampala', 
      'Bengaluru', 'Chennai', 'Pune', 'Hyderabad', 'Ashgabat', 'Bishkek', 'Dushanbe', 'Auckland'
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[56px] font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-gray-900">EdgeNext </span>
                <span className="animated-gradient-text">Global Network</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                With deep-rooted infrastructure in APAC, China, MENA, and Emerging Markets, EdgeNext is redefining what's possible in acceleration and computing through edge cloud. Our globally distributed edge network ensures high performance, low latency, and exceptional availability—no matter where your users are.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact_us" 
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Talk to an expert
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
                <a 
                  href="https://home.console.edgenext.com/#/uc/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#0EB623] text-gray-800 font-medium px-8 py-4 rounded-xl hover:bg-white/80 transition-all duration-300 flex items-center justify-center"
                >
                  Create an account
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                  <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">1500+</div>
                  <div className="text-sm md:text-base text-gray-700">Global Points of Presence</div>
                </div>
                <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                  <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">90+</div>
                  <div className="text-sm md:text-base text-gray-700">Tbps Total Bandwidth</div>
                </div>
                <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                  <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">60M+</div>
                  <div className="text-sm md:text-base text-gray-700">Daily Threats Blocked</div>
                </div>
                <div className="glass-card rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm bg-white/40 hover:bg-white/60 hover:shadow-glow transition-all duration-300">
                  <div className="text-2xl md:text-4xl font-bold text-[#0EB623] mb-2">{"<30ms"}</div>
                  <div className="text-sm md:text-base text-gray-700">Global Latency</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Network Footprint Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Our Network Footprint</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                EdgeNext offers tailored edge delivery that adapts to local conditions, regulatory environments, and real-world traffic patterns.
              </p>
            </div>

            {/* Map */}
            <div className="mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-lg hover:shadow-xl transition-all duration-500">
              <div style={{ width: '100%', height: '500px' }}>
                <iframe 
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                  width="100%" 
                  height="100%" 
                  src="/kepler.gl.html" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Data Center Locations */}
            <div className="mb-16">
              <h3 className="text-2xl font-medium mb-8">Data Center Locations by Region</h3>
              
              <div className="space-y-4">
                {Object.entries(regions).map(([region, cities]) => (
                  <div key={region} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button 
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => toggleRegion(region)}
                    >
                      <span className="font-medium text-lg">{region}</span>
                      {activeRegion === region ? (
                        <ChevronUp className="text-[#0EB623]" size={20} />
                      ) : (
                        <ChevronDown className="text-[#0EB623]" size={20} />
                      )}
                    </button>
                    
                    {activeRegion === region && (
                      <div className="px-6 py-4 bg-gray-50">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {cities.map((city) => (
                            <div key={city} className="flex items-center gap-2">
                              <MapPin className="text-[#0EB623] flex-shrink-0" size={16} />
                              <span className="text-gray-700">{city}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Network Excellence */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Regional <span className="text-[#0EB623]">Network Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering unparalleled performance across strategic markets with specialized infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* China CDN */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0EB623]/10 rounded-lg flex items-center justify-center">
                    <Globe className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium">China CDN</h3>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">Cross-border Content Delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">ICP License Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">Local Cache Optimization</span>
                  </li>
                </ul>
                
                <Link to="/china_cdn" className="inline-flex items-center text-[#0EB623] font-medium hover:gap-2 transition-all duration-300">
                  Explore China CDN <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              {/* Southeast Asia CDN */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0EB623]/10 rounded-lg flex items-center justify-center">
                    <Globe className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium">Southeast Asia CDN</h3>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">SEA Delivery Optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">Extensive Global Network</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">Tailored Solutions for SEA Challenges</span>
                  </li>
                </ul>
                
                <Link to="/southeast_asia_cdn" className="inline-flex items-center text-[#0EB623] font-medium hover:gap-2 transition-all duration-300">
                  Explore SEA CDN <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              {/* MENA CDN */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0EB623]/10 rounded-lg flex items-center justify-center">
                    <Globe className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium">MENA CDN</h3>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">Compliance-Ready Infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">Deep Local Partnerships</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-[#0EB623] flex-shrink-0" size={18} />
                    <span className="text-gray-600">Optimized Arabic Content Delivery</span>
                  </li>
                </ul>
                
                <Link to="/mea_cdn" className="inline-flex items-center text-[#0EB623] font-medium hover:gap-2 transition-all duration-300">
                  Explore MENA CDN <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Success Stories */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Customer Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading companies achieve remarkable results with EdgeNext
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Link to="/case-study/global-delivery-top-ecommerce-in-sea" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="text-[#0EB623]" size={20} />
                    </div>
                    <img 
                      src="/GlobalDeliveryTopEcommerceinSEA.jpg"
                      alt="Global Delivery – Top Ecommerce in SEA"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      Global Delivery – Top Ecommerce in SEA
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Enabled fast and stable livestreaming for major sales events across Southeast Asia's booming ecommerce market.
                    </p>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read Case Study
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Case Study 2 */}
              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Link to="/case-study/cdn-gaming-solution-for-us-top-gaming-company" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center">
                      <Gamepad2 className="text-[#0EB623]" size={20} />
                    </div>
                    <img 
                      src="/CDNGamingSolutionforUSTopGamingCompany.jpg"
                      alt="CDN Gaming Solution for US Top Gaming Company"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      CDN Gaming Solution for US Top Gaming Company
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Optimized game downloads and ensured seamless play with intelligent edge delivery solutions.
                    </p>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read Case Study
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Case Study 3 */}
              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Link to="/case-study/media-on-demand-solution-for-top-global-short-video-platform" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <div className="absolute top-4 left-4 w-10 h-10 bg-white/80 rounded-lg flex items-center justify-center">
                      <Film className="text-[#0EB623]" size={20} />
                    </div>
                    <img 
                      src="/MediaonDemandSolutionforTopGlobalShortVideoPlatform.jpg"
                      alt="Media on Demand Solution for Top Global Short Video Platform"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      Media on Demand Solution for Top Global Short Video Platform
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Enhanced video delivery and reduced buffering time across global short-form content platforms.
                    </p>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read Case Study
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Banner Section */}
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-2">Custom Solutions. Local Support. Real Impact.</h2>
                <p className="text-gray-600">
                  EdgeNext tailors acceleration strategies to your platform's needs, with deep regional expertise and bilingual support to keep your global delivery fast, compliant, and under control.
                </p>
              </div>
              <Link 
                to="/contact_us" 
                className="px-8 py-4 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <TrustedBy />

        {/* Footer CTA Section */}
        <section className="py-24 bg-[#0EB623]">
       <div className="container mx-auto px-4 relative">
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
      
      <h2 className="text-4xl font-medium text-white mb-6">
                Ready to grow—together?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join EdgeNext to unlock new markets, grow your revenue, and empower your customers with edge-first technology.
              </p>
              <Link 
                to="/contact_us" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Contact us
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GlobalNetwork;