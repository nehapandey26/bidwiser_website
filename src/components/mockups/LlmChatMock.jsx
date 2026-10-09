import { cn } from '@/lib/cn'
import { comparison } from '@/data/landing'
import GradientDot from '@/components/ui/GradientDot'
import { FileText, AlertTriangle } from '@/components/icons'
import { Chip } from './parts'

/**
 * Left card of the Comparison section — a generic LLM chat, hemmed in by limits.
 * ✓ Figma: the chat itself is its own bordered window — 299×482, 16px radius,
 * 1px #EBEBEB border, white bg, shadow-chip — sitting inside the grey backdrop
 * panel (drawn by the parent, see Comparison.jsx). The limitation chips straddle
 * the window's left/right edges, each sitting in the gap *between* two bubbles
 * — never on top of bubble text (per the Figma reference).
 */
export default function LlmChatMock({ className }) {
  const { chat } = comparison.llm
  return (
    <div className={cn('relative mx-auto max-w-[300px]', className)}>
      <Chip tone="success" className="absolute -left-6 top-[5.75rem] z-10">
        <span className="size-1.5 rounded-full bg-[#0f9d6b]" /> No Tender Context
      </Chip>
      <Chip tone="error" className="absolute -right-6 top-[13.25rem] z-10">
        <AlertTriangle size={11} className="text-[#d6453f]" /> No Verification
      </Chip>
      <Chip tone="warning" className="absolute -left-5 bottom-3 z-10">
        <span className="size-2 rounded-[3px] bg-[#e0813b]" /> Context Limits
      </Chip>

      {/* ✓ Figma: 16px radius, 1px #EBEBEB border, white bg, shadow-chip */}
      <div className="rounded-lg border border-[#EBEBEB] bg-white p-5 shadow-chip">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
            <GradientDot size={16} /> LLMs
          </span>
          <Chip tone="neutral">
            <FileText size={11} className="text-black/40" /> No Corrigendum
          </Chip>
        </div>

        <div className="mt-6 space-y-4">
          {chat.map((m, i) => (
            <div key={i} className={cn('flex', m.from === 'user' ? 'justify-end' : 'justify-start')}>
              <p
                className={cn(
                  'max-w-[78%] rounded-2xl px-3 py-2 text-[12px] leading-snug',
                  m.from === 'user'
                    ? 'rounded-br-sm border border-[#EBEBEB] bg-white text-ink'
                    : 'rounded-bl-sm bg-[#F2F2F2] text-black/55',
                )}
              >
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
