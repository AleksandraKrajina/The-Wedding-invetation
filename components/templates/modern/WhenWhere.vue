<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const section = ref(null)
const title = ref(null)

onMounted(() => {
  if (!import.meta.client) return

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
})
</script>

<template>
  <section id="when-where" ref="section" class="h-full w-full text-left justify-center border-b py-32">
    <div class="container mx-auto  text-[color:var(--text-color)]">
      <h2 ref="title" class="text-4xl md:text-5xl  left border-b  mb-6 pl-4 font-bodoni">When & Where</h2>

      <div class="md:max-w-2xl w-full mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm text-center">
        <div class="mb-8">
          <h3 class="text-2xl mb-2">on Friday 12th Jun</h3>
          <p class="text-xl">at Café del Mar Azul</p>
          <p class="text-gray-600 mb-6">Paseo Marítimo 24, Barcelona, Spain</p>
          <a href="https://maps.app.goo.gl/dBAgPVnBD5zWF9Au6" target="_blank"
            class="inline-flex items-center text-blue-600 hover:underline">
            <span>Show on the map</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </div>

        <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.365094376163!2d2.1683663154255604!3d41.38506307926463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f1a5aaabf1%3A0x1f13a0e4a1a5aaab!2sCaf%C3%A9%20del%20Mar%20Azul!5e0!3m2!1sen!2ses!4v1620000000000!5m2!1sen!2ses"
            width="100%" height="300" style="border:0;" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>
