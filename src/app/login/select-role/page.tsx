'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SelectRolePage() {
  const router = useRouter()
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const roles = [
    {
      label: 'Gerador',
      value: 'GENERATOR',
      description: 'Você produz créditos de carbono a partir de energia solar e quer comercializá-los.',
    },
    {
      label: 'Comprador',
      value: 'BUYER',
      description: 'Você deseja adquirir créditos de carbono para compensar emissões ou revender.',
    },
    {
      label: 'Certificadora',
      value: 'CERTIFIER',
      description: 'Empresa responsável por auditar e certificar créditos gerados.',
    },
    {
      label: 'Integrador',
      value: 'INTEGRATOR',
      description: 'Você conecta dispositivos IoT e ajuda a automatizar a geração de créditos.',
    },
  ]

  const handleContinue = () => {
    if (selectedRole) {
      router.push(`/login/create-account?role=${selectedRole}`)
    }
  }

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Qual o seu perfil na NeutraLink?
        </h1>
        <p className="text-neutral-400 text-center mb-10">
          Escolha abaixo como deseja utilizar a plataforma
        </p>

        <div className="grid gap-4">
          {roles.map((role) => (
            <button
              key={role.value}
              onClick={() => setSelectedRole(role.value)}
              className={`p-4 rounded-md border transition text-left ${
                selectedRole === role.value
                  ? 'border-primary bg-primary/10'
                  : 'border-neutral-700'
              }`}
            >
              <h2 className="text-lg font-semibold text-white flex items-center justify-between">
                {role.label}
                {selectedRole === role.value && (
                  <span className="ml-2 text-primary">✔</span>
                )}
              </h2>
              <p className="text-sm text-neutral-400">{role.description}</p>
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedRole}
          className="mt-8 w-full bg-primary text-black py-3 rounded-md font-semibold hover:opacity-90 disabled:opacity-50 transition"
        >
          Continuar como {selectedRole ? roles.find(r => r.value === selectedRole)?.label : ''}
        </button>
      </div>
    </section>
  )
}