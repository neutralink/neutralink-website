

'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { GoogleLogin } from '@react-oauth/google'

export default function GoogleLoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = searchParams.get('role')

  const handleGoogleLogin = async (credentialResponse: any) => {
    const idToken = credentialResponse.credential

    try {
      const res = await fetch('http://localhost:3333/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: idToken, role }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao entrar com Google')
      }

      localStorage.setItem('token', data.token)

      const user = data.user
      const isProfileIncomplete = !user.cpf || !user.birthDate || !user.address

      if (isProfileIncomplete) {
        router.push('/complete-profile')
      } else {
        router.push('/dashboard')
      }
    } catch (err) {
      console.error(err)
      alert('Falha no login com Google')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Finalizar login com Google</h1>
        <p className="text-neutral-400 mb-6">
          Clique abaixo para entrar com sua conta Google e finalizar seu cadastro como <strong>{role}</strong>.
        </p>
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => alert('Erro ao autenticar com Google')}
        />
      </div>
    </div>
  )
}