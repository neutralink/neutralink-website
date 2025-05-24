'use client'

import React from 'react'

export default function CompletarPerfilPage() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Complete seu perfil</h1>
      <p className="text-gray-600 mb-6">Precisamos de mais algumas informações para finalizar seu cadastro.</p>

      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const data = {
            cpf: formData.get('cpf'),
            cep: formData.get('cep'),
            endereco: formData.get('endereco'),
            cidade: formData.get('cidade'),
            estado: formData.get('estado'),
          }

          const res = await fetch('https://api.neutralinkeco.com/users/complete-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })

          if (res.ok) {
            window.location.href = '/dashboard'
          } else {
            alert('Erro ao finalizar cadastro. Verifique os dados.')
          }
        }}
      >
        <input type="text" name="cpf" placeholder="CPF" className="w-full border p-2 rounded" required />
        <input type="text" name="cep" placeholder="CEP" className="w-full border p-2 rounded" required />
        <input type="text" name="endereco" placeholder="Endereço completo" className="w-full border p-2 rounded" required />
        <input type="text" name="cidade" placeholder="Cidade" className="w-full border p-2 rounded" required />
        <input type="text" name="estado" placeholder="Estado" className="w-full border p-2 rounded" required />

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Finalizar Cadastro
        </button>
      </form>
    </div>
  )
}