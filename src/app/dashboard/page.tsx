'use client'

import { useAuthGuard } from '../../hooks/useAuthGuard'
import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Bell, Leaf, Factory, Flame, DollarSign, Store, Settings } from 'lucide-react'
import { Button } from '../../components/ui/button'
import Image from 'next/image'
import MobileBottomBar from '@/components/dashboard/MobileBottomBar';
import DashboardChart from '@/components/dashboard/DashboardChart'
import { useUser } from '@/hooks/useUser'
import GenerationChart from '@/components/dashboard/GenerationChart'
import DeviceDistributionChart from '@/components/dashboard/DeviceDistributionChart'
import SalesBarChart from '@/components/dashboard/SalesBarChart'
import CombinedPerformanceChart from '@/components/dashboard/CombinedPerformanceChart'

export default function DashboardPage() {
  const router = useRouter()
  useAuthGuard()
  const { user } = useUser();
  const role = user?.role;
  console.log('user:', user);
  console.log('role:', role);

  const [totalHoje, setTotalHoje] = useState(28.5)
  const [totalMes, setTotalMes] = useState(620.8)
  const [creditosGerados, setCreditosGerados] = useState(84.3)
  const [co2Total, setCo2Total] = useState(125)

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalHoje((v) => parseFloat((v + 0.01).toFixed(2)))
      setTotalMes((v) => parseFloat((v + 0.05).toFixed(2)))
      setCreditosGerados((v) => parseFloat((v + 0.02).toFixed(2)))
      setCo2Total((v) => parseFloat((v + 0.03).toFixed(2)))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex">
      <div className="hidden md:flex flex-col w-64 bg-gray-950 text-white border-r border-gray-800 h-screen fixed top-20 left-0 z-40 px-6 py-6 space-y-4">
        <h2 className="text-lg font-bold text-gray-300 mb-4">Menu</h2>

        <button
          onClick={() => router.push('/dashboard')}
          className="flex items-center gap-3 text-left text-sm font-medium text-white hover:text-green-400 hover:bg-gray-900/60 rounded-lg px-2 py-2 transition"
        >
          <Image src="/icons/resum-list.svg" alt="Início" width={20} height={20} />
          <span>Início</span>
        </button>
        <button
          onClick={() => router.push('/dashboard/pool')}
          className="flex items-center gap-3 text-left text-sm font-medium text-white hover:text-green-400 hover:bg-gray-900/60 rounded-lg px-2 py-2 transition"
        >
          <Leaf size={20} />
          <span>Pool</span>
        </button>
        <button
          onClick={() => router.push('/dashboard/dispositivos')}
          className="flex items-center gap-3 text-left text-sm font-medium text-white hover:text-green-400 hover:bg-gray-900/60 rounded-lg px-2 py-2 transition"
        >
          <Factory size={20} />
          <span>Dispositivos</span>
        </button>
        <button
          onClick={() => router.push('/dashboard/carteira')}
          className="flex items-center gap-3 text-left text-sm font-medium text-white hover:text-green-400 hover:bg-gray-900/60 rounded-lg px-2 py-2 transition"
        >
          <DollarSign size={20} />
          <span>Carteira</span>
        </button>
        <button
          onClick={() => router.push('/dashboard/marketplace')}
          className="flex items-center gap-3 text-left text-sm font-medium text-white hover:text-green-400 hover:bg-gray-900/60 rounded-lg px-2 py-2 transition"
        >
          <Store size={20} />
          <span>Marketplace</span>
        </button>
        <button
          onClick={() => router.push('/dashboard/configuracoes')}
          className="flex items-center gap-3 text-left text-sm font-medium text-white hover:text-green-400 hover:bg-gray-900/60 rounded-lg px-2 py-2 transition"
        >
          <Settings size={20} />
          <span>Configurações</span>
        </button>
      </div>
      <div className="flex-1 md:ml-60 min-h-screen">
        <div className="text-white pt-[140px] pb-10 px-4 space-y-6 max-w-7xl mx-auto">
          <div className="bg-gray-950 px-6 py-2 border-b border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4 fixed top-16 md:top-0 left-0 right-0 z-50">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/resum-list.svg"
                alt="Ícone"
                width={40}
                height={40}
              />
              <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-sm text-gray-400">Visão geral dos seus créditos e dispositivos conectados.</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button
                className="relative text-white hover:text-green-400 transition"
                aria-label="Notificações"
              >
                <Bell size={32} />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <button className="hover:text-green-400 transition" aria-label="Ajustes">
                <Store size={32} />
              </button>
              <Image
                src="/icons/user-photo.jpg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Métricas principais */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card title="Dispositivos ativos" value="🟢 2 online. 🔴 1 offline." onClick={() => router.push('/dashboard/dispositivos')} />
            <Card title="Total Créditos NTL Gerados" value={`${creditosGerados} NTL`} highlight onClick={() => router.push('/dashboard/carteira')} />
            <Card title="Hoje" value={`${totalHoje} NTL`} />
            <Card title="Este mês" value={`${totalMes} NTL`} />
          </div>



          {/* Cards por tipo de dispositivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card
              title="NeutraConect"
              value="142 kWh"
              subtitle="CO₂ evitado: 108 kg"
              icon={<Factory size={45} />}
            />
            <Card
              title="NeutraMethane"
              value="384 m³"
              subtitle="CO₂ equivalente: 1.920 kg"
              icon={<Flame size={45} />}
              highlight
            />
            <Card
              title="Valor Total Gerado"
              value={`R$ ${(creditosGerados * 60).toFixed(2)}`}
              subtitle="Base: R$60,00/NTL (Mercado voluntário)"
              className="col-span-2"
              icon={<DollarSign size={45} />}
              highlight
              onClick={() => router.push('/dashboard/carteira')}
            />
          </div>

          {/* Gráficos combinados (apenas desktop) */}
          <div className="hidden md:grid grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-900 p-4 rounded-xl space-y-4 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-white">Geração de Créditos (últimos 7 dias)</h2>
              <DashboardChart />
            </div>
            <div className="bg-gray-900 p-4 rounded-xl flex flex-col h-full">
              <h2 className="text-xl font-semibold text-white mb-4">Resumo de Geração e Certificação</h2>
              <div className="flex-1 flex items-center justify-center">
                <CombinedPerformanceChart />
              </div>
            </div>
          </div>


          {/* Ações principais */}
        </div>
      </div>
    </div>
  )
}

function Card({
  title,
  value,
  subtitle,
  icon,
  highlight = false,
  className = '',
  onClick,
}: {
  title: string
  value: string
  subtitle?: string
  icon?: ReactNode
  highlight?: boolean
  className?: string
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-900 p-4 rounded-xl flex items-center justify-between ${className} ${onClick ? 'cursor-pointer hover:bg-gray-800 transition' : ''}`}
    >
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h2 className={`mt-1 text-2xl font-bold ${highlight ? 'text-green-400' : 'text-white'}`}>{value}</h2>
        {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
      </div>
      {icon && <div className="ml-2 text-green-400">{icon}</div>}
    </div>
  )
}