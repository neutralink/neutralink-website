// src/app/termos-de-uso/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso - NeutraLink',
  description: 'Conheça os termos e condições de uso da plataforma NeutraLink.',
};

export default function TermosDeUsoLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}