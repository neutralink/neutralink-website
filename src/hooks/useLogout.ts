import { useRouter } from 'next/navigation';

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