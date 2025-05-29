'use client'

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'

export default function CadastroPage() {
  const router = useRouter()
  const [role, setRole] = useState<string | null>(null)
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const [cpfValid, setCpfValid] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState<'fraca' | 'media' | 'forte' | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const getRoleLabel = (role: string | null) => {
    switch (role) {
      case 'GENERATOR':
        return 'Quero vender créditos com minha energia solar';
      case 'BUYER':
        return 'Sou uma pessoa e quero comprar créditos de carbono';
      case 'COMPANY':
        return 'Sou uma empresa e quero compensar emissões';
      case 'INTEGRATOR':
        return 'Quero conectar equipamentos e ganhar comissão';
      default:
        return '';
    }
  };

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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-2">Criar Conta</h1>
          <p className="text-gray-400">Use e-mail e senha ou entre com sua conta Google para criar sua conta.</p>
          {role && (
            <p className="text-green-400 text-sm font-medium mt-2">
              Tipo de conta: {getRoleLabel(role)}
            </p>
          )}
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!cpfValid) {
              alert('CPF inválido');
              return;
            }
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
              if (!res.ok) {
                alert(data.error || 'Erro ao criar conta');
                return;
              }
              Cookies.set('token', data.token, { expires: 7 });
              router.push('/dashboard');
            } catch (err) {
              console.error(err);
              alert('Erro ao criar conta');
            }
          }}
          className="space-y-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Nome completo"
            required
            className="w-full px-5 py-3 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            name="email"
            type="email"
            placeholder="Seu e-mail"
            required
            className="w-full px-5 py-3 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              required
              onChange={(e) => {
                const value = e.target.value;
                if (value.length < 6) setPasswordStrength('fraca');
                else if (/[A-Z]/.test(value) && /[0-9]/.test(value)) setPasswordStrength('forte');
                else setPasswordStrength('media');
              }}
              className="w-full px-5 py-3 pr-12 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.961 9.961 0 013.12-7.136m3.23-.256A9.962 9.962 0 0112 3c5.523 0 10 4.477 10 10 0 2.002-.586 3.866-1.585 5.448M9.88 9.879a3 3 0 104.242 4.242" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 00-3-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-.657 2.104-2.008 3.972-3.958 5.267M15 12a3 3 0 01-3 3m0 0a3 3 0 01-3-3" />
                </svg>
              )}
            </button>
          </div>
          {passwordStrength && (
            <p className={`text-sm ${
              passwordStrength === 'fraca' ? 'text-red-400' :
              passwordStrength === 'media' ? 'text-yellow-400' : 'text-green-400'
            }`}>
              Segurança da senha: {passwordStrength}
            </p>
          )}
          <input
            name="cpf"
            type="text"
            placeholder="CPF"
            required
            onChange={(e) => {
              const value = e.target.value;
              setCpfValid(/^\d{11}$/.test(value));
            }}
            className="w-full px-5 py-3 rounded-md bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          {!cpfValid && (
            <p className="text-red-400 text-sm">CPF inválido. Deve conter exatamente 11 números.</p>
          )}
          <label className="flex items-start space-x-2 text-sm text-gray-400">
            <input
              type="checkbox"
              required
              className="mt-1 accent-green-600"
            />
            <span>
              Li e concordo com os
              <button type="button" onClick={() => setShowTerms(true)} className="underline text-white mx-1">Termos de Uso</button>
              e a
              <button type="button" onClick={() => setShowPrivacy(true)} className="underline text-white mx-1">Política de Privacidade</button>.
            </span>
          </label>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition font-semibold py-3 rounded-md"
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

      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button onClick={() => setShowTerms(false)} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
            <h2 className="text-xl font-bold mb-4">Termos de Uso</h2>
            <div className="overflow-y-auto h-80 text-sm space-y-2">
              <p>Ao utilizar a plataforma NeutraLink, você concorda com todos os termos e condições aqui descritos. A utilização indevida poderá resultar em suspensão da conta.</p>
              <p>É responsabilidade do usuário manter suas informações atualizadas e utilizar os recursos da plataforma de forma ética e legal.</p>
              <p>Para mais informações ou dúvidas, entre em contato com nosso suporte.</p>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button onClick={() => setShowPrivacy(false)} className="absolute top-2 right-2 text-xl font-bold">&times;</button>
            <h2 className="text-xl font-bold mb-4">Política de Privacidade</h2>
            <div className="overflow-y-auto h-80 text-sm space-y-2">
              <p>Coletamos e armazenamos informações apenas para melhorar sua experiência e garantir segurança nas transações da plataforma.</p>
              <p>Seus dados não serão compartilhados com terceiros sem seu consentimento, exceto quando exigido por lei.</p>
              <p>Você pode solicitar a exclusão ou alteração dos seus dados a qualquer momento em nosso painel de configurações.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}