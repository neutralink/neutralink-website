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
    excerpt: 'Descubra como a Internet das Coisas automatiza a coleta de dados e validação de créditos de carbono em tempo real.',
    coverImage: '/posts/iot-credits.jpg',
    date: '2025-04-20',
  },
  {
    slug: 'carbon-trends-2025',
    title: '15 tendências no mercado de carbono em 2025',
    excerpt: 'Conheça as principais movimentações e inovações que vão moldar o setor de créditos de carbono neste ano.',
    coverImage: '/posts/trends-2025.jpg',
    date: '2025-04-18',
  },
  {
    slug: 'solar-impact-calculation',
    title: 'Como calcular o impacto real da sua usina solar',
    excerpt: 'Aprenda o passo a passo para converter sua geração de energia em métricas de CO₂ evitado e créditos tokenizados.',
    coverImage: '/posts/solar-impact.jpg',
    date: '2025-04-15',
  },
  {
    slug: 'gold-standard-guide',
    title: 'Guia completo de certificação Gold Standard',
    excerpt: 'Tudo o que você precisa saber para preparar seus projetos e obter a certificação Gold Standard sem complicações.',
    coverImage: '/posts/gold-standard.jpg',
    date: '2025-04-10',
  },
  {
    slug: 'blockchain-traceability',
    title: 'Blockchain e rastreabilidade de créditos',
    excerpt: 'Entenda como a blockchain garante transparência e imutabilidade no histórico de emissão e uso dos seus créditos.',
    coverImage: '/posts/blockchain-trace.jpg',
    date: '2025-04-05',
  },
  {
    slug: 'iot-monitoring-tools',
    title: 'Ferramentas essenciais para monitoramento IoT',
    excerpt: 'Conheça os principais sensores, plataformas e bibliotecas para manter seus dispositivos IoT sempre operando em alta performance.',
    coverImage: '/posts/iot-monitoring.jpg',
    date: '2025-03-30',
  },
]

export default function BlogIndexPage() {
  return (
    <section>
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
              <p className="text-sm text-neutral-500 mb-4">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-neutral-700">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
