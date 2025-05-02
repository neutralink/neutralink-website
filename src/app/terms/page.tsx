'use client';

export default function TermsPage() {
  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Termos de Uso e Política de Privacidade
        </h1>

        <p className="text-neutral-300 mb-6 text-sm text-center">
          Última atualização: Abril de 2025
        </p>

        {/* 1. INTRODUÇÃO */}
        <h2 className="text-xl font-semibold mb-2">1. Introdução</h2>
        <p className="text-neutral-300 mb-6">
          Bem-vindo à NeutraLink. Ao utilizar nossa plataforma, você concorda com os termos e condições descritos neste documento. Caso não concorde com alguma cláusula, recomendamos que não utilize nossos serviços.
        </p>

        {/* 2. DADOS COLETADOS */}
        <h2 className="text-xl font-semibold mb-2">2. Dados Coletados</h2>
        <p className="text-neutral-300 mb-2">
          Coletamos as seguintes informações:
        </p>
        <ul className="list-disc list-inside text-neutral-300 mb-6 space-y-1">
          <li>Nome completo e CPF (quando aplicável)</li>
          <li>Endereço de e-mail e telefone</li>
          <li>Endereço completo para fins de verificação</li>
          <li>Dados de geração solar vinculados aos dispositivos IoT</li>
          <li>Endereço IP, localização aproximada e dados técnicos do navegador</li>
        </ul>

        {/* 3. USO DAS INFORMAÇÕES */}
        <h2 className="text-xl font-semibold mb-2">3. Finalidade do Uso das Informações</h2>
        <p className="text-neutral-300 mb-6">
          Os dados coletados são utilizados para:
        </p>
        <ul className="list-disc list-inside text-neutral-300 mb-6 space-y-1">
          <li>Emitir créditos de carbono de forma validada e rastreável</li>
          <li>Emitir notas fiscais e comprovantes de transações</li>
          <li>Entrar em contato com o usuário para atualizações operacionais</li>
          <li>Cumprir obrigações legais e regulatórias</li>
        </ul>

        {/* 4. COMPARTILHAMENTO */}
        <h2 className="text-xl font-semibold mb-2">4. Compartilhamento de Dados</h2>
        <p className="text-neutral-300 mb-6">
          Não vendemos seus dados. Podemos compartilhar suas informações com:
        </p>
        <ul className="list-disc list-inside text-neutral-300 mb-6 space-y-1">
          <li>Auditorias e certificadoras homologadas (Verra, Gold Standard, etc.)</li>
          <li>Autoridades fiscais ou órgãos reguladores, se exigido por lei</li>
          <li>Provedores de infraestrutura tecnológica contratados pela NeutraLink</li>
        </ul>

        {/* 5. SEGURANÇA */}
        <h2 className="text-xl font-semibold mb-2">5. Segurança da Informação</h2>
        <p className="text-neutral-300 mb-6">
          Utilizamos criptografia, autenticação, tokens JWT e validação via HMAC-SHA256 para garantir que seus dados sejam armazenados e transmitidos de forma segura.
        </p>

        {/* 6. DIREITOS DO TITULAR (LGPD) */}
        <h2 className="text-xl font-semibold mb-2">6. Direitos do Titular de Dados</h2>
        <p className="text-neutral-300 mb-2">
          Em conformidade com a LGPD (Lei nº 13.709/18), você pode, a qualquer momento:
        </p>
        <ul className="list-disc list-inside text-neutral-300 mb-6 space-y-1">
          <li>Solicitar acesso aos seus dados pessoais</li>
          <li>Solicitar correção, anonimização ou exclusão</li>
          <li>Revogar consentimento de uso</li>
          <li>Solicitar portabilidade dos dados</li>
        </ul>

        {/* 7. COOKIES E TECNOLOGIAS DE RASTREAMENTO */}
        <h2 className="text-xl font-semibold mb-2">7. Cookies e Tecnologias</h2>
        <p className="text-neutral-300 mb-6">
          Utilizamos cookies para melhorar sua experiência e para fins analíticos. Você pode gerenciar suas preferências nas configurações do navegador.
        </p>

        {/* 8. ALTERAÇÕES */}
        <h2 className="text-xl font-semibold mb-2">8. Alterações nos Termos</h2>
        <p className="text-neutral-300 mb-6">
          Reservamo-nos o direito de alterar estes termos e nossa política de privacidade. Recomendamos a leitura periódica deste documento.
        </p>

        {/* 9. CONTATO */}
        <h2 className="text-xl font-semibold mb-2">9. Contato</h2>
        <p className="text-neutral-300 mb-6">
          Em caso de dúvidas, sugestões ou solicitações relacionadas à privacidade, entre em contato pelo e-mail: <span className="text-primary">privacidade@neutralinkeco.com</span>
        </p>

        <p className="text-center text-sm text-neutral-500 mt-12">
          NeutraLink S.A. • CNPJ 00.000.000/0001-00 • Palmas – TO, Brasil
        </p>
      </div>
    </section>
  );
}
