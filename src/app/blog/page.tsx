import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogBanner from '@/components/BlogBanner';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
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
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <section className="bg-white text-black min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Últimas Notícias
        </h1>

        {/* Banner com a última notícia */}
        <BlogBanner post={latestPost} />

        {/* Lista dos demais artigos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {otherPosts.map((post) => (
            <div
              key={post.slug}
              className="border border-neutral-300 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
