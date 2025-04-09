<template>
  <div>
    <ClientOnly>
      <LocaleDetector />
    </ClientOnly>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
import 'primeicons/primeicons.css'
import LocaleDetector from './components/LocaleDetector.vue';
</script>