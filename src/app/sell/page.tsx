'use client';

import { useState } from 'react';

export default function SellCreditsPage() {
  const [formData, setFormData] = useState({
    amount: '',
    price: '',
    status: '',
    certifier: '',
  });

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cadastre seus Créditos de Carbono para Venda
        </h1>
        <p className="text-neutral-400 mb-10">
          Preencha os dados abaixo para colocar seus créditos no marketplace da NeutraLink.
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm text-neutral-300">Quantidade (kg de CO₂)</label>
            <input
              type="number"
              placeholder="Ex: 1250"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">Preço (por crédito)</label>
            <input
              type="text"
              placeholder="Ex: R$ 59,00 ou 12 NTL"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">Status</label>
            <select
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            >
              <option value="">Selecione</option>
              <option value="Pré-Certificado">Pré-Certificado</option>
              <option value="Certificado">Certificado</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm text-neutral-300">Certificadora</label>
            <select
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white"
              value={formData.certifier}
              onChange={(e) => setFormData({ ...formData, certifier: e.target.value })}
            >
              <option value="">Selecione</option>
              <option value="Verra">Verra</option>
              <option value="Gold Standard">Gold Standard</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            onClick={(e) => {
              e.preventDefault();
              alert('Crédito cadastrado com sucesso! (simulação)');
            }}
          >
            Cadastrar Crédito
          </button>
        </form>
      </div>
    </section>
  );
}
