import Image from 'next/image';

export default function HowNeutraconectWorks() {
  const steps = [
    {
      icon: 'solar-panel',
      title: '1. Leitura da Energia',
      desc: 'Captura dados via RS485, gateway Modbus ou sensor SCT-013 em tempo real.',
    },
    {
      icon: 'shield-check',
      title: '2. Assinatura Digital',
      desc: 'Gera uma assinatura HMAC-SHA256 com base na chave secreta única do dispositivo.',
    },
    {
      icon: 'upload-cloud',
      title: '3. Envio Seguro',
      desc: 'Os dados são transmitidos com criptografia e hash do firmware validado.',
    },
    {
      icon: 'coin',
      title: '4. Tokenização Automática',
      desc: 'A plataforma converte os dados em créditos de carbono pré-certificados em tempo real.',
    },
  ];

  return (
    <section className="bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Como o NeutraConect Funciona
        </h2>
        <p className="text-lg text-neutral-700 max-w-3xl mx-auto mb-12">
          Da usina para o blockchain: descubra como seu crédito de carbono é validado e tokenizado automaticamente.
        </p>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-neutral-100 border border-neutral-200 rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <div className="mb-4">
                <Image
                  src={`/icons/${step.icon}.svg`}
                  alt={step.title}
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
