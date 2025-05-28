'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

type Role = 'ADMIN' | 'GENERATOR' | 'BUYER' | 'COMPANY' | 'CERTIFIER' | 'INTEGRATOR';

interface DecodedToken {
  sub: string;
  role: Role;
  exp: number;
}

interface AuthContextType {
  user: {
    userId: string | null;
    role: Role | null;
  };
  isAuthenticated: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserId(decoded.sub);
        setRole(decoded.role);
      } catch {
        setUserId(null);
        setRole(null);
      }
    }
  }, []);

  function logout() {
    fetch('/api/logout', { method: 'POST' }).then(() => {
      Cookies.remove('token');
      setUserId(null);
      setRole(null);
      router.push('/login');
    });
  }

  return (
    <AuthContext.Provider value={{ user: { userId, role }, isAuthenticated: !!userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context.user;
}