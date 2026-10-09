'use client'

import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import { Plus, Minus } from '@/components/icons'

/**
 * Single-open accordion used by the FAQ section.
 * items: [{ q, a }]
 */
export default function Accordion({ items, defaultOpen = -1, className }) {
  const [open, setOpen] = useState(defaultOpen)
  const base = useId()

  return (
    <div className={cn('divide-y divide-border border-y border-border', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${base}-panel-${i}`
        const btnId = `${base}-btn-${i}`
        return (
          <div key={item.q}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-sans text-body font-medium text-ink">{item.q}</span>
                <span className="grid size-6 shrink-0 place-items-center text-ink">
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-5 pr-10 text-base text-copy"
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
