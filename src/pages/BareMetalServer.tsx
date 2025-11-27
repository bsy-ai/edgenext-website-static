import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Server, Shield, Settings, Globe, Database, Cloud, Network, Check, Newspaper, ArrowUpRight, Cpu, Lock, Activity, Building2, ShipIcon as ChipIcon, Gauge, Video, Gamepad2 } from 'lucide-react';
import { createEmptyContactForm } from '../utils/contactFormDefaults';

const BareMetalServer: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('low-latency');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(createEmptyContactForm);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim() && formData.company.trim() && formData.country.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(createEmptyContactForm());
      }, 3000);
    } else {
      alert('Please fill in all required fields: Full Name, Work Email, Company, and Country/Region');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const features = {
    'computing-power': {
      icon: <Cpu className="text-[#0EB623]" size={24} />,
      title: "High-Performance Computing Power",
      description: "Get exclusive access to secure, stable, and high-performance physical computing resources tailored for enterprise-grade workloads.",
      benefits: [
        "Exclusive bare metal infrastructure",
        "Stable and high-compute power for mission-critical tasks",
        "Secure and isolated environment for sensitive data"
      ]
    },
    'cloud-compatibility': {
      icon: <Cloud className="text-[#0EB623]" size={24} />,
      title: "Virtual Private Cloud Compatibility",
      description: "Seamlessly integrate with cloud services while maintaining the performance benefits of dedicated hardware.",
      benefits: [
        "Hybrid cloud deployment support",
        "Multi-cloud integration capabilities",
        "Cloud-native service compatibility"
      ]
    },
    'visualization': {
      icon: <Activity className="text-[#0EB623]" size={24} />,
      title: "Visualization Analysis",
      description: "Advanced monitoring and analytics tools for deep insights into server performance and resource utilization.",
      benefits: [
        "Real-time performance monitoring",
        "Resource utilization analytics",
        "Predictive maintenance alerts"
      ]
    },
    'management': {
      icon: <Settings className="text-[#0EB623]" size={24} />,
      title: "Full-Lifecycle Management",
      description: "Comprehensive server management tools from deployment through maintenance and optimization.",
      benefits: [
        "Automated deployment workflows",
        "Centralized management console",
        "Scheduled maintenance automation"
      ]
    },
    'billing': {
      icon: <Database className="text-[#0EB623]" size={24} />,
      title: "Flexible Billing Methods",
      description: "Choose from various billing options to match your business needs and usage patterns.",
      benefits: [
        "Pay-as-you-go pricing",
        "Reserved instance discounts",
        "Custom billing cycles"
      ]
    },
    'control': {
      icon: <Lock className="text-[#0EB623]" size={24} />,
      title: "Unified Control",
      description: "Single interface for managing all aspects of your bare metal infrastructure.",
      benefits: [
        "Centralized control panel",
        "Role-based access control",
        "API-driven automation"
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(90deg, #FDFBFB 0%, #EBEDEE 100%)'
          }}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[60px] font-bold mb-4 md:mb-6 leading-[1.1]">
                <span className="text-gray-900">EdgeNext Bare Metal</span>
                <span className="animated-gradient-text block mt-2">Server</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto font-light">
                EdgeNext Bare Metal Server (BMS) is a dedicated physical server service deployed at edge nodes, ideal for customers with stringent requirements for edge deployment, data compliance, high performance, and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact_us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EdgeNext BMS Section */}
        <section className="py-24 relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">Why Choose EdgeNext BMS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                Enterprise-grade bare metal infrastructure designed for your most demanding workloads
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1: Wider Coverage */}
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <h3 className="text-xl font-medium text-white mb-4 text-left">Wider Coverage</h3>
                <p className="text-gray-300">
                  Compared to traditional centralized public clouds, EdgeNext focuses on edge nodes closer to users, with deployments in multiple countries—especially remote and compliance-sensitive areas.
                </p>
              </div>
              
              {/* Card 2: Regulatory Compliance */}
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <h3 className="text-xl font-medium text-white mb-4 text-left">Regulatory Compliance</h3>
                <p className="text-gray-300">
                  Local deployments meet data sovereignty and compliance requirements across regions.
                </p>
              </div>
              
              {/* Card 3: Cost Efficiency */}
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <h3 className="text-xl font-medium text-white mb-4 text-left">Cost Efficiency</h3>
                <p className="text-gray-300">
                  Achieve over 30% cost savings on average compared to traditional public cloud platforms.
                </p>
              </div>
              
              {/* Card 4: Expert Support */}
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <h3 className="text-xl font-medium text-white mb-4 text-left">Expert Support</h3>
                <p className="text-gray-300">
                  24/7 professional team provides real-time technical assistance and monitoring.
                </p>
              </div>
              
              {/* Card 5: Enhanced Security */}
              <div className="group bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)] md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-medium text-white mb-4 text-left">Enhanced Security</h3>
                <p className="text-gray-300">
                  Includes physical firewalls and a comprehensive BMS + Security solution for full-stack protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-900">Where EdgeNext Protection Makes the Difference</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Powerful capabilities that make EdgeNext the preferred choice for global content delivery
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/4">
                <div className="flex flex-col gap-2 overflow-x-auto">
                  <button
                    onClick={() => setActiveFeature('low-latency')}
                    className={`group w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === 'low-latency' 
                        ? 'bg-[#0EB623] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3 justify-start">
                      <Gauge size={20} className={activeFeature === 'low-latency' ? 'text-white' : 'text-[#0EB623]'} />
                      <span className="font-medium text-left">Low-Latency, High-Performance Computing</span>
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setActiveFeature('data-compliance')}
                    className={`group w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === 'data-compliance' 
                        ? 'bg-[#0EB623] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Shield size={20} className={activeFeature === 'data-compliance' ? 'text-white' : 'text-[#0EB623]'} />
                    <span className="font-medium text-left">Data Localization & Compliance</span>
                  </button>
                  
                  <button
                    onClick={() => setActiveFeature('high-concurrency')}
                    className={`group w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                      activeFeature === 'high-concurrency' 
                        ? 'bg-[#0EB623] text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <Activity size={20} className={activeFeature === 'high-concurrency' ? 'text-white' : 'text-[#0EB623]'} />
                    <span className="font-medium text-left">High-Concurrency & Elastic Expansion</span>
                  </button>
                </div>
              </div>

              <div className="lg:w-3/4">
                <div className="bg-gray-50 rounded-xl p-8">
                  {activeFeature === 'low-latency' && (
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-left">Low-Latency, High-Performance Computing</h3>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-left">Business Needs:</h4>
                        <p className="text-gray-600 text-left">When every millisecond counts — for real-time applications where latency is critical and physical compute power is a must.</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-left">Industry Examples:</h4>
                        <p className="text-gray-600 text-left">Game battle servers, high-frequency trading.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-left">Recommended Solution:</h4>
                        <p className="text-gray-600 text-left">Deploy BMS clusters at edge locations, equipped with low-latency NICs and dedicated lines to core data centers.</p>
                      </div>
                    </div>
                  )}
                  
                  {activeFeature === 'data-compliance' && (
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-left">Data Localization & Compliance</h3>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-left">Business Needs:</h4>
                        <p className="text-gray-600 text-left">For businesses handling sensitive data that must stay within borders — ensuring data sovereignty, privacy, and regulatory compliance.</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-left">Industry Examples:</h4>
                        <p className="text-gray-600 text-left">Overseas connected vehicles, government or financial data processing.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-left">Recommended Solution:</h4>
                        <p className="text-gray-600 text-left">Deploy BMS clusters in the target countries, paired with enterprise-grade storage, hardware firewalls, and ACL-based access control.</p>
                      </div>
                    </div>
                  )}
                  
                  {activeFeature === 'high-concurrency' && (
                    <div>
                      <h3 className="text-2xl font-medium mb-4 text-left">High-Concurrency & Elastic Expansion</h3>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-left">Business Needs:</h4>
                        <p className="text-gray-600 text-left">When traffic spikes are unpredictable — you need infrastructure that's ready to scale up fast and handle massive concurrent requests.</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-medium mb-2 text-left">Industry Examples:</h4>
                        <p className="text-gray-600 text-left">E-commerce flash sales, live streaming transcoding.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-left">Recommended Solution:</h4>
                        <p className="text-gray-600 text-left">Lease on-demand BMS cluster, supporting rapid scaling; Combine standard NVMe SSDs with dedicated lines and load balancing, enhancing I/O performance.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Edge-Ready Solutions Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Application Scenarios</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Edge-Ready Solutions for Every Scenario</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Purpose-Built for Real-World Demands — Across Industries, at Any Scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
                  alt="High-Density Computing"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4 text-left">High-Density Computing</h3>
                <p className="text-gray-600">
                  By pooling physical server resources, EdgeNext provides computing instances that are not limited by computing power, bandwidth, and other resources.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
                  alt="Create Secured Database"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4 text-left">Create Secured Database</h3>
                <p className="text-gray-600">
                  EdgeNext enhances database performance and security with customizable server specs, shared cloud storage, triple backups, and elastic scaling—ensuring 99.99% data availability.
                </p>
              </div>

              <div className="group bg-white rounded-2xl p-6 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                  alt="Privatized Service Deployment"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4 text-left">Privatized Service Deployment</h3>
                <p className="text-gray-600">
                  EdgeNext provides dedicated physical instances through a cloud model. Having complete control of their computing environment, enterprises can focus on improving the service experience without worrying about privacy and security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking Through Cloud Limitations Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,182,35,0.15),transparent_70%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">Breaking Through Cloud Limitations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
                Overcome critical obstacles with innovative bare metal solutions designed for modern enterprise needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">01</div>
                <h3 className="text-xl font-medium text-white mb-4 text-left">Challenge: Cloud Performance Loss</h3>
                <p className="text-gray-300 mb-4">
                  Public cloud virtualization limits CPU utilization to 40%; multi-tenancy causes latency &gt;200 ms.
                </p>
                <p className="text-[#0EB623]">
                  Solution: EdgeNext BMS with dedicated physical resources deliver 100% compute utilization, reducing latency by 50–80% to ≤20 ms.
                </p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">02</div>
                <h3 className="text-xl font-medium text-white mb-4 text-left">Challenge: Data Compliance</h3>
                <p className="text-gray-300 mb-4">
                  Overseas services face penalties for cross-border data transfer.
                </p>
                <p className="text-[#0EB623]">
                  Solution: Deploy BMS with firewall/ACL at local edge nodes to meet 100% compliance with sovereignty requirements.
                </p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">03</div>
                <h3 className="text-xl font-medium text-white mb-4 text-left">Challenge: High Latency in Underserved Regions</h3>
                <p className="text-gray-300 mb-4">
                  Middle East and Africa lack nodes; cross-border access &gt;300 ms.
                </p>
                <p className="text-[#0EB623]">
                  Solution: 1,500+ edge nodes + private lines with local BMS reduce end-to-end latency to ≤50 ms, boosting response speed by 80%.
                </p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">04</div>
                <h3 className="text-xl font-medium text-white mb-4 text-left">Challenge: High Long-Term Costs</h3>
                <p className="text-gray-300 mb-4">
                  Public cloud wastage costs &gt;$100K/month; self-build has high upfront cost.
                </p>
                <p className="text-[#0EB623]">
                  Solution: EdgeNext BMS offers Pay-as-you-go model and leasing replace self-builds, saving 30–50% yearly and cutting upfront by 80%.
                </p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">05</div>
                <h3 className="text-xl font-medium text-white mb-4 text-left">Challenge: Complex In-House Ops</h3>
                <p className="text-gray-300 mb-4">
                  Maintaining self-built data centers is labor-intensive.
                </p>
                <p className="text-[#0EB623]">
                  Solution: EdgeNext provides 24/7 managed services and remote monitoring, improving efficiency by 40% and reducing response time to minutes.
                </p>
              </div>
              
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-800 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.3)]">
                <div className="text-6xl font-bold text-[#0EB623] mb-4">06</div>
                <h3 className="text-xl font-medium text-white mb-4 text-left">Challenge: Resource Contention in High-Concurrency Scenarios</h3>
                <p className="text-gray-300 mb-4">
                  Promotions/livestreams crash due to resource contention.
                </p>
                <p className="text-[#0EB623]">
                  Solution: Physically isolated BMS with instant scaling ensures zero service interruption, boosts order processing 5×, and reduces stutter from 15% to &lt;5%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Looking for more Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Looking for more?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Explore our latest insights and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Video className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl font-medium mb-4 text-left">Media on Demand Solution for Top Global Short Video Platform</h3>
                <p className="text-gray-600 mb-6">
                  Enhanced video delivery and reduced buffering time across global short-form content platforms with &lt;1s TTFB and infrastructure capable of handling 760 billion requests/day.
                </p>
                <a href="/case-study/media-on-demand-solution-for-top-global-short-video-platform" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Gamepad2 className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl font-medium mb-4 text-left">Giant Network – CDN Gaming Solution</h3>
                <p className="text-gray-600 mb-6">
                  With EdgeNext's CDN and edge security infrastructure, Giant Network achieved significant improvements in both performance and threat prevention, reducing false alerts by 80%.
                </p>
                <a href="case-study/giant-network-cdn-gaming-solution" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>

              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2">
                <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-6">
                  <Gamepad2 className="text-[#0EB623]" size={24} />
                </div>
                <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study</div>
                <h3 className="text-xl font-medium mb-4 text-left">CDN Gaming Solution for US Top Gaming Company</h3>
                <p className="text-gray-600 mb-6">
                  By integrating EdgeNext's Large File Download Optimization, the gaming client dramatically reduced latency during high-demand periods and ensured smoother, faster downloads.
                </p>
                <a href="case-study/giant-network-cdn-gaming-solution" className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300">
                  Read the case study <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-[#0EB623] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6 text-white">
                  Ready to Transform Your Infrastructure?
                </h2>
                <p className="text-xl text-white/90 mb-8 font-light">
                  Join the leading companies leveraging EdgeNext for unparalleled bare metal performance across emerging markets.
                </p>
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#0EB623] rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6 text-left">Contact Us</h3>
                <form className="bare-metal-server-contact-form space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-white/90 mb-2 text-left">Full Name</label>
                    <input 
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 text-left">Work Email</label>
                    <input 
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 text-left">Company</label>
                    <input 
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 mb-2 text-left">Country/Region</label>
                    <input 
                      type="text"
                      placeholder="Enter your country or region"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-[#0EB623] hover:bg-opacity-90'
                    }`}
                  >
                    {isSubmitted ? '✓ Message Sent!' : 'Get in Touch'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BareMetalServer;