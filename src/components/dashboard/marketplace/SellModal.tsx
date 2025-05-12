'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Credit } from './types'

interface SellModalProps {
  open: boolean
  onClose: () => void
  credit: Credit
  onConfirm: (creditId: string, quantity: number, price: number) => void
}

export default function SellModal({ open, onClose, credit, onConfirm }: SellModalProps) {
  const [quantity, setQuantity] = useState<number>(credit.amount)
  const [price, setPrice] = useState<number>(credit.price || 60)

  const marketPrice = 60
  const aboveLimit = price > marketPrice * 1.2
  const belowLimit = price < marketPrice * 0.8

  const handleConfirm = () => {
    if (quantity > credit.amount || quantity <= 0 || price <= 0) return
    onConfirm(credit.id, quantity, price)
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black border border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Colocar à Venda</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm text-gray-400">Crédito: #{credit.id} • Tipo: {credit.type}</p>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Quantidade</label>
            <Input
              type="number"
              value={quantity}
              min={1}
              max={credit.amount}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="bg-gray-900 text-white border-neutral-700"
            />
            {quantity > credit.amount && (
              <p className="text-xs text-red-500 mt-1">❌ Quantidade excede o disponível.</p>
            )}
            {quantity <= 0 && (
              <p className="text-xs text-red-500 mt-1">❌ Quantidade deve ser maior que zero.</p>
            )}
            <p className="text-xs text-gray-500 mt-1">Disponível: {credit.amount} NTL</p>
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-1 block">Preço por NTL (R$)</label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="bg-gray-900 text-white border-neutral-700"
            />
            {price <= 0 && (
              <p className="text-xs text-red-500 mt-1">❌ O preço deve ser maior que zero.</p>
            )}
            {aboveLimit && <p className="text-xs text-yellow-400 mt-1">⚠️ Preço acima do mercado. Pode ter menor liquidez.</p>}
            {belowLimit && <p className="text-xs text-green-400 mt-1">💡 Preço abaixo do mercado. Pode vender mais rápido.</p>}
          </div>
        </div>

        <DialogFooter className="pt-4">
          <Button variant="ghost" onClick={onClose}>Cancelar</Button>
          <Button className="bg-green-500 hover:bg-green-600 text-white" onClick={handleConfirm}>
            Confirmar Venda
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}