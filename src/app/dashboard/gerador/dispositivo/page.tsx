'use client'

import { HardDrive, Wifi, PlugZap } from 'lucide-react'

export default function GeradorDispositivoPage() {
  return (
    <div className="text-white space-y-6">
      <h1 className="text-xl font-semibold">Seu Dispositivo IoT</h1>

      <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 space-y-3">
        <div className="flex items-center space-x-3">
          <HardDrive size={20} className="text-green-400" />
          <p className="text-sm">Modelo: NeutraConect v2</p>
        </div>

        <div className="flex items-center space-x-3">
          <Wifi size={20} className="text-green-400" />
          <p className="text-sm">Status: Online</p>
        </div>

        <div className="flex items-center space-x-3">
          <PlugZap size={20} className="text-green-400" />
          <p className="text-sm">Última leitura: 03/05/2025 - 14:30</p>
        </div>
      </div>
    </div>
  )
}
