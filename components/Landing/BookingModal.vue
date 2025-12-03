<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, watch } from 'vue'

const props = defineProps<{
    modelValue: boolean
    theme?: 'neutral' | 'dark'
    googleCalendarUrl?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'submit', payload: {
        selectedThemes: string[]
        email: string
        phone: string
        details: string
    }): void
}>()

const formState = reactive({
    selectedThemes: [] as string[],
    email: '',
    phone: '',
    details: ''
})

const availableThemes = [
    'Golden Romance',
    'Timeless Elegance',
    'Rustic Charm',
    'Soft Glow'
]

const appliedTheme = computed(() => props.theme ?? 'neutral')

const isOpen = computed({
    get: () => props.modelValue,
    set: (value: boolean) => emit('update:modelValue', value)
})

const closeModal = () => {
    isOpen.value = false
}

const resetForm = () => {
    formState.selectedThemes = []
    formState.email = ''
    formState.phone = ''
    formState.details = ''
}

const submitForm = () => {
    emit('submit', {
        selectedThemes: [...formState.selectedThemes],
        email: formState.email,
        phone: formState.phone,
        details: formState.details
    })

    if (props.googleCalendarUrl) {
        window.open(props.googleCalendarUrl, '_blank', 'noopener')
    }

    closeModal()
    resetForm()
}

const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen.value) {
        closeModal()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})

watch(isOpen, (visible) => {
    document.body.style.overflow = visible ? 'hidden' : ''
})
</script>

<template>
    <Teleport to="body">
        <transition name="fade">
            <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center px-4">
                <div class="absolute inset-0 bg-stone-900/70 backdrop-blur-sm" @click="closeModal"></div>

                <div
                    class="relative z-10 w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden animate-modal-in border border-stone-100">
                    <button
                        class="absolute top-4 right-4 rounded-full border border-stone-200 p-2 text-stone-500 hover:text-white hover:bg-stone-800 transition-colors"
                        @click="closeModal" aria-label="Close modal">
                        ✕
                    </button>

                    <div class="grid gap-6 px-8 py-10 sm:px-12">
                        <div class="space-y-2 text-center">
                            <p class="text-sm tracking-[0.4em] uppercase text-stone-400">Exclusive Offer</p>
                            <h2 class="text-5xl font-light text-stone-900">Poručivanje</h2>
                            <p class="text-stone-500 max-w-md mx-auto">
                                Popunite formu i mi ćemo Vam se javiti u najkraćem roku.
                            </p>
                        </div>

                        <form class="space-y-6" @submit.prevent="submitForm">
                            <div class="space-y-3">
                                <p class="text-md font-semibold tracking-wide text-stone-700 uppercase ">Tema
                                </p>
                                <div class="grid gap-2">
                                    <label v-for="themeTitle in availableThemes" :key="themeTitle"
                                        class="flex items-center gap-2  px-4 py-3 transition hover:border-stone-400">
                                        <input v-model="formState.selectedThemes" type="checkbox" :value="themeTitle"
                                            class="h-5 w-5 rounded-full border-stone-300 text-[#ff5634] focus:ring-[#ff5634]" />
                                        <span class="text-stone-700 text-md ">{{ themeTitle }}</span>
                                    </label>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold tracking-wide text-stone-700 uppercase"
                                        for="modal-email">Email</label>
                                    <input id="modal-email" v-model="formState.email" type="email" required
                                        class="w-full rounded-2xl border border-stone-200 px-4 py-3 focus:border-stone-400 focus:outline-none"
                                        placeholder="vas@email.com" />
                                </div>
                                <div class="space-y-2">
                                    <label class="text-sm font-semibold tracking-wide text-stone-700 uppercase"
                                        for="modal-phone">Broj
                                        telefona</label>
                                    <input id="modal-phone" v-model="formState.phone" type="tel" required
                                        class="w-full rounded-2xl border border-stone-200 px-4 py-3 focus:border-stone-400 focus:outline-none"
                                        placeholder="+381 60 000 000" />
                                </div>
                            </div>

                            <div class="space-y-2">
                                <label class="text-sm font-semibold tracking-wide text-stone-700 uppercase"
                                    for="modal-info">Dodatne
                                    informacije</label>
                                <textarea id="modal-info" v-model="formState.details" rows="4"
                                    class="w-full rounded-2xl border border-stone-200 px-4 py-3 focus:border-stone-400 focus:outline-none resize-none"
                                    placeholder="Prenesite nam atmosferu Vašeg dana..."></textarea>
                            </div>

                            <div class="flex flex-col items-center">
                                <button type="submit"
                                    class="inline-flex items-center justify-center rounded-2xl px-8 py-3 text-white bg-black font-semibold shadow-lg text-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2"
                                    :class="appliedTheme === 'dark' ? 'bg-stone-900 hover:bg-stone-800 focus:ring-stone-900' : 'border w-full shadow-lg hover:bg-white hover:text-black'">
                                    Poruči
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.animate-modal-in {
    animation: modalIn 0.4s ease var(--delay, 0s);
}

@keyframes modalIn {
    from {
        opacity: 0;
        transform: translateY(20px) scale(0.98);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>