<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Countdown from '~/components/templates/Countdown.vue'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const section = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const cards = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!import.meta.client || !section.value) return

  gsap.from(title.value, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section.value,
      start: "top 80%",
      toggleActions: "play none play reverse"
    }
  })

  if (!cards.value) return

  gsap.from(cards.value.children, {
    y: 60,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
    stagger: 0.5,
    scrollTrigger: {
      trigger: section.value,
      start: "top 80%"
    }
  })
})
</script>


<template>
  <section id="on-the-day" ref="section"
    class=" bg-transparent border-b container mx-auto justify-center items-center ">
    <div class="mx-auto pt-28 text-left ">

      <h2 ref="title" class="text-6xl text-[color:var(--text-color)] md:text-6xl  font-bodoni pl-6 border-b pb-1 mb-11">
        On the day
      </h2>


      <div ref="cards" class="p-6 justify-center items-center mx-auto grid md:grid-cols-3 gap-7 md:pt-16 pb-24">

        <!-- Info Card -->
        <div class="bg-gray-50 p-8 rounded-md md:mr-5 text-[color:var(--text-color)]">
          <h3 class="text-xl  mb-4 font-bold">Info</h3>
          <p class="text-gray-600">
            {{ $t('onTheDayInfo') }}
          </p>
        </div>

        <!-- Gifts Card -->
        <div class="bg-gray-50 p-8 rounded-md md:mr-5 text-[color:var(--text-color)]">
          <h3 class="text-xl  mb-4 font-bold">{{ $t('gifts') }}</h3>
          <p class="text-gray-600">
            {{ $t('onTheDayGifts') }}
          </p>
        </div>

        <!-- Night Card -->
        <div class="bg-gray-50 p-8 rounded-md text-[color:var(--text-color)]">
          <h3 class="text-xl mb-4 font-bold">{{ $t('night') }}</h3>
          <p class="text-gray-600">
            {{ $t('onTheDayNight') }}
          </p>
        </div>
      </div>
      <div class="h-auto m-0 p-0 pb-11">
        <Countdown target-date="2026-07-29T17:00:00" />
      </div>
    </div>
  </section>
</template>
