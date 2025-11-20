<template>
  <div>
    <!-- Regular Navigation -->
    <nav v-show="!isOpen" class="fixed w-full z-40 transition-all duration-300"
      :class="[scrolled ? 'bg-amber-50 bg-opacity-90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4']">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="relative z-10">
            <img src="/assets/images/logo/4.png" class="h-8 transition-all duration-300" alt="Vow Perfect Logo" />
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex gap-6 items-center">
            <a v-for="item in navItems" :key="item.link" class="font-medium transition-all duration-200 cursor-pointer"
              @click="scrollToSection(item.link)"
              :class="[scrolled ? 'text-black text-opacity-90 hover:text-amber-200' : 'bg-transparent text-white hover:bg-white hover:bg-opacity-10']">
              {{ item.name }}
            </a>

            <!-- CTA Button -->
            <button @click="openBookingModal"
              class="ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 border border-amber-50 border-opacity-30 hover:border-opacity-50"
              :class="[scrolled ? 'bg-amber-50 text-stone-800 hover:bg-amber-100' : 'bg-transparent text-white hover:bg-white hover:bg-opacity-10']">
              Book Now
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="md:hidden relative z-50" :class="[
            scrolled
              ? 'text-stone-800'
              : 'text-white'
          ]">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Full Screen Mobile Menu Overlay -->
    <div v-if="isOpen" class="fixed inset-0 z-50 md:hidden">
      <!-- Overlay background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-stone-700 to-neutral-700 opacity-98"></div>

      <!-- Mobile Header with Close Button -->
      <div class="absolute top-0 left-0 right-0 flex justify-end p-6 z-50">
        <button @click="closeMobileMenu" class="text-white opacity-70 hover:opacity-100" aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu content -->
      <div class="flex flex-col min-h-screen justify-center items-center py-16 px-6 relative z-10 overflow-y-auto">
        <!-- Nav links -->
        <div class="flex flex-col space-y-8 text-center">
          <a v-for="item in navItems" :key="item.link"
            class="text-xl text-white text-opacity-90 font-medium hover:text-amber-50 transition-all cursor-pointer"
            @click="scrollToSectionAndCloseMobile(item.link)">
            {{ item.name }}
          </a>
        </div>

        <!-- Mobile CTA Button -->
        <button @click="openBookingModal"
          class="w-full max-w-xs px-8 py-3 mt-16 bg-amber-50 text-stone-800 rounded-full font-medium hover:bg-amber-100 transition-all shadow-md">
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Emit events for parent components
const emit = defineEmits(['open-booking-modal'])

// UI state
const isOpen = ref(false)
const scrolled = ref(false)
const scrollPosition = ref(0)

// Navigation items - hardcoded in English
const navItems = [
  { name: 'Home', link: '#' },
  { name: 'Services', link: '#process' },
  { name: 'Portfolio', link: '#work' },
  { name: 'Pricing', link: '#pricing' },
  { name: 'Contact', link: '#contact' }
]

// Set up scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)

  // Restore scroll if menu was open
  if (isOpen.value) {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.overflow = ''
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

// Smooth scroll to section function
const scrollToSection = (sectionId) => {
  if (!sectionId || sectionId === '#') {
    // Scroll to top for home
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return
  }

  const section = document.querySelector(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  } else {
    console.warn(`Section with ID ${sectionId} not found`)
  }
}

// Smooth scroll + close mobile menu
const scrollToSectionAndCloseMobile = (sectionId) => {
  closeMobileMenu()

  // Small delay to ensure menu is closed before scrolling
  setTimeout(() => {
    scrollToSection(sectionId)
  }, 150)
}

// Handle booking modal
const openBookingModal = () => {
  emit('open-booking-modal')
  if (isOpen.value) {
    closeMobileMenu()
  }
}
</script>