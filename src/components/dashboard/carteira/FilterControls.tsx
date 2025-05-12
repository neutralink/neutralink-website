'use client'

export default function FilterControls() {
  return (
    <div className="flex gap-2 text-sm text-gray-400 mt-4">
      <button className="hover:text-white">Todos</button>
      <button className="hover:text-white">Certificados</button>
      <button className="hover:text-white">Vendidos</button>
      <button className="hover:text-white">Comprados</button>
    </div>
  )
}