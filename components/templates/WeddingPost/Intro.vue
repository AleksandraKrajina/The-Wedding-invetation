<template>
  <section class="mx-auto container  px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#fffbf7] EBGramond-BoldItalic">
    <blockquote class="h-serif  text-4xl items-center flex text-left italic font-semibold leading-snug">

      {{ $t('introQuote') }}
    </blockquote>
    <div class="text-xl leading-7 space-y-4 font-sans">
      <p>
        {{ $t('introDesc') }}
      </p>
    </div>
  </section>
</template>
