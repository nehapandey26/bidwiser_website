import { cn } from '@/lib/cn'
import { Sparkles, Upload, FileText, DotsVertical } from '@/components/icons'
import { SquareBead } from './ReadPageMock'

/* ══════════════════════════════════════════════════════════════════════════
 *  LAYOUT (px) — ✓ from the Figma step-03 frame, scaled to a 300-wide mock
 * ══════════════════════════════════════════════════════════════════════════ */
const L = {
  panelW: 258,
  rows: 5,
  branchW: 160, // total width of the curved branch (cards' centres are ±80)
  branchH: 40,
  stemH: 14,
  cardW: 140,
  cardGap: 16,
}

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms): title types → rows draw line by line → THEN bead falls → cards
 * ══════════════════════════════════════════════════════════════════════════ */
const T = {
  panel: 0,
  title: 120,
  header: 320,
  rowStart: 460,
  rowGap: 210, // each row this much after the previous
  rowInner: { badge: 0, bar: 80, chip: 200, icons: 300 },
  branch: 460 + 210 * 5 + 200, // after the last row has finished (~1710)
  bead: 460 + 210 * 5 + 380,
  cards: 460 + 210 * 5 + 380 + 1100, // as the first bead lands (~2990); beads keep looping after
}
const BEAD_LOOPS = 3
const BEAD_COLOR = '#e0813b' // ✓ same hue as this card's peach/orange bg

const CARDS = [
  {
    title: 'Forms & Formats Extracted',
    body: 'Automatically extracts all required forms and formats directly from the RFP.',
  },
  {
    title: 'Forms & Annexures Auto-Filled',
    body: 'Fills extracted forms using your company information, ready for review and submission.',
  },
]

/**
 * Step 03 "Prepare the full bid" — ✓ Figma: "Extracted Forms" panel (Export
 * All, 5 autofill rows) branching down to two outcome cards. Choreography:
 * panel → title types → rows appear line by line (badge, bar, AI-Autofill
 * chip, icons) → curved branch draws → orange square bead falls (3×) → cards
 * pop and their titles type. `animate={false}` = static.
 */
export default function PrepareBidMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div className={cn('flex w-[300px] flex-col items-center', className)}>
      {/* ── extracted forms panel ─────────────────────────────────────── */}
      <div
        className={cn('rounded-[10px] border border-[#EBEBEB] bg-white p-2.5 text-[9px] shadow-chip', anim('pop-in'))}
        style={{ width: L.panelW, ...at(T.panel) }}
      >
        <div className="flex items-center justify-between px-1 pb-2">
          <span className="font-semibold text-ink">
            <span className={anim('type-in')} style={{ ...at(T.title), animationTimingFunction: 'steps(15, end)' }}>
              Extracted Forms
            </span>
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-pill border border-brand/25 bg-brand/[0.08] px-1.5 py-0.5 text-[7.5px] font-medium text-brand',
              anim('pop-in'),
            )}
            style={at(T.title + 260)}
          >
            <Upload size={7} /> Export All
          </span>
        </div>

        <div className="overflow-hidden rounded-md border border-black/5">
          <div
            className={cn(
              'grid grid-cols-[12px_38px_1fr_54px_28px] items-center gap-2 border-b border-black/5 bg-black/[0.02] px-2 py-1 text-[7.5px] font-medium text-black/45',
              anim('pop-in'),
            )}
            style={at(T.header)}
          >
            <span />
            <span>Pages</span>
            <span>Form Header</span>
            <span>Action</span>
            <span />
          </div>

          {Array.from({ length: L.rows }).map((_, i) => {
            const d = T.rowStart + i * T.rowGap
            return (
              <div
                key={i}
                className="grid grid-cols-[12px_38px_1fr_54px_28px] items-center gap-2 border-b border-black/[0.04] px-2 py-1.5 last:border-0"
              >
                <span className={cn('size-2.5 rounded-[2px] border border-black/15', anim('pop-in'))} style={at(d)} />
                <span
                  className={cn('rounded-pill border border-black/10 bg-[#f5f5f7] px-1 py-px text-center text-[6.5px] text-black/55', anim('pop-in'))}
                  style={at(d + T.rowInner.badge)}
                >
                  35 - 36
                </span>
                {/* the "line" of the row — draws left → right */}
                <span
                  className={cn('h-1.5 w-[74%] rounded-full bg-[#dfe2ea]', anim('draw-h'))}
                  style={{ transformOrigin: 'left', ...at(d + T.rowInner.bar) }}
                />
                <span
                  className={cn(
                    'inline-flex items-center gap-0.5 rounded-pill border border-brand/20 bg-brand/[0.08] px-1.5 py-0.5 text-[6.5px] font-medium text-brand',
                    anim('pop-in'),
                  )}
                  style={at(d + T.rowInner.chip)}
                >
                  <Sparkles size={6} /> AI Autofill
                </span>
                <span className={cn('flex items-center gap-1 text-black/30', anim('pop-in'))} style={at(d + T.rowInner.icons)}>
                  <FileText size={8} />
                  <DotsVertical size={8} />
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── curved branch connector + falling square beads ─────────────── */}
      <div className="relative" style={{ width: L.branchW, height: L.branchH }}>
        <svg viewBox={`0 0 ${L.branchW} ${L.branchH}`} width={L.branchW} height={L.branchH} fill="none" className="absolute inset-0" aria-hidden="true">
          <path
            d={`M${L.branchW / 2} 0 V${L.stemH}`}
            stroke="#fff"
            strokeWidth="1"
            className={anim('draw-v')}
            style={{ transformOrigin: 'top', ...at(T.branch) }}
          />
          {[-1, 1].map((dir) => {
            const cx = L.branchW / 2
            const ex = dir < 0 ? 0.5 : L.branchW - 0.5
            const r = 8
            const barY = L.stemH + r
            return (
              <path
                key={dir}
                d={`M${cx} ${L.stemH} Q${cx} ${barY} ${cx + dir * r} ${barY} H${ex - dir * r} Q${ex} ${barY} ${ex} ${barY + r} V${L.branchH}`}
                stroke="#fff"
                strokeWidth="1"
                pathLength="1"
                strokeDasharray="1"
                className={anim('draw-path')}
                style={at(T.branch + 120)}
              />
            )
          })}
        </svg>

        {/* stem bead */}
        <span className="absolute left-1/2 top-0 w-px" style={{ height: L.stemH }}>
          <SquareBead travel={L.stemH - 7} delay={T.bead} loops={BEAD_LOOPS} color={BEAD_COLOR} animate={animate} />
        </span>
        {/* drop beads */}
        {[0.5, L.branchW - 0.5].map((x, i) => (
          <span key={x} className="absolute w-px" style={{ left: x, top: L.stemH + 16, height: L.branchH - L.stemH - 16 }}>
            <SquareBead
              travel={L.branchH - L.stemH - 16 - 7}
              delay={T.bead + 520 + i * 260}
              loops={BEAD_LOOPS}
              color={BEAD_COLOR}
              animate={animate}
            />
          </span>
        ))}
      </div>

      {/* ── outcome cards ─────────────────────────────────────────────── */}
      <div className="flex justify-center" style={{ gap: L.cardGap }}>
        {CARDS.map((c, i) => (
          <div
            key={c.title}
            className={cn('flex gap-2 rounded-lg border border-[#EBEBEB] bg-white p-2.5 shadow-chip', anim('pop-in'))}
            style={{ width: L.cardW, ...at(T.cards + i * 160) }}
          >
            <span
              className={cn('grid size-5 shrink-0 place-items-center rounded-[5px] text-white', anim('icon-pop'))}
              style={{ background: BEAD_COLOR, ...at(T.cards + i * 160 + 420) }}
            >
              <FileText size={10} />
            </span>
            <div className="min-w-0">
              <p className="text-[8px] font-semibold leading-tight text-ink">
                <span
                  className={anim('type-in')}
                  style={{ ...at(T.cards + i * 160 + 100), animationTimingFunction: `steps(${c.title.length}, end)` }}
                >
                  {c.title}
                </span>
              </p>
              <p className={cn('mt-0.5 text-[6.5px] leading-snug text-black/45', anim('pop-in'))} style={at(T.cards + i * 160 + 520)}>
                {c.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
