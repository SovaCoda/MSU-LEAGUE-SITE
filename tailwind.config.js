/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '270px',
      },
      direction: {
        'rtl': 'rtl',
        'ltr': 'ltr',
      },
      keyframes: {
        fadeIn: { 
          '0%': { opacity: 0, transform: 'translatex(-40px)' },
          '100%':{ opacity: 0.9, transform: 'translatex(0px)'}, 
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translatex(40px)' },
          '100%': { opacity: 0.9, transform: '-translatex(0px)'},
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translatex(-40px)' },
          '100%': { opacity: 0.9, transform: 'translatex(0px)'},
        },
        fadeOut: {
          '0%': { opacity: 0.9, transform: 'translatex(0px)' },
          '100%': { opacity: 0, transform: 'translatex(-80px)' },
        },
        fadeOutRight: {
          '0%': { opacity: 0.9, transform: 'translatex(0px)' },
          '100%': { opacity: 0, transform: 'translatex(40px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInRight: 'fadeInRight 0.5s ease-in-out',
        fadeInLeft: 'fadeInLeft 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        fadeOutRight: 'fadeOutRight 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
