'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroNeutraconect() {
  return (
    <section
      className="relative text-white bg-black bg-cover bg-center py-32 px-6"
      style={{ backgroundImage: "url('/backgrounds/neutraconect-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            NeutraConect
            <br />
            Transforme sua Geração Solar em Dinheiro Real
          </h1>
          <p className="text-lg text-neutral-200 mb-8 max-w-xl">
            O NeutraConect é o dispositivo IoT que automatiza a criação de créditos de carbono validados. Geração em tempo real, segurança criptográfica e integração total com a plataforma NeutraLink.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-lg shadow hover:shadow-xl hover:opacity-90 transition"
          >
            Quero Adquirir o NeutraConect
          </Link>
        </div>
        <div className="relative w-full h-[500px]"> {/* Aumentado para 500px de altura */}
          <Image
            src="/product/neutraconect-device.png"
            alt="Dispositivo NeutraConect"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
