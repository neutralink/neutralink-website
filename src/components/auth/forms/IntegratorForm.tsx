'use client'

import { useState } from 'react'

export default function IntegratorForm() {
  // Estado inicial do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
  })

  // Atualiza os campos conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Lida com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Seção: Informações Pessoais */}
      {/* Campo: Nome completo */}
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

      {/* Campo: E-mail */}
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

      {/* Campo: Senha */}
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

      {/* Quebra visual entre seções */}
      <hr className="my-4" />

      {/* Seção: Informações da Empresa */}
      {/* Campo: Empresa integradora */}
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

      {/* Botão de envio */}
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:opacity-90"
      >
        Criar conta
      </button>
    </form>
  )
}