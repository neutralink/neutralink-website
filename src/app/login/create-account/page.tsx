

'use client'

import { useSearchParams } from 'next/navigation'
import CreateAccountForm from '@/components/auth/CreateAccountForm'

export default function CreateAccountPage() {
  const searchParams = useSearchParams()
  const role = searchParams.get('role')

  return (
    <section className="bg-black text-white min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Criar Conta
        </h1>
        <p className="text-neutral-400 text-center mb-8">
          Preencha os campos abaixo para registrar sua conta como{' '}
          <span className="text-primary font-semibold">
            {role ? role.toLowerCase() : 'usuário'}
          </span>
          .
        </p>
        <CreateAccountForm selectedRole={role} />
      </div>
    </section>
  )
}