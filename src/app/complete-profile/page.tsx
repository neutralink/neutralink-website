'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CompleteProfilePage() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    address: '',
  })

  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
      return
    }

    const payload = JSON.parse(atob(token.split('.')[1]))
    setUserId(payload.id)
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const token = localStorage.getItem('token')
    if (!token || !userId) return

    const res = await fetch(`https://api.neutralinkeco.com/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(form),
    })

    if (res.ok) {
      router.push('/dashboard')
    } else {
      alert('Erro ao completar perfil.')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Complete seu cadastro</h1>
          <p className="text-gray-400 text-sm mt-1">Preencha os dados abaixo para continuar</p>
        </div>

        <input
          type="text"
          placeholder="Nome completo"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded"
          required
        />
        <input
          type="date"
          value={form.birthDate}
          onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
          className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded"
          required
        />
        <input
          type="text"
          placeholder="Endereço completo"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="w-full bg-neutral-800 text-white placeholder-gray-400 px-4 py-3 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition font-semibold py-3 rounded"
        >
          Salvar e continuar
        </button>
      </form>
    </div>
  )
}