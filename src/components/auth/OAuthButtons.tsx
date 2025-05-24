'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function OAuthButtons() {
  return (
    <div className="flex flex-col gap-3 w-full mt-6">
      <button
        onClick={() => signIn('google')}
        className="bg-white text-black py-2 px-4 rounded-md flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 transition"
      >
        <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
        Entrar com Google
      </button>

      <button
        onClick={() => signIn('apple')}
        className="bg-black text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition"
      >
        <Image src="/apple-icon.svg" alt="Apple" width={20} height={20} />
        Entrar com Apple
      </button>
    </div>
  )
}