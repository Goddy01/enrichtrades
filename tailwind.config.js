/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#F3EDE2',
          alt: '#F3EDE1',
        },
        bull: '#000000',
        candle: '#2EAF4A',
      },
    },
  },
  plugins: [],
};
