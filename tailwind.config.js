/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        abezee: ['ABeeZee', 'sans-serif'],
        alice: ['Alice', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      // screen sizes according to the Vuetify docs: => https://vuetifyjs.com/en/features/display-and-platform/
      screens: {
        smartphones: '600px',
        tablets: '960px',
        laptops: '1280px',
        desktops: '1920px',
        wideDesktop: '2560px',
      },
    },
  },
  plugins: [],
};
