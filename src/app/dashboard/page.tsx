'use client'

import { useAuthGuard } from '../../hooks/useAuthGuard'
import { useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Bell, Leaf, Factory, Flame, DollarSign, Store } from 'lucide-react'
import { Button } from '../../components/ui/button'
import Image from 'next/image'
import MobileBottomBar from '@/components/dashboard/MobileBottomBar';
import { useUser } from '@/hooks/useUser'

export default function DashboardPage() {
  const router = useRouter()
  useAuthGuard()
  const { user } = useUser();
  const role = user?.role;

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
    <div className="text-white pt-20 pb-28 px-4 space-y-6">
      {/* Topo com logo e título */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
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

        {/* Ícones no topo para desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="relative text-white hover:text-green-400 transition"
            aria-label="Notificações"
          >
            <Bell size={24} />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <button className="hover:text-green-400 transition">
            <Store size={24} />
          </button>
          <Image
            src="/icons/user-photo.jpg"
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-2 gap-4">
        <Card title="Dispositivos ativos" value="🟢 2 online. 🔴 1 offline." onClick={() => router.push('/dashboard/dispositivos')} />
        <Card title="Total Créditos NTL Gerados" value={`${creditosGerados} NTL`} highlight onClick={() => router.push('/dashboard/carteira')} />
        <Card title="Hoje" value={`${totalHoje} NTL`} />
        <Card title="Este mês" value={`${totalMes} NTL`} />
      </div>

      {/* Cards por tipo de dispositivo */}
      <div className="grid grid-cols-2 gap-3">
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

      {/* Ações principais */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        <Button onClick={() => router.push('/dashboard/pool')} className="bg-green-500 text-white font-bold py-2 rounded-lg">
          Certificar
        </Button>
        <Button onClick={() => router.push('/dashboard/marketplace')} className="bg-green-500 text-white font-bold py-2 rounded-lg">
          Vender
        </Button>
        <Button onClick={() => router.push('/dashboard/carteira')} className="bg-green-500 text-white font-bold py-2 rounded-lg">
          Ver histórico
        </Button>
      </div>
      {['GENERATOR', 'BUYER', 'COMPANY'].includes(role ?? '') && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <MobileBottomBar />
        </div>
      )}
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