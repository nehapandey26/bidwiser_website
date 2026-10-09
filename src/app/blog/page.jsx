import Link from 'next/link'

import { paths } from '@/lib/paths'
import { blogPage as b } from '@/data/landing'
import Container from '@/components/ui/Container'
import HatchDivider from '@/components/decor/HatchDivider'

export const metadata = {
  title: 'Blog',
  description: 'Notes on tendering, bid preparation and building Bidwiser.',
  alternates: { canonical: '/blog' },
}

/**
 * ✓ Figma "Bidwiser Blogs":
 *   heading → featured row (serif title with a blue italic phrase + author on
 *   the left, greyscale photo on the right) → hatch → 2-column grid of
 *   gradient post cards → hatch → blank band → footer.
 */
export default function BlogPage() {
  const f = b.featured

  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        {/* ── heading ── */}
        <h1 className="border-b border-grid px-8 pb-10 pt-20 text-[clamp(2rem,3.4vw,2.6rem)] leading-tight text-ink md:pt-24 lg:px-10">
          {b.heading}
        </h1>

        {/* ── featured post ── */}
        <Link
          href={`${paths.blog}/${f.slug}`}
          className="group grid border-b border-grid md:grid-cols-2"
        >
          <div className="flex flex-col justify-between border-b border-grid p-8 md:border-b-0 md:border-r lg:p-10">
            <h2 className="max-w-[20ch] text-[clamp(1.4rem,2.2vw,1.9rem)] leading-snug text-ink">
              {f.titleLead}
              <em className="italic text-brand">{f.titleEm}</em>
            </h2>
            <p className="mt-16 text-[12px] text-muted">{f.author}</p>
          </div>
          {/* ✓ Figma: the source file is pre-cropped to the exact framing (face + shoulders) */}
          <div className="relative aspect-[550/500] overflow-hidden bg-[#eaeaea]">
            <img
              src={f.photo}
              alt=""
              className="h-full w-full object-cover grayscale transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        <HatchDivider className="border-t-0" />

        {/* ── post grid ── */}
        <ul className="grid border-t border-grid sm:grid-cols-2">
          {b.posts.map((post) => (
            <li key={post.slug} className="border-b border-grid p-6 sm:[&:nth-child(odd)]:border-r lg:p-8">
              <Link
                href={`${paths.blog}/${post.slug}`}
                className="group flex h-[220px] flex-col justify-between overflow-hidden rounded-[4px] p-6 lg:h-[250px]"
                style={{ backgroundImage: post.gradient }}
              >
                <h3 className="mt-auto max-w-[16ch] self-center text-center text-[clamp(1.2rem,1.8vw,1.55rem)] leading-snug text-white transition-transform duration-300 group-hover:-translate-y-0.5">
                  {post.title}
                </h3>
                <p className="mt-auto flex items-center gap-2 text-[10px] text-white/85">
                  <span className="font-medium">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <time>{post.date}</time>
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <HatchDivider className="border-t-0" />
        {/* ✓ Figma: blank band before the footer */}
        <div aria-hidden="true" className="h-40" />
      </Container>
    </section>
  )
}
