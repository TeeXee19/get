// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/")
  },
  devtools: { enabled: true },
   modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Sen: true,
        'Playfair+Display': true,
        'Red+Hat+Display': true,
        Barlow: true
      },
      display: 'swap', // Recommended for performance
      prefetch: true, // Optional, improves initial loading speed
      download: true // Optional, downloads fonts on first visit
    }]
  ],
  css: [
    '~/public/assets/css/tailwind.css',
    '~/public/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&display=swap',
      },
    ],
  },
})
