<template>
  <section
    class="relative py-40 my-20 flex items-center justify-center overflow-hidden w-full md:w-2/3 mx-auto md:rounded-2xl"
  >
    <!-- Neutral gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-stone-700 to-neutral-700"></div>
    
    <!-- Background image with modern blend mode -->
    <img
      src="/assets/images/hero/hero.png"
      class="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-70"
      alt="Elegant Wedding Background"
    />
    
    <!-- Content container with modern layout -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto flex flex-col items-center">
        <!-- Pre-heading -->
        <span class="text-amber-50 text-sm tracking-widest uppercase font-medium opacity-80 mb-4">Limited Time Offer</span>
        
        <!-- Main heading with modern typography -->
        <h2 class="text-4xl md:text-5xl font-light text-white mb-8 text-center leading-tight">
          <span class="font-thin">Get</span> 15% Off <span class="font-thin">Your Wedding Website</span>
          <span class="relative inline-block">
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-amber-200 opacity-40"></span>
          </span>
        </h2>
        
        <!-- Subtext -->
        <p class="text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed text-center font-light">
          Book your consultation before May 30th and receive a special discount on any package.
        </p>
        
        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row gap-5">
          <button class="bg-amber-50 hover:bg-amber-100 text-stone-800 px-10 py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            Book Now
          </button>
          <button class="bg-transparent backdrop-blur-sm bg-white bg-opacity-5 border border-amber-50 border-opacity-30 text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-10 transition-all duration-300">
            Learn More
          </button>
        </div>
        
        <!-- Additional info -->
        <div class="mt-10 inline-flex items-center px-6 py-2 bg-stone-900 bg-opacity-40 backdrop-blur-sm rounded-full text-white text-opacity-90 text-sm">
          <i class="pi pi-clock mr-2"></i> Offer ends in 14 days
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed
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

h2, p, .flex, .mt-10 {
  opacity: 0;
  animation: slideUp 0.8s forwards;
}

p {
  animation-delay: 0.2s;
}

.flex {
  animation-delay: 0.4s;
}

.mt-10 {
  animation-delay: 0.6s;
}
</style>