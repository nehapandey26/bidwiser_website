'use client'

import { useState } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/cn'
import { paths } from '@/lib/paths'
import { ArrowRight } from '@/components/icons'

/**
 * ✓ Figma pricing grid, made interactive: the *selected* plan gets the brand
 * gradient header, white name and blue CTA — every other plan stays plain.
 * Click Silver / Gold / Platinum to move the highlight. Gold (the plan flagged
 * `highlight: true` in the data) is selected on first render.
 */
export default function PlanColumns({ plans }) {
  const defaultIndex = Math.max(0, plans.findIndex((p) => p.highlight))
  const [selected, setSelected] = useState(defaultIndex)

  return (
    <div role="radiogroup" aria-label="Pricing plans" className="grid border-t border-grid md:grid-cols-3">
      {plans.map((plan, i) => {
        const isSelected = i === selected
        const last = i === plans.length - 1

        return (
          <div
            key={plan.name}
            onClick={() => setSelected(i)}
            className={cn(
              'flex cursor-pointer flex-col border-b border-grid md:border-b-0',
              !last && 'md:border-r',
            )}
          >
            {/* header — the gradient crossfades in/out on selection */}
            <button
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelected(i)}
              className="relative flex h-[140px] items-end overflow-hidden px-6 pb-4 text-left lg:px-7"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'brand-gradient absolute inset-0 transition-opacity duration-500',
                  isSelected ? 'opacity-100' : 'opacity-0',
                )}
              />
              <h2
                className={cn(
                  'relative text-[2rem] font-light leading-none tracking-[-0.04em] transition-colors duration-500',
                  isSelected ? 'text-white' : 'text-ink',
                )}
              >
                {plan.name}
              </h2>
            </button>

            <div className="px-6 pt-4 lg:px-7">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.06em] text-brand">
                {plan.tagline}
              </p>

              <Link
                href={paths.requestDemo}
                className={cn(
                  'mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-[3px] py-1.5 text-[11px] font-medium transition-colors duration-300',
                  isSelected
                    ? 'bg-brand text-white hover:bg-brand-ink'
                    : 'bg-[#e9e9eb] text-ink hover:bg-[#dedee1]',
                )}
              >
                {plan.cta} <ArrowRight size={12} />
              </Link>

              <div className="mt-7 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.06em] text-muted">
                <span>Feature</span>
                <span>Limit</span>
              </div>
              <ul className="mt-2 pb-10">
                {plan.features.map(([f, limit]) => (
                  <li key={f} className="flex items-start justify-between gap-4 py-2.5 text-[12px]">
                    <span className="max-w-[20ch] leading-snug text-ink">{f}</span>
                    <span className="shrink-0 text-muted">{limit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
