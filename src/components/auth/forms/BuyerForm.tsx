'use client'

import { useState } from 'react'

export default function BuyerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Buyer registration data:', formData)
    // Future: send data to backend
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-1 text-sm font-medium text-white">Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Seu nome completo"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-white">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="seu@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium text-white">Senha</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-neutral-900 text-white border border-neutral-700"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-black font-semibold py-2 rounded-md hover:opacity-90 transition"
      >
        Criar conta como Comprador
      </button>
    </form>
  )
}
