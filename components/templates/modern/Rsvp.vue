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

const formData = ref({
  name: '',
  email: '',
  attending: 'yes',
  guests: '2',
  message: ''
})

const submitRSVP = () => {
  console.log('RSVP submitted:', formData.value)
  alert('Thank you for your RSVP! We look forward to celebrating with you.')
  formData.value = {
    name: '',
    email: '',
    attending: 'yes',
    guests: '2',
    message: ''
  }
}
</script>

<template>
  <section id="Rsvp" ref="section" class=" bg-black/75 container mx-auto w-full h-screen ">
    <div class=" text-white">
      <div class="max-w-2xl mx-auto bg-transparent p-5 md:p-10 lg:p-10 justify-center items-center">

        <form class="my-10 text-left space-y-6 pt-16 " @submit.prevent="submitRSVP">
          <label class=" flex flex-col text-sm uppercase tracking-wide text-[#1e1c1c]-500">
            <input type="text " placeholder="IME I PREZIME"
              class="mt-2 bg-black border border-gray-400 px-4 py-3 text-sm  focus:outline-none" />
          </label>

          <label class="  flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
            <select class="mt-2 bg-black border border-gray-400 px-4 py-3 text-lg focus:outline-none">
              <option value="da">Da</option>
              <option value="ne">Nažalost ne mogu</option>
            </select>
          </label>

          <label class=" flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
            <input type="number" min="1" placeholder="ODABIR ODRASLIH"
              class="mt-2 bg-black border border-gray-400 px-4 py-3 text-sm  focus:outline-none" />
          </label>

          <label class="  flex flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
            <input type="number" min="1" placeholder="BROJ DECE (KLIKNI ZA ODABIR)"
              class="mt-2 bg-black border border-gray-400 px-4 py-3 text-sm  focus:outline-none" />
          </label>

          <label class="  flex  flex-col text-xs uppercase tracking-wide text-[#1e1c1c]-500">
            <textarea rows="4" placeholder="DIJETALNE PREFERENCIJE ILI NAPOMENE"
              class="mt-2 bg-black border border-gray-400 px-4 py-3 text-sm  focus:outline-none resize-none"></textarea>
          </label>
          <div class="mt-6">
            <button type="submit"
              class=" w-full bg-white px-6 py-3 text-md font-bold tracking-wide text-black transition hover:opacity-80">
              {{ $t('send') }}
            </button>
          </div>
        </form>



        <p class="text-center text-md text-gray-500 mt-8">Kindly reply by September 25th</p>
      </div>
    </div>
  </section>
</template>
