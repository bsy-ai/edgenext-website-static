import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TrustedBy } from '../components/TrustedBy';
import { ArrowRight, Users, Lightbulb, Heart, ChevronDown, ChevronUp, Play } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Company: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !hasScrolled) {
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);


  const faqs = [
    {
      question: 'Why Choose Us?',
      answer: 'Other providers often struggle with local compliance issues and high latency — especially in regions like China, APAC, and MEA. That\'s where EdgeNext stands apart. We specialize in emerging markets, offering tailor-made CDN, cloud, and security solutions designed for your industry and your needs. Backed by 24/7 bilingual support and competitive pricing, we don\'t just deliver infrastructure — we deliver peace of mind!'
    },
    {
      question: 'How to Expand Business in APAC or China Faster?',
      answer: 'EdgeNext provides specialized infrastructure and local expertise to help businesses expand rapidly in APAC and China markets with compliance-ready solutions.'
    },
    {
      question: 'Does EdgeNext Offer Private Cloud?',
      answer: 'Yes, EdgeNext offers private cloud solutions tailored to enterprise needs with dedicated infrastructure and enhanced security.'
    },
    {
      question: 'Why Do I Need Security Features?',
      answer: 'Security features protect your digital assets from DDoS attacks, data breaches, and other cyber threats while ensuring compliance with regional regulations.'
    },
    {
      question: 'What Is Edge Computing, and Why Do I Need It for My Business?',
      answer: 'Edge computing brings processing closer to users, reducing latency and improving performance. It\'s essential for real-time applications and enhanced user experiences.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.company.trim() && formData.country.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', country: '' });
      }, 3000);
    } else {
      alert('Please fill in all required fields: Full Name, Work Email, Company, and Country/Region');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[60px] font-bold mb-6 leading-[1.1]">
                <span className="animated-gradient-text">Building the Edge Where It's Hardest</span>
                <br />
                <span className="animated-gradient-text">And Most Needed</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
                At EdgeNext, we believe every corner of the world deserves world-class digital access. That's why we've made it our mission to build secure, high-performance infrastructure across all over the world, especially Africa, Central Asia, Southeast Asia, and the Middle East — regions too often overlooked. We partner with local industries, adapt to complex realities, and help them grow into the future — from reliable connectivity to edge-native computing ready for the AI era.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white" id="stats-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4" translate="no">
                  {hasScrolled && <CountUp end={1700} suffix="+" duration={2} />}
                  {!hasScrolled && "1700+"}
                </div>
                <div className="text-lg text-gray-600">Global Points of Presence</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4" translate="no">
                  {hasScrolled && <CountUp end={60} suffix="B+" duration={2} />}
                  {!hasScrolled && "60B+"}
                </div>
                <div className="text-lg text-gray-600">Requests Processed Daily</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4" translate="no">
                  {hasScrolled && <CountUp end={80} suffix="+" duration={2} />}
                  {!hasScrolled && "80+"}
                </div>
                <div className="text-lg text-gray-600">Tbps Total Bandwidth</div>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4" translate="no">
                  {hasScrolled && <CountUp end={30} prefix="<" suffix="ms" duration={2} />}
                  {!hasScrolled && "<30ms"}
                </div>
                <div className="text-lg text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <TrustedBy />

        {/* Belief + Video Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  Built for Change.<br />
                  Powered by <span className="text-[#0EB623]">Purpose</span>.
                </h2>
              </div>
              <div className="relative">
                <a 
                  href="https://youtu.be/7ZRnN6Nz8SA?si=z_L5HN35uBnIgs4j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-video bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl overflow-hidden relative group cursor-pointer block"
                >
                  <img 
                    src="/edgenext.webp"
                    alt="Company Video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">Watch video</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Build <span className="text-[#0EB623]">Where It Matters</span>
                </h3>
                <p className="text-gray-600">
                  We believe access shouldn't be a privilege. That's why we invest where it's hardest to build — in regions often underserved by traditional cloud providers. We show up — where it matters most.
                </p>
              </div>

              <div className="group">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Where <span className="text-[#0EB623]">Innovation</span> Meets Impact
                </h3>
                <p className="text-gray-600">
                  From AI-powered routing to edge-native compute, our innovations are grounded in human needs. We design with empathy and scale with intention. Because technology should make life not just faster, but better.
                </p>
              </div>

              <div className="group">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-[#0EB623]" size={24} />
                </div>
                <h3 className="text-xl font-medium mb-4">
                  Rooted in <span className="text-[#0EB623]">Trust</span>
                </h3>
                <p className="text-gray-600">
                  We grow with our partners, whether it's local telcos or global brands. We're here to build meaningful, long-term relationships that empower real progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Callout Gradient CTA Block */}
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-2">Partner with Us to Build the Future Edge</h2>
                <p className="text-gray-600">
                  EdgeNext helps telcos expand their reach with scalable infrastructure and localized edge solutions built for tomorrow's demands.
                </p>
              </div>
              <a 
                href="/contact_us" 
                className="px-8 py-4 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-medium mb-4">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      {activeAccordion === index ? (
                        <ChevronUp className="text-[#0EB623]" size={20} />
                      ) : (
                        <ChevronDown className="text-[#0EB623]" size={20} />
                      )}
                    </button>
                    {activeAccordion === index && (
                      <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Green Contact CTA Block */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Ready to Build the Future Together?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  EdgeNext is built to scale with your business—especially in complex regions like China, Southeast Asia, and MENA. Let's create something extraordinary together.
                </p>
                <a 
                  href="/contact_us" 
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="company-contact-form space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-white/90 mb-2">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Work Email</label>
                    <input 
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Company</label>
                    <input 
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2">Country/Region</label>
                    <input 
                      type="text"
                      placeholder="Enter your country or region"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-[#0EB623] hover:bg-opacity-90'
                    }`}
                  >
                    {isSubmitted ? '✓ Message Sent!' : 'Get in Touch'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Company;