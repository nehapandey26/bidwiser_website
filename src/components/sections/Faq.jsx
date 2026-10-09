import { faqs } from '@/data/landing'
import { sections } from '@/lib/paths'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import Accordion from '@/components/ui/Accordion'

/** "Questions? We're here to help" — FAQ accordion. */
export default function Faq() {
  return (
    <section id={sections.faq} className="bg-surface">
      <Container framed className="border-b border-grid py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <div>
            <EyebrowPill>FAQ</EyebrowPill>
            <h2 className="mt-5 max-w-[12ch] text-h2 text-ink">Questions? We&rsquo;re here to help</h2>
          </div>

          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  )
}
