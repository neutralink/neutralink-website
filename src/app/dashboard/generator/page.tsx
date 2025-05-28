'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { AuthProvider } from '@/contexts/AuthContext'

const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })

export default function Page() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token || token.trim().length < 10) {
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
      <DashboardLayout>
        <div className="p-6">
          <h1 className="text-xl font-bold">Área do Gerador</h1>
          <p>Conteúdo exclusivo para geradores de crédito de carbono.</p>
        </div>
      </DashboardLayout>
    </AuthProvider>
  )
}