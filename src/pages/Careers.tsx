import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Heart, Shield, Globe, Target, Mail } from 'lucide-react';

const Careers: React.FC = () => {
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-[40px] md:text-[56px] font-medium mb-6 leading-[1.1] tracking-tight">
                <span className="text-gray-900">Join Us in Building the Edge</span>
                <br />
                <span className="text-[#0EB623]">That Matters</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                At EdgeNext, we're rethinking what digital access looks like in the world's fastest-growing regions. If you're driven by purpose, energized by challenge, and inspired by global impact—there's a place for you here.
              </p>
            </div>
          </div>
        </section>

        {/* Hiring Status Block */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">
                  We're not hiring right now — but we're always listening.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  There are no open roles at the moment, but if EdgeNext feels like your kind of place, we'd still love to hear from you.
                </p>
                <div className="mt-8">
                  <a
                    href="mailto:info@edgenext.com"
                    className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300"
                  >
                    <Mail className="mr-2" size={20} />
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900">Our Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Build with Empathy */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Build with Empathy</h3>
                <p className="text-gray-600 leading-relaxed">
                  We put people at the center of every technical decision—because infrastructure should serve human needs.
                </p>
              </div>

              {/* Trust by Default */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Trust by Default</h3>
                <p className="text-gray-600 leading-relaxed">
                  We give each other autonomy, assume good intent, and lead with integrity.
                </p>
              </div>

              {/* Act Local, Think Global */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Act Local, Think Global</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission lives in places others often overlook. We partner with local teams and grow together.
                </p>
              </div>

              {/* Iterate with Purpose */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-[#0EB623]" size={28} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Iterate with Purpose</h3>
                <p className="text-gray-600 leading-relaxed">
                  We improve continuously—never for hype, always for meaning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Ready to Make an Impact?
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Even though we're not actively hiring, we believe great people create great opportunities.
                If our mission resonates with you, let's start a conversation.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                info@edgenext.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;