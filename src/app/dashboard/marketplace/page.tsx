'use client'

import { useState } from 'react'
import CreditFilterBar from '../../../components/dashboard/marketplace/CreditFilterBar'
import CreditCard from '../../../components/dashboard/marketplace/CreditCard'
import SummaryPanel from '../../../components/dashboard/marketplace/SummaryPanel'
import SalesList from '../../../components/dashboard/marketplace/SalesList'
import MarketPageLayout from '../../../components/dashboard/marketplace/MarketPageLayout'
import { Credit } from '../../../components/dashboard/marketplace/types'
import CreditDetailModal from '../../../components/dashboard/marketplace/CreditDetailModal'
import SellModal from '../../../components/dashboard/marketplace/SellModal'
import { Button } from '../../../components/ui/button'

const mockCredits = [
  {
    id: 'c01',
    title: 'Usina Solar Palmas',
    amount: 100,
    type: 'CERTIFIED' as const,
    location: 'Palmas - TO',
    price: 59.9,
    date: '2025-04-10',
    image: '/images/solar-thumb.jpg',
    seller: 'Usina Solar Palmas',
    source: 'SOLAR',
    certifiedBy: 'Gold Standard',
  },
  {
    id: 'c02',
    title: 'Fazenda Biogás Goiás',
    amount: 250,
    type: 'PRE_CERTIFIED' as const,
    location: 'Goiás - GO',
    price: 38.5,
    date: '2025-03-22',
    image: '/images/biogas-thumb.jpg',
    seller: 'BioTech Farm',
    source: 'BIOGAS',
    certifiedBy: 'Verra',
  },
]

export default function MarketplacePage() {
  const [credits] = useState(mockCredits)
  const [selectedCredit, setSelectedCredit] = useState<Credit | null>(null)
  const [showSellModal, setShowSellModal] = useState(false)
  const [onlyMine, setOnlyMine] = useState(false)

  const filteredCredits = onlyMine
    ? credits.filter(c => c.seller === 'Usina Solar Palmas') // mockado
    : credits

  return (
    <MarketPageLayout>
      {/* Barra de filtros */}
      <div className="mt-4">
        <CreditFilterBar
          onlyMine={onlyMine}
          setOnlyMine={setOnlyMine}
          onFilterChange={(value) => {
            setOnlyMine(value === 'MY_CREDITS')
          }}
        />
      </div>

      <div className="mt-6 bg-gray-900 rounded-xl p-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white">Colocar Créditos à Venda</h3>
          <p className="text-sm text-gray-400">
            Liste seus créditos disponíveis para venda no marketplace e defina o valor de cada unidade.
          </p>
        </div>
        <div>
          <Button
            className="bg-green-600 text-white"
            onClick={() => {
              const lastCredit = filteredCredits[filteredCredits.length - 1]
              setSelectedCredit({
                ...lastCredit,
                deviceType: 'neutraconect',
                generator: 'Gerador Padrão',
                serialNumber: 'NTL-001234',
                productionCity: lastCredit.location,
                createdAt: lastCredit.date,
              } as Credit)
              setShowSellModal(true)
            }}
          >
            Vender
          </Button>
        </div>
      </div>

      {/* Lista de créditos disponíveis */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCredits.map((c) => (
          <CreditCard
            key={c.id}
            credit={{
              ...c,
              deviceType: 'neutraconect',
              generator: 'Gerador Padrão',
              cityImageUrl: `/cities/${c.location.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s/g, '-')}.jpg?w=400&h=250&fit=cover`,
              flagUrl: '/flags/br.svg',
            }}
            onClick={() => {
              setSelectedCredit({
                ...c,
                deviceType: 'neutraconect',
                generator: 'Gerador Padrão',
                serialNumber: 'NTL-001234',
                productionCity: c.location,
                createdAt: c.date,
              } as Credit)
            }}
          />
        ))}
      </div>

      {/* Lista de créditos à venda */}
      <div className="mt-8">
        <SalesList
          credits={[]}
          onEdit={(credit: Credit) => {
            throw new Error('Function not implemented.')
          }}
          onRemove={(id: string) => {
            throw new Error('Function not implemented.')
          }}
        />
      </div>

      <SummaryPanel summary={{
        total: 0,
        certified: 0,
        preCertified: 0,
        sold: 0,
        estimatedValue: 0,
        impact: {
          co2Avoided: 0,
          treesEquivalent: 0
        }
      }} />

      {/* Modal de detalhes */}
      {selectedCredit && (
        <CreditDetailModal
          credit={selectedCredit}
          open={true}
          onClose={() => setSelectedCredit(null)}
        />
      )}

      {showSellModal && selectedCredit && (
        <SellModal
          open={true}
          onClose={() => setShowSellModal(false)}
          credit={selectedCredit}
          onConfirm={(data) => {
            console.log('Dados da venda:', data)
            setShowSellModal(false)
            setSelectedCredit(null) // garante que o modal de compra não seja disparado
          }}
        />
      )}
    </MarketPageLayout>
  )
}