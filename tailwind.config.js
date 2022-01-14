module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light-purple': '#A328F5',
      'white': '#F9F9F9',
      'gray': '#828282',
      'gray-200': '#333333',
      'gray-400': '#212121',
      'dark': '#171717',
    },
    extend: {
      fontFamily: {
        DM: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
