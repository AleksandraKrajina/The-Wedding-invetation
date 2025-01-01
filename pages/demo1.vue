# pages/save-the-date.vue
<template>
  <div class="min-h-screen bg-white">
    <!-- First Section - Save the Date -->
    <section class="min-h-screen flex flex-col md:flex-row">
      <!-- Left Side - Save the Date Content -->
      <div class="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div class="text-center max-w-lg">
          <div class="mb-8">
            <div class="relative w-64 h-64 mx-auto">
              <div class="absolute inset-0">
                <svg viewBox="0 0 100 100" class="w-full h-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" stroke-width="1" />
                  <path d="M50 5 C 70 5, 95 30, 95 50 C 95 70, 70 95, 50 95 C 30 95, 5 70, 5 50 C 5 30, 30 5, 50 5"
                    fill="none" stroke="#e2e8f0" stroke-width="1" />
                </svg>
              </div>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <h1 class="text-5xl font-light mb-2">Save</h1>
                <h2 class="text-4xl font-light mb-2">the</h2>
                <h1 class="text-5xl font-light">Date</h1>
              </div>
            </div>
          </div>
          <!-- <h2 class="text-3xl font-light mb-4">Save the Date</h2> -->
          <h2 class="lg:text-8xl text-6xl font-light text-rose-300 mb-4">Aleksandra & Gvido</h2>
          <p class="text-gray-600 mb-8 text-lg">We Are Getting Married November 15, 2025</p>

          <!-- Countdown Timer -->
          <div class="grid grid-cols-4 gap-4 bg-gray-400 p-4 rounded-lg">
            <div class="text-center">
              <div class="text-3xl font-light text-white">{{ timeLeft.days }}</div>
              <div class="text-sm text-gray-200">Days</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-light text-white">{{ timeLeft.hours }}</div>
              <div class="text-sm text-gray-200">Hours</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-light text-white">{{ timeLeft.minutes }}</div>
              <div class="text-sm text-gray-200">Mins</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-light text-white">{{ timeLeft.seconds }}</div>
              <div class="text-sm text-gray-200">Secs</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Image -->
      <div class="w-full md:w-1/2 h-screen relative">
        <img src="/assets/images/demo1/couple1.jpg" alt="Wedding Couple" class="w-full h-full object-cover" />
      </div>
    </section>

    <!-- Second Section - Couple Profiles -->
    <section class="py-40 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <!-- Bride Profile -->
          <div class="text-center md:w-1/3">
            <h2 class="text-4xl font-light mb-4">Sophia Miles</h2>
            <p class="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
              fringilla pellesque amet tempus.
            </p>
            <div class="flex justify-center gap-4">
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="pi pi-facebook text-xl"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="pi pi-twitter text-xl"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="pi pi-instagram text-xl"></i>
              </a>
            </div>
          </div>

          <!-- Center Images -->
          <div class="flex md:w-1/3 relative">
            <div class="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden">
              <img src="/assets/images/demo1/couple1.jpg" alt="Bride" class="w-64 h-64 object-cover" />
            </div>
            <div class="w-64 md:w-64 md:h-64 rounded-full overflow-hidden -ml-16 mt-16">
              <img src="/assets/images/demo1/couple1.jpg" alt="Groom" class="w-64 h-64 object-cover" />
            </div>
          </div>

          <!-- Groom Profile -->
          <div class="text-center md:w-1/3">
            <h2 class="text-4xl font-light mb-4">Oliver Zonas</h2>
            <p class="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
              fringilla pellesque amet tempus.
            </p>
            <div class="flex justify-center gap-4">
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="pi pi-facebook text-xl"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="pi pi-twitter text-xl"></i>
              </a>
              <a href="#" class="text-gray-600 hover:text-gray-800">
                <i class="pi pi-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-4xl">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <p class="text-rose-300 mb-2">Our Story</p>
          <h2 class="text-4xl font-light">How It Happened</h2>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Vertical Line - Hidden on mobile -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-rose-100 hidden md:block"></div>

          <!-- Timeline Events -->
          <div class="space-y-24">
            <div v-for="(event, index) in timelineEvents" :key="event.title">
              <!-- Mobile Layout -->
              <div class="md:hidden text-center space-y-6">
                <div class="relative w-32 h-32 mx-auto">
                  <div class="w-full h-full rounded-full overflow-hidden">
                    <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
                  </div>
                </div>
                <p class="text-gray-600">{{ event.date }}</p>
                <h3 class="text-2xl font-light">{{ event.title }}</h3>
                <p class="text-gray-600 max-w-sm mx-auto">{{ event.description }}</p>
              </div>

              <!-- Desktop Layout -->
              <div class="hidden md:block relative">
                <!-- Timeline Dot and Line -->
                <div class="absolute left-1/2 top-16 transform -translate-x-1/2">
                  <div class="w-3 h-3 rounded-full bg-rose-100 border border-white"></div>
                </div>

                <!-- Content Container -->
                <div class="grid grid-cols-[1fr,auto,1fr] gap-8 items-center">
                  <!-- Left Side -->
                  <div :class="[index % 2 === 0 ? 'text-right' : 'col-start-3']">
                    <div class="max-w-md ml-auto mr-0" :class="{ 'ml-0 mr-auto': index % 2 !== 0 }">
                      <p class="text-gray-600 mb-2">{{ event.date }}</p>
                      <h3 class="text-2xl font-light mb-4">{{ event.title }}</h3>
                      <p class="text-gray-600">{{ event.description }}</p>
                    </div>
                  </div>

                  <!-- Center Timeline -->
                  <div class="w-8 flex justify-center">
                    <div class="w-8 h-8 rounded-full bg-white border border-rose-200 flex items-center justify-center">
                      <i class="pi pi-heart text-rose-300"></i>
                    </div>
                  </div>

                  <!-- Right Side (Empty for spacing) -->
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <!-- First Column -->
          <div class="space-y-4">
            <div class="rounded-lg overflow-hidden">
              <img src="/assets/images/demo1/couple1.jpg" alt="Wedding moment"
                class="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="rounded-lg overflow-hidden">
              <img src="/assets/images/demo1/couple1.jpg" alt="Wedding moment"
                class="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          <!-- Middle Column with Large Image -->
          <div class="space-y-4">
            <div class="rounded-lg overflow-hidden">
              <img src="/assets/images/demo1/couple1.jpg" alt="Wedding moment"
                class="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          <!-- Third Column -->
          <div class="space-y-4">
            <div class="rounded-lg overflow-hidden">
              <img src="/assets/images/demo1/couple1.jpg" alt="Wedding dress detail"
                class="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
            <div class="rounded-lg overflow-hidden">
              <img src="/assets/images/demo1/couple1.jpg" alt="Wedding moment"
                class="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Important persons -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <p class="text-rose-300 mb-2">Important Persons</p>
          <h2 class="text-4xl font-light mb-12">Bridesmaids & Groomsmen</h2>
        </div>

        <!-- Wedding Party Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="person in weddingParty" :key="person.name" class="text-center">
            <!-- Image Container with Oval Shape -->
            <div class="relative mx-auto mb-6">
              <div class="w-64 h-80 rounded-[64px] overflow-hidden mx-auto">
                <img :src="person.image" :alt="person.name" class="w-full h-full object-cover" />
              </div>
            </div>

            <!-- Person Details -->
            <h3 class="text-2xl font-light mb-2">{{ person.name }}</h3>
            <p class="text-rose-300">{{ person.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- RSVP -->

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg">
          <h2 class="text-4xl font-light text-center mb-12">Are You Attending?</h2>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name Input -->
            <div>
              <input v-model="form.name" type="text" placeholder="Name"
                class="w-full px-4 py-3 border-b border-gray-300 focus:border-olive-600 outline-none transition-colors" />
            </div>

            <!-- Email Input -->
            <div>
              <input v-model="form.email" type="email" placeholder="Email"
                class="w-full px-4 py-3 border-b border-gray-300 focus:border-olive-600 outline-none transition-colors" />
            </div>

            <!-- Attendance Radio Buttons -->
            <div class="flex gap-8">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="form.attending" :value="true" class="w-4 h-4 text-olive-600" />
                <span>Yes, I will be there</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="form.attending" :value="false" class="w-4 h-4 text-olive-600" />
                <span>Sorry, I can't come</span>
              </label>
            </div>

            <!-- Number of Guests Dropdown -->
            <div>
              <select v-model="form.guests"
                class="w-full px-4 py-3 border-b border-gray-300 focus:border-olive-600 outline-none transition-colors bg-white">
                <option value="" disabled selected>Number Of Guests</option>
                <option v-for="n in 5" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
              </select>
            </div>

            <!-- Events Attending -->
            <div>
              <input v-model="form.events" type="text" placeholder="What Will You Be Attending"
                class="w-full px-4 py-3 border-b border-gray-300 focus:border-olive-600 outline-none transition-colors" />
            </div>

            <!-- Meal Preferences -->
            <div>
              <select v-model="form.meal"
                class="w-full px-4 py-3 border-b border-gray-300 focus:border-olive-600 outline-none transition-colors bg-white">
                <option value="" disabled selected>Meal Preferences</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="meat">Meat</option>
                <option value="fish">Fish</option>
              </select>
            </div>

            <!-- Submit Button -->
            <button type="submit"
              class="w-full bg-olive-600 text-white py-3 px-6 rounded hover:bg-olive-700 transition-colors">
              RSVP
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- ABOUT WEDDING -->

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <p class="text-rose-300 mb-2">Our Wedding</p>
          <h2 class="text-4xl font-light">When & Where</h2>
        </div>

        <!-- Events Grid -->
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="event in events" :key="event.title" class="relative group">
            <!-- Image and Content Card -->
            <div class="relative h-96 overflow-hidden">
              <img :src="event.image" :alt="event.title" class="w-full h-full object-cover" />
              <!-- Overlay Card -->
              <div class="absolute inset-0 flex items-end">
                <div
                  class="w-full bg-white p-6 transition-transform transform translate-y-0 group-hover:-translate-y-2">
                  <h3 class="text-2xl font-light mb-4">{{ event.title }}</h3>
                  <p class="text-gray-600 mb-2">{{ event.time }}</p>
                  <p class="text-gray-600 mb-4">{{ event.location }}</p>
                  <a href="#" class="text-rose-300 hover:text-rose-400 transition-colors inline-block">
                    See Location
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
  <GeneralFooter />
</template>

<script setup>
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

onMounted(() => {
  const weddingDate = new Date('2025-11-15')

  const timer = setInterval(() => {
    const now = new Date()
    const difference = weddingDate - now

    timeLeft.value = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }, 1000)

  // Cleanup interval on component unmount
  onUnmounted(() => {
    clearInterval(timer)
  })
})

const timelineEvents = [
  {
    date: '22 Feb, 2019',
    title: 'How we meet',
    description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing.',
    image: '/assets/images/demo1/couple1.jpg'
  },
  {
    date: '02 Nov, 2020',
    title: 'He proposed, I said Yes',
    description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing.',
    image: '/assets/images/demo1/couple1.jpg'
  },
  {
    date: '15 Apr, 2021',
    title: 'Our Engagement Day',
    description: 'Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim tortor, faucibus netus orci donec volutpat adipiscing.',
    image: '/assets/images/demo1/couple1.jpg'
  }
]

const weddingParty = [
  {
    name: 'Jenny Wilson',
    role: 'Bridesmaid',
    image: 'assets/images/demo1/couple1.jpg'
  },
  {
    name: 'Robert Fox',
    role: 'Groomsmen',
    image: 'assets/images/demo1/couple1.jpg'
  },
  {
    name: 'Annette Black',
    role: 'Bridesmaids',
    image: 'assets/images/demo1/couple1.jpg'
  },
  {
    name: 'Jenifer Abram',
    role: 'Groomsmen',
    image: 'assets/images/demo1/couple1.jpg'
  }
]

const form = ref({
  name: '',
  email: '',
  attending: null,
  guests: '',
  events: '',
  meal: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}

const events = [
  {
    title: 'The Reception',
    time: '1:00 PM – 2:30 PM',
    location: 'Washington Ave. Manchester, 39495',
    image: 'assets/images/demo1/couple1.jpg'
  },
  {
    title: 'The Ceremony',
    time: '1:00 PM – 2:30 PM',
    location: 'Washington Ave. Manchester, 39495',
    image: 'assets/images/demo1/couple1.jpg'
  },
  {
    title: 'The Party',
    time: '1:00 PM – 2:30 PM',
    location: 'Washington Ave. Manchester, 39495',
    image: 'assets/images/demo1/couple1.jpg'
  }
]
</script>

<style scoped>
.font-light {
  font-family: 'Playfair Display', serif;
}
</style>