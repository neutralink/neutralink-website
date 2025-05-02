import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogBanner from '@/components/BlogBanner';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
}

export default function BlogPage() {
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
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const latestPost = posts[0];
  const otherPosts = posts.slice(1, 7); // Mostra apenas os 6 seguintes

  return (
    <section className="bg-white text-black min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Últimas Notícias
        </h1>

        {/* Banner com a última notícia */}
        <BlogBanner post={latestPost} />

        {/* Lista dos demais artigos com imagem */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {otherPosts.map((post) => (
            <div
              key={post.slug}
              className="border border-neutral-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
            >
              {/* Imagem de capa do post */}
              <div className="relative w-full h-48">
                <Image
                  src={post.coverImage ?? '/posts/default.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo do card */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-neutral-500 mb-4">
                  {new Date(post.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
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

        {/* Link opcional para mais notícias */}
        {posts.length > 7 && (
          <div className="text-center mt-12">
            <Link
              href="/blog?page=2"
              className="text-primary hover:underline font-medium text-base"
            >
              Ver mais notícias →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
