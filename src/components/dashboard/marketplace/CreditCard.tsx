'use client'

import { useState } from 'react'
import { MapPin, BadgeCheck, Share2, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CreditCardProps {
  credit: {
    id: string
    title: string
    amount: number
    type: 'PRE_CERTIFIED' | 'CERTIFIED'
    location: string
    price: number
    date: string
    image: string
    seller: string
    source: string
    certifiedBy: string
    deviceType?: string
    generator?: string
    flagUrl?: string
    cityImageUrl?: string
  }
  onClick?: () => void
}

export default function CreditCard({ credit, onClick }: CreditCardProps) {
  const [favorited, setFavorited] = useState(false)
  const {
    title,
    amount,
    price,
    type,
    location,
    date,
  } = credit

  return (
    <div onClick={onClick} className="bg-gray-900 rounded-xl p-4 text-white space-y-3 border border-neutral-800 cursor-pointer hover:border-green-500 transition">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-xs px-2 py-1 rounded-full bg-green-700 text-white font-medium">
            {type === 'CERTIFIED' ? 'Certificado' : 'Pré-Certificado'}
          </span>
          {type === 'CERTIFIED' && <BadgeCheck size={16} className="text-green-400" />}
        </div>
        <div className="flex gap-2">
          <Share2 size={18} className="text-gray-400 hover:text-white cursor-pointer" />
          <Heart
            size={18}
            className={`cursor-pointer ${favorited ? 'text-red-500' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setFavorited(!favorited)}
          />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {credit.cityImageUrl && (
          <img
            src={credit.cityImageUrl}
            alt="Cidade"
            className="w-36 h-40 object-cover rounded-lg shadow-sm"
          />
        )}

        <div className="flex-1 space-y-2 flex flex-col justify-between justify-center">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">
              {amount} NTL – {title}
            </h3>

            <p className="text-sm text-gray-400">
              R$ {price.toFixed(2)} por crédito
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin size={14} />
              <span className="flex items-center gap-1">
                {credit.flagUrl && (
                  <img src={credit.flagUrl} alt="Bandeira" className="w-5 h-3 rounded-sm object-cover" />
                )}
                {location}
              </span>
            </div>

            <p className="text-xs text-gray-500">Gerado em: {date}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button size="sm" variant="outline" onClick={() => {}}>
              Detalhes
            </Button>
            <Button size="sm" className="bg-green-500 text-white" onClick={() => {}}>
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
