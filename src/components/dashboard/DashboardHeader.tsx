// src/components/dashboard/DashboardHeader.tsx
'use client'

import Image from 'next/image'
import { Bell, Settings, UserCircle } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black text-white flex items-center justify-between px-4 md:px-6 h-14 border-b border-neutral-800 shadow">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo-footer.svg"
          alt="NeutraLink Logo"
          width={120}
          height={30}
          className="object-contain"
        />
      </div>

      {/* Ícones de ação */}
      <div className="flex items-center space-x-4">
        <button className="hover:text-green-400 transition" aria-label="Notificações">
          <Bell size={22} />
        </button>
        <button className="hover:text-green-400 transition" aria-label="Configurações">
          <Settings size={22} />
        </button>
        <button className="hover:text-green-400 transition" aria-label="Perfil">
          <UserCircle size={28} />
        </button>
      </div>
    </header>
  )
}
