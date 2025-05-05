'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props {
  label: string
  href?: string
  icon?: React.ElementType
  rightLabel?: string
  status?: 'Online' | 'Offline'
  isDanger?: boolean
}

export default function SettingItem({ label, href, icon: Icon, rightLabel, status, isDanger }: Props) {
  const content = (
    <div className={cn(
      'flex justify-between items-center px-4 py-4',
      isDanger && 'text-red-500'
    )}>
      <div className="flex items-center gap-3">
        {Icon && <Icon className="w-5 h-5" />}
        <span>{label}</span>
      </div>
      {status && (
        <span className={cn('text-xs', status === 'Online' ? 'text-green-500' : 'text-red-500')}>
          {status === 'Online' ? 'Dispositivo Online' : 'Offline'}
        </span>
      )}
      {rightLabel && (
        <span className="text-sm text-gray-400">{rightLabel}</span>
      )}
    </div>
  )

  return href ? <Link href={href}>{content}</Link> : content
}
