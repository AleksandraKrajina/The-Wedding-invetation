<script setup lang="ts">
const heroSrc_1 = '/assets/images/templates/proposal.jpg'
const heroSrc_2 = '/assets/images/templates/weddingPost.jpg'
const heroSrc_3 = '/assets/images/templates/weddingPost2.jpg'
</script>

<template>
  <section class=" mx-auto container  px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#fffbf7]">
    <div class=" justify-center items-center text-center lg:col-span-3">
      <h3 class="h-serif text-6xl text-center">OUR STORY</h3>
    </div>
    <div class="lg:col-span-2 space-y-4 border-r-2 border-black pr-5">
      <img :src="heroSrc_1" alt="Story" class="w-full object-cover grayscale rounded" />
      <h4 class="h-serif text-2xl">TOGETHER IS A BEAUTIFUL PLACE TO BE</h4>
      <p class="text-md leading-7">
        {{ $t('ourStoryPostDesc_1') }}
      </p>
      <p class="text-md leading-7">
        {{ $t('ourStoryPostDesc_2') }}
      </p>
    </div>
    <div class="space-y-6">
      <div class="space-y-2">

        <h5 class="h-serif text-2xl">CELEBRATING LOVE</h5>
        <img :src="heroSrc_2" alt="Celebrating" class="w-full object-cover grayscale rounded" />
        <p class="text-md"> {{ $t('ourStoryPostDesc_3') }}</p>
      </div>
      <div class="border-t-2 border-black"></div>
      <div class="space-y-2">

        <h5 class="h-serif text-2xl">{{ $t('ourStory_1') }}</h5>
        <img :src="heroSrc_3" alt="When she said yes" class="w-full object-cover grayscale rounded" />
      </div>
    </div>
  </section>
  <div class="border-t-4 border-black mb-1 container mx-auto"></div>
  <div class="border-t border-black container mx-auto"></div>
</template>
