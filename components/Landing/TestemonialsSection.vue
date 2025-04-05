<template>
  <section class="py-20 bg-white opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-center mb-16">
          What Our Clients Say About Us
        </h2>
        
        <!-- Testimonial Carousel -->
        <div class="relative">
          <!-- Navigation Buttons -->
          <button 
            @click="prevSlide" 
            class="absolute left-0 top-1/2 -translate-y-1/2 z-10 lg:-left-5 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#FFC0CB] transition-colors"
            aria-label="Previous testimonial"
          >
            <i class="pi pi-chevron-left"></i>
          </button>
          
          <button 
            @click="nextSlide" 
            class="absolute right-0 top-1/2 -translate-y-1/2 z-10 lg:-right-5 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[#FFC0CB] transition-colors"
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
              <!-- Testimonial 1 -->
              <div class="w-full flex-shrink-0 px-4 md:px-8">
                <div class="bg-white rounded-lg border border-gray-100 shadow-sm p-8 md:p-10">
                  <!-- Quote Icon -->
                  <div class="flex justify-center mb-6">
                    <i class="pi pi-quote-right text-4xl text-[#FFC0CB] opacity-30"></i>
                  </div>
                  
                  <!-- Testimonial Quote -->
                  <blockquote class="text-lg md:text-xl text-gray-700 text-center italic mb-8">
                    "Our wedding website was absolutely perfect! The team captured our style perfectly and made the whole process so easy."
                  </blockquote>
                  
                  <!-- Author Info -->
                  <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#FFC0CB]">
                      <img 
                        src="/assets/images/demo1/couple1.jpg" 
                        alt="Happy couple" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="text-center">
                      <p class="font-medium text-lg">Sarah & Michael</p>
                      <p class="text-gray-500">June 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 2 -->
              <div class="w-full flex-shrink-0 px-4 md:px-8">
                <div class="bg-white rounded-lg border border-gray-100 shadow-sm p-8 md:p-10">
                  <!-- Quote Icon -->
                  <div class="flex justify-center mb-6">
                    <i class="pi pi-quote-right text-4xl text-[#FFC0CB] opacity-30"></i>
                  </div>
                  
                  <!-- Testimonial Quote -->
                  <blockquote class="text-lg md:text-xl text-gray-700 text-center italic mb-8">
                    "The RSVP system saved us so much time. Our guests loved how easy it was to navigate and find all the information."
                  </blockquote>
                  
                  <!-- Author Info -->
                  <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#FFC0CB]">
                      <img 
                        src="/assets/images/demo1/couple1.jpg" 
                        alt="Happy couple" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="text-center">
                      <p class="font-medium text-lg">Emily & John</p>
                      <p class="text-gray-500">May 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Testimonial 3 -->
              <div class="w-full flex-shrink-0 px-4 md:px-8">
                <div class="bg-white rounded-lg border border-gray-100 shadow-sm p-8 md:p-10">
                  <!-- Quote Icon -->
                  <div class="flex justify-center mb-6">
                    <i class="pi pi-quote-right text-4xl text-[#FFC0CB] opacity-30"></i>
                  </div>
                  
                  <!-- Testimonial Quote -->
                  <blockquote class="text-lg md:text-xl text-gray-700 text-center italic mb-8">
                    "Professional, responsive, and creative. They turned our vision into reality and exceeded our expectations!"
                  </blockquote>
                  
                  <!-- Author Info -->
                  <div class="flex flex-col items-center">
                    <div class="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#FFC0CB]">
                      <img 
                        src="/assets/images/demo1/couple1.jpg" 
                        alt="Happy couple" 
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div class="text-center">
                      <p class="font-medium text-lg">Lisa & David</p>
                      <p class="text-gray-500">April 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Carousel Indicators -->
        <div class="flex justify-center mt-10 gap-3">
          <button 
            v-for="(_, index) in 3" 
            :key="index"
            @click="currentIndex = index"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'bg-[#FFC0CB]' : 'bg-gray-300'"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
/* Add custom font styling */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>