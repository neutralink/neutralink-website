'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  const heroMessages = [
    {
      title: 'Transforme energia solar em créditos de carbono',
      subtitle: 'A NeutraLink automatiza a geração de créditos com IoT, tokenização e certificação auditável.',
      buttonText: 'Comece agora',
      image: '/images/banner-1.jpg'
    },
    {
      title: 'Tokenize sua geração com rastreabilidade blockchain',
      subtitle: 'Segurança e transparência com a tecnologia do futuro.',
      buttonText: 'Ver como funciona',
      image: '/images/banner-2.jpg'
    },
    {
      title: 'Acompanhe o CO₂ evitado em tempo real',
      subtitle: 'Veja seus resultados com dados auditáveis e públicos.',
      buttonText: 'Acompanhar dados',
      image: '/images/banner-3.jpg'
    },
    {
      title: 'Venda ou certifique com segurança internacional',
      subtitle: 'Participe de pools certificados com alcance global.',
      buttonText: 'Solicitar certificação',
      image: '/images/banner-4.jpg'
    }
  ]

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768)
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % heroMessages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentHero = heroMessages[messageIndex]

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-white text-neutral-900">
      {/* HEADER */}
      <header className="w-full flex justify-between items-center px-6 py-4 bg-black text-white fixed top-0 left-0 z-50 h-16">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="NeutraLink logo" width={160} height={48} className="h-12 w-auto" priority />
        </div>
        {!isMobile ? (
          <nav className="space-x-6 text-sm tracking-wide">
            <a href="#como-funciona" className="hover:text-[#00C37A] transition">Como Funciona</a>
            <a href="#marketplace" className="hover:text-[#00C37A] transition">Marketplace</a>
            <a href="#painel" className="hover:text-[#00C37A] transition">Painel Público</a>
            <a href="#contato" className="hover:text-[#00C37A] transition">Contato</a>
          </nav>
        ) : (
          <a href="#cadastro" className="bg-[#00C37A] hover:bg-[#007B55] text-white font-medium px-4 py-2 rounded-lg text-sm transition">
            Cadastre-se
          </a>
        )}
      </header>

      {/* HERO ROTATIVO COM IMAGEM DE FUNDO */}
      <section
        className="w-full relative h-[480px] flex items-center justify-center text-center text-white px-6 mt-16 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentHero.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0 transition-opacity duration-1000" />
        <div className="relative z-10 max-w-3xl transition-opacity duration-1000 ease-in-out">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">{currentHero.title}</h2>
          <p className="text-lg text-neutral-200 mb-8">{currentHero.subtitle}</p>
          <a
            href="#cadastro"
            className="inline-block bg-[#00C37A] hover:bg-[#007B55] text-white font-medium px-6 py-3 rounded-lg transition"
          >
            {currentHero.buttonText}
          </a>
        </div>
      </section>

      {/* COMO FUNCIONA? */}
      <section id="como-funciona" className="w-full px-6 py-20 bg-gray-50 text-center">
  <h3 className="text-3xl font-bold text-[#007B55] mb-12">Como Funciona</h3>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
    
    {/* Card 1 */}
    <div className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <Image src="/cards/conecte.jpg" alt="Conecte" width={500} height={160} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 text-left">
        <h5 className="text-xl font-semibold text-neutral-800 mb-2">Conecte seu Inversor</h5>
        <p className="text-sm text-neutral-600 mb-4">Instale o NeutraConect na sua usina solar. O pareamento via QR Code leva menos de 1 minuto e inicia o monitoramento automático da geração.</p>
        <a href="#cadastro" className="inline-block text-sm text-white bg-[#00C37A] hover:bg-[#007B55] px-4 py-2 rounded transition">Saiba mais</a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <Image src="/cards/gere.jpg" alt="Gere créditos" width={500} height={160} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 text-left">
        <h5 className="text-xl font-semibold text-neutral-800 mb-2">Gere Créditos</h5>
        <p className="text-sm text-neutral-600 mb-4">A energia solar gerada é convertida em créditos de carbono pré-certificados com base em dados reais, validados e prontos para venda ou certificação.</p>
        <a href="#cadastro" className="inline-block text-sm text-white bg-[#00C37A] hover:bg-[#007B55] px-4 py-2 rounded transition">Simular</a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <Image src="/cards/acompanhe.jpg" alt="Acompanhe" width={500} height={160} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 text-left">
        <h5 className="text-xl font-semibold text-neutral-800 mb-2">Acompanhe Dados</h5>
        <p className="text-sm text-neutral-600 mb-4">Veja em tempo real o total de créditos gerados, o CO₂ evitado, o impacto ambiental e acompanhe o desempenho da sua usina pelo painel da NeutraLink.</p>
        <a href="#painel" className="inline-block text-sm text-white bg-[#00C37A] hover:bg-[#007B55] px-4 py-2 rounded transition">Ver painel</a>
      </div>
    </div>

    {/* Card 4 */}
    <div className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden">
      <div className="h-40 w-full overflow-hidden">
        <Image src="/cards/venda.jpg" alt="Venda ou certifique" width={500} height={160} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 text-left">
        <h5 className="text-xl font-semibold text-neutral-800 mb-2">Venda ou Certifique</h5>
        <p className="text-sm text-neutral-600 mb-4">Você pode vender seus créditos diretamente no nosso marketplace ou optar por submetê-los à certificação internacional em pools auditáveis.</p>
        <a href="#marketplace" className="inline-block text-sm text-white bg-[#00C37A] hover:bg-[#007B55] px-4 py-2 rounded transition">Acessar</a>
      </div>
    </div>

  </div>
</section>

      {/* RODAPÉ */}
      <footer className="w-full bg-neutral-900 text-white pt-12 px-6 mt-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

    {/* COLUNA 1 */}
    <div>
      <Image
        src="/logo.svg"
        alt="Logo NeutraLink"
        width={160}
        height={48}
        className="h-10 w-auto mb-4"
      />
      <p className="text-sm text-neutral-400">
        A NeutraLink transforma a energia solar em créditos de carbono certificados. Democratizamos o acesso ao mercado voluntário de carbono com tecnologia, segurança e rastreabilidade.
      </p>
    </div>

    {/* COLUNA 2 */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Navegação</h4>
      <ul className="space-y-2 text-sm text-neutral-300">
        <li><a href="#como-funciona" className="hover:text-[#00C37A]">Como Funciona</a></li>
        <li><a href="#marketplace" className="hover:text-[#00C37A]">Marketplace</a></li>
        <li><a href="#painel" className="hover:text-[#00C37A]">Painel Público</a></li>
        <li><a href="#cadastro" className="hover:text-[#00C37A]">Cadastre-se</a></li>
        <li><a href="/blog" className="hover:text-[#00C37A]">Blog</a></li>
        <li><a href="/faq" className="hover:text-[#00C37A]">FAQ</a></li>
        <li><a href="/contato" className="hover:text-[#00C37A]">Suporte</a></li>
      </ul>
    </div>

    {/* COLUNA 3 */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Conformidade e Certificação</h4>
      <ul className="space-y-2 text-sm text-neutral-300">
        <li>LGPD — Lei Geral de Proteção de Dados</li>
        <li>Certificação GHG Protocol</li>
        <li>Verra Standard | Gold Standard</li>
        <li>Blockchain Transparente (NTL Token)</li>
        <li><a href="/termos" className="hover:text-[#00C37A]">Termos de Uso</a></li>
        <li><a href="/privacidade" className="hover:text-[#00C37A]">Política de Privacidade</a></li>
      </ul>
    </div>

    {/* COLUNA 4 - Marketplace */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Marketplace</h4>
      <ul className="space-y-2 text-sm text-neutral-300">
        <li><a href="/marketplace" className="hover:text-[#00C37A]">Ver Créditos Disponíveis</a></li>
        <li><a href="/simulador" className="hover:text-[#00C37A]">Simular Compra</a></li>
        <li><a href="/vender" className="hover:text-[#00C37A]">Vender Créditos</a></li>
        <li><a href="/historico" className="hover:text-[#00C37A]">Histórico de Preços</a></li>
        <li><a href="/ajuda-empresas" className="hover:text-[#00C37A]">Ajuda para Empresas</a></li>
      </ul>
    </div>
  </div>

  {/* FORMAS DE PAGAMENTO */}
  <div className="mt-12 border-t border-neutral-800 pt-8 pb-6 text-center bg-neutral-900">
    <h4 className="text-sm text-neutral-400 mb-4">Formas de Pagamento Aceitas</h4>
    <div className="flex justify-center items-center gap-6">
      <Image src="/icons/visa.svg" alt="Visa" width={40} height={40} />
      <Image src="/icons/mastercard.svg" alt="Mastercard" width={40} height={40} />
      <Image src="/icons/pix.svg" alt="Pix" width={40} height={40} />
      <Image src="/icons/paypal.svg" alt="PayPal" width={40} height={40} />
    </div>
  </div>

  {/* LINHA FINAL */}
  <div className="mt-6 text-center text-xs text-neutral-500 border-t border-neutral-800 pt-6">
    NeutraLink S.A. • CNPJ 00.000.000/0001-00 • Palmas - TO, Brasil<br />
    © {new Date().getFullYear()} Todos os direitos reservados.
  </div>
</footer>
    </main>
  )
}

