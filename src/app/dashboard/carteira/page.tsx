
'use client'

import { useAuthGuard } from '@/hooks/useAuthGuard'

import { useState, useEffect } from 'react'
import CreditCard from '@/components/dashboard/carteira/CreditCard'
import CreditTable from '@/components/dashboard/carteira/CreditTable'
import ExportButton from '@/components/dashboard/carteira/ExportButton'
import { Button } from '@/components/ui/button'
import { Wallet } from 'lucide-react'


export default function WalletPage() {
  useAuthGuard()
  type Credit = {
    id: string;
    amount: number;
    status: 'CERTIFIED' | 'PRE_CERTIFIED' | 'SOLD' | 'BOUGHT';
    deviceType: string;
    date: string;
    price?: number;
  }

  const [credits, setCredits] = useState<Credit[]>([])

  useEffect(() => {
    const fetchCredits = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.warn('Token ausente. Redirecionando para login.');
        window.location.href = '/login';
        return;
      }

      try {
        const response = await fetch('https://api.neutralinkeco.com/credits', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          console.warn('Token inválido ou expirado. Redirecionando para login.');
          window.location.href = '/login';
          return;
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Dados inválidos recebidos da API');
        }

        setCredits(data);
      } catch (error) {
        console.error('Erro ao buscar créditos:', error);
      }
    }

    fetchCredits();
  }, [])

  const total = credits.reduce((acc, c) => acc + c.amount, 0)
  const certificados = credits.filter((c) => c.status === 'CERTIFIED').reduce((acc, c) => acc + c.amount, 0)
  const precertificados = credits.filter((c) => c.status === 'PRE_CERTIFIED').reduce((acc, c) => acc + c.amount, 0)
  const vendidos = credits.filter((c) => c.status === 'SOLD').reduce((acc, c) => acc + c.amount, 0)
  const comprados = credits.filter((c) => c.status === 'BOUGHT').reduce((acc, c) => acc + c.amount, 0)

  return (
    <div className="px-4 pt-20 pb-28 space-y-8 text-white">
      <h1 className="text-2xl font-bold">Carteira de Créditos</h1>
      <p className="text-sm text-gray-400 max-w-md">
        Gerencie seus créditos de carbono tokenizados. Aqui você pode acompanhar saldos, histórico de transações e realizar ações como certificação, compra ou venda.
      </p>

    

      {/* Saldo em carteira */}
      <div className="bg-gray-900 p-4 rounded-xl flex items-center gap-4">
        <Wallet size={28} className="text-green-400" />
        <div>
          <p className="text-sm text-gray-400">Saldo disponível em carteira</p>
          <h2 className="text-2xl font-bold text-white">R$ 1.250,00</h2>
        </div>
      </div>

      {/* Cards de saldo */}
      <div className="grid grid-cols-2 gap-4">
        <CreditCard title="Total de Créditos NTL" value={`${total} NTL`} />
        <CreditCard title="Certificados" value={`${certificados} NTL`} />
        <CreditCard title="Pré-Certificados" value={`${precertificados} NTL`} />
        <CreditCard title="Vendidos" value={`${vendidos} NTL`} />
        <CreditCard title="Comprados" value={`${comprados} NTL`} />
      </div>

      {/* Ações */}
      <div className="grid grid-cols-3 gap-4">
        <Button className="bg-green-500 text-white">Certificar</Button>
        <Button className="bg-green-500 text-white">Vender</Button>
        <Button className="bg-green-500 text-white">Comprar</Button>
      </div>

      {/* Histórico de créditos */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Histórico de Transações</h2>
          <ExportButton data={credits} />
        </div>
        <CreditTable data={credits} />
      </div>

      {/* Ações com saldo */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <Button className="bg-white text-black hover:bg-gray-200">Adicionar Saldo</Button>
        <Button className="bg-red-600 text-white hover:bg-red-700">Sacar Saldo</Button>
      </div>
    </div>
  )
}
