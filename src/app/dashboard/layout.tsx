'use client'

import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AuthProvider } from '@/contexts/AuthContext'

const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const verifyAuth = (token: string): boolean => {
    return typeof token === 'string' && token.trim().length > 10
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!verifyAuth(token || '')) {
      router.push('/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated)
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw'
      }}>
        <p>Carregando...</p>
      </div>
    )

  return (
    <AuthProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthProvider>
  )
}
