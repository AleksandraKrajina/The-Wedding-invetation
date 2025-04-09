export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: ['@primevue/nuxt-module', 'nuxt-i18n-micro'],
  i18n: {
    locales: [
      { code: 'en', name: 'English' },
      { code: 'sr', name: 'Srpski' }
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: '2024-12-27',
})