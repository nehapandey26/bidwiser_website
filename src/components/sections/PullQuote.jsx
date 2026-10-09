import { pullQuote } from '@/data/landing'
import Container from '@/components/ui/Container'
import HatchDivider from '@/components/decor/HatchDivider'

/**
 * Centered editorial pull-quote framed by hatch dividers.
 * ✓ Sentient 48px / 300 / line-height 62px / -0.04em (from Figma Inspect)
 */
export default function PullQuote() {
  return (
    <section className="bg-surface">
      <Container framed className="border-b border-grid">
        <HatchDivider className="border-t-0" />

        {/* ✓ Figma text block width ~1039px */}
        <blockquote className="mx-auto max-w-[1040px] py-20 text-center text-quote leading-[1.292] tracking-[-0.04em] md:py-28">
          {pullQuote.map((part, i) => {
            if (part.emphasis)
              return (
                <em key={i} className="font-serif italic text-brand-accent">
                  {part.text}
                </em>
              )
            return (
              <span key={i} className={part.ink ? 'text-ink' : 'text-[#727272]'}>
                {part.text}
              </span>
            )
          })}
        </blockquote>

        <HatchDivider className="border-b-0" />
      </Container>
    </section>
  )
}
