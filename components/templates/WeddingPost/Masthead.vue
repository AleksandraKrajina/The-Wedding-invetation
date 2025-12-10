<script setup lang="ts">
const heroSrc = '/assets/images/templates/WeddingPost/weddingpost7.jpg'
</script>

<template>
  <header class="mx-auto container px-4 pt-6 pb-4 bg-[#fffbf7] w-full ">
    <div class="text-center">
      <h1 class="mt-2 h-serif text-4xl md:text-7xl tracking-wide engravers-old-english">The Wedding Post</h1>
      <p class="text-xs md:text-2xl">Special Edition</p>
      <div class="border-t-4 border-black mb-1"></div>
      <div class="border-t border-black"></div>
      <div class="border-b border-black mt-1"></div>
      <p class="mt-1 text-xs w-full flex items-center justify-between">
        <span class="text-left">Barcelona, Spain</span>
        <span class="text-right">Monday, June 29, 2026</span>
      </p>
      <div class="border-t-2 border-black mb-1 mt-1"></div>
    </div>

    <div class="mt-6 text-center">
      <h2 class="h-serif text-5xl md:text-7xl ">ALEX &amp; GUIDO</h2>
      <p class="h-serif md:text-5xl text-2xl">Are Getting Married</p>
    </div>

    <div class="mt-6">
      <img :src="heroSrc" alt="Couple" class="w-full object-cover aspect-[16/9] grayscale  object-[50%_30%]" />
    </div>
  </header>
</template>


<style scoped>
.EBGaramond-BoldItalic {
  font-family: 'EBGaramond-BoldItalicc', serif;
}

.engravers-old-english {
  font-family: 'engravers-old-english', serif;
}
</style>