'use client'
import Image from 'next/image'

interface StepCardProps {
  image: string
  etapa: string
  titulo: string
  texto: string
}

export function StepCard({ image, etapa, titulo, texto }: StepCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-2/5 w-full">
        <Image src={image} alt={titulo} width={640} height={480} className="h-full w-full object-cover" />
      </div>
      <div className="p-6 md:w-3/5 w-full flex flex-col justify-center">
        <p className="text-sm font-bold uppercase text-[#00C37A] mb-2">{etapa}</p>
        <h4 className="text-xl font-semibold mb-2">{titulo}</h4>
        <p className="text-neutral-600">{texto}</p>
      </div>
    </div>
  )
}
