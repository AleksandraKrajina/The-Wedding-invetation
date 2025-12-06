<!-- components/CountdownTimer.vue -->
<template>
  <div class="container mx-auto px-4 max-w-4xl text-center my-20">
    <!-- Title -->
    <h2
      class="text-3xl md:text-4xl mb-12 tracking-wider text-gray-800 font-eyesome">
      BROJIMO SITNO
    </h2>

    <!-- Timer Container -->
    <div class="border border-[#C5A669] p-8 font-eyesome">
      <div class="grid grid-cols-5 gap-4">
        <!-- Months -->
        <div class="flex flex-col items-center">
          <span class="text-4xl md:text-6xl text-[#C5A669] font-light mb-4">{{
            timeLeft.months.toString().padStart(2, "0")
          }}</span>
          <span class="text-gray-600 text-sm md:text-2xl">meseci</span>
        </div>

        <!-- Days -->
        <div class="flex flex-col items-center">
          <span class="text-4xl md:text-6xl text-[#C5A669] font-light mb-4">{{
            timeLeft.days.toString().padStart(2, "0")
          }}</span>
          <span class="text-gray-600 text-sm md:text-2xl">dana</span>
        </div>

        <!-- Hours -->
        <div class="flex flex-col items-center">
          <span class="text-4xl md:text-6xl text-[#C5A669] font-light mb-4">{{
            timeLeft.hours.toString().padStart(2, "0")
          }}</span>
          <span class="text-gray-600 text-sm md:text-2xl">sati</span>
        </div>

        <!-- Minutes -->
        <div class="flex flex-col items-center">
          <span class="text-4xl md:text-6xl text-[#C5A669] font-light mb-4">{{
            timeLeft.minutes.toString().padStart(2, "0")
          }}</span>
          <span class="text-gray-600 text-sm md:text-2xl">minuta</span>
        </div>

        <!-- Seconds -->
        <div class="flex flex-col items-center">
          <span class="text-4xl md:text-6xl text-[#C5A669] font-light mb-4">{{
            timeLeft.seconds.toString().padStart(2, "0")
          }}</span>
          <span class="text-gray-600 text-sm md:text-2xl">sekundi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const targetDate = new Date("2025-06-20T16:00:00");

const timeLeft = ref({
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const calculateTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference > 0) {
    // Calculate months (approximate)
    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30.44);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    timeLeft.value = {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }
};

// Update the countdown every second
onMounted(() => {
  calculateTimeLeft();
  const timer = setInterval(calculateTimeLeft, 1000);

  onUnmounted(() => {
    clearInterval(timer);
  });
});
</script>
