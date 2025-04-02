export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-black shadow-md sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" className="flex items-center">
      <img src="/logo.png" alt="NeutraLink Logo" className="h-10 w-auto" />
    </a>
    <nav className="flex items-center space-x-4">
      <a href="#sobre" className="text-white hover:text-blue-500">Sobre</a>
      <a href="#como-funciona" className="text-white hover:text-blue-500">Como Funciona</a>
      <a href="#contato" className="text-white hover:text-blue-500">Contato</a>
    </nav>
  </div>
</header>

      {/* Hero */}
      <section className="flex-1 bg-gradient-to-br from-green-100 to-white flex flex-col justify-center items-center text-center px-6 py-24">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Você tem painel solar? Sabia que pode ganhar dinheiro com créditos de carbono?

          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Com a NeutraLink, a energia que você já gera pode ser convertida em impacto positivo para o planeta — e em benefícios para o seu bolso.
          </p>
          <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
            Comece Agora
          </a>
        </div>

        <section id="como-funciona" className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Como funciona a NeutraLink
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      De forma simples, segura e automatizada, você transforma sua geração solar em créditos de carbono com valor real.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Passo 1 */}
      <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4">🔌</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Conecte seu sistema</h3>
        <p className="text-gray-600">
          Instale o NeutraConect para monitorar sua geração solar com segurança.
        </p>
      </div>

      {/* Passo 2 */}
      <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4">🛰️</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Valide os dados</h3>
        <p className="text-gray-600">
          Um oráculo cruza os dados com fontes externas (como irradiância) e confirma a autenticidade.
        </p>
      </div>

      {/* Passo 3 */}
      <div className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4">🌱</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Receba seus créditos</h3>
        <p className="text-gray-600">
          Após a validação, seus créditos (NTL) são tokenizados e podem ser vendidos ou usados.
        </p>
      </div>
    </div>
  </div>
</section>

      </section>

      {/* Nova seção: Por que escolher a NeutraLink */}
<section className="bg-gray-100 py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Por que escolher a NeutraLink?
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      Somos a ponte entre sua geração solar e o mercado de créditos de carbono — com agilidade, transparência e inovação.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Benefício 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4">💸</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sem mensalidade</h3>
        <p className="text-gray-600">
          Você gera e vende seus créditos sem pagar assinatura ou taxas fixas.
        </p>
      </div>

      {/* Benefício 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4">🔐</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparência total</h3>
        <p className="text-gray-600">
          Dados verificados com IoT, validados por oráculo e registrados em blockchain.
        </p>
      </div>

      {/* Benefício 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4">📱</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Plataforma acessível</h3>
        <p className="text-gray-600">
          Acompanhe tudo pelo app ou web com interface simples e intuitiva.
        </p>
      </div>

      {/* Benefício 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <div className="text-4xl mb-4">🧾</div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Certificação real</h3>
        <p className="text-gray-600">
          Créditos com rastreabilidade completa e validação por empresas reconhecidas.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-6 px-4 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© 2025 NeutraLink. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="https://github.com/neutralink" target="_blank" className="hover:underline">GitHub</a>
            <a href="mailto:contact@neutralinkeco.com" className="hover:underline">Email</a>
            <a href="/termos" className="hover:underline">Termos</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
