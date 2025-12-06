<!-- components/TimelineEvents.vue -->
<template>
  <div class="container mx-auto px-4 max-w-4xl my-20">
    <!-- Title -->
    <h2
      class="text-4xl md:text-6xl text-center mb-16 text-[#C5A669] font-eyesome">
      Kad i gde
    </h2>

    <!-- Timeline -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
      <!-- Gathering -->
      <div class="flex flex-col items-center text-center">
        <div class="mb-6">
          <img src="/assets/images/icons/1.png" class="w-32" alt="" />
        </div>
        <h3 class="text-xl mb-2 uppercase tracking-wide">Okupljanje</h3>
        <p class="text-lg text-[#C5A669]">16:00</p>
      </div>

      <!-- Lunch -->
      <div class="flex flex-col items-center text-center">
        <div class="mb-6">
          <img src="/assets/images/icons/4.png" class="w-32" alt="" />
        </div>
        <h3 class="text-xl mb-2 uppercase tracking-wide">Svečani ručak</h3>
        <p class="text-lg text-[#C5A669]">17:30</p>
      </div>

      <!-- Party -->
      <div class="flex flex-col items-center text-center">
        <div class="mb-6">
          <img src="/assets/images/icons/2.png" class="w-32" alt="" />
        </div>
        <h3 class="text-xl mb-2 uppercase tracking-wide">Žurka</h3>
        <p class="text-lg text-[#C5A669]">19:00</p>
      </div>
    </div>

    <!-- Location -->
    <div class="text-center">
      <p class="text-xl mb-4">KUMOV KONAK, VALJEVO</p>
      <a
        href="https://maps.app.goo.gl/CvWykg4SA2TCkMXL7"
        target="_blank"
        class="inline-flex items-center text-[#C5A669] hover:text-[#9a815c] transition-colors uppercase text-sm tracking-wider">
        Prikaži na mapi
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          class="ml-2">
          <path d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed unless you want to add map functionality
</script>
