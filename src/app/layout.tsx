// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-foreground">
        <Header />
        <main className="flex-1 bg-white pt-16"> {/* Aqui definimos o fundo branco só no conteúdo! */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
