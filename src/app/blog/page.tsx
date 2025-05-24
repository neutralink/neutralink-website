'use client';
import { getAllPosts } from '@/lib/getAllPosts';
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

interface Props {
  searchParams: { page?: string };
}

export default function BlogPage({ searchParams }: Props) {
  const postsPerPage = 6;
  const currentPage = parseInt(searchParams.page || '1', 10);

  const posts = getAllPosts();

  // Paginação
  const totalPages = Math.ceil((posts.length - 1) / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage + 1;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const latestPost = posts[0];

  return (
    <section className="bg-white text-black min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Últimas Notícias
        </h1>

        {/* Banner do Post Mais Recente */}
        {currentPage === 1 && <BlogBanner post={latestPost} />}

        {/* Lista de Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 animate-fade-in">
          {paginatedPosts.map((post) => (
            <div
              key={post.slug}
              className="border border-neutral-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
            >
              {/* Imagem do Post */}
              <div className="relative w-full h-48">
                <Image
                  src={post.coverImage ?? '/posts/default.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo do Post */}
              <div className="p-6">
                {/* Categoria */}
                {post.category && (
                  <Link
                    href={`/blog/categoria/${post.category.toLowerCase()}`}
                    className={`inline-block text-sm font-medium px-3 py-1 rounded-full mb-3 transition ${getCategoryBadgeColor(post.category)}`}
                  >
                    {post.category}
                  </Link>
                )}

                {/* Título e Data */}
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                </Link>
                <p className="text-sm text-neutral-500 mb-4">
                  {new Date(post.date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>

                {/* Resumo */}
                <p className="text-neutral-700 mb-4">{post.excerpt}</p>

                {/* Link para o Post */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                >
                  Ler mais →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navegação de Páginas */}
        <div className="flex flex-col items-center mt-12 space-y-4">
          <span className="text-sm text-neutral-600">
            Página {currentPage} de {totalPages}
          </span>

          <div className="flex gap-4">
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
              >
                ← Página anterior
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
              >
                Próxima página →
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
