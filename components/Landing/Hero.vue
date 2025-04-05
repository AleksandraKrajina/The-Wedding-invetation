<template>
  <section
    class="relative min-h-screen flex items-center justify-center opacity-0 transition-opacity duration-700"
    data-observe
  >
    <!-- Elegant background with overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-60"></div>
    
    <!-- Background image -->
    <img
      src="/assets/images/hero/hero.png"
      class="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      alt="Elegant Wedding Setup"
    />
    
    <!-- Content container -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Optional PrimeVue icon decoration -->
        <div class="mb-6 text-[#FFC0CB]">
          <i class="pi pi-heart text-4xl"></i>
        </div>
        
        <!-- Main heading with elegant typography -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 animate-fade-up font-serif">
          Beautiful Websites for Your Beautiful Moments
        </h1>
        
        <!-- Subheading with softer color -->
        <p class="text-xl text-gray-100 opacity-90 mb-10 animate-fade-up animation-delay-300 max-w-2xl mx-auto leading-relaxed">
          Personalized wedding websites designed to reflect your love story and simplify your special day
        </p>
        
        <!-- Call to action buttons in elegant styling -->
        <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up animation-delay-500">
          <button class="bg-[#FFC0CB] hover:bg-[#FFB0BB] text-gray-900 px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
          <button class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
            Book a Free Consultation
          </button>
        </div>
      </div>
    </div>
    
    <!-- Decorative elements (circular borders) -->
    <!-- <div class="absolute bottom-10 left-10 w-32 h-32 border-2 border-[#FFC0CB] opacity-20 rounded-full"></div>
    <div class="absolute top-20 right-20 w-24 h-24 border-2 border-white opacity-10 rounded-full"></div> -->
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 1.5s forwards;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add custom font styling */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>