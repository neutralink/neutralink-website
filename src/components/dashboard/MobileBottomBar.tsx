'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Leaf,
  HardDrive,
  Settings,
  PlugZap,
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function MobileBottomBar() {
  const pathname = usePathname()
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) {
      const user = JSON.parse(stored)
      setRole(user?.role || null)
    }
  }, [])

  if (!role) return null

  const navItems = getNavItemsByRole(role)

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center backdrop-blur-md bg-black/30 text-white border-t border-neutral-800 px-4 py-2 h-20">
      {navItems.map(({ href, label, icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center w-16 ${
              isActive ? 'text-green-400' : 'text-white'
            }`}
          >
            <div className="mb-1">{icon()}</div>
            <span className="text-[11px] leading-none">{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

function getNavItemsByRole(role: string) {
  if (role === 'GENERATOR') {
    return [
      
      {
        href: '/dashboard/gerador',
        label: 'Home',
        icon: () => <LayoutDashboard className="w-5 h-5" />,
      },
      
      {
        href: '/dashboard/gerador/usina',
        label: 'Usina',
        icon: () => <PlugZap className="w-5 h-5" />,
      },
      {
        href: '/dashboard/gerador/dispositivo',
        label: 'Dispositivo',
        icon: () => <HardDrive className="w-5 h-5" />,
      },
      {
        href: '/dashboard/gerador/creditos',
        label: 'Créditos',
        icon: () => <Leaf className="w-5 h-5" />,
      },
      {
        href: '/dashboard/gerador/configuracoes',
        label: 'Configurações',
        icon: () => <Settings className="w-5 h-5" />,
      },
    ]
  }

  return []
}
