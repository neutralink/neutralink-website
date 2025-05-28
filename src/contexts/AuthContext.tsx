// src/contexts/AuthContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// 1. Tipo de dado do usuário (ajuste conforme necessário)
type User = {
  id: string
  name: string
  email: string
  role: 'GENERATOR' | 'BUYER' | 'ADMIN'
}

// 2. Tipo do contexto
type AuthContextType = {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

// 3. Criação do contexto com valor inicial
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 4. Provider do contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Aqui você pode buscar o usuário salvo no localStorage, cookies, etc.
    const storedUser = localStorage.getItem('user')
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  useEffect(() => {
    // Salva usuário no localStorage ao atualizar
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 5. Hook customizado para acessar o contexto
export const useUser = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useUser must be used within an AuthProvider')
  }
  return context
}
