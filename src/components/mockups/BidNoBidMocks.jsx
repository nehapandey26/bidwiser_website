import { cn } from '@/lib/cn'
import { bidNoBidPage as b } from '@/data/landing'
import { Check, AlertTriangle, Plus } from '@/components/icons'

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms) — har tile ek ke baad ek, aur tile ke andar:
 *  box → status dot → label type hota hai → status badge
 * ══════════════════════════════════════════════════════════════════════════ */
const B = {
  first: 400, // pehli tile kab aaye
  tileGap: 900, // do tiles ke beech gap
  // tile ke andar (offsets):
  dot: 200,
  label: 320,
  labelDur: 700,
  badge: 1150,
}

const TONES = {
  pass: { chip: 'bg-[#e6f5ee] text-[#0f9d6b]', dot: '#0f9d6b', Icon: Check },
  warn: { chip: 'bg-[#fff3eb] text-[#d9762f]', dot: '#e0813b', Icon: AlertTriangle },
  fail: { chip: 'bg-[#fdeaea] text-[#d6453f]', dot: '#d6453f', Icon: Plus },
}

/**
 * ✓ Figma "Bid / No-Bid Engine" — every deciding clause checked against the
 * company's own documents, shown as pass / review / fail tiles. Each tile
 * arrives in turn and writes itself: dot → label types in → status badge.
 */
export function EligibilityMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div className={cn('grid w-full max-w-[400px] grid-cols-2 gap-2.5', className)}>
      {b.criteria.map((c, i) => {
        const tone = TONES[c.tone] ?? TONES.pass
        const Icon = tone.Icon
        const start = B.first + i * B.tileGap

        return (
          <div
            key={c.label}
            className={cn('rounded-lg border border-black/[0.07] bg-white p-3 shadow-chip', anim('pop-in'))}
            style={at(start)}
          >
            <span className="flex items-start gap-1.5">
              <span
                className={cn('mt-0.5 grid size-3 shrink-0 place-items-center rounded-full text-white', anim('icon-pop'))}
                style={{ background: tone.dot, ...at(start + B.dot) }}
              >
                <Icon size={7} />
              </span>

              {/* label writes itself in */}
              <span className="min-h-[11px] text-[8.5px] font-medium leading-tight text-ink">
                <span
                  className={anim('type-in')}
                  style={{
                    ...at(start + B.label),
                    animationDuration: `${B.labelDur}ms`,
                    animationTimingFunction: `steps(${c.label.length}, end)`,
                  }}
                >
                  {c.label}
                </span>
              </span>
            </span>

            <span
              className={cn(
                'mt-3 inline-block rounded-[4px] px-1.5 py-0.5 text-[7px] font-medium',
                tone.chip,
                anim('pop-in'),
              )}
              style={at(start + B.badge)}
            >
              {c.status}
            </span>
          </div>
        )
      })}
    </div>
  )
}
