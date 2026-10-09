import { ImageResponse } from 'next/og'

import { APP_NAME, TAGLINE } from '@/constants/app'

export const alt = `${APP_NAME} — ${TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Social share card. Regenerates on deploy; uses system fonts for portability. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#0f1533',
          backgroundImage:
            'linear-gradient(120deg, #2a3a9e 0%, #7d4f7a 55%, #d97a3d 100%)',
          color: '#fff',
          fontFamily: 'Georgia, "Times New Roman", serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 40 }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: '#fff',
              clipPath: 'polygon(0 0, 100% 45%, 100% 55%, 0 100%)',
            }}
          />
          <span style={{ fontWeight: 600 }}>{APP_NAME}</span>
        </div>

        <div style={{ fontSize: 76, lineHeight: 1.1, maxWidth: 900, display: 'flex' }}>
          {TAGLINE}
        </div>

        <div style={{ fontSize: 30, opacity: 0.85, display: 'flex' }}>
          Reads the tender · fills the forms · writes the technical bid
        </div>
      </div>
    ),
    size,
  )
}
