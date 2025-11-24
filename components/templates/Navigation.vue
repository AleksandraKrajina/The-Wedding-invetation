<script setup lang="ts">
import { NuxtLink } from "#components"
import { ref, watch, nextTick } from 'vue'
import { saveLocalePreference } from '~/utils/geoDetection'


const colors = [
  { name: 'Crna', value: '#000000' },
  { name: 'Plava', value: '#4B7DBD' },
  { name: 'Braon', value: '#92400e' },
  { name: 'Roze', value: '#ec4899' },
  { name: 'Zelena', value: '#16a34a' }
]

const selectedColor = ref(colors[0].value)

watch(selectedColor, (newColor) => {
  document.documentElement.style.setProperty('--text-color', newColor)
})

const isOpen = ref(false)
const scrolled = ref(false)

//const { $locale, $switchLocale } = useI18n()

const isLangMenuOpen = ref(false)

const isBrowser = typeof window !== 'undefined';


const currentLocale = ref($locale || 'en')


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
const changeLanguage = async (lang) => {
  if (lang === currentLocale.value) return

  console.log(`Changing language to ${lang}`)

  try {
    // Update our local reference immediately to ensure UI updates
    currentLocale.value = lang

    // Use the built-in function to switch locale
    await $switchLocale(lang)

    // Save preference (client-side only)
    if (isBrowser) {
      saveLocalePreference(lang)
    }

    // Force a nextTick to update the UI
    await nextTick()

    console.log(`Language changed to ${lang} successfully`)
  } catch (error) {
    console.error(`Failed to change language to ${lang}:`, error)
  }

  // Close language menu
  isLangMenuOpen.value = false
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b flex items-center justify-end gap-2 px-4 py-2">
    <NuxtLink to="../" class="text-xl pl-16 p-2  border-r mr-auto text-[color:var(--text-color)]"> Back to home
    </NuxtLink>

    <!-- Language Switcher -->
    <button
      class="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 border focus:outline-none"
      :class="[
        scrolled
          ? 'bg-white bg-opacity-70 text-stone-800 border-amber-200 hover:bg-amber-50'
          : 'bg-white bg-opacity-10 text-[color:var(--text-color)] border-white border-opacity-30 hover:bg-opacity-20'
      ]" @click.stop="toggleLanguageMenu">
      <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
        <img v-if="currentLocale === 'en'" src="/assets/images/flags/en.svg" alt="English"
          class="w-full h-full object-cover">
        <img v-else-if="currentLocale === 'sr'" src="/assets/images/flags/sr.svg" alt="Serbian"
          class="w-full h-full object-cover">
      </span>
      <span class="text-sm font-medium">{{ currentLocale === 'en' ? 'EN' : 'SR' }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Language Dropdown -->
    <div v-if="isLangMenuOpen"
      class="absolute right-0 mt-2 py-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-amber-100">
      <button v-for="loc in ['en', 'sr']" :key="loc"
        class="flex items-center gap-3 w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-amber-50 transition-colors"
        :class="{ 'bg-amber-50': currentLocale === loc }" @click.stop="changeLanguage(loc)">
        <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
          <img :src="`/assets/images/flags/${loc}.svg`" :alt="loc === 'en' ? 'English' : 'Serbian'"
            class="w-full h-full object-cover">
        </span>
        <span>{{ loc === 'en' ? 'English' : 'Serbian' }}</span>
      </button>
    </div>


    <select v-model="selectedColor" class="border block rounded px-2 py-1 text-sm bg-white/20">
      <option v-for="c in colors" :key="c.value" :value="c.value">
        {{ c.name }}
      </option>
    </select>
  </nav>
</template>
