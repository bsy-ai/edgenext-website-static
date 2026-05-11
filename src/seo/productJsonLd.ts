import { DEFAULT_PAGE_DESCRIPTION, SITE_ORIGIN } from './site';

type ProductSchemaMeta = {
  name: string;
  category: string;
  path: string;
  description: string;
};

const PRODUCT_SCHEMA_BY_PATH: Record<string, ProductSchemaMeta> = {
  '/dynamic-acceleration': {
    name: 'Dynamic Acceleration',
    description:
      'Boost website speed using global server load balancing. EdgeNext Dynamic Acceleration ensures low latency, fast routing, and high-performance delivery.',
    category: 'CDN',
    path: '/dynamic-acceleration',
  },
  '/static-acceleration': {
    name: 'Static Acceleration',
    description:
      'Speed up content delivery with static acceleration and origin server optimization. Reduce load time and deliver fast, cached content globally with EdgeNext CDN.',
    category: 'CDN',
    path: '/static-acceleration',
  },
  '/live_streaming': {
    name: 'Live Streaming',
    description:
      'Deliver high-quality CDN live streaming with EdgeNext. Ensure fast, reliable, and low-latency video delivery for global audiences.',
    category: 'Streaming',
    path: '/live_streaming',
  },
  '/security_cdn': {
    name: 'Security CDN',
    description:
      'Protect your website with web server security and CDN protection. Prevent DDoS attacks, secure data, and ensure safe global content delivery with EdgeNext.',
    category: 'Cloud Security',
    path: '/security_cdn',
  },
  '/anti_ddos': {
    name: 'Anti-DDoS',
    description:
      'Protect your website with dedicated server DDoS protection. Prevent attacks, filter malicious traffic, and ensure secure, uninterrupted performance with EdgeNext.',
    category: 'Cloud Security',
    path: '/anti_ddos',
  },
  '/dns_security_service': {
    name: 'DNS Security Service',
    description:
      'Protect your domain with authoritative DNS servers. EdgeNext ensures fast, reliable DNS resolution and shields against DDoS attacks and spoofing threats.',
    category: 'Cloud Security',
    path: '/dns_security_service',
  },
  '/ecs': {
    name: 'Edge Cloud Server',
    description:
      'Optimize applications with server-based computing using EdgeNext ECS. Achieve low-latency processing, secure data handling, and scalable cloud-edge performance.',
    category: 'Edge Cloud',
    path: '/ecs',
  },
  '/bare_metal_server': {
    name: 'Bare Metal Server',
    description:
      'Protect your infrastructure with bare metal server backup solutions from EdgeNext. Ensure full data security, fast recovery, and high-performance server management.',
    category: 'Edge Cloud',
    path: '/bare_metal_server',
  },
};

export function buildProductJsonLd(pathname: string): Record<string, unknown> | null {
  const product = PRODUCT_SCHEMA_BY_PATH[pathname];
  if (!product) return null;

  const description = product.description || DEFAULT_PAGE_DESCRIPTION;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'EdgeNext',
    },
    category: product.category,
    offers: {
      '@type': 'Offer',
      url: `${SITE_ORIGIN}${product.path}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}
