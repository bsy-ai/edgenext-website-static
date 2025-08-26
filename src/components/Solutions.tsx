import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Solutions: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url("/global.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
          EdgeNext global infrastructure
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
          EdgeNext ensures your applications and content reach users with speed and stability—no matter where they are
        </p>
        
        <a 
          href="/network" 
          className="inline-flex items-center px-8 py-4 bg-white/90 hover:bg-white text-[#0D2B4D] font-medium rounded-lg transition-all duration-300"
        >
          Explore the globe
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};