<template>
  <section id="Rsvp" ref="section" class=" bg-black/75 container mx-auto w-full h-screen ">
    <div class=" text-white">
      
      <div class="max-w-md mx-auto bg-transparent p-5 md:p-10 lg:p-10 ">
        <form class="space-y-7" @submit.prevent="submitRSVP">
          <div>
            <label for="name" class="block text-2xl font-large text mb-1 bg-transparent">Your Name(s)</label>
            <input 
              id="name" 
              v-model="formData.name" 
              type="text" 
              required
              class="w-full px-4 py-2 border-b bg-transparent focus:ring-2 focus:ring-black focus:border-transparent "
            >
          </div>
          
          <div>
            <label class="block text-2xl font-large text mb-2">Will you be attending?</label>
            <div class="space-y-4">
              <label class="flex items-center">
                <input 
                  v-model="formData.attending" 
                  type="radio" 
                  value="yes" 
                  class="h-5 w-6 text focus:ring-black"
                >
                <span class="ml-2 text-lg">Accept with pleasure</span>
              </label>
              <label class="flex items-center">
                <input 
                  v-model="formData.attending" 
                  type="radio" 
                  value="no" 
                  class="h-5 w-6 text-lg focus:ring-black"
                >
                <span class="ml-2 text-lg">Regretfully decline</span>
              </label>
            </div>
          </div>
          
          <div v-if="formData.attending === 'yes'">
            <label for="guests" class="block bg-transparent text-2xl font-large text mb-1">Number of guests</label>
            <select 
              id="guests" 
              v-model="formData.guests" 
              class="w-full px-4 py-2 border focus:ring-2 bg-transparent"
            >
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
            </select>
          </div>
          
          <div>
            <label for="message" class="block text-2xl bg-transparent font-large text mb-1">Message (optional)</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              rows="3" 
              class="w-full px-4 py-2 border bg-transparent focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
          
          <div class="pt-4">
            <button 
              type="submit" 
              class="w-full bg-white text-black/80 py-6 px-10 text-xl rounded-sm hover:bg-gray-300 transition-colors"
            >
              Send RSVP
            </button>
          </div>
        </form>
        
        <p class="text-center text-md text-gray-500 mt-8">Kindly reply by September 25th</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const section = ref(null)
const title = ref(null)

onMounted(() => {
  
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