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
import { useEffect, useState } from 'react'

export default function MobileBottomBar() {
  const pathname = usePathname()
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      const user = JSON.parse(stored)
      console.log('USER ROLE:', user?.role)
      setRole(user?.role || null)
    }
  }, [])

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
  switch (role) {
    case 'GENERATOR':
      return [
        {
          href: '/dashboard',
          label: 'Home',
          icon: () => <LayoutDashboard className="w-5 h-5" />,
        },
        {
          href: '/dashboard/pool',
          label: 'Pool',
          icon: () => <Leaf className="w-5 h-5" />,
        },
        {
          href: '/dashboard/dispositivos',
          label: 'Dispositivos',
          icon: () => <HardDrive className="w-5 h-5" />,
        },
        {
          href: '/dashboard/carteira',
          label: 'Carteira',
          icon: () => <Wallet className="w-5 h-5" />,
        },
        {
          href: '/dashboard/configuracoes',
          label: 'Configurações',
          icon: () => <Settings className="w-5 h-5" />,
        },
      ]
    case 'ADMIN':
      return [
        {
          href: '/dashboard',
          label: 'Admin',
          icon: () => <LayoutDashboard className="w-5 h-5" />,
        },
        {
          href: '/dashboard/configuracoes',
          label: 'Config',
          icon: () => <Settings className="w-5 h-5" />,
        },
      ]
    case 'BUYER':
      return [
        {
          href: '/dashboard',
          label: 'Home',
          icon: () => <LayoutDashboard className="w-5 h-5" />,
        },
        {
          href: '/dashboard/marketplace',
          label: 'Marketplace',
          icon: () => <PlugZap className="w-5 h-5" />,
        },
        {
          href: '/dashboard/carteira',
          label: 'Carteira',
          icon: () => <Wallet className="w-5 h-5" />,
        },
        {
          href: '/dashboard/configuracoes',
          label: 'Configurações',
          icon: () => <Settings className="w-5 h-5" />,
        },
      ]
    case 'INTEGRATOR':
      return [
        {
          href: '/dashboard',
          label: 'Home',
          icon: () => <LayoutDashboard className="w-5 h-5" />,
        },
        {
          href: '/dashboard/dispositivos',
          label: 'Dispositivos',
          icon: () => <HardDrive className="w-5 h-5" />,
        },
        {
          href: '/dashboard/configuracoes',
          label: 'Configurações',
          icon: () => <Settings className="w-5 h-5" />,
        },
      ]
    default:
      return []
  }
}
