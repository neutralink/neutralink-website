'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function RecuperarSenhaPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [enviado, setEnviado] = useState(false)
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!token) {
      alert('Token inválido ou ausente.')
      return
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.')
      return
    }

    const res = await fetch('https://api.neutralinkeco.com/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    })

    if (res.ok) {
      setEnviado(true)
    } else {
      alert('Erro ao redefinir senha.')
    }
  }

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Redefinir Senha</h1>
        {enviado ? (
          <p className="text-green-500">Senha redefinida com sucesso! Você já pode fazer login.</p>
        ) : (
          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm text-neutral-300">Nova senha</label>
              <input
                type="password"
                placeholder="Digite a nova senha"
                className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-neutral-300">Confirme a nova senha</label>
              <input
                type="password"
                placeholder="Confirme a nova senha"
                className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Redefinir Senha
            </button>
          </form>
        )}
      </div>
    </section>
  )
}