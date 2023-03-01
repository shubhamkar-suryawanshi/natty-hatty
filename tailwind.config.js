/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  important: '#root',
  theme: {
    fontFamily: {
      sans: ['"Work_Sans"', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      button: ['"Work Sans"'],
      body: ['"Open Sans"'],
    },
    screens: {
      mb: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
  variants: {
    scrollbar: ['rounded'],
  },
};
