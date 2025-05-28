import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const metadata = {
  title: 'NeutraLink',
  description: 'Plataforma de créditos de carbono tokenizados e acessíveis',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-foreground">
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}