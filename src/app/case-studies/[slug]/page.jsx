import { notFound } from 'next/navigation'

import { caseStudiesPage, caseStudyDefaults, caseStudyDetails } from '@/data/landing'
import Container from '@/components/ui/Container'
import HatchDivider from '@/components/decor/HatchDivider'

/** Merge the shared defaults with any per-slug overrides. */
function getStudy(slug) {
  const study = caseStudiesPage.studies.find((s) => s.slug === slug)
  if (!study) return null
  return { ...caseStudyDefaults, ...(caseStudyDetails[slug] ?? {}), ...study }
}

// only the slugs below exist — anything else is a real 404
export const dynamicParams = false

export function generateStaticParams() {
  return caseStudiesPage.studies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const study = getStudy(slug)
  if (!study) return {}
  return {
    title: `${study.title} — ${study.name}`,
    description: study.blurb,
    alternates: { canonical: `/case-studies/${slug}` },
  }
}

/**
 * ✓ Figma case-study detail:
 *   serif title → "Category · Date" meta → ruled "Impact" band → 2 × 2 grid of
 *   audience segments → hatch → blank band → footer.
 */
export default async function CaseStudyPage({ params }) {
  const { slug } = await params
  const study = getStudy(slug)
  if (!study) notFound()

  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        {/* ── title + meta ── */}
        <div className="border-b border-grid px-8 pb-10 pt-20 md:pt-24 lg:px-10">
          <h1 className="max-w-[18ch] text-[clamp(2.1rem,3.8vw,3.2rem)] leading-[1.15] text-ink">
            {study.title}
          </h1>
          <p className="mt-8 flex items-center gap-3 text-[11px] text-muted">
            <span className="font-medium text-ink">{study.category}</span>
            <span aria-hidden="true">·</span>
            <time>{study.date}</time>
          </p>
        </div>

        {/* ── impact ── */}
        <h2 className="border-b border-grid py-10 text-center text-[1.6rem] font-light tracking-[-0.03em] text-ink">
          {study.impactTitle}
        </h2>

        <ul className="grid sm:grid-cols-2">
          {study.impact.map((item, i) => (
            <li
              key={item}
              className="flex min-h-[110px] border-b border-grid p-7 text-[13px] leading-snug text-ink sm:[&:nth-child(odd)]:border-r"
            >
              <span className="max-w-[28ch]">{item}</span>
            </li>
          ))}
        </ul>

        <HatchDivider className="border-t-0" />
        {/* ✓ Figma: blank band before the footer */}
        <div aria-hidden="true" className="h-40" />
      </Container>
    </section>
  )
}
