<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    targetDate: {
        type: String,
        required: true
    }
})

const timeLeft = ref({
    monts: 0,
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
        timeLeft.value = { monts: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }
        clearInterval(interval)
        return
    }

    timeLeft.value = {
        monts: Math.floor(diff / (1000 * 60 * 60 * 24 * 30)),
        days: Math.floor((diff / (1000 * 60 * 60 * 24)) % 30),
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
    <section class="w-full min-h-[20vh] flex items-center justify-center ">
        <div class="text-center ">
            <div class="grid grid-cols-5 md:gap-24 gap-5 text-4xl md:text-6xl  ">
                <div>
                    <p>{{ timeLeft.monts }}</p>
                    <span class="text-base font-medium">Monts</span>
                </div>
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
