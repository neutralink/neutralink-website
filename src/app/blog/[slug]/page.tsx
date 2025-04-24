// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'
import { POSTS, type Post } from '../posts'

// 1) gera as rotas estáticas /blog/:slug
export function generateStaticParams(): { slug: string }[] {
  return POSTS.map((p) => ({ slug: p.slug }))
}

// 2) gera <head> dinâmico para cada post
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    return { title: '404 • Blog NeutraLink', description: '' }
  }
  return {
    title: `${post.title} • Blog NeutraLink`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

// 3) componente de página propriamente dito
export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post: Post | undefined = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <article className="min-h-screen bg-white text-neutral-900 px-6 py-16">
      {/* header do artigo */}
      <header className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-neutral-500">
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </time>
      </header>

      {/* imagem de capa */}
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-lg mb-8 object-cover"
        priority
      />

      {/* conteúdo do post */}
      <div className="prose prose-neutral max-w-3xl mx-auto">
        {post.excerptHtml ? (
          <div dangerouslySetInnerHTML={{ __html: post.excerptHtml }} />
        ) : (
          <p>{post.excerpt}</p>
        )}
      </div>
    </article>
  )
}
