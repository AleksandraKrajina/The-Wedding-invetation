<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'amber', 'neutral'].includes(value)
  },
  googleCalendarUrl: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

// Computed theme classes
const headerClass = computed(() => {
  switch (props.theme) {
    case 'amber':
      return 'bg-gradient-to-r from-amber-50 to-amber-100'
    case 'neutral':
      return 'bg-neutral-50'
    default:
      return 'bg-amber-50'
  }
})

// State
const isLoading = ref(true)
const calendarIframe = ref(null)

// Handle modal closing
const closeModal = () => {
  emit('update:modelValue', false)
}

// Reset loading state when modal opens
watch(() => props.modelValue, (newVal) => {
  if (newVal === true) {
    isLoading.value = true
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open

    // Ensure the modal shows correctly regardless of scroll position
    window.scrollTo({
      top: window.scrollY,
      behavior: 'auto'
    })
  } else {
    document.body.style.overflow = '' // Restore scrolling
  }
})

// Handle iframe load event
const handleIframeLoad = () => {
  isLoading.value = false
}
</script>

<style scoped>
@keyframes modalAppear {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-modal-appear {
  animation: modalAppear 0.3s ease-out forwards;
}
</style>

<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center z-[9999]">
      <!-- Modal backdrop with blur effect -->
      <div class="fixed inset-0 bg-stone-900 bg-opacity-80 backdrop-blur-sm" @click="closeModal"></div>

      <!-- Modal content -->
      <div
        class="relative bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl mx-6 max-h-[85vh] flex flex-col animate-modal-appear z-[10000]">
        <!-- Modal header with theme color -->
        <div class="px-6 py-4 border-b border-neutral-200 flex justify-between items-center" :class="headerClass">
          <h3 class="text-xl font-medium text-stone-800"></h3>
          <button @click="closeModal" class="text-neutral-500 hover:text-neutral-700 focus:outline-none"
            aria-label="Close booking modal">
            <i class="pi pi-times text-lg"></i>
          </button>
        </div>

        <!-- Modal body with embedded calendar -->
        <div class="p-6 overflow-auto flex-grow">
          <div v-if="isLoading" class="flex flex-col items-center justify-center py-12">
            <div class="w-12 h-12 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin"></div>
            <p class="mt-4 text-neutral-600"></p>
          </div>

          <iframe v-show="!isLoading" ref="calendarIframe" :src="googleCalendarUrl"
            style="width: 100%; min-height: 600px; border: none;" frameborder="0" @load="handleIframeLoad"></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>
