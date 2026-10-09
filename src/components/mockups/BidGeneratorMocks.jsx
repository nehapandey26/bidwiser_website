import { cn } from '@/lib/cn'
import { bidGeneratorPage as g } from '@/data/landing'
import { Upload, FileText, Check, DotsVertical, Plus, ChevronDown } from '@/components/icons'

/* ══════════════════════════════════════════════════════════════════════════
 *  "The technical content, written" — timeline (ms)
 * ══════════════════════════════════════════════════════════════════════════ */
const M = {
  card: 0,
  title: 250,
  actions: 700,
  toolbar: 950,
  docTitle: 1250,
  docTitleDur: 1100,
  line: 2500,
  lineGap: 240,
  notes: 3500,
  notesTitle: 3700,
  note: 4100,
  noteGap: 520,
}

/** ✓ Figma — the methodology drafted in the tender's own format, plus notes. */
export function MethodologyMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div className={cn('w-full max-w-[400px] space-y-3', className)}>
      {/* editor card */}
      <div
        className={cn('overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'))}
        style={at(M.card)}
      >
        <div className="flex items-center justify-between px-3 py-2.5">
          <span className="text-[9.5px] font-semibold text-ink">
            <span
              className={anim('type-in')}
              style={{ ...at(M.title), animationDuration: '700ms', animationTimingFunction: 'steps(24, end)' }}
            >
              Construction Methodology
            </span>
          </span>
          <span className={cn('flex items-center gap-1.5', anim('pop-in'))} style={at(M.actions)}>
            {['Import', 'Export'].map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1 rounded-[4px] border border-black/10 px-1.5 py-0.5 text-[7px] font-medium text-ink"
              >
                <Upload size={7} /> {a}
              </span>
            ))}
          </span>
        </div>

        {/* toolbar */}
        <div
          className={cn('flex items-center gap-2 border-y border-black/5 px-3 py-1.5 text-[6.5px] text-black/45', anim('pop-in'))}
          style={at(M.toolbar)}
        >
          <span className="inline-flex items-center gap-0.5">Heading <ChevronDown size={6} /></span>
          <span className="inline-flex items-center gap-0.5">14px <ChevronDown size={6} /></span>
          <span className="font-bold text-ink">B</span>
          <span className="italic text-ink">I</span>
          <span className="underline">U</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-[#0f9d6b]" />
            <span className="size-1.5 rounded-full bg-black/20" />
          </span>
        </div>

        <div className="p-3">
          <p className="min-h-[11px] text-[8.5px] font-medium text-ink">
            <span
              className={anim('type-in')}
              style={{
                ...at(M.docTitle),
                animationDuration: `${M.docTitleDur}ms`,
                animationTimingFunction: 'steps(58, end)',
              }}
            >
              Water Supply Pipeline Installation for XYZ Municipal Corporation
            </span>
          </p>
          <div className="mt-3 space-y-2">
            {[100, 96, 88, 62].map((w, i) => (
              <span
                key={i}
                className={cn('block h-2 rounded-full bg-[#e9eaee]', anim('draw-h'))}
                style={{ width: `${w}%`, transformOrigin: 'left', ...at(M.line + i * M.lineGap) }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* notes card */}
      <div
        className={cn('overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'))}
        style={at(M.notes)}
      >
        <div className="flex items-center justify-between px-3 py-2">
          <span className="flex items-center gap-1.5 text-[9px] font-semibold text-ink">
            <FileText size={9} className="text-black/45" />
            <span
              className={anim('type-in')}
              style={{ ...at(M.notesTitle), animationDuration: '320ms', animationTimingFunction: 'steps(5, end)' }}
            >
              Notes
            </span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-[4px] border border-black/10 px-1.5 py-0.5 text-[7px] font-medium text-ink">
            <Upload size={7} /> Export
          </span>
        </div>
        <ul className="px-3 pb-3">
          {g.notes.map((n, i) => (
            <li
              key={i}
              className={cn('flex items-center gap-1.5 py-1 text-[7.5px] text-ink', anim('pop-in'))}
              style={at(M.note + i * M.noteGap)}
            >
              <span className="grid size-3 shrink-0 place-items-center rounded-[2px] bg-[#0f9d6b] text-white">
                <Check size={6} />
              </span>
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════════════
 *  "Compiled, signed and ready to upload" — timeline (ms)
 * ══════════════════════════════════════════════════════════════════════════ */
const Q = { card: 0, title: 250, actions: 700, row: 1050, rowGap: 300 }

/** ✓ Figma — the whole set ordered, indexed and signature-ready. */
export function BidSequencingMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })
  let n = 0 // running index so groups keep the stagger going

  return (
    <div
      className={cn('w-full max-w-[380px] overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'), className)}
      style={at(Q.card)}
    >
      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="text-[9.5px] font-semibold text-ink">
          <span
            className={anim('type-in')}
            style={{ ...at(Q.title), animationDuration: '520ms', animationTimingFunction: 'steps(15, end)' }}
          >
            Bid Sequencing
          </span>
        </span>
        <span className={cn('flex items-center gap-1.5', anim('pop-in'))} style={at(Q.actions)}>
          <span className="rounded-[4px] border border-black/10 px-1.5 py-0.5 text-[7px] font-medium text-ink">
            Apply Signature
          </span>
          <span className="inline-flex items-center gap-0.5 rounded-[4px] border border-black/10 px-1.5 py-0.5 text-[7px] font-medium text-ink">
            <Plus size={7} /> Add Documents
          </span>
        </span>
      </div>

      <div className="border-t border-black/5">
        {g.sequencing.map((group) => (
          <div key={group.label ?? 'top'}>
            {group.label && (
              <p
                className={cn('flex items-center gap-1 px-3 pb-1 pt-2 text-[7px] font-medium text-black/50', anim('pop-in'))}
                style={at(Q.row + n++ * Q.rowGap)}
              >
                {group.label} <DotsVertical size={7} className="text-black/25" />
              </p>
            )}
            {group.files.map((f, i) => (
              <div
                key={`${group.label}-${i}`}
                className={cn('flex items-center gap-1.5 border-t border-black/[0.04] px-3 py-1.5', anim('pop-in'))}
                style={at(Q.row + n++ * Q.rowGap)}
              >
                <DotsVertical size={7} className="shrink-0 text-black/20" />
                <span className="size-2 shrink-0 rounded-[2px] border border-black/15" />
                <span className="min-w-0 flex-1 truncate text-[7.5px] text-ink">{f.name}</span>
                <span
                  className={cn(
                    'inline-flex shrink-0 items-center gap-0.5 rounded-pill px-1.5 py-0.5 text-[6px] font-medium',
                    f.signed ? 'bg-[#e6f5ee] text-[#0f9d6b]' : 'bg-[#fdeaea] text-[#d6453f]',
                  )}
                >
                  <span className={cn('size-1 rounded-full', f.signed ? 'bg-[#0f9d6b]' : 'bg-[#d6453f]')} />
                  {f.signed ? 'Signed' : 'Unsigned'}
                </span>
                <span className="shrink-0 text-[7px] text-black/25">✕</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
