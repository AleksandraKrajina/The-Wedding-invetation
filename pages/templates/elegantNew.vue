<script setup lang="ts">
import Countdown from '~/components/templates/Countdown.vue'
import Hero from '~/components/templates/elegant/Hero.vue'
import WlcomeMessage from '~/components/templates/elegant/WelcomeMessage.vue'
import EventDetails from '~/components/templates/elegant/EventDetails.vue'
import OurStory from '~/components/templates/elegant/OurStory.vue'
import Rsvp from '~/components/templates/elegant/Rsvp.vue'
import Gallery from '~/components/templates/elegant/Gallery.vue'
import BestMan from '~/components/templates/BestMan.vue'

</script>

<style scoped>
.font-light {
  font-family: "Playfair Display", serif;
}
</style>

<template>
  <div class="min-h-screen bg-white">


    <section id="home">
      <Hero />
    </section>
    <section>
      <Countdown targetDate="2026-07-29T17:00:00" />
    </section>
    <section>
      <WlcomeMessage />
    </section>
    <section>
      <EventDetails />
    </section>
    <section>
      <OurStory />
    </section>
    <section>
      <Gallery />
    </section>
    <section>
      <BestMan />
    </section>
    <section>
      <Rsvp />
    </section>
  </div>
</template>