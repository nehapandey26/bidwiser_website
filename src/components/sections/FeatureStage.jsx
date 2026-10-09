'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/cn'
import Reveal from '@/components/ui/Reveal'
import AnimatedText from '@/components/ui/AnimatedText'
import {
  DiscoverSearchMock,
  RankedTendersMock,
  TenderFileMock,
} from '@/components/mockups/TenderDiscoveryMocks'
import { SummaryMock, ExtractedDataMock } from '@/components/mockups/RequirementAnalysisMocks'
import { EligibilityMock } from '@/components/mockups/BidNoBidMocks'
import { MethodologyMock, BidSequencingMock } from '@/components/mockups/BidGeneratorMocks'
import PrepareBidMock from '@/components/mockups/PrepareBidMock'

/* Mock registry lives here (not passed as a prop) — a Server Component page
   cannot hand components across the client boundary, only plain data. */
const MOCKS = {
  search: DiscoverSearchMock,
  ranked: RankedTendersMock,
  file: TenderFileMock,
  summary: SummaryMock,
  extracted: ExtractedDataMock,
  eligibility: EligibilityMock,
  prepare: PrepareBidMock,
  methodology: MethodologyMock,
  sequencing: BidSequencingMock,
}

/* ══════════════════════════════════════════════════════════════════════════
 *  LAYOUT / TIMING KNOBS
 * ══════════════════════════════════════════════════════════════════════════ */
const SCROLL_PER_STEP_VH = 100 // har feature ke liye kitna scroll — zyada = slower
const HEADER_H = 76 // must match --header-h in theme.css

/* text ka word-by-word timing (ms) */
const T = {
  headingStep: 70, // heading ke words ke beech gap
  bodyStep: 13, // body ke words ke beech gap
  bodyStart: (title) => 260 + String(title).split(' ').length * 70,
}

/**
 * Pinned scroll sequence used by the product sub-pages: the row stays in
 * place while scrolling swaps its heading, body and mock. Each step's text
 * types in word by word, then the mock plays its own choreography.
 * Mobile / tablet: plain stacked rows (no scroll-jacking), revealed on scroll.
 *
 * @param features  [{ id, title, body, mock }] — `mock` keys into MOCKS above
 * @param tone      'sky' | 'peach' — the gradient behind the mock
 */
export default function FeatureStage({ features, tone = 'sky' }) {
  const runwayRef = useRef(null)
  const [active, setActive] = useState(0)
  // the stage only starts animating once it is actually on screen — otherwise
  // a single-feature page would play its whole choreography before you reach it
  const [seen, setSeen] = useState(false)
  const panel = tone === 'peach' ? 'peach-gradient' : 'sky-gradient'

  /* ── scroll → active feature ──────────────────────────────────────── */
  useEffect(() => {
    const el = runwayRef.current
    if (!el) return
    let raf = 0

    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      // the stage is on screen → let the text + mock start animating
      if (rect.top < window.innerHeight && rect.bottom > HEADER_H) setSeen(true)
      const pinned = rect.height - window.innerHeight + HEADER_H
      if (pinned <= 0) return
      const p = Math.min(1, Math.max(0, (HEADER_H - rect.top) / pinned))
      setActive(Math.min(features.length - 1, Math.floor(p * features.length)))
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
  }, [features.length])

  /* ── dot click → scroll to that feature ───────────────────────────── */
  const goTo = useCallback(
    (i) => {
      const el = runwayRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const pinned = rect.height - window.innerHeight + HEADER_H
      const start = rect.top + window.scrollY - HEADER_H
      window.scrollTo({ top: start + ((i + 0.1) / features.length) * pinned, behavior: 'smooth' })
    },
    [features.length],
  )

  const feature = features[active]
  const Mock = MOCKS[feature.mock]

  return (
    <>
      {/* ── DESKTOP: scroll runway + pinned stage ─────────────────────── */}
      <div
        ref={runwayRef}
        className="hidden lg:block"
        style={{ height: `${features.length * SCROLL_PER_STEP_VH + 60}vh` }}
      >
        <div
          className="sticky overflow-hidden border-t border-grid"
          style={{ top: HEADER_H, height: `calc(100vh - ${HEADER_H}px)` }}
        >
          <div className="grid h-full grid-cols-2">
            {/* text side — remounts per step so the word run replays */}
            <div key={`text-${feature.id}-${seen}`} className="relative flex flex-col justify-between p-10 lg:p-12">
              <h2 className="max-w-[16ch] text-[clamp(1.5rem,2.3vw,2rem)] leading-snug text-ink">
                {seen && <AnimatedText text={feature.title} step={T.headingStep} />}
              </h2>

              <p className="mt-12 max-w-[46ch] text-[12px] leading-relaxed text-muted">
                {seen && (
                  <AnimatedText text={feature.body} start={T.bodyStart(feature.title)} step={T.bodyStep} />
                )}
              </p>

              {/* step dots */}
              <ul className="absolute bottom-10 right-10 flex gap-1.5 lg:bottom-12 lg:right-12">
                {features.map((f, i) => (
                  <li key={f.id}>
                    <button
                      type="button"
                      aria-label={f.title}
                      aria-current={i === active}
                      onClick={() => goTo(i)}
                      className={cn(
                        'h-1.5 rounded-full transition-all duration-300',
                        i === active ? 'w-6 bg-ink' : 'w-1.5 bg-[#d5d5d5] hover:bg-muted',
                      )}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* mock side */}
            <div className={cn('relative grid place-items-center p-10', panel)}>
              <div key={`mock-${feature.id}-${seen}`} className="step-enter-mock w-full max-w-[440px]">
                {seen && <Mock />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET: plain stacked rows ───────────────────────── */}
      <div className="lg:hidden">
        {features.map((f) => {
          const M = MOCKS[f.mock]
          return (
            <div key={f.id} className="grid border-t border-grid md:grid-cols-2">
              <Reveal className="flex min-h-[260px] flex-col justify-between p-8">
                <h2 className="max-w-[16ch] text-[clamp(1.35rem,2.1vw,1.8rem)] leading-snug text-ink">
                  {f.title}
                </h2>
                <p className="mt-10 max-w-[46ch] text-[11.5px] leading-relaxed text-muted">{f.body}</p>
              </Reveal>
              <Reveal delay={140} className={cn('flex items-center justify-center p-8', panel)}>
                <M />
              </Reveal>
            </div>
          )
        })}
      </div>
    </>
  )
}
