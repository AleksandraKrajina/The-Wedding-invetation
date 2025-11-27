<script setup>
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

section {
  animation: fadeIn 1s ease-out forwards;
}
</style>

<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    <div
      class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiM5MDkwOTAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]">
    </div>

    <!-- Decorative circles -->
    <div class="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -right-32 bottom-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading with modern typography -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">Our
            Templates</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              Find Your Perfect Design
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            Browse our curated collection of wedding website templates, each designed to reflect your unique style.
          </p>
        </div>

        <!-- Templates Container -->
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Template 1: Elegant -->
          <NuxtLink to="/templates/elegant" class="group">
            <div
              class="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm mb-6 transition-all duration-500 group-hover:shadow-md">
              <!-- Template Preview Image -->
              <img src="/assets/images/template1.jpg" alt="Elegant Template"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />

              <!-- Overlay with View button -->
              <div
                class="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span
                  class="bg-white text-neutral-800 px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Preview Template
                </span>
              </div>
            </div>

            <!-- Template Info -->
            <div class="text-center">
              <h3 class="text-xl font-medium text-neutral-800 mb-2">Elegant</h3>
              <p class="text-neutral-600">A timeless design with refined typography and subtle accents.</p>
            </div>
          </NuxtLink>

          <!-- Template 2: Modern -->
          <NuxtLink to="/templates/modern" class="group">
            <div
              class="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm mb-6 transition-all duration-500 group-hover:shadow-md">
              <!-- Template Preview Image -->
              <img src="/assets/images/template3.jpg" alt="Modern Template"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />

              <!-- Overlay with View button -->
              <div
                class="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span
                  class="bg-white text-neutral-800 px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Preview Template
                </span>
              </div>
            </div>

            <!-- Template Info -->
            <div class="text-center">
              <h3 class="text-xl font-medium text-neutral-800 mb-2">Modern</h3>
              <p class="text-neutral-600">Clean lines and minimalist design for the contemporary couple.</p>
            </div>
          </NuxtLink>

          <!-- Template 3: Romantic -->
          <NuxtLink to="/templates/weddingpost" class="group">
            <div
              class="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm mb-6 transition-all duration-500 group-hover:shadow-md">
              <!-- Template Preview Image -->
              <img src="/assets/images/template2.jpg" alt="Romantic Template"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />

              <!-- Overlay with View button -->
              <div
                class="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span
                  class="bg-white text-neutral-800 px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Preview Template
                </span>
              </div>
            </div>

            <!-- Template Info -->
            <div class="text-center">
              <h3 class="text-xl font-medium text-neutral-800 mb-2">Romantic</h3>
              <p class="text-neutral-600">Soft curves and delicate details for a dreamy, romantic feel.</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>