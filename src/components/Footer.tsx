import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Logo darkMode />
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Getting Started</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://home.console.edgenext.com/#/uc/register" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EB623] transition-colors duration-200">
                  Free Trial
                </a>
              </li>
              <li>
                <a href="/contact_us" className="hover:text-[#0EB623] transition-colors duration-200">
                  Request a Demo
                </a>
              </li>
              <li>
                <a href="mailto:info@edgenext.com" className="hover:text-[#0EB623] transition-colors duration-200">
                  info@edgenext.com
                </a>
              </li>
            </ul>
            
            <div className="flex space-x-4 mt-8">
              <a href="https://www.linkedin.com/company/edgenextcdn" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EB623] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/edgenexttech" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EB623] transition-colors duration-200">
                <img src="/x logo.svg" alt="X (formerly Twitter)" width="20" height="20" className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/EdgeNextTechnology/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EB623] transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/channel/UCXB1VO-oZSjNROd-2O8UYig" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EB623] transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Products</h3>
            
            <h4 className="text-[#0EB623] font-medium mb-2">Content Delivery</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="/dynamic-acceleration" className="hover:text-[#0EB623] transition-colors duration-200">
                  Dynamic Acceleration
                </a>
              </li>
              <li>
                <a href="/static-acceleration" className="hover:text-[#0EB623] transition-colors duration-200">
                  Static Acceleration
                </a>
              </li>
              <li>
                <a href="/live_streaming" className="hover:text-[#0EB623] transition-colors duration-200">
                  Live Streaming
                </a>
              </li>
            </ul>
            
            <h4 className="text-[#0EB623] font-medium mb-2">Security</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="/security_cdn" className="hover:text-[#0EB623] transition-colors duration-200">
                  Security CDN
                </a>
              </li>
              <li>
                <a href="/anti_ddos" className="hover:text-[#0EB623] transition-colors duration-200">
                  Anti-DDoS
                </a>
              </li>
              <li>
               <a href="/dns_security_service" className="hover:text-[#0EB623] transition-colors duration-200">
                  Security DNS 
                </a>
              </li>
            </ul>
            
            <h4 className="text-[#0EB623] font-medium mb-2">Computing</h4>
            <ul className="space-y-2">
              <li>
                <a href="/vps" className="hover:text-[#0EB623] transition-colors duration-200">
                  Edge Cloud Server
                </a>
              </li>
              <li>
                <a href="/bare_metal_server" className="hover:text-[#0EB623] transition-colors duration-200">
                  Bare Metal Server
                </a>
              </li>
              <li>
                <a href="/IP_Transit" className="hover:text-[#0EB623] transition-colors duration-200">
                  IP Transit
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Solutions</h3>
            
            <h4 className="text-[#0EB623] font-medium mb-2">By Industry</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="/e_commerce" className="hover:text-[#0EB623] transition-colors duration-200">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="/e_learning" className="hover:text-[#0EB623] transition-colors duration-200">
                  E-Learning
                </a>
              </li>
              <li>
                <a href="/telcos-isp-iigs" className="hover:text-[#0EB623] transition-colors duration-200">
                  Telecommunication
                </a>
              </li>
              <li>
                <a href="/gaming" className="hover:text-[#0EB623] transition-colors duration-200">
                  Gaming
                </a>
              </li>
              <li>
                <a href="/media_and_entertainment" className="hover:text-[#0EB623] transition-colors duration-200">
                  Media & Entertainment
                </a>
              </li>
            </ul>

            <h4 className="text-[#0EB623] font-medium mb-2">By Need</h4>
            <ul className="space-y-2">
              <li>
                <a href="/global_cdn" className="hover:text-[#0EB623] transition-colors duration-200">
                  Global CDN
                </a>
              </li>
              <li>
                <a href="/mea_cdn" className="hover:text-[#0EB623] transition-colors duration-200">
                  MENA CDN
                </a>
              </li>
              <li>
                <a href="/china_cdn" className="hover:text-[#0EB623] transition-colors duration-200">
                  China CDN
                </a>
              </li>
              <li>
                <a href="/southeast_asia_cdn" className="hover:text-[#0EB623] transition-colors duration-200">
                  Southeast Asia CDN
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            
            <h4 className="text-[#0EB623] font-medium mb-2">Documentation</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="https://home.console.edgenext.com/#/doc/content/cdn/Product%20Introduction/Product%20overview" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EB623] transition-colors duration-200">
                  API Reference
                </a>
              </li>
              <li>
                <a href="https://home.console.edgenext.com/#/doc/content/cdn/Product%20Introduction/Product%20overview" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EB623] transition-colors duration-200">
                  Developer Guides
                </a>
              </li>
              <li>
                <a href="/icp-license" className="hover:text-[#0EB623] transition-colors duration-200">
                  China ICP License
                </a>
              </li>
            </ul>

            <h4 className="text-[#0EB623] font-medium mb-2">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="hover:text-[#0EB623] transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="/case_study" className="hover:text-[#0EB623] transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/newsroom" className="hover:text-[#0EB623] transition-colors duration-200">
                  News
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            
            <h4 className="text-[#0EB623] font-medium mb-2">About Us</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="/about-us" className="hover:text-[#0EB623] transition-colors duration-200">
                  Company
                </a>
              </li>
              <li>
                <a href="/contact_us" className="hover:text-[#0EB623] transition-colors duration-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/network" className="hover:text-[#0EB623] transition-colors duration-200">
                  Global Network
                </a>
              </li>
            </ul>

            <h4 className="text-[#0EB623] font-medium mb-2">Trust</h4>
            <ul className="space-y-2">
              <li>
                <a href="/legal/trust" className="hover:text-[#0EB623] transition-colors duration-200">
                  Legal
                </a>
              </li>
              <li>
                <a href="/partners" className="hover:text-[#0EB623] transition-colors duration-200">
                  Partners
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-[#0EB623] transition-colors duration-200">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/legal" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="/legal" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a href="/legal" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © 2025 EdgeNext. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};