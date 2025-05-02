// src/components/HeroSection.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const slides = [
  {
    title: 'Transforme sua energia solar em valor real',
    description: 'Converta sua geração de energia limpa em créditos de carbono rastreáveis.',
    ctaText: 'Conheça a Plataforma',
    ctaLink: '/marketplace',
    image: '/images/banner-1.jpg',
  },
  {
    title: 'Créditos de Carbono ao Seu Alcance',
    description: 'Venda e rastreie créditos de forma simples e segura com a NeutraLink.',
    ctaText: 'Comece Agora',
    ctaLink: '/sell',
    image: '/images/banner-2.jpg',
  },
  {
    title: 'Contribua para um futuro sustentável',
    description: 'Conectamos geradores e empresas em um mercado confiável de carbono.',
    ctaText: 'Saiba Mais',
    ctaLink: '/about',
    image: '/images/banner-3.jpg',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-white overflow-hidden bg-black">
      
      {/* Imagem de fundo dinâmica */}
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* Conteúdo do banner */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow">
          {slide.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-8 drop-shadow">
          {slide.description}
        </p>
        <Link href={slide.ctaLink}>
          <Button variant="primary" size="lg">
            {slide.ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
}
