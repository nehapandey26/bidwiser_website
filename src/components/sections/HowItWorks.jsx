'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/cn'
import { steps } from '@/data/landing'
import { sections } from '@/lib/paths'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import TenderSearchMock from '@/components/mockups/TenderSearchMock'
import ReadPageMock from '@/components/mockups/ReadPageMock'
import PrepareBidMock from '@/components/mockups/PrepareBidMock'
import SubmitMock from '@/components/mockups/SubmitMock'

/* ══════════════════════════════════════════════════════════════════════════
 *  LAYOUT KNOBS
 * ══════════════════════════════════════════════════════════════════════════ */
const SCROLL_PER_STEP_VH = 100 // har step ke liye kitna scroll (viewport-height %) — zyada = slower
const HEADER_H = 76 // must match --header-h in theme.css
const MOCK_MIN_SCALE = 0.55 // chhote viewport par mock isse zyada chhota nahi hoga

const MOCKS = {
  tenderSearch: (p) => <TenderSearchMock withSummary {...p} />,
  readPage: ReadPageMock,
  prepareBid: PrepareBidMock,
  submit: SubmitMock,
}

/**
 * "From tender documents to a ready bid." — scroll-driven 4-step walkthrough.
 *
 * Desktop: the section is a tall scroll "runway"; heading + tab list + step
 * card are pinned (sticky) inside it and are sized to ALWAYS fit the viewport
 * (paddings/type scale with vh, card is flex-1, the mock auto-scales to the
 * card's height). Scrolling advances 01 → 04, scrolling up reverses.
 * Mobile: plain stacked list, no scroll-jacking.
 */
export default function HowItWorks() {
  const runwayRef = useRef(null)
  const [active, setActive] = useState(0)
  const [stepProgress, setStepProgress] = useState(0) // 0..1 within the active step

  /* ── scroll → active step ─────────────────────────────────────────── */
  useEffect(() => {
    const el = runwayRef.current
    if (!el) return
    let raf = 0

    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const pinned = rect.height - window.innerHeight + HEADER_H // scroll distance while pinned
      if (pinned <= 0) return
      const t = Math.min(1, Math.max(0, (HEADER_H - rect.top) / pinned)) // 0..1 through runway
      const raw = t * steps.length
      const idx = Math.min(steps.length - 1, Math.floor(raw))
      setActive(idx)
      setStepProgress(idx === steps.length - 1 && t >= 1 ? 1 : raw - idx)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  /* ── tab click → scroll to that step ─────────────────────────────── */
  const goTo = useCallback((i) => {
    const el = runwayRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pinned = rect.height - window.innerHeight + HEADER_H
    const start = rect.top + window.scrollY - HEADER_H
    const target = start + ((i + 0.08) / steps.length) * pinned
    window.scrollTo({ top: target, behavior: 'smooth' })
  }, [])

  const step = steps[active]

  return (
    <section id={sections.howItWorks} className="bg-surface">
      {/* ── DESKTOP: scroll runway + sticky stage ─────────────────────── */}
      <div
        ref={runwayRef}
        className="hidden lg:block"
        style={{ height: `${steps.length * SCROLL_PER_STEP_VH + 100}vh` }}
      >
        <div
          className="sticky flex flex-col overflow-hidden"
          style={{ top: HEADER_H, height: `calc(100vh - ${HEADER_H}px)` }}
        >
          {/* paddings + gaps scale with viewport height so everything fits */}
          <Container
            framed
            className="flex h-full min-h-0 flex-col border-b border-grid py-[clamp(0.75rem,3.2vh,3.5rem)]"
          >
            <SectionHeading
              eyebrow="How it works"
              title="From tender documents to a ready bid."
              titleClassName="max-w-[30ch] text-[clamp(1.5rem,4.6vh,2.5rem)]"
            />

            {/* ✓ Figma: ~90px between heading and the tabs/card row; tab column ≈ 310px incl. gap */}
            <div className="mt-[clamp(1rem,6vh,5.5rem)] grid min-h-0 flex-1 grid-cols-[250px_1fr] gap-[60px]">
              <StepList active={active} progress={stepProgress} onSelect={goTo} />
              <StepCard step={step} fill />
            </div>
          </Container>
        </div>
      </div>

      {/* ── MOBILE: simple stacked steps ──────────────────────────────── */}
      <Container framed className="border-b border-grid py-16 lg:hidden">
        <SectionHeading eyebrow="How it works" title="From tender documents to a ready bid." />
        <div className="mt-10 space-y-6">
          {steps.map((s) => (
            <div key={s.id}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-muted">
                <span className="mr-2 inline-block size-2 bg-accent align-middle" />
                {s.index} {s.tab}
              </p>
              <StepCard step={s} animate={false} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────── step list */

/**
 * ✓ Figma: plain list — no rules between rows, no progress bar. Active row =
 * orange square + #1e1e1e text; others = grey square + light-grey text.
 * `progress` is kept for the (subtle) square fill so scrolling still reads.
 */
function StepList({ active, onSelect }) {
  return (
    <ol className="flex flex-col gap-[clamp(0.35rem,1.6vh,0.9rem)] self-start pt-1">
      {steps.map((s, i) => {
        const isActive = i === active
        const isDone = i < active
        return (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              className="group flex w-full items-center gap-3.5 py-1 text-left"
            >
              <span
                className={cn(
                  'relative size-[7px] shrink-0 overflow-hidden transition-colors duration-300',
                  isActive ? 'bg-accent' : isDone ? 'bg-[#8d8d8d]' : 'bg-[#c7c7c7]',
                )}
              />
              <span
                className={cn(
                  'text-[15px] font-medium uppercase tracking-[0.02em] transition-colors duration-300',
                  isActive ? 'text-ink' : 'text-[#b4b4b4] group-hover:text-muted',
                )}
              >
                <span className="tabular-nums">{s.index}</span>
                <span className="ml-2.5">{s.tab}</span>
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}

/* ─────────────────────────────────────────────────────────── step card */

/**
 * `fill` = desktop sticky mode: the card takes whatever height is left and the
 * mock inside scales down to fit it (measured with ResizeObserver), so the
 * whole scene — body text + chips at the bottom — is always visible.
 */
function StepCard({ step, animate = true, fill = false }) {
  const Mock = MOCKS[step.mock] ?? MOCKS.tenderSearch
  const isSky = step.tone === 'sky'

  const cardRef = useRef(null)
  const mockRef = useRef(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!fill) return
    const card = cardRef.current
    const mock = mockRef.current
    if (!card || !mock) return
    const fit = () => {
      const ch = card.clientHeight
      const mh = mock.offsetHeight // layout height — unaffected by the transform
      if (ch && mh) setScale(Math.max(MOCK_MIN_SCALE, Math.min(1, (ch - 28) / mh)))
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(card)
    ro.observe(mock)
    return () => ro.disconnect()
  }, [fill, step.id])

  return (
    <div
      ref={cardRef}
      className={cn('relative overflow-hidden rounded-[8px]', fill ? 'h-full min-h-0' : 'min-h-[440px]')}
    >
      {/* two gradient layers crossfade — CSS can't animate a gradient itself */}
      <div className={cn('peach-gradient absolute inset-0 transition-opacity duration-500', isSky && 'opacity-0')} />
      <div className={cn('sky-gradient absolute inset-0 transition-opacity duration-500', !isSky && 'opacity-0')} />

      {/* ✓ Figma: concentric 1px white rings centred on the card's right edge */}
      <div
        key={animate ? `rings-${step.id}` : 'rings'}
        className={cn(
          'pointer-events-none absolute right-0 top-1/2 size-[760px] -translate-y-1/2 translate-x-1/2',
          animate && 'step-rings',
        )}
        aria-hidden="true"
      >
        {[760, 600, 440].map((d) => (
          <span
            key={d}
            className="absolute rounded-full border border-white/80"
            style={{ width: d, height: d, top: (760 - d) / 2, left: (760 - d) / 2 }}
          />
        ))}
      </div>

      {/* content — remounts on step change so the enter animation replays */}
      <div
        key={animate ? step.id : 'static'}
        className={cn(
          'relative flex h-full flex-col',
          fill ? 'p-[clamp(1rem,3.4vh,2.5rem)]' : 'min-h-[440px] p-8 md:p-10',
        )}
      >
        <div className={cn('max-w-[30ch]', animate && 'step-enter')}>
          <p className={cn('font-serif font-light text-muted/70', fill ? 'text-[clamp(1.25rem,3.6vh,2rem)]' : 'text-[2rem]')}>
            {step.index}
          </p>
          {/* ✓ Figma: Sentient 28px / 300 / lh 1.24 / -0.04em */}
          <h3
            className={cn(
              'mt-2 font-light leading-[1.24] tracking-[-0.04em] text-ink',
              fill ? 'text-[clamp(1.15rem,3.2vh,1.75rem)]' : 'text-[1.75rem]',
            )}
          >
            {step.title}
          </h3>
        </div>

        {/* ✓ Figma: DM Sans 16px / 500 / #797979, pinned bottom-left */}
        <p
          className={cn(
            'mt-auto max-w-[36ch] pt-4 font-medium text-muted',
            fill ? 'text-[clamp(0.78rem,1.9vh,1rem)]' : 'text-base',
            animate && 'step-enter',
          )}
          style={animate ? { animationDelay: '60ms' } : undefined}
        >
          {step.body}
        </p>

        {/* the step's mock UI, right side — outer = position, middle = fit-scale, inner = animation */}
        <div className="absolute right-[clamp(1.5rem,5%,4rem)] top-1/2 w-[300px] -translate-y-1/2">
          <div ref={mockRef} style={{ transform: `scale(${scale})`, transformOrigin: 'center right' }}>
            <div className={cn(animate && 'step-enter-mock')}>
              <Mock animate={animate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
