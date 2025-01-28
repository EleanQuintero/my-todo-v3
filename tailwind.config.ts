import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			UI: {
  				'bg-main': '#121212',
  				'bg-second': '#1E1E1E',
  				'bg-border': '#3A3A3A',
  				'bg-main-text': '#E0E0E0',
  				'second-text': '#B0B0B0',
  				'highligth-element': '#1E3A8A',
  				'white-hover': '#3B82F6',
  				'details-red': '#B91C1C',
  				'ui-completed-green': 'rgba(4, 108, 78, 0.5)',
  				'ui-important-red': '#DC2626'
  			},
  			foreground: 'hsl(var(--foreground))',
  			background: 'hsl(var(--background))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
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
  		gridTemplateRows: {
  			'custom-layout': '50px 1fr 50px',
  			display: '100px 1fr'
  		},
  		gridTemplateColumns: {
  			display: '200px 1fr'
  		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(0deg, rgba(2,0,36,1) 8%, rgba(24,54,111,1) 26%, rgba(0,54,158,1) 100%);'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

