<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const { t } = useI18n()

const section = ref<HTMLElement | null>(null)
const mobileCards = ref<HTMLDivElement | null>(null)

const timesArray = ['05:00 pm', '06:00 pm', '07:00 pm', '08:30 pm']
const cardsArray = computed(() => [
  { title: t('ceremonyTitle'), text: t('ceremonyText') },
  { title: t('cocktailsTitle'), text: t('cocktailsText') },
  { title: t('dinnerTitle'), text: t('dinnerText') },
  { title: t('djTitle'), text: t('djText') }
])

const currentTime = ref(timesArray[0])
const activeIndex = ref(0)

onMounted(async () => {
  if (!import.meta.client) return
  await nextTick()

  if (section.value) {
    const timeEls = section.value.querySelectorAll<HTMLElement>('.time')

    timeEls.forEach((timeEl, i) => {
      const container = timeEl.parentElement
      if (!container) return

      gsap.fromTo(
        timeEl,
        { y: 100, opacity: 0.3 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: 'bottom top',
            scrub: true
          }
        }
      )

      gsap.to(timeEl, {
        opacity: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'center center',
          end: 'bottom top',
          scrub: true
        }
      })

      ScrollTrigger.create({
        trigger: container,
        start: 'top 80%',
        end: 'bottom 80%',
        onEnter: () => {
          activeIndex.value = i
        },
        onEnterBack: () => {
          activeIndex.value = i
        }
      })
    })
  }

  if (mobileCards.value) {
    const mCards = Array.from(mobileCards.value.children || [])

    mCards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          currentTime.value = timesArray[i]
        },
        onEnterBack: () => {
          currentTime.value = timesArray[i]
        }
      })
    })
  }
})
</script>


<template>
  <section id="timing" ref="section" class="w-full flex flex-col lg:flex-row pt-28 border-b">

    <h2 ref="title"
      class=" lg:absolute h-min w-3/4 pb-1 text-6xl  font-bodoni pl-6 border-b bg-white text-[color:var(--text-color)]">
      Timing
    </h2>

    <div class="lg:hidden w-full h-full relative">
      <h2 ref="mobileTime"
        class="sticky top-24 z-10 text-7xl border-b p-10 text-center bg-white text-[color:var(--text-color)]">
        {{ currentTime }}
      </h2>

      <div ref="mobileCards" class="flex flex-col">
        <div v-for="(card, i) in cardsArray" :key="i" class="h-screen p-10 flex justify-center items-center border-b">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-2xl mb-4">{{ card.title }}</h3>
            <p class="text-lg text-gray-700">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex w-1/2 flex-col border-r ">
      <div v-for="(time, i) in timesArray" :key="i" class="h-screen flex items-center justify-center">
        <h2 class="time text-7xl justify-center text-[color:var(--text-color)] opacity-0">{{ time }}</h2>
      </div>
    </div>

    <div class="hidden lg:flex w-1/2">
      <div class="sticky top-0 h-screen flex justify-center items-center p-12">
        <div class="bg-white p-10 rounded-lg shadow-sm max-w-xl">
          <h3 class="text-3xl mb-6">{{ cardsArray[activeIndex].title }}</h3>
          <p class="text-lg text-gray-700">{{ cardsArray[activeIndex].text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
