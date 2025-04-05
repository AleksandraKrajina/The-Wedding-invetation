<template>
  <section class="py-20 bg-white opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-center mb-16">Why Choose Vow Perfect?</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Feature 1: Personalized Design -->
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-500 transform hover:scale-110">
              <i class="pi pi-heart text-[#FFC0CB] text-3xl"></i>
            </div>
            <h3 class="text-xl font-medium mb-4">Personalized Design</h3>
            <p class="text-gray-600">We tailor every website to match your vision, style, and love story.</p>
          </div>
          
          <!-- Feature 2: RSVP System -->
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-500 transform hover:scale-110">
              <i class="pi pi-envelope text-[#FFC0CB] text-3xl"></i>
            </div>
            <h3 class="text-xl font-medium mb-4">RSVP System</h3>
            <p class="text-gray-600">Streamline guest management with our easy-to-use RSVP functionality.</p>
          </div>
          
          <!-- Feature 3: Full Support -->
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-500 transform hover:scale-110">
              <i class="pi pi-users text-[#FFC0CB] text-3xl"></i>
            </div>
            <h3 class="text-xl font-medium mb-4">Full Support</h3>
            <p class="text-gray-600">From creation to launch, we're here to guide you every step of the way.</p>
          </div>
          
          <!-- Feature 4: Attention to Detail -->
          <div class="flex flex-col items-center text-center">
            <div class="w-20 h-20 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-500 transform hover:scale-110">
              <i class="pi pi-check-circle text-[#FFC0CB] text-3xl"></i>
            </div>
            <h3 class="text-xl font-medium mb-4">Attention to Detail</h3>
            <p class="text-gray-600">Every element is crafted with care to ensure perfection.</p>
          </div>
        </div>
        
        <!-- Optional: Additional content or call-to-action -->
        <div class="mt-16 text-center">
          <button class="bg-[#FFC0CB] hover:bg-[#FFB0BB] text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Explore Our Features
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Can add reactivity or other functionality if needed
</script>

<style scoped>
/* Add custom font styling */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>