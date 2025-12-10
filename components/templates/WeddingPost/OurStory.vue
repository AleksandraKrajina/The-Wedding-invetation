<script setup lang="ts">
const heroSrc_1 = '/assets/images/templates/WeddingPost/10.png'
const heroSrc_2 = '/assets/images/templates/11.jpg'
const heroSrc_3 = '/assets/images/templates/WeddingPost/11.png'
</script>

<template>
  <section
    class=" mx-auto container h-min EBGramond-BoldItalic px-4 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#fffbf7]">
    <div class=" justify-center items-center text-center lg:col-span-3">
      <h3 class="h-serif text-6xl text-center pb-5 ">{{ $t('ourStoryTitle') }}</h3>
    </div>
    <div class="lg:col-span-2 h-full lg:border-r-2 border-black md:pr-5 ">
      <img :src="heroSrc_1" alt="Story" class="w-full h-2/5 md:h-2/3  grayscale " />
      <h4 class="h-serif text-3xl justify-center text-center ">{{ $t('ourStoryPostTitle_1') }}</h4>

      <p class="text-xl leading-6 font-sans pb-6">
        {{ $t('ourStoryPostDesc_1') }}
      </p>
      <p class="text-xl leading-6 font-sans">
        {{ $t('ourStoryPostDesc_2') }}
      </p>

    </div>
    <div class="space-y-8">
      <div class="space-y-2">

        <h5 class="h-serif text-2xl">{{ $t('ourStoryPostTitle_2') }}</h5>
        <img :src="heroSrc_2" alt="Celebrating" class="w-full h-2/3 grayscale " />
        <p class="text-xl leading-6 font-sans"> {{ $t('ourStoryPostDesc_3') }}</p>
      </div>
      <div class="border-t-2 border-black"></div>
      <div class="space-y-2">
        <h5 class="h-serif text-2xl">{{ $t('ourStory_1') }}</h5>
        <img :src="heroSrc_3" alt="When she said yes" class="w-full  grayscale " />
      </div>
    </div>
  </section>
  <div class="border-t-4 border-black mb-1 container mx-auto"></div>
  <div class="border-t border-black container mx-auto"></div>
</template>
