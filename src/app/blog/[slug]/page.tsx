// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { POSTS, Post } from '../posts'

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return POSTS.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({
  params,
  searchParams,
}: {
  params: Params
  searchParams: { [key: string]: string | string[] }  // necessário mesmo que não use
}) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="prose mx-auto my-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-md mb-6"
      />
      <time className="block text-sm text-neutral-500 mb-8">
        {new Date(post.date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </time>
      <p className="leading-relaxed">{post.excerpt}</p>
      <div className="mt-8">
        <Link href="/blog" className="text-[#00C37A] hover:underline">
          ← Voltar ao Blog
        </Link>
      </div>
    </article>
  )
}
