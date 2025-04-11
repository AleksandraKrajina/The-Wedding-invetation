<template>
  <section class="relative py-10 my-16 overflow-hidden w-full md:w-5/6 lg:w-4/5 mx-auto rounded-2xl bg-stone-800">
    <!-- Enhanced gradient background with more dimension -->
    <div class="absolute inset-0 bg-gradient-to-br from-stone-800 via-neutral-700 to-stone-700"></div>
    
    <!-- Decorative elements for modern look -->
    <div class="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-amber-500 opacity-10"></div>
    <div class="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-amber-400 opacity-10 blur-3xl"></div>
    <div class="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-stone-500 opacity-20 blur-3xl"></div>
    
    <!-- Background image with enhanced blend mode -->
    <img
      src="/assets/images/template3.jpg"
      class="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-50"
      alt="Elegant Wedding Background"
    />
    
    <!-- Content container with modern layout -->
    <div class="container mx-auto px-6 py-6 relative z-10">
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        <!-- Pre-heading with slight glow effect -->
        <div class="inline-block px-4 py-1 rounded-full bg-white bg-opacity-10 backdrop-blur-sm mb-6">
          <span class="text-amber-50 text-sm tracking-widest uppercase font-medium">{{ t('limitedTimeOffer') }}</span>
        </div>
        
        <!-- Main heading with modern typography and accent elements -->
        <h2 class="text-3xl sm:text-4xl md:text-4xl font-light text-white mb-6 text-center leading-tight">
          <span class="font-thin">{{ t('ctaGetText') }}</span> 
          <span class="relative inline-block px-1">
            <span class="relative z-10">15% {{ t('ctaOffText') }}</span>
            <span class="absolute bottom-2 left-0 w-full h-2 bg-amber-400 opacity-20 -skew-y-1"></span>
          </span> 
          <span class="font-thin">{{ t('ctaWebsiteText') }}</span>
        </h2>
        
        <!-- Subtext with improved readability -->
        <p class="text-lg md:text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-center font-light">
          {{ t('ctaDescription') }}
        </p>
        
        <!-- CTA buttons with enhanced styling -->
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button 
            @click="showModal = true"
            class="bg-gradient-to-r from-amber-50 to-amber-100 text-stone-800 px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
          >
            {{ t('bookNow') }}
          </button>
          <!-- <button class="bg-transparent backdrop-blur-sm bg-white bg-opacity-5 border border-amber-50 border-opacity-30 text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1">
            {{ t('learnMore') }}
          </button> -->
        </div>
        
        <!-- Additional info with improved visual treatment -->
        <div class="mt-10 flex items-center gap-2 px-5 py-2 bg-stone-900 bg-opacity-60 backdrop-blur-sm rounded-full border border-white border-opacity-10">
          <i class="pi pi-clock text-amber-200"></i> 
          <span class="text-white text-opacity-90 text-sm">{{ t('offerEndsIn') }} <span class="font-medium text-amber-200">14</span> {{ t('days') }}</span>
        </div>
      </div>
    </div>
    
    <!-- Shared BookingModal component -->
    <GeneralBookingModal 
      v-model="showModal" 
      theme="amber" 
      :google-calendar-url="googleCalendarUrl" 
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNuxtApp } from '#app'

// Get i18n from Nuxt app instance
const nuxtApp = useNuxtApp()

// Google Calendar booking URL - Replace with your actual calendar scheduling link
const googleCalendarUrl = 'https://calendar.app.google/sZ4ZFaiQuwhHcbMP8'

// State for modal visibility
const showModal = ref(false)

// Translation function that wraps the i18n.t method
const t = (key) => {
  if (!nuxtApp.$i18n) return key
  try {
    return nuxtApp.$i18n.t(key) || key
  } catch (error) {
    console.error(`Translation error for key "${key}":`, error)
    return key
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply subtle animations */
section {
  animation: fadeIn 1s ease-out forwards;
}

h2, p, div > button, .mt-10 {
  opacity: 0;
  animation: slideUp 0.8s forwards;
}

p {
  animation-delay: 0.2s;
}

div > button:first-child {
  animation-delay: 0.3s;
}

div > button:last-child {
  animation-delay: 0.4s;
}

.mt-10 {
  animation-delay: 0.5s;
}

/* Add a slight glow effect on hover for the primary button */
div > button:first-child:hover {
  box-shadow: 0 0 15px rgba(254, 243, 199, 0.3);
}
</style>