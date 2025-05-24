'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../../components/ui/button'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ConfirmDeleteModalProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export function ConfirmDeleteModal({
  open,
  onClose,
  onConfirm,
}: ConfirmDeleteModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-900 p-6 shadow-lg focus:outline-none'
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-lg font-bold text-white">
              Confirmar exclusão
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <p className="text-sm text-gray-300 mb-6">
            Tem certeza que deseja excluir sua conta? Essa ação é irreversível.
          </p>

          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={onConfirm}>
              Excluir
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
