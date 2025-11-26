<script setup lang="ts">
const heroSrc = '/assets/images/templates/cuple.png'
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
    <aside class="space-y-4 border-r-2 p-2">
      <h4 class="h-serif text-3xl text-center bg-black text-white p-3 mb-10">THE WEDDING PARTY</h4>
      <ul class="text-xl space-y-8 text-center">
        <li><span class="font-semibold">Parents of the Bride</span> <br /> Mr. &amp; Mrs. Sebastian Bennet</li>
        <li><span class="font-semibold">Parents of the Groom</span> <br /> Mr. &amp; Mrs. Pedro Fernandes</li>
        <li>
          <span class="font-semibold">Bridesmaids</span>
          <br />Estelle Darcy
          <br />Adora Montminy
          <br />Cia Rodriguez
          <br />Anna Katrina
        </li>
        <li>
          <span class="font-semibold">Groomsmen</span>
          <br />Benjamin Shah
          <br />Bartholomew
          <br />Muhammad Patel
          <br />Pedro Fernandes
        </li>
      </ul>
    </aside>
    <div class="lg:col-span-1 w-full grid grid-cols-1 md:grid-cols-1 gap-6">
      <div class="text-center space-y-2">
        <img :src="heroSrc" alt="Maid of honor" class="w-full object-cover grayscale rounded" />
        <h5 class="h-serif">MAID OF HONOR</h5>
        <p>Juliana Silva</p>
      </div>
      <div class="space-y-2">
        <p class="text-xl text-center">
          THEY'VE ALWAYS HAD OUR
          <br />BACK, NOW WE NEED THEM
          <br />AT THE FRONT WITH US.
        </p>
      </div>
      <div class="text-center space-y-2">
        <img :src="heroSrc" alt="Best man" class="w-full object-cover grayscale rounded" />
        <h5 class="h-serif">BEST MAN</h5>
        <p>Reese Miller</p>
      </div>
    </div>
  </section>
</template>
