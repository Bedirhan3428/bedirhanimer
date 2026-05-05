/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-green': '#4ADE80',
        'deep-black': '#09090B',
        'card-bg': '#18181B',
        'border-color': '#27272A',
        'pure-white': '#FAFAFA',
        'text-muted': '#A1A1AA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
