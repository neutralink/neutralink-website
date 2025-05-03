import Link from 'next/link';

export default function NeutraconectCTA() {
  return (
    <section className="relative bg-green-600 text-white py-24 px-6 overflow-hidden">
      {/* Fundo com gradiente animado ou imagem estática */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/backgrounds/neutraconect-pattern.jpg')" }}
      />
      <div className="absolute inset-0 bg-green-700/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para monetizar sua geração de energia?
        </h2>
        <p className="text-lg text-neutral-100 mb-8">
          Com o NeutraConect, transformar energia solar em créditos de carbono certificados é automático, seguro e rentável.
        </p>
        <Link
          href="/contato"
          className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg shadow hover:shadow-lg hover:bg-green-100 transition"
        >
          Quero adquirir o NeutraConect
        </Link>
      </div>
    </section>
  );
}
