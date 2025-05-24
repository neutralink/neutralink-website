'use client';

import { useState } from 'react';
import MarketplaceHighlight from '../../components/MarketplaceHighlight';

export default function MarketplacePage() {
  const [status, setStatus] = useState('');
  const [country, setCountry] = useState('');
  const [certifier, setCertifier] = useState('');

  // Apenas exibição visual dos filtros (sem lógica de filtro aplicada ainda)
  return (
    <section className="bg-white min-h-screen py-24 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Marketplace de Créditos de Carbono
        </h1>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          Navegue pelos créditos disponíveis, verifique sua origem, status de certificação e selecione os que deseja adquirir.
        </p>

        {/* Filtros */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-neutral-300 rounded-md px-4 py-2 bg-white text-black"
          >
            <option value="">Status</option>
            <option value="Certificado">Certificado</option>
            <option value="Pré-Certificado">Pré-Certificado</option>
          </select>

          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full border border-neutral-300 rounded-md px-4 py-2 bg-white text-black"
          >
            <option value="">País</option>
            <option value="Brasil">Brasil</option>
            <option value="EUA">EUA</option>
            <option value="Chile">Chile</option>
          </select>

          <select
            value={certifier}
            onChange={(e) => setCertifier(e.target.value)}
            className="w-full border border-neutral-300 rounded-md px-4 py-2 bg-white text-black"
          >
            <option value="">Certificadora</option>
            <option value="Verra">Verra</option>
            <option value="Gold Standard">Gold Standard</option>
          </select>
        </div>

        {/* Cards (a lógica de filtro pode ser aplicada futuramente com useMemo + filtro no array) */}
        <MarketplaceHighlight />
      </div>
    </section>
  );
}
