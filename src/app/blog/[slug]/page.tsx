// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { POSTS, type Post } from '../posts'

interface Params {
  slug: string
}

// Gera todas as rotas estáticas /blog/:slug
export function generateStaticParams(): Params[] {
  return POSTS.map((post) => ({ slug: post.slug }))
}

// Componente de página (Server Component — NÃO coloca "use client" aqui)
export default function BlogPostPage({ params }: { params: Params }) {
  // Busca o post pelo slug  
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    // Se não achar, lança 404  
    notFound()
  }

  return (
    <article className="prose mx-auto my-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-md mb-4"
      />
      <time className="text-sm text-neutral-500 block mb-6">
        {new Date(post.date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        })}
      </time>
      <p className="leading-relaxed">{post.excerpt}</p>
      <div className="mt-8">
        <Link
          href="/blog"
          className="text-[#00C37A] hover:underline"
        >
          ← Voltar ao blog
        </Link>
      </div>
    </article>
  )
}
