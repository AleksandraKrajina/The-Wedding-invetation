<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const initialImages = [
  '/assets/images/templates/bride.jpg',
  '/assets/images/templates/groom.jpg',
  '/assets/images/templates/groom&bride.jpg'
]

const images = ref([...initialImages])
const fileInputs = ref<HTMLInputElement[]>([])

const setFileInput = (el: HTMLInputElement | null, index: number) => {
  if (el) {
    fileInputs.value[index] = el
  }
}

const triggerFileInput = (index: number) => {
  if (!import.meta.client) return
  fileInputs.value[index]?.click()
}

const handleFileChange = (event: Event, index: number) => {
  if (!import.meta.client) return

  const target = event.target as HTMLInputElement
  const file = target?.files?.[0]

  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    const result = e.target?.result
    if (typeof result === 'string') {
      images.value[index] = result
    }
  }
  reader.readAsDataURL(file)
}
</script>


<template>
  <section id="gallery" class="w-full container mx-auto md:p-10 bg-black">

    <div class="container mx-auto px-1 bg-black">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 bg-black">
        <img v-for="i in 6" :key="i" src="/assets/images/demo1/hero.png" :alt="`Gallery image ${i}`"
          class="w-full aspect-square object-cover hover:opacity-75 transition-opacity" />
      </div>
    </div>


    <!--
    <div class="w-full mb-8 flex ">
      <h1 class="md:text-8xl text-3xl text-[color:var(--text-color)] w-1/2 px-10 mx-6 flex justify-center ">{{
        t('dropSomeCoolImages') }}</h1>
      <p class="mt-32 p-2 text-lg italic text-[color:var(--text-color)] md:w-1/3 w-full  flex justify-center">
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

    <input v-for="(image, index) in images" :key="'file-' + index"
      :ref="el => setFileInput(el as HTMLInputElement | null, index)" type="file" accept="image/*" class="hidden"
      @change="handleFileChange($event, index)">
    -->
  </section>
</template>
