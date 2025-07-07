// src/components/RecaptchaWidget.tsx
'use client'

export default function RecaptchaWidget() {
  return (
    <div
      className="g-recaptcha"
      data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    />
  )
}