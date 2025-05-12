'use client'

import { ReactNode } from 'react'

export default function CreditCard({
  title,
  value,
  highlight = false,
}: {
  title: string
  value: string
  highlight?: boolean
}) {
  return (
    <div className={`bg-gray-900 p-4 rounded-xl ${highlight ? 'border border-green-500' : ''}`}>
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className={`text-2xl font-bold mt-1 ${highlight ? 'text-green-400' : 'text-white'}`}>{value}</h2>
    </div>
  )
}