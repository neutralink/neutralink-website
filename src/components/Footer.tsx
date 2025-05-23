// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Coluna 1: Logo + Descrição */}
        <div>
          <Link href="/">
            <Image src="/logo-footer.svg" alt="NeutraLink" width={160} height={48} className="mb-4" />
          </Link>
          <p className="text-sm text-neutral-400 mb-6">
            Democratizamos o mercado voluntário de carbono com tecnologia, segurança e rastreabilidade.
          </p>

          {/* Ícones sociais */}
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h4 className="font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="#como-funciona" className="hover:text-primary">Como Funciona</Link></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><Link href="#marketplace" className="hover:text-primary">Marketplace</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contato</Link></li>
            <li><Link href="/vender-creditos" className="hover:text-primary">Vender Créditos</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Conformidade */}
        <div>
          <h4 className="font-semibold mb-4">Conformidade</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>LGPD</li>
            <li>GHG Protocol</li>
            <li>Verra & Gold Standard</li>
            <li><Link href="/terms" className="hover:text-primary">Termos de Uso</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Marketplace */}
        <div>
          <h4 className="font-semibold mb-4">Marketplace</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="/marketplace" className="hover:text-primary">Ver Créditos</Link></li>
            <li><Link href="/simulator" className="hover:text-primary">Simular Compra</Link></li>
            <li><Link href="/sell" className="hover:text-primary">Vender Créditos</Link></li>
          </ul>
        </div>

      </div>

      {/* Formas de pagamento */}
      <div className="mt-12 border-t border-neutral-800 pt-8">
        <div className="text-center text-sm text-neutral-400 mb-6">Formas de Pagamento</div>
        <div className="flex justify-center items-center gap-6 mb-8">
          <Image src="/icons/visa.svg" alt="Visa" width={40} height={40} />
          <Image src="/icons/mastercard.svg" alt="Mastercard" width={40} height={40} />
          <Image src="/icons/pix.svg" alt="Pix" width={40} height={40} />
          <Image src="/icons/paypal.svg" alt="PayPal" width={40} height={40} />
        </div>
      </div>

      {/* CNPJ e Direitos Reservados */}
      <div className="border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
        EECS Tecnologia - NeutraLink • CNPJ 59.187.936/0001-16 • Palmas – TO, Brasil<br />
        © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
}
