import React from 'react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Registration: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      window.open('https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard', '_blank');
      setEmailValue('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(14,182,35,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(14,182,35,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10 backdrop-blur-md bg-white/80 rounded-3xl p-12 shadow-lg border border-white/50">
          <h2 className="text-4xl font-medium mb-4 relative">
            Get started in <span className="text-[#0EB623]">just 5 minutes</span>. Try <span className="text-[#0EB623]">EdgeNext</span> today.
            <div className="absolute -inset-x-6 -inset-y-4 bg-[#0EB623]/5 -z-10 rounded-full blur-lg"></div>
          </h2>
          <p className="text-gray-600 mb-10">
            Sign up in minutes to access EdgeNext's self-serve platform—with 1 month free across all core products.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <form onSubmit={handleSubmit} className="registration-section-form flex flex-col sm:flex-row gap-2 w-full">
              <input 
                type="email" 
                placeholder="Enter your e-mail address"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="flex-grow px-6 py-4 rounded-l-full border-0 focus:outline-none focus:ring-2 focus:ring-[#0EB623]/30"
                required
              />
              <button 
                type="submit"
                className="bg-[#0EB623] text-white font-medium px-8 py-4 rounded-r-full hover:bg-[#0CA61F] transition-all duration-300 flex items-center group"
              >
                Try for free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};