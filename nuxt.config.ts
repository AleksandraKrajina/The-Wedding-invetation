export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  
  modules: ["@primevue/nuxt-module", "@nuxtjs/i18n"],
  
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'sr', name: 'Srpski', file: 'sr.json' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: 'locales',
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: "2024-12-27",
});
