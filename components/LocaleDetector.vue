<template>
  <!-- This component doesn't render anything, it just handles locale detection -->
  <div style="display: none;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useNuxtApp } from '#app'
import { isInBalkanRegion, getSavedLocale, saveLocalePreference } from '~/utils/geoDetection'

// Create a ref to track initialization
const initialized = ref(false)

// Run locale detection on client-side
onMounted(async () => {
  if (initialized.value) return
  
  try {
    // Get i18n instance
    const nuxtApp = useNuxtApp()
    if (!nuxtApp.$i18n) {
      console.warn('i18n instance not found in nuxtApp')
      return
    }
    
    // Step 1: Check for saved preference
    const savedLocale = getSavedLocale()
    if (savedLocale) {
      console.log('Using saved locale preference:', savedLocale)
      await changeLocale(nuxtApp.$i18n, savedLocale)
      initialized.value = true
      return
    }
    
    // Step 2: Check browser language
    if (process.client) {
      const browserLang = navigator.language || navigator.userLanguage
      if (browserLang && browserLang.startsWith('sr')) {
        console.log('Using browser language (Serbian)')
        await changeLocale(nuxtApp.$i18n, 'sr')
        saveLocalePreference('sr')
        initialized.value = true
        return
      }
    }
    
    // Step 3: Check geolocation
    const inBalkanRegion = await isInBalkanRegion()
    if (inBalkanRegion) {
      console.log('User detected in Balkan region, setting Serbian')
      await changeLocale(nuxtApp.$i18n, 'sr')
      saveLocalePreference('sr')
    } else {
      console.log('Using default locale (English)')
      await changeLocale(nuxtApp.$i18n, 'en')
      saveLocalePreference('en')
    }
    
    initialized.value = true
  } catch (error) {
    console.error('Error in locale detection:', error)
  }
})

// Helper function to change locale
async function changeLocale(i18n, locale) {
  try {
    console.log(`Changing locale to ${locale}`)
    
    // First try the setLocale method (recommended for nuxt-i18n-micro)
    if (typeof i18n.setLocale === 'function') {
      await i18n.setLocale(locale)
      console.log(`Locale set to ${locale} using setLocale method`)
    } else {
      // Direct assignment as fallback
      i18n.locale = locale
      console.log(`Locale set to ${locale} using direct assignment`)
    }
    
    // Verify the locale was changed
    console.log('Current locale after change:', i18n.locale)
    
    // Force a reactivity refresh
    if (process.client) {
      setTimeout(() => {
        window.dispatchEvent(new Event('locale-changed'))
      }, 0)
    }
    
    return true
  } catch (error) {
    console.error('Error changing locale:', error)
    return false
  }
}
</script>