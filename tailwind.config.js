module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './slices/**/*.js'],
  theme: {
    fontFamily: {
      sans: 'Satoshi-Regular, Arial, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      screens: {
        1025: "1025px",
        769: "769px",
        431: "431px",
        426: "426px",
        400: "400px",
        375: "375px",
        340: "340px",
        321: "321px"
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
