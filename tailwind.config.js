module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
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
