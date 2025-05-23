import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })

export const metadata = {
  title: 'Painel | NeutraLink',
  description: 'Painel da plataforma estilo app, com menu inferior',
}

export default function Layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
