/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,json}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        blueBlue: '#053AF8',
        lightBlue: { 
          default: '#699BF7',
          '30': '#699BF74D',
          '20': '#699BF74D',
          '50': '#699BF74D',
          '80': '#699BF74D',
        },
        darkBlue: '#263238',
        lightGrey: '#4D4D4D',
        lightLila: '#516AF1',
        plansblue: '#2361BF',
        yellowa: '#E4C647',
        greyNew: '#8A8F9D',
        bluetwo: '#0059FE',
        greyl: '#F6F8F9',
        otrogrey: {
          default: '#4D4D4D',
          '30': '#4D4D4D2D',

        },
        whiteGrey: '#F5F7FA',
      },
      fontSize: {
        '14px': '14px',
        '24px': '24px',
        '20px': '20px',
      },
      spacing: {
        'medida': '75px',
        
      },
    },
  },
  plugins: [],
}

