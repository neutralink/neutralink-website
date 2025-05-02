// src/components/CallToAction.tsx
import Link from 'next/link';

export default function CallToAction() {
  return (
    <div className="bg-black text-white p-8 rounded-lg text-center">
      <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
      <p className="text-neutral-300 mb-6">
        Envie seu projeto para análise ou entre em contato com nosso time de integração.
      </p>
      <Link
        href="/contato"
        className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:opacity-90 transition"
      >
        Entrar em Contato
      </Link>
    </div>
  );
}
