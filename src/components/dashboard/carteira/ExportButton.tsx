'use client'

import { Download } from 'lucide-react'

export default function ExportButton({ data }: { data: any[] }) {
  const handleExport = () => {
    alert('Exportação de CSV/PDF ainda não implementada.')
  }

  return (
    <button onClick={handleExport} className="text-sm text-green-400 hover:underline flex items-center gap-1">
      <Download size={16} /> Exportar
    </button>
  )
}