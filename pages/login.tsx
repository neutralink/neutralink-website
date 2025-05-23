import { useLogin } from '@/hooks/useLogin';
import { useState } from 'react';

export default function LoginPage() {
  const { login, loading, error } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      login(email, password);
    }}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Senha" />
      <button type="submit" disabled={loading}>Entrar</button>
      {error && <p>{error}</p>}
    </form>
  );
}