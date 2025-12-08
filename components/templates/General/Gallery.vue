<script setup lang="ts">
import { ref, computed } from 'vue'

const galleryImages = ref<string[]>([
  '/assets/images/templates/24.jpg',
  '/assets/images/templates/12.jpg',
  '/assets/images/templates/3.jpg',
  '/assets/images/templates/1.jpg',
  '/assets/images/templates/27.jpg',
  '/assets/images/templates/19.jpg',
  '/assets/images/templates/25.jpg',
])

const topImages = computed(() => galleryImages.value.slice(0, 4))
const bottomImages = computed(() => galleryImages.value.slice(4, 7))
</script>

<template>
  <section class="w-full container mx-auto my-20">
    <div class="w-full px-1">

      <!-- DESKTOP LAYOUT -->
      <div class="hidden md:block space-y-4">

        <!-- Gornji mozaik -->
        <div class="grid grid-cols-3 gap-4 auto-rows-[260px]">
          <!-- leva visoka -->
          <div v-if="topImages[0]" class="row-span-2 overflow-hidden">
            <img :src="topImages[0]" class="w-full h-full object-cover" />
          </div>

          <!-- srednja gore -->
          <div v-if="topImages[1]" class="overflow-hidden">
            <img :src="topImages[1]" class="w-full h-full object-cover" />
          </div>

          <!-- desna visoka -->
          <div v-if="topImages[2]" class="row-span-2 overflow-hidden">
            <img :src="topImages[2]" class="w-full h-full object-cover" />
          </div>

          <!-- srednja dole -->
          <div v-if="topImages[3]" class="overflow-hidden">
            <img :src="topImages[3]" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Donji red: 3 slike -->
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(image, index) in bottomImages" :key="index" class="overflow-hidden">
            <img :src="image" class="w-full h-64 object-cover" />
          </div>
        </div>
      </div>

      <!-- MOBILE LAYOUT: 1 – 2 – 1 – 2 – 1 -->
      <div class="md:hidden space-y-4">
        <!-- 1 -->
        <div v-if="galleryImages[0]">
          <img :src="galleryImages[0]" class="w-full h-64 object-cover" />
        </div>

        <!-- 2 -->
        <div class="grid grid-cols-2 gap-4" v-if="galleryImages[1] && galleryImages[2]">
          <img :src="galleryImages[1]" class="w-full h-40 object-cover" />
          <img :src="galleryImages[2]" class="w-full h-40 object-cover" />
        </div>

        <!-- 1 -->
        <div v-if="galleryImages[3]">
          <img :src="galleryImages[3]" class="w-full h-64 object-cover" />
        </div>

        <!-- 2 -->
        <div class="grid grid-cols-2 gap-4" v-if="galleryImages[4] && galleryImages[5]">
          <img :src="galleryImages[4]" class="w-full h-40 object-cover" />
          <img :src="galleryImages[5]" class="w-full h-40 object-cover" />
        </div>

        <!-- 1 (poslednja) -->
        <div v-if="galleryImages[6]">
          <img :src="galleryImages[6]" class="w-full h-64 object-cover" />
        </div>
      </div>

    </div>
  </section>
</template>
