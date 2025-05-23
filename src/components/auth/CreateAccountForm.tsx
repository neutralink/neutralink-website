'use client'

import { useState } from 'react'

interface CreateAccountFormProps {
  selectedRole: string | null
}

export default function CreateAccountForm({ selectedRole }: CreateAccountFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRole) {
      alert('Selecione um tipo de conta antes de continuar.')
      return
    }
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.')
      return
    }
    console.log('Criar conta para', selectedRole, formData)
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-neutral-900 rounded-md text-white">
      <h2 className="text-2xl font-bold mb-4">Criar conta ({selectedRole})</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Nome completo</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Confirmar senha</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-neutral-800 border border-neutral-700"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-black font-bold py-2 rounded hover:opacity-90 transition"
        >
          Criar Conta
        </button>
      </form>
    </div>
  )
}
