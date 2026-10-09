import { cn } from '@/lib/cn'
import { tenderDiscoveryPage as t } from '@/data/landing'
import { Plus, Search, Workflow, Building, ChevronRight, ChevronDown, Upload, FileText } from '@/components/icons'

const QUERY = 'Hydro Power tender in Gujarat under 20 Cr.'
const SUGGESTIONS = [
  { icon: Workflow, text: 'Find road construction tenders in Delhi under ₹10 crore.' },
  { icon: Building, text: 'Find building renovation tenders in Delhi between ₹50 lakh and ₹3 crore.' },
]
const DASH_COLS = ['Tender ID', 'File', 'Corri...', 'Type of Project', 'Dept', 'Location', 'Last Date of Sub...']
const DASH_ROWS = [
  ['268235_gujarat', 'Department, packaged...', 'Ahmedabad Municipal...', 'Ahmedabad', '10.10.2026'],
  ['268235_gujarat', 'Department, packaged...', 'Ahmedabad Municipal...', 'Ahmedabad', '12.10.2026'],
]
const GRID = 'grid-cols-[1fr_22px_22px_1.25fr_1.15fr_0.7fr_0.85fr]'

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms) — text types → "+" → upload → suggestion lines → dashboard
 *  Slow on purpose; raise/lower these to change the pace.
 * ══════════════════════════════════════════════════════════════════════════ */
const T = {
  card: 0,
  query: 300, // the query types itself in
  queryDur: 1600,
  plus: 2100, // "+" button
  send: 2450, // upload / send button
  chip: 2900, // suggestion chips, one after the other
  chipGap: 420,
  dash: 4000, // Tender Dashboard card
  dashTitle: 4200,
  dashHead: 4600,
  row: 5000, // real rows
  rowGap: 520,
  skel: 6200, // skeleton rows
  skelGap: 260,
}

/** ✓ Figma row 1 — plain-language search, then the tender dashboard. */
export function DiscoverSearchMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div className={cn('w-full max-w-[420px] space-y-4', className)}>
      {/* ── query card ── */}
      <div
        className={cn('rounded-lg border border-black/[0.07] bg-white p-3 shadow-chip', anim('pop-in'))}
        style={at(T.card)}
      >
        <p className="min-h-[14px] text-[10px] text-ink">
          <span
            className={anim('type-in')}
            style={{
              ...at(T.query),
              animationDuration: `${T.queryDur}ms`,
              animationTimingFunction: `steps(${QUERY.length}, end)`,
            }}
          >
            {QUERY}
          </span>
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span
            className={cn('grid size-5 place-items-center rounded-[4px] border border-black/10 text-black/40', anim('pop-in'))}
            style={at(T.plus)}
          >
            <Plus size={10} />
          </span>
          <span
            className={cn('grid size-5 place-items-center rounded-[5px] bg-brand text-white', anim('icon-pop'))}
            style={at(T.send)}
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </span>
        </div>
      </div>

      {/* ── suggestion chips ── */}
      <div className="grid grid-cols-2 gap-2">
        {SUGGESTIONS.map((sg, i) => (
          <span
            key={i}
            className={cn(
              'flex items-start gap-1.5 rounded-md border border-black/[0.07] bg-white px-2 py-1.5 text-[7.5px] leading-snug text-black/55',
              anim('pop-in'),
            )}
            style={at(T.chip + i * T.chipGap)}
          >
            <sg.icon size={9} className="mt-px shrink-0 text-brand" />
            {sg.text}
          </span>
        ))}
      </div>

      {/* ── tender dashboard ── */}
      <div
        className={cn('overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'))}
        style={at(T.dash)}
      >
        <p className="px-3 py-2 text-[9px] font-semibold text-ink">
          <span
            className={anim('type-in')}
            style={{ ...at(T.dashTitle), animationDuration: '420ms', animationTimingFunction: 'steps(16, end)' }}
          >
            Tender Dashboard
          </span>
        </p>

        <div
          className={cn('grid gap-1.5 border-y border-black/5 bg-black/[0.02] px-3 py-1.5 text-[6px] font-medium text-black/45', GRID, anim('pop-in'))}
          style={at(T.dashHead)}
        >
          {DASH_COLS.map((c) => (
            <span key={c} className="truncate">{c}</span>
          ))}
        </div>

        {DASH_ROWS.map((row, i) => (
          <div
            key={i}
            className={cn('grid items-center gap-1.5 border-b border-black/[0.04] px-3 py-1.5 text-[6.5px] text-black/60', GRID, anim('pop-in'))}
            style={at(T.row + i * T.rowGap)}
          >
            <span className="truncate">{row[0]}</span>
            <Upload size={7} className="text-black/35" />
            <Upload size={7} className="text-black/35" />
            <span className="truncate">{row[1]}</span>
            <span className="truncate">{row[2]}</span>
            <span className="truncate">{row[3]}</span>
            <span className="truncate">{row[4]}</span>
          </div>
        ))}

        {[0, 1, 2].map((i) => (
          <div
            key={`s${i}`}
            className={cn('grid items-center gap-1.5 border-b border-black/[0.04] px-3 py-2 last:border-0', GRID)}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((j) => (
              <span
                key={j}
                className={cn('h-1.5 rounded-full bg-[#eceef2]', anim('draw-h'))}
                style={{ transformOrigin: 'left', ...at(T.skel + i * T.skelGap + j * 40) }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── row 2 timeline ── */
const R = { card: 0, title: 200, row: 700, rowGap: 480 }

/** ✓ Figma row 2 — tenders ranked against the company profile. */
export function RankedTendersMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div
      className={cn('w-full max-w-[360px] overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'), className)}
      style={at(R.card)}
    >
      <p className="flex items-center gap-1.5 px-3 py-2.5 text-[9.5px] font-semibold text-ink">
        <Search size={10} className="text-black/45" />
        <span
          className={anim('type-in')}
          style={{ ...at(R.title), animationDuration: '420ms', animationTimingFunction: 'steps(14, end)' }}
        >
          Ranked Tenders
        </span>
      </p>
      <ul>
        {t.rankedTenders.map((row, i) => (
          <li
            key={row.name}
            className={cn('flex items-center gap-2 border-t border-black/5 px-3 py-2', anim('pop-in'))}
            style={at(R.row + i * R.rowGap)}
          >
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[8.5px] font-medium text-ink">{row.name}</span>
              <span className="block text-[6.5px] text-black/40">{row.place}</span>
            </span>
            <span className="shrink-0 text-right">
              <span className="block text-[8px] font-medium text-ink">{row.value}</span>
              <span className="block text-[6.5px] text-black/40">{row.expires}</span>
            </span>
            <ChevronRight size={10} className="shrink-0 text-black/25" />
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── row 3 timeline ── */
const F = { card: 0, title: 200, field: 800, fieldGap: 300, cta: 2600 }

/** ✓ Figma row 3 — the full tender file, already attached. */
export function TenderFileMock({ animate = true, className }) {
  const f = t.tenderFile
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div
      className={cn('w-full max-w-[340px] overflow-hidden rounded-lg border border-black/[0.07] bg-white shadow-chip', anim('pop-in'), className)}
      style={at(F.card)}
    >
      <div className="flex items-start gap-2 px-3 py-2.5">
        <span className="min-w-0 flex-1">
          <span className="block text-[9.5px] font-semibold text-ink">
            <span
              className={anim('type-in')}
              style={{ ...at(F.title), animationDuration: '900ms', animationTimingFunction: `steps(${f.title.length}, end)` }}
            >
              {f.title}
            </span>
          </span>
          <span className="block text-[6.5px] text-black/40">{f.place}</span>
        </span>
        <ChevronDown size={11} className="shrink-0 rotate-180 text-black/30" />
      </div>

      <div className="grid grid-cols-3 gap-y-3 border-t border-black/5 px-3 py-3">
        {f.fields.map(([label, value], i) => (
          <span key={label} className={cn('min-w-0', anim('pop-in'))} style={at(F.field + i * F.fieldGap)}>
            <span className="block text-[6px] uppercase tracking-[0.04em] text-black/35">{label}</span>
            <span className="mt-0.5 block truncate text-[7.5px] font-medium text-ink">{value}</span>
          </span>
        ))}
      </div>

      <div className="border-t border-black/5 p-2">
        <span
          className={cn('flex items-center justify-center gap-1 rounded-[4px] border border-black/10 py-1.5 text-[7.5px] font-medium text-ink', anim('pop-in'))}
          style={at(F.cta)}
        >
          <FileText size={8} /> {f.cta}
        </span>
      </div>
    </div>
  )
}
