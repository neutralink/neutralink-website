// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import { POSTS } from '../posts'          // só importamos POSTS, não o tipo Post

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    return { title: '404 • NeutraLink' }
  }
  return {
    title: `${post.title} • Blog NeutraLink`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} • Blog NeutraLink`,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <article className="min-h-screen bg-white text-neutral-900 px-6 py-16">
      <header className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time
          dateTime={post.date}
          className="text-sm text-neutral-500"
        >
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </time>
      </header>

      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-lg mb-8 object-cover"
      />

      <div className="prose prose-neutral max-w-3xl mx-auto">
        {/* se tiver HTML gerado, use excerptHtml; senão simples <p> */}
        {post.excerptHtml ? (
          <div dangerouslySetInnerHTML={{ __html: post.excerptHtml }} />
        ) : (
          <p>{post.excerpt}</p>
        )}
      </div>
    </article>
  )
}
