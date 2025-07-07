// src/app/login/layout.tsx
import Script from 'next/script'
import { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
        strategy="beforeInteractive"
      />
      {children}
    </>
  )
}