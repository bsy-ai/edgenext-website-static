import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-[#0EB623] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6 whitespace-nowrap text-balance">
            Ready to Accelerate Your Global Content Delivery?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Get started in just 5 minutes with our self-serve platform. Try free for one month with no commitment.
          </p>

          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 group"
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
  );
};
