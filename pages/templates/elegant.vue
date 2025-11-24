<script setup lang="ts">

import Hero from '~/components/templates/elegant/Hero.vue'
import OurStory from '~/components/templates/elegant/OurStory.vue'
import BrideGroom from '~/components/templates/elegant/BrideGroom.vue'
import EventDetails from '~/components/templates/elegant/EventDetails.vue'
import Rsvp from '~/components/templates/elegant/Rsvp.vue'
import MapLocation from '~/components/templates/elegant/MapLocation.vue'
import Gallery from '~/components/templates/elegant/Gallery.vue'
import Navigation from '~/components/templates/Navigation.vue'

const colors = [
  { name: 'Crna', value: '#000000' },
  { name: 'Plava', value: '#4B7DBD' },
  { name: 'Braon', value: '#92400e' },
  { name: 'Roze', value: '#ec4899' },
  { name: 'Zelena', value: '#16a34a' }
]

const selectedColor = ref(colors[0].value)

watch(selectedColor, (newColor) => {
  document.documentElement.style.setProperty('--text-color', newColor)
})
</script>

<template>
  <div class="flex min-h-screen bg-white/50 w-full p-0 mx-0 relative scroll-smooth">

    <Navigation />

    <main class="mx-0 text-[color:var(--text-color)]">
      <section id="home">
        <Hero />
      </section>
      <section id="ourStory">
        <OurStory />
      </section>
      <section id="brideGroom">
        <BrideGroom />
      </section>
      <section id="eventDetails">
        <EventDetails />
      </section>
      <section id="rsvp">
        <Rsvp />
      </section>
      <section id="mapLocation">
        <MapLocation />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </main>
  </div>
</template>
