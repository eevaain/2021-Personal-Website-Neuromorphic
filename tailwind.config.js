const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    minWidth: {
      '0': '0',
      '4/10': '40%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     letterSpacing: {
      normal: '-.025em',
    },
    //  boxShadow: {
    //   'hover': '0px 0px 59.5243px #A783B7'
    //  },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        heading: ['Playfair Display', 'serif']
      },
      spacing: {
        'big': '46rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
