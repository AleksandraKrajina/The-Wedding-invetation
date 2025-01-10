# pages/demo2.vue
<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section with Names -->
    <section class="min-h-screen relative flex items-center">
      <div class="absolute inset-0">
        <img src="/assets/images/demo2/hero2.png" alt="Wedding Hero" class="w-full h-full object-cover brightness-95" />
      </div>
      <div class="relative z-10 w-full">
        <div class="absolute top-[-200px] left-0 right-0 p-6 container mx-auto">
          <div class="flex justify-between flex-col md:flex-row items-center text-white text-lg md:text-xl">
            <div>15.09.2023.</div>
            <div>VENČANJE</div>
            <div>SONATA OPEN CONCEPT</div>
          </div>
        </div>
        <div class="container mx-auto px-6 mt-8">
          <h1 class="text-white text-8xl md:text-[12rem] font-extralight tracking-wider leading-tight pl-12">
            MINJA &<br />LUKA
          </h1>
        </div>

        <!-- <div class="absolute bottom-6 right-[200px] flex items-center space-x-3 text-white">
          <span class="text-lg md:text-xl">NAŠA PESMA</span>
          <button class="flex items-center justify-center w-8 h-8 rounded-full border border-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> -->
      </div>
    </section>

    <!-- Countdown Section -->


    <!-- Welcome Message -->
    <section class="py-20">
      <div class="container mx-auto px-4 max-w-4xl text-center space-y-8">
        <h2 class="text-4xl font-light">SLAVIMO LJUBAV</h2>
        <p class="text-gray-600 text-lg leading-relaxed">
          Najlepši trenuci u životu dobijaju pravu vrednost i zauvek ostaju u posebnom sećanju tek kada se podele sa
          drugim ljudima.
          Zato vas sa zadovoljstvom pozivamo da svojim prisustvom uveličate i ulepšate naš poseban dan, dan kada ćemo
          reći sudbonosno DA i preći prag koji vodi u ‘’do kraja života’’.
          <br>
          <br>

          Crkveno venčanje će se održati u Crkvi Ružica na Kalemegdanu u 13 časova, a zatim će se svi zajedno uputiti na
          u restoran Sonata Open Concept, na adresi Zrenjaninski put 106b, gde će u 16h30 biti građansko venčanje, nakon
          čega će započeti svečani ručak i žurka.
          <br>
          <br>
          Hvala vam unapred na dolasku!
          <br>
          <br>
          Vaši Minja i Luka
        </p>
      </div>
    </section>

    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-5 mx-2 md:mx-0 md:grid-cols-5 gap-8 text-center">
          <div>
            <div class="text-xl md:text-7xl font-light mb-2">{{ timeLeft.months }}</div>
            <div class="text-sm ">meseci</div>
          </div>
          <div>
            <div class="text-xl md:text-7xl font-light mb-2">{{ timeLeft.days }}</div>
            <div class="text-sm ">dana</div>
          </div>
          <div>
            <div class="text-xl md:text-7xl font-light mb-2">{{ timeLeft.hours }}</div>
            <div class="text-sm ">sati</div>
          </div>
          <div>
            <div class="text-xl md:text-7xl font-light mb-2">{{ timeLeft.minutes }}</div>
            <div class="text-sm ">minuta</div>
          </div>
          <div>
            <div class="text-xl md:text-7xl font-light mb-2">{{ timeLeft.seconds }}</div>
            <div class="text-sm ">sekundi</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Details -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-6xl font-light text-center mb-16">KAD I GDE</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Church Ceremony -->
          <div>
            <div class="relative">
              <img src="/assets/images/demo1/couple1.jpg" alt="Church Ceremony"
                class="w-full aspect-[4/3] object-cover" />
              <div class="border border-gray-200 p-6">
                <div class="space-y-1">
                  <p class="text-sm">13H</p>
                  <p class="text-sm">CRKVA RUŽICA NA KALEMEGDANU</p>
                </div>
                <h3 class="text-4xl font-light mt-4">CRKVENO<br />VENČANJE</h3>
              </div>
            </div>
            <div class="flex items-center justify-end mt-2 text-gray-500">
              <span class="text-sm mr-2">VIDI NA MAPI</span>
              <span class="text-xl">→</span>
            </div>
          </div>

          <!-- Civil Ceremony -->
          <div>
            <div class="relative">
              <img src="/assets/images/demo1/couple1.jpg" alt="Civil Ceremony"
                class="w-full aspect-[4/3] object-cover" />
              <div class="border border-gray-200 p-6">
                <div class="space-y-1">
                  <p class="text-sm">16H30</p>
                  <p class="text-sm">SONATA OPEN CONCEPT</p>
                  <p class="text-sm">ZRENJANINSKI PUT 106B</p>
                </div>
                <h3 class="text-4xl font-light mt-4">GRAĐANSKO<br />VENČANJE</h3>
              </div>
            </div>
            <div class="flex items-center justify-end mt-2 text-gray-500">
              <span class="text-sm mr-2">VIDI NA MAPI</span>
              <span class="text-xl">→</span>
            </div>
          </div>

          <!-- Reception -->
          <div>
            <div class="relative">
              <img src="/assets/images/demo1/couple1.jpg" alt="Reception" class="w-full aspect-[4/3] object-cover" />
              <div class="border border-gray-200 p-6">
                <div class="space-y-1">
                  <p class="text-sm">NAKON GRAĐANSKOG VENČANJA I</p>
                  <p class="text-sm">SLIKANJA POČINJE SVEČANI RUČAK I</p>
                  <p class="text-sm">ŽURKA.</p>
                </div>
                <h3 class="text-4xl font-light mt-4">SVEČANI<br />RUČAK</h3>
              </div>
            </div>
            <div class="flex items-center justify-end mt-2 text-gray-500">
              <span class="text-sm mr-2">VIDI NA MAPI</span>
              <span class="text-xl">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4 text-center space-y-8">
        <h2 class="text-4xl font-light">NAŠA PRIČA</h2>
        <p class="max-w-2xl mx-auto">
          Sreli su se pogledi, dogodilo se "S tobom i na kraj sveta"
          rodila se ljubav iskrena i lepa.
        </p>
        <button class="text-white border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors">
          PUSTI VIDEO
        </button>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img v-for="i in 6" :key="i" src="/assets/images/demo1/couple1.jpg" :alt="`Gallery image ${i}`"
            class="w-full aspect-square object-cover hover:opacity-75 transition-opacity" />
        </div>
      </div>
    </section>

    <!-- Wedding Party -->
    <section class="py-20 bg-black text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-light mb-16">BOG NA NEBU, KUM NA ZEMLJI.</h2>
        <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div class="space-y-6">
            <img src="/assets/images/demo1/couple1.jpg" alt="Mila Milić"
              class="w-64 h-64 object-cover rounded-full mx-auto" />
            <div>
              <h3 class="text-2xl font-light">MILA MILIĆ</h3>
              <p class="text-gray-300">
                Naša kuma je osmeh upakovan u šareno! Zrači pozitivnošču i uvek
                donosi dobro raspoloženje.
              </p>
              <p class="text-gray-300">PS Slobodna je ;)</p>
            </div>
          </div>
          <div class="space-y-6">
            <img src="/assets/images/demo1/couple1.jpg" alt="Filip Filipović"
              class="w-64 h-64 object-cover rounded-full mx-auto" />
            <div>
              <h3 class="text-2xl font-light">FILIP FILIPOVIĆ</h3>
              <p class="text-gray-300">
                Fin dečko džentlmen, ljubi ruke i te stvari.
              </p>
              <p class="text-gray-300">PS Žao nam je, al je zauzet. :/</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RSVP Form -->
    <section class="py-20">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-4xl font-light text-center mb-16">POTVRDA PRISUSTVA</h2>
        <p class="text-center mb-12">
          Molimo vas da potvrdite vaš dolazak putem forme ispod do 01.09.2023. godine.
        </p>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <input type="text" placeholder="IME I PREZIME"
            class="w-full p-4 border border-gray-200 focus:border-black outline-none" />
          <select class="w-full p-4 border border-gray-200 focus:border-black outline-none">
            <option value="" disabled selected>PRISUSTVUJEM (KLIKNI ZA ODABIR)</option>
            <option>Da</option>
            <option>Ne</option>
          </select>
          <select class="w-full p-4 border border-gray-200 focus:border-black outline-none">
            <option value="" disabled selected>BROJ ODRASLIH (KLIKNI ZA ODABIR)</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
          <select class="w-full p-4 border border-gray-200 focus:border-black outline-none">
            <option value="" disabled selected>BROJ DECE (KLIKNI ZA ODABIR)</option>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <input type="text" placeholder="DIJETALNE PREFERENCE"
            class="w-full p-4 border border-gray-200 focus:border-black outline-none" />
          <button type="submit" class="w-full bg-black text-white p-4 hover:bg-gray-800 transition-colors">
            POŠALJI
          </button>
        </form>

        <div class="text-center mt-12 space-y-4">
          <p>SNOVE I LJUBAV POKLONIĆEMO JEDNO DRUGOM, RADOST I</p>
          <p>VESELJE PODELIĆEMO SA VAMA!</p>
          <p>DOBRO NAM DOŠLI!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timeLeft = ref({
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

onMounted(() => {
  const weddingDate = new Date("2023-09-15")

  const timer = setInterval(() => {
    const now = new Date()
    const difference = weddingDate - now

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30)
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)
    if (minutes > 0) {
      timeLeft.value = {
        months,
        days,
        hours,
        minutes,
        seconds
      }
    }
  }, 1000)

  onUnmounted(() => {
    clearInterval(timer)
  })
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted')
}
</script>

<style scoped>
.font-light {
  font-family: "Playfair Display", serif;
}
</style>