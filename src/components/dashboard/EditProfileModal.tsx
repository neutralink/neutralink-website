'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface EditProfileModalProps {
  onClose: () => void
}

export function EditProfileModal({ onClose }: EditProfileModalProps) {
  const [name, setName] = useState('Pedro Henrique')
  const [email, setEmail] = useState('pedrohenrique@email.com')

  const handleSave = () => {
    console.log('Mock -> Salvando perfil:', { name, email })
    onClose()
  }

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <div className="space-y-4">
          <DialogHeader>
            <DialogTitle>Editar Perfil</DialogTitle>
            <DialogDescription>
              Altere seus dados de nome e e-mail abaixo
            </DialogDescription>
          </DialogHeader>

          <div>
            <label className="text-sm text-gray-400 block mb-1">Nome</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="bg-gray-900 border border-neutral-700 text-white"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="bg-gray-900 border border-neutral-700 text-white"
            />
          </div>

          <DialogFooter className="pt-2">
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleSave} className="bg-green-500 text-white hover:bg-green-600">
              Salvar
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
