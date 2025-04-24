// src/app/blog/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog • NeutraLink',
  description: 'Notícias e artigos sobre NeutraLink e mercado de créditos de carbono',
}

interface Post {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
}

const POSTS: Post[] = [
  {
    slug: 'iot-credits',
    title: 'IoT revoluciona créditos de carbono',
    excerpt: 'Entenda como a Internet das Coisas automatiza e valida a geração de créditos.',
    coverImage: '/posts/iot-credits.jpg',
    date: '2025-04-20',
  },
  {
    slug: 'carbon-trends-2025',
    title: '15 tendências no mercado de carbono em 2025',
    excerpt: 'Saiba quais movimentos vão moldar o mercado de créditos de carbono neste ano.',
    coverImage: '/posts/trends-2025.jpg',
    date: '2025-04-18',
  },
  {
    slug: 'esg-reporting-tools',
    title: 'Ferramentas essenciais para relatórios ESG',
    excerpt: 'Uma seleção de ferramentas que facilitam a geração e análise de relatórios ESG.',
    coverImage: '/posts/esg-reporting.jpg',
    date: '2025-04-15',
  },
  {
    slug: 'blockchain-carbon-credit',
    title: 'Blockchain e tokenização de créditos de carbono',
    excerpt: 'Como a tokenização em blockchain traz mais transparência e liquidez ao mercado de carbono.',
    coverImage: '/posts/blockchain-carbon.jpg',
    date: '2025-04-10',
  },
  {
    slug: 'solar-dashboard-insights',
    title: 'Insights do novo dashboard para geradores solares',
    excerpt: 'Descubra as principais métricas e visualizações do nosso painel de controle.',
    coverImage: '/posts/solar-dashboard.jpg',
    date: '2025-04-05',
  },
  {
    slug: 'certification-best-practices',
    title: 'Boas práticas para certificação de créditos',
    excerpt: 'Dicas e procedimentos recomendados para acelerar a certificação em padrões internacionais.',
    coverImage: '/posts/certification-practices.jpg',
    date: '2025-04-01',
  },
]

export default function BlogIndexPage() {
  return (
    <section className="min-h-screen bg-white text-neutral-900 px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-12">Blog NeutraLink</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              width={600}
              height={320}
              className="w-full object-cover h-48"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <time className="text-sm text-neutral-500 mb-4 block">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </time>
              <p className="text-neutral-700">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
