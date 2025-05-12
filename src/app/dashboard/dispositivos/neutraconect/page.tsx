'use client'

import Image from 'next/image'
import { RefreshCcw } from 'lucide-react'
import RoleSwitcherDev from '@/components/dashboard/RoleSwitcherDev'


export default function GeradorHomePage() {
  // Valores simulados — substitua depois por valores dinâmicos
  const ntlGerados = 84.3
  const precoOracle = 2.75 // valor por NTL (em R$)
  const tipoCredito = 'Pré-certificado'

  return (
    <div className="text-white space-y-4 pt-4 pb-10 px-4">
      <RoleSwitcherDev />
      {/* Card Geração com imagem à esquerda e status à direita */}
      <div className="bg-gray-900 py-8 px-7 min-h-[120px] rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/icons/neutraconect.svg"
            alt="Ícone Solar"
            width={80}
            height={80}
          />
          <div>
            <h1 className="text-xl font-bold text-green-400">Geração de Créditos</h1>
            <p className="text-sm text-gray-400">NeutraConect</p>
          </div>
        </div>
        <span className="text-green-400 text-sm whitespace-nowrap">🟢 Ativo</span>
      </div>

      {/* Cards de Produção */}
      <div className="grid grid-cols-2 gap-4">
        <Card title="Hoje" value="28,5 kWh" icon={<RefreshCcw size={20} />} />
        <Card title="Este mês" value="620,8 kWh" />
        <Card title="Créditos NTL Gerados" value={`${ntlGerados} NTL`} highlight />
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

      {/* Card Conversão NTL em Reais */}
      <CardConversaoNTL
        ntl={ntlGerados.toString()}
        precoPorNTL={precoOracle}
        tipo={tipoCredito}
      />

      {/* Botões de ação */}
      <div className="grid grid-cols-3 gap-5 mt-0">
        <button className="bg-green-500 text-white font-bold py-2 rounded-lg">Certificar</button>
        <button className="bg-green-500 text-white font-bold py-2 rounded-lg">Vender</button>
        <button className="bg-green-500 text-white font-bold py-2 rounded-lg">Ver histórico</button>
      </div>
    </div>
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
      <h2 className={`mt-2 text-2xl font-bold ${highlight ? 'text-green-400' : 'text-white'}`}>{value}</h2>
    </div>
  )
}

function CardConversaoNTL({
  ntl,
  precoPorNTL,
  tipo,
}: {
  ntl: string
  precoPorNTL: number
  tipo: 'Certificado' | 'Pré-certificado'
}) {
  const valorTotal = (parseFloat(ntl) * precoPorNTL).toFixed(2)

  return (
    <div className="bg-gray-900 p-4 rounded-xl space-y-1">
      <p className="text-sm text-gray-400">Valor estimado em R$</p>
      <h2 className="text-2xl font-bold text-green-400">R$ {valorTotal}</h2>
      <p className="text-xs text-gray-500">
        Baseado em {ntl} NTL ({tipo}) a R$ {precoPorNTL.toFixed(2)} por unidade
      </p>
    </div>
  )
}
