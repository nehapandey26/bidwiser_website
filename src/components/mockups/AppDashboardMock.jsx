import { cn } from '@/lib/cn'
import { appSidebar, bidPackages } from '@/data/mockData'
import { Search, Plus, Calendar, DotsVertical, Sort } from '@/components/icons'
import { Avatar, MockChrome, MockTopBar, MockSidebar } from './parts'

/**
 * "Active Bid Packages" dashboard — the hero product screenshot.
 * Stylistic recreation of the Figma mock.
 */
export default function AppDashboardMock({ className }) {
  const cols = ['Title', 'Assigned To', 'Status', 'Deadline', 'Access', 'Action']
  return (
    <MockChrome className={cn('w-full', className)}>
      <MockTopBar />
      <div className="flex">
        <MockSidebar items={appSidebar} />

        <div className="min-w-0 flex-1 p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="font-sans text-[13px] font-semibold text-ink">Active Bid Packages</h4>
              <p className="mt-0.5 text-[10px] text-black/45">
                Monitor and manage tender across all your cards.
              </p>
            </div>
            <button className="inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1.5 text-[10px] font-medium text-white">
              Upload New Tender <Plus size={12} />
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-black/10 px-2 py-1 text-[10px] font-medium">
              <Calendar size={12} /> All Projects
            </span>
            <span className="inline-flex flex-1 items-center gap-1.5 rounded-md border border-black/10 px-2 py-1 text-[10px] text-black/40 sm:max-w-[190px]">
              <Search size={12} /> Search tender by title..
            </span>
          </div>

          <div className="mt-2 overflow-hidden rounded-md border border-black/5">
            <div className="grid grid-cols-[1.3fr_1.2fr_1.4fr_1fr_0.8fr_0.4fr] gap-2 border-b border-black/5 bg-black/[0.02] px-2.5 py-1.5 text-[9.5px] font-medium text-black/45">
              {cols.map((c) => (
                <span key={c} className="inline-flex items-center gap-0.5">
                  {c}
                  {c !== 'Action' && <Sort size={10} className="text-black/25" />}
                </span>
              ))}
            </div>
            {bidPackages.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1.3fr_1.2fr_1.4fr_1fr_0.8fr_0.4fr] items-center gap-2 border-b border-black/[0.04] px-2.5 py-2 text-[10px] last:border-0"
              >
                <span className="font-medium text-ink">{row.title}</span>
                <span className="flex items-center gap-1.5 text-black/60">
                  <Avatar name={row.assignee} /> {row.assignee}
                </span>
                <span className="truncate text-black/55">{row.status}</span>
                <span className="text-black/55">{row.deadline}</span>
                <span className="text-black/55">{row.access}</span>
                <span className="text-black/35">
                  <DotsVertical size={12} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockChrome>
  )
}
