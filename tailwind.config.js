/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      light: 'rgb(250, 250, 250)',
      dark: 'rgb(125, 125, 125)',
      'info-light': '#6ec3ff',
      'info-dark': '#5f5df9',
      'success-light': '#4ade80',
      'success-dark': '#28a745',
      'warning-light': 'rgb(245, 221, 83)',
      'warning-dark': 'rgb(187, 136, 0)',
      'error-light': 'rgb(240, 77, 66)',
      'error-dark': 'rgb(255, 12, 28)',
      warmGradientA: 'rgba(243, 211, 126, 1)',
      warmGradientB: 'rgba(240, 77, 66, 1)',
      techyGradientA: 'rgb(212, 120, 216)',
      techyGradientB: 'rgb(95, 93, 249)',
    },
    extend: {},
  },
  plugins: [],
}
