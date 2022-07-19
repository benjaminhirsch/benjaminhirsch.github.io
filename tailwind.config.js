/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/blog.html',
    './src/blog-detail.html',
    './src/index.html'
  ],
  theme: {
    screens: {
      ...defaultTheme.screens
    },
    colors: colors,
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px black',
        DEFAULT: '0 2px 4px black',
        lg: '0 8px 16px black',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
          {
            'text-shadow': (value) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
      )
    }),
  ],
}
