<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

// Google Calendar booking URL
const googleCalendarUrl = 'https://calendar.app.google/sZ4ZFaiQuwhHcbMP8'

const showModal = ref(false)


const slides = [
  '/assets/images/templates/horizontal.jpg',
  '/assets/images/templates/groom&Bride.jpg',
  '/assets/images/templates/ceremony.jpg',
  '/assets/images/templates/lunch.jpg'
]


const activeSlide = ref(0)
let intervalHandle: number | null = null

const startSlideshow = () => {
  if (!slides.length) return
  intervalHandle = window.setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % slides.length
  }, 5000)
}

const stopSlideshow = () => {
  if (intervalHandle) {
    clearInterval(intervalHandle)
    intervalHandle = null
  }
}

// Function to scroll to the pricing section
const scrollToPricing = () => {
  const pricingSection = document.getElementById('price')
  if (pricingSection) {
    pricingSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  } else {
    console.warn('Pricing section with id "price" not found')
  }
}

onMounted(() => {
  startSlideshow()
})

onBeforeUnmount(() => {
  stopSlideshow()
})
</script>

<style scoped>
section {
  animation: fadeIn 0.6s ease-out forwards;
}

h1,
p,
button,
.social-proof {
  opacity: 0;
  animation: slideUp 0.5s forwards;
}

p {
  animation-delay: 0.2s;
}

div>button:first-child {
  animation-delay: 0.4s;
}

div>button:last-child {
  animation-delay: 0.5s;
}

.social-proof {
  animation-delay: 0.7s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
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

@media (max-height: 700px) {
  section {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .mt-10 {
    margin-top: 1.5rem;
  }
}
</style>

<template>
  <section class="relative min-h-screen flex items-center justify-center">
    <!-- Neutral gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-stone-700 to-neutral-700"></div>

    <div class="absolute inset-0 overflow-hidden">
      <div v-for="(slide, index) in slides" :key="slide"
        class="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
        :class="index === activeSlide ? 'opacity-90' : 'opacity-0'">
        <img :src="slide" class="w-full h-full object-cover mix-blend-soft-light" alt="Wedding slideshow" />
      </div>
    </div>

    <!-- Content container with modern layout -->
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        <!-- Logo/brand element -->
        <div class="mb-4 sm:mb-8 text-amber-50 text-opacity-80">
          <!-- Logo can go here if needed -->
        </div>

        <!-- Main heading with modern typography - improved mobile sizing -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 text-center leading-tight tracking-tight">
          <span class="font-thin">Beautiful Websites</span> for Your
          <span class="relative inline-block">
            Beautiful Moments
            <span class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-amber-200 opacity-40"></span>
          </span>
        </h1>

        <!-- Subheading with improved typography and mobile optimization -->
        <p
          class="text-lg sm:text-xl text-white opacity-90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed text-center font-light px-2 sm:px-0">
          Professional wedding website designs that tell your unique story and create a seamless experience for you and
          your guests.
        </p>

        <!-- Neutral call to action buttons with better mobile spacing -->
        <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 w-full sm:w-auto">
          <button @click="scrollToPricing"
            class="bg-amber-50 hover:bg-amber-100 text-stone-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base">
            Get Started Today
          </button>
          <button @click="showModal = true"
            class="bg-transparent backdrop-blur-sm bg-white bg-opacity-5 border border-amber-50 border-opacity-30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-opacity-10 transition-all duration-300 text-sm sm:text-base">
            Book a Consultation
          </button>
        </div>

        <!-- Social proof element - mobile optimized -->
        <div class="mt-10 sm:mt-16 flex items-center justify-center">
          <div
            class="px-4 sm:px-6 py-2 bg-stone-900 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center space-x-2 text-xs sm:text-sm">
            <span class="text-white text-opacity-80">Trusted by</span>
            <div class="flex -space-x-2">
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-50 bg-opacity-30 border border-amber-50 border-opacity-30">
              </div>
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-50 bg-opacity-40 border border-amber-50 border-opacity-30">
              </div>
              <div
                class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-50 bg-opacity-50 border border-amber-50 border-opacity-30">
              </div>
            </div>
            <span class="text-white text-opacity-80">500+ couples</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Shared BookingModal component -->
    <GeneralBookingModal v-model="showModal" theme="neutral" :google-calendar-url="googleCalendarUrl" />
  </section>
</template>
