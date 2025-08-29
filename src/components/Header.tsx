import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { Dropdown } from './Dropdown';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setActiveMenu(null);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div className="flex items-center">
              <a href="/network" className="utility-link flex items-center">
                <Globe size={16} className="mr-1" />
                <span>Global Network Status</span>
              </a>
              <a href="/events" className="utility-link ml-6 hidden md:block">Events</a>
            </div>
            
            {/* Right side */}
            <div className="flex items-center">
              <a href="https://home.console.edgenext.com/#/uc/register" className="utility-link ml-6 hidden md:block" target="_blank" rel="noopener noreferrer">Sign up</a>
       
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header 
        ref={headerRef}
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Logo />
            </div>
            
            <div className="flex-1 flex justify-center">
              <nav className="hidden lg:flex items-center space-x-4">
                <div className="relative">
                  <button 
                    className={`nav-link flex items-center ${activeMenu === 'products' ? 'active' : ''}`}
                    onMouseEnter={() => handleMenuToggle('products')}
                  >
                    Products
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMenu === 'products' && <Dropdown type="products" onClose={() => setActiveMenu(null)} />}
                </div>
                
                <div className="relative">
                  <button 
                    className={`nav-link flex items-center ${activeMenu === 'solutions' ? 'active' : ''}`}
                    onMouseEnter={() => handleMenuToggle('solutions')}
                  >
                    Solutions
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMenu === 'solutions' && <Dropdown type="solutions" onClose={() => setActiveMenu(null)} />}
                </div>
                
                <div className="relative">
                  <button 
                    className={`nav-link flex items-center ${activeMenu === 'resources' ? 'active' : ''}`}
                    onMouseEnter={() => handleMenuToggle('resources')}
                  >
                    Resources
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === 'resources' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMenu === 'resources' && <Dropdown type="resources" onClose={() => setActiveMenu(null)} />}
                </div>
                
                <div className="relative">
                  <button 
                    className={`nav-link flex items-center ${activeMenu === 'company' ? 'active' : ''}`}
                    onMouseEnter={() => handleMenuToggle('company')}
                  >
                    Company
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeMenu === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMenu === 'company' && <Dropdown type="company" onClose={() => setActiveMenu(null)} />}
                </div>
                
                <Link to="/partners" className="nav-link">
                  Partners
                </Link>
              </nav>
            </div>
            
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                Login
              </a>
              <a 
                href="/contact_us"
                className="button-primary"
              >
                Contact Us
              </a>
            </div>
            
            <button 
              className="lg:hidden focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Logo />
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>
                
                <nav className="space-y-6 mt-6">
                  {/* Products Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileSubmenu('products')}
                      className="flex items-center justify-between w-full text-left text-gray-900 font-medium"
                    >
                      <span>Products</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeMobileSubmenu === 'products' ? 'rotate-90' : ''}`} />
                    </button>
                    {activeMobileSubmenu === 'products' && (
                      <div className="mt-4 pl-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">Content Delivery</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/dynamic-acceleration" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Dynamic Acceleration
                            </Link>
                            <Link 
                              to="/static-acceleration" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Static Acceleration
                            </Link>
                            <Link 
                              to="/live_streaming" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Live Streaming
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">Security</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/security_cdn" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Security CDN
                            </Link>
                            <Link 
                              to="/anti_ddos" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Anti-DDoS
                            </Link>
                            <Link 
                             to="/dns_security_service" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Security DNS
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">Computing</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/vps" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Edge Cloud Server
                            </Link>
                            <Link 
                              to="/bare_metal_server" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Bare Metal Server
                            </Link>
                            <Link 
                              to="/IP_Transit" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              IP Transit
                            </Link>

                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">AI-Powered Solutions</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/ai-solutions" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              EdgeNext AI Solutions
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Solutions Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileSubmenu('solutions')}
                      className="flex items-center justify-between w-full text-left text-gray-900 font-medium"
                    >
                      <span>Solutions</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeMobileSubmenu === 'solutions' ? 'rotate-90' : ''}`} />
                    </button>
                    {activeMobileSubmenu === 'solutions' && (
                      <div className="mt-4 pl-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">By Industry</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/e_commerce" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              E-Commerce
                            </Link>
                            <Link 
                              to="/e_learning" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              E-Learning
                            </Link>
                            <Link 
                              to="/telcos-isp-iigs" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Telecommunication
                            </Link>
                            <Link 
                              to="/gaming" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Gaming
                            </Link>
                            <Link 
                              to="/media_and_entertainment" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Media & Entertainment
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">By Need</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/global_cdn" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Global CDN
                            </Link>
                            <Link 
                              to="/solutions/mena-cdn" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              MENA CDN
                            </Link>
                            <Link 
                              to="/china_cdn" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              China CDN
                            </Link>
                            <Link 
                              to="/southeast_asia_cdn" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Southeast Asia CDN
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Resources Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileSubmenu('resources')}
                      className="flex items-center justify-between w-full text-left text-gray-900 font-medium"
                    >
                      <span>Resources</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeMobileSubmenu === 'resources' ? 'rotate-90' : ''}`} />
                    </button>
                    {activeMobileSubmenu === 'resources' && (
                      <div className="mt-4 pl-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">Documentation</h4>
                          <div className="space-y-3">
                            <a href="#" className="block text-gray-600 hover:text-[#0EB623]">API Reference</a>
                            <a href="#" className="block text-gray-600 hover:text-[#0EB623]">Developer Guides</a>
                            <Link 
                              to="/icp-license" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              China ICP License
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">Resources</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/blog" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Blog
                            </Link>
                            <Link 
                              to="/case_study" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Case Studies
                            </Link>
                            <Link 
                              to="/newsroom" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              News
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Company Section */}
                  <div>
                    <button 
                      onClick={() => toggleMobileSubmenu('company')}
                      className="flex items-center justify-between w-full text-left text-gray-900 font-medium"
                    >
                      <span>Company</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeMobileSubmenu === 'company' ? 'rotate-90' : ''}`} />
                    </button>
                    {activeMobileSubmenu === 'company' && (
                      <div className="mt-4 pl-4 space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">About Us</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/about-us" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Company
                            </Link>
                            <Link 
                             to="/contact_us" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Contact Us
                            </Link>
                            <Link 
                              to="/network" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Global Network
                            </Link>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-[#0EB623] mb-2">Trust</h4>
                          <div className="space-y-3">
                            <Link 
                              to="/legal" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Legal
                            </Link>
                            <Link 
                              to="/partners" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Partners
                            </Link>
                            <Link 
                              to="/career" 
                              className="block text-gray-600 hover:text-[#0EB623]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              Careers
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </nav>
              </div>
            
              <div className="pt-6 border-t border-gray-200 px-6">
                <a 
                  href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mb-4 py-3 text-gray-600 hover:text-[#0EB623] block text-center"
                >
                  Login
                </a>
                <a 
                  href="/contact_us"
                  className="w-full px-8 py-3 button-primary block text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};