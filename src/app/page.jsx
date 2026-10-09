import { faqs, logoWalls } from '@/data/landing'
import { faqSchema, websiteSchema } from '@/lib/schema'
import JsonLd from '@/components/seo/JsonLd'
import {
  Hero,
  ProductShowcase,
  LogoWall,
  ProblemSection,
  PullQuote,
  HowItWorks,
  Comparison,
  CustomerStory,
  Faq,
  SecuritySection,
} from '@/components/sections'

// Fully static — pre-rendered to HTML at build time.
export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      <Hero />
      <ProductShowcase />
      <LogoWall {...logoWalls.backed} />
      <LogoWall {...logoWalls.supported} />
      <ProblemSection />
      <PullQuote />
      <HowItWorks />
      <Comparison />
      <CustomerStory />
      <Faq />
      <LogoWall {...logoWalls.featured} />
      <SecuritySection />
    </>
  )
}
