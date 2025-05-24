'use client'

import { ScrollArea, ScrollBar } from '../../../components/ui/scroll-area'
import { Button } from '../../../components/ui/button'

const filters = [
  'Pré-Certificados',
  'Certificados',
  'Solar',
  'Biogás',
  'Eólica',
  'R$ até 25',
  'R$ 26–50',
  'Gold Standard',
  'Verra',
  '2025',
  'Mostrar meus créditos'
]

export default function MarketplaceFilters() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-2 py-2">
        {filters.map((f, i) => (
          <Button
            key={i}
            variant="outline"
            className="text-xs border-white/20 text-white px-3 py-1 hover:bg-green-600"
          >
            {f}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}