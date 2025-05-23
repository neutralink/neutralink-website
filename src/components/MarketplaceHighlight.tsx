// src/components/MarketplaceHighlight.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

const credits = [
  {
    id: 1,
    name: 'Usina Solar Palmas',
    location: 'Palmas - TO, Brasil',
    flag: '/icons/flags/br.svg',
    image: '/images/city-palmas.jpg',
    amount: '1.250 kg CO₂',
    price: 'R$ 58,00',
    status: 'Certificado',
    certifier: 'Verra',
    link: '/marketplace/1',
  },
  {
    id: 2,
    name: 'Solar Field Nevada',
    location: 'Las Vegas, EUA',
    flag: '/icons/flags/us.svg',
    image: '/images/city-vegas.jpg',
    amount: '950 kg CO₂',
    price: '12 NTL',
    status: 'Pré-Certificado',
    certifier: 'Gold Standard',
    link: '/marketplace/2',
  },
  {
    id: 3,
    name: 'Fazenda Solar Andes',
    location: 'Atacama, Chile',
    flag: '/icons/flags/cl.svg',
    image: '/images/city-atacama.jpg',
    amount: '1.800 kg CO₂',
    price: 'R$ 62,00',
    status: 'Certificado',
    certifier: 'Verra',
    link: '/marketplace/3',
  },
];

export default function MarketplaceHighlight() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Créditos Disponíveis
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {credits.map((credit) => (
            <div
              key={credit.id}
              className="rounded-xl overflow-hidden bg-white border border-neutral-300 shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Imagem da cidade */}
              <div className="relative h-40 w-full">
                <Image
                  src={credit.image}
                  alt={`Imagem de ${credit.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo do card */}
              <div className="bg-white py-6 px-6 text-black">
                {/* Título e Localização */}
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src={credit.flag}
                    alt="País"
                    width={24}
                    height={16}
                    className="rounded shadow-sm"
                  />
                  <h3 className="text-lg font-semibold text-primary">{credit.name}</h3>
                </div>
                <p className="text-sm text-neutral-500 mb-2">{credit.location}</p>

                {/* Informações do Crédito */}
                <p className="text-sm text-black font-medium mb-1">♻️ {credit.amount}</p>
                <p className="text-xl font-bold text-black mb-2">{credit.price}</p>

                {/* Status Badge */}
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
                    credit.status === 'Certificado'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {credit.status}
                </span>

                {/* Certificadora */}
                <p className="text-xs mt-2 mb-4">
                  <span className="text-black">Certificadora:</span>{' '}
                  <span className="font-medium text-black">{credit.certifier}</span>
                </p>

                {/* Botões */}
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={credit.link}
                    className="flex-1 text-center bg-primary text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
                  >
                    Comprar
                  </Link>
                  <Link
                    href={credit.link}
                    className="flex-1 text-center border border-primary text-primary font-semibold py-2 rounded-lg hover:bg-primary/10 transition"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
