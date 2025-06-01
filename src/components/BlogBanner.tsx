'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BlogBannerProps {
  post: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage: string;
  };
}

export default function BlogBanner({ post }: BlogBannerProps) {
  const pathname = usePathname();
  const url = `https://www.neutralinkeco.com/blog/${post.slug}`;

  const shareText = encodeURIComponent(`${post.title} – leia no site da NeutraLink`);
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="relative rounded-xl overflow-hidden bg-black text-white shadow-lg">
      {/* Imagem de capa responsiva */}
      <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] lg:h-[600px]">
        <Image
          src={post.coverImage?.startsWith('/') ? post.coverImage : `/images/${post.coverImage}`}
          alt={post.title}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Conteúdo posicionado com segurança */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 lg:p-16">
        <p className="text-sm text-neutral-300 mb-2">
          {new Date(post.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}{' '}
          às{' '}
          {new Date(post.date).toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>

        <h2 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h2>
        <p className="text-neutral-200 max-w-2xl mb-6">{post.excerpt}</p>

        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href={`/blog/${post.slug}`}
            className="bg-primary text-black font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Ler notícia
          </Link>

          {/* Compartilhamento */}
          <a
            href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-sm"
          >
            WhatsApp
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-sm"
          >
            Facebook
          </a>
          <a
            href={`https://www.instagram.com/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white text-sm"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
