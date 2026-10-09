import { cn } from '@/lib/cn'
import { appSidebar, extractedForms } from '@/data/mockData'
import { comparison } from '@/data/landing'
import { Sparkles, Check, AlertTriangle, FileText, Building, ChevronRight } from '@/components/icons'
import BrandMark from '@/components/brand/BrandMark'
import { MockSidebar, Chip, IconBadge } from './parts'

/* ══════════════════════════════════════════════════════════════════════════
 *  LAYOUT KNOBS — chips ka margin / padding / size yahan se change karo
 *  (saari values pixels mein hain)
 * ══════════════════════════════════════════════════════════════════════════ */
const LAYOUT = {
  // ── App window (safed screen) ──
  windowLeft: 118, // window card ke left edge se kitna door (chips ke liye jagah)
  windowTop: 54, // window card ke top edge se kitna neeche
  windowMinWidth: 470, // isse window right side se bleed/cut hoti hai (Figma jaisa)

  // ── Chip stack (4 pills) ──
  chipsTop: 150, // pehli chip kitna neeche se shuru ho
  chipsLeft: 0, // chip stack kitna left se shuru ho
  chipGap: 14, // do chips ke beech vertical gap
  chipIndent: 58, // chip 2 aur 4 kitna right shift hon (zigzag effect)

  // ── Har ek chip ke andar ──
  chipPadding: 7, // chip ke andar ki padding (chaaron taraf)
  chipIconSize: 22, // rangeen icon badge ka size
  chipFontSize: 11.5, // chip ke text ka size
}

const CHIP_ICONS = [FileText, AlertTriangle, Building, Check]
const CHIP_TONES = ['info', 'warning', 'away', 'success']

/**
 * Right card of the Comparison section — Bidwiser extracting every form.
 * ✓ Figma reference: the capability chips sit ON TOP of the app window's left
 * edge (overlapping it) in a left/right zigzag, and the window itself bleeds
 * off the right edge of the gradient card. Tune all of that via LAYOUT above.
 */
export default function ExtractedFormsMock({ showChips = true, className }) {
  const chips = comparison.bidwiser.chips

  return (
    <div className={cn('relative', className)}>
      {/* ── app window ─────────────────────────────────────────────── */}
      <div
        className="overflow-hidden rounded-lg border border-[#EBEBEB] bg-white text-[11px] text-ink shadow-chip"
        style={
          showChips
            ? {
                marginLeft: LAYOUT.windowLeft,
                marginTop: LAYOUT.windowTop,
                minWidth: LAYOUT.windowMinWidth,
              }
            : undefined
        }
      >
        {/* ✓ Figma: single breadcrumb top bar (logo + breadcrumb trail) */}
        <div className="flex items-center gap-1.5 border-b border-black/5 px-2.5 py-2">
          <BrandMark variant="badge" size={15} />
          <span className="shrink-0 font-serif text-[11px] text-ink">Bidwiser</span>
          <span className="mx-1 h-3.5 w-px shrink-0 bg-black/10" />
          <span className="size-3 shrink-0 rounded-[3px] border border-black/15" />
          <div className="flex min-w-0 items-center gap-1 text-[9px]">
            <span className="inline-flex shrink-0 items-center gap-1 font-medium text-brand">
              <FileText size={9} /> Forms &amp; Format Extraction
            </span>
            <ChevronRight size={9} className="shrink-0 text-black/25" />
            <span className="inline-flex min-w-0 items-center gap-1 text-black/40">
              <Building size={9} className="shrink-0" />
              <span className="truncate">Methodology Drafter</span>
            </span>
            <ChevronRight size={9} className="shrink-0 text-black/25" />
          </div>
        </div>

        <div className="flex">
          <MockSidebar items={appSidebar} className="w-[118px] p-2" />

          <div className="min-w-0 flex-1 p-3">
            <h4 className="font-sans text-[12px] font-semibold text-ink">Extracted Forms</h4>

            <div className="mt-2 overflow-hidden rounded-md border border-black/5">
              <div className="grid grid-cols-[16px_48px_1fr_70px] gap-2 border-b border-black/5 bg-black/[0.02] px-2.5 py-1.5 text-[9px] font-medium text-black/45">
                <span />
                <span>Pages</span>
                <span>Form Header</span>
                <span>Autofill</span>
              </div>
              {extractedForms.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[16px_48px_1fr_70px] items-center gap-2 border-b border-black/[0.04] px-2.5 py-1.5 text-[9.5px] last:border-0"
                >
                  <span className="size-3 rounded-[3px] border border-black/15" />
                  <span className="rounded border border-black/10 px-1 py-0.5 text-center text-[8px] text-black/50">
                    {row.pages}
                  </span>
                  <span className="truncate text-black/60">
                    {row.header}
                    <span className="block text-[8px] text-black/35">{row.form}</span>
                  </span>
                  <button className="inline-flex items-center gap-0.5 rounded-full border border-brand/20 bg-brand/[0.08] px-1.5 py-0.5 text-[8px] font-medium text-brand">
                    <Sparkles size={8} /> AI Autofill
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── floating capability chips (window ke upar overlap karti hain) ── */}
      {showChips && (
        <div
          className="absolute z-20 flex flex-col items-start"
          style={{ top: LAYOUT.chipsTop, left: LAYOUT.chipsLeft, gap: LAYOUT.chipGap }}
        >
          {chips.map((label, i) => (
            <Chip
              key={label}
              tone={CHIP_TONES[i]}
              style={{
                marginLeft: i % 2 === 1 ? LAYOUT.chipIndent : 0,
                padding: LAYOUT.chipPadding,
                paddingRight: LAYOUT.chipPadding + 4,
                fontSize: LAYOUT.chipFontSize,
              }}
            >
              <IconBadge icon={CHIP_ICONS[i]} tone={CHIP_TONES[i]} size={LAYOUT.chipIconSize} />
              {label}
            </Chip>
          ))}
        </div>
      )}
    </div>
  )
}
