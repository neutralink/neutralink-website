import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html'
import { getAllPosts } from '@/lib/getPosts';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDir);
  console.log('Geração de slugs:', filenames);
  return filenames.map((name) => ({
    slug: name.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const filePath = path.join(process.cwd(), 'src', 'posts', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);
  const processed = await remark()
  .use(remarkHtml)
  .process(content)
  const contentHtml = processed.toString();

  const shareUrl = encodeURIComponent(`https://www.neutralinkeco.com/blog/${post.slug}`);
  const shareText = encodeURIComponent(`${post.title} – confira no blog da NeutraLink`);

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Imagem de capa */}
        <div className="mb-6 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage || '/posts/iot-credits.jpg'}
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Título e Data */}
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-sm text-neutral-400 mb-8">
          {new Date(post.date).toLocaleDateString('pt-BR')} •{' '}
          {new Date(post.date).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>

        {/* Conteúdo renderizado */}
        <div
          className="prose prose-invert prose-neutral max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* Compartilhar */}
        <div className="flex gap-4 items-center mb-16">
          <span className="text-neutral-500">Compartilhar:</span>
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Instagram
          </a>
        </div>

        {/* Voltar ao blog */}
        <div className="mb-12">
          <Link href="/blog" className="text-primary hover:underline text-sm">
            ← Voltar ao Blog
          </Link>
        </div>

        {/* Outras publicações */}
        <div className="border-t border-neutral-800 pt-12">
          <h2 className="text-2xl font-semibold mb-6">Outras publicações</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {posts
              .filter((p) => p.slug !== params.slug)
              .slice(0, 2)
              .map((p) => (
                <div
                  key={p.slug}
                  className="bg-neutral-900 border border-neutral-700 rounded-lg p-6 shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-neutral-500 mb-4">
                    {new Date(p.date).toLocaleDateString('pt-BR')}
                  </p>
                  <p className="text-neutral-400 mb-4">{p.excerpt}</p>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-primary font-medium hover:underline"
                  >
                    Ler mais →
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
