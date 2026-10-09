'use client'

import { useState } from 'react'

import Button from '@/components/ui/Button'
import { ArrowRight } from '@/components/icons'

/**
 * Demo-request form. Not in the Figma prototype — styled to match the site.
 * Wire the submit handler to your backend / CRM.
 */
export default function RequestDemoForm() {
  const [sent, setSent] = useState(false)

  const field =
    'h-11 w-full rounded-[7px] border border-border bg-surface px-3 text-base text-ink placeholder:text-muted focus-visible:border-brand'

  if (sent) {
    return (
      <p className="mt-10 rounded-lg border border-border bg-surface-soft p-6 text-base text-ink">
        Thanks — we&rsquo;ll be in touch shortly.
      </p>
    )
  }

  return (
    <form
      className="mt-10 flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
    >
      <input className={field} placeholder="Full name" autoComplete="name" required />
      <input className={field} type="email" placeholder="Work email" autoComplete="email" required />
      <input className={field} placeholder="Company" autoComplete="organization" required />
      <textarea className={`${field} h-28 py-2`} placeholder="What are you bidding on right now?" />
      <Button type="submit" variant="dark" size="lg" iconRight={<ArrowRight size={18} />}>
        Request a Demo
      </Button>
    </form>
  )
}
