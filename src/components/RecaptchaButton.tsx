// components/RecaptchaButton.tsx
import React from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export function RecaptchaButton() {
  const handleClick = async () => {
    // Verifica se o script do Google está carregado
    if (!window.grecaptcha) {
      alert("reCAPTCHA não carregado!");
      return;
    }

    // Executa o reCAPTCHA invisível
    const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
      action: "submit",
    });

    console.log("Token gerado:", token);

    // Envia token para o backend
    const res = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const json = await res.json();
    console.log("Resposta do backend:", json);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Enviar com reCAPTCHA
    </button>
  );
}