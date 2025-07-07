import React, { useEffect, useRef } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export function RecaptchaButton() {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window.grecaptcha?.render === "function" && recaptchaRef.current) {
      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
        size: "invisible",
        callback: async (token: string) => {
          console.log("Token gerado:", token);

          const res = await fetch("/api/verify-recaptcha", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });

          const json = await res.json();
          console.log("Resposta do backend:", json);
        },
      });
    }
  }, []);

  const handleClick = () => {
    if (window.grecaptcha && widgetIdRef.current !== null) {
      if (typeof window.grecaptcha.execute === "function") {
        (window.grecaptcha.execute as unknown as (id: number) => void)(widgetIdRef.current);
      } else {
        alert("grecaptcha.execute não é uma função válida");
      }
    } else {
      alert("reCAPTCHA não carregado!");
    }
  };

  return (
    <>
      <div ref={recaptchaRef} />
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Enviar com reCAPTCHA
      </button>
    </>
  );
}