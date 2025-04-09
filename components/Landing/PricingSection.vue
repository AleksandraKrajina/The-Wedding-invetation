<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiM5MDkwOTAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
    
    <!-- Decorative circles -->
    <div class="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -right-32 top-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10" id="price">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading with modern typography -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">Pricing</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              Simple Pricing for Your Perfect Day
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            Choose the package that best fits your needs. All plans include dedicated support throughout your journey.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <!-- Basic Plan -->
          <div class="group bg-white rounded-lg border border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-300 overflow-hidden">
            <div class="p-2 bg-neutral-50 border-b border-neutral-100">
              <div class="text-center p-4">
                <h3 class="text-2xl font-medium text-neutral-800">Basic Plan</h3>
                <div class="text-4xl font-light text-neutral-800 mt-2">$99</div>
              </div>
            </div>
            
            <div class="p-8">
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">Personalized design</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">RSVP system</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">Basic support</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">Mobile-friendly design</span>
                </li>
              </ul>
              
              <button class="w-full py-3 px-6 border border-neutral-300 text-neutral-800 font-medium rounded-full transition-all duration-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-800 group-hover:border-neutral-800">
                Choose Basic
              </button>
            </div>
          </div>
          
          <!-- Premium Plan -->
          <div class="group bg-white rounded-lg border border-neutral-300 shadow-md overflow-hidden relative transition-all duration-300 hover:shadow-lg scale-100 hover:scale-[1.02] origin-center">
            <!-- Popular badge -->
            <div class="absolute top-0 right-0 bg-neutral-800 text-white py-1 px-4 text-sm font-medium">
              MOST POPULAR
            </div>
            
            <div class="p-2 bg-neutral-50 border-b border-neutral-100">
              <div class="text-center p-4">
                <h3 class="text-2xl font-medium text-neutral-800">Premium Plan</h3>
                <div class="text-4xl font-light text-neutral-800 mt-2">$199</div>
              </div>
            </div>
            
            <div class="p-8">
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">Advanced design customization</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">RSVP system with meal preferences</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">Priority support</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">Custom domain name</span>
                </li>
                <li class="flex items-start">
                  <div class="mt-1 mr-3 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                    <i class="pi pi-check text-neutral-600 text-xs"></i>
                  </div>
                  <span class="text-neutral-700">Photo gallery with unlimited images</span>
                </li>
              </ul>
              
              <button class="w-full py-3 px-6 bg-neutral-800 text-white font-medium rounded-full transition-all duration-300 hover:bg-neutral-700">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
        
        <!-- Additional note -->
        <p class="text-center text-neutral-500 mt-10 max-w-xl mx-auto text-sm">
          All plans include a 14-day satisfaction guarantee. Not sure which plan is right for you? <a href="#contact" class="text-neutral-800 underline hover:no-underline">Contact us</a> for a free consultation.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic if needed
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