import './globals.css';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper';

export const metadata = {
  title: 'NeutraLink',
  description: 'Plataforma de créditos de carbono tokenizados e acessíveis',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen text-foreground">
        <AuthProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}