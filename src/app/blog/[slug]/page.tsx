// src/app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'

interface Post {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  coverImage: string
  contentHtml: string
}

const POSTS: Post[] = [
  {
    slug: 'iot-credits',
    title: 'IoT revoluciona créditos de carbono',
    excerpt: 'Entenda como a Internet das Coisas automatiza e valida a geração de créditos.',
    author: 'Pedro Soares',
    date: '2025-04-20',
    coverImage: '/posts/iot-credits.jpg',
    contentHtml: `<p>A Internet das Coisas (IoT) permite o monitoramento ...</p>`,
  },
  {
    slug: 'carbon-trends-2025',
    title: '15 tendências no mercado de carbono em 2025',
    excerpt: 'Saiba quais movimentos vão moldar o mercado de créditos de carbono neste ano.',
    author: 'Maria Lima',
    date: '2025-04-18',
    coverImage: '/posts/trends-2025.jpg',
    contentHtml: `<ul><li>Tokenização via blockchain</li><li>Pools de certificação colaborativa</li></ul>`,
  },
]

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return { title: '404' }
  return {
    title: `${post.title} • Blog NeutraLink`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <article className="prose prose-neutral max-w-3xl mx-auto py-16">
      <h1>{post.title}</h1>
      <div className="text-sm text-neutral-500 mb-6">
        Por {post.author} •{' '}
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
      </div>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-lg mb-8"
      />
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  )
}
