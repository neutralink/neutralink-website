'use client'

import './globals.css'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')

  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-foreground">
        <AuthProvider>
          {!isDashboard && <Header />}
          <main className={`flex-1 ${!isDashboard ? 'bg-white pt-16' : ''}`}>
            {children}
            {!isDashboard && <WhatsAppButton />}
          </main>
          {!isDashboard && <Footer />}
        </AuthProvider>
      </body>
    </html>
  )
}
