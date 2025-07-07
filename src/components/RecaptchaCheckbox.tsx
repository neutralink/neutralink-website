'use client';

import { useEffect, useRef } from 'react';

type RecaptchaCheckboxProps = {
  onVerify: (token: string) => void;
};

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;


export default function RecaptchaCheckbox({ onVerify }: RecaptchaCheckboxProps) {
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement('script');
      script.id = 'recaptcha-v2-script';
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    if (typeof window !== 'undefined') {
      loadRecaptcha();

      window.onloadCallback = () => {
        if (window.grecaptcha && recaptchaRef.current) {
          window.grecaptcha.render(recaptchaRef.current, {
            sitekey: SITE_KEY,
            callback: (token: string) => {
              onVerify(token);
            },
          });
        }
      };
    }
  }, []);

  return <div ref={recaptchaRef} />;
}