

'use client'

import { useState } from 'react'

export default function GeneratorForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    hasIoTDevice: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dados enviados:', formData)
    // Futuramente: enviar para API
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-black">Cadastro do Gerador</h2>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Nome completo</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">CPF</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Telefone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="hasIoTDevice"
          checked={formData.hasIoTDevice}
          onChange={handleChange}
          className="mr-2"
        />
        <label htmlFor="hasIoTDevice" className="text-sm text-gray-700">
          Já possui um dispositivo IoT?
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
      >
        Criar Conta
      </button>
    </form>
  )
}