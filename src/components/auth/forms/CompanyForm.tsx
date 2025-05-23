

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CompanyForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: 'COMPANY' }),
      })

      if (!res.ok) throw new Error('Erro ao registrar')
      const data = await res.json()
      router.push('/login')
    } catch (err) {
      setError('Falha ao criar conta. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-1 text-sm">Nome da Empresa</label>
        <input
          type="text"
          placeholder="Ex: NeutraCorp"
          className="w-full px-4 py-2 border rounded"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Seu Nome</label>
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full px-4 py-2 border rounded"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">E-mail</label>
        <input
          type="email"
          placeholder="email@empresa.com"
          className="w-full px-4 py-2 border rounded"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Senha</label>
        <input
          type="password"
          placeholder="********"
          className="w-full px-4 py-2 border rounded"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Criar Conta'}
      </button>
    </form>
  )
}