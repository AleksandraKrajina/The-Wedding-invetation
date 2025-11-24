<script setup>
import { ref, onMounted } from 'vue'


import bg from '/assets/images/templates/hero.jpg'
import bride from '/assets/images/templates/bride.jpg'
import party from '/assets/images/templates/hero_3.jpg'

const images = ref([bg, bride, party])
const fileInputs = ref([])



if (process.client) {
  function triggerFileInput(index) {
    if (fileInputs.value[index]) {
      fileInputs.value[index].click()
    }
  }

  function handleFileChange(event, index) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        images.value[index] = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  Object.assign(window, { triggerFileInput, handleFileChange })
}
</script>


<template>
  <section id="gallery" class="w-full container mx-auto py-10 px-2">

    <div class="container mx-auto px-1">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img v-for="i in 6" :key="i" src="/assets/images/demo2/when1.png" :alt="`Gallery image ${i}`"
          class="w-full aspect-square object-cover hover:opacity-75 transition-opacity" />
      </div>
    </div>

    <div class="w-full mb-8 flex ">
      <h1 class="text-8xl   text-[color:var(--text-color)] w-1/2 px-10 mx-6 flex justify-center ">{{
        t('dropSomeCoolImages') }}</h1>
      <p class="mt-32 px-2 text-lg italic text-[color:var(--text-color)] w-1/3  flex justify-center">
        {{ t('dropSomeCoolImagesParagraph') }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
      <div v-for="(image, index) in images" :key="index" class="relative group w-full h-64 md:h-80 overflow-hidden">
        <img :src="image" alt="Gallery image" class="w-full h-full object-cover">

        <div
          class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <button class="text-white text-5xl font-bold" @click="triggerFileInput(index)">
            +
          </button>
        </div>
      </div>
    </div>

    <input v-for="(image, index) in images" :key="'file-' + index" :ref="el => fileInputs[index] = el" type="file"
      accept="image/*" class="hidden" @change="handleFileChange($event, index)">
  </section>
</template>
