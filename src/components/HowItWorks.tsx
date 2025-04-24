// src/components/HowItWorks.tsx
'use client'
import { Wifi, HardDrive, Cpu, DollarSign, Monitor } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: <Wifi className="w-8 h-8 text-[#00C37A]" />,
      title: 'Conecte seu Dispositivo',
      lines: [
        'Instale o NeutraConect ao seu inversor solar.',
        'Configure em minutos via browser (RS485, Hoymiles ou sensor de corrente).'
      ]
    },
    {
      icon: <HardDrive className="w-8 h-8 text-[#00C37A]" />,
      title: 'Gere e Registre Dados',
      lines: [
        'Firmware assinatura digital em cada leitura.',
        'Backend valida e tokeniza cada tonelada de CO₂ evitada.'
      ]
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#00C37A]" />,
      title: 'Tokenize Seus Créditos',
      lines: [
        'Receba NTL (NeutraLink Token) pré-certificados automaticamente.',
        'Opte pela certificação oficial em pools auditados.'
      ]
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#00C37A]" />,
      title: 'Negocie no Marketplace',
      lines: [
        'Ofereça créditos pré-certificados ou certificados.',
        'Defina seu preço com oráculos de mercado em tempo real.'
      ]
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#00C37A]" />,
      title: 'Acompanhe e Aposente',
      lines: [
        'Dashboard live com status de certificação, transações e relatórios.',
        'Aposente créditos com documentação oficial ou use em marketing sustentável.'
      ]
    }
  ]

  return (
    <section id="como-funciona" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-neutral-900 mb-16">
          Como Funciona
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-[#00C37A] transition-colors">
                {step.title}
              </h3>
              <ul className="space-y-2 flex-1">
                {step.lines.map((line, i) => (
                  <li key={i} className="text-neutral-700">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
