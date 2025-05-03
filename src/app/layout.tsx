import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-foreground">
        <Header />
        <main className="flex-1 bg-white pt-16">
          {children}
          <WhatsAppButton />
        </main>
        <Footer />
      </body>
    </html>
  );
}
