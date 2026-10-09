import { cn } from '@/lib/cn'
import { problems } from '@/data/landing'
import Container from '@/components/ui/Container'
import TickerStrip from '@/components/decor/TickerStrip'

/** "Four ways a good bid still loses." — dark problem grid. */
export default function ProblemSection() {
  return (
    <section className="bg-night text-on-ink">
      <TickerStrip />
      <Container framed tone="dark" className="border-b border-ink-grid">
        <div className="grid lg:grid-cols-6">
          {/* heading cell */}
          <div className="border-b border-ink-grid p-8 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-12">
            <h2 className="max-w-[16ch] text-h1 text-on-ink">Four ways a good bid still loses.</h2>
          </div>

          {/* first problem shares the top row with the heading */}
          <ProblemCard {...problems[0]} className="lg:col-span-3" />

          {/* remaining three problems */}
          {problems.slice(1).map((p, i) => (
            <ProblemCard
              key={p.title}
              {...p}
              className={cn('border-t border-ink-grid lg:col-span-2', i > 0 && 'lg:border-l')}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

function ProblemCard({ title, body, className }) {
  return (
    <article className={cn('flex min-h-[240px] flex-col p-8 lg:min-h-[300px] lg:p-12', className)}>
      <h3 className="font-sans text-xl font-medium leading-snug text-on-ink">{title}</h3>
      <p className="mt-auto max-w-[34ch] pt-8 text-sm text-on-ink-muted">{body}</p>
    </article>
  )
}
