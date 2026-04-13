import { SITE_ORIGIN } from './site';

const ORG_ID = `${SITE_ORIGIN}/#organization`;
const WEB_ID = `${SITE_ORIGIN}/#website`;
const SVC_ID = `${SITE_ORIGIN}/#service`;

/**
 * Homepage JSON-LD: Organization + WebSite (no SearchAction) + Service.
 * Excludes FAQPage, AggregateRating, SearchAction per product decision.
 */
export function buildHomeJsonLd(): Record<string, unknown> {
  const logoUrl = `${SITE_ORIGIN}/logo.png`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'EdgeNext',
        url: `${SITE_ORIGIN}/`,
        logo: logoUrl,
        description:
          'EdgeNext is a global edge cloud service provider offering CDN, cloud security, streaming, and edge computing solutions.',
        foundingDate: '2015',
        sameAs: [
          'https://www.linkedin.com/company/edgenextcdn/',
          'https://twitter.com/edgenexttech',
          'https://www.facebook.com/EdgeNextTechnology',
          'https://www.instagram.com/edgenext_technology/',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEB_ID,
        url: `${SITE_ORIGIN}/`,
        name: 'EdgeNext',
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'Service',
        '@id': SVC_ID,
        serviceType: 'Edge Cloud Services',
        provider: { '@id': ORG_ID },
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'EdgeNext Services',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CDN (Content Delivery Network)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cloud Security' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Streaming Solutions' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Edge Computing' } },
          ],
        },
      },
    ],
  };
}
