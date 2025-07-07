declare global {
  interface Window {
    grecaptcha: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback: (token: string) => void;
          theme?: 'light' | 'dark';
          size?: 'normal' | 'compact' | 'invisible';
          badge?: 'bottomright' | 'bottomleft' | 'inline';
        }
      ) => number;
      getResponse: (widgetId?: string | number) => string;
      reset: (widgetId?: string | number) => void;
      ready?: (cb: () => void) => void;
      execute?: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    onloadCallback?: () => void;
  }
}

export {};