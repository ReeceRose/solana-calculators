module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'solana-green': '#14f195',
        'solana-green-hover': '#12d886'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
