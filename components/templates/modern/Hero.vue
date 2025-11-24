<template>
  <section
    id="home"
    ref="section"
    class="relative pt-16 w-full md:pt-0 lg:pt-0 h-auto md:h-screen lg:h-screen flex flex-col items-center lg:justify-center md:justify-center overflow-hidden"
  >

    <div ref="names" class="h-auto lg:pt-1 lg:mt-2 md:pt-0 md:mt-0 flex flex-col items-center z-10">
      <h1
        ref="bride"
        class="text-6xl md:text-8xl font-bold font-bodoni text-[color:var(--text-color)]"
      >
        Maja
      </h1>
      <h1
        ref="groom"
        class="text-6xl md:text-8xl font-bold font-bodoni text-[color:var(--text-color)]"
      >
        Nikola
      </h1>
    </div>


    <div class="mt-3 relative w-full z-0">
      <img
        ref="photo"
        src="/assets/images/templates/horizontal.jpg"
        alt="Nikola & Maja"
        class="object-cover w-full h-[400px] "
      >
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const bride = ref(null)
const groom = ref(null)
const photo = ref(null)

onMounted(() => {
  gsap.set(bride.value, { opacity: 1, x: "-25%" })
  gsap.set(groom.value, { opacity: 1, x: "25%" })
  gsap.set(photo.value, { filter: 'grayscale(100%)' })

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section.value.loading,
      start: 'top top',
      end: '+=200',  
      scrub: true,
      pin: true,
    }
  })

  tl.to(bride.value, { x: '-200%', y:'250%', opacity: 0, ease: 'none' }, 0)
  tl.to(groom.value, { x: '200%', y:'250%', opacity: 0, ease: 'none' }, 0)

  tl.to(photo.value, { filter: 'grayscale(0%)', ease: 'none' }, 0.04)
})
</script>


