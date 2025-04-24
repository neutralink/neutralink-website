// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { POSTS } from '../posts'
import type { Metadata } from 'next'

// Gera as rotas estáticas
export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

// Gera o título e descrição para cada post
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) {
    return { title: '404 • Blog NeutraLink' }
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

// Componente da página de cada post (sem tipagem explícita aqui)
export default function BlogPostPage(props: any) {
  const { slug } = props.params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <article className="min-h-screen bg-white text-neutral-900 px-6 py-16">
      <header className="max-w-3xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <time dateTime={post.date} className="text-sm text-neutral-500">
          {new Date(post.date).toLocaleDateString('pt-BR')}
        </time>
      </header>

      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="w-full rounded-lg mb-8 object-cover"
        priority
      />

      <div className="prose prose-neutral max-w-3xl mx-auto">
        {/* Se você tiver HTML pronto via post.excerptHtml */}
        {post.excerptHtml ? (
          <div dangerouslySetInnerHTML={{ __html: post.excerptHtml }} />
        ) : (
          <p>{post.excerpt}</p>
        )}
      </div>
    </article>
  )
}
