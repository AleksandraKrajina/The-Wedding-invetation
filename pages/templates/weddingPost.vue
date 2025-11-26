<script setup lang="ts">
useHead({ title: 'The Wedding Post' })

import Masthead from '~/components/templates/WeddingPost/Masthead.vue'
import Intro from '~/components/templates/WeddingPost/Intro.vue'
import Countdown from '~/components/templates/Countdown.vue'
import WhenAndWhere from '~/components/templates/WeddingPost/WhenAndWhere.vue'
import OurStory from '~/components/templates/WeddingPost/OurStory.vue'
import WeddingParty from '~/components/templates/WeddingPost/WeddingParty.vue'
import FooterSection from '~/components/templates/WeddingPost/FooterSection.vue'
import Rsvp from '~/components/templates/elegant/Rsvp.vue'

</script>

<template>
  <main class="page-bg min-h-screen text-neutral-900">
    <Masthead />
    <Intro />
    <Countdown targetDate="2026-08-29T17:00:00" />
    <WhenAndWhere />
    <OurStory />
    <WeddingParty />

    <section class="border-y border-black max-w-6xl mx-auto">
      <p class="mt-1 text-xs w-full flex items-center justify-between p-3">
        <span class="text-left">Monday, June 29, 2026</span>
        <span class="text-right">Barcelona, Spain</span>
      </p>
      <div class="border-t-4 border-black mb-1"></div>
      <div class="border-t-2 border-black mb-1 mt-1"></div>

      <Rsvp />
    </section>
    <FooterSection />
  </main>
</template>
