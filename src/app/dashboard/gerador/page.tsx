'use client'

import Image from 'next/image'
import { RefreshCcw } from 'lucide-react'
import RoleSwitcherDev from '@/components/dashboard/RoleSwitcherDev' 

export default function GeradorHomePage() {
  return (
    <>
      <RoleSwitcherDev /> {/* 🔧 Botão para trocar de role no ambiente de desenvolvimento */}

      <div className="text-white space-y-6 pt-20 pb-32 px-4">
        {/* Card Geração com imagem à esquerda e status à direita */}
        <div className="bg-gray-900 py-8 px-6 min-h-[120px] rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/solar-credit.svg"
              alt="Ícone Solar"
              width={110}
              height={110}
            />
            <div>
              <h1 className="text-xl font-bold text-green-400">Geração de Créditos</h1>
              <p className="text-sm text-gray-400">Produção</p>
            </div>
          </div>
          <span className="text-green-400 text-sm whitespace-nowrap">🟢 Ativo</span>
        </div>

        {/* Cards de Produção */}
        <div className="grid grid-cols-2 gap-4">
          <Card title="Hoje" value="28,5 kWh" icon={<RefreshCcw size={20} />} />
          <Card title="Este mês" value="620,8 kWh" />
          <Card title="Créditos NTL Gerados" value="84,3 NTL" highlight />
          <Card title="Total" value="18.452 kWh" />
          <div className="bg-gray-900 p-4 rounded-xl col-span-2 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">CO₂ Evitado</p>
              <h2 className="mt-2 text-2xl font-bold text-white">125 kg</h2>
            </div>
            <Image
              src="/icons/factory.svg"
              alt="Fábrica"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Botões de ação */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <button className="bg-green-500 text-white font-bold py-2 rounded-lg">Certificar</button>
          <button className="bg-green-500 text-white font-bold py-2 rounded-lg">Vender</button>
          <button className="bg-green-500 text-white font-bold py-2 rounded-lg">Ver histórico</button>
        </div>
      </div>
    </>
  )
}

function Card({
  title,
  value,
  icon,
  highlight = false,
  className = '',
}: {
  title: string
  value: string
  icon?: React.ReactNode
  highlight?: boolean
  className?: string
}) {
  return (
    <div className={`bg-gray-900 p-4 rounded-xl ${className}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">{title}</p>
        {icon && <div className="text-green-400">{icon}</div>}
      </div>
      <h2
        className={`mt-2 text-2xl font-bold ${
          highlight ? 'text-green-400' : 'text-white'
        }`}
      >
        {value}
      </h2>
    </div>
  )
}
