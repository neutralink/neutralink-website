// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'; // Importar o Image do Next.js

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"   // aqui você coloca o caminho da sua logo
            alt="NeutraLink Logo"
            width={160}        // ajusta a largura (pode ser 140 ou 160)
            height={48}        // altura proporcional
            className="h-12 w-auto"
            priority          // carrega a logo rápido
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="#como-funciona" className="hover:text-primary">Como Funciona</Link>
          <Link href="marketplace" className="hover:text-primary">Marketplace</Link>
          <Link href="/blog" className="hover:text-primary">Blog</Link>
          <div className="flex space-x-4 ml-6">
            <Link href="/register" className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90">
              Registre-se
            </Link>
            <Link href="/login" className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-black">
              Login
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col space-y-4 px-6 py-4">
          <Link href="#como-funciona" onClick={() => setMenuOpen(false)} className="hover:text-primary">Como Funciona</Link>
          <Link href="#marketplace" onClick={() => setMenuOpen(false)} className="hover:text-primary">Marketplace</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="hover:text-primary">Blog</Link>
          <Link href="/register" onClick={() => setMenuOpen(false)} className="bg-primary text-black px-4 py-2 rounded-lg font-semibold text-center">
            Registre-se
          </Link>
          <Link href="/login" onClick={() => setMenuOpen(false)} className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold text-center">
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
