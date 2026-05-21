import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

export const TrustedBy: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useRef(useAnimationControls());

  // Client logos with icons instead of images
  const clientLogos = [
    { icon: <img src="/sinalogo.png" alt="Sina" className="w-20 h-20 object-contain" /> },
    { name: 'Microsoft', icon: <img src="/Microsoftlogo.png" alt="Microsoft" className="w-10 h-10 object-contain" /> },
    { name: 'Giant Network', icon: <img src="/giantlogo.png" alt="Giant Network" className="w-20 h-20 object-contain" /> },
    { name: 'GRAFF', icon: <img src="/Graff.png" alt="GRAFF" className="w-28 h-12 object-contain" /> },
    { icon: <img src="/IQiyilogo.png" alt="iQIYI" className="w-20 h-20 object-contain" /> },
    { name: 'Axiata', icon: <img src="/axiatago.png" alt="Axiata" className="w-20 h-20 object-contain" /> }
  ]; 

  // Second row logos - different from first row
  const secondRowLogos = [
    { icon: <img src="/chatlablogo.png" alt="ChatLab" className="w-20 h-20 object-contain" /> },
    { icon: <img src="/JetStreamlogo.png" alt="JetStream" className="w-24 h-20 object-contain" /> },
    { icon: <img src="/safenames.webp" alt="Safenames" className="w-20 h-20 object-contain" /> },
    { icon: <img src="/neteaselogo.webp" alt="NetEase" className="w-20 h-20 object-contain" /> },
   
  ];

  const testimonials = [
    {
      label: 'Streaming Platform',
      title: 'Built for Large-Scale Streaming',
      quote:
        'EdgeNext helps us deliver low-latency streaming experiences while improving cost efficiency and elasticity at global scale.',
      person: 'CEO',
      company: 'Global Streaming Platform'
    },
    {
      label: 'Gaming Platform',
      title: 'Performance That Supports Growth',
      quote:
        "EdgeNext's CDN performance has become important to our global reach, player experience, and customer satisfaction.",
      person: 'CTO',
      company: 'Digital Game Distribution Platform'
    },
    {
      label: 'SaaS Provider',
      title: 'Flexible Cloud Delivery for What Comes Next',
      quote:
        "EdgeNext's cloud computing and bare metal capabilities give us the flexibility and performance needed to move faster in a competitive market.",
      person: 'CEO',
      company: 'Global SaaS Provider'
    }
  ];

  // Double the logos array for seamless infinite scroll
  const doubledLogos = [...clientLogos, ...clientLogos];
  const doubledSecondRowLogos = [...secondRowLogos, ...secondRowLogos];

  useEffect(() => {
    const startAnimation = async () => {
      if (isHovered) return;
      
      await controls.current.start({
        x: [0, -50 * clientLogos.length],
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity
        }
      });
    };

    startAnimation();
  }, [isHovered, clientLogos.length]);

  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.03),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join the companies accelerating their digital presence with EdgeNext
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={containerRef}
            className="relative overflow-hidden h-48 flex flex-col justify-center"
            onMouseEnter={() => {
              setIsHovered(true);
              controls.current.stop();
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              controls.current.start({
                x: [controls.current.x?.get() || 0, -50 * clientLogos.length],
                transition: {
                  duration: 15,
                  ease: "linear",
                  repeat: Infinity
                }
              });
            }}
          >
            {/* First row - scrolling left to right */}
            <motion.div 
              className="flex items-center gap-24 px-4 mb-4"
              animate={controls.current}
            >
              {doubledLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}-row1`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 group"
                >
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    {logo.icon}
                    {logo.name !== 'GRAFF' && logo.name !== 'Axiata' && <span className="text-xl font-medium text-gray-500 group-hover:text-gray-800 whitespace-nowrap">{logo.name}</span>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Second row - scrolling right to left */}
            <motion.div 
              className="flex items-center gap-24 px-4"
              animate={{
                x: isHovered ? undefined : [-50 * secondRowLogos.length, 0],
              }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity
              }}
            >
              {doubledSecondRowLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.name}-${index}-row2`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="flex-shrink-0 group"
                >
                  <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    {logo.icon}
                    {logo.name !== 'GRAFF' && logo.name !== 'Axiata' && <span className="text-xl font-medium text-gray-500 group-hover:text-gray-800 whitespace-nowrap">{logo.name}</span>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <div className="text-center mb-9">
            <div className="mb-4 inline-flex items-center rounded-full border border-[#0EB623]/20 bg-[#0EB623]/10 px-4 py-2 text-sm font-medium text-[#0EB623]">
              Customer Feedback
            </div>

            <h3 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
              Proven in High-Demand Digital Environments
            </h3>

            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Teams rely on EdgeNext to improve speed, scale, and reliability across streaming, gaming, SaaS, and cloud delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {testimonials.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0EB623]/35 hover:shadow-[0_20px_60px_rgba(15,23,42,0.10)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0EB623] via-[#8CEB54] to-[#F5B849] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#0EB623]/0 blur-3xl transition-all duration-500 group-hover:bg-[#0EB623]/10" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-[#0EB623]">
                        {item.label}
                      </p>

                      <h4 className="text-xl md:text-2xl font-medium leading-tight text-gray-900">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#0EB623]/10 text-3xl leading-none text-[#0EB623]/35 transition-all duration-500 group-hover:bg-[#0EB623] group-hover:text-white">
                      "
                    </div>
                  </div>

                  <p className="mb-7 text-base leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-800">
                    &quot;{item.quote}&quot;
                  </p>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="font-medium text-gray-900">{item.person}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
