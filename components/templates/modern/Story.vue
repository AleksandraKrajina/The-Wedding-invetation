<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const section = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)

const images = [
  '/assets/images/templates/19.jpg',
  '/assets/images/templates/27.jpg',
  '/assets/images/templates/28.jpg'
]

const currentImage = ref(0)
let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (!import.meta.client) return

  intervalId = setInterval(() => {
    currentImage.value = (currentImage.value + 1) % images.length
  }, 4000)

  if (section.value && title.value) {
    gsap.from(title.value, {
      y: 60,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }

  if (section.value && content.value) {
    gsap.from(content.value.children, {
      y: 60,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.6,
      scrollTrigger: {
        trigger: section.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section id="story" ref="section" class="h-full w-full text-left justify-center bg-white border-b">
    <div class="py-32 text-[color:var(--text-color)] container mx-auto">

      <h2 ref="title" class="text-4xl md:text-5xl pl-6 border-b font-bodoni  text-[color:var(--text-color)]">
        Story
      </h2>

      <div class="grid md:grid-cols-2 gap-10 items-center p-4 md:pl-16">

        <div
          class="relative w-full  max-w-sm md:max-w-md aspect-[3/4] border-2 -rotate-3 shadow-xl overflow-hidden md:overflow-visible">
          <img v-for="(img, i) in images" :key="i" :src="img" :class="[
            'absolute inset-0 pt-7 pl-6 pr-6 pb-14 right-6 w-full h-full object-cover transition-opacity duration-1000',
            currentImage === i ? 'opacity-100' : 'opacity-0'
          ]" alt="Story image">

          <img src="/assets/images/templates/tape_.png"
            class="absolute z-10 h-32 w-24 -rotate-12 opacity-60 left-0 -ml-10 -mt-10">
          <img src="/assets/images/templates/tape_.png"
            class="absolute z-10 h-32 w-24 rotate-12 bottom-0 right-0 opacity-60 -mb-10 -mr-10">
        </div>


        <div ref="content" class="space-y-8 border-l ">
          <div class=" p-8 rounded-lg">
            <p class="text-lg leading-relaxed">
              {{ $t('storyParagraph_1') }}
            </p>
          </div>
          <div class=" p-8 rounded-lg">
            <p class="text-lg leading-relaxed">
              {{ $t('storyParagraph_2') }}
            </p>
          </div>
          <div class=" p-8 rounded-lg">
            <p class="text-lg leading-relaxed">
              {{ $t('storyParagraph_3') }}
            </p>
          </div>
          <div class=" p-8 rounded-lg">
            <p class="text-lg leading-relaxed">
              {{ $t('storyParagraph_4') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
