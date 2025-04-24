// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '../posts'
import { POSTS } from '../posts'

type Params = { slug: string }

// 1) Gera todas as rotas estáticas /blog/:slug
export function generateStaticParams(): Params[] {
  return POSTS.map((post) => ({ slug: post.slug }))
}

// 2) A página em si — agora marcada como async
export default async function Page({ params }: { params: Params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white text-neutral-900 px-6 py-16 max-w-3xl mx-auto">
      {/* Cabeçalho */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-neutral-500">
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

      {/* Trecho */}
      <div className="prose prose-neutral mb-12">
        <p>{post.excerpt}</p>
      </div>

      {/* Voltar */}
      <Link
        href="/blog"
        className="inline-block text-green-600 hover:underline font-medium"
      >
        ← Voltar ao Blog
      </Link>
    </article>
  )
}
