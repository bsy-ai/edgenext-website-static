import React from 'react';
import { ArrowRight } from 'lucide-react';

// 谷歌图标SVG组件
const GoogleIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export const Hero: React.FC = () => {
  const handleStartFree = (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value.trim()) {
      window.open(`https://home.console.edgenext.com/#/uc/register?email=${encodeURIComponent(emailInput.value)}`, '_blank');
    } else {
      emailInput?.focus();
    }
  };

  const handleGoogleLogin = () => {
    // 谷歌OAuth 2.0认证URL
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth?' +
      'client_id=378428085698-fkc41f0b5n1l17hd9kast0ge2e82p01r.apps.googleusercontent.com&' +
      'redirect_uri=https%3A%2F%2Faccount.console.edgenext.com%2Fauth%2Frealms%2Fedgenext%2Fprotocol%2Fopenid-connect%2FgoogleCallback&' +
      'response_type=code&' +
      'scope=openid%20email%20profile&' +
      'access_type=online&' +
      'prompt=consent';
    
    window.open(googleAuthUrl, '_blank');
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-1 mt-8 max-w-lg mx-auto">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex-shrink-0 py-3 px-4 sm:p-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group w-full sm:w-auto flex items-center justify-center sm:justify-start font-medium"
            >
              <GoogleIcon className="group-hover:scale-110 transition-transform duration-200 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="ml-2 sm:hidden text-gray-700">Sign up with Google</span>
            </button>
            
            <div className="sm:hidden w-full flex items-center my-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-s text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="w-full sm:max-w-md flex flex-col sm:flex-row gap-2">
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
      </div>

      {/* World Cup 2026 Live Streaming Solution Announcement */}
<div className="container mx-auto px-4 relative z-10 -mt-4 md:-mt-5 pb-8">
  <div className="mx-auto max-w-7xl">
    <a
      href="/worldcup-2026-streaming-solution"
      className="group relative block overflow-hidden rounded-[22px] border border-white/70 bg-white/76 backdrop-blur-2xl shadow-[0_14px_42px_rgba(15,23,42,0.09)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#F5B849]/70 hover:shadow-[0_22px_68px_rgba(14,182,35,0.18)]"
    >
      {/* Default soft glass background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#F9FCF8] to-[#EEF8EA] transition-opacity duration-500 group-hover:opacity-0" />

      {/* Hover green-black campaign background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061108] via-[#0D2414] to-[#0EB623] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Hover gold-green glow */}
      <div className="absolute right-0 top-0 h-full w-[34%] bg-[radial-gradient(circle_at_85%_50%,rgba(245,184,73,0.24),transparent_58%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute left-0 top-0 h-full w-[5px] bg-[#0EB623] transition-all duration-500 group-hover:w-[7px] group-hover:bg-[#F5B849]" />

      {/* subtle glass line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />

      <div className="relative grid grid-cols-1 xl:grid-cols-[1fr_300px] items-center gap-5 px-5 md:px-7 py-3.5">
        {/* Copy */}
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-gray-950 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-all duration-500 group-hover:bg-[#F5B849] group-hover:text-gray-950">
              New
            </span>

            <span className="text-xs md:text-sm font-semibold text-[#0A8F1F] transition-colors duration-500 group-hover:text-[#F5B849]">
              World Cup 2026 Live Streaming Solution
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-3 lg:gap-6 items-start">
            <h2 className="text-[20px] md:text-[22px] font-semibold leading-tight text-gray-950 transition-colors duration-500 group-hover:text-white">
              Ready for World Cup 2026 Live Streaming?
            </h2>

            <p className="text-sm md:text-[15px] leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white">
              Explore how EdgeNext supports match-day traffic with low-latency playback, 4K/8K streaming, DRM, SCTE-35 ad insertion, replay, and global edge delivery.
            </p>
          </div>
        </div>

        {/* Right side: secondary CTA + workflow */}
        <div className="flex flex-col gap-2.5 xl:items-stretch">
          <span className="inline-flex items-center justify-center rounded-xl border border-[#0EB623]/30 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#0A8F1F] transition-all duration-500 group-hover:border-[#F5B849]/70 group-hover:bg-[#F5B849] group-hover:text-gray-950 group-hover:shadow-[0_12px_28px_rgba(245,184,73,0.28)] whitespace-nowrap">
            Explore the Solution
            <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" size={17} />
          </span>

          <div className="hidden md:flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white/75 px-3.5 py-2 shadow-sm transition-all duration-500 group-hover:border-white/25 group-hover:bg-gray-950/35 group-hover:backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[#0EB623] transition-all duration-500 group-hover:bg-[#F5B849] group-hover:shadow-[0_0_14px_rgba(245,184,73,0.75)]" />

            <span className="text-xs font-medium text-gray-700 transition-colors duration-500 group-hover:text-white whitespace-nowrap">
              Live Signal
            </span>

            <ArrowRight className="text-[#0EB623] transition-colors duration-500 group-hover:text-[#F5B849]" size={14} />

            <span className="text-xs font-medium text-gray-700 transition-colors duration-500 group-hover:text-white whitespace-nowrap">
              Media Recode
            </span>

            <ArrowRight className="text-[#0EB623] transition-colors duration-500 group-hover:text-[#F5B849]" size={14} />

            <span className="text-xs font-medium text-gray-700 transition-colors duration-500 group-hover:text-white whitespace-nowrap">
              Media Delivery
            </span>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>
    </section>
    
    {/* Key Metrics Section */}
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4">1500+</div>
            <div className="text-lg text-white">Global Points of Presence</div>
          </div>
          
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4">90+ Tbps</div>
            <div className="text-lg text-white">Network Capacity</div>
          </div>
          
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#0EB623] mb-4">170+</div>
            <div className="text-lg text-white">Partner ISPs</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};