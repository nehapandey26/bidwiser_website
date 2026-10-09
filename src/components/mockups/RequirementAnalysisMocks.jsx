import { cn } from '@/lib/cn'
import { requirementAnalysisPage as r } from '@/data/landing'
import { FileText, Plus, ChevronDown, ChevronRight } from '@/components/icons'

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms) — card → title types → chips one after another
 * ══════════════════════════════════════════════════════════════════════════ */
const S = {
  card: 0,
  title: 250,
  analyse: 700,
  label: 950,
  chip: 1250, // first summary chip
  chipGap: 190,
  section: 1250 + 9 * 190 + 350, // "Process Of Bid Submission" header
  section2Chip: 1250 + 9 * 190 + 600,
}

/** ✓ Figma row 1 — the RFP read end to end, surfaced as a summary. */
export function SummaryMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div
      className={cn('w-full max-w-[360px] overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'), className)}
      style={at(S.card)}
    >
      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="flex items-center gap-1.5 text-[9.5px] font-semibold text-ink">
          <FileText size={10} className="text-black/45" />
          <span
            className={anim('type-in')}
            style={{ ...at(S.title), animationDuration: '380ms', animationTimingFunction: 'steps(7, end)' }}
          >
            Summary
          </span>
        </span>
        <span
          className={cn('rounded-[4px] bg-brand px-2.5 py-1 text-[7.5px] font-medium text-white', anim('pop-in'))}
          style={at(S.analyse)}
        >
          Analyse
        </span>
      </div>

      <div className="border-t border-black/5 px-3 py-2.5">
        <p className={cn('text-[7.5px] font-medium text-black/50', anim('pop-in'))} style={at(S.label)}>
          Summary
        </p>

        <ul className="mt-2 flex flex-wrap gap-1.5">
          {r.summaryChips.map((chip, i) => (
            <li
              key={chip}
              className={cn(
                'inline-flex items-center gap-1 rounded-[4px] border border-black/10 bg-white px-1.5 py-1 text-[7px] text-ink',
                anim('pop-in'),
              )}
              style={at(S.chip + i * S.chipGap)}
            >
              {chip} <Plus size={7} className="text-black/40" />
            </li>
          ))}
        </ul>

        <p className={cn('mt-3 text-[7.5px] font-medium text-ink', anim('pop-in'))} style={at(S.section)}>
          Process Of Bid Submission
        </p>

        <ul className="mt-2 flex flex-wrap gap-1.5">
          {r.submissionChips.map((chip, i) => (
            <li
              key={chip}
              className={cn(
                'inline-flex items-center gap-1 rounded-[4px] border border-black/10 bg-white px-1.5 py-1 text-[7px] text-ink',
                anim('pop-in'),
              )}
              style={at(S.section2Chip + i * S.chipGap)}
            >
              {chip} <Plus size={7} className="text-black/40" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ── row 2 timeline ── */
const E = { card: 0, title: 250, section: 800, sectionGap: 900 }

/** ✓ Figma row 2 — every detail extracted, cited and expandable. */
export function ExtractedDataMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div
      className={cn('w-full max-w-[360px] overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'), className)}
      style={at(E.card)}
    >
      <p className="flex items-center gap-1.5 px-3 py-2.5 text-[9.5px] font-semibold text-ink">
        <FileText size={10} className="text-black/45" />
        <span
          className={anim('type-in')}
          style={{ ...at(E.title), animationDuration: '520ms', animationTimingFunction: 'steps(14, end)' }}
        >
          Extracted Data
        </span>
      </p>

      <ul>
        {r.extracted.map((row, i) => (
          <li
            key={row.label}
            className={cn('border-t border-black/5 px-3 py-2', anim('pop-in'))}
            style={at(E.section + i * E.sectionGap)}
          >
            <span className="flex items-start justify-between gap-2">
              <span className="text-[8px] font-medium text-ink">{row.label}</span>
              {row.body ? (
                <ChevronDown size={9} className="mt-0.5 shrink-0 rotate-180 text-black/30" />
              ) : (
                <ChevronDown size={9} className="mt-0.5 shrink-0 text-black/30" />
              )}
            </span>
            {row.body && (
              <p className="mt-1 text-[6.5px] leading-relaxed text-black/50">{row.body}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
