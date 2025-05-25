

'use client';

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Política de Privacidade
        </h1>

        <p className="text-neutral-300 mb-6 text-sm text-center">
          Última atualização: 25 de maio de 2025
        </p>

        <h2 className="text-xl font-semibold mb-2">1. Coleta de Informações</h2>
        <p className="text-neutral-300 mb-6">
          Coletamos dados fornecidos por você (nome, e-mail, CPF, endereço, etc.) e também dados automáticos como IP e localização aproximada.
        </p>

        <h2 className="text-xl font-semibold mb-2">2. Uso das Informações</h2>
        <p className="text-neutral-300 mb-6">
          Usamos seus dados para criar e gerenciar sua conta, emitir créditos de carbono, cumprir obrigações legais e melhorar a experiência na plataforma.
        </p>

        <h2 className="text-xl font-semibold mb-2">3. Compartilhamento</h2>
        <p className="text-neutral-300 mb-6">
          Não vendemos seus dados. Podemos compartilhá-los com autoridades legais ou parceiros certificadores como Verra ou Gold Standard.
        </p>

        <h2 className="text-xl font-semibold mb-2">4. Segurança</h2>
        <p className="text-neutral-300 mb-6">
          Utilizamos criptografia, autenticação JWT e HMAC-SHA256 para proteger suas informações. Monitoramos e auditamos constantemente nossa infraestrutura.
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Seus Direitos</h2>
        <p className="text-neutral-300 mb-6">
          Você pode solicitar acesso, correção, exclusão e portabilidade de seus dados a qualquer momento. Envie um e-mail para <span className="text-primary">contato@neutralinkeco.com</span>.
        </p>

        <p className="text-center text-sm text-neutral-500 mt-12">
          NeutraLink - EECS TECNOLOGIA . • CNPJ 59.187.936/0001-16 • Palmas – TO, Brasil
        </p>
      </div>
    </section>
  );
}