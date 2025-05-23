import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function login(email: string, password: string): Promise<string | null> {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro ao fazer login');

      // ✅ Salvar o token JWT
      localStorage.setItem('token', data.token);

      switch (data.user.role) {
        case 'ADMIN':
          router.push('/admin/dashboard');
          break;
        case 'GENERATOR':
          router.push('/generator/dashboard');
          break;
        case 'BUYER':
        case 'COMPANY':
          router.push('/marketplace');
          break;
        case 'CERTIFIER':
          router.push('/certifier/pool');
          break;
        case 'INTEGRATOR':
          router.push('/integrator/devices');
          break;
        default:
          router.push('/');
      }

      return data.token;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}