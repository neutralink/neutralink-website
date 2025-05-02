import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Venda seus Créditos de Carbono | Plataforma NeutraLink',
  description:
    'Empresas e governos podem vender seus créditos de carbono com segurança, rastreabilidade e liquidez na NeutraLink. Descubra como participar.',
};

export default function VenderCreditosPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero */}
      <section
        className="relative text-white py-24 px-6 bg-cover bg-center bg-black"
        style={{
          backgroundImage: "url('/backgrounds/hero-vender.jpg')",
        }}
      >
        {/* Overlay com transparência */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Conteúdo */}
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Venda seus Créditos de Carbono com Tecnologia e Transparência
            </h1>
            <p className="text-lg text-neutral-100 mb-6">
              A NeutraLink é a ponte entre projetos sustentáveis e o mercado voluntário de carbono. Transforme seus dados em ativos digitais valiosos.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-primary text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Começar agora
            </Link>
          </div>
          <div className="relative w-full h-80">
            <Image
              src="/illustrations/sustainable-growth.jpg"
              alt="Venda de Créditos"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Por que tão poucos projetos vendem seus créditos?
          </h2>
          <p className="text-lg text-neutral-700">
            Altos custos de certificação, burocracia, falta de rastreabilidade e pouca visibilidade são barreiras reais. A NeutraLink resolve isso com IoT, blockchain e um marketplace digital.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-neutral-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Como funciona na NeutraLink
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: 'Cadastro',
                desc: 'Registre sua organização e seus dados de emissão ou geração de créditos.',
                icon: 'user-plus',
              },
              {
                title: 'Validação',
                desc: 'Análise automática via IoT ou documentação técnica.',
                icon: 'check-circle',
              },
              {
                title: 'Tokenização',
                desc: 'Transformamos seus créditos em tokens rastreáveis.',
                icon: 'database',
              },
              {
                title: 'Venda direta',
                desc: 'Seus créditos ficam disponíveis no marketplace da NeutraLink.',
                icon: 'shopping-cart',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-neutral-200 p-6 rounded-lg shadow hover:shadow-lg transition text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4">
                  <Image
                    src={`/icons/${item.icon}.svg`}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Benefícios para sua organização
            </h2>
            <ul className="list-disc list-inside text-neutral-300 space-y-3">
              <li>Economia em processos de certificação e auditoria</li>
              <li>Renda recorrente com venda de créditos tokenizados</li>
              <li>Dashboard com rastreabilidade e impacto ambiental</li>
              <li>Conformidade com padrões internacionais</li>
            </ul>
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/illustrations/environment-impact.svg"
              alt="Benefícios"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary text-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para vender seus créditos?
          </h3>
          <p className="text-lg mb-6">
            Nossa equipe está pronta para ajudar você a integrar seu projeto,
            validar os dados e publicar no marketplace.
          </p>
          <Link
            href="/contato"
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded-lg hover:opacity-90 transition"
          >
            Falar com um especialista
          </Link>
        </div>
      </section>
    </div>
  );
}
