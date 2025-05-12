'use client'

import { useState } from 'react'

const filters = [
  { label: 'Meus Créditos', value: 'MY_CREDITS' },
  { label: 'Pré-certificados', value: 'PRE_CERTIFIED' },
  { label: 'Certificados', value: 'CERTIFIED' },
  { label: 'Solar', value: 'SOLAR' },
  { label: 'Biogás', value: 'BIOGAS' },
  { label: 'Eólica', value: 'EOLICA' },
  { label: 'Gold Standard', value: 'GOLD' },
  { label: 'Verra', value: 'VERRA' },
  { label: '2025', value: '2025' },
  { label: '2024', value: '2024' },
]

export default function CreditFilterBar({
  onFilterChange,
  onlyMine = false,
  setOnlyMine,
}: {
  onFilterChange?: (value: string) => void
  onlyMine?: boolean
  setOnlyMine?: (value: boolean) => void
}) {
  const [active, setActive] = useState<string>('')

  const handleClick = (value: string) => {
    if (value === 'MY_CREDITS' && setOnlyMine) {
      setOnlyMine(!onlyMine)
      onFilterChange?.(value) // ← garante que o valor chegue ao pai
    } else {
      setActive(value)
      onFilterChange?.(value)
    }
  }

  return (
    <div className="overflow-x-auto whitespace-nowrap flex gap-2 py-2 px-1 scrollbar-hide">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => handleClick(f.value)}
          className={`px-4 py-1 rounded-full text-sm border transition ${
            (f.value === 'MY_CREDITS' ? onlyMine : active === f.value)
              ? 'bg-green-500 text-white border-green-600'
              : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}