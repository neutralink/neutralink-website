'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Leaf, MapPin, Factory } from 'lucide-react'
import PaymentModal from '@/components/dashboard/marketplace/PaymentModal'

// Interface localizada no início do arquivo
// Tente usar o tipo Credit importado, se existir e for padronizado.
// Caso contrário, torne a propriedade source opcional.
interface CreditDetailModalProps {
  open: boolean
  onClose: () => void
  credit: {
    id: string
    amount: number
    price: number
    type: 'PRE_CERTIFIED' | 'CERTIFIED' | 'SOLD' | 'BOUGHT'
    generator: string
    location: string
    source?: 'SOLAR' | 'BIOGAS' | 'EOLICA'
    date: string
    hash?: string
    serialNumber?: string
    productionCity?: string
    createdAt?: string
    deviceType: string
  }
}

export default function CreditDetailModal({ open, onClose, credit }: CreditDetailModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const totalPrice = (quantity * credit.price).toFixed(2)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-black border border-neutral-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Detalhes do Crédito #{credit.id}</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 text-sm">
          <p><strong>Crédito:</strong> #{credit.id}</p>
          <p><strong>Status:</strong> {credit.type === 'CERTIFIED' ? 'Certificado' : 'Pré-certificado'}</p>
          <p><strong>Fonte:</strong> {credit.source}</p>
          <p><strong>Quantidade disponível:</strong> {credit.amount} NTL</p>
          <p><strong>Valor unitário:</strong> R$ {credit.price.toFixed(2)}</p>
          <p className="flex items-center gap-1">
            <MapPin size={16} className="text-green-400" /> {credit.location}
          </p>
          {credit.serialNumber && (
            <p><strong>Número de Série:</strong> {credit.serialNumber}</p>
          )}
          {credit.productionCity && (
            <p><strong>Cidade de Produção:</strong> {credit.productionCity}</p>
          )}
          {credit.createdAt && (
            <p><strong>Data de Criação:</strong> {credit.createdAt}</p>
          )}
          <p><strong>Gerador:</strong> {credit.generator}</p>
          <p><strong>Data de Geração:</strong> {credit.date}</p>
          {credit.hash && <p><strong>Hash Blockchain:</strong> {credit.hash}</p>}
        </div>

        <div className="pt-4 space-y-2">
          <label className="text-sm">Quantidade para compra:</label>
          <input
            type="number"
            min={1}
            max={credit.amount}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full px-2 py-1 rounded bg-gray-800 text-white border border-gray-700"
          />
          <p className="text-xs text-gray-400">Total: R$ {totalPrice}</p>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={() => setShowPaymentModal(true)}>Comprar agora</Button>

          {showPaymentModal && (
            <PaymentModal
              open={showPaymentModal}
              onClose={() => setShowPaymentModal(false)}
              credit={{ ...credit, deviceType: 'neutraconect' }}
              quantity={quantity}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
