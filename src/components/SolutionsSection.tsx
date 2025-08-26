import React, { useState } from 'react';
import { ArrowRight, Shield, Globe, Zap, Server, Database, RefreshCw, FileText, Lock, Network, Play, Video, ShieldCheck, Key, ShieldAlert, Rocket, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TabContentProps {
  title: string;
  description: string;
  image?: string;
  features: string[];
}

export const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('global');
  const [activeAccordion, setActiveAccordion] = useState<string>('cdn');
  
  const handleAccordionToggle = (id: string) => {
    setActiveAccordion(id);
  };
  
  // Set the first item of the tab as active when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    
    // Set the first item of the new tab as active
    switch(tab) {
      case 'global':
        setActiveAccordion('cdn');
        break;
      case 'security':
        setActiveAccordion('security');
        break;
      case 'edge':
        setActiveAccordion('cloud');
        break;
      default:
        setActiveAccordion('cdn');
    }
  };
  
  const tabContent: Record<string, TabContentProps> = {
    global: {
      title: "Global Acceleration",
      description: "Deliver content with lightning-fast speed across the globe with our advanced CDN and edge computing solutions.",
      image: "/dynamic-acceleration-2.png",
      features: [
        "1700+ global points of presence",
        "Intelligent routing algorithms",
        "Advanced caching strategies",
        "Real-time analytics and monitoring"
      ]
    },
    security: {
      title: "Cloud Security",
      description: "Protect your applications and data with our comprehensive security solutions designed for the modern web.",
      image: "ddos.png",
      features: [
        "DDoS protection",
        "Web Application Firewall",
        "Bot management",
        "API security"
      ]
    },
    edge: {
      title: "Edge Computing",
      description: "Deploy your applications closer to users with our distributed edge computing platform.",
      image: "static-acceleration.jpg",
      features: [
        "Serverless functions",
        "Edge containers",
        "Global deployment",
        "Low-latency execution"
      ]
    },
  };

  const globalAccelerationItems = {
    cdn: {
      title: "Global CDN",
      icon: <Globe size={20} className="text-[#0EB623]" />,
      description: "Global delivery powered by intelligent edge infrastructure",
      features: [
        "Region-aware routing for global content delivery",
        "Intelligent load balancing across edge PoPs",
        "Optimized for scalability and low-latency user experience"
      ],
      link: "/products/global-cdn"
    },
    dynamic: {
      title: "Dynamic Acceleration",
      icon: <Zap size={20} className="text-[#0EB623]" />,
      description: "Optimized for fast-changing content and real-time applications",
      features: [
        "Real-time content rendering powered by smart cache refresh",
        "Adaptive routing for dynamic web apps and APIs",
        "Designed for high-frequency content updates"
      ],
      link: "/dynamic-acceleration"
    },
    static: {
      title: "Static Acceleration",
      icon: <Database size={20} className="text-[#0EB623]" />,
      description: "Maximize asset efficiency with intelligent static delivery",
      features: [
        "Advanced caching for static resources",
        "Reduced origin load and faster global page loads",
        "Edge-cached assets with purge logic"
      ],
      link: "/static-acceleration"
    },
    live: {
      title: "Live Streaming",
      icon: <Play size={20} className="text-[#0EB623]" />,
      description: "Engineered for smooth, high-concurrency global streaming",
      features: [
        "Sub-second latency for live events",
        "Adaptive bitrate streaming",
        "High concurrency performance"
      ],
      link: "/live_streaming"
    }
  };

  const cloudSecurityItems = {
    security: {
      title: "Security CDN",
      icon: <ShieldCheck size={20} className="text-[#0EB623]" />,
      description: "Edge-level protection for applications and digital assets",
      features: [
        "Built-in WAF and HTTPS protection",
        "Bot mitigation and IP filtering",
        "Real-time security alerts"
      ],
      link: "security_cdn"
    },
    ddos: {
      title: "Anti-DDoS",
      icon: <ShieldAlert size={20} className="text-[#0EB623]" />,
      description: "Advanced threat defense with continuous mitigation at scale",
      features: [
        "Always-on protection against L3–L7 attacks",
        "Automated detection and mitigation",
        "Real-time reporting and threat intelligence"
      ],
      link: "/anti_ddos"
    },
    dns: {
      title: "Security DNS",
      icon: <Key size={20} className="text-[#0EB623]" />,
      description: "End-to-end DNS protection for availability and security",
      features: [
        "DNSSEC and DNS failover",
        "Threat filtering and hijack prevention",
        "Real-time monitoring and resilience"
      ],
     link: "/dns_security_service"
    }
  };

  const edgeComputingItems = {
    cloud: {
      title: "Edge Cloud Server",
      icon: <Cloud size={20} className="text-[#0EB623]" />,
      description: "Flexible cloud computing with global edge reach",
      features: [
        "Full root access and fast deployment",
        "1700+ PoPs worldwide",
        "Scalable billing (hourly/monthly)"
      ],
      link: "/products/edge-cloud-server"
    },
    bare: {
      title: "Bare Metal Server",
      icon: <Server size={20} className="text-[#0EB623]" />,
      description: "Bare metal control for performance-intensive applications",
      features: [
        "Single-tenant, high-performance compute",
        "No virtualization overhead",
        "Ideal for gaming, AI, and heavy workloads"
      ],
      link: "/bare_metal_server"
    },
    transit: {
      title: "IP Transit",
      icon: <Network size={20} className="text-[#0EB623]" />,
      description: "Carrier-grade global transit for low-latency delivery",
      features: [
        "BGP-based global connectivity",
        "Multi-path routing and redundancy",
        "Optimized traffic engineering"
      ],
      link: "/IP_Transit"
    }
  };


  const getActiveItems = () => {
    switch (activeTab) {
      case 'global':
        return globalAccelerationItems;
      case 'security':
        return cloudSecurityItems;
      case 'edge':
        return edgeComputingItems;
      default:
        return globalAccelerationItems;
    }
  };

  const getActiveItem = () => {
    const items = getActiveItems();
    return activeAccordion ? items[activeAccordion as keyof typeof items] : null;
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v16h16V2H2z' fill='%230EB623' fill-opacity='0.03'/%3E%3C/svg%3E\")",
        backgroundSize: "20px 20px"
      }}></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Explore solutions made <span className="text-[#0EB623]">for your next move</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of solutions designed to accelerate, secure, and optimize your digital presence
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white overflow-x-auto">
            <button 
              onClick={() => handleTabChange('global')}
              className={`px-6 py-4 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${activeTab === 'global' ? 'text-[#0EB623] border-b-2 border-[#0EB623]' : 'text-gray-600 hover:text-[#0EB623]'}`}
            >
              Global Acceleration
            </button>
            <button 
              onClick={() => handleTabChange('security')}
              className={`px-6 py-4 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${activeTab === 'security' ? 'text-[#0EB623] border-b-2 border-[#0EB623]' : 'text-gray-600 hover:text-[#0EB623]'}`}
            >
              Cloud Security
            </button>
            <button 
              onClick={() => handleTabChange('edge')}
              className={`px-6 py-4 font-medium text-sm transition-colors duration-200 whitespace-nowrap ${activeTab === 'edge' ? 'text-[#0EB623] border-b-2 border-[#0EB623]' : 'text-gray-600 hover:text-[#0EB623]'}`}
            >
              Edge Computing
            </button>
          </div>
          
          {/* Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Solution List */}
            <div className="lg:col-span-4 border-r border-gray-200">
              <div className="p-6 space-y-2">
                {Object.entries(getActiveItems()).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => handleAccordionToggle(key)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all duration-200 ${
                      activeAccordion === key ? 'bg-[#0EB623]/5 border border-[#0EB623]/20' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <ArrowRight 
                      size={16} 
                      className={`text-[#0EB623] transition-transform duration-200 ${
                        activeAccordion === key ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right: Content Display */}
            <div className="lg:col-span-8 p-8">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-medium mb-4">{getActiveItem()?.title}</h3>
                <p className="text-gray-600 mb-6 font-medium">{getActiveItem()?.description}</p>
                
                <div className="relative rounded-xl overflow-hidden mb-6 flex-grow">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0EB623]/10 to-transparent rounded-xl z-10"></div>
                  <img 
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-[220px] object-cover rounded-xl"
                  />
                </div>
                
                <div className="space-y-4 mb-6">
                  {getActiveItem()?.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0EB623]/10 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#0EB623]"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to={getActiveItem()?.link === "/products/global-cdn" ? "/global_cdn" : getActiveItem()?.link === "/products/dynamic-acceleration" ? "/dynamic-acceleration" : getActiveItem()?.link === "/products/edge-cloud-server" ? "/vps" : getActiveItem()?.link === "/company/global-network" ? "/network" : getActiveItem()?.link || "#"}
                  className="inline-flex items-center text-[#0EB623] font-medium hover:gap-2 transition-all duration-300"
                >
                  Learn more <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
                  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};