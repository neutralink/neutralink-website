'use client'
import Cookies from 'js-cookie';

import { useState } from 'react'
import { useRouter } from 'next/navigation' // App Router: useRouter from 'next/navigation' is correct for Client Components
import { useLogin } from '../../hooks/useLogin'
import OAuthButtons from '../../components/auth/OAuthButtons'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const router = useRouter()
  console.log('✅ GOOGLE CLIENT ID:', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { login, loading, error } = useLogin()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = await login(formData.email, formData.password)

    if (typeof token === 'string' && token.trim() !== '') {
      Cookies.set('token', token, { expires: 7 });
      router.push('/dashboard')
    }
  }

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Acesse sua conta</h1>
        <p className="text-neutral-400 mb-10">
          Entre com seu e-mail e senha ou com sua conta Google, se já estiver cadastrado.
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
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
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
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>

        <div className="my-6 text-center text-neutral-400">ou continue com</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => signIn('google')}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
              <path d="M533.5 278.4c0-17.4-1.6-34-4.7-50.2H272v95h146.9c-6.3 34-25.2 62.7-53.6 81.9v68h86.7c50.6-46.6 81.5-115.4 81.5-194.7z" fill="#4285f4"/>
              <path d="M272 544.3c72.6 0 133.5-24 178-65.3l-86.7-68c-23.9 16-54.6 25.4-91.3 25.4-70 0-129.4-47.2-150.7-110.4H32.2v69.3C76.8 483.7 167.3 544.3 272 544.3z" fill="#34a853"/>
              <path d="M121.3 325.9c-10.6-31.8-10.6-66.4 0-98.2v-69.3H32.2c-35.4 69.8-35.4 151.9 0 221.7l89.1-69.2z" fill="#fbbc04"/>
              <path d="M272 107.7c39.5-.6 77.5 13.8 106.6 39.5l79.6-77.4C402.4 24.8 338.8 0 272 0 167.3 0 76.8 60.6 32.2 157.5l89.1 69.2c21.3-63.2 80.7-110.4 150.7-110.4z" fill="#ea4335"/>
            </svg>
            Entrar com Google
          </button>
        </div>

        <div className="mt-6 text-sm text-neutral-400">
          Ainda não tem conta?{' '}
          <button onClick={() => router.push('/login/select-role')} className="text-primary underline">
            Criar agora
          </button>
        </div>
      </div>
    </section>
  )
}

// Certifique-se de que todos os hooks utilizados em useLogin também estejam em arquivos marcados com 'use client'