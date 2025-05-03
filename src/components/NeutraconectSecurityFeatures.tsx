import Image from 'next/image';

export default function NeutraconectSecurityFeatures() {
  const items = [
    {
      icon: 'key-round',
      title: 'Chave Secreta Única',
      desc: 'Cada dispositivo é registrado com uma chave única de 256 bits para autenticação criptográfica.',
    },
    {
      icon: 'fingerprint',
      title: 'Verificação de Firmware',
      desc: 'A plataforma valida o hash do firmware antes de aceitar qualquer dado enviado.',
    },
    {
      icon: 'alert-octagon',
      title: 'Rejeição de Dados Inválidos',
      desc: 'Tentativas de envio não autorizado são automaticamente bloqueadas e geram alertas.',
    },
  ];

  return (
    <section
      className="relative text-white py-24 px-6 bg-black bg-cover bg-center"
      style={{
        backgroundImage: "url('/backgrounds/security-features-bg.jpg')",
      }}
    >
      {/* Overlay com transparência */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Segurança em Primeiro Lugar
        </h2>
        <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-12">
          Cada NeutraConect é construído com os mais altos padrões de segurança industrial para garantir a autenticidade, integridade e privacidade dos dados.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-neutral-800 bg-opacity-90 border border-neutral-700 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="mb-4 flex items-center justify-center w-16 h-16 bg-neutral-700 rounded-full">
                <Image
                  src={`/icons/${item.icon}.svg`}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
