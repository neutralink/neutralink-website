// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'
import { POSTS, type Post } from '../posts'  // certifique-se de ter esse arquivo

type Params = { slug: string }

// 1) Gera as rotas estáticas /blog/:slug
export function generateStaticParams(): Params[] {
  return POSTS.map((post) => ({ slug: post.slug }))
}

// 2) Gera o <head> dinâmico para cada post
export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    return {
      title: '404 • Blog NeutraLink',
      description: 'Post não encontrado',
    }
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

// 3) Página do post
export default function BlogPostPage({
  params,
}: {
  params: Params
}) {
  const post: Post | undefined = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white text-neutral-900 px-6 py-16 max-w-3xl mx-auto">
      {/* Título e data */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time
          dateTime={post.date}
          className="text-sm text-neutral-500"
        >
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </time>
      </header>

      {/* Imagem de capa */}
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-lg mb-8 object-cover"
        priority
      />

      {/* Conteúdo do post */}
      <div className="prose prose-neutral">
        {/* Se quiser conteúdo HTML rico, use post.excerptHtml */}
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
}
