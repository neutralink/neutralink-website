'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation' // App Router: useRouter from 'next/navigation' is correct for Client Components
import { useLogin } from '@/hooks/useLogin'

export default function LoginPage() {
  const router = useRouter()

  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const toggleMode = () => {
    setIsLogin(!isLogin)
    setFormData({ email: '', password: '' })
  }

  const { login, loading, error } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    login(formData.email, formData.password)
  }

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {isLogin ? 'Acesse sua conta' : 'Crie sua conta'}
        </h1>
        <p className="text-neutral-400 mb-10">
          {isLogin
            ? 'Entre com seu e-mail e senha para acessar a plataforma.'
            : 'Preencha os dados para criar sua conta gratuita.'}
        </p>

        <form
          className="space-y-6 text-left max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block mb-1 text-sm text-neutral-300">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-neutral-300">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            disabled={loading}
          >
            {loading ? 'Entrando...' : isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>

        <div className="mt-6 text-sm text-neutral-400">
          {isLogin ? (
            <>
              Ainda não tem conta?{' '}
              <button onClick={toggleMode} className="text-primary underline">
                Criar agora
              </button>
            </>
          ) : (
            <>
              Já tem conta?{' '}
              <button onClick={toggleMode} className="text-primary underline">
                Entrar
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

// Certifique-se de que todos os hooks utilizados em useLogin também estejam em arquivos marcados com 'use client'