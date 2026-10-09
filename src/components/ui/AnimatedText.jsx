import { cn } from '@/lib/cn'

/**
 * Splits `text` into words and rises each one into place, one after another,
 * from behind a mask. `start` delays the whole run, `step` is the gap between
 * words. Honours prefers-reduced-motion via the `.word-in` rule in index.css.
 *
 * Re-mount it (e.g. `key={activeStep}`) to replay the run.
 */
export default function AnimatedText({ text, start = 0, step = 50, className }) {
  const words = String(text).split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        // outer = mask, inner = the animated word
        <span key={`${word}-${i}`} className="inline-flex overflow-hidden pb-[0.08em] pr-[0.26em]">
          <span className="word-in inline-block" style={{ animationDelay: `${start + i * step}ms` }}>
            {word}
          </span>
        </span>
      ))}
    </span>
  )
}

/** Same idea, but the whole element is hidden until `start` (no word split). */
export function AnimatedLine({ children, start = 0, className }) {
  return (
    <span className={cn('inline-flex overflow-hidden', className)}>
      <span className="word-in inline-block" style={{ animationDelay: `${start}ms` }}>
        {children}
      </span>
    </span>
  )
}
