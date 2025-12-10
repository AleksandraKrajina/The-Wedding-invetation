<script setup lang="ts">
import { ref } from 'vue'

const faqs = [
  {
    question: $t('question1'),
    answer: $t('answer1')
  },
  {
    question: $t('question2'),
    answer: $t('answer2')
  },
  {
    question: $t('question3'),
    answer: $t('answer3')
  },
  {
    question: $t('question4'),
    answer: $t('answer4')
  },
  {
    question: $t('question5'),
    answer: $t('answer5')
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
      <h2 class="mt-2 text-3xl font-serif text-neutral-900">{{ $t('FaqAnswer') }}</h2>
    </div>

    <div class="space-y-4 p-5">
      <article v-for="(faq, index) in faqs" :key="faq.question"
        class="border border-gray-200  bg-white shadow-sm overflow-hidden">
        <button type="button" class="w-full flex items-center justify-between px-5 py-4 text-left"
          @click="toggle(index)">
          <span class="text-xl text-neutral-900">{{ faq.question }}</span>
          <span class="h-6 w-6 flex items-center justify-center rounded-full  text-2xl text-gray-500 transition"
            :class="{ ' text-black ': openIndex === index }">
            {{ openIndex === index ? '−' : '+' }}
          </span>
        </button>
        <div v-if="openIndex === index" class="px-5 py-5 text-xl text-black border-t border-gray-100">
          {{ faq.answer }}
        </div>
      </article>
    </div>
  </section>
</template>