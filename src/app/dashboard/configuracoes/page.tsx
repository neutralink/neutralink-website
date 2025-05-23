'use client'
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token')
    return !!token
  }
  return false
}

import ProfilePage from '@/components/dashboard/ProfilePage'

export default function ConfiguracoesPage() {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login')
    }
  }, [router])

  return <ProfilePage />
}
