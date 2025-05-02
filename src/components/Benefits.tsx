'use client';

import Image from 'next/image';
import {
  ShieldCheck,
  Zap,
  Globe,
  BarChart2,
  DollarSign,
  Building2,
} from 'lucide-react';

const benefits = [
  {
    icon: <Globe size={32} className="text-primary" />,
    title: 'Rastreabilidade',
    description: 'Cada crédito possui origem, data e histórico auditável.',
  },
  {
    icon: <Zap size={32} className="text-primary" />,
    title: 'Geração Automática',
    description: 'Dados enviados direto do seu inversor solar para a plataforma.',
  },
  {
    icon: <DollarSign size={32} className="text-primary" />,
    title: 'Certificação Acessível',
    description: 'Reduza custos com nossa solução escalável para pequenos geradores.',
  },
  {
    icon: <BarChart2 size={32} className="text-primary" />,
    title: 'Dashboard Completo',
    description: 'Visualize créditos, histórico e status em tempo real.',
  },
  {
    icon: <ShieldCheck size={32} className="text-primary" />,
    title: 'Segurança',
    description: 'Assinatura digital e validação com blockchain e criptografia.',
  },
  {
    icon: <Building2 size={32} className="text-primary" />,
    title: 'Conformidade ESG',
    description: 'Créditos válidos para relatórios empresariais e auditorias.',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Imagem de fundo */}
      <Image
        src="/images/bg-benefits.jpg"
        alt="Background gráfico"
        fill
        quality={100}
        className="object-cover opacity-20 z-0 pointer-events-none"
      />

      {/* Overlay escuro para manter contraste */}
      <div className="absolute inset-0 bg-black/90 z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Por que escolher a NeutraLink?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left hover:border-primary hover:shadow-lg transition"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {benefit.title}
              </h3>
              <p className="text-sm text-neutral-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
