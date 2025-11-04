import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { EmergingMarkets } from './components/EmergingMarkets';
import { FeaturedServices } from './components/FeaturedServices';
import { TechnologyAdvantage } from './components/TechnologyAdvantage';
import { AISolutions as AISolutionsComponent } from './components/AISolutions';
import { TrustedBy } from './components/TrustedBy';
import { SolutionsSection } from './components/SolutionsSection';
import { Solutions } from './components/Solutions';
import { Registration } from './components/Registration';
import { CallToAction } from './components/CallToAction';
import { PageTransition } from './components/PageTransition';

import EdgeCloudServer from './pages/EdgeCloudServer';
import AdaptiveThreatModulation from './pages/AdaptiveThreatModulation';
import DarkSideAI from './pages/DarkSideAI';
import Events from './pages/Events';
import GlobalCDN from './pages/GlobalCDN';
import ChinaCDN from './pages/ChinaCDN';
import SoutheastAsiaCDN from './pages/SoutheastAsiaCDN';
import AISolutions from './pages/AISolutions';
import NewsArticleEdgeCloudServers from './pages/NewsArticleEdgeCloudServers';
import NationalPulsePartnership from './pages/NationalPulsePartnership';
import CommercisPartnership from './pages/CommercisPartnership';
import AjlanBrosPartnership from './pages/AjlanBrosPartnership';
import AdTimingPartnership from './pages/AdTimingPartnership';
import NewSelfBuiltPoPs from './pages/NewSelfBuiltPoPs';
import TopCloudProvider from './pages/TopCloudProvider';
import TopDDoSProtection from './pages/TopDDoSProtection';
import CommerceNextEvent from './pages/CommerceNextEvent';
import StreamingMediaTrendsetting from './pages/StreamingMediaTrendsetting';
import EOEventsPartnership from './pages/EOEventsPartnership';
import AjlanBrosJointVenture from './pages/AjlanBrosJointVenture';
import ChatLabsVivaTech from './pages/ChatLabsVivaTech';
import StreamingMediaEast from './pages/StreamingMediaEast';
import FogComputing from './pages/FogComputing';
import VpsSsdStorage from './pages/VpsSsdStorage';
import ChatLabsPartnership from './pages/ChatLabsPartnership';
import APACNewOffice from './pages/APACNewOffice';
import BlockchainVPS from './pages/BlockchainVPS';
import FinOpsArticle from './pages/FinOpsArticle';
import ServerlessVPS from './pages/ServerlessVPS';
import IoTAuthentication from './pages/IoTAuthentication';
import VpsMonitoring from './pages/VpsMonitoring';

import NewTeamMemberEdgey from './pages/NewTeamMemberEdgey';
import SigmaEurasiaDubai from './pages/SigmaEurasiaDubai';
import SafenamesPartnership from './pages/SafenamesPartnership';
import DynamicAcceleration from './pages/DynamicAcceleration';
import StaticAcceleration from './pages/StaticAcceleration';
import LiveStreaming from './pages/LiveStreaming';
import SecurityCDN from './pages/SecurityCDN';
import AntiDDoS from './pages/AntiDDoS';
import DNSSecurity from './pages/DNSSecurity';
import BareMetalServer from './pages/BareMetalServer';
import IPTransit from './pages/IPTransit';
import MENACDN from './pages/MENACDN';
import Gaming from './pages/Gaming';
import MediaEntertainment from './pages/MediaEntertainment';
import Ecommerce from './pages/Ecommerce';
import Telecommunication from './pages/Telecommunication';
import ELearning from './pages/ELearning';
import ContactUs from './pages/ContactUs';
import Company from './pages/Company';
import Careers from './pages/Careers';


import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Legal from './pages/Legal';
import Partners from './pages/Partners';
import TrafficPartners from './pages/TrafficPartners';
import GlobalNetwork from './pages/GlobalNetwork';
import ChinaICPLicense from './pages/ChinaICPLicense';
import NotFound from './pages/NotFound';
import DNSAmplificationAttacks from './pages/DNSAmplificationAttacks';
import ApplicationLayerNetworkLayerDDoS from './pages/ApplicationLayerNetworkLayerDDoS';
import ZeroTrustIoT from './pages/ZeroTrustIoT';
import MultiVectorDDoSAttacks from './pages/MultiVectorDDoSAttacks';
import BareMetalVPS from './pages/BareMetalVPS';
import QuantumComputingDDoS from './pages/QuantumComputingDDoS';
import EdgeComputingIoTSecurity from './pages/EdgeComputingIoTSecurity';
import DDoSEdgeDevices from './pages/DDoSEdgeDevices';
import PreemptiveDDoSDefense from './pages/PreemptiveDDoSDefense';
import ThankYou from './pages/ThankYou';


import Blog from './pages/BLOG/pages/Blog';
import BlogDetail from './pages/BLOG/pages/BlogDetail';
import News from './pages/NEWS/pages/News';
import NewsDetail from './pages/NEWS/pages/NewsDetail';


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <Hero />
                  <EmergingMarkets />
                  <TrustedBy />
                  <SolutionsSection />
                  <AISolutionsComponent />
                  <Solutions />
                  <FeaturedServices />
                  <Registration />
                  <TechnologyAdvantage />
                  <CallToAction />
                </main>
                <Footer />
              </div>
            </PageTransition>
          } 
        />
        <Route 
          path="/events" 
          element={
            <PageTransition>
              <Events />
            </PageTransition>
          } 
        />
        <Route 
          path="/ecs" 
          element={
            <PageTransition>
              <EdgeCloudServer />
            </PageTransition>
          } 
        />
        <Route 
          path="/vps" 
          element={<Navigate to="/ecs" replace />}
        />
        <Route 
          path="/global_cdn"
          element={
            <PageTransition>
              <GlobalCDN />
            </PageTransition>
          } 
        />
        <Route 
          path="/china_cdn" 
          element={
            <PageTransition>
              <ChinaCDN />
            </PageTransition>
          } 
        />
        <Route 
          path="/southeast_asia_cdn" 
          element={
            <PageTransition>
              <SoutheastAsiaCDN />
            </PageTransition>
          } 
        />
        <Route 
          path="/ai-solutions" 
          element={
            <PageTransition>
              <AISolutions />
            </PageTransition>
          } 
        />
        <Route 
          path="/what-is-adaptive-threat-modulation-and-why-is-it-key-for-ddos-resilience" 
          element={
            <PageTransition>
              <AdaptiveThreatModulation />
            </PageTransition>
          } 
        />
        <Route 
          path="/how-fog-computing-is-reinventing-the-iot-ecosystem-beyond-the-edge" 
          element={
            <PageTransition>
              <FogComputing />
            </PageTransition>
          } 
        />
        <Route 
          path="/why-vps-with-ssd-storage-is-becoming-the-default-choice-for-high-speed-applications" 
          element={
            <PageTransition>
              <VpsSsdStorage />
            </PageTransition>
          } 
        />
        <Route 
          path="/why-is-vps-the-preferred-choice-for-running-blockchain-nodes" 
          element={
            <PageTransition>
              <BlockchainVPS />
            </PageTransition>
          } 
        />
        <Route 
          path="/how-finops-is-reshaping-cost-management-in-vps-and-cloud-hosting" 
          element={
            <PageTransition>
              <FinOpsArticle />
            </PageTransition>
          } 
        />
        <Route 
          path="/what-are-the-implications-of-serverless-vps-in-the-context-of-modern-app-hosting" 
          element={
            <PageTransition>
              <ServerlessVPS />
            </PageTransition>
          } 
        />
        <Route 
          path="/what-are-the-emerging-standards-for-iot-device-authentication-in-smart-factories" 
          element={
            <PageTransition>
              <IoTAuthentication />
            </PageTransition>
          } 
        />
        <Route 
          path="/what-are-the-key-metrics-for-monitoring-vps-performance-under-load" 
          element={
            <PageTransition>
              <VpsMonitoring />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-edge-cloud-servers-add-new-nodes-12-countries" 
          element={
            <PageTransition>
              <NewsArticleEdgeCloudServers />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-edge-cloud-servers-add-new-nodes-in-12-countries-accelerating-global-expansion-for-businesses" 
          element={
            <PageTransition>
              <NewsArticleEdgeCloudServers />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-edge-cloud-servers-add-new-nodes-in-12-countries-accelerating-global-expansion-for-businesses" 
          element={
            <PageTransition>
              <NewsArticleEdgeCloudServers />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-national-pulse-strategic-partnership" 
          element={
            <PageTransition>
              <NationalPulsePartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-and-national-pulse-form-strategic-partnership-to-drive-innovation-and-market-expansion" 
          element={
            <PageTransition>
              <NationalPulsePartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-commercis-strategic-cloud-partnership-gitex" 
          element={
            <PageTransition>
              <CommercisPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-and-commercis-announce-strategic-cloud-partnership-at-gitex-for-iraq-expansion" 
          element={
            <PageTransition>
              <CommercisPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-ajlan-bros-aj-cloud-launch-mena" 
          element={
            <PageTransition>
              <AjlanBrosPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-and-ajlan-bros-holding-group-announce-the-launch-of-aj-cloud-a-pioneering-cloud-solution-platform-for-the-mena-region" 
          element={
            <PageTransition>
              <AjlanBrosPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-top-cloud-computing-provider" 
          element={
            <PageTransition>
              <TopCloudProvider />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-has-been-included-in-the-top-cloud-computing-service-provider-companies-by-software-testing-help" 
          element={
            <PageTransition>
              <TopCloudProvider />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-top-ddos-protection-services" 
          element={
            <PageTransition>
              <TopDDoSProtection />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-is-listed-as-one-of-the-top-ddos-protection-services-by-software-testing-help" 
          element={
            <PageTransition>
              <TopDDoSProtection />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-commercenext-ecommerce-growth-show" 
          element={
            <PageTransition>
              <CommerceNextEvent />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-in-commercenext-ecommerce-growth-show-2023" 
          element={
            <PageTransition>
              <CommerceNextEvent />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-streaming-media-trendsetting-products" 
          element={
            <PageTransition>
              <StreamingMediaTrendsetting />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-unified-global-edge-cloud-platform-has-been-recognized-as-one-of-streaming-medias-trendsetting-products-and-services" 
          element={
            <PageTransition>
              <StreamingMediaTrendsetting />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-jetstream-epeak-eo-events-china" 
          element={
            <PageTransition>
              <EOEventsPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-jet-stream-and-epeak-studio-event-technology-event-planning-livestream-production-marketing-agency-joined-forces-to-deliver-incredible-live-streaming-experience-for-the-entrepreneurs" 
          element={
            <PageTransition>
              <EOEventsPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-chatlabs-vivatech-2023" 
          element={
            <PageTransition>
              <ChatLabsVivaTech />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-x-chatlabs-happy-hour-at-vivatech-2023" 
          element={
            <PageTransition>
              <ChatLabsVivaTech />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-streaming-media-east-2023" 
          element={
            <PageTransition>
              <StreamingMediaEast />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-attended-streaming-media-east-2023" 
          element={
            <PageTransition>
              <StreamingMediaEast />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-chatlabs-partnership-china-expansion" 
          element={
            <PageTransition>
              <ChatLabsPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-partners-with-chatlabs-to-offer-comprehensive-technology-solutions-for-content-delivery-and-social-media-expansion-into-china-and-beyond" 
          element={
            <PageTransition>
              <ChatLabsPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-apac-new-office" 
          element={
            <PageTransition>
              <APACNewOffice />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-apac-team-has-a-new-office" 
          element={
            <PageTransition>
              <APACNewOffice />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/new-team-member-edgey" 
          element={
            <PageTransition>
              <NewTeamMemberEdgey />
            </PageTransition>
          } 
        />
        <Route 
          path="/new-team-member-has-arrived-edgey" 
          element={
            <PageTransition>
              <NewTeamMemberEdgey />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-sigma-eurasia-dubai-2023" 
          element={
            <PageTransition>
              <SigmaEurasiaDubai />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-attended-sigma-eurasia-dubai-2023" 
          element={
            <PageTransition>
              <SigmaEurasiaDubai />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/adtiming-powered-by-edgenext" 
          element={
            <PageTransition>
              <AdTimingPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/adtiming-is-now-powered-by-edgenext-edge-cloud-platform" 
          element={
            <PageTransition>
              <AdTimingPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-ajlan-bros-joint-venture-mena" 
          element={
            <PageTransition>
              <AjlanBrosJointVenture />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-and-ajlan-bros-holding-group-ink-transformative-joint-venture-agreement-to-revolutionize-cdn-edge-cloud-and-cloud-security-in-the-mena-region" 
          element={
            <PageTransition>
              <AjlanBrosJointVenture />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-safenames-partnership" 
          element={
            <PageTransition>
              <SafenamesPartnership />
            </PageTransition> 
          } 
        />
        <Route 
          path="/edgenext-and-safenames-partner-to-enhance-website-and-app-performance-security-and-edge-computing" 
          element={
            <PageTransition>
              <SafenamesPartnership />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/news/edgenext-new-pops-middle-east-sea-latam" 
          element={
            <PageTransition>
              <NewSelfBuiltPoPs />
            </PageTransition>
          } 
        />
        <Route 
          path="/edgenext-new-self-built-pops-in-the-middle-east-southeast-asia-and-latin-america-are-online-now" 
          element={
            <PageTransition>
              <NewSelfBuiltPoPs />
            </PageTransition>
          } 
        />
        <Route 
          path="/dynamic-acceleration" 
          element={
            <PageTransition>
              <DynamicAcceleration />
            </PageTransition>
          } 
        />
        <Route 
          path="/static-acceleration" 
          element={
            <PageTransition>
              <StaticAcceleration />
            </PageTransition>
          } 
        />
        <Route 
          path="/live_streaming" 
          element={
            <PageTransition>
              <LiveStreaming />
            </PageTransition>
          } 
        />
        <Route 
          path="/security_cdn" 
          element={
            <PageTransition>
              <SecurityCDN />
            </PageTransition>
          } 
        />
        <Route 
          path="/anti_ddos" 
          element={
            <PageTransition>
              <AntiDDoS />
            </PageTransition>
          } 
        />
        <Route 
         path="/dns_security_service" 
          element={
            <PageTransition>
              <DNSSecurity />
            </PageTransition>
          } 
        />
        <Route 
          path="/bare_metal_server" 
          element={
            <PageTransition>
              <BareMetalServer />
            </PageTransition>
          } 
        />
        <Route 
          path="/IP_Transit" 
          element={
            <PageTransition>
              <IPTransit />
            </PageTransition>
          } 
        />
        <Route 
          path="/mea_cdn" 
          element={
            <PageTransition>
              <MENACDN />
            </PageTransition>
          } 
        />
        <Route 
          path="/gaming" 
          element={
            <PageTransition>
              <Gaming />
            </PageTransition>
          } 
        />
        <Route 
          path="/solutions/media-entertainment" 
          element={
            <PageTransition>
              <MediaEntertainment />
            </PageTransition>
          } 
        />
        <Route 
          path="/media_and_entertainment" 
          element={
            <PageTransition>
              <MediaEntertainment />
            </PageTransition>
          } 
        />
        <Route 
          path="/e_commerce" 
          element={
            <PageTransition>
              <Ecommerce />
            </PageTransition>
          } 
        />
        <Route 
          path="/telcos-isp-iigs" 
          element={
            <PageTransition>
              <Telecommunication />
            </PageTransition>
          } 
        />
        <Route 
          path="/e_learning" 
          element={
            <PageTransition>
              <ELearning />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact_us" 
          element={
            <PageTransition>
              <ContactUs />
            </PageTransition>
          } 
        />
        <Route 
          path="/about-us" 
          element={
            <PageTransition>
              <Company />
            </PageTransition>
          } 
        />
        <Route 
          path="/network" 
          element={
            <PageTransition>
              <GlobalNetwork />
            </PageTransition>
          } 
        />
        <Route 
          path="/career" 
          element={
            <PageTransition>
              <Careers />
            </PageTransition>
          } 
        />
        <Route 
          path="/newsroom" 
          element={
            <PageTransition>
              <News />
            </PageTransition>
          } 
        />
        <Route 
          path="resources/news/:slug" 
          element={
            <PageTransition>
            <NewsDetail/>
            </PageTransition>
          }
        />
        <Route 
          path="/blog" 
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/blog" 
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/blog/:slug" 
          element={
            <PageTransition>
              <BlogDetail />
            </PageTransition>
          } 
        />
        <Route 
          path="/the-dark-side-of-ai-how-machine-learning-is-being-used-to-orchestrate-ddos-attacks"
          element={
            <PageTransition>
              <DarkSideAI />
            </PageTransition>
          } 
        />
        <Route 
          path="/why-are-dns-amplification-attacks-still-a-major-threat-in-modern-ddos-campaigns"
          element={
            <PageTransition>
              <DNSAmplificationAttacks />
            </PageTransition>
          } 
        />
        <Route 
          path="/what-are-the-key-differences-between-application-layer-and-network-layer-ddos-attacks"
          element={
            <PageTransition>
              <ApplicationLayerNetworkLayerDDoS />
            </PageTransition>
          } 
        />
        <Route 
          path="/zero-trust-architecture-for-iot-devices-why-its-the-security-standard-of-the-future"
          element={
            <PageTransition>
              <ZeroTrustIoT />
            </PageTransition>
          } 
        />
        <Route 
          path="/how-can-businesses-detect-and-defend-against-multi-vector-ddos-attacks"
          element={
            <PageTransition>
              <MultiVectorDDoSAttacks />
            </PageTransition>
          } 
        />
        <Route 
          path="/why-are-bare-metal-servers-outperforming-traditional-vps-for-high-performance-applications"
          element={
            <PageTransition>
              <BareMetalVPS />
            </PageTransition>
          } 
        />
        <Route 
          path="/ddos-attacks-on-edge-devices-why-even-small-devices-need-advanced-protection" 
          element={
            <PageTransition>
              <DDoSEdgeDevices />
            </PageTransition>
          } 
        />
        <Route 
          path="/how-can-businesses-prepare-a-preemptive-ddos-defense-strategy" 
          element={
            <PageTransition>
              <PreemptiveDDoSDefense />
            </PageTransition>
          } 
        />
        <Route 
          path="/thank_you" 
          element={
            <PageTransition>
              <ThankYou />
            </PageTransition>
          } 
        />
        <Route 
          path="/how-can-edge-computing-and-vps-improve-iot-device-security" 
          element={
            <PageTransition>
              <EdgeComputingIoTSecurity />
            </PageTransition>
          } 
        />
        <Route 
          path="/whats-the-future-impact-of-quantum-computing-on-ddos-defense"
          element={
            <PageTransition>
              <QuantumComputingDDoS />
            </PageTransition>
          } 
        />
        <Route 
          path="/case_study" 
          element={
            <PageTransition>
              <CaseStudies />
            </PageTransition>
          } 
        />
        <Route 
          path="/legal/trust" 
          element={
            <PageTransition>
              <Legal />
            </PageTransition>
          } 
        />
        <Route 
          path="/legal" 
          element={
            <PageTransition>
              <Legal />
            </PageTransition>
          } 
        />
        <Route 
          path="/partners" 
          element={
            <PageTransition>
              <Partners />
            </PageTransition>
          } 
        />
        <Route 
          path="/traffic-partner" 
          element={
            <PageTransition>
              <TrafficPartners />
            </PageTransition>
          } 
        />
        <Route 
          path="/resources/documentation/china-icp-license" 
          element={
            <PageTransition>
              <ChinaICPLicense />
            </PageTransition>
          } 
        />
        <Route 
          path="/icp-license" 
          element={
            <PageTransition>
              <ChinaICPLicense />
            </PageTransition>
          } 
        />
        <Route 
          path="/case-study/:slug" 
          element={
            <PageTransition>
              <CaseStudyDetail />
            </PageTransition>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;