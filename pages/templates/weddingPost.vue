<script setup lang="ts">
useHead({ title: 'The Wedding Post' })

import Masthead from '~/components/templates/WeddingPost/Masthead.vue'
import Intro from '~/components/templates/WeddingPost/Intro.vue'
import Countdown from '~/components/templates/WeddingPost/Countdown.vue'
import WhenAndWhere from '~/components/templates/WeddingPost/WhenAndWhere.vue'
import OurStory from '~/components/templates/WeddingPost/OurStory.vue'
import WeddingParty from '~/components/templates/WeddingPost/WeddingParty.vue'
import FooterSection from '~/components/templates/WeddingPost/FooterSection.vue'
import Rsvp from '~/components/templates/WeddingPost/Rsvp.vue'
import Navigation from '~/components/templates/Navigation.vue'
import Gallery from '~/components/templates/General/Gallery.vue'

</script>
<template>
  <Navigation />
  <main class="page-bg min-h-screen text-neutral-900 pt-10 EBGaramond-BoldItalic ">
    <Masthead />
    <Intro />
    <Countdown targetDate="2026-10-29T17:00:00" class=" mx-auto container bg-black text-white py-2 " />
    <WhenAndWhere />
    <OurStory />
    <section class="container mx-auto bg-[#fffbf7] ">

      <Gallery class="my-0 py-10 grayscale " />
      <div class="border-t-4 border-black mb-1"></div>
      <div class="border-t border-black"></div>
    </section>
    <WeddingParty />

    <section class=" mx-auto bg-[#fffbf7] container px-5">
      <p class=" text-xs w-full flex items-center justify-between p-3">
        <span class="text-left">Monday, June 29, 2026</span>
        <span class="text-right">Barcelona, Spain</span>
      </p>
      <div class="border-t-4 border-black mb-1"></div>
      <div class="border-t-2 border-black mb-1 mt-1"></div>

      <Rsvp />

      <div class="border-t-4 border-black mb-1"></div>
      <div class="border-t border-black"></div>
    </section>
    <FooterSection />
  </main>
</template>
