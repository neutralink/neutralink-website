'use client';

import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="bg-black text-white py-24 px-6 text-center relative overflow-hidden">
      {/* Imagem de fundo opcional com opacidade */}
      <div className="absolute inset-0 z-0 opacity-70 bg-[url('/images/bg-cta.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/80 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para transformar sua energia em valor?
        </h2>
        <p className="text-neutral-300 text-lg mb-8">
          Cadastre-se agora na NeutraLink e comece a gerar, vender ou comprar créditos de carbono com segurança e rastreabilidade.
        </p>
        <Link
          href="/cadastro"
          className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Criar Conta
        </Link>
      </div>
    </section>
  );
}
