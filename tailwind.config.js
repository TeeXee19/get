/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],  theme: {
    extend: {
       fontFamily: {
        sans: ['"Sen"', 'sans'],
        cd: ['"Playfair Display"', 'sans'],
        ba: ['"Barlow"', 'sans'],
        clash: ['"Clash Display"', 'sans'],
        rhd: ['"Red Hat Display"', 'sans'],
      },
      fontSize:{
        'sans-h6': '20px',
        'sans-h5': '24px',
        'sans-h4': '32px',
        'sans-h3': '40px',
        'sans-h2': '48px',
        'sans-h1': '56px',
        'cd-xs': '10px',
        'cd-sm': '12px',
        'cd-base': '14px',
        'cd-md': '16px',
        'cd-lg': '20px',
        'cd-xl': '24px',
        'cd-2xl': '32px'
      },
      colors:{
        primary:{"theme":"#ED0027"},
        secondary:{"theme":"#828DA9"},
        grayTheme:{
          "100":"#F5F8FA",
          "200":"#CBD5E1",
          "300":"#94A3B8",
          "400":"#64748B",
          "500":"#4F627D",
          "gray-600":"#384860",
          "gray-700":"#202B3C"
        },
        stroke:{
          "base": "#E2E4EB"
        },
        line:{
          "base": "#800216"
        },
        textMain:{
          "base": "#050505"
        }
      }
    },
  },
  plugins: [],
}