import Link from 'next/link';

export default function VideoShowcase() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Assista e entenda a NeutraLink
        </h2>

        {/* Descrição curta */}
        <p className="text-neutral-300 mb-10 max-w-2xl mx-auto">
          Veja como estamos revolucionando o mercado de créditos de carbono com tecnologia, rastreabilidade e impacto real.
        </p>

        {/* Vídeo responsivo */}
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            src="https://www.youtube.com/embed/-DZChDakoho"
            title="NeutraLink - vídeo institucional"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>

        {/* Botão para o canal */}
        <Link
          href="https://www.youtube.com/@neutralink"
          target="_blank"
          className="inline-block px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition"
        >
          Ver Canal Completo →
        </Link>
      </div>
    </section>
  );
}
