import Image from 'next/image';

export default function NeutraconectBenefits() {
  const benefits = [
    {
      icon: 'bolt',
      title: 'Geração de Receita',
      desc: 'Cada kWh lido é convertido automaticamente em créditos de carbono tokenizados.',
    },
    {
      icon: 'lock',
      title: 'Segurança de ponta',
      desc: 'HMAC-SHA256, hash de firmware, rejeição de dados inválidos: tudo validado na origem.',
    },
    {
      icon: 'wifi',
      title: 'Conectividade fácil',
      desc: 'Wi-Fi integrado, operação offline com cache local e envio posterior seguro.',
    },
    {
      icon: 'cloud-sync',
      title: 'Atualizações OTA',
      desc: 'Firmware atualizado pela nuvem, sem necessidade de reconfiguração local.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-neutral-100 text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que o NeutraConect é único?
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Mais que um medidor: um emissor automático de valor para seu projeto sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex gap-6 items-start bg-white border border-neutral-200 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <Image
                src={`/icons/${item.icon}.svg`}
                alt={item.title}
                width={48}
                height={48}
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-neutral-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
