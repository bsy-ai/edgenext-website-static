import { ReactNode } from 'react';
import { Globe, Shield, Zap, Server, Database, RefreshCw, Video, Play, Lock, Activity, Network, Download } from 'lucide-react';

export interface Product {
  name: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  date: string;

  // ✅ layout
  layout?: "classic" | "silver_media";
  overview: string;
  challenges: Array<{ title?: string; description: string }>;
  solutions: Array<{ title?: string; description: string }>;
  products: Product[];
  takeaway: string | string[];
  industries: string[];
  relatedProducts: string[];
  imageUrl?: string;
  location?: string;
  website?: string;
  pdfIndustry?: string;
  solutionName?: string;
  keyImpacts?: string[];
  customerOverview?: string;
  businessContext?: string;
  objectivesIntro?: string;
  objectives?: string[];
  goalStatement?: string;
  resultsTitle?: string;
  resultsParagraph?: string;
  resultsIntro?: string;
  resultsBullets?: string[];
  customerQuote?: {
    text: string;
    name: string;
    title: string;
    company: string;
  };

  aboutEdgeNext?: string;
}

const caseStudies: CaseStudy[] = [
  {
    slug: "global-delivery-solution-for-top-photo-beauty-app-in-china",
    title: "Global Delivery Solution for Top Photo Beauty App in China",
    date: "June 29, 2023",
    overview: "Meitu is a widely used image editing application in China with a large global user base. Its app relies heavily on frequent user uploads and dynamic data synchronization with the origin server in China. Given the sensitive nature of the content and the need for high reliability in global data transmission, Meitu required a solution that could ensure stable, secure, and low-latency connectivity across regions. To address these challenges, Meitu partnered with EdgeNext to deploy a comprehensive global delivery architecture, focused on cross-border acceleration and dynamic content optimization.",
    challenges: [
      {
        description: "Ensuring reliable cross-border uploads from global users to a China-based origin"
      },
      {
        description: "Maintaining performance for real-time dynamic interactions, such as photo editing, saving, and syncing"
      },
      {
        description: "Guaranteeing data security and transmission stability for sensitive user-generated content"
      },
      {
        description: "Delivering video-on-demand content and other media assets seamlessly across regions"
      }
    ],
    solutions: [
      {
        description: "Dynamic Acceleration: Intelligent routing via EdgeNext's global edge network to minimize latency for both uploads and downloads"
      },
      {
        description: "Security CDN: HTTPS acceleration, authentication, and content protection to safeguard user data"
      },
      {
        description: "Automated Operations: Real-time monitoring, failover, and load balancing to ensure business continuity"
      },
      {
        description: "BMS (Bare Metal Servers): High-performance backend infrastructure to support dynamic application workloads"
      }
    ],
    products: [
      {
        name: "Dynamic Acceleration",
        description: "Optimized routing for real-time data exchange between users and origin"
      },
      {
        name: "Security CDN",
        description: "Secure transmission with authentication, HTTPS, and anti-leech capabilities"
      },
      {
        name: "BMS",
        description: "Dedicated infrastructure for high-concurrency data processing and stability"
      },
      {
        name: "Full Site Acceleration",
        description: "Improved global responsiveness for all application layers"
      },
      {
        name: "Upload/Download CDN",
        description: "Streamlined synchronization of content uploads and downloads"
      },
      {
        name: "VOD Delivery",
        description: "Stable and fast delivery of video content worldwide"
      }
    ],
    takeaway: "By leveraging EdgeNext's globally distributed infrastructure and dynamic acceleration capabilities, Meitu successfully improved cross-border transmission stability and user experience. The customized solution aligned with their operational needs—ensuring reliable uploads, responsive editing workflows, and secure content delivery for users worldwide.",
    industries: ["Beauty & Image Editing", "E-commerce", "Online Education", "Internet Tools"],
    relatedProducts: ["Dynamic Acceleration", "Security CDN", "BMS"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    slug: "media-on-demand-solution-for-top-global-short-video-platform",
    title: "Media on Demand Solution for Top Global Short Video Platform",
    date: "May 29, 2023",
    overview: "Our client operates one of the world's leading short video platforms, used to create and share video content ranging from dance and comedy to education. The videos typically last from 15 seconds to 3 minutes and are consumed at a massive scale. With over 2.6 billion app downloads and a global monthly active user base reaching 1 billion, the platform demands a highly stable and scalable infrastructure to support uninterrupted media access across regions. To meet these demands, the client partnered with EdgeNext to implement a tailored Media on Demand (MOD) acceleration solution that ensures seamless global delivery and optimized viewing experiences on any device, in any location.",
    challenges: [
      {
        description: "Supporting high global traffic volumes and ensuring platform responsiveness"
      },
      {
        description: "Preventing playback interruptions and maintaining a low buffer rate"
      },
      {
        description: "Delivering high-quality media experiences with <1s Time To First Frame (TTFF)"
      },
      {
        description: "Ensuring platform stability, availability, and security during traffic surges"
      },
      {
        description: "Meeting the evolving needs of media content processing, including recording, screenshotting, transcoding, and protocol conversion"
      }
    ],
    solutions: [
      {
        title: "Media on Demand Acceleration",
        description: "With an advanced content delivery engine for transcoding, packaging, and stream optimization, EdgeNext enables the client to focus on content creation—while delivering consistently high-quality playback to end-users, anywhere and on any device."
      },
      {
        title: "Adaptive Architecture for Modern Media Needs",
        description: "As MOD demand surges with the proliferation of electronic devices, EdgeNext's loosely coupled, flexible architecture supports core content processing workflows including recording, transcoding, screenshotting, and protocol transferring—essential for delivering modern video content at scale."
      },
      {
        title: "Global Scalability & High-Performance Delivery",
        description: "EdgeNext operates a global PoP network with over 1,500 nodes, ensuring fast, reliable, and scalable media delivery across all major regions. This allows for stable playback even under high concurrency or limited bandwidth environments."
      }
    ],
    products: [
      {
        name: "Media on Demand Acceleration",
        description: "Stream optimization, transcoding, and global delivery for video playback"
      },
      {
        name: "CDN Acceleration",
        description: "Reliable, low-latency content delivery to global end-users"
      },
      {
        name: "Application Acceleration",
        description: "Improved frontend performance and system responsiveness"
      },
      {
        name: "WAF",
        description: "Application-level protection for stable media experience"
      },
      {
        name: "Anti-DDoS",
        description: "Multi-layered security to mitigate attacks on media infrastructure"
      }
    ],
    takeaway: "EdgeNext's solution empowered the client to maintain a stable and uninterrupted video viewing experience for its massive global audience. With <1s TTFB, a low buffer rate, and an infrastructure capable of handling 760 billion requests/day and 7 million peak requests/second, EdgeNext ensured scalable delivery while preserving content quality and platform availability. Its modular, media-friendly architecture and global coverage positioned the platform to continue growing while meeting the demands of a fast-evolving digital landscape.",
    industries: ["Short Video Platforms", "Media & Entertainment", "Mobile Video Streaming", "Content Creation Tools"],
    relatedProducts: ["Media on Demand Acceleration", "CDN Acceleration", "Application Acceleration", "Anti-DDoS", "WAF"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    slug: "dynamic-acceleration-solution-for-top-e-commerce-in-china",
    title: "Dynamic Acceleration Solution for Top E-commerce in China",
    date: "April 29, 2023",
    overview: "Our client is China's largest online retailer and a leading e-commerce platform, offering a vast product range from electronics to fresh produce. With over 470 million active customers and 90%+ of orders placed through mobile apps, the platform demands high reliability, agility, and security to support dynamic content delivery.",
    challenges: [
      {
        title: "Promotion Traffic Surge",
        description: "Massive spikes in traffic during events like the 6/18 Sale and Double 11 required highly elastic infrastructure."
      },
      {
        title: "Security Concerns",
        description: "As a high-profile e-commerce platform, it needed robust protection for transactional data and user privacy."
      },
      {
        title: "Content Freshness",
        description: "Delivering the latest product updates and promotional media in real time was essential for conversion and customer satisfaction."
      }
    ],
    solutions: [
      {
        title: "Traffic Surge Mitigation",
        description: "Leveraging a global network of over 1,500 PoPs, EdgeNext enabled the client to manage unpredictable bursts in user traffic with consistent, low-latency service."
      },
      {
        title: "Enhanced Security Architecture",
        description: "EdgeNext protected HTTPS traffic and critical application infrastructure through a multilayered approach combining Anti-DDoS, WAF, and Bot Management. This ensured reliable access even during targeted attacks."
      },
      {
        title: "Real-Time Content Refreshing",
        description: "Utilizing patented purge technology, EdgeNext empowered the client to instantly update cacheable assets such as images, JavaScript files, and promotional content across its sites."
      }
    ],
    products: [
      {
        name: "Web Acceleration",
        description: "Dynamic routing and content optimization to handle bursty traffic events"
      },
      {
        name: "Anti-DDoS",
        description: "Real-time protection against large-scale denial of service attacks"
      },
      {
        name: "WAF",
        description: "Application-layer security to block malicious requests"
      },
      {
        name: "Static Acceleration",
        description: "Optimized delivery of static content such as images, JS, and CSS"
      },
      {
        name: "Dynamic Acceleration",
        description: "Real-time data transfer optimization for interactive, data-driven content"
      }
    ],
    takeaway: [
      "Improved the top e-commerce user experience across China, supporting the 6/18 Sale and Double 11 events with reliable & elastic web service.",
      "EdgeNext successfully delivered over 5 PB of traffic for the 6/18 Sale.",
      "Offloaded promotional and marketing campaign web pages and media files from the client's infrastructure by caching them on the EdgeNext network with over 95% cache hit rate over time.",
      "Secured millions of customer transactions with EdgeNext's secure platform and HTTPS delivery.",
      "Based on the client's internal evaluation system, EdgeNext outperformed other CDN vendors in China with the fastest response time, highest throughput, and highest availability."
    ],
    industries: ["E-commerce Platforms", "Mobile Retail Apps", "Flash Sale Campaigns", "High-Traffic Shopping Events"],
    relatedProducts: ["Web Acceleration", "Anti-DDoS", "WAF", "Static Acceleration", "Dynamic Acceleration"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    slug: "cdn-gaming-solution-for-us-top-gaming-company",
    title: "CDN Gaming Solution for US Top Gaming Company",
    date: "March 29, 2023",
    overview: "Our client is one of the most successful video game companies in the U.S., serving a global user base through game development, publishing, and digital distribution. With the global games market projected to generate over $236.9 billion in 2025 and a player population surpassing 3.38 billion worldwide, delivering smooth, fast, and scalable gaming services has never been more critical.",
    challenges: [
      {
        title: "Download Latency",
        description: "With the exponential increase in game file sizes and updates, long download times for patches or updates can lead to poor user experiences and customer dissatisfaction."
      }
    ],
    solutions: [
      {
        title: "Scalable Delivery Infrastructure",
        description: "Powered by load balancing, intelligent routing, and elastic scaling, EdgeNext helped the client accelerate downloads even during massive traffic spikes caused by promotions, updates, or new game launches."
      },
      {
        title: "Global Reach with Local Efficiency",
        description: "With over 1,500 high-quality PoPs globally, EdgeNext placed game content—including installation packages and patches—at the network edge, closest to users. This reduced latency and improved download speed."
      },
      {
        title: "Traffic Surge Management",
        description: "The solution handled download traffic during mega-events with traffic surges reaching up to 12x the daily average, delivering reliable performance and seamless content availability."
      }
    ],
    products: [
      {
        name: "Static Content Delivery",
        description: "Reliable, low-latency CDN for game packages and updates"
      },
      {
        name: "Load Balancing",
        description: "Even traffic distribution across nodes for optimized delivery"
      },
      {
        name: "Intelligent Routing",
        description: "Routes traffic to the best-performing nodes based on real-time conditions"
      },
      {
        name: "Elastic Scaling",
        description: "Handles bursty traffic through flexible infrastructure allocation"
      },
      {
        name: "Zero-downtime Service",
        description: "Ensures continuous availability for downloads and updates"
      }
    ],
    takeaway: "By integrating EdgeNext's Large File Download Optimization, the gaming client dramatically reduced latency during high-demand periods and ensured smoother, faster downloads. This not only improved the player experience but also reinforced the client's reputation for delivering stable, scalable, and high-performance services globally.",
    industries: ["Game Publishers", "Cloud Gaming Platforms", "Game Launch Campaigns", "Update Patch Distribution"],
    relatedProducts: ["Static Content Delivery", "Large File Download Optimization", "Anti-DDoS", "WAF"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    slug: "global-delivery-top-ecommerce-in-sea",
    title: "Global Delivery – Top Ecommerce in SEA",
    date: "February 28, 2023",
    overview: "Our client is a leading cross-border e-commerce platform, operating across more than 10 countries, including Singapore, Malaysia, the Philippines, Thailand, Vietnam, Brazil, Mexico, Colombia, Chile, and Poland. This broad geographic coverage underscores the client's ambition to connect global users to Southeast Asian merchants and products. The platform's core business is centered on the Southeast Asian market, which is known for its fast-growing e-commerce sector and vibrant live-streaming commerce activities. Given the frequency of promotional events and campaigns such as flash sales, new product launches, and influencer live sessions, business traffic spikes and sudden surges in user requests are a common challenge.",
    challenges: [
      {
        title: "Cross-Border Network Performance",
        description: "Due to the cross-border nature of their business and global user base, maintaining fast, reliable access across international regions was critical. This required low-latency delivery and seamless access across complex, geographically distributed infrastructure."
      },
      {
        title: "Security Features",
        description: "With growing volumes of traffic and data transmission, strong security mechanisms were necessary to prevent data breaches and ensure smooth operations during high-demand periods."
      }
    ],
    solutions: [
      {
        title: "Live Streaming Capabilities",
        description: "The platform supports both push and pull stream modes, enabling flexible integration with various livestream setups. It includes transcoding and encoding, adaptive bitrate streaming for different device types and bandwidths, as well as instant playback, screenshots, recording, and cloud storage. These features ensure users have a smooth and immersive live shopping experience."
      },
      {
        title: "Redundant Resources",
        description: "To maintain high availability during peak periods, EdgeNext provided a highly redundant infrastructure. This architecture ensured system stability and high success rates, even when concurrent request volume was elevated due to major promotions or large-scale campaign launches."
      },
      {
        title: "Analytic Visualization Dashboard",
        description: "EdgeNext offered a robust analytics platform that delivered real-time monitoring and actionable insights. Customers could track online traffic trends, bandwidth usage, and request volume during live events. This visibility helped in strategic planning and operational fine-tuning."
      }
    ],
    products: [
      {
        name: "Dynamic Acceleration",
        description: "Optimized routing for real-time data exchange between users and origin"
      },
      {
        name: "Live Streaming",
        description: "Real-time video delivery with adaptive bitrate and instant playback"
      },
      {
        name: "Security CDN",
        description: "Secure transmission with authentication, HTTPS, and anti-leech capabilities"
      },
      {
        name: "BMS",
        description: "Dedicated infrastructure for high-concurrency data processing and stability"
      }
    ],
    takeaway: "By adopting EdgeNext's global delivery solution, the client gained the infrastructure resilience needed to thrive in high-pressure promotional windows. The solution enabled reliable live-streaming performance, seamless handling of traffic bursts, and granular visibility into operational metrics—all essential for maintaining a competitive edge in the dynamic e-commerce landscape of Southeast Asia.",
    industries: ["Cross-Border E-commerce Platforms", "Live Commerce and Influencer Streaming", "Online Retailers in Emerging Markets", "Interactive Online Marketplaces"],
    relatedProducts: ["Dynamic Acceleration", "Live Streaming", "Security CDN", "BMS"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    slug: "beijing-2022-winter-olympic-games-cdn-streaming-solution",
    title: "Beijing 2022 Winter Olympic Games: CDN Streaming Solution",
    date: "January 28, 2023",
    overview: "The 2022 Beijing Winter Olympic Games became the most-watched Winter Olympics in history, achieving an extraordinary global reach. Over the course of 19 consecutive days, a continuous stream of live and on-demand content was delivered to audiences around the world, culminating in a broadcast footprint that surpassed 2 billion people. The digital experience spanned across platforms, regions, and time zones—setting a new global benchmark for the scale and ambition of live video delivery. For EdgeNext, this presented a unique opportunity: to support a global mega-event that required uncompromising performance, resilient infrastructure, and consistently exceptional viewing experiences from opening to closing ceremonies.",
    challenges: [
      {
        title: "Insufficient Infrastructure for High Traffic Volume",
        description: "The sheer intensity of global attention resulted in traffic volumes that were up to 12 times higher than standard daily peaks. Traditional systems were not designed to handle this magnitude of concurrent requests, leading to high risk of congestion, server crashes, and uneven delivery across geographies."
      },
      {
        title: "Unsatisfactory User Experience",
        description: "Viewers across different regions expected instant playback, minimal buffering, and flexible bitrate switching. However, these expectations could not be reliably met without intelligent routing, edge-level acceleration, and dynamic scalability—especially when millions of users tuned in simultaneously to high-profile events."
      },
      {
        title: "Decline of View",
        description: "Without the ability to provide a consistent, high-quality experience, event organizers risked a rapid decline in viewership during peak broadcast moments. Dropped streams, playback failures, and delays would significantly impact audience satisfaction, social media sentiment, and engagement metrics."
      }
    ],
    solutions: [
      {
        title: "Live Streaming",
        description: "EdgeNext's CDN served as a high-speed backbone for real-time delivery. The architecture supported adaptive bitrate streaming, allowing the video quality to adjust based on users' device and network conditions. Viewers were empowered to drag progress bars, switch resolutions, and instantly replay highlights—ensuring a high degree of control and responsiveness."
      },
      {
        title: "VOD Acceleration",
        description: "Beyond live content, EdgeNext optimized the distribution of recorded material including daily recaps, medal-winning moments, and athlete features. With built-in caching and local delivery, users could access content with minimal load time—even from remote or bandwidth-limited regions."
      },
      {
        title: "Massive Global Coverage",
        description: "EdgeNext's 1,500+ high-quality Points of Presence (PoPs) formed the backbone of the delivery strategy. By positioning content closer to end users—no matter where they were—latency was drastically reduced, and delivery was stabilized under any network condition."
      },
      {
        title: "High Availability and Redundancy",
        description: "To maintain operational continuity during traffic spikes and sensitive event timings, EdgeNext implemented a loosely coupled, multi-layered architecture with automatic failover. Even during the most traffic-intensive events such as opening ceremonies or finals, delivery remained uninterrupted and responsive."
      }
    ],
    products: [
      {
        name: "Live Streaming",
        description: "Real-time video delivery with adaptive bitrate, instant playback, and seamless control"
      },
      {
        name: "VOD Acceleration",
        description: "High-speed access to recorded content across global regions"
      },
      {
        name: "Redundant CDN Architecture",
        description: "Multi-path design with failover capabilities to ensure system resilience"
      },
      {
        name: "Global CDN Network",
        description: "1,500+ PoPs worldwide for content proximity and latency reduction"
      }
    ],
    takeaway: "By partnering with EdgeNext, the organizers of the 2022 Beijing Winter Olympic Games ensured a flawless global digital experience for viewers. From low-latency live video to high-speed on-demand playback, the solution handled one of the most complex digital delivery challenges ever attempted. The result: record-breaking reach, consistent user satisfaction, and a new global standard for streaming at scale.",
    industries: ["Mega Sports Events", "National & Global Broadcast Projects", "Live Concerts & Ceremonies", "Digital Media Platforms"],
    relatedProducts: ["Live Streaming", "VOD Acceleration", "Global CDN", "Security CDN"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    slug: "giant-network-cdn-gaming-solution",
    title: "Giant Network – CDN Gaming Solution",
    date: "December 28, 2022",
    overview: "Giant Network Group is a globally recognized developer and publisher of PC, mobile, and console games. Established in 2004 and headquartered in Shanghai, the company has built a strong reputation through its diverse game portfolio and technological innovation. As China's gaming industry continues its rapid ascent, the market is projected to grow at a compound annual growth rate (CAGR) of 14% from 2021 to 2026. By 2021, the Chinese online gaming market had already reached $49 billion in revenue, illustrating the massive opportunity and equally high operational demands placed on game publishers like Giant Network.",
    challenges: [
      {
        title: "Credential Stuffing and DDoS Attacks",
        description: "With millions of active accounts, the platform was a target for malicious login attempts, automated bot traffic, and coordinated DDoS campaigns. Third-party plug-ins further compounded security risks by exposing vulnerabilities that could be exploited to disrupt user experience."
      },
      {
        title: "Heavy Load at Origin",
        description: "During game launches, updates, or in-game events, the surge in simultaneous player access placed extreme stress on the origin servers. This not only slowed game updates but also negatively impacted response times and availability."
      },
      {
        title: "End-to-End Latency",
        description: "With real-time interactions being core to multiplayer gaming, latency issues at any point in the content delivery pipeline could degrade the user experience. Lag during gameplay or delays in patch downloads could lead to player dissatisfaction or churn."
      }
    ],
    solutions: [
      {
        title: "Whole Application Acceleration",
        description: "EdgeNext accelerated content delivery across the entire application stack, ensuring that gameplay, updates, and interactive features loaded instantly and ran smoothly."
      },
      {
        title: "End-to-End Security Protection",
        description: "Powered by a lightweight SDK and UDP-based streaming, EdgeNext minimized latency to under 150ms while providing robust protection through behavioral analytics, AI-driven threat detection, and real-time traffic analysis. The platform intercepted over 9 million credential stuffing and scan attacks, and mitigated over 100,000 origin-based unknown attacks."
      },
      {
        title: "Globally Distributed Network",
        description: "With over 1,500 high-quality Points of Presence (PoPs), EdgeNext ensured low-latency access to game resources from any location. Game installation packages, updates, and patches were strategically cached at the edge, reducing origin server loads and supporting high concurrency during peak times such as promotions or large-scale in-game events."
      }
    ],
    products: [
      {
        name: "Whole Application Acceleration",
        description: "Boosts load speed across the full application lifecycle."
      },
      {
        name: "End-to-End Security Protection",
        description: "Protects against DDoS, credential abuse, and unknown threats."
      },
      {
        name: "UDP Streaming",
        description: "Ensures ultra-low-latency video/audio transmission."
      },
      {
        name: "Lightweight SDK",
        description: "Enables seamless integration and minimal client-side overhead."
      },
      {
        name: "Intelligent Routing",
        description: "Directs user traffic through optimal paths based on real-time conditions."
      }
    ],
    takeaway: "With EdgeNext's CDN and edge security infrastructure in place, Giant Network achieved significant improvements in both performance and threat prevention. The CDN offloaded traffic from the origin, ensuring scalability, while the security solution reduced false alerts by 80% and delivered consistent protection without interrupting user experience. These enhancements allowed Giant Network to focus on delivering innovative content and building stronger connections with their players worldwide.",
    industries: ["Multiplayer Online Games", "Game Launch Campaigns", "Real-Time Strategy & Competitive Games", "Mobile Game Platforms"],
    relatedProducts: ["Static Content Delivery", "Anti-DDoS", "Edge Security", "API Acceleration"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    slug: "cctv-cdn-streaming-solution",
    title: "CCTV – CDN Streaming Solution",
    date: "December 28, 2022",
    overview: "China Central Television (CCTV) is the largest television network in China, operating a comprehensive online video platform through its portal CCTV.com. With a mission to deliver content continuously to a massive audience both domestically and internationally, CCTV.com manages one of the largest-scale digital video databases in the country. Its platform operates 24/7 and supports extensive video-on-demand and livestreaming services across diverse programs and events. The platform supports a high number of concurrent users, with peaks reaching over 11.06 million simultaneous online viewers during major broadcasts. These large-scale demands highlight the necessity for an infrastructure that can reliably deliver ultra-stable and high-quality content at scale, across all network conditions and viewer locations.",
    challenges: [
      {
        title: "High Volume of Traffic",
        description: "During national celebrations, popular broadcasts, and globally watched events, traffic volume can surge to extreme levels. These peaks demand a scalable, distributed architecture that can handle such load fluctuations in real-time without disruption."
      },
      {
        title: "Compromised User Experience",
        description: "Without sufficient infrastructure support, users could face long loading times, playback delays, or resolution downgrades—particularly under constrained network environments or during viewer spikes."
      },
      {
        title: "Decline of View",
        description: "Repeated issues with latency or buffering may discourage users from continuing to engage with the platform, impacting overall viewership and brand perception."
      }
    ],
    solutions: [
      {
        title: "End-to-End Content Acceleration",
        description: "EdgeNext implemented a comprehensive content acceleration and streaming solution, combining both Live Streaming and VOD Acceleration services. These solutions are powered by EdgeNext's globally distributed CDN infrastructure and tailored for high concurrency and real-time responsiveness."
      },
      {
        title: "Support for Flagship Events",
        description: "EdgeNext has partnered with CCTV.com since 2017 to deliver a range of major events including the Lunar New Year Gala, Two Sessions, National Day Parade, and World Cup broadcasts. These events draw hundreds of millions of concurrent viewers, demanding real-time load balancing and exceptional reliability."
      },
      {
        title: "Flexible Architecture",
        description: "EdgeNext's loosely coupled, highly modular architecture enables flexible deployment and precise traffic routing. By deploying over 1,500 global Points of Presence (PoPs), EdgeNext ensures that all video requests are handled by the nearest available edge node. This significantly reduces latency and helps maintain broadcast continuity across regions."
      },
      {
        title: "Advanced Streaming Features",
        description: "Advanced streaming features such as instant playback, bitrate switching, and on-demand replay allow viewers to fully engage with content regardless of device or location. This flexibility supports rich and immersive viewing experiences even during periods of traffic congestion."
      }
    ],
    products: [
      {
        name: "Live Streaming",
        description: "Real-time video delivery with adaptive bitrate and instant playback"
      },
      {
        name: "VOD Acceleration",
        description: "Optimized delivery of on-demand video content"
      },
      {
        name: "Dynamic Content Delivery",
        description: "Accelerated delivery of dynamic web content"
      },
      {
        name: "Security CDN",
        description: "Protected content delivery with integrated security features"
      }
    ],
    takeaway: "Through its ongoing partnership with EdgeNext, CCTV.com has been able to reliably stream content to a global audience—even during peak usage scenarios with 11M+ concurrent users. With EdgeNext's highly customizable CDN and robust edge delivery infrastructure, CCTV successfully meets the demands of high-volume streaming without compromising quality, ensuring its role as a national media leader remains unshakable in the digital era.",
    industries: ["National Broadcasting Platforms", "Government and Public Sector Streaming", "High-Viewership Event Broadcasting", "Video-on-Demand Platforms"],
    relatedProducts: ["Live Streaming", "VOD Acceleration", "Dynamic Content Delivery", "Security CDN"],
    imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },

  {
    slug: "silver-media-elevates-worldwide-digital-experiences",
    layout: "silver_media",
    title: "Silver Media elevates worldwide digital experiences using EdgeNext Intelligent Delivery Network Platform",
    date: "March 1, 2026",

    overview:
      "Silver Media Direct Marketing, a leading digital and performance marketing agency based in Germany, partnered with EdgeNext to elevate the speed, reliability, and global consistency of its digital campaigns. Through EdgeNext Intelligent Delivery Network Platform, Silver Media strengthened its ability to deliver high-performing campaigns at scale, ensuring fast load times, stable delivery, and a seamless user experience for audiences worldwide.",

    // cover image (public/)
    imageUrl: "/Silver-Media-elevates-worldwide-digital-experiences.png",

    // Right-side info box
    location: "Nuremberg, Germany",
    website: "silvermedia.de",
    pdfIndustry: "Marketing & Business Services",
    solutionName: "EdgeNext CDN Platform",
    keyImpacts: [
      "Enhanced network visibility",
      "Global content acceleration",
      "Unified platform to manage multiple client domains"
    ],

    // Customer Overview
    customerOverview:
      "Silver Media Direct Marketing is a well-established and trusted player in the digital marketing space, known for delivering high-impact, data-driven campaigns for brands across multiple markets.\n\nWith a strong reputation for performance marketing, digital optimization, and execution excellence, Silver Media supports organizations that demand reliability, speed, and scalability from their digital infrastructure.\n\nAs campaign reach expands and audience expectations rise worldwide, Silver Media continues to invest in best-in-class technology partners. This commitment ensures its clients benefit from fast, seamless, and dependable digital experiences regardless of geography, traffic volume, or campaign complexity.",

    // Business Context & Objectives
    businessContext:
      "Operating at the forefront of digital marketing, Silver Media manages multiple client campaigns simultaneously, often with time-sensitive launches and fluctuating traffic patterns driven by media exposure and campaign cycles.",
    objectivesIntro:
      "To uphold its standards of excellence, Silver Media prioritizes:",
    objectives: [
      "Maintaining consistent performance across all digital touchpoints",
      "Ensuring high availability and reliability for client websites and campaign assets",
      "Supporting global audiences without compromising user experience",
      "Simplifying operational management across multiple digital properties"
    ],
    goalStatement:
      "The goal was not to address a single pain point, but to reinforce and future-proof Silver Media’s digital delivery foundation. By partnering with EdgeNext, Silver Media sought to align its infrastructure with its growth trajectory and rising client expectations, ensuring every campaign regardless of scale or geography performs at its peak.",

    // Results & Business Impact
    resultsTitle: "The EdgeNext Solution - Results & Business Impact",
    resultsParagraph:
      "To reinforce its global campaign delivery strategy, Silver Media deployed EdgeNext Intelligent Delivery Network Platform engineered to accelerate content distribution, stabilize performance under variable traffic loads, and provide deep operational visibility across all digital properties.",
    resultsIntro:
      "By integrating EdgeNext, Silver Media achieves:",
    resultsBullets: [
      "Consistent, high-performance delivery across global audiences",
      "Improved end-user experience driving higher engagement and conversion",
      "Confidence during high-visibility or time-critical campaign launches",
      "Streamlined operations across multiple client websites and digital assets",
      "A secure, scalable foundation for continued growth and rapid client onboarding"
    ],

    // Quote
    customerQuote: {
      text:
        "EdgeNext’s CDN platform gave us the speed, stability, and protection essential for modern digital campaigns. It allowed us to focus on creativity while knowing our content delivery was fully taken care of.",
      name: "Julia Pfaff",
      title: "Chief Executive Officer (CEO)",
      company: "Silver Media Direct Marketing"
    },

    // About (text only; links will be rendered in CaseStudyDetail.tsx)
    aboutEdgeNext:
      "EdgeNext is a global edge-cloud and content delivery provider focused on helping brands deliver fast, secure, and reliable digital experiences across international markets. With a network engineered for high performance in regions that are often difficult to reach, EdgeNext supports everything from media streaming to large-scale marketing campaigns with low latency and strong security. Its platform combines intelligent routing, real-time monitoring, and localized infrastructure, giving businesses the confidence to scale their digital presence without compromising speed or stability. Learn more at edgenext.com or follow EdgeNext on LinkedIn.",

    // classic-required fields (keep empty to avoid accidental classic rendering)
    challenges: [],
    solutions: [],
    products: [],
    takeaway: [],
    industries: [],
    relatedProducts: []
  }
];

export default caseStudies;

export const getIconForProduct = (product: string): ReactNode => {
  if (product === "Live Streaming" || product === "VOD Acceleration") {
    return <Video className="text-[#0EB623]" size={18} />;
  } else if (product === "Dynamic Acceleration" || product === "Web Acceleration" || product === "API Acceleration") {
    return <Zap className="text-[#0EB623]" size={18} />;
  } else if (product === "Anti-DDoS" || product === "WAF" || product === "Security CDN" || product === "Edge Security") {
    return <Shield className="text-[#0EB623]" size={18} />;
  } else if (product === "Global CDN" || product === "Dynamic Content Delivery") {
    return <Globe className="text-[#0EB623]" size={18} />;
  } else if (product === "BMS") {
    return <Server className="text-[#0EB623]" size={18} />;
  } else if (product === "Static Content Delivery" || product === "Large File Download Optimization") {
    return <Download className="text-[#0EB623]" size={18} />;
  } else if (product === "Redundant CDN Architecture") {
    return <Network className="text-[#0EB623]" size={18} />;
  } else {
    return <Server className="text-[#0EB623]" size={18} />;
  }
};