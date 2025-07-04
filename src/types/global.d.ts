export {};

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