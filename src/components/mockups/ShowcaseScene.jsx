import { cn } from '@/lib/cn'
import { showcaseSidebar, bidPackages, tenderDashboard } from '@/data/mockData'
import { Plus, Calendar, Sort, FileText, ChevronRight, Download, Bell, User, PanelLeft } from '@/components/icons'
import BrandBadge from '@/components/brand/BrandBadge'
import { Avatar, MockSidebar } from './parts'

/* ══════════════════════════════════════════════════════════════════════════
 *  LAYOUT — ✓ measured from the Figma showcase frame (container 1208 wide).
 *  Positions are % of the scene width so the composition scales.
 * ══════════════════════════════════════════════════════════════════════════ */
const L = {
  sceneH: 560, // band height — windows are clipped at the bottom edge
  main: { left: '19.4%', width: '61.4%', top: 92 },
  dash: { left: '3.2%', width: '56%', top: 300 }, // Tender Dashboard, front-left
  rfp: { right: '2.8%', width: '37.4%', top: 190 },
}

/* ══════════════════════════════════════════════════════════════════════════
 *  TIMELINE (ms)
 * ══════════════════════════════════════════════════════════════════════════ */
const T = {
  main: 0, // ① main window rises out of a blur
  mainRows: 500,
  dash: 1150, // ② Tender Dashboard peeks from behind the main window, then lands in front
  dashTitle: 2050, // its title types itself in
  dashHead: 2420, // column headers
  dashRow: 2720, // the two real rows, one after the other
  dashRowGap: 540,
  dashSkel: 3900, // skeleton rows draw left → right
  dashSkelGap: 230,
  rfp: 2050, // ③ RFP Analysis emerges from the right
  rfpChips: 2900,
  rfpChipGap: 90,
}

const RFP_CHIPS = [
  'Type of service',
  'Employer',
  'Period of extraction',
  'Work description',
  'Location of project',
  'Pre bid meeting information',
  'Evaluation Criteria',
  'Joint Venture',
  'Process of bid submission',
]

/**
 * ✓ Figma product-showcase: three overlapping app windows on the brand
 * gradient — "Active Bid Packages" (back), "Tender Dashboard" (front-left) and
 * "RFP Analysis" (front-right) — cropped at the band's bottom edge.
 * Choreography: main window rises → rows fill → Tender Dashboard slides in,
 * its title types, headers and rows land one by one, skeletons draw → RFP
 * slides in, summary chips pop one by one.
 */
export default function ShowcaseScene({ animate = true, className }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })

  return (
    <div className={cn('relative w-full overflow-hidden', className)} style={{ height: L.sceneH }}>
      {/* ── main window: Active Bid Packages ─────────────────────────── */}
      <div className={cn('absolute z-10', anim('scene-rise'))} style={{ ...L.main, ...at(T.main) }}>
        <Window>
          <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2">
            <BrandBadge size={18} />
            <span className="font-serif text-[12px] text-ink">Bidwiser</span>
            <span className="mx-2 h-4 w-px bg-black/10" />
            <PanelLeft size={11} className="text-black/35" />
            <span className="ml-auto flex items-center gap-3 text-black/35">
              <Bell size={11} />
              <User size={11} />
            </span>
          </div>
          <div className="flex">
            <MockSidebar items={showcaseSidebar} className="w-[124px] p-2" />
            <div className="min-w-0 flex-1 p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-sans text-[13px] font-semibold text-ink">Active Bid Packages</h4>
                  <p className="mt-0.5 text-[9.5px] text-black/45">Monitor and manage tender across all your cards.</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1.5 text-[9.5px] font-medium text-white">
                  Upload New Tender <Plus size={11} />
                </span>
              </div>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-black/10 px-2 py-1 text-[9.5px] font-medium">
                <Calendar size={11} /> All Projects
              </span>

              <div className="mt-2 overflow-hidden rounded-md border border-black/5">
                <div className="grid grid-cols-[1.2fr_1fr_1.2fr_0.9fr_0.7fr_0.3fr] gap-2 border-b border-black/5 bg-black/[0.02] px-2.5 py-1.5 text-[9px] font-medium text-black/45">
                  {['Title', 'Assigned To', 'Status', 'Deadline', 'Access', ''].map((c) => (
                    <span key={c} className="inline-flex items-center gap-0.5">
                      {c}
                      {c && c !== 'Title' && <Sort size={9} className="text-black/25" />}
                    </span>
                  ))}
                </div>
                {bidPackages.slice(0, 5).map((row, i) => (
                  <div
                    key={i}
                    className={cn(
                      'grid grid-cols-[1.2fr_1fr_1.2fr_0.9fr_0.7fr_0.3fr] items-center gap-2 border-b border-black/[0.04] px-2.5 py-2 text-[9.5px]',
                      anim('pop-in'),
                    )}
                    style={at(T.mainRows + i * 90)}
                  >
                    <span className="font-medium text-ink">{row.title}</span>
                    <span className="flex items-center gap-1.5 text-black/60">
                      <Avatar name={row.assignee} size={16} /> {row.assignee}
                    </span>
                    <span className="truncate text-black/55">{row.status}</span>
                    <span className="text-black/55">{row.deadline}</span>
                    <span className="text-black/55">{row.access}</span>
                    <span className="text-black/35">⋮</span>
                  </div>
                ))}
                {/* skeleton rows below */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={`s${i}`} className="grid grid-cols-[1.2fr_1fr_1.2fr_0.9fr_0.7fr_0.3fr] items-center gap-2 border-b border-black/[0.04] px-2.5 py-2.5">
                    {[70, 85, 80, 70, 60].map((w, j) => (
                      <span
                        key={j}
                        className={cn('h-2 rounded-full bg-[#e9eaee]', anim('draw-h'))}
                        style={{ width: `${w}%`, transformOrigin: 'left', ...at(T.mainRows + 450 + i * 90 + j * 30) }}
                      />
                    ))}
                    <span className="text-black/25">⋮</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Window>
      </div>

      {/* ── front-left: Tender Dashboard ──────────────────────────────── */}
      <div className={cn('absolute', anim('scene-emerge-left'))} style={{ ...L.dash, zIndex: animate ? undefined : 30, ...at(T.dash) }}>
        <div className={anim('float')} style={at(T.dash + 1300)}>
          <TenderDashboardWindow animate={animate} />
        </div>
      </div>

      {/* ── front-right: RFP Analysis ─────────────────────────────────── */}
      <div className={cn('absolute', anim('scene-emerge-right'))} style={{ ...L.rfp, zIndex: animate ? undefined : 30, ...at(T.rfp) }}>
        <div className={anim('float')} style={{ ...at(T.rfp + 2600), animationDuration: '7s' }}>
          <Window className="p-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-[13px] font-semibold text-ink">
                <FileText size={15} className="text-black/60" /> RFP Analysis
              </span>
              <span className={cn('inline-flex items-center gap-1 rounded-md bg-brand px-3 py-1.5 text-[10px] font-medium text-white', anim('pop-in'))} style={at(T.rfp + 350)}>
                Analyse <ChevronRight size={11} />
              </span>
            </div>
            <p className="mt-3 text-[10px] font-medium text-ink">Summary</p>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {RFP_CHIPS.map((c, i) => (
                <span
                  key={c}
                  className={cn('inline-flex items-center gap-1 rounded-[4px] border border-black/10 bg-white px-2 py-1 text-[9px] text-ink', anim('pop-in'))}
                  style={at(T.rfpChips + i * T.rfpChipGap)}
                >
                  {c} <Plus size={9} className="text-black/45" />
                </span>
              ))}
            </div>

            <div className="mt-3 space-y-2">
              {[28, 100].map((w, i) => (
                <span
                  key={i}
                  className={cn('block h-2.5 rounded-[3px] bg-[#eef0f4]', anim('draw-h'))}
                  style={{ width: `${w}%`, transformOrigin: 'left', ...at(T.rfpChips + RFP_CHIPS.length * T.rfpChipGap + 150 + i * 140) }}
                />
              ))}
            </div>
          </Window>
        </div>
      </div>

    </div>
  )
}

/* ══════════════════════════════════════════════════════════════════════════
 *  Tender Dashboard window — ✓ Figma front-left card
 * ══════════════════════════════════════════════════════════════════════════ */
const DASH_GRID = 'grid-cols-[1.05fr_26px_26px_1.3fr_1.2fr_0.8fr_1fr]'

function TenderDashboardWindow({ animate }) {
  const anim = (cls) => (animate ? cls : undefined)
  const at = (ms) => ({ animationDelay: `${ms}ms` })
  const d = tenderDashboard

  return (
    <Window>
      <p className="px-3.5 py-2.5 text-[12px] font-semibold text-ink">
        <span
          className={anim('type-in')}
          style={{ ...at(T.dashTitle), animationDuration: '560ms', animationTimingFunction: `steps(${d.title.length}, end)` }}
        >
          {d.title}
        </span>
      </p>

      {/* column headers — "Corrigendum" sits over the two download buttons */}
      <div
        className={cn('grid items-center gap-1.5 border-y border-black/5 bg-black/[0.015] px-3.5 py-1.5 text-[8.5px] font-medium text-black/45', DASH_GRID, anim('pop-in'))}
        style={at(T.dashHead)}
      >
        <span className="truncate">Tender ID</span>
        <span className="col-span-2 truncate">Corrigendum</span>
        <span className="inline-flex items-center gap-0.5 truncate">
          Type of Project <Sort size={8} className="shrink-0 text-black/25" />
        </span>
        <span className="truncate">Dept</span>
        <span className="truncate">Location</span>
        <span className="truncate">Last Date of Submission</span>
      </div>

      {/* the two real rows land one after the other */}
      {d.rows.map((row, i) => (
        <div
          key={i}
          className={cn('grid items-center gap-1.5 border-b border-black/[0.04] px-3.5 py-2 text-[9px] text-black/60', DASH_GRID, anim('pop-in'))}
          style={at(T.dashRow + i * T.dashRowGap)}
        >
          <span className="truncate text-ink">{row.id}</span>
          <DownloadBtn />
          <DownloadBtn />
          <span className="truncate">{row.type}</span>
          <span className="truncate">{row.dept}</span>
          <span className="truncate">{row.location}</span>
          <span className="truncate">{row.date}</span>
        </div>
      ))}

      {/* skeleton rows draw themselves left → right */}
      {[0, 1, 2].map((i) => (
        <div key={`s${i}`} className={cn('grid items-center gap-1.5 border-b border-black/[0.04] px-3.5 py-2.5 last:border-0', DASH_GRID)}>
          {[80, 60, 60, 85, 80, 70, 65].map((w, j) => (
            <span
              key={j}
              className={cn('h-2 rounded-full bg-[#eceef2]', anim('draw-h'))}
              style={{ width: `${w}%`, transformOrigin: 'left', ...at(T.dashSkel + i * T.dashSkelGap + j * 45) }}
            />
          ))}
        </div>
      ))}
    </Window>
  )
}

/** ✓ Figma: small bordered download button in the Corrigendum columns. */
function DownloadBtn() {
  return (
    <span className="grid size-[18px] place-items-center rounded-[4px] border border-black/10 bg-white text-black/45">
      <Download size={9} />
    </span>
  )
}

function Window({ children, className }) {
  return (
    <div className={cn('overflow-hidden rounded-[10px] border border-[#EBEBEB] bg-white text-[11px] text-ink shadow-card', className)}>
      {children}
    </div>
  )
}
