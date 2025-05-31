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
  const startIndex = 1 + (currentPage - 1) * postsPerPage;
  const paginatedPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const latestPost = posts[0];


  return (
    <section className="bg-gradient-to-b from-white via-neutral-50 to-neutral-100 text-black min-h-screen pt-40 pb-24 px-6 relative">
      <div className="absolute top-[-80px] right-[-80px] w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center mt-3">
          📢 Últimas Notícias da NeutraLink
        </h1>

        {/* Banner no Topo */}
        <BlogBanner post={latestPost} />

        {/* Card de Categorias abaixo do Banner */}
        <div className="w-full bg-neutral-100 border border-neutral-300 rounded-lg p-6 mt-10 mb-10">
          <h2 className="text-lg font-semibold mb-4 text-center">Categorias</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[...new Set(posts.map((p) => p.category).filter(Boolean))].map((category) => (
              <Link
                key={category}
                href={`/blog/categoria/${category?.toLowerCase()}`}
                className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium border border-neutral-300 hover:bg-primary hover:text-white transition"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 animate-fade-in">
          {/* Lista de Posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white rounded-xl p-4 shadow-md">
            {paginatedPosts.map((post) => {
              console.log('renderizando:', post.slug);
              return (
              <div
                key={post.slug}
                className="border border-neutral-200 rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
              >
                {/* Imagem do Post */}
                <div className="relative w-full h-48">
                  <Image
                    src={
                      post.coverImage
                        ? post.coverImage.startsWith('/')
                          ? post.coverImage
                          : `/posts/${post.coverImage}`
                        : '/posts/default.jpg'
                    }
                    alt={`Imagem de capa do post: ${post.title}`}
                    width={600}
                    height={300}
                    className="object-cover w-full h-auto"
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
            )})}
          </div>
        </div>

        {/* Navegação de Páginas */}
        <div className="flex flex-col items-center mt-12 space-y-4">
          <span className="text-sm text-neutral-800 font-semibold">
            Página {currentPage} de {totalPages}
          </span>

          <div className="flex gap-4">
            {currentPage > 1 && (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
              >
                <span>← Página anterior</span>
              </Link>
            )}
            {currentPage < totalPages && (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition"
              >
                <span>Próxima página →</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
