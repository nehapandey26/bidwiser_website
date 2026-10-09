import { comparison } from '@/data/landing'
import { sections } from '@/lib/paths'
import Container from '@/components/ui/Container'
import EyebrowPill from '@/components/ui/EyebrowPill'
import LlmChatMock from '@/components/mockups/LlmChatMock'
import ExtractedFormsMock from '@/components/mockups/ExtractedFormsMock'

/** "Tenders need more than LLMs" vs "Tenders need Bidwiser". */
export default function Comparison() {
  const { llm, bidwiser } = comparison

  return (
    <section id={sections.comparison} className="bg-surface">
      <Container framed className="border-b border-grid py-20 md:py-28">
        <EyebrowPill>Comparison</EyebrowPill>

        <div className="mt-10 grid gap-x-12 gap-y-16 lg:grid-cols-2">
          {/* LLMs */}
          <div>
            <h3 className="text-h3 text-ink">{llm.title}</h3>
            <p className="mt-2 max-w-[38ch] text-copy">{llm.body}</p>
            <div className="mt-12 rounded-2xl bg-[#f1f1f2] px-7 py-8 sm:px-10">
              <LlmChatMock />
            </div>
          </div>

          {/* Bidwiser */}
          <div>
            <h3 className="text-h3 text-ink">{bidwiser.title}</h3>
            <p className="mt-2 max-w-[38ch] text-copy">{bidwiser.body}</p>
            {/* ✓ Figma: window bleeds off the right edge of this card, so it clips */}
            <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-br from-[#e7edfb] via-[#eef0f7] to-[#f5f1ea]">
              <ExtractedFormsMock />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
