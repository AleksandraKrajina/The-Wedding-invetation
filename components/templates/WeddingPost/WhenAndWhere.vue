<template>
  <section class="w-full md:max-w-6xl mx-auto px-4 py-10 justify-center items-center">
    <h3 class="h-serif text-6xl text-center">WHEN &amp; WHERE</h3>
    <div class="border-t-4 border-black mb-1"></div>
    <div class="border-t border-black"></div>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
      <div v-for="(item, i) in 3" :key="i" class="space-y-1">
        <p class="text-md font-semibold">19H</p>
        <p class="text-md font-semibold ">CHURCH OF CHRIST THE KING</p>
        <p class="h-serif text-xl font-bold py-8">EVENT TITLE</p>
        <button class="border-b-2 border-black mt-2 italic" disabled>See on map</button>
      </div>
    </div>
    <div class="border-t-4 border-black mb-1 mt-4"></div>
    <div class="border-t border-black"></div>
  </section>
</template>
