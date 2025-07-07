import Head from 'next/head'
import { Suspense } from 'react'
import { RecuperarSenhaForm } from '@/components/RecuperarSenhaForm'

export default function RecuperarSenhaPage() {
  return (
    <>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        />
      </Head>

      <section className="bg-black text-white min-h-screen flex items-center justify-center px-6">
        <Suspense fallback={<p>Carregando formulário...</p>}>
          <RecuperarSenhaForm />
        </Suspense>
      </section>
    </>
  )
}