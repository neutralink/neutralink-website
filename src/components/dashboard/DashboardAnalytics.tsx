// src/components/DashboardAnalytics.tsx
import GenerationChart from "./charts/GenerationChart"
import DeviceDistributionChart from "./charts/DeviceDistributionChart"
import SalesBarChart from "./charts/SalesBarChart"
import CombinedPerformanceChart from "./charts/CombinedPerformanceChart"

export default function DashboardAnalytics() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-12">
      <div className="bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-white text-lg font-semibold mb-4">Geração nos últimos 7 dias</h2>
        <GenerationChart />
      </div>

      <div className="bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-white text-lg font-semibold mb-4">Distribuição de Dispositivos</h2>
        <DeviceDistributionChart />
      </div>

      <div className="bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-white text-lg font-semibold mb-4">Créditos Vendidos por Semana</h2>
        <SalesBarChart />
      </div>

      <div className="bg-gray-900 p-6 rounded-xl shadow-md">
        <h2 className="text-white text-lg font-semibold mb-4">Comparativo Geração vs Certificação</h2>
        <CombinedPerformanceChart />
      </div>
    </div>
  )
}