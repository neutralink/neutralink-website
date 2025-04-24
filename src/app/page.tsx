// src/app/page.tsx
'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CreditCard } from '@/components/CreditCard'
import { Cpu, Database, Hash, ShoppingCart } from 'lucide-react'
import FeaturesSection from '@/components/Features'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)

  const heroMessages = [
    {
      title: 'Transforme energia solar em créditos de carbono',
      subtitle:
        'A NeutraLink automatiza a geração de créditos com IoT, tokenização e certificação auditável.',
      buttonText: 'Comece agora',
      image: '/images/banner-1.jpg',
    },
    {
      title: 'Tokenize sua geração com rastreabilidade blockchain',
      subtitle: 'Segurança e transparência com a tecnologia do futuro.',
      buttonText: 'Ver como funciona',
      image: '/images/banner-2.jpg',
    },
    {
      title: 'Acompanhe o CO₂ evitado em tempo real',
      subtitle: 'Veja seus resultados com dados auditáveis e públicos.',
      buttonText: 'Acompanhar dados',
      image: '/images/banner-3.jpg',
    },
    {
      title: 'Venda ou certifique com segurança internacional',
      subtitle: 'Participe de pools certificados com alcance global.',
      buttonText: 'Solicitar certificação',
      image: '/images/banner-4.jpg',
    },
  ]

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const iv = setInterval(() => {
      setMessageIndex((i) => (i + 1) % heroMessages.length)
    }, 6000)
    return () => clearInterval(iv)
  }, [heroMessages.length])

  const currentHero = heroMessages[messageIndex]

  return (
    <main className="min-h-screen flex flex-col bg-white text-neutral-900">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black text-white flex items-center justify-between px-6 h-16">
        <Image
          src="/logo.svg"
          alt="NeutraLink"
          width={180}
          height={54}
          quality={100}
          className="h-12 w-auto"
          priority
        />
        {!isMobile ? (
          <nav className="space-x-6 text-sm">
            <a href="#como-funciona" className="hover:text-[#00C37A]">Como Funciona</a>
            <a href="#marketplace" className="hover:text-[#00C37A]">Marketplace</a>
            <a href="#contato" className="hover:text-[#00C37A]">Contato</a>
          </nav>
        ) : (
          <a
            href="#cadastro"
            className="bg-[#00C37A] hover:bg-[#007B55] px-4 py-2 rounded-lg text-sm"
          >
            Cadastre-se
          </a>
        )}
      </header>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 h-[480px] w-full flex items-center justify-center text-white px-6 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${currentHero.image})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 text-center max-w-3xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">{currentHero.title}</h1>
          <p className="text-lg text-neutral-200 mb-8">{currentHero.subtitle}</p>
          <motion.a
            href="#cadastro"
            className="inline-block bg-[#00C37A] hover:bg-[#007B55] px-6 py-3 rounded-lg text-white font-medium"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {currentHero.buttonText}
          </motion.a>
        </motion.div>
      </motion.section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Passo 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-green-100 rounded-full mb-6">
                <Cpu className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Conecte Seu Dispositivo</h3>
              <p className="text-neutral-600">
                Instale o NeutraConect no seu inversor solar e faça o pareamento via QR Code em menos de 1 minuto.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-blue-100 rounded-full mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gere e Registre Dados</h3>
              <p className="text-neutral-600">
                O firmware assina digitalmente cada leitura e o backend valida e tokeniza cada tonelada de CO₂.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-yellow-100 rounded-full mb-6">
                <Hash className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tokenize Seus Créditos</h3>
              <p className="text-neutral-600">
                Receba automaticamente NTL pré-certificados ou solicite certificação oficial em pools auditados.
              </p>
            </div>

            {/* Passo 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
              <div className="p-4 bg-purple-100 rounded-full mb-6">
                <ShoppingCart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Negocie no Marketplace</h3>
              <p className="text-neutral-600">
                Ofereça seus créditos pré-certificados ou certificados, definindo preço com suporte de oráculos de mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES DO MARKETPLACE */}
      <section id="marketplace" className="py-20 bg-gray-100 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#007B55] mb-12">Destaques do Marketplace</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <CreditCard
              image="/cards/minas.jpg"
              location="MG, Brasil"
              certifier="Projeto Solar Minas"
              flag="/flags/br.svg"
              amount={5}
              currency="R$"
              price="19,90"
              badge="Certificado"
              badgeColor="bg-green-500"
              href="/projeto/minas"
            />
            <CreditCard
              image="/cards/andes.jpg"
              location="Quito, Equador"
              certifier="EcoAndes"
              flag="/flags/ec.svg"
              amount={6}
              currency="USD"
              price="14,50"
              badge="Pré-certificado"
              badgeColor="bg-yellow-400"
              href="/projeto/andes"
            />
          </div>
        </div>
      </section>

      {/* RECURSOS E VANTAGENS */}
      <FeaturesSection />
      
      {/* CALL TO ACTION */}
<section
  id="cta"
  className="relative w-full h-64 sm:h-80 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1567667026108-33531d4258a0?auto=format&fit=crop&w=1350&q=80')",
  }}
>
  {/* overlay escuro */}
  <div className="absolute inset-0 bg-black/100" />
  <div className="relative z-10 max-w-3xl mx-auto h-full flex flex-col items-center justify-center text-center px-4">
    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
      Pronto para transformar sua energia em valor real?
    </h2>
    <p className="text-white/90 mb-6">
      Cadastre-se Gratuitamente ou Solicite uma Demonstração.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="/cadastro"
        className="bg-[#00C37A] hover:bg-[#007B55] text-white font-medium px-6 py-3 rounded-lg transition"
      >
        Cadastre-se Gratuitamente
      </a>
      <a
        href="/demo"
        className="border border-white hover:bg-white hover:text-black text-white font-medium px-6 py-3 rounded-lg transition"
      >
        Solicitar Demonstração
      </a>
    </div>
  </div>
</section>


      {/* RODAPÉ */}
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
              <li><a href="/termos" className="hover:text-[#00C37A]">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="/marketplace" className="hover:text-[#00C37A]">Ver Créditos</a></li>
              <li><a href="/simulador" className="hover:text-[#00C37A]">Simular Compra</a></li>
              <li><a href="/vender" className="hover:text-[#00C37A]">Vender Créditos</a></li>
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
    </main>
  )
}