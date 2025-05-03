'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [carbonCredits, setCarbonCredits] = useState(2493128.76);

  useEffect(() => {
    const interval = setInterval(() => {
      const variation = (Math.random() - 0.5) * 5;
      setCarbonCredits((prev) => Math.max(0, prev + variation));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Barra verde com contador */}
      <div className="bg-primary text-white text-center py-1 text-sm font-mono">
        <span className="hidden sm:inline">🌱 Créditos de carbono evitados: </span>
        <span className="inline sm:hidden">🌱 CO₂ evitados: </span>
        {carbonCredits.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}{" "}
        kg
      </div>

      {/* Menu principal */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="NeutraLink Logo"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/vender-creditos" className="hover:text-primary">
              Vender Créditos
            </Link>
            <Link href="/marketplace" className="hover:text-primary">
              Marketplace
            </Link>
            <Link href="/neutraconect" className="hover:text-primary">
              NeutraConect
            </Link>
            <div className="flex space-x-4 ml-6">
              <Link
                href="/register"
                className="bg-primary text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90"
              >
                Registre-se
              </Link>
              <Link
                href="/login"
                className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-black"
              >
                Login
              </Link>
            </div>
          </nav>

          {/* Botão mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden bg-black text-white flex flex-col space-y-4 px-6 py-4">
            <Link href="/vender-creditos" onClick={() => setMenuOpen(false)} className="hover:text-primary">
              Vender Créditos
            </Link>
            <Link href="/marketplace" onClick={() => setMenuOpen(false)} className="hover:text-primary">
              Marketplace
            </Link>
            <Link href="/neutraconect" onClick={() => setMenuOpen(false)} className="hover:text-primary">
              NeutraConect
            </Link>
            <Link href="/register" onClick={() => setMenuOpen(false)} className="bg-primary text-black px-4 py-2 rounded-lg font-semibold text-center">
              Registre-se
            </Link>
            <Link href="/login" onClick={() => setMenuOpen(false)} className="border border-primary text-primary px-4 py-2 rounded-lg font-semibold text-center">
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
