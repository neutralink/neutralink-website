'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {isLogin ? 'Acesse sua conta' : 'Crie sua conta'}
        </h1>
        <p className="text-neutral-400 mb-10">
          {isLogin
            ? 'Entre com seu e-mail e senha para acessar a plataforma.'
            : 'Preencha os dados para criar sua conta gratuita.'}
        </p>

        <form className="space-y-6 text-left max-w-md mx-auto">
          {!isLogin && (
            <div>
              <label className="block mb-1 text-sm text-neutral-300">Nome completo</label>
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}
          <div>
            <label className="block mb-1 text-sm text-neutral-300">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-neutral-300">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded-md hover:opacity-90 transition"
            onClick={(e) => {
              e.preventDefault();
              alert(isLogin ? 'Login efetuado! (simulação)' : 'Conta criada! (simulação)');
            }}
          >
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>

        <div className="mt-6 text-sm text-neutral-400">
          {isLogin ? (
            <>
              Ainda não tem conta?{' '}
              <button onClick={toggleMode} className="text-primary underline">
                Criar agora
              </button>
            </>
          ) : (
            <>
              Já tem conta?{' '}
              <button onClick={toggleMode} className="text-primary underline">
                Entrar
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
