import { useRouter } from 'next/router';

export function useLogout() {
  const router = useRouter();

  async function logout() {
    await fetch('/api/logout', {
      method: 'POST',
    });

    router.push('/login'); // Redireciona para tela de login
  }

  return { logout };
}