import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
}

export default function CategoriaIndexPage() {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDir);

  const allPosts: Post[] = filenames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const content = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { data } = matter(content);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        category: data.category || 'Outros',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const groupedByCategory: Record<string, Post[]> = {};
  for (const post of allPosts) {
    const category = post.category || 'Outros';
    if (!groupedByCategory[category]) groupedByCategory[category] = [];
    groupedByCategory[category].push(post);
  }

  const categories = Object.keys(groupedByCategory).sort();

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Sidebar esquerda */}
        <aside className="md:col-span-1">
          <h2 className="text-xl font-bold mb-6">Categorias</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase()}`}
                  className="text-primary hover:underline block"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Conteúdo principal */}
        <div className="md:col-span-3 space-y-24">
          {categories.map((cat) => (
            <div key={cat} id={cat.toLowerCase()}>
              <h2 className="text-2xl font-bold mb-6 border-b border-neutral-200 pb-2 whitespace-nowrap">
                {cat}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedByCategory[cat].map((post) => (
                  <div
                    key={post.slug}
                    className="border border-neutral-700 rounded-lg overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-primary transition-all bg-neutral-900"
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={
                          typeof post.coverImage === 'string'
                            ? post.coverImage.startsWith('/')
                              ? post.coverImage
                              : `/images/${post.coverImage}`
                            : '/images/default.jpg'
                        }
                        alt={post.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="p-6">
                      <Link
                        href={`/blog/categoria/${cat.toLowerCase()}`}
                        className={`inline-block text-sm font-medium px-3 py-1 rounded-full mb-3 transition ${
                          {
                            ESG: 'bg-green-100 text-green-800',
                            Tecnologia: 'bg-blue-100 text-blue-800',
                            Regulação: 'bg-yellow-100 text-yellow-800',
                            Mercado: 'bg-purple-100 text-purple-800',
                            Sustentabilidade: 'bg-emerald-100 text-emerald-800',
                            Cases: 'bg-pink-100 text-pink-800',
                          }[cat] ?? 'bg-neutral-100 text-neutral-600'
                        }`}
                      >
                        <span className="mr-1">📂</span> {cat}
                      </Link>

                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-neutral-400 mb-4 flex items-center gap-1">
                        🕒 {new Date(post.date).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-neutral-300 mb-4">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary font-medium hover:underline"
                      >
                        Ler mais <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
