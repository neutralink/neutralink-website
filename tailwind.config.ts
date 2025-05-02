import type { Config } from 'tailwindcss'
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#00C37A',
        muted: 'var(--color-muted)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'var(--foreground)',
            a: { color: 'var(--primary)' },
            h1: { color: 'var(--foreground)' },
            h2: { color: 'var(--foreground)' },
            h3: { color: 'var(--foreground)' },
            blockquote: { borderLeftColor: 'var(--primary)' }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config);
