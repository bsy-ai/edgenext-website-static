import React from 'react';
import { useState } from 'react';
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

export const Registration: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      window.open(`https://home.console.edgenext.com/#/uc/register?email=${encodeURIComponent(emailValue)}`, '_blank');
      setEmailValue('');
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
          
          <div className="flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 w-full">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex-shrink-0 px-8 py-4 sm:px-6 sm:py-4 border border-gray-300 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group w-full sm:w-auto flex items-center justify-center font-medium"
              >
                <GoogleIcon className="group-hover:scale-110 transition-transform duration-200 w-5 h-5 sm:w-6 sm:h-6" />
                <span className="ml-2 sm:hidden text-gray-700">Sign up with Google</span>
              </button>
              
              {/* 移动端分隔线 */}
              <div className="sm:hidden w-full flex items-center my-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-3 text-s text-gray-500">Or</span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              
              <div className="w-full sm:flex-grow">
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
        </div>
      </div>
    </section>
  );
};