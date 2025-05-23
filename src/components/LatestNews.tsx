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
}

export default async function LatestNews() {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDir);

  const posts: Post[] = filenames
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf8');
      const { data } = matter(fileContent);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3); // apenas os 3 mais recentes

  return (
    <section className="bg-neutral-100 text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Últimas Notícias</h2>
          <Link
            href="/blog"
            className="text-primary hover:underline font-medium"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-lg shadow hover:shadow-lg transition border border-neutral-200 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={post.coverImage ?? '/posts/default.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </p>
                <p className="text-neutral-700 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  Ler mais →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
