import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogBanner from '@/components/BlogBanner';
import Link from 'next/link';
import Image from 'next/image';
import { getCategoryBadgeColor } from '@/lib/getCategoryBadgeColor';

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
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
        category: data.category || 'Outros',
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  // Agrupar por categoria
  const groupedByCategory: Record<string, Post[]> = {};
  for (const post of otherPosts) {
    const category = post.category ?? 'Outros';
    if (!groupedByCategory[category]) {
      groupedByCategory[category] = [];
    }
    groupedByCategory[category].push(post);
  }

return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Últimas Notícias
        </h1>

        {/* Banner com a última notícia */}
        <BlogBanner post={{ 
          ...latestPost, 
          coverImage: latestPost.coverImage?.startsWith('/') 
            ? latestPost.coverImage 
            : `/images/${latestPost.coverImage ?? 'default.jpg'}` 
        }} />

        {/* Seções por categoria */}
        <div className="mt-16 space-y-24">
          {Object.entries(groupedByCategory).map(([category, posts]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-6 border-b border-neutral-200 pb-2">
                {category}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <div
                    key={post.slug}
                    className="border border-neutral-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-neutral-900"
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
                      />
                    </div>

                    {/* Bloco atualizado */}
                    <div className="p-6">
                      {/* Badge com link e cor dinâmica */}
                      {post.category && (
                        <Link
                          href={`/blog/categoria/${post.category.toLowerCase()}`}
                          className={`inline-block text-sm font-medium px-3 py-1 rounded-full mb-3 transition ${getCategoryBadgeColor(post.category)}`}

                        >
                          {post.category}
                        </Link>
                      )}

                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-sm text-neutral-400 mb-4">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-neutral-300 mb-4">{post.excerpt}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
