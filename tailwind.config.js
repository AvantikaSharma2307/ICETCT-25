const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|table|divider|checkbox|spacer).js"
  ],
  theme: {
    extend: {screens: {
      'xl': '1430px',
      // => @media (min-width: 992px) { ... }
    },},
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
}

