<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-300" 
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
        <div class="hidden md:flex gap-8 items-center">
          <a 
            v-for="item in navItems" 
            :key="item.name" 
            class="font-medium transition-all duration-200 " 
            :href="item.link"
            :class="[
              scrolled 
                ? 'text-black text-opacity-90 hover:text-amber-200' 
                : 'bg-transparent text-white hover:bg-white hover:bg-opacity-10'
            ]"
          >
            {{ item.name }}
          </a>
          <button 
            class="ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 border border-amber-50 border-opacity-30 hover:border-opacity-50"
            :class="[
              scrolled 
                ? 'bg-amber-50 text-stone-800 hover:bg-amber-100' 
                : 'bg-transparent text-white hover:bg-white hover:bg-opacity-10'
            ]"
          >
            Book Now
          </button>
        </div>
 
        <!-- Mobile Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden relative z-10 text-white"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
 
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isOpen" 
      class="md:hidden fixed inset-0 bg-gradient-to-br from-gray-800 via-stone-700 to-neutral-700 z-40 flex items-center justify-center"
    >
      <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
      <div class="flex flex-col space-y-8 text-center relative z-10">
        <a 
          v-for="item in navItems" 
          :key="item.name"
          class="text-xl text-white text-opacity-90 font-medium hover:text-amber-50 transition-all" 
          :href="item.link"
          @click="isOpen = false"
        >
          {{ item.name }}
        </a>
        <button 
          @click="isOpen = false"
          class="mx-auto mt-6 px-8 py-3 bg-amber-50 text-stone-800 rounded-full font-medium hover:bg-amber-100 transition-all shadow-md"
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