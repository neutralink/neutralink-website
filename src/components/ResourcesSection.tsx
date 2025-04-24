// src/components/ResourcesSection.tsx
'use client'

import { LayoutDashboard, User, Bell, FileText, Leaf } from 'lucide-react'

export default function ResourcesSection() {
  const resources = [
    {
      icon: <LayoutDashboard className="w-8 h-8 text-green-600" />,
      title: 'Dashboard Personalizado',
      description:
        'Visualize geração solar, emissão de créditos e balanço de tokens num painel único.',
      bg: 'bg-green-100',
    },
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: 'Perfil de Usuário',
      description:
        'Cinco perfis dedicados: Gerador, Comprador, Empresa, Integradora e Certificadora.',
      bg: 'bg-blue-100',
    },
    {
      icon: <Bell className="w-8 h-8 text-yellow-600" />,
      title: 'Precificação Inteligente',
      description:
        'Alertas de preço: receba sugestões e avisos quando seu valor estiver acima ou abaixo do mercado.',
      bg: 'bg-yellow-100',
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: 'Documentação Oficial',
      description:
        'Todas as transações e certificações acompanham relatórios e hashes on-chain.',
      bg: 'bg-purple-100',
    },
    {
      icon: <Leaf className="w-8 h-8 text-teal-600" />,
      title: 'Sustentabilidade na Prática',
      description:
        'Conecte IoT, blockchain e padrões (Gold Standard, Verra) de modo simples.',
      bg: 'bg-teal-100',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Recursos e Vantagens
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start"
            >
              <div className={`p-3 mb-4 rounded-full ${res.bg}`}>
                {res.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{res.title}</h3>
              <p className="text-neutral-600">{res.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
