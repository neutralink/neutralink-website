// src/components/dashboard/DashboardLayout.tsx
'use client'

import { ReactNode } from 'react'
import DashboardHeader from './DashboardHeader'
import MobileBottomBar from './MobileBottomBar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header só aparece em telas md para cima */}
      <div className="hidden md:block">
        <DashboardHeader />
      </div>

      {/* Conteúdo principal com padding condicional */}
      <main className="flex-1 pt-0 md:pt-16 pb-20 px-4 overflow-y-auto">
        {children}
      </main>

      {/* Menu inferior fixo apenas em telas pequenas */}
      <MobileBottomBar />
    </div>
  )
}
