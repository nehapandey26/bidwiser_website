import { tenderDiscoveryPage as t } from '@/data/landing'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import HatchDivider from '@/components/decor/HatchDivider'
import FeatureStage from '@/components/sections/FeatureStage'

export const metadata = {
  title: 'Tender Discovery',
  description:
    'Find the tenders that fit your company — searched in plain language, ranked against your profile, with every document attached.',
  alternates: { canonical: '/product/tender-discovery' },
}

/**
 * ✓ Figma "Tender Discovery":
 *   hero → hatch → blank band → pinned feature sequence on the sky gradient →
 *   hatch → blank band → footer.
 */
export default function TenderDiscoveryPage() {
  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        {/* ── hero ── */}
        <div className="px-8 pb-16 pt-20 md:pt-24 lg:px-10">
          <EyebrowPill>{t.eyebrow}</EyebrowPill>
          <h1 className="mt-5 max-w-[24ch] text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.2] text-ink">
            {t.heading}
          </h1>
        </div>

        <HatchDivider className="border-t-0" />
        <div aria-hidden="true" className="h-16" />

        {/* ── features (pinned on desktop, stacked below lg) ── */}
        <FeatureStage features={t.features} tone="sky" />

        <HatchDivider />
        {/* ✓ Figma: blank band before the footer */}
        <div aria-hidden="true" className="h-40" />
      </Container>
    </section>
  )
}
