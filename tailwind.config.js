/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        default: '1rem',
        sm: '0.5rem',
        md: '3.2rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      Inter: "'Inter', serif",
      Lato: "'Lato', serif",
      PlayFair: "'Playfair Display', serif",
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      'smart': {'min': '375px', 'max': '767px'},
      'tab': {'min': '768px', 'max': '1023px'},
      'notebook': {'min': '1024px', 'max': '1439px'},
      'monitor': {'min': '1440px', 'max': '2560px'},
    },
    extend: {
      backgroundImage: {
        'quoteSection': 'url(/src/images/quote-background.png)',
        'benefitSectionBg': 'url(/src/images/benefitImage.png)',
      }
    },
    colors: {
      'slate': colors.slate,
      'neonGreen': 'linear-gradient(96.73deg, #53F3CD 6.73%, rgba(83, 243, 205, 0) 116.9%);',
      'green': colors.green,
      'blue': '#689FF2',
      'lightBlue': '#85BBB1',
      'darkBlue': '#262A3F',
      'lightGreen': '#02E0AB',
      'lightLightGreen': '#53F3CD',
      'orange': '#E54F3A',
      'lightOrange': '#F1897B',
      'lightDark': '#161926',
      'spring': '#85BBB1',
      'mainBgColor': '#091221',
      'grayDark': '#515773',
      'gray': '#E4E4E4',
    }
  },
  plugins: []
}

