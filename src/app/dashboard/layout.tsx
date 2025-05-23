'use client'

import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const DashboardLayout = dynamic(() => import('@/components/dashboard/DashboardLayout'), { ssr: false })

export default function Layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
