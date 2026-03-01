import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, MapPin, Calendar, Clock } from 'lucide-react';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('global');

  // Event data organized by region
  const events = {
    global: [
      {
        location: 'Lagos, Nigeria',
        name: 'African Peering & Interconnection Forum (AfPIF 2026)',
        dates: 'Coming soon',
       available: false,
       past: false
      },
      {
        location: 'Dubai, UAE',
        name: 'Gitex Global 2026',
        dates: 'Dec 8–11',
       available: false,
       past: false
      },
      {
        location: 'Virtual',
        name: 'Next Gen Edge Cloud Computing Webinar',
        dates: 'Coming soon',
       available: false,
       past: false
      },
      {
        location: 'Singapore',
        name: 'Cloud Expo Asia',
        dates: 'Coming soon',
       available: false,
       past: false
      },
      {
        location: 'Lagos, Nigeria',
        name: 'African Gaming Expo (iGaming)',
        dates: 'Coming soon',
       available: false,
       past: true
      }
    ],
    apac: [
      {
        location: 'Singapore',
        name: 'Cloud Expo Asia',
        dates: 'Coming soon',
       available: false,
       past: false
      }
    ],
    emea: [
      {
        location: 'Dubai, UAE',
        name: 'Gitex Global 2026',
        dates: 'Dec 8–11',
       available: false,
       past: false
      },
      {
        location: 'Lagos, Nigeria',
        name: 'African Peering & Interconnection Forum (AfPIF 2026)',
        dates: 'Coming soon',
       available: false,
       past: false
      },
      {
        location: 'Lagos, Nigeria',
        name: 'African Gaming Expo (iGaming)',
        dates: 'Coming soon',
       available: false,
       past: true
      }
    ],
    americas: [
      { 
        location: 'San Francisco, USA',
        name: 'Game Developers Conference (GDC)',
        dates: 'Coming soon',
       available: true,
       past: true
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.05),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_70%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                <h1 className="text-[40px] md:text-[56px] font-medium mb-6 leading-[1.1] tracking-tight text-white">
                 NAB Show 2026
                </h1>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 text-white/90">
                  <div className="flex items-center">
                    <Calendar className="mr-2 text-[#0EB623]" size={20} />
                    <span>April 18–22,2026</span>
                  </div>
                  <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 text-[#0EB623]" size={20} />
                    <span>Las Vegas, NV</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl font-light leading-relaxed">
                  Join EdgeNext at NAB Show 2026 to explore the future of edge cloud infrastructure and digital innovation across emerging markets.
                </p>
                <a 
                  href="/Contact_us" 
                  className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300"
                >
                   Contact US
                  <ArrowRight className="ml-2" size={20} />
                </a>
                </div>
            </div>
          </div>
        </section>

        {/* All Scheduled Events Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-medium mb-8">All scheduled events</h2>
            
            {/* Tabs */}
            <div className="flex overflow-x-auto pb-2 mb-8 border-b border-gray-200 gap-2 md:gap-8">
              <button 
                onClick={() => setActiveTab('global')}
                className={`px-4 py-2 whitespace-nowrap font-medium transition-colors duration-200 ${
                  activeTab === 'global' 
                    ? 'text-[#0EB623] border-b-2 border-[#0EB623]'
                    : 'text-gray-600 hover:text-[#0EB623]'
                }`}
              >
                Global
              </button>
              <button 
                onClick={() => setActiveTab('apac')}
                className={`px-4 py-2 whitespace-nowrap font-medium transition-colors duration-200 ${
                  activeTab === 'apac' 
                    ? 'text-[#0EB623] border-b-2 border-[#0EB623]' 
                    : 'text-gray-600 hover:text-[#0EB623]'
                }`}
              >
                APAC
              </button>
              <button 
                onClick={() => setActiveTab('emea')}
                className={`px-4 py-2 whitespace-nowrap font-medium transition-colors duration-200 ${
                  activeTab === 'emea' 
                    ? 'text-[#0EB623] border-b-2 border-[#0EB623]' 
                    : 'text-gray-600 hover:text-[#0EB623]'
                }`}
              >
                EMEA
              </button>
              <button 
                onClick={() => setActiveTab('americas')}
                className={`px-4 py-2 whitespace-nowrap font-medium transition-colors duration-200 ${
                  activeTab === 'americas' 
                    ? 'text-[#0EB623] border-b-2 border-[#0EB623]' 
                    : 'text-gray-600 hover:text-[#0EB623]'
                }`}
              >
                Americas
              </button>
            </div>
            
            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events[activeTab as keyof typeof events].map((event, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="text-[#0EB623] font-medium text-sm mb-3">{event.location}</div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-[#0EB623] transition-colors duration-300">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{event.dates}</p>
                  
                  {event.available ? (
                    event.past ? (
                      <span className="text-gray-400 font-medium">Past event</span>
                    ) : (
                      <a 
                        href="#" 
                        className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300"
                      >
                        Learn more
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                      </a>
                    )
                  ) : (
                    <span className="text-gray-400 font-medium">Coming soon</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Want to meet us at an event?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Contact our team to schedule a meeting at any of our upcoming events. We'd love to discuss how EdgeNext can help accelerate your digital transformation.
              </p>
              <a 
                href="/contact_us" 
                className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300"
              >
                Contact us
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

export default Events;