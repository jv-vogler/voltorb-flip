/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        5: '5px',
      },
      dropShadow: {
        default: [
          '1px 1px 0 rgba(75,85,99,1)',
          '1px 1px 0 rgba(0,0,0,.2)',
          '1px 1px 0 rgba(0,0,0,.2)',
        ],
        box: ['0 0 2px rgba(255, 255, 255, 1)'],
      },
    },
  },
  plugins: [],
}
