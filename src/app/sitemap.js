import { SITE_URL } from '@/constants/app'
import { indexableRoutes } from '@/lib/paths'

/** Generates /sitemap.xml from the list of indexable routes. */
export default function sitemap() {
  const now = new Date()
  return indexableRoutes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }))
}
