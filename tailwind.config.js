/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#7C3AED',
        dark: '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 25px 50px -12px rgba(37, 99, 235, 0.35)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(37,99,235,1) 0%, rgba(124,58,237,1) 100%)',
      },
    },
  },
  plugins: [],
};
