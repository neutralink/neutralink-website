'use client'

export default function CreditTable({ data }: { data: any[] }) {
  return (
    <div className="bg-gray-900 rounded-xl mt-2 divide-y divide-neutral-800">
      {data.map((c) => (
        <div key={c.id} className="flex justify-between items-center px-4 py-3 text-sm">
          <div className="text-white font-medium">Crédito #{c.id}</div>
          <div className="text-gray-400">{c.amount} NTL</div>
          <div className="text-xs capitalize">{c.status.toLowerCase()}</div>
          <div className="text-xs text-gray-500">{c.date}</div>
        </div>
      ))}
    </div>
  )
}