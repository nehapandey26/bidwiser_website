import { notFound } from 'next/navigation'

import { blogPage, caseStudyDefaults } from '@/data/landing'
import Container from '@/components/ui/Container'
import HatchDivider from '@/components/decor/HatchDivider'

const ALL = () => [blogPage.featured, ...blogPage.posts]

function getPost(slug) {
  const post = ALL().find((p) => p.slug === slug)
  if (!post) return null
  const title = post.title ?? `${post.titleLead}${post.titleEm}`
  return { ...caseStudyDefaults, ...post, title }
}

export const dynamicParams = false

export function generateStaticParams() {
  return ALL().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: post.title, alternates: { canonical: `/blog/${slug}` } }
}

/** Post detail — same layout as the Figma case-study detail frame. */
export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <section className="bg-surface">
      <Container framed className="!px-0">
        <div className="border-b border-grid px-8 pb-10 pt-20 md:pt-24 lg:px-10">
          <h1 className="max-w-[18ch] text-[clamp(2.1rem,3.8vw,3.2rem)] leading-[1.15] text-ink">
            {post.title}
          </h1>
          <p className="mt-8 flex items-center gap-3 text-[11px] text-muted">
            <span className="font-medium text-ink">{post.category}</span>
            <span aria-hidden="true">·</span>
            <time>{post.date}</time>
          </p>
        </div>

        <h2 className="border-b border-grid py-10 text-center text-[1.6rem] font-light tracking-[-0.03em] text-ink">
          {post.impactTitle}
        </h2>

        <ul className="grid sm:grid-cols-2">
          {post.impact.map((item) => (
            <li
              key={item}
              className="flex min-h-[110px] border-b border-grid p-7 text-[13px] leading-snug text-ink sm:[&:nth-child(odd)]:border-r"
            >
              <span className="max-w-[28ch]">{item}</span>
            </li>
          ))}
        </ul>

        <HatchDivider className="border-t-0" />
        <div aria-hidden="true" className="h-40" />
      </Container>
    </section>
  )
}
