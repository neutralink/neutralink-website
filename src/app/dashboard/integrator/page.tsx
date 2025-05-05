'use client'

import { HardDrive, Leaf, PlugZap } from 'lucide-react'

export default function IntegradorDashboard() {
  return (
    <div className="p-6 space-y-6 transition-all duration-300">
      {/* Título da Página */}
      <h1 className="text-2xl font-bold text-gray-800">Painel do Integrador</h1>
      <p className="text-sm text-gray-500">
        Acompanhe seus dispositivos, créditos gerados e usinas ativas.
      </p>

      {/* Cartões de Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <StatCard
          title="Dispositivos Instalados"
          value="12"
          icon={<HardDrive size={28} />}
        />
        <StatCard
          title="Créditos Gerados"
          value="89,2 NTL"
          icon={<Leaf size={28} />}
        />
        <StatCard
          title="Usinas Ativas"
          value="4"
          icon={<PlugZap size={28} />}
        />
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
    <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center space-x-4 hover:shadow-md transition">
      <div className="p-3 rounded-full bg-green-100 text-green-600">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-lg font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  )
}
