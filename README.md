# Bidwiser — Marketing Site

Next.js + Tailwind build of the [Bidwiser Figma prototype](https://www.figma.com/proto/ylhoBuqFX5J70upZgAYzey/Bidwiser?node-id=224-10738).

- **Framework:** Next.js 15 (App Router), React 19 — **JavaScript**, no TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config — tokens in `src/styles/theme.css`)
- **Rendering:** every route is **statically pre-rendered to HTML** (`○ Static`) — built for SEO
- **Fonts:** `next/font` (self-hosted Inter + Newsreader, no layout shift)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export of every route
npm run start    # serve the production build
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://bidwiser.com`) in `.env.local` for correct
canonical URLs, sitemap, and OG tags in production.

---

## Why this is SEO-strong

| | How |
|---|---|
| Content in the HTML response | Every page is pre-rendered at build — crawlers and link-preview bots see full markup, no JS needed |
| Per-page metadata | `export const metadata` in each `page.jsx` → `<title>`, description, canonical, OG, Twitter |
| `sitemap.xml` | Generated from `src/lib/paths.js` → `indexableRoutes` (see `src/app/sitemap.js`) |
| `robots.txt` | `src/app/robots.js` |
| Structured data | JSON-LD: Organization (layout), WebSite + FAQPage (home) — `src/lib/schema.js` |
| Social share image | `src/app/opengraph-image.jsx` — generated 1200×630 card |
| Core Web Vitals | Static HTML + ~5 KB route JS + minimal client JS (only 4 interactive components) |
| Semantic HTML | one `<h1>` per page, `<section>` landmarks, real `<nav>` / `<footer>` |

---

## Project structure

```
src/
├── app/                         ← routes (Next.js App Router)
│   ├── layout.jsx               root: <html>/<body>, fonts, global metadata, Navbar + Footer, Org JSON-LD
│   ├── page.jsx                 /            the landing page — composes every section (force-static)
│   ├── product/page.jsx         /product           ┐
│   ├── case-studies/page.jsx    /case-studies       │
│   ├── pricing/page.jsx         /pricing            │
│   ├── who-we-serve/page.jsx    /who-we-serve       │ placeholder pages — not in Figma yet.
│   ├── company/page.jsx         /company            │ Each still exports real metadata.
│   ├── resources/page.jsx       /resources          │
│   ├── upload-rfp/page.jsx      /upload-rfp         │
│   ├── privacy/page.jsx         /privacy   (noindex)│
│   ├── terms/page.jsx           /terms     (noindex)┘
│   ├── request-demo/page.jsx    /request-demo   (server shell + client <RequestDemoForm>)
│   ├── not-found.jsx            404
│   ├── error.jsx                runtime error boundary  ('use client')
│   ├── loading.jsx              route transition fallback
│   ├── sitemap.js  robots.js  opengraph-image.jsx
│   └── icon.svg  favicon.ico
│
├── components/
│   ├── sections/                ← one component per landing-page section (all Server Components
│   │                              except HowItWorks, which is 'use client' for the tabs)
│   │   Hero · ProductShowcase · LogoWall · ProblemSection · PullQuote
│   │   HowItWorks · Comparison · CustomerStory · Faq · SecuritySection   (barrel: index.js)
│   ├── layout/     Navbar ('use client') · Footer
│   ├── ui/         Button · Container · EyebrowPill · GradientDot · MatchBadge
│   │               · SectionHeading · Accordion ('use client')           (barrel: index.js)
│   ├── brand/      Logo · BrandMark
│   ├── decor/      HatchDivider · TickerStrip · WireGlobe
│   ├── mockups/    AppDashboardMock · TenderSearchMock · LlmChatMock
│   │               · ExtractedFormsMock · parts.jsx   (in-product UI, rebuilt in CSS)
│   ├── forms/      RequestDemoForm ('use client')
│   ├── icons/      index.jsx
│   ├── seo/        JsonLd.jsx
│   └── dev/        PlaceholderPage.jsx   (TEMPORARY — for un-designed routes)
│
├── data/           nav.js · landing.js (all copy) · mockData.js
├── lib/            cn.js · paths.js (routes + anchors + indexableRoutes) · schema.js (JSON-LD)
├── constants/      app.js  (APP_NAME, SITE_URL, …)
└── styles/         index.css (Tailwind entry, imported by layout) · theme.css (DESIGN TOKENS)
```

### Server vs Client Components

Everything is a **Server Component** (rendered to HTML, zero JS shipped) except these four,
marked `'use client'` because they need `useState`:

- `components/layout/Navbar.jsx` — mobile menu toggle
- `components/sections/HowItWorks.jsx` — step tabs
- `components/ui/Accordion.jsx` — FAQ expand/collapse
- `components/forms/RequestDemoForm.jsx` — form state

### Conventions

| Rule | Why |
|---|---|
| `page.jsx` files only assemble sections + export `metadata`. | Screens stay thin. |
| No raw hex / px / font in a component — use a token (`bg-brand`, `text-h2`). | Restyle = edit `theme.css`. |
| Copy lives in `src/data/*`, not inline in JSX. | Non-devs can edit; easy to diff vs Figma. |
| URLs from `@/lib/paths`; section anchors from `sections`. | Rename a route once. |
| `@/` → `src/`. One component per file, `PascalCase.jsx`, barrel per folder. | Predictable imports. |

---

## Adding things

**A new section:** create `components/sections/<Name>.jsx`, add its copy to
`data/landing.js`, export from `sections/index.js`, drop into `app/page.jsx`.

**A new route:** create `src/app/<route>/page.jsx` with a `metadata` export. Add the
path to `src/lib/paths.js` (and to `indexableRoutes` if it should be in the sitemap).

---

## ⚠️ Fidelity notes — built from screenshots, not the live Figma

The Figma file couldn't be inspected directly (the connected account has only a **View**
seat, which the Figma MCP design tools reject). So:

1. **Design tokens in `src/styles/theme.css` are estimated** — colours, type scale, radii,
   spacing eyeballed from the images. Replace with Figma Inspect values (keep the token *names*).
2. **Fonts are stand-ins** — `Inter` + `Newsreader`. The real design likely uses a licensed
   serif (PP Editorial New / Signifier / Canela). Swap in `src/app/layout.jsx` + `theme.css`.
3. **Product screenshots are CSS recreations** (`components/mockups/*`), not exported images.
4. **Some copy is completed past the screenshot crop** — tagged `assumed: true` in
   `src/data/landing.js` (parts of "Four ways…", steps 02–04, all FAQ answers).
5. **Logos and the footer** aren't in the screenshots — placeholder slots / best-guess layout.

For an exact conversion: share the Figma as **"can edit"** with `bidwiser.test@gmail.com`,
or drop full-res frame exports into `design/`.

---

## Environment note

`@next/swc-win32-x64-msvc` (the native compiler) is blocked by an Application Control
policy on this machine, so Next falls back to the WASM compiler — builds work, just a
little slower. On an unrestricted machine the native binary is used automatically.
