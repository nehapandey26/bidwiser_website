import { cn } from '@/lib/cn'
import { tenderMatches } from '@/data/mockData'
import { Search, Building, Workflow, Check, Bell } from '@/components/icons'
import MatchBadge from '@/components/ui/MatchBadge'
import BrandBadge from '@/components/brand/BrandBadge'

const ICONS = { building: Building, workflow: Workflow }

/* ══════════════════════════════════════════════════════════════════════════
 *  LAYOUT (px) — ✓ from the Figma step-01 frame + Inspect panel
 * ══════════════════════════════════════════════════════════════════════════ */
const L = {
  badge: 49, // exact SVG size
  feedH: 44, // badge → card gap (the 3 feeder lines live here)
  feedSpread: 28, // outer feeder lines distance
  cardW: 247, // ✓ Inspect: card hug width 247 (chips row is wider — spills 20px each side)
  branchW: 174, // ✓ Inspect: "Vector 2" is 87×61 per side
  branchH: 61,
  stemH: 20, // straight part before the curve
}

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms) — pura sequence yahan se tune karo
 * ══════════════════════════════════════════════════════════════════════════ */
const T = {
  badge: 0,
  feedLines: 180,
  feedBeads: 420,
  card: 560,
  rowStart: 820,
  rowGap: 300,
  branch: 2120,
  branchBeads: 2380,
  chips: 2560,
}
const BEAD_LOOPS = 3 // beads itni baar girengi, phir ruk jaayengi

const LINE = 'bg-white/90'
const BEAD = 'bg-accent'

/**
 * Floating tender-match card shown in "How it works — 01 Find it".
 * ✓ Figma step-01 frame + Inspect values; streamline.ai-style motion:
 * badge → 3 feeder lines with falling beads → card → rows type in one by one
 * → white curved branch connector with beads → two outcome chips.
 * Beads loop BEAD_LOOPS times then stop. `animate={false}` renders it static.
 */
export default function TenderSearchMock({ withSummary = false, animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const bead = (travel, delay) => ({
    className: cn('absolute -left-[1.5px] top-0 h-2 w-[4px] rounded-full', BEAD, anim('bead')),
    style: { '--bead-travel': `${travel}px`, animationDelay: `${delay}ms`, animationIterationCount: BEAD_LOOPS },
  })

  return (
    <div className={cn('flex flex-col items-center', className)}>
      {/* ── origin: exact Bidwiser badge ─────────────────────────────── */}
      <div className={anim('pop-in')} style={{ animationDelay: `${T.badge}ms` }}>
        <BrandBadge size={L.badge} />
      </div>

      {/* ── three feeder lines + beads (fall the full line length) ─────── */}
      <div className="relative" style={{ height: L.feedH, width: L.feedSpread }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn('absolute top-0 h-full w-px', LINE, anim('draw-v'))}
            style={{ left: `${i * 50}%`, animationDelay: `${T.feedLines + i * 60}ms` }}
          >
            <span {...bead(L.feedH - 8, T.feedBeads + i * 220)} />
          </span>
        ))}
      </div>

      {/* ── search card ── ✓ Inspect: p 11.2, gap 11.2, r 11.2, 0.7px #FCCCB8, white/90 */}
      <div
        className={cn(
          'flex flex-col gap-[11px] rounded-[11px] border-[0.7px] border-[#FCCCB8] bg-white/90 p-[11px] text-[11px] shadow-[0_0.7px_1.4px_0_rgba(20,10,0,0.06)] backdrop-blur-[2px]',
          anim('pop-in'),
        )}
        style={{ width: L.cardW, animationDelay: `${T.card}ms` }}
      >
        <div className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-[10px] text-black/40">
          <Search size={12} />
          <span>Search...</span>
        </div>

        <div className="space-y-0.5">
          {tenderMatches.map((t, i) => {
            const Icon = ICONS[t.icon] ?? Building
            const d = T.rowStart + i * T.rowGap
            return (
              <div
                key={t.name}
                className={cn('flex items-center gap-2.5 rounded-lg py-1.5 pr-1', anim('pop-in'))}
                style={{ animationDelay: `${d}ms` }}
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-black/10 bg-white text-black/60">
                  <Icon size={13} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-ink">
                    <span
                      className={anim('type-in')}
                      style={{ animationDelay: `${d + 80}ms`, animationTimingFunction: `steps(${t.name.length}, end)` }}
                    >
                      {t.name}
                    </span>
                  </div>
                  <div className="text-[10px] text-black/40">
                    <span
                      className={anim('type-in')}
                      style={{ animationDelay: `${d + 260}ms`, animationTimingFunction: `steps(${t.meta.length}, end)` }}
                    >
                      {t.meta}
                    </span>
                  </div>
                </div>
                <span className={anim('pop-in')} style={{ animationDelay: `${d + 380}ms` }}>
                  <MatchBadge value={t.match} />
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {withSummary && (
        <>
          {/* ── branch connector ── ✓ Inspect: white 1px curved vector, 87×61 per side */}
          <div className="relative" style={{ width: L.branchW, height: L.branchH }}>
            <svg
              viewBox={`0 0 ${L.branchW} ${L.branchH}`}
              width={L.branchW}
              height={L.branchH}
              fill="none"
              className="absolute inset-0"
              aria-hidden="true"
            >
              {/* stem */}
              <path
                d={`M${L.branchW / 2} 0 V${L.stemH}`}
                stroke="#fff"
                strokeWidth="1"
                className={anim('draw-v')}
                style={{ transformOrigin: 'top', animationDelay: `${T.branch}ms` }}
              />
              {/* two curved arms: down, round the corner, out to each side, round, down */}
              {[-1, 1].map((dir) => {
                const cx = L.branchW / 2
                const ex = dir < 0 ? 0.5 : L.branchW - 0.5
                const r = 9
                const barY = L.stemH + r
                return (
                  <path
                    key={dir}
                    d={[
                      `M${cx} ${L.stemH}`,
                      `Q${cx} ${barY} ${cx + dir * r} ${barY}`,
                      `H${ex - dir * r}`,
                      `Q${ex} ${barY} ${ex} ${barY + r}`,
                      `V${L.branchH}`,
                    ].join(' ')}
                    stroke="#fff"
                    strokeWidth="1"
                    pathLength="1"
                    strokeDasharray="1"
                    className={anim('draw-path')}
                    style={{ animationDelay: `${T.branch + 120}ms` }}
                  />
                )
              })}
            </svg>

            {/* beads riding the stem and the two drops */}
            <span className="absolute left-1/2 top-0 w-px -translate-x-1/2" style={{ height: L.stemH }}>
              <span {...bead(L.stemH - 8, T.branchBeads)} />
            </span>
            {[0.5, L.branchW - 0.5].map((x, i) => (
              <span key={x} className="absolute w-px" style={{ left: x, top: L.stemH + 18, height: L.branchH - L.stemH - 18 }}>
                <span {...bead(L.branchH - L.stemH - 26, T.branchBeads + 520 + i * 260)} />
              </span>
            ))}
          </div>

          {/* ── outcome chips ── ✓ Inspect: p 6.5, gap 2.6, 0.62px #ADC3FF, rgba(192,213,255) */}
          <div className="-mt-1 flex justify-between" style={{ width: L.branchW + 116 }}>
            <span
              className={cn(
                'inline-flex items-center gap-[4px] rounded-pill border-[0.62px] border-[#ADC3FF] bg-[rgba(192,213,255,0.55)] px-[9px] py-[6.5px] text-[9.5px] font-medium text-brand',
                anim('pop-in'),
              )}
              style={{ animationDelay: `${T.chips}ms` }}
            >
              <span className="grid size-3.5 place-items-center rounded-full bg-brand text-white">
                <Check size={8} />
              </span>
              20 Matching Tenders
            </span>
            <span
              className={cn(
                'inline-flex items-center gap-[4px] rounded-pill border-[0.62px] border-[#FCCCB8] bg-[rgba(255,214,196,0.55)] px-[9px] py-[6.5px] text-[9.5px] font-medium text-[#d9762f]',
                anim('pop-in'),
              )}
              style={{ animationDelay: `${T.chips + 140}ms` }}
            >
              <Bell size={11} className="text-[#e0813b]" />
              Corrigendum Alerts
            </span>
          </div>
        </>
      )}
    </div>
  )
}
