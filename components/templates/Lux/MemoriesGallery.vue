<!-- components/PhotoGallery.vue -->
<template>
  <div class="container mx-auto px-4">
    <h2
      class="text-3xl md:text-4xl text-gray-800 mb-4 font-eyesome text-center py-10">
      Naše uspomene
    </h2>
    <!-- Desktop Layout -->
    <div class="hidden md:block">
      <!-- Top row -->
      <div class="grid grid-cols-3 gap-1 mb-1">
        <!-- Left image -->
        <div class="overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g1.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>

        <!-- Middle column with 2 stacked images -->
        <div class="grid grid-rows-2 gap-1 h-full">
          <div class="overflow-hidden">
            <img
              src="/assets/klijenti/kristina_sergi/g2.jpg"
              alt="Couple photo"
              class="w-full h-full object-cover" />
          </div>
          <div class="overflow-hidden">
            <img
              src="/assets/klijenti/kristina_sergi/g3.jpg"
              alt="Couple photo"
              class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Right image -->
        <div class="overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g4.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Bottom row -->
      <div class="grid grid-cols-4 gap-1">
        <!-- Left image -->
        <div class="overflow-hidden col-span-2">
          <img
            src="/assets/klijenti/kristina_sergi/g5.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>

        <!-- Middle image -->
        <div class="overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g6.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>

        <!-- Right image -->
        <div class="overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g7.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Mobile Layout - Keep exactly as it is -->
    <div class="md:hidden">
      <div class="mb-1">
        <div class="aspect-[3/2] overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g1.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
      </div>
      <!-- Top row - two small images with middle space -->
      <div class="grid grid-cols-2 gap-1 mb-1">
        <div class="aspect-square overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g2.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
        <div class="aspect-square overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g3.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Third row - full width ocean image -->
      <div class="mb-1">
        <div class="aspect-[3/2] overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g4.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Fourth row - 2 images side by side -->
      <div class="grid grid-cols-2 gap-1 mb-1">
        <div class="aspect-square overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g5.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
        <div class="aspect-square overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g6.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Fifth row - last image -->
      <div>
        <div class="aspect-[3/2] overflow-hidden">
          <img
            src="/assets/klijenti/kristina_sergi/g7.jpg"
            alt="Couple photo"
            class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No special logic needed
</script>

<style scoped>
/* Additional styling if needed */
</style>
