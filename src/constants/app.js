/** App-wide constants. Keep magic strings/numbers here, not in components. */

export const APP_NAME = 'Bidwiser'

export const TAGLINE = 'Bidwiser turns an RFP into a winning bid.'

export const APP_DESCRIPTION =
  'Bidwiser reads all the tender documents, fills your forms, and writes your technical bid — and flags anything that could get you disqualified.'

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL in production (e.g. https://bidwiser.com). */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''

/** Tailwind breakpoints mirrored for JS (media queries, etc.). */
export const BREAKPOINTS = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
}
