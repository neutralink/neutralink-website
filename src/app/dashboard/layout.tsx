import type { ReactNode } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'

export const metadata = {
  title: 'Painel | NeutraLink',
  description: 'Painel da plataforma estilo app, com menu inferior',
}

export default function Layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
