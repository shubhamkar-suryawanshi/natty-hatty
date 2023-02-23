/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '576px' },
      // => @media (max-width: 576px) { ... }

      md: { max: '960px' },
      // => @media (max-width: 960px) { ... }

      lg: '961px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
