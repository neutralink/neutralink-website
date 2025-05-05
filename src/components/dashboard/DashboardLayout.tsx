// src/components/dashboard/DashboardLayout.tsx
'use client'

import { ReactNode } from 'react'
import DashboardHeader from './DashboardHeader'
import MobileBottomBar from './MobileBottomBar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header fixo */}
      <DashboardHeader />

      {/* Conteúdo principal */}
      <main className="flex-1 pt-16 pb-20 px-4 overflow-y-auto">
        {children}
      </main>

      {/* Menu inferior (mobile) */}
      <MobileBottomBar />
    </div>
  )
}
