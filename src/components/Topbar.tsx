'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Topbar() {
  return (
    <div className="bg-green-700 text-white text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
      {/* Lado esquerdo: contato */}
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          📞 <a href="tel:+5563999999999" className="hover:underline">+55 63 99999-9999</a>
        </span>
        <span className="hidden sm:inline-flex items-center gap-1">
          📧 <a href="mailto:vendas@neutralinkeco.com" className="hover:underline">vendas@neutralinkeco.com</a>
        </span>
      </div>

      {/* Lado direito: idioma */}
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">Idioma:</span>
        <button>
          <Image src="/flags/br.svg" alt="Português" width={20} height={14} />
        </button>
        <button>
          <Image src="/flags/us.svg" alt="English" width={20} height={14} />
        </button>
        <button>
          <Image src="/flags/cn.svg" alt="中文" width={20} height={14} />
        </button>
      </div>
    </div>
  );
}
