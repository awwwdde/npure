/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#12110F',
          800: '#1A1916',
          700: '#24231F',
          600: '#302E29',
          500: '#43413A',
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
        display: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
        sans: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
