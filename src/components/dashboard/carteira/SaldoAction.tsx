// src/components/dashboard/carteira/SaldoActions.tsx
'use client'

import { Button } from '../../../components/ui/button'

export default function SaldoActions() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      <Button className="bg-green-500 text-white hover:bg-green-600">💸 Sacar Saldo</Button>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">➕ Adicionar Saldo</Button>
    </div>
  )
}