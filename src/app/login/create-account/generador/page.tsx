'use client'

import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';

export default function GeneratorRegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    cpf: '',
    birthDate: '',
    address: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, role: 'GENERATOR' }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar conta');
      }

      const data = await response.json();
      console.log('Usuário registrado com sucesso:', data);
      // TODO: redirecionar para dashboard ou tela de perfil
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cadastro do Gerador</h1>
        <div className="mb-6">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log('Google login sucesso', credentialResponse);
              // TODO: enviar token ao backend para login ou criação de conta
            }}
            onError={() => {
              console.error('Erro ao fazer login com Google');
            }}
          />
          <div className="text-center my-4 text-sm text-neutral-400">ou cadastre com e-mail</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Nome completo"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Data de nascimento"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço completo"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-900 border border-neutral-700"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary text-black font-semibold py-3 rounded hover:opacity-90 transition"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </section>
  )
}