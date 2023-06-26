/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'base': ['0.9rem', { lineHeight: '1.5rem' }],

        'xs': ['0.5rem', { lineHeight: '1rem' }],
        'sm': ['0.6rem', { lineHeight: '1.25rem' }],
        'lg': ['0.8rem', { lineHeight: '1.75rem' }],
        'xl': ['0.9rem', { lineHeight: '1.75rem' }],
        '2xl': ['1rem', { lineHeight: '2rem' }],
        '3xl': ['1.3rem', { lineHeight: '2.25rem' }],
        '4xl': ['1.7rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      }
    },
  },
  plugins: [],
}
