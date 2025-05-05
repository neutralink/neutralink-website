'use client'

import { Leaf, CalendarDays, CheckCircle } from 'lucide-react'

export default function GeradorCreditosPage() {
  const creditos = [
    { id: 1, data: '01/05/2025', quantidade: '3,2 NTL', status: 'Certificado' },
    { id: 2, data: '25/04/2025', quantidade: '2,9 NTL', status: 'Pré-certificado' },
    { id: 3, data: '18/04/2025', quantidade: '3,5 NTL', status: 'Certificado' },
  ]

  return (
    <div className="text-white space-y-6">
      <h1 className="text-xl font-semibold">Meus Créditos</h1>

      <div className="space-y-4">
        {creditos.map((c) => (
          <div
            key={c.id}
            className="bg-neutral-900 border border-neutral-800 p-4 rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <Leaf size={20} className="text-green-400" />
              <div>
                <p className="text-sm font-medium">{c.quantidade}</p>
                <div className="flex items-center text-xs text-neutral-400 space-x-2">
                  <CalendarDays size={14} />
                  <span>{c.data}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <CheckCircle size={16} className={c.status === 'Certificado' ? 'text-green-400' : 'text-yellow-400'} />
              <span
                className={c.status === 'Certificado' ? 'text-green-400' : 'text-yellow-400'}
              >
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
