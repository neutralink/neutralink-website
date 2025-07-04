export {};

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (container: HTMLElement, parameters: { sitekey: string; callback: (token: string) => void }) => number;
      getResponse: (widgetId?: string | number) => string;
      reset: (widgetId?: string | number) => void;
    };
  }
}