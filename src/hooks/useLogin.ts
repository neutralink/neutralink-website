'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

interface LoginResponse {
  token?: string;
  user?: {
    role: 'ADMIN' | 'GENERATOR' | 'BUYER' | 'COMPANY' | 'CERTIFIER' | 'INTEGRATOR';
  };
  message?: string;
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function login(email: string, password: string, recaptchaToken?: string): Promise<string | null> {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('https://api.neutralinkeco.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, recaptchaToken }),
      });

      const data: LoginResponse = await res.json();
      if (!res.ok || !data.token || !data.user?.role) {
        throw new Error(data?.message || 'Erro ao fazer login');
      }
      localStorage.setItem('token', data.token);
      Cookies.set('token', data.token, { expires: 7 });

      // Centralizando redirecionamento para /dashboard
      router.push('/dashboard');

      return data.token;
    } catch (err: any) {
      setError(err.message || 'Erro inesperado');
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}