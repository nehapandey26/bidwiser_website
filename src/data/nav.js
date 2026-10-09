import { paths } from '@/lib/paths'

/**
 * Primary navigation.
 *  - `mega` → wide Figma panel: gradient preview + serif links.
 *    `tone: 'peach'` (Product) / `'sky'` (Resources, Company).
 *  - `menu` → plain list dropdown (no item uses this now; kept for future use)
 */
export const primaryNav = [
  {
    label: 'Product',
    to: paths.product,
    // ✓ Figma: mega panel — gradient preview on the left, serif links on the right
    mega: {
      tone: 'peach',
      items: [
        { label: 'Tender Discovery', sub: 'Synergy', to: paths.tenderDiscovery },
        { label: 'Requirement Analysis', sub: 'Synergy', to: paths.requirementAnalysis },
        { label: 'Bid/No-Bid Engine', sub: 'Synergy', to: paths.bidNoBid },
        { label: 'Bid-Generator', sub: 'Synergy', to: paths.bidGenerator },
      ],
    },
  },
  { label: 'Case Studies', to: paths.caseStudies },
  { label: 'Pricing', to: paths.pricing },
  { label: 'Who We Serve', to: paths.whoWeServe },
  {
    label: 'Company',
    to: paths.company,
    mega: {
      tone: 'sky',
      items: [
        { label: 'About us', sub: 'Synergy', to: paths.company },
        { label: 'Careers', sub: 'Synergy', to: paths.careers },
        { label: 'Contact', sub: 'Synergy', to: paths.company },
      ],
    },
  },
  {
    label: 'Resources',
    to: paths.resources,
    mega: {
      tone: 'sky',
      items: [
        { label: 'ROI Calculator', sub: 'Synergy', to: paths.resources },
        { label: 'Blogs', sub: 'Synergy', to: paths.blog },
      ],
    },
  },
]

/** ✓ Footer copy + link columns — exactly as in the Figma footer frame. */
export const footer = {
  heading: 'Bidding should be a process, not a fire drill.',
  body: 'If your team is filling forms at midnight before submission, that is the part Bidwiser takes.',
  cta: 'Request a Demo',
  columns: {
    product: {
      title: 'Product',
      links: [
        { label: 'Tender Discovery', to: paths.product },
        { label: 'Requirement Analysis', to: paths.product },
        { label: 'Bid / No - Bid Engine', to: paths.product },
        { label: 'Bid Generator', to: paths.product },
        { label: 'Industries we serve', to: paths.whoWeServe },
        { label: 'ROI Calculator', to: paths.product },
      ],
    },
    general: {
      title: 'General',
      links: [
        { label: 'Case Studies', to: paths.caseStudies },
        { label: 'About us', to: paths.company },
        { label: 'Blog', to: paths.blog },
        { label: 'Pricing', to: paths.pricing },
        { label: 'Career', to: paths.careers },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', to: paths.privacy },
        { label: 'Terms of use', to: paths.terms },
      ],
    },
  },
}
