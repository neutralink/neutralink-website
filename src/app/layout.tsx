'use client';

import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';

export const metadata = {
  title: 'NeutraLink',
  description: 'Plataforma de créditos de carbono tokenizados e acessíveis',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith('/dashboard');

  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-foreground">
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
          {!isDashboardRoute && <Header />}
          {isDashboardRoute && (
            <div className="hidden md:block">
              <Header />
            </div>
          )}
          <main className="flex-grow">{children}</main>
          {!isDashboardRoute && <Footer />}
          {isDashboardRoute && (
            <div className="hidden md:block">
              <Footer />
            </div>
          )}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}