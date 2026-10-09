import localFont from 'next/font/local'
import { DM_Sans } from 'next/font/google'

/**
 * Sentient — the serif used for headings, hero, pull-quote, section titles.
 * ✓ Figma: weight 300, letter-spacing -0.04em. Self-hosted from Fontshare.
 */
export const sentient = localFont({
  src: [
    { path: '../fonts/Sentient-Light.woff2', weight: '300', style: 'normal' },
    { path: '../fonts/Sentient-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: '../fonts/Sentient-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Sentient-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/Sentient-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-sentient',
  display: 'swap',
  fallback: ['Iowan Old Style', 'Palatino Linotype', 'Georgia', 'serif'],
})

/**
 * DM Sans — body / UI text (nav, card copy, buttons, mock UI).
 * ✓ Figma: e.g. body copy is DM Sans 16px / 500 / #797979.
 */
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})
