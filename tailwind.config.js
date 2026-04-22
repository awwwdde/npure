/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0A0A0A',
          800: '#121210',
          700: '#1A1A18',
          600: '#242420',
          500: '#3A3A35',
          400: '#6B6B63',
        },
        bone: {
          50: '#FBF8F2',
          100: '#EFE9DD',
          200: '#D9D2C3',
          300: '#B5AD9B',
        },
        gold: {
          400: '#D6B97A',
          500: '#C9A85C',
          600: '#A88842',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
