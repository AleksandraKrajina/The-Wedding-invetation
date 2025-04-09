<template>
  <section
    class="relative min-h-screen flex items-center justify-center"
  >
    <!-- Neutral gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-800 via-stone-700 to-neutral-700"></div>
    
    <!-- Background image with modern blend mode -->
    <img
      src="/assets/images/hero/hero.png"
      class="absolute inset-0 w-full h-full object-cover mix-blend-soft-light opacity-70"
      alt="Elegant Wedding Setup"
    />
    
    <!-- Content container with modern layout -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-5xl mx-auto flex flex-col items-center">
        <!-- Logo/brand element -->
        <div class="mb-8 text-amber-50 text-opacity-80">
          <!-- <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 12.5C18.75 12.5 12.5 18.75 12.5 25C12.5 31.25 18.75 37.5 25 37.5C31.25 37.5 37.5 31.25 37.5 25C37.5 18.75 31.25 12.5 25 12.5ZM25 17.5C26.38 17.5 27.5 18.62 27.5 20C27.5 21.38 26.38 22.5 25 22.5C23.62 22.5 22.5 21.38 22.5 20C22.5 18.62 23.62 17.5 25 17.5Z" fill="currentColor" fill-opacity="0.9"/>
            <path d="M25 5C13.95 5 5 13.95 5 25C5 36.05 13.95 45 25 45C36.05 45 45 36.05 45 25C45 13.95 36.05 5 25 5ZM25 40C16.72 40 10 33.28 10 25C10 16.72 16.72 10 25 10C33.28 10 40 16.72 40 25C40 33.28 33.28 40 25 40Z" fill="currentColor" fill-opacity="0.5"/>
          </svg> -->
        </div>
        
        <!-- Main heading with modern typography -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 text-center leading-tight tracking-tight">
          <span class="font-thin">Beautiful Websites</span> for Your 
          <span class="relative inline-block">
            Beautiful Moments
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-amber-200 opacity-40"></span>
          </span>
        </h1>
        
        <!-- Subheading with improved typography -->
        <p class="text-xl text-white opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed text-center font-light">
          Professional wedding website designs that tell your unique story and create a seamless experience for you and your guests.
        </p>
        
        <!-- Neutral call to action buttons -->
        <div class="flex flex-col sm:flex-row justify-center gap-5">
          <button class="bg-amber-50 hover:bg-amber-100 text-stone-800 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg">
            Get Started Today
          </button>
          <button class="bg-transparent backdrop-blur-sm bg-white bg-opacity-5 border border-amber-50 border-opacity-30 text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-10 transition-all duration-300">
            Book a Consultation
          </button>
        </div>
        
        <!-- Social proof element -->
        <div class="mt-16 flex items-center justify-center">
          <div class="px-6 py-2 bg-stone-900 bg-opacity-20 backdrop-blur-sm rounded-full flex items-center space-x-2">
            <span class="text-white text-opacity-80 text-sm">Trusted by</span>
            <div class="flex -space-x-2">
              <div class="w-8 h-8 rounded-full bg-amber-50 bg-opacity-30 border border-amber-50 border-opacity-30"></div>
              <div class="w-8 h-8 rounded-full bg-amber-50 bg-opacity-40 border border-amber-50 border-opacity-30"></div>
              <div class="w-8 h-8 rounded-full bg-amber-50 bg-opacity-50 border border-amber-50 border-opacity-30"></div>
            </div>
            <span class="text-white text-opacity-80 text-sm">500+ couples</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Custom animation for elements to appear with a fade-in effect */
section {
  animation: fadeIn 1s ease-out forwards;
}

h1, p, button, .social-proof {
  opacity: 0;
  animation: slideUp 0.8s forwards;
}

p {
  animation-delay: 0.2s;
}

div > button:first-child {
  animation-delay: 0.4s;
}

div > button:last-child {
  animation-delay: 0.5s;
}

.social-proof {
  animation-delay: 0.7s;
}

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
</style>