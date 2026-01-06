import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Shield, Server, ShoppingCart, BookOpen, Smartphone, Gamepad2, Film, Building2, Boxes, Globe, Zap, Video, Lock, Database, Cloud, ServerIcon, Network, FileText, Code, Newspaper, FileQuestion, Rocket, Calculator, MessageSquare, HelpCircle, Users, Briefcase, Mail, Users2, Award, Target, HeartHandshake, ArrowRight, Scale, Link as LinkIcon, RefreshCw, BrainCircuit } from 'lucide-react';

interface DropdownProps {
  type: string;
  onClose: () => void;
}

interface MenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  to?: string;
}

const MenuItem: React.FC<MenuItem> = ({ icon, title, description, to }) => {
  const content = (
    <>
      <span className="text-gray-400 group-hover:text-[#0EB623] mt-1 w-5 text-center">
        {icon}
      </span>
      <div className="ml-3">
        <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#0EB623]">{title}</h4>
        <p className="mt-0.5 text-sm text-gray-500 group-hover:text-gray-600">{description}</p>
      </div>
    </>
  );

  return to ? (
    <Link to={to} className="group flex items-start -mx-2 px-2 py-2 rounded-lg hover:bg-gray-50/80">
      {content}
    </Link>
  ) : (
    <a href="#" className="group flex items-start -mx-2 px-2 py-2 rounded-lg hover:bg-gray-50/80">
      {content}
    </a>
  );
};

const Section: React.FC<{ title: string; icon?: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
  <div>
    <h3 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
      {icon && <span className="text-[#0EB623] mr-2">{icon}</span>}
      {title}
    </h3>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const Banner: React.FC<{ type: string }> = ({ type }) => {
  const bannerContent = {
    products: {
      title: "Edge Cloud Server Special Offer",
      description: "Up to 50% off monthly and additional 10% off annually",
      buttonText: "Learn More",
      link: "/ecs"
    },
    solutions: {
      title: "Need Expert Guidance?",
      description: "Our specialists are here to help you find the perfect solution",
      buttonText: "Get Started",
      link: "/contact_us"
    },
    resources: {
      title: "Discover Success Stories",
      description: "See how our customers achieve their goals",
      buttonText: "View Cases",
      link: "/case_study"
    },
    pricing: {
      title: "Talk to Sales",
      description: "Get personalized pricing and product recommendations",
      buttonText: "Contact Us",
      link: "/contact_us"
    },
    company: {
      title: "Need Expert Guidance?",
      description: "Get in touch with our team for personalized solutions",
      buttonText: "Contact Us",
      link: "/contact_us"
    }
  };

  const content = bannerContent[type as keyof typeof bannerContent];

  return (
    <div className="mt-6 pt-6 border-t border-gray-100">
      <div className="bg-gradient-to-r from-[#0EB623]/5 to-[#0EB623]/10 rounded-xl p-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{content.title}</h3>
          <p className="text-gray-600">{content.description}</p>
        </div>
        <a href={content.link} className="bg-[#0EB623] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0EA620] transition-colors flex items-center gap-2 whitespace-nowrap ml-6">
          {content.buttonText}
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({ type, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const renderProducts = () => (
    <div className="grid grid-cols-4 gap-6">
      <Section title="Content Delivery" icon={<Monitor size={20} />}>
        <MenuItem 
          icon={<Zap size={18} />}
          title="Dynamic Acceleration"
          description="Real-time boost for dynamic content"
          to="/dynamic-acceleration"
        />
        <MenuItem 
          icon={<Network size={18} />}
          title="Static Acceleration"
          description="Optimized delivery for static assets"
          to="/static-acceleration"
        />
        <MenuItem 
          icon={<Video size={18} />}
          title="Live Streaming"
          description="Low-latency live video delivery"
          to="/live_streaming"
        />
      </Section>
      
      <Section title="Security" icon={<Shield size={20} />}>
        <MenuItem 
          icon={<Lock size={18} />}
          title="Security CDN"
          description="Protected content delivery network"
          to="/security_cdn"
        />
        <MenuItem 
          icon={<Shield size={18} />}
          title="Anti-DDoS"
          description="Scalable, always-on DDoS defense"
          to="/anti_ddos"
        />
        <MenuItem 
          icon={<Database size={18} />}
          title="Security DNS"
          description="Secure DNS infrastructure"
         to="/dns_security_service"
        />
      </Section>
      
      <Section title="Computing & Network" icon={<Server size={20} />}>
        <MenuItem 
          icon={<Cloud size={18} />}
          title="Edge Cloud Server"
          description="High-speed global cloud hosting"
          to="/ecs"
        />
        <MenuItem 
          icon={<ServerIcon size={18} />}
          title="Bare Metal Server"
          description="Dedicated high-performance servers"
          to="/bare_metal_server"
        />
        <MenuItem 
          icon={<Network size={18} />}
          title="IP Transit"
          description="Global network connectivity"
          to="/IP_Transit"
        />
      </Section>
      
      <Section title="AI-Powered Solutions" icon={<BrainCircuit size={20} />}>
        <MenuItem 
          icon={<BrainCircuit size={18} />}
          title="EdgeNext AI Solutions"
          description="Personal Intelligent Assistant × Enterprise Full-Stack Empowerment"
          to="/ai-solutions"
        />
      </Section>
    </div>
  );

  const renderSolutions = () => (
    <div className="grid grid-cols-2 gap-8">
      <Section title="By Industry" icon={<Building2 size={20} />}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <MenuItem 
            icon={<ShoppingCart size={18} />}
            title="E-Commerce"
            description="For online stores or services"
            to="/e_commerce"
          />
          <MenuItem 
            icon={<BookOpen size={18} />}
            title="E-Learning"
            description="For academic institutions"
            to="/e_learning"
          />
          <MenuItem 
            icon={<Smartphone size={18} />}
            title="Telecommunication"
            description="For information and communication enterprises"
            to="/telcos-isp-iigs"
          />
          <MenuItem 
            icon={<Gamepad2 size={18} />}
            title="Gaming"
            description="For gaming services or platforms"
            to="/gaming"
          />
          <MenuItem 
            icon={<Film size={18} />}
            title="Media & Entertainment"
            description="For media services"
            to="/media_and_entertainment"
          />
        </div>
      </Section>
      
      <Section title="By Need" icon={<Target size={20} />}>
        <MenuItem 
          icon={<Globe size={18} />}
          title="Global CDN"
          description="Accelerated global delivery with regional routing"
          to="/global_cdn"
        />
        <MenuItem 
          icon={<Globe size={18} />}
          title="MENA CDN"
          description="Optimized delivery for Middle East & North Africa"
          to="/mea_cdn"
        />
        <MenuItem 
          icon={<Globe size={18} />}
          title="China CDN"
          description="Optimized delivery for mainland China"
          to="/china_cdn"
        />
        <MenuItem 
          icon={<Globe size={18} />}
          title="Southeast Asia CDN"
          description="Low-latency coverage across Southeast Asia"
          to="/southeast_asia_cdn"
        />
      </Section>
    </div>
  );

  const renderResources = () => (
    <div className="grid grid-cols-2 gap-6">
      <Section title="Documentation" icon={<FileText size={20} />}>
        <MenuItem 
          icon={<FileText size={18} />}
          title="API Reference"
          description="Complete API documentation"
          to="https://home.console.edgenext.com/#/doc/dashboard"
        />
        <MenuItem 
          icon={<FileQuestion size={18} />}
          title="China ICP License"
          description="ICP filing and licensing guide"
          to="/icp-license"
        />
      </Section>
      
      <Section title="Resources" icon={<Newspaper size={20} />}>
        <MenuItem 
          icon={<Newspaper size={18} />}
          title="Blog"
          description="Latest articles"
          to="/blog"
        />
        <MenuItem 
          icon={<Users size={18} />}
          title="Case Studies"
          description="Customer success stories"
          to="/case_study"
        />
        <MenuItem 
          icon={<Newspaper size={18} />}
          title="News"
          description="Latest news and industry updates"
          to="/newsroom"
        />
      </Section>
    </div>
  );

  const renderPricing = () => (
    <div className="grid grid-cols-2 gap-6">
      <Section title="Plans" icon={<Rocket size={20} />}>
        <MenuItem 
          icon={<Rocket size={18} />}
          title="Starter"
          description="For small projects and startups"
        />
        <MenuItem 
          icon={<Briefcase size={18} />}
          title="Business"
          description="For growing businesses"
        />
        <MenuItem 
          icon={<Building2 size={18} />}
          title="Enterprise"
          description="Custom solutions for large organizations"
        />
      </Section>
      
      <Section title="Resources" icon={<Calculator size={20} />}>
        <MenuItem 
          icon={<Calculator size={18} />}
          title="Cost Calculator"
          description="Estimate your monthly costs"
        />
        <MenuItem 
          icon={<MessageSquare size={18} />}
          title="Talk to Sales"
          description="Get a custom quote"
        />
        <MenuItem 
          icon={<HelpCircle size={18} />}
          title="FAQ"
          description="Answers to common billing questions"
        />
      </Section>
    </div>
  );

  const renderCompany = () => (
    <div className="grid grid-cols-2 gap-6">
      <Section title="About Us" icon={<Users2 size={20} />}>
        <MenuItem 
          icon={<Users2 size={18} />}
          title="Company"
          description="Our story and mission"
          to="/about-us"
        />
        <MenuItem 
          icon={<Mail size={18} />}
          title="Contact Us"
          description="Get in touch with our team"
          to="/contact_us"
        />
        <MenuItem 
          icon={<Globe size={18} />}
          title="Global Network"
          description="Extensive worldwide infrastructure"
          to="/network"
        />
      </Section>
      
      <Section title="Trust" icon={<Shield size={20} />}>
        <MenuItem 
          icon={<Scale size={18} />}
          title="Legal"
          description="Legal resources and guidelines"
          to="/legal"
        />
        <MenuItem 
          icon={<HeartHandshake size={18} />}
          title="Partners"
          description="Strategic alliances and collaborations"
          to="/partners"
        />
        <MenuItem 
          icon={<Briefcase size={18} />}
          title="Careers"
          description="Join our growing team"
          to="/career"
        />
      </Section>
    </div>
  );

  const getContent = () => {
    switch (type) {
      case 'products':
        return renderProducts();
      case 'solutions':
        return renderSolutions();
      case 'resources':
        return renderResources();
      case 'pricing':
        return renderPricing();
      case 'company':
        return renderCompany();
      default:
        return null;
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className="fixed left-1/2 -translate-x-1/2 top-[6.5rem] z-50 w-full max-w-[1200px] px-4"
    >
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100/50 p-6 animate-fadeIn">
        {getContent()}
        <Banner type={type} />
      </div>
    </div>
  );
};