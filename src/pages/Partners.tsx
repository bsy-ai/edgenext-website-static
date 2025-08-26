import React from 'react';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Zap, Globe, Shield, Headphones, Link, Server, RefreshCw } from 'lucide-react';

const Partners: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    industry: '',
    companyWebsite: '',
    countryRegion: '',
    companySize: '',
    partnerModel: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证必填字段
    const requiredFields = [
      formData.firstName.trim(),
      formData.lastName.trim(),
      formData.companyName.trim(),
      formData.email.trim(),
      formData.industry,
      formData.companyWebsite.trim(),
      formData.countryRegion.trim(),
      formData.companySize,
      formData.partnerModel
    ];
    
    if (requiredFields.every(field => field)) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          email: '',
          industry: '',
          companyWebsite: '',
          countryRegion: '',
          companySize: '',
          partnerModel: ''
        });
      }, 3000);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(14,182,35,0.05),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[40px] md:text-[56px] font-bold mb-6 leading-[1.1] tracking-tight">
                <span className="text-gray-900">The Path to Success</span>
                <span className="animated-gradient-text block mt-2">with EdgeNext</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Partner with EdgeNext to accelerate innovation, expand market reach, and build future-ready solutions—together, with trust and support at every step.
              </p>
              <a 
                href="#partner-form" 
                className="inline-flex items-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300"
              >
                Become a Partner
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* What Makes EdgeNext the Right Partner? Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                What Makes EdgeNext the <span className="text-[#0EB623]">Right Partner?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We set ambitious yet achievable benchmarks, pushing boundaries while ensuring real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Maximize Revenue, Minimize Cost */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/telco1.png"
                  alt="Maximize Revenue"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Maximize Revenue, Minimize Cost</h3>
                <p className="text-gray-600">
                  Unlock new revenue streams and reduce total cost of ownership with EdgeNext's high-performance CDN and edge security services. Enhance your offerings and stay competitive in fast-moving markets.
                </p>
              </div>

              {/* Drive Global Growth */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/telco2.png"
                  alt="Drive Global Growth"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Drive Global Growth</h3>
                <p className="text-gray-600">
                  From Southeast Asia to the Middle East and beyond, EdgeNext helps you serve customers in the world's fastest-growing—and most complex—markets. Our infrastructure and local know-how give your business a head start.
                </p>
              </div>

              {/* Tiered Discounting */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/discount.jpg"
                  alt="Tiered Discounting"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Tiered Discounting</h3>
                <p className="text-gray-600">
                  Enjoy tiered discounts that grow with you. The stronger our partnership, the greater your benefits—designed to reward your long-term success.
                </p>
              </div>

              {/* Seamless Integration, Ongoing Support */}
              <div className="group bg-white rounded-2xl p-8 hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <img 
                  src="/support.jpg"
                  alt="Seamless Integration"
                  className="w-full h-48 object-cover rounded-xl mb-6 transform group-hover:scale-[1.02] transition-all duration-300"
                />
                <h3 className="text-xl font-medium mb-4">Seamless Integration, Ongoing Support</h3>
                <p className="text-gray-600">
                  Our technical team works closely with you every step of the way—from initial integration to continuous optimization—so you can focus on growth, not complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Ways to Partner Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Partner Engagement Models</div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Three Ways to Partner, One Goal: <span className="text-[#0EB623]">Growth</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Whether you're reselling, integrating, or referring—our partner programs are built to help you grow with EdgeNext's global infrastructure and local expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Channel & Alliance Partner */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Link className="text-[#0EB623]" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">Channel & Alliance Partner</h3>
                <p className="text-gray-600 text-center">
                  Resell EdgeNext services with full enablement support—ideal for MSPs, VARs, and cloud providers.
                </p>
              </div>

              {/* Technology Partner */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Server className="text-[#0EB623]" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">Technology Partner</h3>
                <p className="text-gray-600 text-center">
                  Collaborate through API and platform integration to co-develop advanced solutions.
                </p>
              </div>

              {/* Referral Partner */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#0EB623]/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <RefreshCw className="text-[#0EB623]" size={32} />
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">Referral Partner</h3>
                <p className="text-gray-600 text-center">
                  Strengthen your client relationships by recommending EdgeNext. We handle delivery, you earn long-term rewards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Models Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-sm text-[#0EB623] font-medium mb-4">Models Details</div>
            <h2 className="text-4xl md:text-5xl font-medium mb-12">
              Partner Models: Find the <span className="text-[#0EB623]">Right Fit</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5">
                <p className="text-xl text-gray-600 mb-8">
                  Every partner plays a unique role. Choose the engagement model that best fits your strengths—whether you're reselling, integrating, or referring. Together, we create value.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-medium mb-6">Channel & Alliance Partner</h3>
                  <p className="text-gray-600 mb-6">Best for:</p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Cloud service providers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Managed service providers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">Value-added resellers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">CDN providers</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-6">Technology Partner</h3>
                    <p className="text-gray-600 mb-6">Best for:</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Streaming/OTT platforms</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Content distribution systems</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Cloud service providers</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">IT consultancy</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">IT outsourcing agencies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-medium mb-6">Referral Partner</h3>
                    <p className="text-gray-600 mb-6">Best for:</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Business consultancy</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Marketing agencies</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Streaming/OTT platforms</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#0EB623]/10 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#0EB623]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">Industry organizations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growing Together Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-sm text-[#0EB623] font-medium mb-4">Milestones</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium mb-6">
                  Growing Together with <br />Our Global Partner
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Our journey with partners is built on scale, trust, and long-term value—here's what we've achieved, together:
                </p>

                {/* Responsive stats grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center sm:text-left">
                    <div className="text-5xl sm:text-6xl font-bold text-[#0EB623] mb-2">1700+</div>
                    <div className="text-gray-600">Global Points of Presence</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-5xl sm:text-6xl font-bold text-[#0EB623] mb-2">200+</div>
                    <div className="text-gray-600">ISP & IIG Partners Worldwide</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-5xl sm:text-6xl font-bold text-[#0EB623] mb-2">10+</div>
                    <div className="text-gray-600">Years of Industry Experience</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="/telco1.png"
                    alt="VR Technology"
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-12 -left-12 w-[250px] h-[200px] rounded-2xl overflow-hidden hidden md:block">
                  <img 
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="partner-form" className="py-24 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                  Ready to grow—together?
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Join EdgeNext to unlock new markets, grow your revenue, and empower your customers with edge-first technology.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-medium text-white mb-6">Become a Partner</h3>
                <form className="partners-form space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">First name *</label>
                      <input 
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Last name *</label>
                      <input 
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">Company name *</label>
                      <input 
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      />
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Email *</label>
                      <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/90 mb-2">Industry *</label>
                      <select 
                        value={formData.industry}
                        onChange={(e) => handleInputChange('industry', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white"
                      >
                        <option value="" className="text-gray-900">Select Industry</option>
                        <option value="technology" className="text-gray-900">Technology</option>
                        <option value="telecommunications" className="text-gray-900">Telecommunications</option>
                        <option value="media-entertainment" className="text-gray-900">Media & Entertainment</option>
                        <option value="ecommerce" className="text-gray-900">E-commerce</option>
                        <option value="gaming" className="text-gray-900">Gaming</option>
                        <option value="education" className="text-gray-900">Education</option>
                        <option value="healthcare" className="text-gray-900">Healthcare</option>
                        <option value="finance" className="text-gray-900">Finance</option>
                        <option value="other" className="text-gray-900">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/90 mb-2">Company Website *</label>
                      <input 
                        type="url"
                        value={formData.companyWebsite}
                        onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2">Country/Region *</label>
                    <input 
                      type="text"
                      value={formData.countryRegion}
                      onChange={(e) => handleInputChange('countryRegion', e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
                    />
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2">Company Size *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="companySize" 
                          value="0-10"
                          checked={formData.companySize === '0-10'}
                          onChange={(e) => handleInputChange('companySize', e.target.value)}
                          className="text-[#0EB623] focus:ring-[#0EB623]"
                          required
                        />
                        <span className="text-white/90">0-10</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="companySize" 
                          value="10-100"
                          checked={formData.companySize === '10-100'}
                          onChange={(e) => handleInputChange('companySize', e.target.value)}
                          className="text-[#0EB623] focus:ring-[#0EB623]"
                        />
                        <span className="text-white/90">10-100</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="companySize" 
                          value="100-500"
                          checked={formData.companySize === '100-500'}
                          onChange={(e) => handleInputChange('companySize', e.target.value)}
                          className="text-[#0EB623] focus:ring-[#0EB623]"
                        />
                        <span className="text-white/90">100-500</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="companySize" 
                          value="500+"
                          checked={formData.companySize === '500+'}
                          onChange={(e) => handleInputChange('companySize', e.target.value)}
                          className="text-[#0EB623] focus:ring-[#0EB623]"
                        />
                        <span className="text-white/90">500+</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/90 mb-2">Prefer Partner Model *</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="partnerModel" 
                          value="channel-alliance"
                          checked={formData.partnerModel === 'channel-alliance'}
                          onChange={(e) => handleInputChange('partnerModel', e.target.value)}
                          className="text-[#0EB623] focus:ring-[#0EB623]"
                          required
                        />
                        <span className="text-white/90">Channel & Alliance</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="partnerModel" 
                          value="technology"
                          checked={formData.partnerModel === 'technology'}
                          onChange={(e) => handleInputChange('partnerModel', e.target.value)}
                          className="text-[#0EB623] focus:ring-[#0EB623]"
                        />
                        <span className="text-white/90">Technology</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="partnerModel" 
                          value="referral"
                          checked={formData.partnerModel === 'referral'}
                          onChange={(e) => handleInputChange('partnerModel', e.target.value)}
                          className="text-[#0EB623] focus:ring-[#0EB623]"
                        />
                        <span className="text-white/90">Referral</span>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className={`w-full font-medium px-8 py-4 rounded-xl transition-all duration-300 ${
                      isSubmitted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-[#0EB623] hover:bg-opacity-90'
                    }`}
                  >
                    {isSubmitted ? '✓ Application Submitted!' : 'Submit'}
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

export default Partners;