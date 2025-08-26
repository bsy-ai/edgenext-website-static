import React, { useState } from 'react';
import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const ContactUs: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hubspotLoaded, setHubspotLoaded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    phoneNumber: '',
    businessEmail: '',
    comments: ''
  });

  useEffect(() => {
    // Load HubSpot forms script if not already loaded
    if (!window.hbspt && !hubspotLoaded) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.onload = () => {
        setHubspotLoaded(true);
        // Create the form once the script is loaded
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: "4744591",
            formId: "349dfc5c-8f1d-449a-8276-d41cb3d89199",
            region: "na1",
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
        formId: "349dfc5c-8f1d-449a-8276-d41cb3d89199",
        region: "na1",
        target: '#hubspot-form'
      });
    }
  }, [hubspotLoaded]);

  const handleProductSelect = (product: string) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter(p => p !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = [
      formData.firstName.trim(),
      formData.lastName.trim(),
      formData.companyName.trim(),
      formData.country,
      formData.phoneNumber.trim(),
      formData.businessEmail.trim()
    ];
    
    const hasSelectedProducts = selectedProducts.length > 0;
    
    if (!requiredFields.every(field => field) || !hasSelectedProducts) {
      alert('Please fill in all required fields and select at least one product/service.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          country: '',
          phoneNumber: '',
          businessEmail: '',
          comments: ''
        });
        setSelectedProducts([]);
      }, 3000);
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const products = [
    'CDN',
    'Video CDN (Live Streaming / VOD)',
    'Security CDN',
    'Edge Cloud Server (Cloud Hosting)',
    'Bare Metal Server',
    'DDoS Protection',
    'WAF',
    'Others'
  ];

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
            <h1 className="text-4xl md:text-5xl font-medium mb-4">How can we help you?</h1>
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
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-medium mb-4">Existing Customer?</h3>
                <p className="text-gray-600">
                  Customers can report issues by emailing{' '}
                  <a href="mailto:support@edgenext.com" className="text-[#0EB623] hover:underline">
                    support@edgenext.com
                  </a>
                </p>
              </div>

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