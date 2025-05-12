'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Credit } from '@/components/dashboard/marketplace/types'

interface PaymentModalProps {
  open: boolean
  onClose: () => void
  credit: Credit
  quantity: number
}

export default function PaymentModal({ open, onClose, credit, quantity }: PaymentModalProps) {
  const [confirming, setConfirming] = useState(false)

  const handleConfirm = () => {
    setConfirming(true)
    setTimeout(() => {
      alert(`Compra do crédito ${credit.id} confirmada!`)
      setConfirming(false)
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black text-white border border-neutral-800">
        <DialogHeader>
          <DialogTitle>Confirmar Pagamento</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 text-sm">
          <p><strong>Crédito:</strong> #{credit.id}</p>
          <p><strong>Quantidade:</strong> {quantity} NTL</p>
          <p><strong>Total a pagar:</strong> R$ {(credit.price * quantity).toFixed(2)}</p>
        </div>

        <Button
          className="w-full mt-4 bg-green-500 hover:bg-green-600"
          disabled={confirming}
          onClick={handleConfirm}
        >
          {confirming ? 'Processando...' : 'Confirmar Pagamento'}
        </Button>
      </DialogContent>
    </Dialog>
  )
}