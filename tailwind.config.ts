import type { Config } from 'tailwindcss'
import withMT from '@material-tailwind/react/utils/withMT'
import colors from 'tailwindcss/colors'





export default withMT({
    content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-mono)',
  				'monospace'
  			]
  		},
  		colors: {
            ...colors,
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primaryForeground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		typography: (theme: (path: string) => string | undefined) => ({
  			DEFAULT: {
  				css: {
  					color: 'hsl(var(--foreground))',
  					a: {
  						color: 'hsl(var(--primary))',
  						textDecoration: 'underline',
  						fontWeight: '500',
  						'&:hover': {
  							color: 'hsl(var(--primary))',
  							opacity: '0.8',
  						},
  					},
  					h1: {
  						color: 'hsl(var(--foreground))',
  						fontWeight: '700',
  						fontSize: theme('fontSize.3xl'),
  					},
  					h2: {
  						color: 'hsl(var(--foreground))',
  						fontWeight: '600',
  						fontSize: theme('fontSize.2xl'),
  					},
  					h3: {
  						color: 'hsl(var(--foreground))',
  						fontWeight: '600',
  						fontSize: theme('fontSize.xl'),
  					},
  					blockquote: {
  						fontStyle: 'italic',
  						color: 'hsl(var(--muted-foreground))',
  						borderLeftColor: 'hsl(var(--primary))',
  					},
  					ul: {
  						paddingLeft: '1.5em',
  						listStyleType: 'disc',
  					},
  					ol: {
  						paddingLeft: '1.5em',
  						listStyleType: 'decimal',
  					},
  					strong: { color: 'hsl(var(--foreground))' },
  					code: {
  						backgroundColor: 'hsl(var(--muted))',
  						color: 'hsl(var(--foreground))',
  						padding: '0.2em 0.4em',
  						borderRadius: theme('borderRadius.sm'),
  					},
  					pre: {
  						backgroundColor: 'hsl(var(--muted))',
  						color: 'hsl(var(--foreground))',
  						padding: theme('spacing.4'),
  						borderRadius: theme('borderRadius.lg'),
  					},
  				},
  			},
  			dark: {
  				css: {
  					color: 'hsl(var(--foreground))',
  					a: { color: 'hsl(var(--primary))' },
  					blockquote: { color: 'hsl(var(--muted-foreground))' },
  				},
  			},
  		}),
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
      require("tailwindcss-animate")
],
} satisfies Config);
