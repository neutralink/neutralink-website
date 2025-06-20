'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Sun, BadgeDollarSign, Building2, Cable } from 'lucide-react'

export default function SelectRolePage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const roles = [
    {
      label: 'Quero gerar créditos com energia solar',
      value: 'GENERATOR',
      description: 'Conecte seu inversor ou sensor IoT e comece gerar NTL automaticamente.',
      icon: <Sun className="text-primary w-8 h-8" />,
    },
    {
      label: 'Quero comprar créditos de carbono',
      value: 'BUYER',
      description: 'Compre créditos verificados para compensar suas emissões pessoais.',
      icon: <BadgeDollarSign className="text-primary w-8 h-8" />,
    },
    {
      label: 'Sou uma empresa que precisa compensar CO₂',
      value: 'COMPANY',
      description: 'Acesse créditos certificados e relatórios ESG completos.',
      icon: <Building2 className="text-primary w-8 h-8" />,
    },
    {
      label: 'Sou um integrador de dispositivos IoT',
      value: 'INTEGRATOR',
      description: 'Conecte inversores para usuários e ganhe comissões.',
      icon: <Cable className="text-primary w-8 h-8" />,
    },
  ]

  const handleContinue = (role: string) => {
    router.push(`/login/cadastro?role=${role}`)
  }

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-28">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Escolha seu tipo de conta na NeutraLink
        </h1>
        <p className="text-neutral-400 text-center mb-10">
          Escolha uma das opções abaixo para personalizar sua experiência.
        </p>

        <div className="grid gap-4">
          {roles.map((role) => (
            <div
              key={role.value}
              className={`flex justify-between items-center p-5 rounded-xl transition bg-zinc-900 border-2 ${
                selectedRole === role.value ? 'border-lime-400' : 'border-zinc-700'
              }`}
            >
              <div className="flex gap-4 items-start">
                {role.icon}
                <div>
                  <h2 className="text-white font-bold text-base mb-1 leading-tight">
                    {role.label}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-tight">
                    {role.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleContinue(role.value)}
                className="bg-primary text-black px-4 py-1.5 font-semibold text-sm rounded-md shadow hover:opacity-90"
              >
                Selecionar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}