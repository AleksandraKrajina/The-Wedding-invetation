<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-300" 
    :class="[scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4']"
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
        <div class="hidden md:flex gap-8 items-center">
          <a 
            v-for="item in navItems" 
            :key="item.name" 
            class="font-medium transition-all duration-200 hover:text-[#FFC0CB]" 
            :class="[scrolled ? 'text-gray-800' : 'text-white']"
            :href="item.link"
          >
            {{ item.name }}
          </a>
          <button 
            class="ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            :class="[
              scrolled 
                ? 'bg-[#FFC0CB] text-white hover:bg-[#FFB0BB]' 
                : 'bg-white text-gray-900 hover:bg-gray-100'
            ]"
          >
            Book Now
          </button>
        </div>
 
        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden relative z-10"
          :class="[scrolled ? 'text-gray-800' : 'text-white']"
        >
          <i class="pi" :class="isOpen ? 'pi-times' : 'pi-bars'"></i>
        </button>
      </div>
    </div>
 
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isOpen" 
      class="md:hidden fixed inset-0 bg-white z-40 flex items-center justify-center"
    >
      <div class="flex flex-col space-y-8 text-center">
        <a 
          v-for="item in navItems" 
          :key="item.name"
          class="text-xl text-gray-800 font-medium hover:text-[#FFC0CB] transition-all" 
          :href="item.link"
          @click="isOpen = false"
        >
          {{ item.name }}
        </a>
        <button 
          @click="isOpen = false"
          class="mx-auto mt-6 px-8 py-3 bg-[#FFC0CB] text-white rounded-full font-medium hover:bg-[#FFB0BB] transition-all"
        >
          Book Now
        </button>
      </div>
    </div>
  </nav>
</template>
 
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  {'name': 'Home', 'link': '#'},
  {'name': 'Services', 'link': '#process'},
  {'name': 'Portfolio', 'link': '#work'},
  {'name': 'Pricing', 'link': '#price'},
  {'name': 'Contact', 'link': '#contact'}
]

const isOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>