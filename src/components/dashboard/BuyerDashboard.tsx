'use client'

import { useEffect, useState } from 'react'
import { Leaf, ShoppingBag, Wallet } from 'lucide-react'

export default function BuyerDashboard() {
  const [user, setUser] = useState<{ name: string } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (stored) setUser(JSON.parse(stored))
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-green-400">
        Olá, {user?.name || 'Comprador'} 👋
      </h1>

      <p className="text-sm text-neutral-300">
        Bem-vindo ao seu painel. Aqui você pode acompanhar seus créditos, compras e saldo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <StatCard title="Créditos Ativos" value="120 NTL" icon={<Leaf size={28} />} />
        <StatCard title="Compras Realizadas" value="8 transações" icon={<ShoppingBag size={28} />} />
        <StatCard title="Saldo em Carteira" value="R$ 1.250,00" icon={<Wallet size={28} />} />
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string
  value: string
  icon: React.ReactNode
}) {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 flex items-center space-x-4 border border-zinc-700 hover:border-green-500 transition">
      <div className="p-3 rounded-full bg-green-100 text-green-600">
        {icon}
      </div>
      <div>
        <p className="text-sm text-neutral-400">{title}</p>
        <p className="text-xl font-semibold text-white">{value}</p>
      </div>
    </div>
  )
}
