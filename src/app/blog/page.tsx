// src/app/blog/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

// Aqui seus posts — substitua pela fonte real (API, MDX, etc)
const POSTS = [
  {
    slug: 'iot-credits',
    title: 'IoT revoluciona créditos de carbono',
    excerpt:
      'Entenda como a Internet das Coisas automatiza e valida a geração de créditos.',
    coverImage: '/posts/iot-credits.jpg',
    date: '2025-04-20T10:30:00Z',
    author: 'Pedro Soares',
    authorAvatar: '/avatars/pedro.jpg',
  },
  {
    slug: 'carbon-trends-2025',
    title: '15 tendências no mercado de carbono em 2025',
    excerpt:
      'Saiba quais movimentos vão moldar o mercado de créditos de carbono neste ano.',
    coverImage: '/posts/trends-2025.jpg',
    date: '2025-04-18T14:45:00Z',
    author: 'Ana Silva',
    authorAvatar: '/avatars/ana.jpg',
  },
  // …
]

export default function BlogIndexPage() {
  const sidebar: ReactNode = (
    <div className="space-y-8">
      {POSTS.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex items-start gap-4"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            width={64}
            height={64}
            className="w-16 h-16 rounded object-cover"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-neutral-900">
              {post.title}
            </h4>
            <time
              className="text-sm text-neutral-500"
              dateTime={post.date}
            >
              {new Date(post.date).toLocaleDateString()} •{' '}
              {new Date(post.date).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
          </div>
        </Link>
      ))}
    </div>
  )

  const main: ReactNode = (
    <section>
      <h1 className="text-4xl font-extrabold mb-8">Blog NeutraLink</h1>
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
              <h2 className="text-2xl font-semibold mb-2 text-neutral-900">
                {post.title}
              </h2>
              <div className="flex items-center text-sm text-neutral-500 mb-4">
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  width={24}
                  height={24}
                  className="rounded-full mr-2"
                />
                <span className="mr-2">{post.author}</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
              <p className="text-neutral-700">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )

  return (
    <>
      {{
        sidebar,
        main,
      }}
    </>
  )
}
