'use client'

import { Credit } from './types'
import { Button } from '@/components/ui/button'
import { Pencil, Trash2 } from 'lucide-react'

interface SalesListProps {
  credits: Credit[]
  onEdit: (credit: Credit) => void
  onRemove: (id: string) => void
}

export default function SalesList({ credits, onEdit, onRemove }: SalesListProps) {
  return (
    <div className="space-y-3">
      {credits.length === 0 && (
        <p className="text-sm text-gray-400">Você ainda não listou créditos à venda.</p>
      )}

      {credits.map((credit) => (
        <div
          key={credit.id}
          className="bg-gray-900 p-4 rounded-xl flex items-center justify-between"
        >
          <div>
            <h2 className="text-sm font-semibold text-white">Crédito #{credit.id}</h2>
            <p className="text-xs text-gray-400">
              {credit.amount} NTL — {credit.deviceType === 'neutraconect' ? 'Solar' : 'Metano'} —
              {credit.date}
            </p>
            {credit.price && (
              <p className="text-sm text-green-400 font-medium">R$ {credit.price.toFixed(2)} / NTL</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="text-yellow-400 hover:bg-yellow-900"
              onClick={() => onEdit(credit)}
            >
              <Pencil size={16} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-red-400 hover:bg-red-900"
              onClick={() => onRemove(credit.id)}
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
