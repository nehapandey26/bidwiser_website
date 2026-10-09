/**
 * Central route + anchor map. Import `paths` / `sections` instead of typing
 * URL strings anywhere in the app.
 *
 * Only the landing page ("/") is designed in the Figma prototype. The other
 * routes render placeholder pages for now.
 */
export const paths = {
  home: '/',

  // Primary nav
  product: '/product',
  tenderDiscovery: '/product/tender-discovery',
  requirementAnalysis: '/product/requirement-analysis',
  bidNoBid: '/product/bid-no-bid',
  bidGenerator: '/product/bid-generator',
  caseStudies: '/case-studies',
  pricing: '/pricing',
  whoWeServe: '/who-we-serve',
  company: '/company',
  careers: '/careers',
  resources: '/resources',
  blog: '/blog',

  // CTAs
  requestDemo: '/request-demo',
  uploadRfp: '/upload-rfp',

  // Legal (footer)
  privacy: '/privacy',
  terms: '/terms',
}

/** Routes that should appear in sitemap.xml (real, indexable pages). */
export const indexableRoutes = [
  paths.home,
  paths.product,
  paths.tenderDiscovery,
  paths.requirementAnalysis,
  paths.bidNoBid,
  paths.bidGenerator,
  paths.caseStudies,
  paths.pricing,
  paths.whoWeServe,
  paths.company,
  paths.careers,
  paths.resources,
  paths.blog,
  paths.requestDemo,
]

/** In-page anchor ids for the landing sections (used by nav + footer links). */
export const sections = {
  howItWorks: 'how-it-works',
  comparison: 'comparison',
  customers: 'customers',
  faq: 'faq',
  security: 'security',
}

/** Build a home-page anchor link, e.g. hashLink('faq') -> '/#faq' */
export const hashLink = (id) => `${paths.home}#${id}`
