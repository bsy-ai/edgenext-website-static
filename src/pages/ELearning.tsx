import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, GraduationCap, Network, Shield, Globe, Check, Zap, Monitor, Cloud, Lock, Activity, Server, Database, BookOpen, Users, Video, Laptop } from 'lucide-react';
import CountUp from 'react-countup';

const ELearning: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: ''
  });

  const [hasScrolled, setHasScrolled] = useState(false);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-[40px] md:text-[60px] font-bold mb-6 leading-[1.1]">
                  <span className="text-gray-900">Shape the Future of</span>
                  <span className="animated-gradient-text block mt-2">E-Learning</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  At EdgeNext, we believe great learning shouldn't be limited by lag, downtime, or where a student happens to be. That's why we power online classrooms with lightning-fast delivery and built-in protection—so teachers can focus on teaching, and students can focus on learning.
                </p>
                <a 
                  href="/contact_us" 
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg"
                  alt="E-Learning"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="stats-section">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Be the <span className="text-[#0EB623]">Backbone</span> of Tomorrow's Classrooms
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to scale e-learning with confidence—across devices, regions, and generations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  USD 250 B → 490 B
                </div>
                <div className="text-xl font-medium mb-2">E-learning market to nearly double by 2029</div>
                <p className="text-gray-300">Projected USD 490.2 B by 2029</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && <CountUp end={1.1} suffix="B+" decimals={1} duration={2} />}
                  {!hasScrolled && "1.1B+"}
                </div>
                <div className="text-xl font-medium mb-2">Global Online Learners by 2030</div>
                <p className="text-gray-300">Active users worldwide</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && <CountUp end={11.88} suffix="% CAGR" decimals={2} duration={2} />}
                  {!hasScrolled && "11.88% CAGR"}
                </div>
                <div className="text-xl font-medium mb-2">Sustained Market Growth</div>
                <p className="text-gray-300">Compound annual growth rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Taking Your Goals to <span className="text-[#0EB623]">New Heights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Build engaging, secure, and scalable learning environments that work for every student—no matter where they log in.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                      <Network className="text-[#0EB623]" size={24} />
                    </div>
                    <h3 className="text-xl font-medium">Low Latency & Real-Time Delivery</h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                      <Shield className="text-[#0EB623]" size={24} />
                    </div>
                    <h3 className="text-xl font-medium">Enterprise-Grade Security</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                      <Video className="text-[#0EB623]" size={24} />
                    </div>
                    <h3 className="text-xl font-medium">All-in-One Video Infrastructure</h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                      <Server className="text-[#0EB623]" size={24} />
                    </div>
                    <h3 className="text-xl font-medium">Massive Scalability</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Key Benefits</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Future-Ready Learning at Global Scale</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As global demand for online learning surges, EdgeNext delivers the speed, stability, and scalability needed to meet it—seamlessly and securely.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">Real-Time Optimization for Seamless Learning</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Reduce latency and deliver consistent, high-quality experiences across devices and locations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">&lt;200ms end-to-end delay via UDP private protocol</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Fast first-frame load and low lag</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Consistent performance across geographies</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg"
                  alt="Real-Time Learning"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg"
                  alt="Security Features"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Shield className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">Security That Safeguards Learning Content</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Protect your valuable IP and student data with enterprise-grade defense.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Physical + virtual server security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Anti-hijacking and content integrity features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Threat mitigation with stable compute power</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-4">
                    <Video className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-2xl font-medium">All-in-One Video Delivery for Live & On-Demand</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Create flexible, cross-platform classrooms with our unified video platform.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Live streaming with adaptive bitrate and watermark</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">VOD with screenshot, recording, and push features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Full support for all major terminals</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/4144099/pexels-photo-4144099.jpeg"
                  alt="Video Delivery"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Application Scenarios */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Application Scenarios</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Edge-Ready Solutions for <span className="text-[#0EB623]">Every Scenario</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Define tailored infrastructure for real-world education models—helping institutions deliver better experiences, no matter the class size or location.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="https://images.pexels.com/photos/4144147/pexels-photo-4144147.jpeg"
                  alt="1-on-1 Classes"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">1-on-1 Classes</h3>
                <p className="text-gray-600">
                  Personalized online instruction with one teacher and one student. Ideal for tutoring, language learning, or customized support—powered by real-time low-latency delivery.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="https://images.pexels.com/photos/4144176/pexels-photo-4144176.jpeg"
                  alt="Small Group Classes"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Small Group Classes</h3>
                <p className="text-gray-600">
                  Enable seamless style of interactive learning for students in different locations. EdgeNext ensures stable performance across wide networks, supporting meaningful collaboration.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img 
                  src="https://images.pexels.com/photos/4144100/pexels-photo-4144100.jpeg"
                  alt="Lectures & Townhall Sessions"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Lectures & Townhall Sessions</h3>
                <p className="text-gray-600">
                  Support large-scale virtual classrooms with thousands of concurrent learners. Live streaming with ultra-low latency and high reliability ensures everyone stays connected and engaged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                  The World Is Learning Online—Are You Ready?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  From live lectures to large-scale virtual campuses, EdgeNext supports the evolving needs of digital education with low-latency delivery, secure platforms, and flexible video capabilities.
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
                <form className="e-learning-contact-form space-y-4" onSubmit={handleSubmit}>
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

export default ELearning;