'use client'

import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
  Leaf,
  CheckCircle,
  Clock,
  Flame,
  Factory,
  CalendarDays,
  Info,
} from 'lucide-react'

export default function PoolPage() {
  const [certAuto, setCertAuto] = useState(false)

  const [disponiveis, setDisponiveis] = useState([
    { id: 'c1', quantidade: 10, tipo: 'neutraconect', status: 'disponivel' },
    { id: 'c2', quantidade: 15, tipo: 'neutramethane', status: 'disponivel' },
  ])

  const [submetidos, setSubmetidos] = useState([
    { id: 'c3', quantidade: 20, status: 'pendente' },
    { id: 'c4', quantidade: 30, status: 'em análise' },
  ])

  const handleSubmeter = (id: string) => {
    const credito = disponiveis.find((c) => c.id === id)
    if (!credito) return
    setDisponiveis(disponiveis.filter((c) => c.id !== id))
    setSubmetidos([...submetidos, { ...credito, status: 'pendente' }])
  }

  const conect = disponiveis.filter((c) => c.tipo === 'neutraconect')
  const methane = disponiveis.filter((c) => c.tipo === 'neutramethane')

  return (
    <div className="px-4 pt-20 pb-28 space-y-8 text-white">
      <h1 className="text-2xl font-bold">Certificação via Pool</h1>
      <p className="text-sm text-gray-400">
        Certifique seus créditos <span className="text-green-400 font-medium">pré-certificados</span> e aumente seu valor no mercado com a verificação por auditoria.
      </p>

      {/* Progresso para Certificação */}
      <div className="bg-gray-900 p-4 rounded-xl space-y-2">
        <h3 className="text-sm font-semibold text-white">Progresso para Certificação</h3>
        <p className="text-xs text-gray-400">
          Faltam <span className="text-green-400 font-semibold">15 NTL</span> para a próxima certificação Verra.
        </p>

        <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full" style={{ width: '70%' }} />
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>35/50 NTL</span>
          <span>Submissão: 01/06/2025</span>
        </div>
      </div>

      {/* Valor estimado */}
      <div className="bg-gray-900 p-4 rounded-xl space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium text-white">
          <Info size={18} className="text-green-400" />
          Valor estimado por crédito certificado
        </div>
        <div className="flex justify-between text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Factory size={16} className="text-green-400" />
            Energia Solar: <span className="font-semibold text-white">R$ 60,00</span>
          </div>
          <div className="flex items-center gap-2">
            <Flame size={16} className="text-green-400" />
            Gás Metano: <span className="font-semibold text-white">R$ 92,00</span>
          </div>
        </div>
      </div>

      {/* Créditos disponíveis */}
      <div>
        <h2 className="text-lg font-semibold mb-2 text-green-400">Créditos Disponíveis</h2>

        {conect.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-white">NeutraConect ⚡</h3>
            {conect.map((c) => (
              <CreditItem key={c.id} credito={c} onSubmeter={handleSubmeter} />
            ))}
          </div>
        )}

        {methane.length > 0 && (
          <div className="space-y-2 pt-4">
            <h3 className="text-sm font-semibold text-white">NeutraMethane ♻️</h3>
            {methane.map((c) => (
              <CreditItem key={c.id} credito={c} onSubmeter={handleSubmeter} />
            ))}
          </div>
        )}

        {disponiveis.length === 0 && (
          <p className="text-sm text-gray-400 mt-2">Nenhum crédito disponível para certificação.</p>
        )}
      </div>

      {/* Créditos Submetidos */}
      <div>
        <h2 className="text-lg font-semibold mb-2 text-white">Créditos Submetidos</h2>
        <div className="space-y-2">
          {submetidos.length === 0 ? (
            <p className="text-sm text-gray-400">Nenhum crédito submetido ainda.</p>
          ) : (
            submetidos.map((c) => (
              <div key={c.id} className="bg-gray-900 p-4 rounded-xl flex items-center gap-3">
                {c.status === 'pendente' ? (
                  <Clock className="text-yellow-400" size={20} />
                ) : (
                  <CheckCircle className="text-blue-400" size={20} />
                )}
                <div>
                  <p className="text-sm font-semibold">Crédito #{c.id}</p>
                  <p className="text-xs text-gray-400">{c.quantidade} NTL — {c.status}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Próximas certificações */}
      <div className="bg-gray-900 p-4 rounded-xl space-y-2">
        <div className="flex items-center gap-2 text-sm text-white font-semibold">
          <CalendarDays size={18} className="text-green-400" />
          Próximas Certificações
        </div>
        <ul className="text-sm text-gray-300 ml-1 list-inside">
          <li className="flex justify-between">
            <span>15 de Maio de 2025</span>
            <span className="text-green-400">Gold Standard</span>
          </li>
          <li className="flex justify-between">
            <span>01 de Junho de 2025</span>
            <span className="text-green-400">Verra</span>
          </li>
          <li className="flex justify-between">
            <span>15 de Junho de 2025</span>
            <span className="text-green-400">Gold Standard</span>
          </li>
        </ul>
      </div>

      {/* Certificação automática */}
      <div className="bg-gray-900 p-4 rounded-xl flex items-center justify-between">
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-white">Certificar automaticamente</h3>
          <p className="text-xs text-gray-400 max-w-xs">
            Ative para enviar créditos automaticamente ao pool de certificação.
          </p>
        </div>
        <div className="ml-4">
          <Switch checked={certAuto} onCheckedChange={setCertAuto} />
        </div>
      </div>
    </div>
  )
}

function CreditItem({
  credito,
  onSubmeter,
}: {
  credito: { id: string; quantidade: number }
  onSubmeter: (id: string) => void
}) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Leaf className="text-green-400" size={20} />
        <div>
          <p className="text-sm font-semibold">Crédito #{credito.id}</p>
          <p className="text-xs text-gray-400">{credito.quantidade} NTL</p>
        </div>
      </div>
      <Button
        size="sm"
        className="bg-green-500 text-white hover:bg-green-600"
        onClick={() => onSubmeter(credito.id)}
      >
        Submeter
      </Button>
    </div>
  )
}
