import { cn } from '@/lib/cn'
import { Home, Building, Workflow, History, ChevronRight, FileText, Sort } from '@/components/icons'
import BrandMark from '@/components/brand/BrandMark'

/**
 * Shared building blocks for the product mock UIs. These are stylistic
 * recreations of the Figma screenshots — swap for real exported images if
 * pixel-exact fidelity is needed.
 */

const ICONS = { home: Home, building: Building, workflow: Workflow, history: History, fileText: FileText, sort: Sort }

export function Avatar({ name, size = 18 }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <span
      className="inline-grid place-items-center rounded-full bg-brand/12 text-[9px] font-semibold text-brand"
      style={{ width: size, height: size }}
    >
      {initials}
    </span>
  )
}

/**
 * App-window chrome. `shadow="chip"` uses the confirmed subtle Figma shadow
 * (0 1px 2px rgba(10,13,20,.03), 16px radius, #EBEBEB border) — used wherever
 * the window sits inline in a card (Comparison, How it works). `shadow="card"`
 * (default) is the more dramatic floating shadow for the hero screenshot.
 */
export function MockChrome({ children, className, shadow = 'card' }) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-[#EBEBEB] bg-white text-[11px] text-ink',
        shadow === 'chip' ? 'shadow-chip' : 'shadow-card',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function MockTopBar({ compact = false }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/5 px-3 py-2">
      <BrandMark variant="badge" size={16} />
      <span className="font-serif text-[12px] text-ink">Bidwiser</span>
      <span className="ml-1 size-3.5 rounded-[3px] border border-black/15" />
      {!compact && (
        <div className="ml-auto flex items-center gap-2 text-black/35">
          <span className="size-3.5 rounded-full border border-black/15" />
          <span className="size-3.5 rounded-full border border-black/15" />
        </div>
      )}
    </div>
  )
}

export function MockSidebar({ items, className }) {
  return (
    <aside className={cn('relative w-[132px] shrink-0 space-y-0.5 border-r border-black/5 p-2', className)}>
      {items.map((it) => {
        const Icon = ICONS[it.icon] ?? Home
        return (
          <div
            key={it.label}
            className={cn(
              'relative flex items-center gap-1.5 rounded-md px-2 py-1.5',
              it.active ? 'bg-black/[0.05] text-ink' : 'text-black/55',
            )}
          >
            {/* ✓ Figma: thin blue indicator bar on the active sidebar row */}
            {it.active && <span className="absolute -left-2 top-1/2 h-3.5 w-[3px] -translate-y-1/2 rounded-full bg-brand" />}
            <Icon size={13} />
            <span className="truncate text-[10.5px]">{it.label}</span>
            {it.active && <ChevronRight size={12} className="ml-auto text-black/40" />}
          </div>
        )
      })}
    </aside>
  )
}

/**
 * ✓ Figma Inspect: display:inline-flex; padding:6px; gap:6px; border-radius:pill;
 * border: 1px solid var(--state-X-light); background: var(--state-X-lighter);
 * box-shadow: 0 1px 2px 0 rgba(10,13,20,.03).
 * "Conflict Detection" (warning) and "Company Context" (away) hex values are
 * confirmed; the rest follow the same light/lighter recipe (not yet confirmed).
 */
export function Chip({ children, tone = 'neutral', className, style }) {
  const tones = {
    neutral: 'border-state-neutral-border bg-state-neutral-bg',
    info: 'border-state-info-border bg-state-info-bg',
    warning: 'border-state-warning-border bg-state-warning-bg',
    away: 'border-state-away-border bg-state-away-bg',
    success: 'border-state-success-border bg-state-success-bg',
    error: 'border-state-error-border bg-state-error-bg',
    cyan: 'border-state-cyan-border bg-state-cyan-bg',
  }
  return (
    <span
      style={style}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill border p-1.5 pr-3 text-[11px] font-medium text-ink shadow-chip',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

const BADGE_TONES = {
  info: '#3b6fe0',
  warning: '#e0813b',
  away: '#d4a017',
  success: '#0f9d6b',
  error: '#d6453f',
  neutral: '#9aa1ad',
  cyan: '#1e3f7a', // ✓ step-02 "Eligibility criteria": navy glyph on cyan pill
}

/** ✓ Figma reference: chip icons are small solid-colour rounded-square badges
 * with a white glyph inside, not a bare coloured icon/dot.
 * `shape="circle"` for the round check badge ("Work Description"). */
export function IconBadge({ icon: Icon, tone = 'neutral', size = 20, shape = 'square', className, style }) {
  return (
    <span
      className={cn(
        'grid shrink-0 place-items-center',
        shape === 'circle' ? 'rounded-full' : 'rounded-[6px]',
        className,
      )}
      style={{ width: size, height: size, background: BADGE_TONES[tone], ...style }}
    >
      <Icon size={Math.round(size * 0.55)} className="text-white" />
    </span>
  )
}
