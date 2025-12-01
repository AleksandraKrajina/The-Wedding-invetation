<script setup lang="ts">
const heroSrc_1 = '/assets/images/templates/proposal.jpg'
const heroSrc_2 = '/assets/images/templates/weddingPost.jpg'
const heroSrc_3 = '/assets/images/templates/weddingPost2.jpg'
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2 space-y-4 border-r-2 border-black pr-5">
      <img :src="heroSrc_1" alt="Story" class="w-full object-cover grayscale rounded" />
      <h4 class="h-serif text-2xl">TOGETHER IS A BEAUTIFUL PLACE TO BE</h4>
      <p class="text-md leading-7">
        Once upon a time, a chance encounter brought us together, and
        from that moment, our lives were never the same. We met as
        strangers, each carrying our own dreams, yet somehow our paths
        were meant to cross. What began as simple conversations turned
        into laughter, late-night talks, and a growing bond we couldn’t
        ignore.
      </p>
      <p class="text-md leading-7">
        As the seasons changed, so did we—finding strength in each
        other’s kindness and falling deeper in love with each new day.
        Through every triumph and challenge, we discovered that true
        love is about support, patience, and finding joy in the little things.
      </p>
    </div>
    <div class="space-y-6">
      <div class="space-y-2">

        <h5 class="h-serif text-2xl">CELEBRATING LOVE</h5>
        <img :src="heroSrc_2" alt="Celebrating" class="w-full object-cover grayscale rounded" />
        <p class="text-md">Surrounded by family and
          friends who have been with us
          along the way, we begin our
          greatest adventure yet. Thank
          you for being part of our story,
          for sharing this moment with us,
          and for believing in the power of
          love.</p>
      </div>
      <div class="border-t border-black"></div>
      <div class="space-y-2">

        <h5 class="h-serif text-2xl">WHEN SHE SAID YES!</h5>
        <img :src="heroSrc_3" alt="When she said yes" class="w-full object-cover grayscale rounded" />
      </div>
    </div>
  </section>
  <div class="border-t-4 border-black mb-1 max-w-6xl mx-auto"></div>
  <div class="border-t border-black max-w-6xl mx-auto"></div>
</template>
