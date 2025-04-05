<template>
  <section class="py-20 bg-white opacity-0 transition-opacity duration-700" id="price" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-center mb-6">
          Simple Pricing for Your Perfect Day
        </h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Choose the package that best fits your needs. All plans include dedicated support throughout your journey.
        </p>
        
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Basic Plan -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
            <div class="p-8">
              <h3 class="text-2xl font-medium mb-4 text-center">Basic Plan</h3>
              <div class="text-4xl font-light text-center mb-6">$99</div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>Personalized design</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>RSVP system</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>Basic support</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>Mobile-friendly design</span>
                </li>
              </ul>
              
              <button class="w-full py-3 px-6 border-2 border-[#FFC0CB] text-[#FFC0CB] font-medium rounded-full transition-all duration-300 hover:bg-[#FFC0CB] hover:text-white">
                Choose Basic
              </button>
            </div>
          </div>
          
          <!-- Premium Plan -->
          <div class="bg-white rounded-lg shadow-md border-2 border-[#FFC0CB] overflow-hidden relative transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            <!-- Popular badge -->
            <div class="absolute top-0 right-0 bg-[#FFC0CB] text-white py-1 px-4 text-sm font-medium">
              MOST POPULAR
            </div>
            
            <div class="p-8">
              <h3 class="text-2xl font-medium mb-4 text-center">Premium Plan</h3>
              <div class="text-4xl font-light text-center mb-6">$199</div>
              
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>Advanced design customization</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>RSVP system with meal preferences</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>Priority support</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>Custom domain name</span>
                </li>
                <li class="flex items-start">
                  <i class="pi pi-check text-[#FFC0CB] mt-1 mr-3"></i>
                  <span>Photo gallery with unlimited images</span>
                </li>
              </ul>
              
              <button class="w-full py-3 px-6 bg-[#FFC0CB] text-white font-medium rounded-full transition-all duration-300 hover:bg-[#FFB0BB]">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic if needed
</script>

<style scoped>
/* Add custom font styling */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>