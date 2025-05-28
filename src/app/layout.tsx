"use client";

import './globals.css';
import '../styles/custom-overrides.css' // <- deve vir depois da lib
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-foreground">
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
          {!isDashboard && <Header />}
          <main className="flex-1">{children}</main>
          {!isDashboard && <Footer />}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}