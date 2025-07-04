'use client';

import { useEffect, useRef } from 'react';

type RecaptchaCheckboxProps = {
  onVerify: (token: string) => void;
};

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;

declare global {
  interface Window {
    grecaptcha:
      | {
          ready: (cb: () => void) => void;
          execute: (siteKey: string, options: { action: string }) => Promise<string>;
        }
      | {
          render: (...args: any[]) => any;
          getResponse: (widgetId?: string | number) => string;
          reset: (widgetId?: string | number) => void;
        };
  }
}

export default function RecaptchaCheckbox({ onVerify }: RecaptchaCheckboxProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (document.getElementById('recaptcha-v2-script')) return;

      const script = document.createElement('script');
      script.id = 'recaptcha-v2-script';
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    if (typeof window !== 'undefined') {
      loadRecaptcha();
    }
  }, []);

  // Quando o reCAPTCHA for resolvido, essa função será chamada
  (window as any).onRecaptchaSuccess = (token: string) => {
    onVerify(token);
  };

  return (
    <div
      ref={recaptchaRef}
      className="g-recaptcha"
      data-sitekey={SITE_KEY}
      data-callback="onRecaptchaSuccess"
    />
  );
}