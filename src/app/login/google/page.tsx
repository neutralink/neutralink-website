'use client'

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

export default function CreateAccountPage() {
  const router = useRouter()
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setRole(params.get('role'))
  }, [])

  const handleGoogleLogin = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential

    try {
      const res = await fetch('https://api.neutralinkeco.com/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: idToken, role }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao entrar com Google')
      }

      Cookies.set('token', data.token, { expires: 7 });

      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      alert('Falha no login com Google')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Criar Conta</h1>
          <p className="text-sm text-gray-400 mt-2">
            Use e-mail e senha ou entre com sua conta Google para criar sua conta.
          </p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const password = formData.get('password');
            const cpf = formData.get('cpf');
            try {
              const res = await fetch('https://api.neutralinkeco.com/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, cpf, role }),
              });
              const data = await res.json();
              if (!res.ok) throw new Error(data.error || 'Erro ao criar conta');
              Cookies.set('token', data.token, { expires: 7 });
              router.push('/dashboard');
            } catch (err) {
              console.error(err);
              alert('Erro ao criar conta');
            }
          }}
          className="space-y-4"
        >
          <input
            name="name"
            type="text"
            placeholder="Nome completo"
            required
            className="w-full px-4 py-3 rounded bg-neutral-800 text-white placeholder-gray-400"
          />
          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            required
            className="w-full px-4 py-3 rounded bg-neutral-800 text-white placeholder-gray-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            required
            className="w-full px-4 py-3 rounded bg-neutral-800 text-white placeholder-gray-400"
          />
          <input
            name="cpf"
            type="text"
            placeholder="CPF"
            required
            className="w-full px-4 py-3 rounded bg-neutral-800 text-white placeholder-gray-400"
          />
          <label className="flex items-start space-x-2 text-sm text-gray-400">
            <input
              type="checkbox"
              required
              className="mt-1 accent-green-600"
            />
            <span>
              Li e concordo com os
              <a href="/termos" className="underline text-white mx-1" target="_blank">Termos de Uso</a>
              e a
              <a href="/cookies" className="underline text-white mx-1" target="_blank">Política de Cookies</a>.
            </span>
          </label>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition font-semibold py-3 rounded"
          >
            Criar conta
          </button>
        </form>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="h-px w-1/4 bg-gray-600" />
          ou entre com Google
          <span className="h-px w-1/4 bg-gray-600" />
        </div>

        <div className="flex justify-center">
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => alert('Erro ao autenticar com Google')}
              locale="pt-BR"
              text="signup_with"
              width="100%"
              shape="rectangular"
              size="large"
              theme="filled_black"
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
}