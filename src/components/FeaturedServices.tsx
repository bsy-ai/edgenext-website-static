import React from 'react';
import { Play, Download, Gamepad2, Link, Radio, Car, BrainCircuit, GraduationCap, ArrowRight, ShoppingCart, Smartphone, Building2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  isCustom?: boolean;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, icon, link, isCustom }) => {
  return (
    <div className={`group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 ${isCustom ? 'border-2 border-dashed border-[#0EB623]/30' : 'border border-gray-100'}`}>
      <div className="w-16 h-16 bg-gradient-to-br from-[#0EB623]/20 to-[#0EB623]/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-4 group-hover:text-[#0EB623] transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6 h-24">{description}</p>
      {link ? (
        <RouterLink
          to={link}
          className="text-[#0EB623] inline-flex items-center group-hover:gap-2 transition-all duration-300"
        >
          Learn More <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" size={16} />
        </RouterLink>
      ) : (
        <a
          href="#"
          className="text-[#0EB623] inline-flex items-center group-hover:gap-2 transition-all duration-300"
        >
          {isCustom ? 'Contact Us' : 'Learn More'} <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-200" size={16} />
        </a>
      )}
    </div>
  );
};

export const FeaturedServices: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="text-[#0EB623] text-sm font-medium mb-4">INDUSTRY SOLUTIONS</div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Edge-Ready Solutions for <span className="text-[#0EB623]">Every Scenario</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored infrastructure for real-world use cases across every industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UseCaseCard
            title="Gaming"
            description="Ultra-low latency infrastructure for seamless gameplay, fast downloads, and reliable multiplayer experiences."
            icon={<Gamepad2 className="text-[#0EB623]" size={32} />}
            link="/gaming"
          />

          <UseCaseCard
            title="E-Commerce"
            description="Accelerate product pages, secure transactions, and deliver seamless shopping experiences worldwide."
            icon={<ShoppingCart className="text-[#0EB623]" size={32} />}
            link="/e-commerce"
          />

          <UseCaseCard
            title="E-Learning"
            description="Enable seamless video streaming, interactive content delivery, and global classroom experiences."
            icon={<GraduationCap className="text-[#0EB623]" size={32} />}
            link="/e-learning"
          />

          <UseCaseCard
            title="Telecommunications"
            description="Enhance network performance with carrier-grade solutions designed for telecom providers."
            icon={<Radio className="text-[#0EB623]" size={32} />}
            link="/telcos-isp-iigs"
          />

          <UseCaseCard
            title="Media & Entertainment"
            description="Deliver high-quality streaming content, live events, and digital assets to global audiences."
            icon={<Play className="text-[#0EB623]" size={32} />}
            link="/solutions/media-entertainment"
          />

          <UseCaseCard
            title="Custom Solutions"
            description="Need something specific? Our team can build tailored solutions for your unique business requirements."
            icon={<Building2 className="text-[#0EB623]" size={32} />}
            link="/contact-us"
          />
        </div>
      </div>
    </section>
  );
};