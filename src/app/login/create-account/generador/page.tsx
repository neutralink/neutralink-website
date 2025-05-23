

'use client'

import { useState } from 'react'

export default function GeneratorRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    cpf: '',
    birthDate: '',
    address: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // TODO: Integrate with backend route to create user
  }

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cadastro do Gerador</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Nome completo"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Data de nascimento"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço completo"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded hover:opacity-90 transition"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </section>
  )
}