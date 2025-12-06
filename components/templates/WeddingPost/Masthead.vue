<script setup lang="ts">
const heroSrc = '/assets/images/templates/proposal.jpg'
</script>

<template>
  <header class="mx-auto container  px-4 pt-6 pb-4 bg-[#fffbf7]">
    <div class="text-center">
      <h1 class="mt-2 h-serif text-4xl sm:text-5xl tracking-wide font-newspaper">The Wedding Post</h1>
      <p class="text-xs">Special Edition</p>
      <div class="border-t-4 border-black mb-1"></div>
      <div class="border-t border-black"></div>
      <div class="border-b border-black mt-1"></div>
      <p class="mt-1 text-xs w-full flex items-center justify-between">
        <span class="text-left">Monday, June 29, 2026</span>
        <span class="text-right">Barcelona, Spain</span>
      </p>
      <div class="border-t-2 border-black mb-1 mt-1"></div>
    </div>

    <div class="mt-6 text-center">
      <h2 class="h-serif text-6xl sm:text-4xl font-newspaper">ALEX &amp; GUIDO</h2>
      <p class="h-serif text-xl sm:text-2xl">Are Getting Married</p>
    </div>

    <div class="mt-6">
      <img :src="heroSrc" alt="Couple" class="w-full object-cover aspect-[16/9] grayscale" />
    </div>
  </header>
</template>
