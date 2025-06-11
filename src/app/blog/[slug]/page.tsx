import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { defaultSchema } from 'hast-util-sanitize';
import rehypeStringify from 'rehype-stringify';
import { getAllPosts } from '@/lib/getPosts';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDir);
  console.log('Geração de slugs:', filenames);
  return filenames.map((name) => ({
    slug: name.replace(/\.md$/, ''),
  }));
}

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts: Post[] = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const filePath = path.join(process.cwd(), 'src', 'posts', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContent);
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, defaultSchema)
    .use(rehypeStringify as any)
    .process(content);
  const contentHtml = processed.toString();

  const shareUrl = encodeURIComponent(`https://www.neutralinkeco.com/blog/${post.slug}`);
  const shareText = encodeURIComponent(`${post.title} – confira no blog da NeutraLink`);

  // SEO / Open Graph
  const head = (
    <Head>
      <title>{post.title} | NeutraLink</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={`https://www.neutralinkeco.com${post.coverImage ?? '/posts/default.jpg'}`} />
      <meta property="og:url" content={`https://www.neutralinkeco.com/blog/${post.slug}`} />
    </Head>
  );

  return (
    <>
      {head}
      <section className="bg-black text-white min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <p className="text-sm text-neutral-400 mb-4">
            <Link href="/" className="hover:underline">Início</Link> / <Link href="/blog" className="hover:underline">Blog</Link> / {post.title}
          </p>

          {/* Imagem de capa */}
          <div className="mt-8 mb-6 rounded-lg overflow-hidden">
            <Image
              src={post.coverImage || '/images/iot-credits.jpg'}
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

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag: string) => (
                <span key={tag} className="bg-neutral-800 text-xs px-3 py-1 rounded-full text-neutral-400">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Conteúdo renderizado (Markdown) */}
          <div
            className="prose prose-invert prose-neutral text-neutral-200 [&_*]:!text-neutral-200 max-w-none mb-12"
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
                    className="bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                  >
                    <div className="w-full h-40 relative">
                      <Image
                        src={typeof p.coverImage === 'string' ? (p.coverImage.startsWith('/') ? p.coverImage : `/posts/${p.coverImage}`) : '/posts/default.jpg'}
                        alt={`Miniatura do post: ${p.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                      <p className="text-sm text-neutral-500 mb-2">
                        {new Date(p.date).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-neutral-400 text-sm line-clamp-2">{p.excerpt}</p>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-primary text-sm font-medium hover:underline mt-2 inline-block"
                      >
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
