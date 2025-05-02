import Image from 'next/image';

export default function NeutraconectCompatibility() {
  const brands = [
    { name: 'Hoymiles', icon: 'hoymiles.svg' },
    { name: 'Growatt', icon: 'growatt.svg' },
    { name: 'Solis', icon: 'solis.svg' },
    { name: 'Deye', icon: 'deye.svg' },
    { name: 'Enphase', icon: 'enphase.svg' },
  ];

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Compatível com os principais inversores do mercado
        </h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-12">
          O NeutraConect se adapta a diferentes cenários de usinas solares: tradicionais ou microinversores com gateway.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {brands.map((brand) => (
            <div key={brand.name} className="w-28 h-16 relative grayscale hover:grayscale-0 transition">
              <Image
                src={`/brands/${brand.icon}`}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
