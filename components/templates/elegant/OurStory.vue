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
  <section class="relative w-full h-[60vh] overflow-hidden tanmoncheri">

    <div class="absolute inset-0">
      <video class="w-full h-full" src="/assets/images/templates/video_demo.mp4" preload="metadata">
      </video>


      <div class="absolute inset-0 bg-black/60"></div>
    </div>

    <div
      class="relative z-10 flex flex-col  justify-center items-center text-center h-full text-white space-y-24 pt-20 px-4">
      <h2 class="text-6xl ">{{ $t('ourStoryTitle') }}</h2>

      <div class="grid grid-cols-2 gap-4 hover:text-black">
        <button @click="openVideo" class="pt-3 transition-colors flex">
          {{ $t('playVideo') }}
        </button>
        <img src="/assets/images/templates/play_button.png" class="pt-3 w-6" />
      </div>
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

    <video class="w-full max-w-4xl h-[60vh] md:h-[70vh]" src="/assets/images/templates/video_demo.mp4"
      preload="metadata" allowfullscreen autoplay controls>
    </video>
  </div>
</template>
