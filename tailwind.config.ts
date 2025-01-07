import type { Config } from "tailwindcss";

export default {
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
        foreground: "var(--foreground)",
      },
      gridTemplateRows: {
        'custom-layout': '100px 1fr 50px',
        'display': '100px 1fr',
      },
      gridTemplateColumns: {
        'display': '200px 1fr',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(2,0,36,1) 8%, rgba(24,54,111,1) 26%, rgba(0,54,158,1) 100%);',
      },
    },
  },
  plugins: [],
} satisfies Config;

