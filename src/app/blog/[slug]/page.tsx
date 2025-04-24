// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { POSTS, Post } from '../posts'

interface Params {
  params: { slug: string }
}

// 1) Gera todas as páginas estáticas /blog/slug
export function generateStaticParams(): { slug: string }[] {
  return POSTS.map((p) => ({ slug: p.slug }))
}

// 2) Metadata dinâmica por post
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post não encontrado' }
  return {
    title: `${post.title} • NeutraLink`,
    description: post.excerpt,
  }
}

// 3) Componente principal (Server Component)
export default function PostPage({ params }: Params) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="bg-white text-neutral-900 max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-neutral-500">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg"
      />
      <div className="prose prose-neutral">
        {/* Se tiver HTML pronto */}
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
}
