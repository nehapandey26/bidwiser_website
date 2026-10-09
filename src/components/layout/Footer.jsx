import Link from 'next/link'

import { paths } from '@/lib/paths'
import { footer } from '@/data/nav'
import { APP_NAME } from '@/constants/app'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import HatchDivider from '@/components/decor/HatchDivider'
import { ArrowRight } from '@/components/icons'

/**
 * ✓ Figma footer (frame 1440×973, light):
 *   hatch band → ruled 3-column grid (pitch + CTA | PRODUCT | GENERAL / LEGAL)
 *   → giant brand-blue "Bidwiser" wordmark filling the container width.
 */
export default function Footer() {
  const { product, general, legal } = footer.columns

  return (
    <footer className="bg-surface">
      <Container framed className="!px-0">
        {/* hatch band — sits inside the frame, like every other divider */}
        <HatchDivider className="border-t-0" />

        {/* ── ruled grid ─────────────────────────────────────────────── */}
        <div className="grid border-b border-grid md:grid-cols-[1.36fr_1.1fr_1fr]">
          {/* pitch + CTA */}
          <div className="flex flex-col border-b border-grid p-8 md:border-b-0 md:border-r lg:p-10">
            <h2 className="max-w-[16ch] text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] text-ink">
              {footer.heading}
            </h2>
            <p className="mt-auto max-w-[36ch] pt-14 text-[13px] leading-relaxed text-muted lg:pt-20">
              {footer.body}
            </p>
            <Button
              as={Link}
              href={paths.requestDemo}
              variant="dark"
              size="sm"
              iconRight={<ArrowRight size={13} />}
              className="mt-4 w-fit !px-3 !py-1.5 !text-[11px]"
            >
              {footer.cta}
            </Button>
          </div>

          {/* PRODUCT */}
          <div className="border-b border-grid p-8 md:border-b-0 md:border-r lg:p-10">
            <FooterColumn {...product} />
          </div>

          {/* GENERAL / LEGAL stacked */}
          <div className="grid grid-rows-[auto_1fr]">
            <div className="border-b border-grid p-8 lg:p-10">
              <FooterColumn {...general} />
            </div>
            <div className="p-8 lg:p-10">
              <FooterColumn {...legal} />
            </div>
          </div>
        </div>

        {/* ── giant wordmark ── ✓ Figma: brand blue, fills the container ─── */}
        <div className="px-3 pb-2 pt-6 lg:px-4" aria-label={APP_NAME}>
          <svg viewBox="0 0 1000 190" className="block h-auto w-full" aria-hidden="true">
            {/* textLength fits the word to the container; `spacing` keeps glyph shapes intact */}
            <text
              x="0"
              y="184"
              textLength="1000"
              lengthAdjust="spacing"
              fill="#20429B"
              fontFamily="var(--font-dm-sans), 'DM Sans', ui-sans-serif, system-ui, sans-serif"
              fontWeight="700"
              fontSize="256"
              letterSpacing="-7"
            >
              {APP_NAME}
            </text>
          </svg>
        </div>
      </Container>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#9a9a9a]">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.to} className="text-[13px] text-ink transition-colors hover:text-brand">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
