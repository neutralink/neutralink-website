// GeneratorForm.tsx
'use client'

import { useState } from 'react'

export default function GeneratorForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    inverterBrand: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Generator form submitted:', form)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome completo" onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Senha" onChange={handleChange} required />
      <input name="inverterBrand" placeholder="Marca do Inversor" onChange={handleChange} required />
      <button type="submit">Cadastrar como Gerador</button>
    </form>
  )
}