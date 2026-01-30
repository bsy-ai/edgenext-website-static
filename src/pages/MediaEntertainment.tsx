import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  ArrowRight,
  Film,
  Tv,
  Radio,
  Newspaper,
  Play,
  Zap,
  Shield,
  Globe,
  Check,
  Network,
  Cloud,
  Lock,
  Users,
  ArrowUpRight,
  Activity,
  Gauge,
} from 'lucide-react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { createEmptyContactForm } from '../utils/contactFormDefaults';

const MediaEntertainment: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(createEmptyContactForm);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.company.trim() &&
      formData.country.trim()
    ) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(createEmptyContactForm());
      }, 3000);
    } else {
      alert(
        'Please fill in all required fields: Full Name, Work Email, Company, and Country/Region'
      );
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
        <section className="relative pt-20 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-[40px] md:text-[60px] font-bold mb-6 leading-[1.1]">
                  <span className="text-gray-900">Media Moves Fast—</span>
                  <span className="animated-gradient-text block mt-2">
                    We Move Faster
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  EdgeNext delivers ultra-fast, secure, and reliable media
                  experiences—from live news to global streaming—powered by
                  localized edge delivery and advanced threat protection.
                </p>
                <Link
                  to="/contact_us"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    size={20}
                  />
                </Link>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg"
                  alt="Media & Entertainment"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-medium mb-6">
                  What's Holding Media Back?
                </h2>
                <p className="text-lg text-gray-600">
                  At the heart of today's media challenges are unpredictable
                  traffic surges, evolving security threats, and the demand for
                  instant content refresh.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    Unpredictable Traffic Surges
                  </h3>
                  <p className="text-gray-600">
                    Major events can crash your site without warning.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    Security Risks & Attacks
                  </h3>
                  <p className="text-gray-600">
                    DNS hijacking, DDoS, and content tampering damage your
                    brand.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Gauge className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Delayed Updates</h3>
                  <p className="text-gray-600">
                    Slow refresh means lost authority and users.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-[#0EB623]" size={28} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">
                    Playback Interruptions
                  </h3>
                  <p className="text-gray-600">
                    Live events and VOD need to stream flawlessly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Glassmorphism */}
        <section
          id="stats-section"
          className="py-24 bg-gray-900 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(14,182,35,0.1)_25%,transparent_25%,transparent_75%,rgba(14,182,35,0.1)_75%,rgba(14,182,35,0.1))] bg-[length:60px_60px] animate-[flow_20s_linear_infinite]" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
                Future-Proof Streaming{' '}
                <span className="text-[#0EB623]">for a Real-Time World</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From latency-sensitive live streaming to secure content refresh,
                EdgeNext&apos;s edge platform empowers media providers to move
                faster, safer, and smarter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && <CountUp end={90} suffix="+" duration={2} />}
                  {!hasScrolled && '90+'}
                </div>
                <div className="text-xl font-semibold mb-2 text-white">
                  Global Bandwidth Capacity
                </div>
                <p className="text-gray-300">Tbps of total network capacity</p>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && (
                    <CountUp end={1500} suffix="+" duration={2} />
                  )}
                  {!hasScrolled && '1500+'}
                </div>
                <div className="text-xl font-semibold mb-2 text-white">
                  Global Points of Presence
                </div>
                <p className="text-gray-300">Across 290+ cities worldwide</p>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/20 transition-all duration-500">
                <div className="text-4xl font-bold text-[#0EB623] mb-4">
                  {hasScrolled && (
                    <CountUp end={30} prefix="<" suffix="ms" duration={2} />
                  )}
                  {!hasScrolled && '<30ms'}
                </div>
                <div className="text-xl font-semibold mb-2 text-white">
                  Response Time
                </div>
                <p className="text-gray-300">Ultra-low latency delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-[#F9F9F9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">
                Key Benefits
              </div>
              <h2 className="text-4xl font-medium mb-4">
                Media Infrastructure{' '}
                <span className="text-[#0EB623]">Built for the Future</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful, edge-first media solutions that scale with your
                audience—wherever they are.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-medium mb-4">
                  Hot Backup for Instant Recovery
                </h3>
                <p className="text-gray-600 mb-6">
                  Restore content fast during origin failures to keep media
                  delivery uninterrupted.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      Real-time edge-based backup
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      Prevents hijacks and outages
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">Always-on availability</span>
                  </li>
                </ul>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg"
                  alt="Dashboard"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
              <div>
                <img
                  src="/ai.jpg"
                  alt="Security"
                  className="rounded-xl shadow-lg w-full h-[300px] object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4">
                  AI-Driven Threat Defense
                </h3>
                <p className="text-gray-600 mb-6">
                  Stop attacks before they spread with smart detection and
                  expert response.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      SIEM analytics at the edge
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      Real-time root cause analysis
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      Safeguards brand and content
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-medium mb-4">
                  Millisecond Content Updates
                </h3>
                <p className="text-gray-600 mb-6">
                  Deliver real-time news and updates with millisecond-level
                  efficiency using P2P and smart routing.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      P2P technology for faster propagation
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      Network-wide refresh in milliseconds
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="text-[#0EB623]" size={20} />
                    <span className="text-gray-600">
                      Keeps content timely and relevant
                    </span>
                  </li>
                </ul>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="/speed.jpg"
                  alt="Updates"
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
              <div className="text-[#0EB623] text-sm font-medium mb-4">
                Application Scenarios
              </div>
              <h2 className="text-4xl font-medium mb-4">
                Tailoring Media Delivery for Dynamic Moments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Power real-time news updates, major event livestreams, and
                on-demand video experiences with low-latency, scalable
                infrastructure—wherever your audience is.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/CCTVCDN StreamingSolution.png"
                  alt="CCTV CDN Streaming Solution"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-medium mb-4">
                  CCTV – CDN Streaming Solution
                </h3>
                <p className="text-gray-600 mb-6">
                  China Central Television (CCTV) operates one of the
                  largest-scale digital video databases in the country,
                  supporting over 11.06 million simultaneous online viewers
                  during major broadcasts with EdgeNext&apos;s comprehensive
                  streaming solution.
                </p>
                <Link
                  to="/case-study/cctv-cdn-streaming-solution"
                  className="text-[#0EB623] font-medium inline-flex items-center group-hover:gap-2 transition-all duration-300"
                >
                  Read Case Study
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <img
                  src="/Beijing2022WinterOlympicGamesCDNStreamingSolution.png"
                  alt="Beijing 2022 Winter Olympic Games"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-medium mb-4">
                  Beijing 2022 Winter Olympic Games – CDN Streaming Solution
                </h3>
                <p className="text-gray-600 mb-6">
                  The 2022 Beijing Winter Olympic Games became the most-watched
                  Winter Olympics in history, achieving an extraordinary global
                  reach of over 2 billion people with EdgeNext&apos;s scalable
                  streaming infrastructure and real-time delivery capabilities.
                </p>
                <Link
                  to="/case-study/beijing-2022-winter-olympic-games-cdn-streaming-solution"
                  className="text-[#0EB623] font-medium inline-flex items-center group-hover:gap-2 transition-all duration-300"
                >
                  Read Case Study
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-[#0EB623] to-[#0CA61F] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15)_0%,transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15)_0%,transparent_55%)]" />

 <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Let's Power Your Next Streaming Milestone
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-10">
                Partner with EdgeNext to deliver seamless, secure, and high-performance media experiences—from real-time news to global VOD. Let's build something your audience won't forget.
              </p>
              <a
                href="/contact_us"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  size={20}
                />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default MediaEntertainment;
