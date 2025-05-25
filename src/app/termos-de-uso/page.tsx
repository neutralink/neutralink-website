'use client';

export default function TermsPage() {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Termos de Uso e Política de Privacidade
        </h1>

        <p className="text-neutral-300 mb-6 text-sm text-center">
          Última atualização: 25 de maio de 2025
        </p>

        {/* Política de Privacidade */}
        <h2 className="text-xl font-semibold mb-2">Política de Privacidade</h2>
        <p className="text-neutral-300 mb-6">
          A NeutraLink valoriza sua privacidade. Esta Política explica como coletamos, usamos e protegemos suas informações.
        </p>

        <h3 className="text-lg font-semibold mb-2">1. Coleta de Informações</h3>
        <p className="text-neutral-300 mb-6">
          Coletamos dados fornecidos por você (nome, e-mail, CPF, endereço, etc.) e também dados automáticos como IP e localização aproximada.
        </p>

        <h3 className="text-lg font-semibold mb-2">2. Uso das Informações</h3>
        <p className="text-neutral-300 mb-6">
          Usamos seus dados para: criar sua conta, emitir créditos de carbono, cumprir obrigações legais e melhorar a experiência na plataforma.
        </p>

        <h3 className="text-lg font-semibold mb-2">3. Compartilhamento</h3>
        <p className="text-neutral-300 mb-6">
          Não vendemos seus dados. Podemos compartilhar com autoridades legais e certificadoras como Verra e Gold Standard.
        </p>

        <h3 className="text-lg font-semibold mb-2">4. Segurança</h3>
        <p className="text-neutral-300 mb-6">
          Utilizamos criptografia, autenticação JWT e validação via HMAC-SHA256 para proteger suas informações.
        </p>

        <h3 className="text-lg font-semibold mb-2">5. Direitos do Usuário</h3>
        <p className="text-neutral-300 mb-6">
          Você pode solicitar acesso, correção, exclusão e portabilidade de dados, além de revogar consentimentos.
        </p>

        {/* Termos de Uso */}
        <h2 className="text-xl font-semibold mt-12 mb-2">Termos de Uso</h2>

        <h3 className="text-lg font-semibold mb-2">1. Cadastro</h3>
        <p className="text-neutral-300 mb-6">
          O uso da plataforma exige o fornecimento de dados verídicos. O acesso é pessoal e intransferível.
        </p>

        <h3 className="text-lg font-semibold mb-2">2. Funcionalidades</h3>
        <p className="text-neutral-300 mb-6">
          A NeutraLink permite registro de dispositivos IoT, emissão de créditos de carbono e transações via marketplace.
        </p>

        <h3 className="text-lg font-semibold mb-2">3. Responsabilidades</h3>
        <p className="text-neutral-300 mb-6">
          O usuário é responsável pelos dados inseridos e pela confidencialidade do acesso.
        </p>

        <h3 className="text-lg font-semibold mb-2">4. Propriedade Intelectual</h3>
        <p className="text-neutral-300 mb-6">
          Todo conteúdo da NeutraLink é protegido. É proibido copiar, modificar ou redistribuir sem autorização.
        </p>

        <h3 className="text-lg font-semibold mb-2">5. Suspensão e Encerramento</h3>
        <p className="text-neutral-300 mb-6">
          A NeutraLink pode suspender ou encerrar contas em caso de violação destes termos ou uso indevido da plataforma.
        </p>

        {/* Contato */}
        <h2 className="text-xl font-semibold mt-12 mb-2">Contato</h2>
        <p className="text-neutral-300 mb-6">
          Para dúvidas ou solicitações, entre em contato pelo e-mail: <span className="text-primary">contato@neutralinkeco.com</span>
        </p>

        <p className="text-center text-sm text-neutral-500 mt-12">
          NeutraLink - EECS TECNOLOGIA . • CNPJ 59.187.936/0001-16 • Palmas – TO, Brasil
        </p>
      </div>
    </section>
  );
}
