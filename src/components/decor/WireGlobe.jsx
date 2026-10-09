import { cn } from '@/lib/cn'

/**
 * Wireframe globe behind each ISO certification label in the security section.
 *
 * ✓ Figma: the blue glow is a HOVER state. The parent card must carry the
 * Tailwind `group` class — on hover the glow fades in, the wireframe lines
 * shift from grey to light-blue, and the label turns white.
 */
export default function WireGlobe({ label, sub, className, style }) {
  return (
    <div style={style} className={cn('relative grid aspect-square place-items-center', className)}>
      {/* hover glow — same blue as the Figma reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[8%] rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle, rgba(43,92,255,0.85) 0%, rgba(43,92,255,0.45) 38%, rgba(43,92,255,0) 68%)',
        }}
      />

      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <g className="stroke-white/20 transition-colors duration-300 group-hover:stroke-[#9bb5ff]/80">
          <circle cx="100" cy="100" r="72" />
          {[16, 34, 52].map((rx) => (
            <ellipse key={rx} cx="100" cy="100" rx={rx} ry="72" />
          ))}
          {[-48, -24, 0, 24, 48].map((dy) => (
            <ellipse key={dy} cx="100" cy={100 + dy} rx="72" ry={Math.max(6, 72 - Math.abs(dy) * 1.05)} />
          ))}
        </g>
      </svg>

      <div className="relative text-center">
        <div className="font-serif text-xl text-on-ink-muted transition-colors duration-300 group-hover:text-white">
          {label}
        </div>
        {sub && (
          <div className="text-sm text-on-ink-muted transition-colors duration-300 group-hover:text-white/85">
            {sub}
          </div>
        )}
      </div>
    </div>
  )
}
