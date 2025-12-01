<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    question: 'When and where is the ceremony?',
    answer: 'The ceremony begins at 4:00 PM at Casa Azul, Barcelona. Please arrive 20 minutes early to find your seat.'
  },
  {
    question: 'Is there a dress code?',
    answer: 'Garden chic! Think light fabrics, muted pastels, and comfortable shoes for strolling the venue grounds.'
  },
  {
    question: 'Can I bring my kids?',
    answer: 'We adore your little ones, but this celebration is an adults-only evening so everyone can let loose.'
  },
  {
    question: 'Will transportation be provided?',
    answer: 'Yes, shuttles depart every 30 minutes from Plaça de Catalunya starting at 2:30 PM and returning until midnight.'
  },
  {
    question: 'Who should I contact with questions?',
    answer: 'Reach out to our planner, Marta, at hello@casalove.events for anything you need.'
  }
]

const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="w-full max-w-4xl mx-auto px-4 py-12">
    <div class="text-center mb-8">
      <h2 ref="title" class="text-6xl text-[color:var(--text-color)] md:text-6xl  font-bodoni pl-6 border-b pb-1 mb-11">
        FAQ
      </h2>
      <h2 class="mt-2 text-3xl font-serif text-neutral-900">Answers for the Curious</h2>
    </div>

    <div class="space-y-4">
      <article v-for="(faq, index) in faqs" :key="faq.question"
        class="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
        <button type="button" class="w-full flex items-center justify-between px-5 py-4 text-left"
          @click="toggle(index)">
          <span class="text-base font-medium text-neutral-900">{{ faq.question }}</span>
          <span
            class="h-6 w-6 flex items-center justify-center rounded-full border border-gray-300 text-xs text-gray-500 transition"
            :class="{ 'bg-[#ff5634] text-white border-[#ff5634]': openIndex === index }">
            {{ openIndex === index ? '−' : '+' }}
          </span>
        </button>
        <div v-if="openIndex === index" class="px-5 pb-5 text-sm text-gray-600 border-t border-gray-100">
          {{ faq.answer }}
        </div>
      </article>
    </div>
  </section>
</template>