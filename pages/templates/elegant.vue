<script setup lang="ts">
useHead({ title: 'The elegant template' })

import Countdown from '~/components/templates/elegant/Countdown.vue'
import Hero from '~/components/templates/elegant/Hero.vue'
import WlcomeMessage from '~/components/templates/elegant/WelcomeMessage.vue'
import EventDetails from '~/components/templates/elegant/EventDetails.vue'
import OurStory from '~/components/templates/elegant/OurStory.vue'
import Rsvp from '~/components/templates/elegant/Rsvp.vue'
import Gallery from '~/components/templates/General/Gallery.vue'
import BestMan from '~/components/templates/elegant/BestMan.vue'
import Navigation from '~/components/templates/Navigation.vue'

</script>

<style scoped>
@font-face {

  font-family: 'tanmoncheri';
  src: url('/fonts/tan-mon-cheri.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.tanmoncheri {
  font-family: 'tanmoncheri', cursive;
}
</style>

<template>
  <div class="min-h-screen w-full bg-white">

    <Navigation />
    <section id="home">
      <Hero />
    </section>
    <section>
      <WlcomeMessage />
    </section>
    <section class="bg-black text-white py-10">
      <Countdown targetDate="2026-10-29T17:00:00" />
    </section>
    <section>
      <EventDetails />
    </section>
    <section>
      <OurStory />
    </section>
    <section class="bg-black py-3">
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