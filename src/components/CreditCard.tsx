// src/components/CreditCard.tsx
'use client'

import Image from 'next/image'

interface CreditCardProps {
  image: string
  location: string
  certifier: string
  flag: string
  amount: number
  price: string
  currency: string
  badge: 'Certificado' | 'Pré-certificado'
  badgeColor: string
  href: string
}

export function CreditCard({
  image,
  location,
  certifier,
  flag,
  amount,
  price,
  currency,
  badge,
  badgeColor,
  href,
}: CreditCardProps) {
  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
      <div className="w-40 h-40 flex-shrink-0">
        <Image src={image} alt={location} width={160} height={160} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col justify-between p-4 flex-1 text-left">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-white text-xs font-semibold px-2 py-1 rounded ${badgeColor}`}>
            {badge}
          </span>
          <Image src={flag} alt={location} width={20} height={14} />
        </div>
        <p className="text-sm text-neutral-600">{certifier} • {location}</p>
        <p className="text-sm text-neutral-500 mt-1">{amount} tCO₂e</p>
        <p className="text-xl font-semibold text-neutral-900 mt-2">{currency} {price} <span className="text-sm text-neutral-500">/tonelada</span></p>
        <div className="flex gap-2 mt-4">
          <a href="#comprar" className="bg-[#22C55E] text-white text-sm px-4 py-2 rounded hover:bg-[#16a34a] transition">Comprar</a>
          <a href={href} className="bg-white border border-[#22C55E] text-[#22C55E] text-sm px-4 py-2 rounded hover:bg-[#f0fdf4] transition">Ver Detalhes</a>
        </div>
      </div>
    </div>
  )
}
