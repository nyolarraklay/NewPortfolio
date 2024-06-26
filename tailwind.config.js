/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 40% 50% / 50% 70% 20% 30%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        spin: {
          from: { transform: 'rotate(0deg)'},
          to: { transform: 'rotate(360deg)'},
        }
      },
      animation: {
        morph: 'morph 8s ease-in-out infinite',
        spin: 'spin 9s linear infinite',
      },
    },
  },
  plugins: [],
}

