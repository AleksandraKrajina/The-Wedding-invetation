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

  <LanguageSwitcher />

    <!-- Color switcher -->
    <select v-model="selectedColor" class="border rounded px-2 py-1 text-sm bg-white/20">
      <option v-for="c in colors" :key="c.value" :value="c.value">
        {{ c.name }}
      </option>
    </select>
  </nav>
</template>
