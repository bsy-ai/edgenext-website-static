import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Check, Globe, Shield, Zap, Server, Database, RefreshCw, FileText, Building2, CreditCard, FileCheck, Users, Layers, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChinaICPLicense: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    website: '',
    region: '',
    registeredInChina: '',
    hostingLocation: [] as string[],
    needCDN: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证所有必填字段
    const requiredFields = [
      formData.fullName.trim(),
      formData.email.trim(),
      formData.companyName.trim(),
      formData.phone.trim(),
      formData.website.trim(),
      formData.region,
      formData.registeredInChina,
      formData.needCDN
    ];
    
    const hasHostingLocation = formData.hostingLocation.length > 0;
    
    if (requiredFields.every(field => field) && hasHostingLocation) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          phone: '',
          website: '',
          region: '',
          registeredInChina: '',
          hostingLocation: [],
          needCDN: ''
        });
      }, 3000);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      hostingLocation: checked 
        ? [...prev.hostingLocation, value]
        : prev.hostingLocation.filter(item => item !== value)
    }));
  };

  const [activeTab, setActiveTab] = useState('icp-filing');

  const tabs = {
    'icp-filing': {
      title: 'ICP Filing',
      content: (
        <div>
          <p className="text-gray-600 mb-6">
            ICP Filing must follow local regulations. Each Chinese province has different rules, and the filing must be done in the same province where the business license is issued.
          </p>
          <h4 className="font-medium mb-4">Key Points</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">Local policies vary by province</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">Filing location must match business license</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">Inaccurate submission may lead to rejection</span>
            </li>
          </ul>
        </div>
      )
    },
    'document-requirements': {
      title: 'Document Requirements',
      content: (
        <div>
          <p className="text-gray-600 mb-6">
            You'll need to prepare and submit specific documents and assets to begin the ICP process.
          </p>
          <h4 className="font-medium mb-4">Key Points</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">Business License: Chinese-registered company certificate</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">ID Verification: Scans of ID for website admin and legal rep</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">Authentication Form: Stamped with company's official seal</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">ECS Instance: With public IP & 3-month subscription</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">Domain Name: Must be from Chinese registrar & real-name verified</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <span className="text-gray-600">Matching Info: Domain & business license info must align</span>
            </li>
          </ul>
        </div>
      )
    },
    'application-process': {
      title: 'Application Process',
      content: (
        <div>
          <p className="text-gray-600 mb-6">
            EdgeNext guides you through every step—from consultation to license approval.
          </p>
          <h4 className="font-medium mb-4">Key Steps</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <div>
                <span className="font-medium">1. Consultation:</span>
                <span className="text-gray-600 ml-1">We assess your business model & recommend solutions</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <div>
                <span className="font-medium">2. Preparation:</span>
                <span className="text-gray-600 ml-1">Submit docs via secure online portal</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <div>
                <span className="font-medium">3. Filing:</span>
                <span className="text-gray-600 ml-1">We work with MIIT & local authorities on your behalf</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1">
                <Check className="text-[#0EB623]" size={16} />
              </div>
              <div>
                <span className="font-medium">4. Approval:</span>
                <span className="text-gray-600 ml-1">License issued within ~20 business days</span>
              </div>
            </li>
          </ul>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-[40px] md:text-[56px] font-bold mb-6 leading-[1.1] tracking-tight">
                  <span className="animated-gradient-text">ICP License Support</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
                  Accelerate your expansion into China with full regulatory support and local expertise.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                  The Internet Content Provider (ICP) license is a regulatory requirement for hosting websites in China, issued by the Ministry of Industry and Information Technology (MIIT). EdgeNext helps you navigate every step to compliance.
                </p>
                <Link 
                  to="/contact_us" 
                  className="bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-8 py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 inline-flex items-center group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </Link>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img
                  src="/chinaicp.jpg"
                  alt="Team reviewing documents"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Enter China with an ICP License? */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  Why Enter China with an <span className="text-[#0EB623]">ICP License?</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Tap into one of the world's largest and most digitally active markets — with the right foundation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Check className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Massive Market Potential</h3>
                  <p className="text-gray-600">
                    China has over 1.4 billion people and the world's largest e-commerce ecosystem. An ICP license unlocks legal access to this booming digital economy—enabling you to reach millions of customers directly.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Faster, Smoother Experiences</h3>
                  <p className="text-gray-600">
                    With an ICP license, your website or app can be hosted inside China, dramatically reducing latency, improving speed, and providing a seamless experience for local users.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Trust & Compliance</h3>
                  <p className="text-gray-600">
                    Operating with a valid ICP license signals credibility and regulatory compliance—essential for building trust with Chinese consumers and partners in a tightly regulated environment.
                  </p>
                </div>

                <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-4">Avoid Risk and Downtime</h3>
                  <p className="text-gray-600">
                    Without an ICP license, your content may be blocked or throttled by local ISPs. This leads to unpredictable performance, legal issues, or even complete inaccessibility inside China.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Which Type of ICP License Do You Need? */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  Which <span className="text-[#0EB623]">Type</span> of ICP License Do You Need?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  To effectively tap into this market, your content needs to be hosted in China. This necessitates an Internet Content Provider (ICP) filing or "Bei-An," mandated by China's Ministry of Industry and Information Technology (MIIT).
                </p>
                <Link 
                  to="/contact_us"
                  className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4">
                    <CreditCard className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Commercial ICP License</h3>
                  <p className="text-gray-600">
                    Required for any internet-based service or site in China that involves online business activities, including but not limited to e-commerce, paid content, and membership systems.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4">
                    <FileCheck className="text-[#0EB623]" size={24} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Non-Commercial (Bei'an) ICP License</h3>
                  <p className="text-gray-600">
                    Required for websites or online services that provide publicly accessible content without direct monetization, such as company profiles, blogs, or informational portals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Need to Get an ICP License */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                What You Need to Get an ICP License?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From eligibility rules to required documents and application steps—we break it all down to help you navigate the process with clarity and speed.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 bg-gray-50 p-6">
                  <div className="space-y-4">
                    <button
                      onClick={() => setActiveTab('icp-filing')}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                        activeTab === 'icp-filing' 
                          ? 'bg-[#0EB623]/10 text-[#0EB623]' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <RefreshCw size={20} className={activeTab === 'icp-filing' ? 'text-[#0EB623]' : 'text-gray-500'} />
                      <span className="font-medium">ICP Filing</span>
                    </button>
                    
                    <button
                      onClick={() => setActiveTab('document-requirements')}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                        activeTab === 'document-requirements' 
                          ? 'bg-[#0EB623]/10 text-[#0EB623]' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <FileText size={20} className={activeTab === 'document-requirements' ? 'text-[#0EB623]' : 'text-gray-500'} />
                      <span className="font-medium">Document Requirements</span>
                    </button>
                    
                    <button
                      onClick={() => setActiveTab('application-process')}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                        activeTab === 'application-process' 
                          ? 'bg-[#0EB623]/10 text-[#0EB623]' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <Layers size={20} className={activeTab === 'application-process' ? 'text-[#0EB623]' : 'text-gray-500'} />
                      <span className="font-medium">Application Process</span>
                    </button>
                  </div>
                </div>

                <div className="md:w-3/4 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    {activeTab === 'icp-filing' && (
                      <RefreshCw className="text-[#0EB623]" size={24} />
                    )}
                    {activeTab === 'document-requirements' && (
                      <FileText className="text-[#0EB623]" size={24} />
                    )}
                    {activeTab === 'application-process' && (
                      <Layers className="text-[#0EB623]" size={24} />
                    )}
                    <h3 className="text-2xl font-medium">{tabs[activeTab].title}</h3>
                  </div>
                  
                  {tabs[activeTab].content}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Solutions - RIM Delivery */}
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium mb-2">Alternative Solutions - RIM delivery</h2>
                <p className="text-gray-600">
                  Looking to penetrate mainland China without an ICP license? EdgeNext's RIM Delivery Solution has you covered. Harness our robust server network in Hong Kong and Taiwan for efficient content delivery and high availability in China.
                </p>
              </div>
              <Link 
                to="/contact_us" 
                className="px-8 py-4 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies - Powering Real Results in China */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-4 text-[#0EB623] text-sm font-medium">Application Scenarios</div>
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Powering Real Results in China
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl">
              Whether you're launching a campaign or optimizing every millisecond of engagement, EdgeNext is your edge in China's most dynamic digital scenarios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Link to="/global-delivery-solution-for-top-photo-beauty-app-in-china" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="/GlobalDeliverySolutionforTopPhotoBeautyAppinChina.jpg"
                      alt="Global Delivery Solution"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      Global Delivery Solution for Top Photo Beauty App in China
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      EdgeNext enabled a leading photo beauty app to launch real-time campaigns and VOD playback across China and overseas...
                    </p>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read Case Study
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <Link to="/dynamic-acceleration-solution-for-top-e-commerce-in-china" className="block">
                  <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                    <img 
                      src="/DynamicAccelerationSolutionforTopEcommerceinChina.jpg"
                      alt="Dynamic Acceleration Solution"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                      Dynamic Acceleration Solution for Top E-commerce in China
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      By powering real-time text and image updates, EdgeNext helped a top e-commerce brand boost user experience and stability during major promotional events...
                    </p>
                    
                    <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                      Read Case Study
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-medium text-white mb-6">
                  Ready to Enter the Chinese Market?
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  Fill out the form and our China market experts will get back to you within 24 hours to discuss your ICP license needs and options.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-medium text-white mb-4">Our ICP License Support Includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="text-white" size={20} />
                      <span className="text-white/90">Full document preparation assistance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-white" size={20} />
                      <span className="text-white/90">Direct liaison with Chinese authorities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-white" size={20} />
                      <span className="text-white/90">Bilingual support throughout the process</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-white" size={20} />
                      <span className="text-white/90">Post-approval technical implementation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="text-white" size={20} />
                      <span className="text-white/90">Ongoing compliance monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Contact Us</h3>
                <form className="china-icp-license-form space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">Full Name</label>
                      <input 
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Email</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">Company Name</label>
                      <input 
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Phone</label>
                      <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">Website</label>
                      <input 
                        type="url"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Region</label>
                      <select 
                        value={formData.region}
                        onChange={(e) => handleInputChange('region', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                        required
                      >
                        <option value="">Select Region</option>
                        <option value="North America"className="text-black">North America</option>
                        <option value="Europe"className="text-black">Europe</option>
                        <option value="Asia Pacific"className="text-black">Asia Pacific</option>
                        <option value="Middle East"className="text-black">Middle East</option>
                        <option value="Africa"className="text-black">Africa</option>
                        <option value="Latin America"className="text-black">Latin America</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2">Do you have a company registered in China?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="registered" 
                          value="Yes"
                          checked={formData.registeredInChina === 'Yes'}
                          onChange={(e) => handleInputChange('registeredInChina', e.target.value)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="registered" 
                          value="No"
                          checked={formData.registeredInChina === 'No'}
                          onChange={(e) => handleInputChange('registeredInChina', e.target.value)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2">Where do you want to host your website?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <label className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={formData.hostingLocation.includes('Mainland China')}
                          onChange={(e) => handleCheckboxChange('Mainland China', e.target.checked)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">Mainland China</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={formData.hostingLocation.includes('Hong Kong')}
                          onChange={(e) => handleCheckboxChange('Hong Kong', e.target.checked)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">Hong Kong</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={formData.hostingLocation.includes('Taiwan')}
                          onChange={(e) => handleCheckboxChange('Taiwan', e.target.checked)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">Taiwan</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={formData.hostingLocation.includes('Global')}
                          onChange={(e) => handleCheckboxChange('Global', e.target.checked)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">Global</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2">Do you need CDN service?</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="cdn" 
                          value="Yes"
                          checked={formData.needCDN === 'Yes'}
                          onChange={(e) => handleInputChange('needCDN', e.target.value)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input 
                          type="radio" 
                          name="cdn" 
                          value="No"
                          checked={formData.needCDN === 'No'}
                          onChange={(e) => handleInputChange('needCDN', e.target.value)}
                          className="text-[#0EB623]" 
                        />
                        <span className="text-white/90">No</span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center group ${
                      isSubmitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-[#0EB623] hover:bg-opacity-90'
                    }`}
                  >
                    {isSubmitted ? (
                      '✓ Message Sent!'
                    ) : (
                      <>
                        Submit
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                      </>
                    )}
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

export default ChinaICPLicense;