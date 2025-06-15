'use client'

import { useState } from 'react'

export function RecuperarSenhaForm() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      alert('Por favor, informe um e-mail válido.')
      return
    }

    const res = await fetch('https://api.neutralinkeco.com/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setEnviado(true)
    } else {
      alert('Erro ao solicitar redefinição de senha.')
    }
  }

  return (
    <div className="w-full max-w-md text-center">
      <h1 className="text-3xl font-bold mb-4">Recuperar Senha</h1>
      {enviado ? (
        <p className="text-green-500">Link de redefinição enviado! Verifique seu e-mail.</p>
      ) : (
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm text-neutral-300">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Enviar link de redefinição
          </button>
        </form>
      )}
    </div>
  )
}