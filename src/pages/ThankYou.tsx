import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle, Mail, Calendar, Users, Globe, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYou: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#0EB623] rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: -10,
                  opacity: 1,
                  scale: Math.random() * 0.5 + 0.5
                }}
                animate={{
                  y: window.innerHeight + 10,
                  x: Math.random() * window.innerWidth,
                  opacity: 0,
                  rotate: 360
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  ease: "easeOut",
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        )}

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-24 h-24 bg-[#0EB623]/10 rounded-full flex items-center justify-center mx-auto mb-8"
              >
                <CheckCircle className="text-[#0EB623]" size={48} />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[40px] md:text-[56px] font-bold mb-6 leading-[1.1] tracking-tight"
              >
                <span className="text-gray-900">Thank You!</span>
                <br />
                <span className="text-[#0EB623]">We've Received Your Message</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
              >
                Your request has been successfully submitted. Our team will review your information and get back to you within 24 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center justify-center group"
                >
                  Back to Home
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
                <Link 
                  to="/blog"
                  className="border-2 border-[#0EB623] text-[#0EB623] hover:bg-[#0EB623] hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center"
                >
                  Explore Our Blog
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Happens Next Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-medium mb-6">What Happens Next?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Here's what you can expect from our team
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-[#0EB623]" size={32} />
                  </div>
                  <div className="text-6xl font-bold text-[#0EB623] mb-4">01</div>
                  <h3 className="text-xl font-medium mb-4">We Review Your Request</h3>
                  <p className="text-gray-600">
                    Our technical experts will carefully review your requirements and prepare a customized solution proposal.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="text-[#0EB623]" size={32} />
                  </div>
                  <div className="text-6xl font-bold text-[#0EB623] mb-4">02</div>
                  <h3 className="text-xl font-medium mb-4">We Schedule a Call</h3>
                  <p className="text-gray-600">
                    Within 24 hours, we'll reach out to schedule a consultation call to discuss your specific needs and goals.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="text-[#0EB623]" size={32} />
                  </div>
                  <div className="text-6xl font-bold text-[#0EB623] mb-4">03</div>
                  <h3 className="text-xl font-medium mb-4">We Deliver Solutions</h3>
                  <p className="text-gray-600">
                    Our team will present tailored recommendations and help you implement the perfect EdgeNext solution.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Why EdgeNext Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Why Choose <span className="text-[#0EB623]">EdgeNext?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                While you wait, here's why thousands of companies trust EdgeNext
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Global Reach</h3>
                <p className="text-gray-600">
                  1500+ points of presence across 290+ cities worldwide, with dominant coverage in emerging markets.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Ultra-Low Latency</h3>
                <p className="text-gray-600">
                  &lt;30ms global response time with intelligent routing and edge optimization.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4">Enterprise Security</h3>
                <p className="text-gray-600">
                  Advanced DDoS protection, WAF, and threat intelligence to keep your business secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Don't wait for our call - you can start exploring EdgeNext's platform right now with a free trial.
              </p>
              <a 
                href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Start Free Trial
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

export default ThankYou;