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
  modules: ["@primevue/nuxt-module", "nuxt-i18n-micro"],
  i18n: {
    locales: [
      { code: "en", name: "English" },
      { code: "sr", name: "Srpski" },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true, 
      fallbackLocale: "en", 
    },
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
      // Ensure messages are reactive
      messages: {
        en: {}, // Will be loaded from files
        sr: {}  // Will be loaded from files
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: "2024-12-27",
  // Add this to ensure Hot Module Replacement works properly with i18n
  vite: {
    optimizeDeps: {
      include: ['vue-i18n']
    }
  }
});