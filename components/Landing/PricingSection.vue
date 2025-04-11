<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiM5MDkwOTAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
    <div class="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -right-32 top-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10" id="price">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading -->
        <div class="mb-16 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">{{ $t('pricing') }}</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              {{ $t('pricingTitle') }}
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            {{ $t('pricingSubtitle') }}
          </p>
        </div>
        
        <!-- Limited Time Offer Banner -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex items-center py-3 px-6 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg shadow-sm">
            <i class="pi pi-tag text-amber-600 mr-3 text-lg"></i>
            <span class="text-neutral-800 font-medium">{{ $t('limitedTimeOffer') }}: <span class="text-amber-600 font-semibold">15% {{ $t('ctaOffText') }}</span></span>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <!-- Basic Plan -->
          <div class="group bg-white rounded-lg border border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-300 overflow-hidden">
            <div class="p-4 bg-neutral-50 border-b border-neutral-100">
              <div class="text-center">
                <h3 class="text-2xl font-medium text-neutral-800 mb-4">{{ $t('basicPlan') }}</h3>
                
                <!-- Price Display - Improved Version -->
                <div class="mt-2 relative flex flex-col items-center">
                  <!-- Original price with strike through -->
                  <div class="original-price flex items-center justify-center mb-1">
                    <span class="text-xl text-neutral-500 font-normal relative">
                      <span class="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
                        <span class="h-px w-full bg-neutral-400 transform rotate-12 absolute"></span>
                      </span>
                      $129
                    </span>
                  </div>
                  
                  <!-- Current price -->
                  <div class="flex items-baseline gap-2">
                    <span class="text-5xl font-light text-neutral-800">$99</span>
                    <div class="bg-amber-100 py-1 px-3 rounded-full flex items-center text-amber-700 font-bold text-xs border border-amber-200">
                      -15%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="p-8">
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('basicFeature1') }}</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('basicFeature2') }}</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('basicFeature3') }}</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('basicFeature4') }}</span>
                </li>
              </ul>
              
              <button 
                @click="openPackageModal('basic')"
                class="w-full py-3.5 px-6 border border-neutral-300 text-neutral-800 font-medium rounded-full transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-800 group-hover:border-neutral-800"
              >
                {{ $t('chooseBasic') }}
              </button>
            </div>
          </div>
          
          <!-- Premium Plan -->
          <div class="group bg-white rounded-lg border border-neutral-300 shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-lg scale-100 hover:scale-[1.02] origin-center">
            <!-- Popular badge -->
            <div class="absolute top-0 right-0 bg-neutral-800 text-white py-1 px-4 text-sm font-medium">
              {{ $t('mostPopular') }}
            </div>
            
            <div class="p-4 bg-neutral-50 border-b border-neutral-100">
              <div class="text-center">
                <h3 class="text-2xl font-medium text-neutral-800 mb-4">{{ $t('premiumPlan') }}</h3>
                
                <!-- Price Display - Improved Version -->
                <div class="mt-2 relative flex flex-col items-center">
                  <!-- Original price with strike through -->
                  <div class="original-price flex items-center justify-center mb-1">
                    <span class="text-xl text-neutral-500 font-normal relative">
                      <span class="absolute inset-y-0 left-0 right-0 flex items-center justify-center">
                        <span class="h-px w-full bg-neutral-400 transform rotate-12 absolute"></span>
                      </span>
                      $249
                    </span>
                  </div>
                  
                  <!-- Current price -->
                  <div class="flex items-baseline gap-2">
                    <span class="text-5xl font-light text-neutral-800">$199</span>
                    <div class="bg-amber-100 py-1 px-3 rounded-full flex items-center text-amber-700 font-bold text-xs border border-amber-200">
                      -20%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="p-8">
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('premiumFeature1') }}</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('premiumFeature2') }}</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('premiumFeature3') }}</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('premiumFeature4') }}</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">{{ $t('premiumFeature5') }}</span>
                </li>
              </ul>
              
              <button 
                @click="openPackageModal('premium')"
                class="w-full py-3.5 px-6 bg-neutral-800 text-white font-medium rounded-full transition-all duration-300 hover:bg-neutral-700"
              >
                {{ $t('choosePremium') }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Timer with nicer styling -->
        <div class="flex justify-center mt-12">
          <div class="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-sm border border-neutral-200">
            <i class="pi pi-clock text-amber-500"></i>
            <span class="text-neutral-700">{{ $t('offerEndsIn') }} <span class="font-semibold text-neutral-800">14</span> {{ $t('days') }}</span>
          </div>
        </div>
        
        <!-- Additional note -->
        <p class="text-center text-neutral-500 mt-6 max-w-xl mx-auto text-sm">
          {{ $t('pricingNote') }} <a href="#contact" class="text-neutral-800 underline hover:no-underline">{{ $t('contactUs') }}</a> {{ $t('forFreeConsultation') }}
        </p>
      </div>
    </div>
    
    <!-- Package Selection Modal -->
    <GeneralPackageSelectionModal 
      v-model="showPackageModal"
      :selected-package="selectedPackage"
      @form-submitted="handleFormSubmitted"
      @book-consultation="handleBookConsultation"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useNuxtApp } from '#app'

// Get i18n from Nuxt app instance
const nuxtApp = useNuxtApp()

// Package selection state
const showPackageModal = ref(false)
const selectedPackage = ref('')

// Open package modal with specified package
const openPackageModal = (packageType) => {
  selectedPackage.value = packageType
  showPackageModal.value = true
}

// Handle form submission
const handleFormSubmitted = (formData) => {
  console.log('Package selection form submitted:', formData)
  // Here you would typically send this data to your backend
  // You could also store this in your state management if needed
}

// Handle book consultation click
const handleBookConsultation = () => {
  // Navigate to contact section or trigger a global event to open the booking modal
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  
  // Alternative: emit an event to open the booking modal from a parent component
  // e.g., emits('open-booking-modal')
}

// Translation function that wraps the i18n.t method
const $t = (key) => {
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

/* Apply gentle reveal animations when section comes into view */
section {
  animation: fadeIn 1s ease-out forwards;
}

/* Improve the strikethrough for original prices */
.original-price {
  position: relative;
  margin-bottom: 0.25rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
}
</style>