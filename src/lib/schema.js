import { APP_NAME, APP_DESCRIPTION, SITE_URL } from '@/constants/app'

/** schema.org Organization — emitted once, in the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: APP_NAME,
    url: SITE_URL,
    description: APP_DESCRIPTION,
    logo: `${SITE_URL}/icon.svg`,
  }
}

/** schema.org WebSite — helps search engines understand the site + sitelinks. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: APP_NAME,
    url: SITE_URL,
  }
}

/** schema.org FAQPage — built from the FAQ data, emitted on the home page. */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}
