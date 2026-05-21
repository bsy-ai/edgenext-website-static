import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import {
  ArrowRight,
  Zap,
  Globe,
  Trophy,
  Play,
  Settings,
  Film,
  Shield,
  Check,
  Newspaper,
  Tv,
  Gamepad2,
  Radio,
  Lock,
  Gauge,
  Languages,
  BadgeCheck,
  Clock,
  Layers,
  MonitorPlay,
  Megaphone
} from 'lucide-react';

type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const SEO_TITLE = 'World Cup 2026 Streaming Readiness | EdgeNext Live Streaming Solution';
const SEO_DESCRIPTION =
  'Prepare your live streaming platform for World Cup 2026 traffic with EdgeNext. Support low-latency playback, 4K/8K transcoding, DRM, SCTE-35 ad insertion, multi-language audio, time-shift recording, and global delivery.';

const TOURNAMENT_START = new Date('2026-06-11T19:00:00Z');
const getProofPoints = () => [
  {
    value: '1,500+',
    label: 'Global PoPs'
  },
  {
    value: '290+',
    label: 'Cities Covered'
  },
  {
    value: '60+',
    label: 'Countries & Regions'
  },
  {
    value: '90+ Tbps',
    label: 'Network Capacity'
  },
  {
    value: '760B+',
    label: 'Daily Requests'
  },
  {
    value: '<30 ms',
    label: 'Response Time'
  }
];

const getCapabilities = () => ({
  delivery: {
    label: 'Live Delivery',
    title: 'Deliver one source stream across every screen.',
    description:
      'Support high-pressure sports streaming with flexible protocol support and single-input, multi-output delivery for web, mobile, H5, native apps, and connected viewing environments.',
    points: [
      'RTMP/RTMPS push and RTMP, FLV, HLS, DASH pull support',
      'Single-input, multi-output stream conversion',
      'End-to-end workflow across Media Link, Media Recode, Media Slice, Media Assemble, and Media Delivery'
    ],
    Icon: Play
  },
  quality: {
    label: 'Premium Quality',
    title: 'Support premium match viewing experiences.',
    description:
      'Major football audiences expect broadcast-grade quality across regions, devices, and network conditions. EdgeNext supports premium transcoding and adaptive playback workflows for high-value sports content.',
    points: [
      'H.264/H.265 encoding support',
      'Adaptive bitrate based on real-time network conditions',
      '4K/8K, Dolby 5.1, and HDR10.'
    ],
    Icon: Settings
  },
  monetization: {
    label: 'Ad & Channel Assembly',
    title: 'Build monetizable sports streaming workflows.',
    description:
      'Sports events are not only live broadcasts. Broadcasters and OTT platforms need ad insertion, FAST channel assembly, multilingual coverage, replay, and post-match content packaging.',
    points: [
      'SCTE-35 ad insertion for live sports monetization',
      'FAST channel assembly through Media Assemble',
      'Multi-language audio tracks for international football audiences'
    ],
    Icon: Megaphone
  },
  security: {
    label: 'Content Protection',
    title: 'Protect premium sports rights and live traffic.',
    description:
      'High-profile matches attract DDoS attacks, bot traffic, unauthorized access, stream abuse, and content leakage. EdgeNext supports content protection beyond basic authentication.',
    points: [
      'DRM support with FairPlay, PlayReady, Widevine, and multi-key DRM via CPIX/SPEKE V2',
      'DRM support and Multi-Layer Anti-Hotlinking',
      'DDoS mitigation, URL authentication, Referer anti-leeching, IP controls, and stream intervention'
    ],
    Icon: Shield
  },
  operations: {
    label: 'Live-to-VOD',
    title: 'Turn match moments into replay value.',
    description:
      'After the match, demand shifts to highlights, replays, short clips, and VOD. EdgeNext supports content operations beyond live delivery for global time-zone coverage.',
    points: [
      'Time-shift recording and catch-up for cross-time-zone viewing',
      'Recording, screenshotting, and dynamic watermarking',
      'Real-time metrics and logs for operational visibility'
    ],
    Icon: Film
  }
}) satisfies Record<
  string,
  {
    label: string;
    title: string;
    description: string;
    points: string[];
    Icon: React.ElementType;
  }
>;

const getArchitectureSteps = () => ({
  medialink: {
    label: 'Media Link',
    genericLabel: 'Ingest',
    title: 'Receive and manage live source streams',
    description:
      'Media Link supports live source connection, stream ingest, and source handling so sports platforms can bring match feeds into a stable delivery workflow.',
    Icon: Radio
  },
  mediarecode: {
    label: 'Media Recode',
    genericLabel: 'Transcode',
    title: 'Transcode and adapt for every device',
    description:
      'Media Recode supports format conversion, H.264/H.265 encoding, adaptive bitrate output, and premium-quality workflows including 4K/8K, Dolby 5.1, and HDR10.',
    Icon: Settings
  },
  mediaslice: {
    label: 'Media Slice',
    genericLabel: 'Slice',
    title: 'Prepare streams for scalable playback',
    description:
      'Media Slice helps prepare segmented live streams for stable playback, adaptive delivery, and large-scale sports audience distribution.',
    Icon: Layers
  },
  mediaassemble: {
    label: 'Media Assemble',
    genericLabel: 'Assemble',
    title: 'Assemble channels, ads, and replay experiences',
    description:
      'Media Assemble supports SCTE-35 ad insertion, FAST channel assembly, replay packaging, and content workflows for monetizable sports streaming.',
    Icon: MonitorPlay
  },
  mediadelivery: {
    label: 'Media Delivery',
    genericLabel: 'Deliver',
    title: 'Deliver live, replay, and VOD globally',
    description:
      'Media Delivery distributes live content through EdgeNext’s global edge network to support low-latency viewing, traffic surges, regional optimization, and protected delivery.',
    Icon: Globe
  }
}) satisfies Record<
  string,
  {
    label: string;
    genericLabel: string;
    title: string;
    description: string;
    Icon: React.ElementType;
  }
>;

type CapabilityKey = keyof ReturnType<typeof getCapabilities>;
type ArchitectureKey = keyof ReturnType<typeof getArchitectureSteps>;

const DEFAULT_CAPABILITY = 'delivery' as CapabilityKey;
const DEFAULT_ARCHITECTURE = 'mediadelivery' as ArchitectureKey;

const getTournamentMoments = () => [
  {
    title: 'Pre-Match Access',
    label: 'Before kickoff',
    description:
      'Fans open apps, authenticate accounts, check schedules, and start preview streams before the match begins.',
    Icon: Radio
  },
  {
    title: 'Live Match Surge',
    label: 'During peak moments',
    description:
      'Goals, penalties, VAR moments, and extra time can trigger sudden concurrency spikes across regions and devices.',
    Icon: Gauge
  },
  {
    title: 'Multi-Match Viewing',
    label: 'Across time zones',
    description:
      'Group-stage viewing creates sustained demand across live streams, sports apps, multi-language feeds, and second-screen experiences.',
    Icon: Globe
  },
  {
    title: 'Replay & Catch-Up',
    label: 'After the whistle',
    description:
      'Demand shifts to short clips, replays, highlights, time-shift viewing, catch-up, and VOD libraries immediately after key moments.',
    Icon: Film
  }
];

const getMatchWorkflowBlocks = () => [
  {
    title: 'Before the Match',
    items: ['Media Link ingest readiness', 'Origin and routing checks', 'App access and authentication traffic']
  },
  {
    title: 'During the Match',
    items: ['Low-latency playback', 'Adaptive bitrate control', 'DRM and DDoS protection']
  },
  {
    title: 'After the Match',
    items: ['Time-shift recording', 'Catch-up and highlights', 'Live-to-VOD workflows']
  }
];

const getPremiumCapabilities = () => [
  {
    title: 'Premium Rights Protection',
    description:
      'Support DRM workflows including FairPlay, PlayReady, Widevine, and multi-key DRM via CPIX/SPEKE V2.',
    Icon: Lock
  },
  {
    title: 'SCTE-35 Ad Insertion',
    description:
      'Enable ad signaling and sports monetization workflows for broadcasters and OTT platforms.',
    Icon: Megaphone
  },
  {
    title: 'FAST Channel Assembly',
    description:
      'Package live, replay, and programmed sports content into assembled channel experiences through Media Assemble.',
    Icon: Layers
  },
  {
    title: 'Multi-Language Audio',
    description:
      'Support international football audiences with multilingual audio track experiences.',
    Icon: Languages
  },
  {
    title: '4K/8K + HDR10',
    description:
      'Support premium viewing quality with 4K/8K, Dolby 5.1, and HDR10-ready workflows.',
    Icon: BadgeCheck
  },
  {
    title: 'Time-Shift & Catch-Up',
    description:
      'Support replay, time-shift recording, and catch-up workflows for global time-zone viewing.',
    Icon: Clock
  }
];

const getAudienceCards = () => [
  {
    title: 'Broadcasters & OTT Platforms',
    description:
      'Deliver reliable live sports streams across web, mobile, smart TV, and app environments.',
    Icon: Tv
  },
  {
    title: 'Sports Media Platforms',
    description:
      'Support live coverage, match centers, short clips, real-time updates, multi-language content, and replay traffic.',
    Icon: Newspaper
  },
  {
    title: 'Fan Apps & Second Screen',
    description:
      'Power alerts, companion viewing, interaction, and real-time engagement during match moments.',
    Icon: Gamepad2
  },
  {
    title: 'Rights Holders & Event Platforms',
    description:
      'Protect premium content, control access, monetize live inventory, and extend value from live stream to replay and VOD.',
    Icon: Trophy
  }
];

const getRegionalCards = () => [
  {
    region: 'North America',
    description:
      'The 2026 tournament is hosted across the USA, Canada, and Mexico, making North America the center of match-day traffic, venue-driven digital activity, and regional live streaming demand.'
  },
  {
    region: 'Mainland China',
    description:
      'China has one of the world’s largest football viewing audiences. EdgeNext’s dense China PoP coverage and ICP-licensed cross-border delivery support reliable access for global sports platforms serving Mainland China viewers.'
  },
  {
    region: 'Asia',
    description:
      'Mobile-first audiences, large-scale app traffic, and highly variable last-mile networks make adaptive bitrate, multi-language audio, and regional edge delivery essential.'
  },
  {
    region: 'MENA',
    description:
      'Fast-growing digital sports audiences require low-latency live delivery, regional routing, premium playback quality, and strong performance across major urban markets.'
  },
  {
    region: 'Africa',
    description:
      'Young mobile audiences and diverse network conditions make lightweight playback, weak-network optimization, and edge delivery especially important.'
  },
  {
    region: 'Latin America',
    description:
      'Passionate football audiences create intense live viewing peaks, replay traffic, and demand for stable multi-device streaming.'
  }
];

const getGlobalReachHighlights = () => ({
  items: [
    'Support host-market traffic across the USA, Canada, and Mexico.',
    'Reach Mainland China viewers with ICP-licensed cross-border delivery.',
    'Bring live content closer to viewers through distributed edge delivery.'
  ]
});

const getRelatedResources = () => [
  {
    label: 'Solution',
    title: 'Live Streaming Without Limits',
    description:
      'Explore EdgeNext’s complete live streaming capabilities for global scale and real-time viewing.',
    href: '/live-streaming',
    link: 'View solution',
    Icon: Play
  },
  {
    label: 'Industry',
    title: 'Media & Entertainment',
    description:
      'See how EdgeNext supports video platforms, OTT services, live content, and digital media experiences.',
    href: '/solutions/media-entertainment',
    link: 'Explore industry',
    Icon: Tv
  },
  {
    label: 'Security',
    title: 'Secure High-Traffic Digital Events',
    description:
      'Protect applications, streams, and user experiences during high-visibility traffic moments.',
    href: '/contact-us',
    link: 'Talk to our team',
    Icon: Shield
  }
];

const WorldCup: React.FC = () => {
  const getCountdown = (): CountdownValue => {
    const now = new Date();
    const diff = Math.max(TOURNAMENT_START.getTime() - now.getTime(), 0);

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    };
  };

  const [countdown, setCountdown] = useState<CountdownValue>(getCountdown());
  const [activeCapability, setActiveCapability] = useState<CapabilityKey>(DEFAULT_CAPABILITY);
  const [activeArchitecture, setActiveArchitecture] = useState<ArchitectureKey>(DEFAULT_ARCHITECTURE);

  useEffect(() => {
    document.title = SEO_TITLE;

    const updateMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    const updatePropertyMeta = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }

      tag.setAttribute('content', content);
    };

    updateMeta('description', SEO_DESCRIPTION);
    updateMeta(
      'keywords',
      'World Cup streaming, live sports streaming, sports OTT delivery, live streaming CDN, low latency streaming, adaptive bitrate streaming, DRM sports streaming, SCTE-35 ad insertion, FAST channel assembly, multi-language audio, 4K streaming, HDR10 streaming, DDoS protection for live events, live-to-VOD, time-shift recording, catch-up TV, EdgeNext'
    );

    updatePropertyMeta('og:title', SEO_TITLE);
    updatePropertyMeta('og:description', SEO_DESCRIPTION);
    updatePropertyMeta('og:type', 'website');

    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const formatNumber = (value: number) => String(value).padStart(2, '0');

  const proofPoints = getProofPoints();
  const capabilities = getCapabilities();
  const architectureSteps = getArchitectureSteps();
  const tournamentMoments = getTournamentMoments();
  const matchWorkflowBlocks = getMatchWorkflowBlocks();
  const premiumCapabilities = getPremiumCapabilities();
  const audienceCards = getAudienceCards();
  const regionalCards = getRegionalCards();
  const globalReachHighlights = getGlobalReachHighlights();
  const relatedResources = getRelatedResources();

  const activeCapabilityData = capabilities[activeCapability];
  const ActiveCapabilityIcon = activeCapabilityData.Icon;

  const activeArchitectureData = architectureSteps[activeArchitecture];
  const ActiveArchitectureIcon = activeArchitectureData.Icon;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <style>
          {`
            .wc-silver-grid {
              background-image:
                linear-gradient(rgba(14,182,35,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(14,182,35,0.06) 1px, transparent 1px);
              background-size: 42px 42px;
            }

            .wc-dark-grid {
              background-image:
                linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
              background-size: 42px 42px;
            }

            .wc-signal-line {
              background: linear-gradient(90deg, transparent, #0EB623, #F5B849, transparent);
              background-size: 220% 100%;
              animation: wcSignalMove 4s linear infinite;
            }

            .wc-ball-run {
              animation: wcBallRun 5.5s ease-in-out infinite;
            }

            .wc-pulse-ring {
              animation: wcPulseRing 2.8s ease-in-out infinite;
            }

            .wc-float {
              animation: wcFloat 6s ease-in-out infinite;
            }

            .wc-shimmer {
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
              background-size: 220% 100%;
              animation: wcShimmer 4.5s linear infinite;
            }

            .wc-architecture-dot {
              animation: wcArchitectureDot 7s linear infinite;
            }

            .wc-architecture-dot-delay-1 {
              animation: wcArchitectureDot 7s linear infinite;
              animation-delay: 1.4s;
            }

            .wc-architecture-dot-delay-2 {
              animation: wcArchitectureDot 7s linear infinite;
              animation-delay: 2.8s;
            }

            .wc-pulse-soft {
              animation: wcPulseSoft 3.2s ease-in-out infinite;
            }

            @keyframes wcSignalMove {
              from { background-position: 0% 50%; }
              to { background-position: 220% 50%; }
            }

            @keyframes wcBallRun {
              0% { transform: translate(0px, 0px) scale(1); opacity: 0.75; }
              20% { transform: translate(82px, -34px) scale(1.08); opacity: 1; }
              45% { transform: translate(180px, 14px) scale(0.95); opacity: 0.95; }
              70% { transform: translate(280px, -42px) scale(1.1); opacity: 1; }
              100% { transform: translate(368px, 0px) scale(1); opacity: 0.75; }
            }

            @keyframes wcPulseRing {
              0%, 100% { transform: scale(1); opacity: 0.45; }
              50% { transform: scale(1.18); opacity: 0.12; }
            }

            @keyframes wcFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }

            @keyframes wcShimmer {
              from { background-position: 0% 50%; }
              to { background-position: 220% 50%; }
            }

            @keyframes wcArchitectureDot {
              0% { left: 6%; opacity: 0; transform: translateY(-50%) scale(0.75); }
              8% { opacity: 1; }
              45% { opacity: 1; transform: translateY(-50%) scale(1); }
              92% { opacity: 1; }
              100% { left: 92%; opacity: 0; transform: translateY(-50%) scale(0.75); }
            }

            @keyframes wcPulseSoft {
              0%, 100% { transform: scale(1); opacity: 0.35; }
              50% { transform: scale(1.12); opacity: 0.12; }
            }

            @media (prefers-reduced-motion: reduce) {
              .wc-signal-line,
              .wc-ball-run,
              .wc-pulse-ring,
              .wc-float,
              .wc-shimmer,
              .wc-architecture-dot,
              .wc-architecture-dot-delay-1,
              .wc-architecture-dot-delay-2,
              .wc-pulse-soft {
                animation: none;
              }
            }
          `}
        </style>

        {/* Hero Section */}
        <section className="relative pt-20 pb-20 md:pb-28 overflow-hidden bg-gradient-to-br from-gray-950 via-[#132117] to-[#0EB623] text-white">
          <div className="absolute inset-0 wc-dark-grid opacity-30"></div>
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0EB623]/28 blur-3xl"></div>
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#F5B849]/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(14,182,35,0.28),transparent_34%)]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <h1 className="text-[30px] md:text-[44px] lg:text-[48px] font-bold mb-4 md:mb-6 leading-[1.12] text-white">
                  <span>When the World Watches,</span>
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8CEB54] via-white to-[#F5B849]">
                    Your Stream Has to Hold
                  </span>
                </h1>

                <p className="text-base md:text-lg text-white/82 mb-6 md:mb-8 max-w-3xl font-light leading-relaxed">
                  Global football tournaments create some of the most demanding live streaming moments of the year. EdgeNext helps broadcasters, OTT platforms, sports media, and fan apps deliver low-latency playback, premium-quality streams, massive concurrency, and secure live services from source to every fan screen.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 min-w-[180px] bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300 group whitespace-nowrap"
                  >
                    Contact Us
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                  </a>

                  <a
                    href="/live-streaming"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 min-w-[280px] bg-white/10 text-white border border-white/20 rounded-xl font-medium hover:bg-white/15 transition-all duration-300 group whitespace-nowrap"
                  >
                    View Live Streaming Solution
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative wc-float">
                  <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#0EB623]/30 via-transparent to-[#F5B849]/24 blur-2xl"></div>

                  <div className="relative rounded-[2rem] bg-white/9 backdrop-blur-2xl border border-white/14 shadow-[0_32px_100px_rgba(0,0,0,0.25)] p-5 md:p-7 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px wc-shimmer"></div>
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#0EB623]/20 blur-3xl"></div>
                    <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-[#F5B849]/16 blur-3xl"></div>

                    <div className="relative">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">
                        <div>
                          <p className="text-[#F5B849] text-sm font-medium mb-2">
                            Live Streaming Arena
                          </p>
                          <h2 className="text-2xl md:text-3xl font-medium text-white leading-tight">
                            From source signal to every fan screen.
                          </h2>
                        </div>

                        <div className="grid grid-cols-4 gap-2 md:min-w-[280px]">
                          {[
                            { value: countdown.days, label: 'Days' },
                            { value: countdown.hours, label: 'Hours' },
                            { value: countdown.minutes, label: 'Mins' },
                            { value: countdown.seconds, label: 'Secs' }
                          ].map((item) => (
                            <div
                              key={item.label}
                              className="rounded-2xl bg-gray-950/70 border border-white/10 p-3 text-center shadow-sm"
                            >
                              <div className="text-xl md:text-2xl font-bold text-white mb-1">
                                {item.label === 'Days' ? item.value : formatNumber(item.value)}
                              </div>
                              <div className="text-[10px] uppercase tracking-wide text-gray-400">
                                {item.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative rounded-[2rem] bg-gray-950 border border-gray-900 p-5 md:p-6 overflow-hidden shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                        <div className="absolute inset-0 wc-dark-grid opacity-45"></div>
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F5B849]/20 blur-3xl"></div>
                        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#0EB623]/20 blur-3xl"></div>

                        <div className="relative h-[350px] rounded-3xl border border-[#0EB623]/35 bg-gradient-to-br from-[#061309] via-[#0B1710] to-[#151407] overflow-hidden">
                          <div className="absolute inset-6 rounded-3xl border border-white/10"></div>
                          <div className="absolute left-1/2 top-6 bottom-6 w-px bg-white/10"></div>
                          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"></div>
                          <div className="absolute left-6 top-1/2 h-28 w-20 -translate-y-1/2 rounded-r-3xl border border-white/10 border-l-0"></div>
                          <div className="absolute right-6 top-1/2 h-28 w-20 -translate-y-1/2 rounded-l-3xl border border-white/10 border-r-0"></div>

                          <div className="absolute left-[54px] right-[54px] top-[174px] h-px wc-signal-line"></div>
                          <div className="absolute left-[50px] top-[162px] h-7 w-7 rounded-full bg-[#0EB623] shadow-[0_0_26px_rgba(14,182,35,0.85)] wc-ball-run"></div>
                          <div className="absolute left-[47px] top-[159px] h-12 w-12 rounded-full border border-[#0EB623]/40 wc-pulse-ring"></div>

                          {[
                            {
                              className: 'left-5 top-5',
                              label: 'Media Link',
                              value: 'Live Ingest'
                            },
                            {
                              className: 'right-5 top-5',
                              label: 'Media Recode',
                              value: '4K/8K • HDR10'
                            },
                            {
                              className: 'left-5 bottom-5',
                              label: 'Media Assemble',
                              value: 'SCTE-35 • FAST'
                            },
                            {
                              className: 'right-5 bottom-5',
                              label: 'Media Delivery',
                              value: 'Global Edge'
                            }
                          ].map((node) => (
                            <div
                              key={node.label}
                              className={`absolute ${node.className} rounded-2xl bg-gray-950/88 border border-white/10 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm`}
                            >
                              <p className="text-[11px] uppercase tracking-wide text-[#F5B849] mb-1">
                                {node.label}
                              </p>
                              <p className="text-sm font-medium text-white">
                                {node.value}
                              </p>
                            </div>
                          ))}

                          <div className="absolute left-1/2 top-1/2 w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] bg-white/10 border border-white/15 backdrop-blur-md p-5 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                            <div className="w-12 h-12 rounded-2xl bg-[#0EB623]/15 flex items-center justify-center mx-auto mb-3">
                              <Trophy className="text-[#F5B849]" size={24} />
                            </div>
                            <p className="text-white font-medium">EdgeNext Streaming Core</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tournament Streaming Playbook */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.045)_0%,transparent_68%)]"></div>

          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-4">
                <div className="text-[#0EB623] text-sm font-medium mb-3">
                  Tournament streaming playbook
                </div>
                <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900 leading-tight">
                  Multiple traffic waves. One delivery strategy.
                </h2>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                  Major football tournaments create multiple traffic patterns, not one single peak. Platforms need to prepare for pre-match access, live viewing spikes, regional concurrency, second-screen activity, ad inventory, multi-language feeds, and post-match replay demand.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="relative rounded-[2rem] bg-gradient-to-br from-[#F7FAF5] via-white to-[#F4F0E4] border border-gray-100 p-5 md:p-7 shadow-[0_24px_80px_rgba(31,55,35,0.10)] overflow-hidden">
                  <div className="absolute inset-0 wc-silver-grid opacity-70"></div>

                  <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">
                    {tournamentMoments.map((item, index) => {
                      const Icon = item.Icon;

                      return (
                        <article
                          key={item.title}
                          className="group rounded-2xl bg-white/88 border border-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                        >
                          <div className="w-12 h-12 rounded-2xl bg-[#0EB623]/10 flex items-center justify-center mb-5">
                            <Icon className="text-[#0EB623]" size={22} />
                          </div>
                          <p className="text-[#0EB623] text-sm font-medium mb-2">
                            {item.label}
                          </p>
                          <h3 className="text-xl font-medium text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="mt-5 text-4xl font-bold text-[#0EB623]/10">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </article>
                      );
                    })}
                  </div>

                  <div className="relative mt-6 rounded-3xl bg-gray-950 text-white border border-gray-900 p-5 md:p-6 shadow-[0_22px_70px_rgba(0,0,0,0.18)] overflow-hidden">
                    <div className="absolute inset-0 wc-dark-grid opacity-35"></div>
                    <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#F5B849]/14 blur-3xl"></div>

                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
                      {matchWorkflowBlocks.map((block) => (
                        <div key={block.title}>
                          <h4 className="text-white font-medium mb-4">
                            {block.title}
                          </h4>
                          <div className="space-y-3">
                            {block.items.map((point) => (
                              <div key={point} className="flex items-start gap-3">
                                <span className="mt-1 w-5 h-5 rounded-full bg-[#0EB623]/20 flex items-center justify-center flex-shrink-0">
                                  <Check className="w-3.5 h-3.5 text-[#0EB623]" />
                                </span>
                                <p className="text-sm text-gray-300">
                                  {point}
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
            </div>
          </div>
        </section>

        {/* Proof Points */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAF7] to-white relative overflow-hidden">
          <div className="absolute inset-0 wc-silver-grid opacity-55"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-3">Network proof points</div>
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">
                Built for Global Match-Day Traffic
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                For high-stakes sports events, performance claims need proof. EdgeNext combines global edge scale, high network capacity, massive daily request handling, and low response time to support traffic-heavy live experiences.
              </p>
            </div>

            <div className="relative rounded-[2rem] bg-gray-950 text-white p-6 md:p-8 overflow-hidden shadow-[0_24px_80px_rgba(31,55,35,0.18)]">
              <div className="absolute inset-0 wc-dark-grid opacity-30"></div>
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0EB623]/22 blur-3xl"></div>
              <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F5B849]/16 blur-3xl"></div>

              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {proofPoints.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-white/8 border border-white/10 p-5 text-center"
                  >
                    <p className="text-2xl md:text-3xl font-bold text-white">
                      {item.value}
                    </p>
                    <p className="text-sm text-gray-300 mt-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 rounded-2xl bg-white/8 border border-white/10 p-5 flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0EB623]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-[#0EB623]" size={24} />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  For interactive and lightweight live scenarios, EdgeNext can support ultra-low-latency experiences with lightweight SDK capabilities designed for sub-150 ms end-to-end latency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capability Engine */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.045)_0%,transparent_70%)]"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-3">Premium sports capabilities</div>
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">
                A Complete Streaming Engine for Match-Day Scale
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                EdgeNext supports the full delivery chain for premium sports events — from stream ingest and transcoding to DRM, ad insertion, multi-language audio, time-shift viewing, global acceleration, and replay workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5">
                <div className="rounded-[2rem] bg-white border border-gray-100 shadow-[0_24px_80px_rgba(31,55,35,0.10)] p-5 md:p-6 h-full">
                  <div className="grid grid-cols-1 gap-3">
                    {(Object.keys(capabilities) as CapabilityKey[]).map((key) => {
                      const item = capabilities[key];
                      const Icon = item.Icon;
                      const isActive = activeCapability === key;

                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setActiveCapability(key)}
                          className={`text-left rounded-2xl p-5 border transition-all duration-300 ${
                            isActive
                              ? 'bg-gray-950 text-white border-gray-950 shadow-lg'
                              : 'bg-[#F8FAF7] text-gray-900 border-gray-100 hover:bg-white hover:shadow-md'
                          }`}
                          aria-pressed={isActive}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                isActive ? 'bg-[#0EB623]/20' : 'bg-[#0EB623]/10'
                              }`}
                            >
                              <Icon className="text-[#0EB623]" size={22} />
                            </div>
                            <div>
                              <p className={`text-sm font-medium mb-1 ${isActive ? 'text-[#F5B849]' : 'text-[#0EB623]'}`}>
                                {item.label}
                              </p>
                              <h3 className="text-lg font-medium">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative rounded-[2rem] bg-gradient-to-br from-white via-[#F8FAF7] to-[#F3F0E6] border border-white shadow-[0_24px_80px_rgba(31,55,35,0.10)] p-6 md:p-8 h-full overflow-hidden">
                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0EB623]/16 blur-3xl"></div>
                  <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#F5B849]/18 blur-3xl"></div>

                  <div className="relative">
                    <div className="flex items-start gap-5 mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#0EB623]/10 flex items-center justify-center flex-shrink-0">
                        <ActiveCapabilityIcon className="text-[#0EB623]" size={30} />
                      </div>
                      <div>
                        <p className="text-[#0EB623] text-sm font-medium mb-2">
                          {activeCapabilityData.label}
                        </p>
                        <h3 className="text-2xl md:text-4xl font-medium text-gray-900 mb-4 leading-tight">
                          {activeCapabilityData.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {activeCapabilityData.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {activeCapabilityData.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl bg-white/85 border border-white p-4 shadow-sm flex items-start gap-3"
                        >
                          <Check className="text-[#0EB623] mt-0.5 flex-shrink-0" size={18} />
                          <p className="text-gray-700">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumCapabilities.map((item) => {
                const Icon = item.Icon;

                return (
                  <article
                    key={item.title}
                    className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#0EB623]" size={24} />
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Animated Architecture */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAF7] to-white relative overflow-hidden">
          <div className="absolute inset-0 wc-silver-grid opacity-55"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-3">Official live streaming modules</div>
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">
                Media Link to Media Delivery
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                EdgeNext’s live streaming product maps to a five-module pipeline: Media Link, Media Recode, Media Slice, Media Assemble, and Media Delivery. Each module supports a specific part of the live sports workflow.
              </p>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#F8FAF7] via-white to-[#F4F0E4] border border-gray-100 p-5 md:p-8 shadow-[0_24px_80px_rgba(31,55,35,0.10)] overflow-hidden relative">
              <div className="absolute inset-0 wc-silver-grid opacity-60"></div>
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0EB623]/14 blur-3xl"></div>
              <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#F5B849]/16 blur-3xl"></div>

              <div className="relative">
                <div className="hidden lg:block absolute left-[7%] right-[7%] top-[96px] h-px bg-gradient-to-r from-[#0EB623]/25 via-[#F5B849]/40 to-[#0EB623]/25"></div>
                <div className="hidden lg:block absolute top-[96px] h-3 w-3 rounded-full bg-[#0EB623] shadow-[0_0_20px_rgba(14,182,35,0.75)] wc-architecture-dot"></div>
                <div className="hidden lg:block absolute top-[96px] h-3 w-3 rounded-full bg-[#F5B849] shadow-[0_0_20px_rgba(245,184,73,0.75)] wc-architecture-dot-delay-1"></div>
                <div className="hidden lg:block absolute top-[96px] h-3 w-3 rounded-full bg-[#0EB623] shadow-[0_0_20px_rgba(14,182,35,0.75)] wc-architecture-dot-delay-2"></div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {(Object.keys(architectureSteps) as ArchitectureKey[]).map((key, index) => {
                    const step = architectureSteps[key];
                    const Icon = step.Icon;
                    const isActive = activeArchitecture === key;

                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveArchitecture(key)}
                        aria-pressed={isActive}
                        className={`relative text-left rounded-2xl p-5 border transition-all duration-300 min-h-[210px] ${
                          isActive
                            ? 'bg-gray-950 text-white border-gray-950 shadow-xl'
                            : 'bg-white/88 text-gray-900 border-white hover:shadow-lg'
                        }`}
                      >
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 relative ${
                            isActive ? 'bg-[#0EB623]/20' : 'bg-[#0EB623]/10'
                          }`}
                        >
                          {isActive && (
                            <span className="absolute inset-0 rounded-xl bg-[#0EB623]/30 wc-pulse-soft"></span>
                          )}
                          <Icon className="text-[#0EB623] relative" size={22} />
                        </div>
                        <p className={`text-sm font-medium mb-2 ${isActive ? 'text-[#F5B849]' : 'text-[#0EB623]'}`}>
                          Step {index + 1}
                        </p>
                        <h3 className="text-lg font-medium leading-snug mb-2">
                          {step.label}
                        </h3>
                        <p className={`text-xs font-medium mb-3 ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                          {step.genericLabel}
                        </p>
                        <p className={`text-sm leading-relaxed ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                          {step.title}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-[2rem] bg-gray-950 text-white p-6 md:p-8 shadow-[0_22px_70px_rgba(0,0,0,0.18)] relative overflow-hidden">
                  <div className="absolute inset-0 wc-dark-grid opacity-30"></div>
                  <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#F5B849]/14 blur-3xl"></div>
                  <div className="absolute -left-20 bottom-0 h-52 w-52 rounded-full bg-[#0EB623]/16 blur-3xl"></div>

                  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#0EB623]/20 flex items-center justify-center mb-6">
                        <ActiveArchitectureIcon className="text-[#0EB623]" size={28} />
                      </div>

                      <p className="text-[#F5B849] text-sm font-medium mb-2">
                        {activeArchitectureData.label}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-medium mb-4">
                        {activeArchitectureData.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-8">
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {activeArchitectureData.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audience Journey */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,182,35,0.045)_0%,transparent_70%)]"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-[#0EB623] text-sm font-medium mb-3">Sports media journey</div>
              <h2 className="text-3xl md:text-5xl font-medium mb-4 text-gray-900">
                One Match Becomes a Full Digital Experience
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light">
                The opportunity is not only the live match. Sports audiences move from broadcast to fan apps, highlight clips, multi-language commentary, ad-supported channels, catch-up viewing, and replay libraries.
              </p>
            </div>

            <div className="relative rounded-[2rem] bg-white/88 border border-white p-5 md:p-8 shadow-[0_24px_80px_rgba(31,55,35,0.10)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-4">
                  <div className="rounded-[2rem] bg-gradient-to-br from-gray-950 via-[#102115] to-[#0EB623] text-white p-7 shadow-xl">
                    <div className="w-14 h-14 rounded-2xl bg-white/12 flex items-center justify-center mb-6">
                      <Play className="text-[#F5B849]" size={28} />
                    </div>
                    <p className="text-[#F5B849] text-sm font-medium mb-2">Live Match Core</p>
                    <h3 className="text-2xl md:text-3xl font-medium mb-4">
                      Deliver the match. Monetize and extend the moment.
                    </h3>
                    <p className="text-white/88 leading-relaxed">
                      EdgeNext helps platforms serve the live event, protect premium content, insert monetization workflows, and turn matches into clips, replays, app engagement, and VOD experiences.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {audienceCards.map((item) => {
                    const Icon = item.Icon;

                    return (
                      <article
                        key={item.title}
                        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                      >
                        <div className="flex gap-4">
                          <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Icon className="text-[#0EB623]" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-medium mb-3 text-gray-900">
                              {item.title}
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8FAF7] to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-4">
                <div className="text-[#0EB623] text-sm font-medium mb-3">
                  Global reach for sports audiences
                </div>
                <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900 leading-tight">
                  Football is global. Delivery conditions are local.
                </h2>
                <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed mb-8">
                  The 2026 tournament is hosted in North America, but the audience is worldwide. EdgeNext helps platforms adapt live delivery strategies for host markets, Mainland China, and high-growth sports regions.
                </p>

                <div className="space-y-4">
                  {globalReachHighlights.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 rounded-full bg-[#0EB623]/15 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#0EB623]" />
                      </span>
                      <p className="text-gray-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="relative rounded-[2rem] bg-gradient-to-br from-gray-950 via-[#101A12] to-[#16351D] p-6 md:p-8 overflow-hidden shadow-[0_24px_80px_rgba(31,55,35,0.16)]">
                  <div className="absolute inset-0 wc-dark-grid opacity-22"></div>
                  <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#0EB623]/18 blur-3xl"></div>
                  <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#F5B849]/12 blur-3xl"></div>

                  <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {regionalCards.map((item) => (
                      <article
                        key={item.region}
                        className="rounded-2xl border border-white/14 bg-white/[0.08] p-5 backdrop-blur-sm"
                      >
                        <Globe className="text-[#F5B849] mb-4" size={24} />
                        <h3 className="text-white text-xl font-medium mb-2">
                          {item.region}
                        </h3>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 md:mb-6 text-gray-900">
                Build Your Live Sports Delivery Strategy
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
                Connect World Cup campaign traffic back to EdgeNext’s live streaming, media delivery, and security capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedResources.map((item) => {
                const Icon = item.Icon;

                return (
                  <article
                    key={item.title}
                    className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-[#0EB623]/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-[#0EB623]" size={24} />
                    </div>
                    <div className="text-[#0EB623] text-sm font-medium mb-3 md:mb-4">
                      {item.label}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                      {item.description}
                    </p>
                    <a
                      href={item.href}
                      className="inline-flex items-center text-[#0EB623] font-medium group-hover:gap-2 transition-all duration-300"
                    >
                      {item.link}
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-gray-950 via-[#132117] to-[#0EB623] relative overflow-hidden">
          <div className="absolute inset-0 wc-dark-grid opacity-30"></div>
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#0EB623]/28 blur-3xl"></div>
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#F5B849]/22 blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                Prepare Your Platform for the Next Global Sports Traffic Surge
              </h2>

              <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                See how EdgeNext helps live sports platforms deliver every match, protect premium content, support monetization workflows, and keep fans connected at global scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0EB623] text-white rounded-xl font-medium hover:bg-[#0EA620] transition-all duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>

                <a
                  href="/live-streaming"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-medium hover:bg-white/15 transition-all duration-300 group"
                >
                  View Live Streaming Solution
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorldCup;
