// src/app/blog/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { POSTS } from './posts'

export default function BlogIndexPage() {
  return (
    <section className="min-h-screen bg-white text-neutral-900 px-6 py-16 max-w-7xl mx-auto">
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
              priority
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-neutral-500 mb-4">
                {new Date(post.date).toLocaleDateString('pt-BR')}
              </p>
              <p className="text-neutral-700">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
