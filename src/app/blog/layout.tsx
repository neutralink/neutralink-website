// src/app/blog/layout.tsx
import Link from 'next/link'
import Image from 'next/image'
import React, { ReactNode } from 'react'

export const metadata = {
  title: 'Blog • NeutraLink',
  description: 'Notícias e artigos sobre NeutraLink e mercado de créditos de carbono',
}

type BlogLayoutProps = {
  children: ReactNode & {
    sidebar?: ReactNode
    main?: ReactNode
  }
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  const sidebar = (children as any).sidebar
  const main = (children as any).main

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black text-white flex items-center justify-between px-6 h-16">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="NeutraLink"
            width={180}
            height={54}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-[#00C37A]">Início</Link>
          <Link href="/blog" className="hover:text-[#00C37A]">Blog</Link>
          <Link href="#contato" className="hover:text-[#00C37A]">Contato</Link>
        </nav>
      </header>

      {/* CONTEÚDO */}
      <div className="pt-20 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* SIDEBAR */}
        <aside className="lg:col-span-3 space-y-12">
          {sidebar}
        </aside>
        {/* MAIN */}
        <main className="lg:col-span-9 space-y-16">
          {main}
        </main>
      </div>

  
    </div>
  )
}
