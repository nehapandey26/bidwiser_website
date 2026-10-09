import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge doesn't know our custom design tokens. Without this, it treats
 * a custom font-size like `text-h2` as a *colour* class and drops it when it
 * sits next to `text-ink`. Register the custom scales so merging is correct.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['hero', 'h1', 'h2', 'h3', 'quote', 'lead', 'eyebrow'] }],
    },
  },
})

/**
 * Merge conditional class names and de-duplicate conflicting Tailwind classes.
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
