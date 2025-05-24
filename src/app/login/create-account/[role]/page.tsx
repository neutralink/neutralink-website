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
    <section className="min-h-screen px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        {forms[role]}
      </div>
    </section>
  )
}