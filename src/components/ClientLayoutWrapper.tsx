'use client';

import { ReactNode } from 'react';

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
