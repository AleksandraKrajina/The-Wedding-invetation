<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useNuxtApp } from '#app'
import { saveLocalePreference } from '~/utils/geoDetection'

const nuxtApp = useNuxtApp()
const currentLocale = ref('en')
const isLangMenuOpen = ref(false)

// Sync locale with i18n
currentLocale.value = nuxtApp.$i18n?.locale || 'en'

// Update currentLocale when i18n locale changes
watch(
  () => nuxtApp.$i18n?.locale,
  (newLocale) => {
    if (newLocale) {
      currentLocale.value = newLocale
    }
  }
)

const toggleLanguageMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value

  if (isLangMenuOpen.value) {
    setTimeout(() => {
      document.addEventListener('click', closeLanguageMenu)
    }, 0)
  }
}

const closeLanguageMenu = () => {
  isLangMenuOpen.value = false
  document.removeEventListener('click', closeLanguageMenu)
}

const changeLanguage = (lang) => {
  if (lang === currentLocale.value) return

  try {
    nuxtApp.$i18n.locale = lang
    currentLocale.value = lang
    saveLocalePreference(lang)
    window.dispatchEvent(new Event('locale-changed'))
  } catch (error) {
    console.error('Language switch failed:', error)
  }

  closeLanguageMenu()
}

onMounted(() => {
  // Initialize from current i18n locale
  if (nuxtApp.$i18n) {
    currentLocale.value = nuxtApp.$i18n.locale
  }
})

onUnmounted(() => {
  document.removeEventListener('click', closeLanguageMenu)
})
</script>

<style scoped>
/* Add custom animations or styling if needed */
</style>

<template>
  <nav class="bg-stone-800 text-white py-4 shadow-md">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo and Blog Title -->
        <div class="flex items-center mb-4 md:mb-0">
          <NuxtLink to="/" class="flex items-center">
            <img src="/assets/images/logo/4.png" class="h-8 mr-4" alt="Vow Perfect Logo" />
          </NuxtLink>
          <div class="flex items-center">
            <span class="mx-2 text-amber-50 text-opacity-30">|</span>
            <NuxtLink to="/blog" class="text-xl font-light text-amber-50">
              {{ currentLocale === 'en' ? 'Blog' : 'Blog' }}
            </NuxtLink>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-6">
          <NuxtLink to="/" class="text-amber-50 text-opacity-90 hover:text-amber-50 transition-colors">
            {{ currentLocale === 'en' ? 'Home' : 'Početna' }}
          </NuxtLink>

          <!-- Language Switcher -->
          <div class="relative">
            <button @click.stop="toggleLanguageMenu"
              class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-700 text-amber-50 border border-stone-600 hover:bg-stone-600 transition-all focus:outline-none">
              <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
                <img v-if="currentLocale === 'en'" src="/assets/images/flags/en.svg" alt="English"
                  class="w-full h-full object-cover" />
                <img v-else-if="currentLocale === 'sr'" src="/assets/images/flags/sr.svg" alt="Serbian"
                  class="w-full h-full object-cover" />
              </span>
              <span class="text-sm font-medium">{{ currentLocale === 'en' ? 'EN' : 'SR' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Language Dropdown -->
            <div v-if="isLangMenuOpen"
              class="absolute right-0 mt-2 py-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-amber-100">
              <button v-for="loc in ['en', 'sr']" :key="loc" @click="changeLanguage(loc)"
                class="flex items-center gap-3 w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-amber-50 transition-colors"
                :class="{ 'bg-amber-50': currentLocale === loc }">
                <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
                  <img :src="`/assets/images/flags/${loc}.svg`" :alt="loc === 'en' ? 'English' : 'Serbian'"
                    class="w-full h-full object-cover" />
                </span>
                <span>{{ loc === 'en' ? 'English' : 'Serbian' }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
