<script setup lang="ts">
import { NuxtLink } from "#components"
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useNuxtApp } from '#app'
import { saveLocalePreference } from '~/utils/geoDetection'


// Color switcher
const colors = [
  { name: "Crna", value: "#000000" },
  { name: "Plava", value: "#4B7DBD" },
  { name: "Braon", value: "#92400e" },
  { name: "Roze", value: "#ec4899" },
  { name: "Zelena", value: "#16a34a" }
]

const selectedColor = ref(colors[0].value)

watch(selectedColor, (newColor) => {
  document.documentElement.style.setProperty("--text-color", newColor)
})

// Mobile menu
const isOpen = ref(false)
const scrolled = ref(false)

// Language switcher (minimal)
const isLangMenuOpen = ref(false)
const currentLocale = ref("en")

const toggleLanguageMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value
}

const closeLanguageMenu = () => {
  isLangMenuOpen.value = false
}

const changeLanguage = (lang: string) => {
  currentLocale.value = lang
  saveLocalePreference(lang)
  closeLanguageMenu()
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b flex items-center justify-end gap-2 px-1 py-2">
    <NuxtLink to="../" class="text-xl pl-2 p-2 border-r mr-auto text-[color:var(--text-color)]">
      Back to home
    </NuxtLink>

    <div class="flex items-center space-x-6">

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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Dropdown -->
    <div v-if="isLangMenuOpen"
      class="absolute right-0 mt-2 py-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-amber-100">
      <button v-for="loc in ['en', 'sr']" :key="loc"
        class="flex items-center gap-3 w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-amber-50 transition-colors"
        :class="{ 'bg-amber-50': currentLocale === loc }" @click.stop="changeLanguage(loc)">
        <span class="w-5 h-5 rounded-full overflow-hidden">
          <img :src="`/assets/images/flags/${loc}.svg`" class="w-full h-full object-cover" />
        </span>
        {{ loc === "en" ? "English" : "Serbian" }}
      </button>
    </div>

    <!-- Color switcher -->
    <select v-model="selectedColor" class="border rounded px-2 py-1 text-sm bg-white/20">
      <option v-for="c in colors" :key="c.value" :value="c.value">
        {{ c.name }}
      </option>
    </select>
  </nav>
</template>
