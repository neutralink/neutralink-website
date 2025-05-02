// src/components/Banner.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export default function Banner() {
  return (
    <section className="relative bg-black text-white h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* Imagem de fundo */}
      <Image
        src="/images/bg-banner.jpg" // coloque essa imagem em public/images/
        alt="Banner de energia limpa"
        fill
        className="object-cover opacity-20 z-0"
        priority
      />

      {/* Conteúdo acima da imagem */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Descubra como sua energia pode virar impacto positivo
        </h2>
        <p className="text-base md:text-lg text-neutral-300 mb-6 max-w-xl mx-auto">
          Com o NeutraLink você transforma sua geração solar em créditos de carbono rastreáveis, auditáveis e negociáveis.
        </p>
        <Link href="/marketplace">
          <Button variant="primary" size="lg">
            Ver Créditos Disponíveis
          </Button>
        </Link>
      </div>
    </section>
  );
}
