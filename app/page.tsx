export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-700">NeutraLink</h1>
          <nav className="space-x-4">
            <a href="#sobre" className="text-gray-700 hover:text-green-600">Sobre</a>
            <a href="#como-funciona" className="text-gray-700 hover:text-green-600">Como Funciona</a>
            <a href="#contato" className="text-gray-700 hover:text-green-600">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 bg-gradient-to-br from-green-100 to-white flex flex-col justify-center items-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Web3 para um planeta mais limpo 🌱
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-6">
          Tokenize sua geração solar com segurança, transparência e certificação real.
        </p>
        <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
          Comece Agora
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-6 px-4 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© 2025 NeutraLink. Todos os direitos reservados.</span>
          <div className="flex gap-4">
            <a href="https://github.com/neutralinkeco" target="_blank" className="hover:underline">GitHub</a>
            <a href="mailto:contact@neutralinkeco.com" className="hover:underline">Email</a>
            <a href="/termos" className="hover:underline">Termos</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
