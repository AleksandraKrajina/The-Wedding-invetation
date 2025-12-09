<script setup>
import { ref } from "vue"
import Rsvp from "./Rsvp.vue"

const isOverlayOpen = ref(false)
const overlayId = ref(null)
const isOpen = ref(false)

function openOverlay(id) {
  overlayId.value = id
  isOverlayOpen.value = true
}

function closeOverlay() {
  overlayId.value = null
  isOverlayOpen.value = false
}

const links = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "On the Day", href: "#on-the-day" },
  { label: "Timing", href: "#timing" },
  { label: "When and where", href: "#when-where" },
  { label: "FAQ", href: "#Faq" }
]
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.2;
}
</style>

<template>
  <aside
    class="hidden md:fixed lg:flex border font-bodoni top-10 left-0 lg:h-screen w-1/5 bg-white text-[color:var(--text-color)] flex-col justify-between z-50">
    <div>
      <h2 class="text-5xl font-bodoni flex justify-center border-b p-5">
        29.<br>July
      </h2>
    </div>

    <nav class="flex-1 flex flex-col justify-center items-start px-7 space-y-7">
      <template v-for="(link, index) in links" :key="index">
        <NuxtLink v-if="link.type !== 'overlay'" :to="link.href"
          class="text-lg font-medium hover:text-xl transition-all">
          {{ link.label }}
        </NuxtLink>
        <button v-else class="text-lg  font-medium hover:text-xl transition-all" @click="openOverlay(link.id)">
          {{ link.label }}
        </button>
      </template>
    </nav>

    <div class="p-6 border-t mb-6 w-full hover:bg-gray-700 text-center transition-colors">
      <button class="block w-full text-2xl p-2 rounded-lg" @click="openOverlay('rsvp')">
        Accept
      </button>
    </div>
  </aside>

  <div class="lg:hidden p-2 fixed top-16 pt-5 left-0 w-full bg-white shadow z-99">
    <div class="flex items-center justify-between px-4 pt-4">
      <button class="text font-bold text-2xl" @click="isOpen = !isOpen">
        Menu
      </button>
      <h2 class="text-3xl pr-4">29.<br class="hidden">July</h2>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class=" px-5 py-4  space-y-3 border-t">
        <template v-for="(link, index) in links" :key="index">
          <NuxtLink v-if="link.type !== 'overlay'" :to="link.href" class="block text-xl transition-colors"
            @click="isOpen = false">
            {{ link.label }}
          </NuxtLink>
          <button v-else class="block text-xl transition-colors"
            @click="() => { openOverlay(link.id); isOpen = false }">
            {{ link.label }}
          </button>
        </template>

        <button
          class="block text-center justify-center items-center text-xl  py-2 px-4 rounded-lg transition-colors hover:bg-gray"
          @click="() => { openOverlay('rsvp'); isOpen = false }">
          Accept
        </button>
      </div>
    </transition>
  </div>

  <transition name="fade">
    <div v-if="isOverlayOpen" class="fixed inset-0 z-50 flex flex-col items-center justify-center pt-32 bg-black">
      <button class="absolute border p-4 top-14 left-14 md:left-24 hover:text-3xl text-white text-2xl "
        @click="closeOverlay">
        Close
      </button>

      <div v-if="overlayId === 'rsvp'" class="p-8 w-full max-w-4xl">
        <Rsvp />
      </div>
    </div>
  </transition>
</template>
