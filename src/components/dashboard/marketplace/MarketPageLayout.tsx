'use client'

import { ReactNode } from 'react'
import { LayoutDashboard, Bell, Store, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MarketPageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isActive = (route: string) => pathname === route

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-28 px-4">
      {/* Conteúdo principal */}
      <div className="space-y-6">{children}</div>

      {/* Menu inferior fixo */}
      <nav
        role="navigation"
        aria-label="Menu inferior"
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-t border-neutral-800 text-white h-16 flex justify-around items-center"
      >
        <Link
          href="/dashboard"
          aria-label="Dashboard"
          className={`flex flex-col items-center text-xs ${isActive('/dashboard') ? 'text-green-400' : ''} active:scale-95 transition-transform`}
        >
          <LayoutDashboard className="h-5 w-5" /> Dashboard
        </Link>
        <Link
          href="/dashboard/marketplace"
          aria-label="Marketplace"
          className={`flex flex-col items-center text-xs ${isActive('/dashboard/marketplace') ? 'text-green-400' : ''} active:scale-95 transition-transform`}
        >
          <Store className="h-5 w-5" /> Marketplace
        </Link>
        <Link
          href="/dashboard/notificacoes"
          aria-label="Alertas"
          className={`flex flex-col items-center text-xs ${isActive('/dashboard/notificacoes') ? 'text-green-400' : ''} active:scale-95 transition-transform`}
        >
          <Bell className="h-5 w-5" /> Alertas
        </Link>
        <Link
          href="/dashboard/perfil"
          aria-label="Perfil"
          className={`flex flex-col items-center text-xs ${isActive('/dashboard/perfil') ? 'text-green-400' : ''} active:scale-95 transition-transform`}
        >
          <User className="h-5 w-5" /> Perfil
        </Link>
      </nav>
    </div>
  )
}
