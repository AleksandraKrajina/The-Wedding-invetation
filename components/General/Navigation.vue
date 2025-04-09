<template>
  <div>
    <!-- Regular Navigation -->
    <nav 
      v-show="!isOpen" 
      class="fixed w-full z-40 transition-all duration-300" 
      :class="[scrolled ? 'bg-amber-50 bg-opacity-90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4']"
    >
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="relative z-10">
            <img 
              src="/assets/images/logo/4.png" 
              class="w-20 transition-all duration-300" 
              alt="Vow Perfect Logo" 
            />
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex gap-6 items-center">
            <a
              v-for="item in navItems"
              :key="item.link"
              class="font-medium transition-all duration-200"
              :href="item.link"
              :class="[scrolled ? 'text-black text-opacity-90 hover:text-amber-200' : 'bg-transparent text-white hover:bg-white hover:bg-opacity-10']"
            >
              {{ item.name }}
            </a>

            <!-- Language Switcher -->
            <div class="relative ml-4">
              <button 
                @click.stop="toggleLanguageMenu"
                class="flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-200 border focus:outline-none"
                :class="[
                  scrolled 
                    ? 'bg-white bg-opacity-70 text-stone-800 border-amber-200 hover:bg-amber-50' 
                    : 'bg-white bg-opacity-10 text-white border-white border-opacity-30 hover:bg-opacity-20'
                ]"
              >
                <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
                  <img v-if="currentLocale === 'en'" src="/assets/images/flags/en.svg" alt="English" class="w-full h-full object-cover" />
                  <img v-else-if="currentLocale === 'sr'" src="/assets/images/flags/sr.svg" alt="Serbian" class="w-full h-full object-cover" />
                </span>
                <span class="text-sm font-medium">{{ currentLocale === 'en' ? 'EN' : 'SR' }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Language Dropdown -->
              <div 
                v-if="isLangMenuOpen" 
                class="absolute right-0 mt-2 py-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-amber-100"
              >
                <button
                  v-for="loc in ['en', 'sr']"
                  :key="loc"
                  @click.stop="changeLanguage(loc)"
                  class="flex items-center gap-3 w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-amber-50 transition-colors"
                  :class="{ 'bg-amber-50': currentLocale === loc }"
                >
                  <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
                    <img 
                      :src="`/assets/images/flags/${loc}.svg`" 
                      :alt="loc === 'en' ? 'English' : 'Serbian'"
                      class="w-full h-full object-cover" 
                    />
                  </span>
                  <span>{{ loc === 'en' ? 'English' : 'Serbian' }}</span>
                </button>
              </div>
            </div>

            <!-- CTA Button -->
            <button
              class="ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 border border-amber-50 border-opacity-30 hover:border-opacity-50"
              :class="[scrolled ? 'bg-amber-50 text-stone-800 hover:bg-amber-100' : 'bg-transparent text-white hover:bg-white hover:bg-opacity-10']"
            >
              {{ $t('bookNow') }}
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu" 
            class="md:hidden relative z-50"
            :class="[
              scrolled 
                ? 'text-stone-800' 
                : 'text-white'
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Full Screen Mobile Menu Overlay -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 md:hidden"
    >
      <!-- Overlay background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-stone-700 to-neutral-700 opacity-98"></div>
      
      <!-- Mobile Header with Close Button -->
      <div class="absolute top-0 left-0 right-0 flex justify-end p-6 z-50">
        <button 
          @click="closeMobileMenu" 
          class="text-white opacity-70 hover:opacity-100"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <!-- Menu content -->
      <div class="flex flex-col min-h-screen justify-center items-center py-16 px-6 relative z-10 overflow-y-auto">
        <!-- Nav links -->
        <div class="flex flex-col space-y-8 text-center">
          <a
            v-for="item in navItems"
            :key="item.link" 
            class="text-xl text-white text-opacity-90 font-medium hover:text-amber-50 transition-all"
            :href="item.link"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile CTA Button -->
        <button
          @click="closeMobileMenu"
          class="w-full max-w-xs px-8 py-3 mt-16 bg-amber-50 text-stone-800 rounded-full font-medium hover:bg-amber-100 transition-all shadow-md"
        >
          {{ $t('bookNow') }}
        </button>

        <!-- Mobile Language Switcher -->
        <div class="flex gap-4 mt-10">
          <button
            v-for="loc in ['en', 'sr']"
            :key="loc"
            @click="changeLanguageAndCloseMobile(loc)"
            class="flex items-center gap-2 px-4 py-2 rounded-lg border border-white border-opacity-30 transition-all"
            :class="currentLocale === loc ? 'bg-white bg-opacity-10 text-amber-50' : 'text-white text-opacity-90 hover:bg-white hover:bg-opacity-5'"
          >
            <span class="w-5 h-5 flex-shrink-0 overflow-hidden rounded-full">
              <img 
                :src="`/assets/images/flags/${loc}.svg`" 
                :alt="loc === 'en' ? 'English' : 'Serbian'"
                class="w-full h-full object-cover" 
              />
            </span>
            <span>{{ loc === 'en' ? 'English' : 'Serbian' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { getSavedLocale, saveLocalePreference } from '~/utils/geoDetection'

// Use the automatically provided useI18n composable
const { $t, $locale, $switchLocale } = useI18n()

// UI state
const isOpen = ref(false)
const scrolled = ref(false)
const isLangMenuOpen = ref(false)
const scrollPosition = ref(0)

// Create a separate reactive reference for the current locale
// This ensures we have proper reactivity for the UI
const currentLocale = ref($locale || getSavedLocale() || 'en')

// Navigation items - will update reactively when locale changes
const navItems = computed(() => [
  { name: $t('home'), link: '#' },
  { name: $t('services'), link: '#process' },
  { name: $t('portfolio'), link: '#work' },
  { name: $t('pricing'), link: '#price' },
  { name: $t('contact'), link: '#contact' }
])

// Set up watcher for locale changes
watch(() => $locale, (newLocale) => {
  console.log(`Navigation detected locale change to: ${newLocale}`)
  currentLocale.value = newLocale
}, { immediate: true })

// Function to handle forced locale updates from LocaleDetector
const handleForceLocaleUpdate = async (event) => {
  const { locale } = event.detail || {}
  if (locale) {
    console.log(`Navigation: Received force locale update to ${locale}`)
    currentLocale.value = locale
    
    // Force a nextTick to update the UI
    await nextTick()
  }
}

// Set up scroll event listener
onMounted(async () => {
  if (process.client) {
    // Set up event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('force-locale-update', handleForceLocaleUpdate)
    
    // Initial scroll check
    handleScroll()
    
    // Check saved preference to ensure we're in sync
    const savedLocale = getSavedLocale()
    if (savedLocale && savedLocale !== currentLocale.value) {
      console.log(`Navigation: Saved locale (${savedLocale}) doesn't match current (${currentLocale.value}), updating`)
      currentLocale.value = savedLocale
      // Wait a tick for UI to update
      await nextTick()
    }
    
    // Debug
    console.log('Navigation mounted, current locale:', currentLocale.value, 'system locale:', $locale)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('force-locale-update', handleForceLocaleUpdate)
    document.removeEventListener('click', closeLanguageMenu)

    // Restore scroll if menu was open
    if (isOpen.value) {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }
})

const toggleMobileMenu = () => {
  if (!isOpen.value) {
    scrollPosition.value = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollPosition.value}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
  } else {
    closeMobileMenu()
  }

  isOpen.value = !isOpen.value
}

const closeMobileMenu = () => {
  isOpen.value = false
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  document.body.style.overflow = ''
  window.scrollTo(0, scrollPosition.value)
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const handleResize = () => {
  if (window.innerWidth >= 768 && isOpen.value) {
    closeMobileMenu()
  }
}

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
    
    // Save preference
    saveLocalePreference(lang)
    
    // Force a nextTick to update the UI
    await nextTick()
    
    console.log(`Language changed to ${lang} successfully`)
  } catch (error) {
    console.error(`Failed to change language to ${lang}:`, error)
  }
  
  // Close language menu
  isLangMenuOpen.value = false
}

const changeLanguageAndCloseMobile = (lang) => {
  changeLanguage(lang)
  closeMobileMenu()
}
</script>