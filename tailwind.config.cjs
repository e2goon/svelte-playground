const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'deep-sm': '2px 2px 0 0 rgb(0 0 0)',
        'deep-md': '3px 3px 0 0 rgb(0 0 0)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
