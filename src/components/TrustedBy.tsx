import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Zap, Monitor, Globe, Activity, Shield, Server } from 'lucide-react';

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
    { name: 'JD.com', icon: <img src="/JDlogo1.png" alt="JD.com" className="w-10 h-10 object-contain" /> },
    { icon: <img src="/JetStreamlogo.png" alt="JetStream" className="w-24 h-20 object-contain" /> },
    { icon: <img src="/safenames.webp" alt="Safenames" className="w-20 h-20 object-contain" /> },
    { icon: <img src="/neteaselogo.webp" alt="NetEase" className="w-20 h-20 object-contain" /> }
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
      </div>
    </section>
  );
};