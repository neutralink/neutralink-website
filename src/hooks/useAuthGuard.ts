// src/hooks/useAuthGuard.ts
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useAuthGuard() {
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        router.push('/login')
      }
    } catch (error) {
      console.error('Error checking auth token:', error)
      router.push('/login')
    }
  }, [router])
}