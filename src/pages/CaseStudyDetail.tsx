import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, Check, Globe, Shield, Zap, Server, Database, RefreshCw } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import caseStudies, { getIconForProduct } from '../data/caseStudies';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the case study that matches the slug
  const caseStudy = caseStudies.find(study => study.slug === slug);

  // If no case study is found, show a not found message
  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
              <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist or has been moved.</p>
              <Link 
                to="/case_study/" 
                className="inline-flex items-center px-6 py-3 bg-[#0EB623] text-white rounded-xl hover:bg-[#0EA620] transition-colors"
              >
                View All Case Studies
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0EB623]/5 via-transparent to-[#0EB623]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,182,35,0.1),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="text-[#0EB623] text-sm font-medium mb-4">Case Study • {caseStudy.date}</div>
              <h1 className="text-[32px] md:text-[48px] font-bold mb-6 leading-[1.2]">
                {caseStudy.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content Column */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <div className="mb-12">
                    <h2 className="text-3xl font-medium mb-6">Overview</h2>
                    <p className="text-gray-600 leading-relaxed">
                      {caseStudy.overview}
                    </p>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-medium mb-6">Customer Needs and Challenges</h2>
                    <ul className="space-y-4">
                      {caseStudy.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <Check className="text-[#0EB623]" size={16} />
                          </div>
                          <div>
                            {challenge.title ? (
                              <>
                                <span className="font-medium">{challenge.title}:</span> <span className="text-gray-600">{challenge.description}</span>
                              </>
                            ) : (
                              <span className="text-gray-600">{challenge.description}</span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-medium mb-6">EdgeNext's Tailored Solution</h2>
                    <ul className="space-y-8">
                      {caseStudy.solutions.map((solution, index) => (
                        <li key={index} className="flex flex-col">
                          <div className="flex items-start gap-3 mb-2">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            {solution.title ? (
                              <span className="font-medium">{solution.title}</span>
                            ) : (
                              <span className="font-medium">{`Solution ${index + 1}`}</span>
                            )}
                          </div>
                          <p className="text-gray-600 ml-9">{solution.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-medium mb-6">Applied Products and Services</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Product/Service</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-700">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {caseStudy.products.map((product, index) => (
                            <tr key={index} className="border-b border-gray-100">
                              <td className="py-3 px-4 font-medium">{product.name}</td>
                              <td className="py-3 px-4 text-gray-600">{product.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-3xl font-medium mb-6">Key Takeaway</h2>
                    {Array.isArray(caseStudy.takeaway) ? (
                      <ul className="space-y-4">
                        {caseStudy.takeaway.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0EB623]/10 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                              <Check className="text-[#0EB623]" size={16} />
                            </div>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 leading-relaxed">
                        {caseStudy.takeaway}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Industry Applications</h3>
                    <div className="space-y-3">
                      {caseStudy.industries.map((industry, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0EB623]"></div>
                          <span className="text-gray-600">{industry}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-medium mb-4">Related Products</h3>
                    <div className="space-y-4">
                      {caseStudy.relatedProducts.map((product, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            {getIconForProduct(product)}
                          </div>
                          <div>
                            <div className="font-medium">{product}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a 
                      href="https://account.console.edgenext.com/auth/realms/edgenext/protocol/openid-connect/auth?response_type=code&approval_prompt=auto&client_id=edgenext-login&redirect_uri=https%3A%2F%2Fhome.console.edgenext.com%2F%23%2Fdashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#0EB623] hover:bg-[#0EA620] text-white font-medium px-6 py-3 rounded-xl flex items-center justify-center group transition-all duration-300"
                    >
                      Try for Free
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-medium mb-4">Related Case Studies</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover how other companies achieved exceptional results with EdgeNext solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies
                .filter(study => study.slug !== slug)
                .slice(0, 3)
                .map((study, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden hover:shadow-[0_20px_60px_-15px_rgba(14,182,35,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <Link to={`/${study.slug}`} className="block">
                      <div className="aspect-video bg-gradient-to-br from-[#0EB623]/10 to-[#0EB623]/5 relative overflow-hidden">
                        <img 
                          src={study.slug === "beijing-2022-winter-olympic-games-cdn-streaming-solution" ? "/Beijing2022WinterOlympicGamesCDNStreamingSolution.png" : study.slug === "dynamic-acceleration-solution-for-top-e-commerce-in-china" ? "/Dynamic Acceleration case study.png" : study.slug === "global-delivery-solution-for-top-photo-beauty-app-in-china" ? "/GlobalDeliverySolutionforTopPhotoBeautyAppinChina.jpg" : study.slug === "media-on-demand-solution-for-top-global-short-video-platform" ? "/MediaonDemandSolutionforTopGlobalShortVideoPlatform.jpg" : study.slug === "cdn-gaming-solution-for-us-top-gaming-company" ? "/CDNGamingSolutionforUSTopGamingCompany.jpg" : study.slug === "global-delivery-top-ecommerce-in-sea" ? "/GlobalDeliveryTopEcommerceinSEA.jpg" : study.slug === "cctv-cdn-streaming-solution" ? "/CCTVCDN StreamingSolution.png" : study.slug === "giant-network-cdn-gaming-solution" ? "/GiantNetworkCDNGamingSolution.jpg" : (study.imageUrl || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg")}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <time dateTime={study.date}>{study.date}</time>
                        </div>
                        
                        <h3 className="text-lg font-medium mb-3 text-gray-900 group-hover:text-[#0EB623] transition-colors duration-300">
                          {study.title}
                        </h3>
                        
                        <div className="flex items-center text-[#0EB623] font-medium text-sm group-hover:gap-2 transition-all duration-300">
                          Read case study
                          <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0EB623]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Ready to accelerate your global delivery?</h2>
                <p className="text-white/90">
                  Join thousands of companies already growing with EdgeNext.
                </p>
              </div>
              <a 
                href="/contact_us" 
                className="px-8 py-4 bg-white text-[#0EB623] rounded-xl hover:bg-opacity-90 transition-colors font-medium whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;