/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2s steps(6), blink 1s infinite',
      },
      keyframes: {
        typing: {
          from: {
            width: '0'
          },
          to: {
            width: '6ch'
          },
        },
        blink: {
          from: {
            'border-right-color': 'transparent'
          },
          to: {
            'border-right-color': 'black'
          },
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
    },
  },
  plugins: [],
}
