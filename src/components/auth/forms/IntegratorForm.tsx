

'use client'

import { useState } from 'react'

export default function IntegratorForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle integrator form submission logic here
    console.log('Form Data:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Nome completo</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Senha</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Empresa integradora</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:opacity-90"
      >
        Criar conta
      </button>
    </form>
  )
}