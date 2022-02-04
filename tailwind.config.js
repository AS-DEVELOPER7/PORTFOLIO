module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        p1: '#ED5820',
        p3: '#444d5f',
        p2: '#606a7d',
        p4: '#EADBDD',
      },
      
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
