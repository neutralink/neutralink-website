// src/app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { POSTS, Post } from '../posts'

type Params = {
  params: {
    slug: string
  }
}

// Gera as rotas estáticas: /blog/iot-credits, /blog/carbon-trends-2025 etc.
export function generateStaticParams(): { slug: string }[] {
  return POSTS.map((post) => ({ slug: post.slug }))
}

// Seta o <head> dinamicamente com title e description de cada post
export function generateMetadata({ params }: Params): Metadata {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    return {
      title: '404 • Blog NeutraLink',
    }
  }
  return {
    title: `${post.title} • Blog NeutraLink`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} • Blog NeutraLink`,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ],
    },
  }
}

// Componente principal da página de post
export default function BlogPostPage({ params }: Params) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="prose prose-neutral max-w-3xl mx-auto py-16">
      <h1 className="mb-4">{post.title}</h1>
      <p className="text-sm text-neutral-500 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
        priority
      />
      <div
        // supondo que você tenha convertido Markdown → HTML em post.contentHtml
        dangerouslySetInnerHTML={{ __html: post.excerptHtml ?? post.excerpt }}
      />
    </article>
  )
}
