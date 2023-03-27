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
        default: ['1px 1px 0 rgba(0,0,0,1)', '1px 1px 0 rgba(75,85,99,1)'],
        soft: ['1px 1px 0 rgba(75,85,99,.25)', '2px 2px 0 rgba(75,85,99,.25)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
