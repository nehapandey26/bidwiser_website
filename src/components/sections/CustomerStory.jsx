import { customerStory as c } from '@/data/landing'
import { sections } from '@/lib/paths'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import TickerStrip from '@/components/decor/TickerStrip'

/** "Trusted by people in Procurement" — testimonial on a gradient card. */
export default function CustomerStory() {
  return (
    <section id={sections.customers} className="bg-night">
      <TickerStrip />
      <Container framed tone="dark" className="border-b border-ink-grid py-16 md:py-20">
        <div className="brand-gradient overflow-hidden rounded-2xl px-6 py-12 md:px-16 md:py-16">
          <div className="flex flex-col items-center text-center">
            <EyebrowPill tone="light">{c.eyebrow}</EyebrowPill>
            <h2 className="mt-5 max-w-[16ch] text-h2 text-white">{c.heading}</h2>
          </div>

          <figure className="mx-auto mt-10 max-w-2xl rounded-xl bg-white p-8 md:p-12">
            <blockquote className="text-center font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] font-light leading-[1.3] tracking-[-0.03em]">
              <span className="text-ink">&ldquo;{c.quotePlain} </span>
              <em className="italic text-brand-accent">{c.quoteEmphasis}</em>
              <span className="text-ink">&rdquo;</span>
            </blockquote>

            <figcaption className="mt-10 flex items-center justify-between gap-4">
              <span className="font-serif text-xl font-semibold tracking-tight text-accent-red">
                {c.company}
              </span>
              <span className="flex items-center gap-3 text-right">
                <span>
                  <span className="block text-sm font-medium text-ink">{c.author}</span>
                  <span className="block text-sm text-muted">{c.role}</span>
                </span>
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/12 text-sm font-semibold text-brand"
                  aria-hidden="true"
                >
                  {c.author.split(' ').map((w) => w[0]).join('')}
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
