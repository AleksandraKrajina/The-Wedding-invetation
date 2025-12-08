<script setup lang="ts">
import { ref } from 'vue'

const isVideoOpen = ref(false)

function openVideo() {
  isVideoOpen.value = true
}

function closeVideo() {
  isVideoOpen.value = false
}
</script>
<template>
  <section class="relative w-full h-[75vh] overflow-hidden tanmoncheri">

    <div class="absolute inset-0">
      <video class="w-full h-full" src="/assets/images/templates/video_demo.mp4" controls preload="metadata">
      </video>


      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <div class="relative z-10 flex flex-col  justify-center items-center text-center h-full text-white space-y-8 px-4">
      <h2 class="text-6xl ">NAŠA PRIČA</h2>

      <button @click="openVideo"
        class="text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
        PUSTI VIDEO
      </button>
    </div>
  </section>

  <section>
    <div class="container mx-auto p-6 text-center space-y-8  min-h-[30svh] flex justify-center items-center">
      <p class="max-w-3xl p-4 text-3xl md:text-4xl tanmoncheri ">
        {{ $t('ourStoryElegant') }}

      </p>
    </div>
  </section>

  <div v-if="isVideoOpen" class="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4">

    <button @click="closeVideo" class="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition">
      ✕
    </button>

    <iframe class="w-full max-w-4xl h-[60vh] md:h-[70vh]" src="https://www.youtube.com/embed/r_I1UOVP6Uc?autoplay=1"
      allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>
