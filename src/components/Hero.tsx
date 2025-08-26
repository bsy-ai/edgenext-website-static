import React from 'react';
import { ArrowRight, Shield, Zap, Globe, Server } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleStartFree = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value.trim()) {
      window.open('https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard', '_blank');
    } else {
      emailInput?.focus();
    }
  };

  return (
    <>
    <section className="relative w-full min-h-[500px] overflow-hidden bg-white">
      {/* Main background */}
      <div className="absolute inset-0 bg-white">
        {/* Vector 8 */}
        <div className="absolute right-[-15.84%] top-[46.72%] bottom-[-39.38%] left-[47.33%] bg-[#0EB623]/50 blur-[325px]" />
        
        {/* Vector 5 */}
        <div className="absolute right-[-39.15%] top-0 bottom-[-16.48%] left-[60.9%] bg-[#FF7B00]/20 blur-[325px]" />
        
        {/* Vector 6 */}
        <div className="absolute right-[-24.58%] top-[65.19%] bottom-[-148.4%] left-[16.15%] bg-[#B2E2FE]/20 blur-[325px]" />
        
        {/* Ellipse 14 */}
        <div className="absolute right-[17.6%] top-[86.03%] bottom-[-13.78%] left-[65.05%] bg-[#ADE5FF]/20 blur-[225px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="text-gray-900">From the Edge</span>
            <br />
            <span className="animated-gradient-text">For What's Next</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            EdgeNext delivers powerful CDN, Cloud Security, and Edge Computing solutions 
            optimized for emerging markets. Accelerate content, protect applications, and 
            deploy globally with confidence.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 mt-8">
            <form onSubmit={handleStartFree} className="homepage-hero-banner-form flex flex-col sm:flex-row gap-2 w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-xl sm:rounded-l-xl sm:rounded-r-none rounded-r-xl border border-gray-300 focus:outline-none focus:border-[#0EB623] focus:ring-1 focus:ring-[#0EB623]"
                required
              />
              <button 
                type="submit"
                className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 py-3 rounded-r-xl sm:rounded-r-xl sm:rounded-l-none rounded-l-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
              >
                Start For Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </button>
            </form>
            </div>
          </div>
      </div>
    </section>
    
    {/* Key Metrics Section */}
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4">1700+</div>
            <div className="text-lg text-white">Global Points of Presence</div>
          </div>
          
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4">80+ Tbps</div>
            <div className="text-lg text-white">Network Capacity</div>
          </div>
          
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4">200+</div>
            <div className="text-lg text-white">Partner ISPs</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};