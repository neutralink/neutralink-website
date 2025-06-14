'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ResetarSenhaForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  // Estado para controlar visibilidade da senha
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    const t = searchParams.get('token');
    setToken(t);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    if (newPassword !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }

    if (!token) {
      setMessage('Token inválido ou expirado.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://api.neutralinkeco.com/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Erro ao redefinir senha');
      }

      setMessage('Senha redefinida com sucesso! Redirecionando...');
      setTimeout(() => {
        router.push('/login');
      }, 2500);
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold">Redefinir Senha</h1>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 bg-neutral-800 rounded pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-gray-400"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirmar nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 bg-neutral-800 rounded pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-gray-400"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold"
        >
          {loading ? 'Enviando...' : 'Redefinir Senha'}
        </button>

        {message && <p className="mt-2 text-sm">{message}</p>}
      </form>
    </div>
  );
}

export default function ResetarSenhaPage() {
  return (
    <Suspense fallback={<div className="text-white">Carregando...</div>}>
      <ResetarSenhaForm />
    </Suspense>
  );
}