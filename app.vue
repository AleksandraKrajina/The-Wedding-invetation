<template>
  <div>
    <ClientOnly>
      <LocaleDetector />
    </ClientOnly>
    <NuxtPage :key="$locale"></NuxtPage>
  </div>
</template>

<script setup>
import 'primeicons/primeicons.css'
import LocaleDetector from './components/LocaleDetector.vue';
import { onMounted, nextTick } from 'vue'
import { getSavedLocale } from '~/utils/geoDetection'

// Get i18n information
const { $locale, $switchLocale } = useI18n()

onMounted(async () => {
  if (process.client) {
    // Check if we need to force a locale based on saved preference
    try {
      const savedLocale = getSavedLocale()
      
      if (savedLocale && savedLocale !== $locale) {
        console.log(`App: Saved locale (${savedLocale}) doesn't match current (${$locale}), synchronizing`)
        await $switchLocale(savedLocale)
        document.documentElement.setAttribute('lang', savedLocale)
        
        // Force a refresh after a slight delay to ensure everything is in sync
        setTimeout(() => {
          window.dispatchEvent(new Event('locale-changed'))
        }, 100)
      }
      
      // Add a listener for unhandled locale errors
      window.addEventListener('unhandledrejection', (event) => {
        if (event.reason && event.reason.toString().includes('i18n')) {
          console.error('Unhandled i18n promise rejection:', event.reason)
        }
      })
      
      console.log('App mounted, current locale:', $locale)
    } catch (error) {
      console.error('App: Error synchronizing locale:', error)
    }
  }
})
</script>