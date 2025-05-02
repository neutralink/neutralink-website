'use client';

import { useState } from 'react';

export default function SimuladorPage() {
  const [kwh, setKwh] = useState('');
  const [emissionFactor, setEmissionFactor] = useState('0.000672');
  const [price, setPrice] = useState('60');
  const [result, setResult] = useState<null | { co2: number; value: number }>(null);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const kwhValue = parseFloat(kwh);
    const factor = parseFloat(emissionFactor);
    const pricePerCredit = parseFloat(price);

    const co2 = kwhValue * factor; // toneladas
    const value = co2 * pricePerCredit;

    setResult({ co2, value });
  };

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Simule seus Créditos</h1>
        <p className="text-neutral-400 mb-10">
          Estime o quanto sua geração solar pode render em créditos de carbono.
        </p>

        <form onSubmit={handleSimulate} className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm text-neutral-300">Geração mensal (kWh)</label>
            <input
              type="number"
              placeholder="Ex: 1500"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={kwh}
              onChange={(e) => setKwh(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">Fator de emissão (tCO₂/kWh)</label>
            <input
              type="number"
              step="0.000001"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white"
              value={emissionFactor}
              onChange={(e) => setEmissionFactor(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">Preço por crédito (R$)</label>
            <input
              type="number"
              step="0.01"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
          >
            Simular
          </button>
        </form>

        {result && (
          <div className="mt-10 bg-neutral-900 p-6 rounded-xl border border-neutral-700 text-left">
            <h2 className="text-xl font-bold mb-2">Resultado:</h2>
            <p>• Estimativa de CO₂ evitado: <strong>{result.co2.toFixed(4)} toneladas</strong></p>
            <p>• Valor estimado em créditos: <strong>R$ {result.value.toFixed(2)}</strong></p>
          </div>
        )}
      </div>
    </section>
  );
}
