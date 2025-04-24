// src/components/StepCard.tsx
'use client'

import Image from 'next/image'

interface StepCardProps {
  image: string
  step: string
  title: string
  description: string
  reverse?: boolean  // se true, inverte ordem imagem/conteúdo
}

export function StepCard({
  image,
  step,
  title,
  description,
  reverse = false,
}: StepCardProps) {
  // classes para inverter o flex-row se `reverse` for true
  const containerClasses = reverse
    ? 'lg:flex-row-reverse'
    : 'lg:flex-row'

  return (
    <div className={`max-w-full lg:max-w-4xl w-full rounded overflow-hidden shadow-lg flex flex-col ${containerClasses}`}>
      <div className="lg:w-48 w-full h-48 lg:h-auto flex-none bg-cover">
        <Image
          src={image}
          alt={title}
          width={192}
          height={192}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="border border-gray-200 lg:border-l-0 lg:border-r px-6 py-4 flex flex-col justify-between">
        <div>
          <p className="text-sm font-bold text-gray-600 mb-1">{step}</p>
          <h4 className="font-bold text-xl text-gray-900 mb-2">{title}</h4>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}
