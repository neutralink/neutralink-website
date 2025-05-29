'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export default function TermosDeUso() {
  const [language, setLanguage] = useState<'pt' | 'en' | 'zh'>('pt');
  const [content, setContent] = useState('Carregando...');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/static/termos-de-uso.${language}.md`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setContent('Erro ao carregar os Termos de Uso.');
      }
    };

    fetchContent();
  }, [language]);

  useEffect(() => {
    const handler = (e: any) => {
      setLanguage(e.detail);
    };
    window.addEventListener('changeLang', handler);
    return () => window.removeEventListener('changeLang', handler);
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-8 pt-32 pb-32 bg-white text-black min-h-screen">
      <div className="flex justify-center gap-4 mb-10">
        <button
          className="border border-gray-700 text-black bg-white px-3 py-1.5 rounded text-sm hover:bg-gray-100 transition"
          onClick={() => setLanguage('pt')}
        >
          🇧🇷 Português
        </button>
        <button
          className="border border-gray-700 text-black bg-white px-3 py-1.5 rounded text-sm hover:bg-gray-100 transition"
          onClick={() => setLanguage('en')}
        >
          🇺🇸 English
        </button>
        <button
          className="border border-gray-700 text-black bg-white px-3 py-1.5 rounded text-sm hover:bg-gray-100 transition"
          onClick={() => setLanguage('zh')}
        >
          🇨🇳 中文
        </button>
      </div>
      <h1 className="text-xl font-bold mb-6 text-center">Termos de Uso</h1>
      <article className="prose prose-base font-sans text-black max-w-none space-y-6">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}