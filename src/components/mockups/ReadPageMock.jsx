import { cn } from '@/lib/cn'
import { readEveryPage as r } from '@/data/landing'
import { Sparkles, ChevronDown } from '@/components/icons'

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms) — ✓ Figma Frame 315
 *  window → filename types → page count → "Mapping RFP" → preview lines draw
 *  → "Extracted Data" types → accordion rows one after another
 * ══════════════════════════════════════════════════════════════════════════ */
const T = {
  card: 0,
  file: 300, // filename typewriter
  fileDur: 1000,
  pages: 1400,
  mapping: 1700, // "Mapping RFP" chip on the preview pane
  line: 2050, // preview skeleton lines
  lineGap: 160,
  title: 2900, // "Extracted Data"
  titleDur: 560,
  row: 3450, // accordion rows
  rowGap: 850,
  body: 260, // a row's body, after its label
}

const BEAD_COLOR = '#1e3a8a' // navy square — same family as this card's blue bg

/**
 * Step 02 "Read every page for you" — ✓ Figma Frame 315: the tender open in a
 * document viewer, its preview pane on the left and the extracted clauses
 * accordion on the right. Everything writes itself in, one piece at a time.
 */
export default function ReadPageMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div
      className={cn(
        'w-[300px] overflow-hidden rounded-[8px] border border-black/[0.07] bg-white shadow-chip',
        anim('pop-in'),
        className,
      )}
      style={at(T.card)}
    >
      {/* ── title bar ── */}
      <div className="flex items-center gap-1.5 border-b border-black/[0.06] px-2 py-1.5">
        {['#d9d9df', '#d9d9df', '#d9d9df'].map((c, i) => (
          <span key={i} className="size-1.5 rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-1 min-w-0 flex-1 truncate text-[7px] font-medium text-ink">
          <span
            className={anim('type-in')}
            style={{
              ...at(T.file),
              animationDuration: `${T.fileDur}ms`,
              animationTimingFunction: `steps(${r.file.length}, end)`,
            }}
          >
            {r.file}
          </span>
        </span>
        <span className={cn('shrink-0 text-[6px] text-black/40', anim('pop-in'))} style={at(T.pages)}>
          {r.pages}
        </span>
      </div>

      <div className="grid grid-cols-[88px_1fr]">
        {/* ── preview pane ── */}
        <div className="relative border-r border-black/[0.06] bg-[#f3f4f8] p-2">
          <span
            className={cn(
              'inline-flex items-center gap-1 rounded-pill border border-black/10 bg-white px-1.5 py-0.5 text-[6px] font-medium text-black/60',
              anim('pop-in'),
            )}
            style={at(T.mapping)}
          >
            <Sparkles size={6} /> {r.mapping}
          </span>
          <div className="mt-2.5 space-y-1.5">
            {[100, 78, 92, 64, 86, 72, 94, 58].map((w, i) => (
              <span
                key={i}
                className={cn('block h-1 rounded-full bg-[#dfe2ea]', anim('draw-h'))}
                style={{ width: `${w}%`, transformOrigin: 'left', ...at(T.line + i * T.lineGap) }}
              />
            ))}
          </div>
        </div>

        {/* ── extracted data ── */}
        <div className="p-2">
          <p className="text-[8px] font-semibold text-ink">
            <span
              className={anim('type-in')}
              style={{
                ...at(T.title),
                animationDuration: `${T.titleDur}ms`,
                animationTimingFunction: 'steps(14, end)',
              }}
            >
              Extracted Data
            </span>
          </p>

          <ul className="mt-1.5">
            {r.extracted.map((row, i) => {
              const start = T.row + i * T.rowGap
              return (
                <li
                  key={row.label}
                  className={cn('border-t border-black/[0.06] py-1.5 first:border-t-0', anim('pop-in'))}
                  style={at(start)}
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="text-[7px] font-medium text-ink">{row.label}</span>
                    <ChevronDown
                      size={8}
                      className={cn('mt-px shrink-0 text-black/30', row.body && 'rotate-180')}
                    />
                  </span>
                  {row.body && (
                    <p
                      className={cn('mt-0.5 text-[6px] leading-relaxed text-black/50', anim('pop-in'))}
                      style={at(start + T.body)}
                    >
                      {row.body}
                    </p>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

/**
 * ✓ Figma: the navy 7px rounded square that travels down a connector line,
 * `loops` times. Shared with PrepareBidMock.
 */
export function SquareBead({ travel, delay, loops = 3, color = BEAD_COLOR, animate = true }) {
  // outer = centring transform, inner = the travelling animation
  return (
    <span className="absolute left-1/2 top-0 -translate-x-1/2">
      <span
        className={cn('block size-[7px] rounded-[2px]', animate && 'bead')}
        style={{
          background: color,
          '--bead-travel': `${travel}px`,
          animationDelay: `${delay}ms`,
          animationIterationCount: loops,
        }}
      />
    </span>
  )
}
