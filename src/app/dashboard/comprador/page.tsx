'use client';

import { useAuthGuard } from '@/hooks/useAuthGuard';
import BuyerDashboard from '@/components/dashboard/BuyerDashboard'

export default function CompradorPage() {
  useAuthGuard();
  return <BuyerDashboard />
}
