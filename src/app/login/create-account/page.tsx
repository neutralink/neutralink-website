import { Suspense } from 'react'
import CreateAccountClient from '../../../components/auth/CreateAccountClient'

export default function CreateAccountPage() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Suspense fallback={<div>Carregando...</div>}>
          <CreateAccountClient selectedRole={null} />
        </Suspense>
      </div>
    </section>
  )
}