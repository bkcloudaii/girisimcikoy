/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#E8321A',
          orange: '#F5700A',
          gold: '#F5A623',
          green: '#2D6A4F',
          earth: '#8B5E3C',
          dark: '#0F0F0F',
          village: '#4A7C59',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
