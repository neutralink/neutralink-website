'use client'

import { Factory, Flame, Leaf, DollarSign } from 'lucide-react'

export default function SummaryPanel({ summary }: { summary: {
  total: number
  certified: number
  preCertified: number
  sold: number
  estimatedValue: number
  impact: {
    co2Avoided: number
    treesEquivalent: number
  }
} }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl text-white space-y-4">
      <h2 className="text-lg font-bold">Resumo do Usuário</h2>

      <div className="grid grid-cols-2 gap-4">
        <SummaryItem
          icon={<Leaf size={20} className="text-green-400" />} 
          label="Créditos em Carteira" 
          value={`${summary.total} NTL`}
        />
        <SummaryItem
          icon={<Factory size={20} className="text-green-400" />} 
          label="Certificados" 
          value={`${summary.certified} NTL`}
        />
        <SummaryItem
          icon={<Flame size={20} className="text-yellow-400" />} 
          label="Pré-Certificados" 
          value={`${summary.preCertified} NTL`}
        />
        <SummaryItem
          icon={<DollarSign size={20} className="text-green-500" />} 
          label="Vendidos" 
          value={`${summary.sold} NTL`}
        />
      </div>

      <div className="pt-4 border-t border-neutral-700 space-y-1 text-sm">
        <p>
          CO₂ evitado: <span className="font-semibold text-green-400">{summary.impact.co2Avoided} kg</span>
        </p>
        <p>
          Equivalente a <span className="font-semibold text-green-400">{summary.impact.treesEquivalent} árvores</span> plantadas
        </p>
        <p>
          Valor estimado: <span className="font-semibold text-white">R$ {summary.estimatedValue.toFixed(2)}</span>
        </p>
      </div>
    </div>
  )
}

function SummaryItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  )
}
