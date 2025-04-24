// src/app/layout.tsx
import './globals.css'   // seu Tailwind / resets
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'NeutraLink',
  description: 'Plataforma de créditos de carbono tokenizados',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-neutral-900 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black text-white flex items-center justify-between px-6 h-12">
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
            <Link href="#como-funciona" className="hover:text-[#00C37A]">Como Funciona</Link>
            <Link href="#marketplace" className="hover:text-[#00C37A]">Marketplace</Link>
            <Link href="/blog" className="hover:text-[#00C37A]">Blog</Link>
            <Link href="#contato" className="hover:text-[#00C37A]">Contato</Link>
          </nav>
        </header>

        {/* ESTE MAIN RECEBE TODO CONTEÚDO DAS PAGES */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-neutral-900 text-white pt-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <Image src="/logo-footer.svg" alt="NeutraLink" width={160} height={48} className="mb-4" />
              <p className="text-sm text-neutral-400">
                Democratizamos o mercado voluntário de carbono com tecnologia, segurança e rastreabilidade.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li><a href="#como-funciona" className="hover:text-[#00C37A]">Como Funciona</a></li>
                <li><a href="#marketplace" className="hover:text-[#00C37A]">Marketplace</a></li>
                <li><a href="#contato" className="hover:text-[#00C37A]">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Conformidade</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>LGPD</li>
                <li>GHG Protocol</li>
                <li>Verra & Gold Standard</li>
                <li><Link href="/termos" className="hover:text-[#00C37A]">Termos de Uso</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li><Link href="/marketplace" className="hover:text-[#00C37A]">Ver Créditos</Link></li>
                <li><Link href="/simulador" className="hover:text-[#00C37A]">Simular Compra</Link></li>
                <li><Link href="/vender" className="hover:text-[#00C37A]">Vender Créditos</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-800 pt-8 text-center">
            <h5 className="text-sm text-neutral-400 mb-4">Formas de Pagamento</h5>
            <div className="flex justify-center items-center gap-6">
              <Image src="/icons/visa.svg" alt="Visa" width={40} height={40} />
              <Image src="/icons/mastercard.svg" alt="Mastercard" width={40} height={40} />
              <Image src="/icons/pix.svg" alt="Pix" width={40} height={40} />
              <Image src="/icons/paypal.svg" alt="PayPal" width={40} height={40} />
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-neutral-500 border-t border-neutral-800 pt-6">
            NeutraLink S.A. • CNPJ 00.000.000/0001-00 • Palmas – TO, Brasil<br />
            © {new Date().getFullYear()} Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  )
}
