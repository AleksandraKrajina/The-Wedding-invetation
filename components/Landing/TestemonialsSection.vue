<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    
    <!-- Decorative circles -->
    <div class="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -right-32 bottom-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading with modern typography -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">{{ $t('testimonials') }}</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              {{ $t('clientsSay') }}
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            {{ $t('testimonialsSubtitle') }}
          </p>
        </div>
        
        <!-- Testimonial Carousel -->
        <div class="relative">
          <!-- Navigation Buttons - More minimal and elegant -->
          <button 
            @click="prevSlide" 
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:-left-10 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-neutral-400 hover:text-neutral-800 transition-colors"
            aria-label="Previous testimonial"
          >
            <i class="pi pi-chevron-left"></i>
          </button>
          
          <button 
            @click="nextSlide" 
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:-right-10 w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-neutral-400 hover:text-neutral-800 transition-colors"
            aria-label="Next testimonial"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
          
          <!-- Carousel Container -->
          <div class="overflow-hidden mx-8 lg:mx-16">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <!-- Testimonial 1 - More minimal and elegant design -->
              <div class="w-full flex-shrink-0 px-4 md:px-8">
                <div class="bg-white rounded-lg shadow-sm p-10 md:p-12">
                  <div class="flex flex-col md:flex-row md:items-center gap-8">
                    <!-- Author Image -->
                    <div class="flex-shrink-0 mx-auto md:mx-0">
                      <div class="w-20 h-20 rounded-full overflow-hidden border border-stone-200">
                        <img 
                          src="/assets/images/demo1/couple1.jpg" 
                          alt="Sarah & Michael" 
                          class="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1">
                      <!-- Quote -->
                      <blockquote class="text-lg md:text-xl text-neutral-700 mb-6 relative">
                        <span class="absolute -top-6 -left-2 text-5xl text-stone-200">"</span>
                        <p class="relative z-10">{{ $t('testimonial1') }}</p>
                      </blockquote>
                      
                      <!-- Author Info -->
                      <div>
                        <p class="font-medium text-neutral-800">{{ $t('couple1') }}</p>
                        <p class="text-stone-500 text-sm">{{ $t('date1') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 2 -->
              <div class="w-full flex-shrink-0 px-4 md:px-8">
                <div class="bg-white rounded-lg shadow-sm p-10 md:p-12">
                  <div class="flex flex-col md:flex-row md:items-center gap-8">
                    <!-- Author Image -->
                    <div class="flex-shrink-0 mx-auto md:mx-0">
                      <div class="w-20 h-20 rounded-full overflow-hidden border border-stone-200">
                        <img 
                          src="/assets/images/demo1/couple1.jpg" 
                          alt="Emily & John" 
                          class="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1">
                      <!-- Quote -->
                      <blockquote class="text-lg md:text-xl text-neutral-700 mb-6 relative">
                        <span class="absolute -top-6 -left-2 text-5xl text-stone-200">"</span>
                        <p class="relative z-10">{{ $t('testimonial2') }}</p>
                      </blockquote>
                      
                      <!-- Author Info -->
                      <div>
                        <p class="font-medium text-neutral-800">{{ $t('couple2') }}</p>
                        <p class="text-stone-500 text-sm">{{ $t('date2') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 3 -->
              <div class="w-full flex-shrink-0 px-4 md:px-8">
                <div class="bg-white rounded-lg shadow-sm p-10 md:p-12">
                  <div class="flex flex-col md:flex-row md:items-center gap-8">
                    <!-- Author Image -->
                    <div class="flex-shrink-0 mx-auto md:mx-0">
                      <div class="w-20 h-20 rounded-full overflow-hidden border border-stone-200">
                        <img 
                          src="/assets/images/demo1/couple1.jpg" 
                          alt="Lisa & David" 
                          class="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <!-- Content -->
                    <div class="flex-1">
                      <!-- Quote -->
                      <blockquote class="text-lg md:text-xl text-neutral-700 mb-6 relative">
                        <span class="absolute -top-6 -left-2 text-5xl text-stone-200">"</span>
                        <p class="relative z-10">{{ $t('testimonial3') }}</p>
                      </blockquote>
                      
                      <!-- Author Info -->
                      <div>
                        <p class="font-medium text-neutral-800">{{ $t('couple3') }}</p>
                        <p class="text-stone-500 text-sm">{{ $t('date3') }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Modern Carousel Indicators -->
        <div class="flex justify-center mt-10 gap-3">
          <button 
            v-for="(_, index) in 3" 
            :key="index"
            @click="currentIndex = index"
            class="w-8 h-1 rounded-sm transition-all duration-300"
            :class="currentIndex === index ? 'bg-neutral-800' : 'bg-neutral-300'"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Get automatic i18n functions
const { $t } = useI18n()

const currentIndex = ref(0)
const slideCount = 3

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slideCount
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slideCount) % slideCount
}

// Auto-advance carousel every 5 seconds
let autoPlayInterval = null

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
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
</style>