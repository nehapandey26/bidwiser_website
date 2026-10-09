import { requirementAnalysisPage as r } from '@/data/landing'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'
import FeatureStage from '@/components/sections/FeatureStage'

export const metadata = {
  title: 'Requirement Analysis',
  description:
    'Bidwiser reads every page of the RFP — annexures, volumes and scanned pages — and gives you a summary you can work from.',
  alternates: { canonical: '/product/requirement-analysis' },
}

/**
 * ✓ Figma "Requirement Analysis":
 *   centred hero → hatch → blank band → pinned feature sequence on the peach
 *   gradient → hatch → blank band → footer.
 */
export default function RequirementAnalysisPage() {
  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        {/* ── hero ── */}
        <div className="flex flex-col items-center px-6 pb-24 pt-24 text-center md:pb-28 md:pt-28">
          <EyebrowPill className="!self-center">{r.eyebrow}</EyebrowPill>
          <h1 className="mt-5 max-w-[22ch] text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.15] text-ink">
            {r.heading}
          </h1>
        </div>

        <HatchDivider className="border-t-0" />
        <div aria-hidden="true" className="h-16" />

        {/* ── features (pinned on desktop, stacked below lg) ── */}
        <FeatureStage features={r.features} tone="peach" />

        <HatchDivider />
        {/* ✓ Figma: blank band before the footer */}
        <div aria-hidden="true" className="h-40" />
      </Container>
    </section>
  )
}
