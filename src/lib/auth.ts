'use server'

import GoogleProvider from 'next-auth/providers/google'
import AppleProvider from 'next-auth/providers/apple'
import { NextAuthOptions } from 'next-auth'

const googleClientId = process.env.GOOGLE_CLIENT_ID as string
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET as string
const appleClientId = process.env.APPLE_CLIENT_ID as string
const appleClientSecret = process.env.APPLE_CLIENT_SECRET as string

if (!googleClientId || !googleClientSecret || !appleClientId || !appleClientSecret) {
  throw new Error('Variáveis de ambiente de autenticação não definidas corretamente')
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    AppleProvider({
      clientId: appleClientId,
      clientSecret: appleClientSecret,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Aqui você pode implementar lógica adicional, como verificar domínio de e-mail, etc
      return true
    },
    async session({ session, token }) {
      // Adiciona o ID do usuário ou outras infos à sessão
      session.user.id = token.sub as string
      return session
    },
  },
}