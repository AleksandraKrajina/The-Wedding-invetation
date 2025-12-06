<!-- components/GalleryGrid.vue -->
<template>
  <div class="container mx-auto px-4 max-w-6xl mb-20 mt-2 md:mt-10">
    <!-- Desktop Grid (hidden on mobile) -->
    <div class="hidden md:grid md:grid-cols-3 gap-4 mb-8 font-dm-serif">
      <!-- Image 1 -->
      <div class="relative overflow-hidden md:aspect-[1/1]">
        <img
          src="/assets/klijenti/kristina_sergi/hero1.jpg"
          alt="Beach photo"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        <span
          class="absolute bottom-0 w-full text-[165px] h-[180px] font-light text-white pb-4 select-none text-center">
          20
        </span>
      </div>

      <!-- Image 2 -->
      <div class="relative overflow-hidden md:aspect-[1/1]">
        <img
          src="/assets/klijenti/kristina_sergi/hero2.jpg"
          alt="City photo"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        <span
          class="absolute bottom-0 w-full text-[165px] h-[180px] font-light text-white pb-4 select-none text-center">
          06
        </span>
      </div>

      <!-- Image 3 -->
      <div class="relative overflow-hidden md:aspect-[1/1]">
        <img
          src="/assets/klijenti/kristina_sergi/hero3.jpg"
          alt="Mountain photo"
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        <span
          class="absolute bottom-0 w-full text-[165px] h-[180px] font-light text-white pb-4 select-none text-center">
          25
        </span>
      </div>
    </div>

    <!-- Mobile Grid (hidden on desktop) -->
    <div class="md:hidden font-dm-serif">
      <!-- First row with 21 -->
      <div class="relative h-80 mb-4 overflow-hidden">
        <div class="flex gap-1">
          <div class="w-1/6 h-80">
            <!-- Left edge of image -->
            <img
              src="/assets/klijenti/kristina_sergi/hero3.jpg"
              alt="Edge photo"
              class="w-full h-full object-cover" />
          </div>
          <div class="w-4/6 h-80 relative">
            <!-- Center image with number -->
            <img
              src="/assets/klijenti/kristina_sergi/hero1.jpg"
              alt="Beach photo"
              class="w-full h-full object-cover" />
            <div class="absolute bottom-0 w-full flex justify-center">
              <span
                class="text-[165px] leading-[120px] font-light text-white select-none">
                20
              </span>
            </div>
          </div>
          <div class="w-1/6 h-80">
            <!-- Right edge of image -->
            <img
              src="/assets/klijenti/kristina_sergi/hero2.jpg"
              alt="Edge photo"
              class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Second row with 09 -->
      <div class="relative h-80 mb-4 overflow-hidden">
        <div class="flex gap-1">
          <div class="w-1/6 h-80">
            <!-- Left edge of image -->
            <img
              src="/assets/klijenti/kristina_sergi/hero1.jpg"
              alt="Edge photo"
              class="w-full h-full object-cover" />
          </div>
          <div class="w-4/6 h-80 relative">
            <!-- Center image with number -->
            <img
              src="/assets/klijenti/kristina_sergi/hero2.jpg"
              alt="Forest photo"
              class="w-full h-full object-cover" />
            <div class="absolute bottom-0 w-full flex justify-center">
              <span
                class="text-[165px] leading-[120px] font-light text-white select-none">
                06
              </span>
            </div>
          </div>
          <div class="w-1/6 h-80">
            <!-- Right edge of image -->
            <img
              src="/assets/klijenti/kristina_sergi/hero3.jpg"
              alt="Edge photo"
              class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Third row with 24 -->
      <div class="relative h-80 mb-4 overflow-hidden">
        <div class="flex gap-1">
          <div class="w-1/6 h-80">
            <!-- Left edge of image -->
            <img
              src="/assets/klijenti/kristina_sergi/hero2.jpg"
              alt="Edge photo"
              class="w-full h-full object-cover" />
          </div>
          <div class="w-4/6 h-80 relative">
            <!-- Center image with number -->
            <img
              src="/assets/klijenti/kristina_sergi/hero3.jpg"
              alt="Couple photo"
              class="w-full h-full object-cover" />
            <div class="absolute bottom-0 w-full flex justify-center">
              <span
                class="text-[165px] leading-[120px] font-light text-white select-none">
                25
              </span>
            </div>
          </div>
          <div class="w-1/6 h-80">
            <!-- Right edge of image -->
            <img
              src="/assets/klijenti/kristina_sergi/hero1.jpg"
              alt="Edge photo"
              class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>

    <!-- Title -->
    <div class="text-center">
      <h2
        class="text-[3em] md:text-[5em] mt-20 text-[#C5A669] font-eyesome-script">
        Kristina & Sergi
      </h2>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
