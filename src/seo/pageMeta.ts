import type { SeoPageMeta } from './types';

/** Per-path title & description from seo文档 (DNS uses section 8). */
export const PAGE_SEO_BY_PATH: Record<string, SeoPageMeta> = {
  '/': {
    title: 'Edge Server CDN | Fast, Secure Global Content Delivery',
    description:
      'Boost website performance with Edge Server technology. Deliver fast, secure, and low-latency content globally using EdgeNext\'s advanced CDN network.',
  },
  '/dynamic-acceleration': {
    title: 'Dynamic Acceleration CDN | Global Load Balancing Solution',
    description:
      'Boost website speed using global server load balancing. EdgeNext Dynamic Acceleration ensures low latency, fast routing, and high-performance delivery.',
  },
  '/static-acceleration': {
    title: 'Origin Server Optimization | Static Acceleration CDN',
    description:
      'Speed up content delivery with static acceleration and origin server optimization. Reduce load time and deliver fast, cached content globally with EdgeNext CDN.',
  },
  '/live_streaming': {
    title: 'CDN Live Streaming | Ultra-Low Latency Video Delivery',
    description:
      'Deliver high-quality CDN live streaming with EdgeNext. Ensure fast, reliable, and low-latency video delivery for global audiences.',
  },
  '/security_cdn': {
    title: 'Web Server Security | Secure CDN & DDoS Protection',
    description:
      'Protect your website with web server security and CDN protection. Prevent DDoS attacks, secure data, and ensure safe global content delivery with EdgeNext.',
  },
  '/anti_ddos': {
    title: 'Dedicated Server with DDoS Protection | Secure CDN Shield',
    description:
      'Protect your website with dedicated server DDoS protection. Prevent attacks, filter malicious traffic, and ensure secure, uninterrupted performance with EdgeNext.',
  },
  '/dns_security_service': {
    title: 'Authoritative DNS Servers | Secure DNS Security Service',
    description:
      'Protect your domain with authoritative DNS servers. EdgeNext ensures fast, reliable DNS resolution and shields against DDoS attacks and spoofing threats.',
  },
  '/ecs': {
    title: 'Server-Based Computing | EdgeNext ECS Solutions',
    description:
      'Optimize applications with server-based computing using EdgeNext ECS. Achieve low-latency processing, secure data handling, and scalable cloud-edge performance.',
  },
  '/bare_metal_server': {
    title: 'Bare Metal Server Backup | Reliable Backup Solutions',
    description:
      'Protect your infrastructure with bare metal server backup solutions from EdgeNext. Ensure full data security, fast recovery, and high-performance server management.',
  },
  '/ai-solutions': {
    title: 'What Is an Edge Server | AI Solutions & Edge Computing',
    description:
      'Learn what an edge server is and how it powers AI solutions at the network edge. Get real-time performance, low latency, and scalable computing with EdgeNext.',
  },
  '/e_commerce': {
    title: 'Global Server Load Balancing | E-Commerce CDN Performance',
    description:
      'Boost e-commerce site speed with global server load balancing to ensure fast delivery, high availability, and reliable checkout experiences worldwide with EdgeNext.',
  },
  '/telcos-isp-iigs': {
    title: 'Failover Server Solutions for Telcos, ISPs & IIGs',
    description:
      'Ensure uninterrupted connectivity with failover server solutions for telcos, ISPs, and IIGs. EdgeNext supports resilient routing, load balancing, and uptime protection worldwide.',
  },
  '/sports_broadcasting': {
    title: 'Streaming Dedicated Servers | High-Performance Sports CDN',
    description:
      'Deliver smooth live sports with streaming dedicated servers. EdgeNext provides reliable, low-latency CDN performance to keep fans engaged in real time.',
  },
  '/e_learning': {
    title: 'Global Server Load Balancing for E-Learning Platforms',
    description:
      'Improve e-learning delivery with global server load balancing. EdgeNext ensures fast, reliable, and secure content delivery for students worldwide.',
  },
};
