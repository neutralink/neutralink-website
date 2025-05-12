'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { EditProfileModal } from '@/components/dashboard/EditProfileModal'
import { ConfirmDeleteModal } from './ConfirmDeleteModal'
import { QrCodeModal } from '@/components/dashboard/QrCodeModal'

import {
  User,
  Cpu,
  Leaf,
  Globe,
  Bell,
  Trash2,
  LogOut,
  Pencil,
} from 'lucide-react'

export default function ProfilePage() {
  const [notifications, setNotifications] = useState(true)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showQrModal, setShowQrModal] = useState(false)

  const handleDelete = () => {
    setShowDeleteModal(false)
    alert('Conta excluída com sucesso!')
  }

  return (
    <div className="px-4 pt-8 pb-32 space-y-6 text-white">
      {/* Título */}
      <h1 className="text-2xl font-semibold text-white text-center font-sans tracking-wide">
        Perfil e Configurações do Usuário
      </h1>

      {/* Foto + nome + email */}
      <div className="flex items-center gap-4 bg-gray-900 p-4 rounded-xl">
        <Image
          src="/icons/user-photo.jpg"
          alt="Foto do usuário"
          width={64}
          height={64}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Pedro Henrique</h2>
            <button
              onClick={() => setShowEditModal(true)}
              className="text-sm text-green-400 hover:underline flex items-center gap-1"
            >
              <Pencil size={14} /> Editar
            </button>
          </div>
          <p className="text-sm text-gray-400">pedrohenrique@email.com</p>
        </div>
      </div>

      {/* Card - Ações principais */}
<div className="bg-gray-900 rounded-xl p-3 space-y-2">
  <Item label="Dados da Conta" icon={<User size={18} />} />
  <Item label="Visualizar dispositivo IoT" icon={<Cpu size={18} />} status="Dispositivo Online" />
  <Item label="Créditos Gerados" icon={<Leaf size={18} />} value="84,3 NTL" />
</div>


      {/* Card - Configurações */}
      <div className="bg-gray-900 rounded-xl p-3 space-y-2">
        <Item label="Idioma" icon={<Globe size={18} />} value="Português" />
        <Item
          label="Notificações"
          icon={<Bell size={18} />}
          right={
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          }
        />
        <Item
          label="Excluir Conta"
          icon={<Trash2 size={18} />}
          danger
          right={
            <Button
              variant="destructive"
              size="sm"
              onClick={() => setShowDeleteModal(true)}
              className="text-sm"
            >
              Excluir
            </Button>
          }
        />
        <Item
          label="Sair"
          icon={<LogOut size={18} />}
          right={
            <Button
              variant="ghost"
              size="sm"
              className="text-sm text-green-400"
              onClick={() => {
                localStorage.clear()
                window.location.href = '/'
              }}
            >
              Sair
            </Button>
          }
        />
      </div>

      {/* Modais */}
      {showDeleteModal && (
        <ConfirmDeleteModal
          open={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDelete}
        />
      )}

      {showEditModal && (
        <EditProfileModal onClose={() => setShowEditModal(false)} />
      )}

      {showQrModal && (
        <QrCodeModal open={showQrModal} onClose={() => setShowQrModal(false)} />
      )}
    </div>
  )
}

function Item({
  label,
  icon,
  href,
  value,
  right,
  status,
  highlight,
  danger,
}: {
  label: string
  icon: React.ReactNode
  href?: string
  value?: string
  right?: React.ReactNode
  status?: string
  highlight?: boolean
  danger?: boolean
}) {
  const classes = `flex items-center justify-between rounded-lg px-4 py-3 transition ${
    highlight
      ? 'text-green-400 font-bold hover:bg-green-900'
      : danger
      ? 'text-red-500 hover:bg-red-900'
      : 'hover:bg-gray-800'
  }`

  return (
    <div className={classes}>
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm font-medium">{label}</p>
          {status && <p className="text-xs text-green-500">{status}</p>}
        </div>
      </div>
      {value && <span className="text-sm text-gray-400">{value}</span>}
      {right && <div>{right}</div>}
    </div>
  )
}
