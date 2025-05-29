'use client'

import { useState } from 'react'

export default function RecuperarSenhaPage() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('https://api.neutralinkeco.com/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setEnviado(true)
    } else {
      alert('Erro ao solicitar redefinição. Verifique o e-mail.')
    }
  }

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Recuperar senha</h1>
        <p className="text-neutral-400 mb-6">
          Informe seu e-mail para receber o link de redefinição.
        </p>

        {enviado ? (
          <p className="text-green-500">Um link foi enviado para seu e-mail.</p>
        ) : (
          <form className="space-y-6 text-left" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm text-neutral-300">E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
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
              Enviar link
            </button>
          </form>
        )}
      </div>
    </section>
  )
}