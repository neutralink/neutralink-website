// GeneratorForm.tsx
'use client'

import { useState } from 'react'

export default function GeneratorForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    cep: '',
    address: '',
    city: '',
    state: '',
    cpf: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await response.json()
      if (response.ok) {
        alert('Cadastro realizado com sucesso!')
      } else {
        alert(`Erro: ${data.message}`)
      }
    } catch (error) {
      console.error('Erro ao cadastrar:', error)
      alert('Erro ao cadastrar. Tente novamente.')
    }
  }

  return (
    <section className="max-w-lg mx-auto p-6 bg-neutral-800 rounded-lg shadow-md">
      <div className="mb-6">
        <p className="text-sm text-neutral-400 mt-1">
          Preencha os dados abaixo para se registrar como gerador de créditos de carbono.
          Você poderá vincular um dispositivo IoT mais tarde no seu painel.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome completo"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <input
          name="cpf"
          placeholder="CPF"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <input
          name="cep"
          placeholder="CEP"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <input
          name="address"
          placeholder="Endereço completo"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="Cidade"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <input
          name="state"
          placeholder="Estado"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-md transition"
        >
          Criar Conta
        </button>
      </form>
    </section>
  )
}