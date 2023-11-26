import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        animation: {
       marquee: 'marquee 15s linear infinite',
      marquee2: 'marquee2 15s linear infinite',
marqueereverse: 'marqueereverse 10s linear infinite',
        marqueereverse2: 'marqueereverse2 10s linear infinite',

      },
      
       keyframes: {
        marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      marquee2: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
        marqueereverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
          },
          marqueereverse2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
