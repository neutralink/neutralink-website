'use client'

import { Monitor, User, AlertCircle, FileText, Leaf } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      Icon: Monitor,
      title: 'Dashboard Personalizado',
      description:
        'Visualize geração solar, emissão de créditos e balanço de tokens num painel único.',
      color: 'bg-green-100 text-green-600',
    },
    {
      Icon: User,
      title: 'Perfil de Usuário',
      description:
        'Cinco perfis dedicados: Gerador, Comprador, Empresa, Integradora e Certificadora.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      Icon: AlertCircle,
      title: 'Precificação Inteligente',
      description:
        'Alertas de preço: receba sugestões e avisos quando seu valor estiver acima ou abaixo do mercado.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      Icon: FileText,
      title: 'Documentação Oficial',
      description:
        'Todas as transações e certificações acompanham relatórios e hashes on-chain.',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      Icon: Leaf,
      title: 'Sustentabilidade na Prática',
      description:
        'Conecte IoT, blockchain e padrões de certificação (Gold Standard, Verra) de modo simples.',
      color: 'bg-green-50 text-green-700',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Recursos e Vantagens
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ Icon, title, description, color }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start"
            >
              <div className={`p-3 rounded-full mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-neutral-600 flex-1">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
