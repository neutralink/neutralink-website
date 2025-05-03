'use client';

import { MessageCircle } from 'lucide-react'; // ou use outro ícone se preferir
import Link from 'next/link';

export default function WhatsAppButton() {
  const phone = '5563984845101'; // número atualizado com DDI e DDD, sem espaços
  const message = encodeURIComponent('Olá! Tenho interesse em saber mais sobre a NeutraLink.');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full flex items-center gap-2 shadow-lg transition"
      >
        <MessageCircle size={20} />
        <span className="font-medium hidden sm:inline">Fale via WhatsApp</span>
      </Link>
    </div>
  );
}