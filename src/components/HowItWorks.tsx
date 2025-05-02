'use client';

import Image from 'next/image';
import { PlugZap, Sun, BadgeCheck } from 'lucide-react';

const steps = [
  {
    title: 'Instale o NeutraConect',
    description: 'Conecte nosso dispositivo IoT à sua geração solar para monitorar dados em tempo real.',
    icon: PlugZap,
  },
  {
    title: 'Gere Créditos de Carbono',
    description: 'A energia limpa gerada é automaticamente convertida em créditos de carbono tokenizados.',
    icon: Sun,
  },
  {
    title: 'Venda ou Certifique',
    description: 'Disponibilize seus créditos no marketplace ou envie para certificação oficial.',
    icon: BadgeCheck,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-white py-20 px-6 overflow-hidden">

      {/* Imagem de fundo */}
      <Image
        src="/images/bg-howitworks.jpg"  
        alt="Background gráfico"
        fill
        quality={100}
        className="object-cover opacity-40 z-0 pointer-events-none blur-sm z-10"
      />

      {/* Conteúdo acima da imagem */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
          Como Funciona
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-neutral-300 bg-white bg-opacity-90 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <step.icon size={48} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{step.title}</h3>
              <p className="text-base text-black">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
