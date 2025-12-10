<script setup lang="ts">
useHead({ title: 'The modern template' })

import Hero from '~/components/templates/modern/Hero.vue'
import OnTheDay from '~/components/templates/modern/OnTheDay.vue'
import Story from '~/components/templates/modern/Story.vue'
import Timing from '~/components/templates/modern/Timing.vue'
import Faq from '~/components/templates/Faq.vue'
import WhenWhere from '~/components/templates/modern/WhenWhere.vue'
import Header from '~/components/templates/modern/Header.vue'
import Navigation from '~/components/templates/Navigation.vue'


</script>

<template>
  <div class="flex min-h-screen w-full p-0 m-0 relative scroll-smooth text-[color:var(--text-color)]">

    <Navigation />


    <aside class="md:block lg:block w-1/5 fixed left-0 top-10 h-screen z-40">
      <Header />
    </aside>

    <main class="w-full font-cormorant md:ml-[20%] md:w-4/5 pt-10">

      <div class="py-12 space-y-12">
        <section id="home">
          <Hero />
        </section>
        <section id="story">
          <Story />
        </section>
        <section id="on-the-day">
          <OnTheDay />
        </section>
        <section id="timing">
          <Timing />
        </section>
        <section id="when-where">
          <WhenWhere />
        </section>
        <section id="Faq">
          <Faq />
        </section>
      </div>
    </main>
  </div>
</template>
