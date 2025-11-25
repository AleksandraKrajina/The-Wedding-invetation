<script setup lang="ts">
import { NuxtImg } from '#components'
import { ref, onMounted, onBeforeUnmount } from 'vue'
const showBride = ref(false)
const showGroom = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

const { t: $t } = useI18n()

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showBride.value = true

          setTimeout(() => (showGroom.value = true), 400)
        } else {
          showBride.value = false
          showGroom.value = false
        }
      })
    },
    { threshold: 0.3 }
  )

  // if (sectionRef.value) observer.observe(sectionRef.value)

  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <section id="brideGroom" ref="sectionRef"
    class="w-full h-auto md:h-screen container mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
    <div class="w-full h-auto md:h-full">
      <NuxtImg src="/public/assets/images/templates/bride.jpg" alt="Bride" class="w-full h-full object-cover" />
    </div>

    <div
      class="flex items-center justify-center bg-blue-50 w-full h-auto md:h-full transition-all duration-1000 ease-out"
      :class="showBride ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
      <div class="text-center md:text-left p-2">
        <h2 class="lg:text-5xl text-xl font-bold text-[color:var(--text-color)] text-center">
          {{ $t('bride') }}
        </h2>
        <h4 class="text-center font-bold lg:text-xl text-[color:var(--text-color)]">
          22, July 1995. | Novi Sad, Serbia
        </h4>
        <p class="mt-4 text-gray-700 px-7 text-md ">{{ $t('brideParagraph') }}</p>
      </div>
    </div>

    <div class="w-full h-auto md:h-full md:hidden lg:hidden">
      <NuxtImg src="/public/assets/images/templates/groom.jpg" alt="Groom" class="w-full h-full object-cover" />
    </div>

    <div
      class="flex items-center justify-center bg-blue-50 w-full h-auto md:h-full transition-all duration-1000 ease-out"
      :class="showGroom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'">
      <div class="text-center md:text-left p-2">
        <h2 class="lg:text-5xl text-xl font-bold text-[color:var(--text-color)] text-center">
          {{ $t('groom') }}
        </h2>
        <h4 class="text-center font-bold text-[color:var(--text-color)]">
          12, July 1991. | Belgrade, Serbia
        </h4>
        <p class="mt-4 text-gray-700 px-7 text-md lg:text-lg">{{ $t('groomParagraph') }}</p>
      </div>
    </div>


    <div class="w-full h-auto md:h-full hidden md:block lg:block">
      <NuxtImg src="/public/assets/images/templates/groom.jpg" alt="Groom" class="w-full h-full object-cover" />
    </div>
  </section>
</template>
