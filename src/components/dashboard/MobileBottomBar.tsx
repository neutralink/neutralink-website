'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Leaf,
  HardDrive,
  Settings,
  PlugZap,
  Wallet,
} from 'lucide-react'
import { useUser } from '@/contexts/AuthContext'

export default function MobileBottomBar() {
  const pathname = usePathname()
  const { user } = useUser()
  const role = user?.role

  if (!role) return <div className="h-20" />

  const navItems = getNavItemsByRole(role)

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center backdrop-blur-md bg-black/30 text-white border-0 border-neutral-100 px-4 py-2 h-20">
      {navItems.map(({ href, label, icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center w-2 ${
              isActive ? 'text-green-400' : 'text-white'
            }`}
          >
            <div className="mb-2">{icon()}</div>
            <span className="text-[11px] leading-none">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

function getNavItemsByRole(role: string) {
  const baseIcons = {
    dashboard: () => <LayoutDashboard className="w-5 h-5" />,
    pool: () => <Leaf className="w-5 h-5" />,
    dispositivos: () => <HardDrive className="w-5 h-5" />,
    carteira: () => <Wallet className="w-5 h-5" />,
    marketplace: () => <PlugZap className="w-5 h-5" />,
    configuracoes: () => <Settings className="w-5 h-5" />,
  }

  const navConfig: Record<string, { href: string; label: string; icon: () => JSX.Element }[]> = {
    GENERATOR: [
      { href: '/dashboard', label: 'Home', icon: baseIcons.dashboard },
      { href: '/dashboard/pool', label: 'Pool', icon: baseIcons.pool },
      { href: '/dashboard/dispositivos', label: 'Dispositivos', icon: baseIcons.dispositivos },
      { href: '/dashboard/carteira', label: 'Carteira', icon: baseIcons.carteira },
      { href: '/dashboard/marketplace', label: 'Marketplace', icon: baseIcons.marketplace },
      { href: '/dashboard/configuracoes', label: 'Configurações', icon: baseIcons.configuracoes },
    ],
    ADMIN: [
      { href: '/dashboard', label: 'Admin', icon: baseIcons.dashboard },
      { href: '/dashboard/configuracoes', label: 'Config', icon: baseIcons.configuracoes },
    ],
    BUYER: [
      { href: '/dashboard', label: 'Home', icon: baseIcons.dashboard },
      { href: '/dashboard/marketplace', label: 'Marketplace', icon: baseIcons.marketplace },
      { href: '/dashboard/carteira', label: 'Carteira', icon: baseIcons.carteira },
      { href: '/dashboard/configuracoes', label: 'Configurações', icon: baseIcons.configuracoes },
    ],
    INTEGRATOR: [
      { href: '/dashboard', label: 'Home', icon: baseIcons.dashboard },
      { href: '/dashboard/dispositivos', label: 'Dispositivos', icon: baseIcons.dispositivos },
      { href: '/dashboard/configuracoes', label: 'Configurações', icon: baseIcons.configuracoes },
    ],
  }

  return navConfig[role] || []
}
