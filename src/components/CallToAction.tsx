import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    country: ''
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      window.open('https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard', '_blank');
      setEmailValue('');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name.trim() && contactForm.email.trim() && contactForm.company.trim() && contactForm.country.trim()) {
      setContactSubmitted(true);
      setTimeout(() => setContactSubmitted(false), 3000);
      setContactForm({ name: '', email: '', company: '', country: '' });
    } else {
      alert('Please fill in all required fields: Full Name, Work Email, Company, and Country/Region');
    }
  };

  return (
    <section className="py-24 bg-[#0EB623] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-medium mb-6">
              Ready to Accelerate Your Global Content Delivery?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Get started in just 5 minutes with our self-serve platform. Try free for one month with no commitment.
            </p>
            <div className="max-w-md">
              <form onSubmit={handleEmailSubmit}>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    className="flex-grow px-4 py-3 rounded-l-xl sm:rounded-l-xl sm:rounded-r-none rounded-r-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/30 text-gray-900"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-white text-[#0EB623] font-medium px-6 py-3 rounded-r-xl sm:rounded-r-xl sm:rounded-l-none rounded-l-xl hover:bg-white/90 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                  >
                    Try for Free
                    <ArrowRight className="ml-2" size={18} />
                  </button>
                </div>
              </form>
              <div className="mt-4 text-sm text-white/70">
                {emailSubmitted ? (
                  <span className="text-white font-medium">✓ Thank you! We'll be in touch soon.</span>
                ) : (
                  <a 
                    href={`https://home.console.edgenext.com/#/uc/register?email=${encodeURIComponent(emailValue || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors duration-200 underline"
                  >
                    Sign up to start your free trial
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-medium mb-6">Contact Us</h3>
            <form className="homepage-cta-form" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-white/90 mb-2">Full Name</label>
                <input 
                  type="text"
                  placeholder="Enter your name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  required
                />
              </div>
              <div>
                <label className="block text-white/90 mb-2">Work Email</label>
                <input 
                  type="email"
                  placeholder="you@company.com"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  required
                />
              </div>
              <div>
                <label className="block text-white/90 mb-2">Company</label>
                <input 
                  type="text"
                  placeholder="Your company name"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  required
                />
              </div>
              <div>
                <label className="block text-white/90 mb-2">Country/Region</label>
                <input 
                  type="text"
                  placeholder="Enter your country or region"
                  value={contactForm.country}
                  onChange={(e) => setContactForm({...contactForm, country: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                  required
                />
              </div>
              <div className="pt-4">
              <button 
                type="submit" 
                className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 ${
                  contactSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white text-[#0EB623] hover:bg-opacity-90'
                }`}
              >
                {contactSubmitted ? '✓ Message Sent!' : 'Get in Touch'}
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};