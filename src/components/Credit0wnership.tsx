'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CreditOwnership() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden text-center">
      {/* Imagem de fundo com opacidade */}
      <Image
        src="/images/bg-ownership.jpg"
        alt="Fundo institucional"
        fill
        className="object-cover opacity-70 z-0 pointer-events-none"
      />

      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
      >
        {/* Foto do fundador */}
        <div className="w-36 h-36 relative rounded-full overflow-hidden border-4 border-primary shadow-lg mb-6">
          <Image
            src="/images/pedro-soares.jpg"
            alt="Pedro Soares"
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm text-neutral-400 mb-8">Pedro Soares — Fundador da NeutraLink</p>

        {/* Frase e lista */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
          A propriedade de um crédito de carbono é o direito legal de posse sobre a unidade de CO₂ evitada,
          incluindo o direito de:
        </h2>
        <p className="text-lg text-neutral-200 max-w-2xl">
  Compensar emissões, reivindicar impactos ESG, enviar para certificação, aposentar ou revender.
</p>

      </motion.div>
    </section>
  );
}
