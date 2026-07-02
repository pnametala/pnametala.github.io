/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0a0a0c',
          900: '#111114',
          800: '#1a1a1f',
        },
      },
      maxWidth: {
        content: '52rem',
      },
    },
  },
  plugins: [],
}
