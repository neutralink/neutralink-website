// src/app/blog/posts.ts

export interface Post {
  slug: string
  title: string
  excerpt: string
  excerptHtml?: string   // caso você tenha HTML pronto, senão pode ignorar
  coverImage: string
  date: string            // yyyy-MM-dd
}

export const POSTS: Post[] = [
  {
    slug: 'iot-credits',
    title: 'IoT revoluciona créditos de carbono',
    excerpt:
      'Descubra como a Internet das Coisas automatiza a coleta de dados e validação de créditos de carbono em tempo real.',
    coverImage: '/posts/iot-credits.jpg',
    date: '2025-04-20',
  },
  {
    slug: 'carbon-trends-2025',
    title: '15 tendências no mercado de carbono em 2025',
    excerpt:
      'Conheça as principais movimentações e inovações que vão moldar o setor de créditos de carbono neste ano.',
    coverImage: '/posts/trends-2025.jpg',
    date: '2025-04-18',
  },
  {
    slug: 'solar-impact-calculation',
    title: 'Como calcular o impacto real da sua usina solar',
    excerpt:
      'Aprenda o passo a passo para converter sua geração de energia em métricas de CO₂ evitado e créditos tokenizados.',
    coverImage: '/posts/solar-impact.jpg',
    date: '2025-04-15',
  },
  {
    slug: 'gold-standard-guide',
    title: 'Guia completo de certificação Gold Standard',
    excerpt:
      'Tudo o que você precisa saber para preparar seus projetos e obter a certificação Gold Standard sem complicações.',
    coverImage: '/posts/gold-standard.jpg',
    date: '2025-04-10',
  },
  {
    slug: 'blockchain-traceability',
    title: 'Blockchain e rastreabilidade de créditos',
    excerpt:
      'Entenda como a blockchain garante transparência e imutabilidade no histórico de emissão e uso dos seus créditos.',
    coverImage: '/posts/blockchain-trace.jpg',
    date: '2025-04-05',
  },
  {
    slug: 'iot-monitoring-tools',
    title: 'Ferramentas essenciais para monitoramento IoT',
    excerpt:
      'Conheça os principais sensores, plataformas e bibliotecas para manter seus dispositivos IoT sempre operando em alta performance.',
    coverImage: '/posts/iot-monitoring.jpg',
    date: '2025-03-30',
  },
]
