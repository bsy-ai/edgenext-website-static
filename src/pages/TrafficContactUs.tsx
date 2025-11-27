import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
        }) => void;
      };
    };
  }
}

const ContactUs: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);

  useEffect(() => {
    // Load HubSpot forms script if not already loaded
    if (!window.hbspt && !hubspotLoaded) {
      const script = document.createElement('script');
      script.src = '//js-na2.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.onload = () => {
        setHubspotLoaded(true);
        // Create the form once the script is loaded
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "4744591",
            formId: "e6919ddc-d345-4b24-a7d9-e3f72ebd3c6d",
            region: "na2",
            target: '#hubspot-form'
          });
        }
      };
      document.head.appendChild(script);
    } else if (window.hbspt && !hubspotLoaded) {
      // If script is already loaded, just create the form
      setHubspotLoaded(true);
      window.hbspt.forms.create({
        portalId: "4744591",
        formId: "e6919ddc-d345-4b24-a7d9-e3f72ebd3c6d",
        region: "na2",
        target: '#hubspot-form'
      });
    }
  }, [hubspotLoaded]);

  const faqs: FAQ[] = [
    {
      question: 'How does EdgeNext work?',
      answer: 'EdgeNext accelerates and protects any website. Once configured, your web traffic is routed through our intelligent global network. We optimize delivery for performance and security automatically.'
    },
    {
      question: 'How can I start the free trial?',
      answer: 'A free Security CDN plan is available. For CDN, streaming, or edge computing trial access, contact us directly.'
    },
    {
      question: 'Where can I learn more about the EdgeNext platform?',
      answer: 'The easiest way is to sign up—it only takes a few minutes.'
    },
    {
      question: 'Where can I find pricing info?',
      answer: 'We offer flexible, tiered pricing. Contact us for details based on your business needs.'
    },
    {
      question: 'Where can I find EdgeNext edge server locations?',
      answer: (
        <span>
          Visit the{' '}
          <a href="/network" className="text-[#0EB623] hover:underline">
            Network Page
          </a>
        </span>
      )
    }
  ];

  const offices = {
    'North America': [
      {
        name: 'Seattle Office',
        address: '500 108th Ave NE Suite 1100 Bellevue, WA 98004 USA',
        phone: '+1 (800) 260-5186'
      }
    ],
    'APAC': [
      {
        name: 'Singapore Office',
        address: '60 Paya Lebar Road #11-20, Paya Lebar Square, Singapore, 409051',
        phone: '+65 6258 5641'
      }
    ],
    'EMEA': [
      {
        name: 'London Office',
        address: '25 Wilton Road Victoria, London, England, SW1V 1LW',
        phone: '+44 (0) 20 3105 5587'
      },
      {
        name: 'Dubai Office',
        address: 'Unit 210, Building 09, Dubai Internet City, Dubai, United Arab Emirates',
        phone: '+971 4 575 1243'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium mb-4">Ready to Build the Future Together?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              No matter where you are in your digital journey, we're here to help you move faster, safer, and smarter. Tell us what you're looking for—we'll take it from there.
            </p>
          </div>

          {/* HubSpot Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* HubSpot Form - Left Side */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div id="hubspot-form"></div>
            </div>

            {/* Existing Customer Support and Office Information - Right Side */}
            <div className="space-y-8">
              {/* Office Locations */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-medium mb-6">Our Global Offices</h3>
                
                {/* General Contact Info */}
                <div className="mb-8 p-4 bg-[#0EB623]/5 rounded-xl">
                  <h4 className="text-lg font-medium text-[#0EB623] mb-3">General Contact</h4>
                  <div className="space-y-2">
                    <p>
                      <a
                        href="mailto:info@edgenext.com"
                        className="text-[#0EB623] hover:underline flex items-center gap-2"
                      >
                        <Mail size={18} />
                        info@edgenext.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {Object.entries(offices).map(([region, locationList]) => (
                    <div key={region}>
                      <h4 className="text-lg font-medium text-[#0EB623] mb-4">{region}</h4>
                      <div className="space-y-6">
                        {locationList.map((office) => (
                          <div key={office.name} className="space-y-2">
                            <h5 className="font-medium">{office.name}</h5>
                            <p className="text-gray-600 flex items-start gap-2">
                              <MapPin size={18} className="flex-shrink-0 mt-1" />
                              {office.address}
                            </p>
                            <p>
                              <a
                                href={`tel:${office.phone}`}
                                className="text-[#0EB623] hover:underline flex items-center gap-2"
                              >
                                <Phone size={18} />
                                {office.phone}
                              </a>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          {/* FAQs Section */}
          <div className="mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-medium mb-6">Have More Questions?</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    >
                      <span className="font-medium">{faq.question}</span>
                      {activeAccordion === index ? (
                        <ChevronUp className="text-[#0EB623]" size={20} />
                      ) : (
                        <ChevronDown className="text-[#0EB623]" size={20} />
                      )}
                    </button>
                    {activeAccordion === index && (
                      <div className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;