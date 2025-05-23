

'use client'

import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import GeneratorForm from '@/components/auth/forms/GeneratorForm'
import BuyerForm from '@/components/auth/forms/BuyerForm'
import CompanyForm from '@/components/auth/forms/CompanyForm'
import IntegratorForm from '@/components/auth/forms/IntegratorForm'

const forms = {
  generator: <GeneratorForm />,
  buyer: <BuyerForm />,
  company: <CompanyForm />,
  integrator: <IntegratorForm />,
}

export default function CreateAccountByRolePage() {
  const params = useParams()
  const role = params?.role as keyof typeof forms

  if (!role || !(role in forms)) {
    notFound()
  }

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Cadastro de Conta ({role})</h1>
        {forms[role]}
      </div>
    </section>
  )
}