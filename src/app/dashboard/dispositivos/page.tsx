'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Cpu, Leaf, LayoutDashboard, Plus, Settings, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const mockDevices = [
  {
    id: '1',
    name: 'Usina Residencial',
    type: 'neutraconect',
    serial: 'NTL-00123',
    location: 'Palmas - TO',
    capacity: '5 kWp',
    status: 'online',
  },
  {
    id: '2',
    name: 'Bio Digestor Fazenda',
    type: 'neutramethane',
    serial: 'NTM-00456',
    location: 'Goiás - GO',
    capacity: '12 m³/dia',
    status: 'offline',
  },
]

export default function DispositivosPage() {
  const router = useRouter()
  const [quantidade, setQuantidade] = useState(1)

  useEffect(() => {
    if (mockDevices.length === 1) {
      const { type } = mockDevices[0]
      router.push(`/dashboard/${type === 'neutraconect' ? 'gerador' : type}`)
    }
  }, [])

  const precoUnitario = 480.0
  const total = (quantidade * precoUnitario).toFixed(2)

  return (
    <div className="px-4 pt-8 pb-32 text-white space-y-6">
      {/* Cabeçalho com ícone */}
      <div className="flex items-center gap-2">
        <Image src="/icons/plug.svg" alt="Dispositivos" width={80} height={80} />
        <div>
          <h1 className="text-2xl font-bold">Gerenciar Meus Dispositivos</h1>
          <p className="text-sm text-gray-400">
            Visualize, adicione ou acesse o painel de cada dispositivo conectado à NeutraLink.
          </p>
        </div>
      </div>

      {/* Lista de dispositivos */}
      <div className="space-y-4">
        {mockDevices.map((device) => (
          <div
            key={device.id}
            onClick={() =>
              router.push(
                device.type === 'neutraconect'
                  ? '/dashboard/dispositivos/neutraconect'
                  : `/dashboard/${device.type}`
              )
            }
            className="bg-gray-900 rounded-xl p-4 hover:bg-gray-800 cursor-pointer flex items-start justify-between"
          >
            <div className="flex gap-3">
              <Image
                src={
                  device.type === 'neutraconect'
                    ? '/icons/neutraconect.svg'
                    : '/icons/neutramethane.svg'
                }
                alt="Tipo"
                width={80}
                height={80}
              />
              <div>
                <h2 className="font-semibold">{device.name}</h2>
                <p className="text-sm text-gray-400">
                  {device.type === 'neutraconect' ? 'NeutraConect ⚡' : 'NeutraMethane ♻️'}
                </p>
                <p className="text-xs text-gray-500">Série: {device.serial}</p>
                <p className="text-xs text-gray-500">Local: {device.location}</p>
                <p className="text-xs text-gray-500">Capacidade: {device.capacity}</p>
              </div>
            </div>

            <span
              className={`text-sm font-medium mt-1 ${
                device.status === 'online' ? 'text-green-400' : 'text-red-500'
              }`}
            >
              {device.status === 'online' ? '🟢 Online' : '🔴 Offline'}
            </span>
          </div>
        ))}
      </div>

      {/* Botões de ação */}
      <div className="flex justify-center gap-4">
        <Link href="/dashboard/dispositivos/vincular">
          <Button className="bg-green-500 hover:bg-green-600 w-40">
            <Plus className="w-4 h-4 mr-2" /> Adicionar
          </Button>
        </Link>
        <Button
          className="bg-red-600 hover:bg-red-700 text-white w-40"
          onClick={() => alert('Abrir modal para remover dispositivo')}
        >
          - Remover
        </Button>
      </div>

      {/* Card de Compra de Dispositivo */}
      <div className="bg-gray-900 p-4 rounded-xl space-y-3">
        <h2 className="text-lg font-bold text-white">Comprar Novo Dispositivo</h2>
        <div className="flex items-center gap-4">
          <Image src="/icons/neutraconect.svg" alt="NeutraConect" width={60} height={60} />
          <div className="flex-1">
            <p className="text-sm text-white font-semibold">NeutraConect – Monitor Solar</p>
            <p className="text-xs text-gray-400">
              Conecte sua usina à NeutraLink e gere créditos de carbono automaticamente.
            </p>
          </div>
          <Button
            className="bg-green-500 hover:bg-green-600"
            onClick={() => alert('Redirecionar para página de compra')}
          >
            Comprar
          </Button>
        </div>
        {/* Resumo do Pedido */}
        <div className="pt-3 border-t border-neutral-800">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">Qtd:</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setQuantidade(Math.max(1, quantidade - 1))}>
                -
              </Button>
              <span className="text-sm text-white">{quantidade}</span>
              <Button variant="outline" size="sm" onClick={() => setQuantidade(quantidade + 1)}>
                +
              </Button>
            </div>
          </div>
          <p className="text-sm text-white mt-2">
            Total: <span className="font-semibold">R$ {total}</span>
          </p>
        </div>
      </div>

      {/* Card de Compra do Bio Digestor */}
<div className="bg-gray-900 p-4 rounded-xl space-y-3">
  <h2 className="text-lg font-bold text-white">Comprar Novo Dispositivo</h2>
  <div className="flex items-center gap-4">
    <Image src="/icons/neutramethane.svg" alt="NeutraMethane" width={60} height={60} />
    <div className="flex-1">
      <p className="text-sm text-white font-semibold">NeutraMethane – Monitor de Gás</p>
      <p className="text-xs text-gray-400">
        Conecte seu biodigestor ou fonte de biogás à NeutraLink e monetize com créditos de carbono.
      </p>
    </div>
    <Button
      className="bg-green-500 hover:bg-green-600"
      onClick={() => alert('Redirecionar para página de compra')}
    >
      Comprar
    </Button>
  </div>

  {/* Resumo do Pedido */}
  <div className="pt-3 border-t border-neutral-800">
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-300">Qtd:</span>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setQuantidade(Math.max(1, quantidade - 1))}>
          -
        </Button>
        <span className="text-sm text-white">{quantidade}</span>
        <Button variant="outline" size="sm" onClick={() => setQuantidade(quantidade + 1)}>
          +
        </Button>
      </div>
    </div>
    <p className="text-sm text-white mt-2">
      Total: <span className="font-semibold">R$ {(quantidade * 720).toFixed(2)}</span>
    </p>
  </div>
</div>


      {/* Menu inferior (mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-neutral-800 text-white h-16 flex justify-around items-center">
        <Link href="/dashboard" className="flex flex-col items-center text-xs">
          <LayoutDashboard className="h-5 w-5" /> Dashboard
        </Link>
        <Link href="/dashboard/usinas" className="flex flex-col items-center text-xs">
          <Cpu className="h-5 w-5" /> Usinas
        </Link>
        <Link href="/dashboard/marketplace" className="flex flex-col items-center text-xs">
          <Leaf className="h-5 w-5" /> Marketplace
        </Link>
        <Link href="/dashboard/configuracoes" className="flex flex-col items-center text-xs">
          <Settings className="h-5 w-5" /> Configurações
        </Link>
      </nav>
    </div>
  )
}