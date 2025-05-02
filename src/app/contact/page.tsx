'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Fale com a NeutraLink</h1>
        <p className="text-neutral-400 mb-12">
          Envie sua dúvida, sugestão ou proposta. Vamos adorar conversar com você.
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm text-neutral-300">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm text-neutral-300">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm text-neutral-300">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Digite sua mensagem"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            onClick={(e) => {
              e.preventDefault();
              alert('Mensagem enviada! (simulação)');
            }}
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
