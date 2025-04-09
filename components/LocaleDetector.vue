<template>
  <!-- This component doesn't render anything, it just handles locale detection -->
  <div style="display: none;"></div>
</template>

<script setup>
import { onMounted, ref, nextTick } from 'vue'
import { isInBalkanRegion, getSavedLocale, saveLocalePreference } from '~/utils/geoDetection'

// Get i18n functions from nuxt-i18n-micro
const { $locale, $switchLocale } = useI18n()

// Create a ref to track initialization
const initialized = ref(false)

// Run locale detection on client-side
onMounted(async () => {
  if (initialized.value) return
  
  try {
    if (!process.client) return

    console.log('LocaleDetector: Beginning locale detection')
    console.log('LocaleDetector: Initial locale is:', $locale)
    
    // Step 1: Check for saved preference
    const savedLocale = getSavedLocale()
    if (savedLocale) {
      console.log('LocaleDetector: Using saved locale preference:', savedLocale)
      await $switchLocale(savedLocale)
      
      // Ensure HTML lang is updated
      document.documentElement.setAttribute('lang', savedLocale)
      
      // Force a reload if the locale and document state don't match
      if (savedLocale !== $locale) {
        console.log('LocaleDetector: Locale mismatch, forcing update')
        await forceLocaleRefresh(savedLocale)
      }
      
      initialized.value = true
      return
    }
    
    // Step 2: Check browser language
    const browserLang = navigator.language || navigator.userLanguage
    if (browserLang && browserLang.startsWith('sr')) {
      console.log('LocaleDetector: Using browser language (Serbian)')
      await $switchLocale('sr')
      saveLocalePreference('sr')
      document.documentElement.setAttribute('lang', 'sr')
      await forceLocaleRefresh('sr')
      initialized.value = true
      return
    }
    
    // Step 3: Check geolocation
    const inBalkanRegion = await isInBalkanRegion()
    if (inBalkanRegion) {
      console.log('LocaleDetector: User detected in Balkan region, setting Serbian')
      await $switchLocale('sr')
      saveLocalePreference('sr')
      document.documentElement.setAttribute('lang', 'sr')
      await forceLocaleRefresh('sr')
    } else {
      console.log('LocaleDetector: Using default locale (English)')
      await $switchLocale('en')
      saveLocalePreference('en')
      document.documentElement.setAttribute('lang', 'en')
      await forceLocaleRefresh('en')
    }
    
    initialized.value = true
    console.log('LocaleDetector: Initialization complete, current locale:', $locale)
  } catch (error) {
    console.error('LocaleDetector: Error in locale detection:', error)
  }
})

// Helper function to force a locale refresh
async function forceLocaleRefresh(locale) {
  try {
    // Wait for the next tick to ensure Vue has updated
    await nextTick()
    
    // Dispatch a custom event that components can listen for
    window.dispatchEvent(new CustomEvent('force-locale-update', { 
      detail: { locale } 
    }))
    
    // Wait a moment for the change to propagate
    await new Promise(resolve => setTimeout(resolve, 50))
    
    // Log the final state
    console.log('LocaleDetector: Force refresh complete, locale is now:', $locale)
    return true
  } catch (error) {
    console.error('LocaleDetector: Error in force refresh:', error)
    return false
  }
}
</script>