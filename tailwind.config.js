/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#22C55E',
        accent: '#F97316',
        dark: '#050816',
        surface: '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 25px 50px -12px rgba(34, 197, 94, 0.45)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(34,197,94,0.5) 0%, rgba(15,23,42,0.95) 45%, rgba(5,8,22,1) 100%)',
      },
    },
  },
  plugins: [],
};
