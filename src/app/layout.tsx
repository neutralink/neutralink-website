// src/app/layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

// 1) Defina as fontes usando `variable`
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'NeutraLink',
  description: 'Transforme sua geração solar em créditos de carbono…',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      {/* 2) Aplique as variáveis no <body>, removendo qualquer .className */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
