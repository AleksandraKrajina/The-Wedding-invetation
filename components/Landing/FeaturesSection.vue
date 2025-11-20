<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiM5MDkwOTAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
    
    <!-- Decorative circles -->
    <div class="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -right-32 top-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading with modern typography -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">Our Promise</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              Why Choose Vow Perfect?
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            We create beautiful, functional wedding websites that make your special day even more memorable.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Feature 1: Personalized Design -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-heart text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">Personalized Design</h3>
            <p class="text-neutral-600 text-center">We tailor every website to match your vision, style, and unique love story.</p>
          </div>
          
          <!-- Feature 2: RSVP System -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-envelope text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">RSVP System</h3>
            <p class="text-neutral-600 text-center">Streamline guest management with our easy-to-use RSVP functionality.</p>
          </div>
          
          <!-- Feature 3: Full Support -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-users text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">Full Support</h3>
            <p class="text-neutral-600 text-center">From creation to launch, we're here to guide you every step of the way.</p>
          </div>
          
          <!-- Feature 4: Attention to Detail -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-check-circle text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">Attention to Detail</h3>
            <p class="text-neutral-600 text-center">Every element is crafted with care to ensure your website is perfect.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

section {
  animation: fadeIn 1s ease-out forwards;
}
</style>
