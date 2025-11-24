<script setup lang="ts">
import Countdown from '~/components/Countdown.vue';
import Gallery from '~/components/templates/elegant/Gallery.vue';
import Rsvp from '~/components/templates/elegant/Rsvp.vue';
import Hero from '~/components/templates/postWedding/Hero.vue';
import OurStory from '~/components/templates/postWedding/OurStory.vue';
import Party from '~/components/templates/postWedding/Party.vue';
import WhenWhere from '~/components/templates/postWedding/WhenWhere.vue';

</script>

<template>
    <div class="flex min-h-screen container mx-auto w-full p-0 m-0 relative scroll-smooth text-black border-b-2">

        <section>
            <Hero />
        </section>
        <section>
            <Countdown targetDate="2026-07-29T17:00:00" />
        </section>
        <section>
            <WhenWhere />
        </section>
        <section>
            <OurStory />
        </section>
        <section>
            <Gallery />
        </section>
        <section>
            <Party />
        </section>
        <section>
            <Rsvp />
        </section>
    </div>

</template>