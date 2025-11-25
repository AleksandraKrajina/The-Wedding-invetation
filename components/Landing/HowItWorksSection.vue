<script setup>
</script>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>

<template>
  <section class="py-24 bg-neutral-50 opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">Our Process</span>
          <h2 class="text-4xl md:text-5xl font-serif font-light text-neutral-800 mb-6">
            <span class="relative inline-block pb-2">
              Creating Your Perfect Day
              <span class="absolute bottom-0 left-0 w-full h-px bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 text-center max-w-xl mx-auto">
            Our streamlined approach ensures your wedding website is beautiful, personalized, and ready on time.
          </p>
        </div>

        <!-- Simplified Process Steps -->
        <div class="grid md:grid-cols-3 gap-10">
          <!-- Step 1 -->
          <div class="flex flex-col">
            <div class="flex items-center mb-5">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-3">
                <span class="text-stone-600 text-sm font-medium">01</span>
              </div>
              <h3 class="text-xl font-medium text-neutral-800">Discuss Your Vision</h3>
            </div>
            <p class="text-neutral-600 mb-4">
              We start with understanding your unique love story, style preferences, and wedding details.
            </p>
            <div class="space-y-3 text-sm text-stone-500">
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Share your wedding theme and color palette</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Tell us about your love story</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Discuss special features you'd like</span>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="flex flex-col">
            <div class="flex items-center mb-5">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-3">
                <span class="text-stone-600 text-sm font-medium">02</span>
              </div>
              <h3 class="text-xl font-medium text-neutral-800">Build Your Website</h3>
            </div>
            <p class="text-neutral-600 mb-4">
              Our expert team creates a beautiful, functional website that perfectly captures your style.
            </p>
            <div class="space-y-3 text-sm text-stone-500">
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Custom design based on your specifications</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Integration of RSVP system</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Mobile optimization for all devices</span>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="flex flex-col">
            <div class="flex items-center mb-5">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-3">
                <span class="text-stone-600 text-sm font-medium">03</span>
              </div>
              <h3 class="text-xl font-medium text-neutral-800">Launch with Confidence</h3>
            </div>
            <p class="text-neutral-600 mb-4">
              Your beautiful website goes live with our full support for your big day.
            </p>
            <div class="space-y-3 text-sm text-stone-500">
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Comprehensive testing before going live</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Ongoing support for updates</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>Guest assistance with RSVP questions</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Optional divider -->
        <div class="w-full max-w-xs mx-auto h-px bg-stone-200 my-16"></div>

        <!-- Call to action -->
        <div class="text-center">
          <button
            class="bg-neutral-800 hover:bg-stone-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-sm inline-flex items-center">
            <span>Start Your Journey Today</span>
            <i class="pi pi-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
