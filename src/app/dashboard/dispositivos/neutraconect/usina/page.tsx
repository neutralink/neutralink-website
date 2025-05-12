'use client'

import { Leaf, Sun, MapPin } from 'lucide-react'

export default function GeradorUsinaPage() {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-xl font-semibold">Minha Usina</h1>

      <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 space-y-3">
        <div className="flex items-center space-x-3">
          <Sun size={20} className="text-yellow-400" />
          <p className="text-sm">Nome: Usina Solar Pedro</p>
        </div>

        <div className="flex items-center space-x-3">
          <MapPin size={20} className="text-blue-400" />
          <p className="text-sm">Localização: Palmas - TO</p>
        </div>

        <div className="flex items-center space-x-3">
          <Leaf size={20} className="text-green-400" />
          <p className="text-sm">Capacidade: 4.8 kWp</p>
        </div>
      </div>
    </div>
  )
}
