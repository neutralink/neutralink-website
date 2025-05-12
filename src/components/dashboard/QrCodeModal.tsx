'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import QRCode from 'react-qr-code'

interface QrCodeModalProps {
  open: boolean
  onClose: () => void
}

export function QrCodeModal({ open, onClose }: QrCodeModalProps) {
  const certificateUrl = 'https://neutralinkeco.com/certificado/12345'

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>QR Code do Certificado</DialogTitle>
        </DialogHeader>

        <div className="flex justify-center py-6">
          <QRCode value={certificateUrl} bgColor="#000000" fgColor="#ffffff" />
        </div>

        <DialogFooter>
          <Button onClick={onClose} variant="ghost">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
