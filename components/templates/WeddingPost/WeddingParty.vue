<script setup lang="ts">
const heroSrc_1 = '/assets/images/templates/weddingPost3.jpg'
const heroSrc_2 = '/assets/images/templates/weddingPost4.jpg'
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
    <aside class="space-y-4 border-r-2 p-2">
      <h4 class="h-serif text-4xl text-center bg-black text-white p-4 mb-10">THE WEDDING PARTY</h4>
      <ul class="text-xl space-y-8 text-center">
        <li><span class="font-semibold text-3xl">Parents of the Bride</span> <br /> Mr. &amp; Mrs. Sebastian Bennet</li>
        <li><span class="font-semibold text-3xl">Parents of the Groom</span> <br /> Mr. &amp; Mrs. Pedro Fernandes</li>
        <li>
          <span class="font-semibold text-3xl">Bridesmaids</span>
          <br />Estelle Darcy
          <br />Adora Montminy
          <br />Cia Rodriguez
          <br />Anna Katrina
        </li>
        <li>
          <span class="font-semibold text-3xl">Groomsmen</span>
          <br />Benjamin Shah
          <br />Bartholomew
          <br />Muhammad Patel
          <br />Pedro Fernandes
        </li>
      </ul>
    </aside>
    <div class="lg:col-span-1 w-full  grid grid-cols-1 md:grid-cols-1 gap-6">
      <div class="text-center space-y-2 h-min ">
        <img :src="heroSrc_1" alt="Maid of honor" class="w-full h-1/2 object-cover rounded" />
        <h5 class="h-serif text-2xl">MAID OF HONOR</h5>
        <p class="text-3xl font-bold">Juliana Silva</p>
      </div>
      <div class="justify-center">
        <p class="text-2xl md:text-3xl text-center p-1">
          THEY'VE ALWAYS HAD OUR
          <br />BACK, NOW WE NEED THEM
          <br />AT THE FRONT WITH US.
        </p>
      </div>
      <div class="text-center space-y-2 h-min">
        <img :src="heroSrc_2" alt="Best man" class="w-full h-1/2 object-cover  rounded" />
        <h5 class="h-serif text-2xl">BEST MAN</h5>
        <p class="text-3xl font-bold">Reese Miller</p>
      </div>
    </div>
  </section>
</template>
