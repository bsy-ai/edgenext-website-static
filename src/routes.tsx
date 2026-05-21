import type { RouteRecord } from 'vite-react-ssg';
import { Navigate } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';

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
import SportsBroadcasting from './pages/SportsBroadcasting';
import LegalV2 from './pages/LegalV2';
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
import TrafficContactUs from './pages/TrafficContactUs';
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
import WorldCup from './pages/WorldCup';
import { LegacyRedirect } from './components/LegacyRedirect';

import { getAllPosts } from './pages/BLOG/utils/blogUtils';
import { getAllNews } from './pages/NEWS/utils/newsDataParser';
import caseStudies from './data/caseStudies';

export const routes: RouteRecord[] = [
{
  path: '/',
  Component: RootLayout,
  children: [
  // ── 首页 ──
  { index: true, Component: Home },

  // ── 产品页 ──
  { path: 'events', Component: Events },
  { path: 'ecs', Component: EdgeCloudServer },
  { path: 'vps', Component: () => <Navigate to="/ecs" replace /> },
  { path: 'global-cdn', Component: GlobalCDN },
  { path: 'china-cdn', Component: ChinaCDN },
  { path: 'southeast-asia-cdn', Component: SoutheastAsiaCDN },
  { path: 'ai-solutions', Component: AISolutions },
  { path: 'dynamic-acceleration', Component: DynamicAcceleration },
  { path: 'static-acceleration', Component: StaticAcceleration },
  { path: 'live-streaming', Component: LiveStreaming },
  { path: 'security-cdn', Component: SecurityCDN },
  { path: 'anti-ddos', Component: AntiDDoS },
  { path: 'dns-security-service', Component: DNSSecurity },
  { path: 'bare-metal-server', Component: BareMetalServer },
  { path: 'ip-transit', Component: IPTransit },
  { path: 'mea-cdn', Component: MENACDN },
  { path: 'gaming', Component: Gaming },
  { path: 'solutions/media-entertainment', Component: MediaEntertainment },
  { path: 'e-commerce', Component: Ecommerce },
  { path: 'sports-broadcasting', Component: SportsBroadcasting },
  { path: 'telcos-isp-iigs', Component: Telecommunication },
  { path: 'e-learning', Component: ELearning },
  { path: 'worldcup-2026-streaming-solution', Component: WorldCup },

  // ── 文章页（技术博客类独立页面）──
  { path: 'what-is-adaptive-threat-modulation-and-why-is-it-key-for-ddos-resilience', Component: AdaptiveThreatModulation },
  { path: 'how-fog-computing-is-reinventing-the-iot-ecosystem-beyond-the-edge', Component: FogComputing },
  { path: 'why-vps-with-ssd-storage-is-becoming-the-default-choice-for-high-speed-applications', Component: VpsSsdStorage },
  { path: 'why-is-vps-the-preferred-choice-for-running-blockchain-nodes', Component: BlockchainVPS },
  { path: 'how-finops-is-reshaping-cost-management-in-vps-and-cloud-hosting', Component: FinOpsArticle },
  { path: 'what-are-the-implications-of-serverless-vps-in-the-context-of-modern-app-hosting', Component: ServerlessVPS },
  { path: 'what-are-the-emerging-standards-for-iot-device-authentication-in-smart-factories', Component: IoTAuthentication },
  { path: 'what-are-the-key-metrics-for-monitoring-vps-performance-under-load', Component: VpsMonitoring },
  { path: 'the-dark-side-of-ai-how-machine-learning-is-being-used-to-orchestrate-ddos-attacks', Component: DarkSideAI },
  { path: 'why-are-dns-amplification-attacks-still-a-major-threat-in-modern-ddos-campaigns', Component: DNSAmplificationAttacks },
  { path: 'what-are-the-key-differences-between-application-layer-and-network-layer-ddos-attacks', Component: ApplicationLayerNetworkLayerDDoS },
  { path: 'zero-trust-architecture-for-iot-devices-why-its-the-security-standard-of-the-future', Component: ZeroTrustIoT },
  { path: 'how-can-businesses-detect-and-defend-against-multi-vector-ddos-attacks', Component: MultiVectorDDoSAttacks },
  { path: 'why-are-bare-metal-servers-outperforming-traditional-vps-for-high-performance-applications', Component: BareMetalVPS },
  { path: 'ddos-attacks-on-edge-devices-why-even-small-devices-need-advanced-protection', Component: DDoSEdgeDevices },
  { path: 'how-can-businesses-prepare-a-preemptive-ddos-defense-strategy', Component: PreemptiveDDoSDefense },
  { path: 'how-can-edge-computing-and-vps-improve-iot-device-security', Component: EdgeComputingIoTSecurity },
  { path: 'whats-the-future-impact-of-quantum-computing-on-ddos-defense', Component: QuantumComputingDDoS },

  // ── 新闻硬编码页（旧 URL 保留）──
  { path: 'resources/news/edgenext-edge-cloud-servers-add-new-nodes-12-countries', Component: NewsArticleEdgeCloudServers },
  { path: 'edgenext-edge-cloud-servers-add-new-nodes-in-12-countries-accelerating-global-expansion-for-businesses', Component: NewsArticleEdgeCloudServers },
  { path: 'resources/news/edgenext-national-pulse-strategic-partnership', Component: NationalPulsePartnership },
  { path: 'edgenext-and-national-pulse-form-strategic-partnership-to-drive-innovation-and-market-expansion', Component: NationalPulsePartnership },
  { path: 'resources/news/edgenext-commercis-strategic-cloud-partnership-gitex', Component: CommercisPartnership },
  { path: 'edgenext-and-commercis-announce-strategic-cloud-partnership-at-gitex-for-iraq-expansion', Component: CommercisPartnership },
  { path: 'resources/news/edgenext-ajlan-bros-aj-cloud-launch-mena', Component: AjlanBrosPartnership },
  { path: 'edgenext-and-ajlan-bros-holding-group-announce-the-launch-of-aj-cloud-a-pioneering-cloud-solution-platform-for-the-mena-region', Component: AjlanBrosPartnership },
  { path: 'resources/news/edgenext-top-cloud-computing-provider', Component: TopCloudProvider },
  { path: 'edgenext-has-been-included-in-the-top-cloud-computing-service-provider-companies-by-software-testing-help', Component: TopCloudProvider },
  { path: 'resources/news/edgenext-top-ddos-protection-services', Component: TopDDoSProtection },
  { path: 'edgenext-is-listed-as-one-of-the-top-ddos-protection-services-by-software-testing-help', Component: TopDDoSProtection },
  { path: 'resources/news/edgenext-commercenext-ecommerce-growth-show', Component: CommerceNextEvent },
  { path: 'edgenext-in-commercenext-ecommerce-growth-show-2023', Component: CommerceNextEvent },
  { path: 'resources/news/edgenext-streaming-media-trendsetting-products', Component: StreamingMediaTrendsetting },
  { path: 'edgenext-unified-global-edge-cloud-platform-has-been-recognized-as-one-of-streaming-medias-trendsetting-products-and-services', Component: StreamingMediaTrendsetting },
  { path: 'resources/news/edgenext-jetstream-epeak-eo-events-china', Component: EOEventsPartnership },
  { path: 'edgenext-jet-stream-and-epeak-studio-event-technology-event-planning-livestream-production-marketing-agency-joined-forces-to-deliver-incredible-live-streaming-experience-for-the-entrepreneurs', Component: EOEventsPartnership },
  { path: 'resources/news/edgenext-chatlabs-vivatech-2023', Component: ChatLabsVivaTech },
  { path: 'edgenext-x-chatlabs-happy-hour-at-vivatech-2023', Component: ChatLabsVivaTech },
  { path: 'resources/news/edgenext-streaming-media-east-2023', Component: StreamingMediaEast },
  { path: 'edgenext-attended-streaming-media-east-2023', Component: StreamingMediaEast },
  { path: 'resources/news/edgenext-chatlabs-partnership-china-expansion', Component: ChatLabsPartnership },
  { path: 'edgenext-partners-with-chatlabs-to-offer-comprehensive-technology-solutions-for-content-delivery-and-social-media-expansion-into-china-and-beyond', Component: ChatLabsPartnership },
  { path: 'resources/news/edgenext-apac-new-office', Component: APACNewOffice },
  { path: 'edgenext-apac-team-has-a-new-office', Component: APACNewOffice },
  { path: 'resources/news/new-team-member-edgey', Component: NewTeamMemberEdgey },
  { path: 'new-team-member-has-arrived-edgey', Component: NewTeamMemberEdgey },
  { path: 'resources/news/edgenext-sigma-eurasia-dubai-2023', Component: SigmaEurasiaDubai },
  { path: 'edgenext-attended-sigma-eurasia-dubai-2023', Component: SigmaEurasiaDubai },
  { path: 'resources/news/adtiming-powered-by-edgenext', Component: AdTimingPartnership },
  { path: 'adtiming-is-now-powered-by-edgenext-edge-cloud-platform', Component: AdTimingPartnership },
  { path: 'resources/news/edgenext-ajlan-bros-joint-venture-mena', Component: AjlanBrosJointVenture },
  { path: 'edgenext-and-ajlan-bros-holding-group-ink-transformative-joint-venture-agreement-to-revolutionize-cdn-edge-cloud-and-cloud-security-in-the-mena-region', Component: AjlanBrosJointVenture },
  { path: 'resources/news/edgenext-safenames-partnership', Component: SafenamesPartnership },
  { path: 'edgenext-and-safenames-partner-to-enhance-website-and-app-performance-security-and-edge-computing', Component: SafenamesPartnership },
  { path: 'resources/news/edgenext-new-pops-middle-east-sea-latam', Component: NewSelfBuiltPoPs },
  { path: 'edgenext-new-self-built-pops-in-the-middle-east-southeast-asia-and-latin-america-are-online-now', Component: NewSelfBuiltPoPs },

  // ── 动态新闻路由 ──
  {
    path: 'resources/news/:slug',
    Component: NewsDetail,
    getStaticPaths: () => getAllNews().map((n) => `resources/news/${n.slug}`)
  },

  // ── Blog ──
  { path: 'blog', Component: Blog },
  { path: 'resources/blog', Component: Blog },
  {
    path: 'resources/blog/:slug',
    Component: BlogDetail,
    getStaticPaths: () => getAllPosts().map((p) => `resources/blog/${p.slug}`)
  },

  // ── Newsroom ──
  { path: 'newsroom', Component: News },

  // ── Case Studies ──
  { path: 'case-study', Component: CaseStudies },
  {
    path: 'case-study/:slug',
    Component: CaseStudyDetail,
    getStaticPaths: () => caseStudies.map((c) => `case-study/${c.slug}`)
  },

  // ── 公司页 ──
  { path: 'about-us', Component: Company },
  { path: 'network', Component: GlobalNetwork },
  { path: 'career', Component: Careers },
  { path: 'contact-us', Component: ContactUs },
  { path: 'partners', Component: Partners },
  { path: 'traffic-partner', Component: TrafficPartners },
  { path: 'traffic-contact-us', Component: TrafficContactUs },
  { path: 'thank-you', Component: ThankYou },

  // ── 法律页 ──
  { path: 'legal', Component: Legal },
  { path: 'legal/trust', Component: Legal },
  { path: 'legalV2', Component: LegalV2 },
  { path: 'LegalDocumentation', Component: () => <Navigate to="/legal" replace /> },

  // ── 文档 ──
  { path: 'resources/documentation/china-icp-license', Component: ChinaICPLicense },
  { path: 'icp-license', Component: ChinaICPLicense },

  // ── 重定向 ──
  { path: 'pricing', Component: () => <Navigate to="/" replace /> },

  // ── 旧版 URL 兼容（运行时处理，不预渲染）──
  { path: ':slug', Component: LegacyRedirect },

  // ── 404 ──
  { path: '*', Component: NotFound }]

}];