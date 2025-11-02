// module.exports = {
//   darkMode: false, // or 'class' if you want manual control
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["light"], // force light theme only
//   },
// }
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // disable dark mode
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}