<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  variant: {
    type: String,
    default: 'light', // 'light' or 'dark'
    validator: (value) => ['light', 'dark'].includes(value)
  }
})

// i18n composable
const { locale, locales, setLocale } = useI18n()

// State
const isOpen = ref(false)
const switcherRef = ref(null)

// Computed
const currentLocale = computed(() => locale.value)

const availableLocales = computed(() => {
  return locales.value
})

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = (newLocale) => {
  if (newLocale !== currentLocale.value) {
    setLocale(newLocale)
  }
  isOpen.value = false
}

const getCurrentLanguageName = () => {
  const current = availableLocales.value.find(l => l.code === currentLocale.value)
  return current ? current.name : currentLocale.value
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Smooth transitions */
button {
  -webkit-tap-highlight-color: transparent;
}
</style>

<template>
  <div class="relative" ref="switcherRef">
    <!-- Current Language Button -->
    <button @click="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200" :class="[
        variant === 'light'
          ? 'bg-white bg-opacity-70 text-stone-800 border-amber-200 hover:bg-amber-50'
          : 'bg-white bg-opacity-10 text-white border-white border-opacity-30 hover:bg-opacity-20'
      ]">
      <!-- Flag Icon -->
      <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
        <img :src="`/assets/images/flags/${currentLocale}.svg`" :alt="getCurrentLanguageName()"
          class="w-full h-full object-cover" />
      </span>

      <!-- Language Code -->
      <span class="text-sm font-medium uppercase">{{ currentLocale }}</span>

      <!-- Dropdown Arrow -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-if="isOpen"
        class="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg border border-amber-100 z-50 overflow-hidden">
        <button v-for="locale in availableLocales" :key="locale.code" @click="changeLanguage(locale.code)"
          class="flex items-center gap-3 w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-amber-50 transition-colors"
          :class="{ 'bg-amber-50 font-medium': currentLocale === locale.code }">
          <!-- Flag Icon -->
          <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
            <img :src="`/assets/images/flags/${locale.code}.svg`" :alt="locale.name"
              class="w-full h-full object-cover" />
          </span>

          <!-- Language Name -->
          <span>{{ locale.name }}</span>

          <!-- Checkmark for current language -->
          <span v-if="currentLocale === locale.code" class="ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-amber-600" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
    </Transition>
  </div>
</template>
