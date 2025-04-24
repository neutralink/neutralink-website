// src/components/HorizontalCard.tsx
'use client'

import React from 'react'

export interface HorizontalCardProps {
  /** URL da imagem de fundo */
  image: string
  /** Tag pequena no topo (por ex. “Members only” ou “Passo 1”) */
  label: string
  /** Título principal */
  title: string
  /** Descrição */
  description: string
  /** URL do avatar */
  avatar: string
  /** Nome do autor/texto secundário */
  author: string
  /** Data ou subtítulo */
  date: string
}

export function HorizontalCard({
  image,
  label,
  title,
  description,
  avatar,
  author,
  date,
}: HorizontalCardProps) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg rounded overflow-hidden">
      {/* esquerda: imagem de fundo */}
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        title={title}
      />
      {/* direita: conteúdo */}
      <div className="border border-gray-300 lg:border-l-0 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-600 flex items-center mb-2">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 
                       2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 
                       2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            {label}
          </p>
          <div className="font-bold text-xl text-gray-900 mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="flex items-center mt-4">
          <img
            className="w-10 h-10 rounded-full mr-4 object-cover"
            src={avatar}
            alt={`Avatar de ${author}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{author}</p>
            <p className="text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
