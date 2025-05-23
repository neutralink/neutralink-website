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

// BuyerForm.tsx
'use client'

import { useState } from 'react'

export default function BuyerForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Buyer form submitted:', form)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome completo" onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Senha" onChange={handleChange} required />
      <button type="submit">Cadastrar como Comprador</button>
    </form>
  )
}

// CompanyForm.tsx
'use client'

import { useState } from 'react'

export default function CompanyForm() {
  const [form, setForm] = useState({
    companyName: '',
    email: '',
    password: '',
    cnpj: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Company form submitted:', form)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input name="companyName" placeholder="Nome da empresa" onChange={handleChange} required />
      <input name="cnpj" placeholder="CNPJ" onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail corporativo" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Senha" onChange={handleChange} required />
      <button type="submit">Cadastrar como Empresa</button>
    </form>
  )
}

// IntegratorForm.tsx
'use client'

import { useState } from 'react'

export default function IntegratorForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Integrator form submitted:', form)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nome completo" onChange={handleChange} required />
      <input name="company" placeholder="Empresa de Integração" onChange={handleChange} required />
      <input name="email" type="email" placeholder="E-mail" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Senha" onChange={handleChange} required />
      <button type="submit">Cadastrar como Integrador</button>
    </form>
  )
}