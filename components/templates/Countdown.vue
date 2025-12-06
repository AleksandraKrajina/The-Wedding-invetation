<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
})

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let interval

const calculateTimeLeft = () => {
  const target = new Date(props.targetDate).getTime()
  const now = new Date().getTime()
  const diff = target - now

  if (diff <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    clearInterval(interval)
    return
  }

  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

onMounted(() => {
  calculateTimeLeft()
  interval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>


<template>
  <section class="w-full min-h-[20vh] bg-white flex items-center justify-center">
    <div class="text-center">
      <div class="grid grid-cols-4 gap-6 text-4xl md:text-6xl font-extrabold">
        <div>
          <p>{{ timeLeft.days }}</p>
          <span class="text-base font-medium">Days</span>
        </div>
        <div>
          <p>{{ timeLeft.hours }}</p>
          <span class="text-base font-medium">Hours</span>
        </div>
        <div>
          <p>{{ timeLeft.minutes }}</p>
          <span class="text-base font-medium">Minutes</span>
        </div>
        <div>
          <p>{{ timeLeft.seconds }}</p>
          <span class="text-base font-medium">Seconds</span>
        </div>
      </div>
    </div>
  </section>
</template>
