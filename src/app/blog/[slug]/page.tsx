// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { POSTS, Post } from '../posts'
import { Metadata } from 'next'

interface Params {
  params: { slug: string }
}

export function generateStaticParams(): { slug: string }[] {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post não encontrado' }
  return {
    title: `${post.title} • NeutraLink`,
    description: post.excerpt,
  }
}

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
        {post.excerptHtml ? (
          <div dangerouslySetInnerHTML={{ __html: post.excerptHtml }} />
        ) : (
          <p>{post.excerpt}</p>
        )}
      </div>
    </article>
  )
}
