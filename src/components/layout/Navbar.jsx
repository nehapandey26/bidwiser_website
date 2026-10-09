'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/cn'
import { paths } from '@/lib/paths'
import { primaryNav } from '@/data/nav'
import Logo from '@/components/brand/Logo'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { ArrowRight, ChevronDown } from '@/components/icons'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // close the mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-grid bg-surface/95 backdrop-blur">
      <Container framed className="flex h-[var(--header-h)] items-center">
        <div className="flex h-full items-center border-r border-grid pr-5 sm:pr-6">
          <Logo />
        </div>

        {/* desktop nav */}
        <nav className="hidden h-full items-stretch px-2 lg:flex xl:px-4">
          {primaryNav.map((item) => (
            <DesktopNavItem key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="ml-auto flex h-full items-center gap-2 border-grid pl-4 sm:border-l sm:pl-5">
          <Button
            as={Link}
            href={paths.requestDemo}
            variant="brand"
            size="sm"
            iconRight={<ArrowRight size={15} />}
            className="hidden whitespace-nowrap sm:inline-flex"
          >
            Request a Demo
          </Button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-md text-ink lg:hidden"
          >
            <Burger open={mobileOpen} />
          </button>
        </div>
      </Container>

      {mobileOpen && <MobileMenu />}
    </header>
  )
}

/* ------------------------------------------------------------------ desktop */

function DesktopNavItem({ item, pathname }) {
  const isActive = pathname === item.to
  const label = (
    <span
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap text-[0.72rem] font-medium uppercase tracking-[0.07em]',
        isActive ? 'text-brand' : 'text-ink',
      )}
    >
      {item.label}
      {(item.menu || item.mega) && <ChevronDown size={13} className="text-muted" />}
    </span>
  )

  if (!item.menu && !item.mega) {
    return (
      <Link href={item.to} className="flex items-center px-2.5 transition-colors hover:text-brand xl:px-3">
        {label}
      </Link>
    )
  }

  const panelWidth = item.mega ? 'w-[560px]' : 'w-72'

  return (
    <div className="group relative flex items-center">
      <Link href={item.to} className="flex items-center px-2.5 group-hover:text-brand xl:px-3">
        {label}
      </Link>

      <div
        className={cn(
          'invisible absolute left-1/2 top-full z-40 -translate-x-1/2 pt-3 opacity-0 transition',
          panelWidth,
          'group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100',
        )}
      >
        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-card">
          {item.mega ? <MegaPanel mega={item.mega} /> : (
            <div className="p-2">
              {item.menu.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.to}
                  className="block rounded-md px-3 py-2 hover:bg-surface-soft"
                >
                  <span className="block text-sm font-medium text-ink">{sub.label}</span>
                  {sub.desc && <span className="mt-0.5 block text-sm text-muted">{sub.desc}</span>}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * ✓ Figma: wide dropdown — a tall gradient preview panel on the left (soft
 * concentric arcs, peach for Product / blue for Resources) and the section's
 * links on the right as serif titles with a small grey sub-label.
 */
function MegaPanel({ mega }) {
  const isSky = mega.tone === 'sky'

  return (
    <div className="grid grid-cols-[210px_1fr] gap-7 p-5">
      <div
        aria-hidden="true"
        className={cn(
          'relative h-[260px] overflow-hidden rounded-[4px]',
          isSky
            ? 'bg-[linear-gradient(180deg,#ffffff_0%,#eaefff_55%,#9fb4ee_100%)]'
            : 'bg-[linear-gradient(180deg,#ffffff_0%,#fff0e8_55%,#f7a982_100%)]',
        )}
      >
        {/* faint concentric arcs, same motif as the How-it-works card */}
        <div className="absolute left-1/2 top-[18%] size-[420px] -translate-x-1/2">
          {[420, 330, 240].map((d) => (
            <span
              key={d}
              className="absolute rounded-full border border-white/70"
              style={{ width: d, height: d, top: (420 - d) / 2, left: (420 - d) / 2 }}
            />
          ))}
        </div>
      </div>

      <ul className="flex flex-col justify-start gap-4 py-1">
        {mega.items.map((sub) => (
          <li key={sub.label}>
            <Link href={sub.to} className="group/item block">
              <span className="block font-serif text-[17px] leading-tight text-ink transition-colors group-hover/item:text-brand">
                {sub.label}
              </span>
              {sub.sub && <span className="mt-0.5 block text-[11px] text-muted">{sub.sub}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ------------------------------------------------------------------- mobile */

function MobileMenu() {
  return (
    <nav className="border-t border-grid bg-surface lg:hidden">
      <Container className="flex flex-col py-3">
        {primaryNav.map((item) => (
          <div key={item.label} className="border-b border-grid/70 py-1 last:border-0">
            <Link
              href={item.to}
              className="block py-2 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-ink"
            >
              {item.label}
            </Link>
            {(item.menu ?? item.mega?.items) && (
              <div className="pb-2 pl-3">
                {(item.menu ?? item.mega.items).map((sub) => (
                  <Link key={sub.label} href={sub.to} className="block py-1.5 text-sm text-copy">
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <Button
          as={Link}
          href={paths.requestDemo}
          variant="brand"
          size="md"
          iconRight={<ArrowRight size={16} />}
          className="mt-4 w-full"
        >
          Request a Demo
        </Button>
      </Container>
    </nav>
  )
}

function Burger({ open }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={cn(
          'absolute left-0 h-[1.5px] w-full bg-current transition-all',
          open ? 'top-1/2 rotate-45' : 'top-0.5',
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-1/2 h-[1.5px] w-full bg-current transition-all',
          open && 'opacity-0',
        )}
      />
      <span
        className={cn(
          'absolute left-0 h-[1.5px] w-full bg-current transition-all',
          open ? 'top-1/2 -rotate-45' : 'bottom-0.5',
        )}
      />
    </span>
  )
}
