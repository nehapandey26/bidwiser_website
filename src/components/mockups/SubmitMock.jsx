import { cn } from '@/lib/cn'
import { Search, FileText, Check, Bell, User, PanelLeft, Workflow, Sparkles } from '@/components/icons'
import BrandBadge from '@/components/brand/BrandBadge'

/* ══════════════════════════════════════════════════════════════════════════
 *  LAYOUT (px) — ✓ from Figma Frame 1000001721 + the zoomed window inspect
 *  (window 267×190), scaled to a 300-wide mock
 * ══════════════════════════════════════════════════════════════════════════ */
const L = {
  mockH: 200,
  win: { left: 30, top: 8, w: 232, h: 168 },
  panel: { left: 0, top: 68, w: 294 },
  rows: { left: 0, top: 108, w: 284, gap: 6 },
}

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms): window → panel text types → Compress PDF → each file row
 *  types its name → "downloads" (progress fills, KB counter runs) → ✓
 * ══════════════════════════════════════════════════════════════════════════ */
const T = {
  win: 0,
  winItems: 200,
  panel: 620,
  title: 720,
  size: 1080,
  button: 1250,
  row: 1650, // first row
  rowGap: 1900, // second row starts this much later
  rowInner: { name: 100, dl: 620, dur: 1500, done: 620 + 1500 + 60 },
}

const SIDEBAR = ['Search', 'Requirement Analysis', 'Bid / No Bid', 'Bid Generator']
const FILES = [
  { name: 'my-gst.pdf', total: 120 },
  { name: 'my-gst.pdf', total: 120 },
]

/**
 * Step 04 "Submit without gaps" — ✓ Figma: faded Bidwiser app window behind,
 * the "Bid Documents / 5 GB" panel with a Compress PDF button in front, and
 * two PDF rows that visibly download. `animate={false}` = static.
 */
export default function SubmitMock({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div className={cn('relative w-[300px]', className)} style={{ height: L.mockH }}>
      {/* ── faded app window ─────────────────────────────────────────── */}
      <div
        className={cn('absolute overflow-hidden rounded-[8px] border border-white/80 bg-white/55 shadow-chip backdrop-blur-sm', anim('pop-in'))}
        style={{ left: L.win.left, top: L.win.top, width: L.win.w, height: L.win.h, ...at(T.win) }}
      >
        <div className="flex items-center gap-1.5 border-b border-black/[0.05] px-2 py-1.5">
          <BrandBadge size={12} />
          <span className="font-serif text-[7.5px] text-ink/70">Bidwiser</span>
          <PanelLeft size={7} className="ml-1 text-black/30" />
          <span className="ml-auto flex items-center gap-1.5 text-black/35">
            <Bell size={7} />
            <User size={7} />
          </span>
        </div>
        <div className="flex h-full">
          <div className="w-[88px] space-y-[2px] border-r border-black/[0.05] p-1">
            {SIDEBAR.map((s, i) => (
              <div
                key={s}
                className={cn(
                  'flex items-center gap-1 rounded-[3px] px-1 py-[1px] text-[5.5px] leading-[8px] text-black/55',
                  i === 0 && 'border border-black/10 bg-white',
                  anim('pop-in'),
                )}
                style={at(T.winItems + i * 90)}
              >
                {i === 0 ? <Search size={6} /> : i === 3 ? <Sparkles size={6} /> : <Workflow size={6} />}
                <span className="truncate">{s}</span>
              </div>
            ))}
          </div>
          <div className="flex-1" />
        </div>
        {/* user chip bottom-left */}
        <div className={cn('absolute bottom-1.5 left-1.5 flex items-center gap-1 rounded-[3px] bg-white/80 px-1 py-[2px]', anim('pop-in'))} style={at(T.winItems + 400)}>
          <img src="/team/rishi.jpg" alt="" className="size-2.5 rounded-full object-cover" />
          <span className="text-[5.5px] leading-tight text-black/60">
            Rishi Dadhich
            <span className="block text-[4.5px] text-black/35">rishi@bidwiser.com</span>
          </span>
        </div>
      </div>

      {/* ── Bid Documents panel ──────────────────────────────────────── */}
      <div
        className={cn('absolute flex items-center gap-2 rounded-[8px] border border-[#EBEBEB] bg-white px-2 py-1.5 shadow-chip', anim('pop-in'))}
        style={{ left: L.panel.left, top: L.panel.top, width: L.panel.w, ...at(T.panel) }}
      >
        <span className={cn('grid size-6 shrink-0 place-items-center rounded-[5px] bg-[#1e3a8a] text-white', anim('icon-pop'))} style={at(T.panel + 140)}>
          <FileText size={12} />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-[9px] font-semibold text-ink">
            <span className={anim('type-in')} style={{ ...at(T.title), animationTimingFunction: 'steps(13, end)' }}>
              Bid Documents
            </span>
          </p>
          <p className={cn('text-[7px] text-black/45', anim('pop-in'))} style={at(T.size)}>5 GB</p>
        </div>
        {/* ✓ Figma: light-blue pill, download icon + "Compress PDF" */}
        <span
          className={cn('inline-flex items-center gap-1 rounded-[5px] bg-[#e8eefc] px-2 py-1 text-[7.5px] font-medium text-brand', anim('pop-in'))}
          style={at(T.button)}
        >
          <DownloadIcon className={anim('dl-bounce')} style={{ animationDelay: `${T.row + T.rowInner.dl}ms`, animationIterationCount: 8 }} />
          Compress PDF
        </span>
      </div>

      {/* ── file rows — each one "downloads" ─────────────────────────── */}
      {FILES.map((f, i) => {
        const d = T.row + i * T.rowGap
        return (
          <div
            key={i}
            className={cn('absolute overflow-hidden rounded-[6px] border border-[#EBEBEB] bg-white shadow-chip', anim('pop-in'))}
            style={{ left: L.rows.left, top: L.rows.top + i * (22 + L.rows.gap), width: L.rows.w, ...at(d) }}
          >
            {/* progress fill behind the content */}
            <span
              className={cn('absolute inset-y-0 left-0 bg-[#e8eefc]', anim('dl-fill'))}
              style={{ '--dl-dur': `${T.rowInner.dur}ms`, ...at(d + T.rowInner.dl) }}
            />
            <div className="relative flex items-center gap-1.5 px-2 py-1">
              <span className="grid size-3.5 shrink-0 place-items-center rounded-[2px] bg-[#e5484d] text-[4.5px] font-bold text-white">PDF</span>
              <div className="min-w-0 flex-1 leading-tight">
                <p className="text-[7px] font-medium text-ink">
                  <span className={anim('type-in')} style={{ ...at(d + T.rowInner.name), animationTimingFunction: `steps(${f.name.length}, end)` }}>
                    {f.name}
                  </span>
                </p>
                {/* live KB counter: "0 KB of 120 KB" → "120 KB of 120 KB" */}
                <p className="text-[5.5px] text-black/40">
                  {animate ? (
                    <span
                      className="dl-count"
                      data-total={f.total}
                      style={{ '--dl-dur': `${T.rowInner.dur}ms`, ...at(d + T.rowInner.dl) }}
                    />
                  ) : (
                    <>{f.total} KB of {f.total} KB</>
                  )}
                </p>
              </div>
              <span
                className={cn('grid size-3 place-items-center rounded-full bg-[#0f9d6b] text-white', anim('icon-pop'))}
                style={at(d + T.rowInner.done)}
              >
                <Check size={7} />
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** small "download" arrow (tray + arrow) — the Figma "Compress PDF" glyph */
function DownloadIcon({ className, style }) {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={cn('shrink-0', className)} style={style} aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M4 19h16" />
    </svg>
  )
}
