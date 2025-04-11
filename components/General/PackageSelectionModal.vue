<template>
  <Teleport to="body">
    <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center z-[9999]">
      <!-- Modal backdrop with blur effect -->
      <div 
        class="fixed inset-0 bg-stone-900 bg-opacity-80 backdrop-blur-sm" 
        @click="closeModal"
      ></div>
      
      <!-- Modal content -->
      <div class="relative bg-white rounded-xl overflow-hidden shadow-2xl w-full max-w-2xl mx-6 max-h-[85vh] flex flex-col animate-modal-appear z-[10000]">
        <!-- Modal header with theme color -->
        <div class="px-6 py-4 bg-gradient-to-r from-amber-50 to-amber-100 border-b border-neutral-200 flex justify-between items-center">
          <h3 class="text-xl font-medium text-stone-800">{{ modalTitle }}</h3>
          <button 
            @click="closeModal" 
            class="text-neutral-500 hover:text-neutral-700 focus:outline-none"
            aria-label="Close package selection modal"
          >
            <i class="pi pi-times text-lg"></i>
          </button>
        </div>
        
        <!-- Progress steps -->
        <div class="px-6 pt-4 bg-white border-b border-neutral-100">
          <div class="flex items-center justify-between max-w-md mx-auto">
            <div class="flex flex-col items-center">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1.5 transition-colors"
                :class="formStep === 1 ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'"
              >
                1
              </div>
              <div class="text-xs font-medium" :class="formStep === 1 ? 'text-neutral-800' : 'text-neutral-500'">
                {{ t('selectPackage') }}
              </div>
            </div>
            
            <div class="flex-1 h-px bg-neutral-200 mx-2 mt-[-16px]"></div>
            
            <div class="flex flex-col items-center">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1.5 transition-colors"
                :class="formStep === 2 ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'"
              >
                2
              </div>
              <div class="text-xs font-medium" :class="formStep === 2 ? 'text-neutral-800' : 'text-neutral-500'">
                {{ t('yourDetails') }}
              </div>
            </div>
            
            <div class="flex-1 h-px bg-neutral-200 mx-2 mt-[-16px]"></div>
            
            <div class="flex flex-col items-center">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1.5 transition-colors"
                :class="formStep === 3 ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-500'"
              >
                3
              </div>
              <div class="text-xs font-medium" :class="formStep === 3 ? 'text-neutral-800' : 'text-neutral-500'">
                {{ t('confirmation') }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Form content -->
        <div class="p-6 overflow-auto flex-grow">
          <!-- Step 1: Package Selection -->
          <div v-if="formStep === 1">
            <p class="text-neutral-600 mb-6 text-center">{{ t('chooseYourPackage') }}</p>
            
            <div class="grid gap-4 sm:grid-cols-2">
              <!-- Basic Package Card -->
              <div 
                @click="selectPackageInModal('basic')" 
                class="border rounded-lg overflow-hidden transition-all cursor-pointer"
                :class="[
                  activePackage === 'basic' 
                    ? 'border-amber-400 shadow-md bg-amber-50 bg-opacity-30' 
                    : 'border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
                ]"
              >
                <div class="p-4 bg-white border-b border-neutral-100">
                  <div class="text-center">
                    <h3 class="text-xl font-medium text-neutral-800 mb-2">{{ t('basicPlan') }}</h3>
                    
                    <div class="flex items-baseline justify-center gap-1">
                      <span class="text-3xl font-light text-neutral-800">$99</span>
                      <div class="bg-amber-100 py-0.5 px-1.5 rounded-full text-amber-700 font-bold text-xs border border-amber-200">
                        -15%
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('basicFeature1') }}</span>
                    </li>
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('basicFeature2') }}</span>
                    </li>
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('basicFeature3') }}</span>
                    </li>
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('basicFeature4') }}</span>
                    </li>
                  </ul>
                  
                  <!-- Selected indicator -->
                  <div 
                    v-if="activePackage === 'basic'" 
                    class="mt-4 flex items-center justify-center text-amber-600 text-sm font-medium"
                  >
                    <i class="pi pi-check-circle mr-1.5"></i>
                    {{ t('packageSelected') }}
                  </div>
                </div>
              </div>
              
              <!-- Premium Package Card -->
              <div 
                @click="selectPackageInModal('premium')" 
                class="border rounded-lg overflow-hidden transition-all cursor-pointer relative"
                :class="[
                  activePackage === 'premium' 
                    ? 'border-amber-400 shadow-md bg-amber-50 bg-opacity-30' 
                    : 'border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
                ]"
              >
                <!-- Popular badge -->
                <div class="absolute top-0 right-0 bg-neutral-800 text-white py-0.5 px-2 text-xs font-medium">
                  {{ t('mostPopular') }}
                </div>
                
                <div class="p-4 bg-white border-b border-neutral-100">
                  <div class="text-center">
                    <h3 class="text-xl font-medium text-neutral-800 mb-2">{{ t('premiumPlan') }}</h3>
                    
                    <div class="flex items-baseline justify-center gap-1">
                      <span class="text-3xl font-light text-neutral-800">$199</span>
                      <div class="bg-amber-100 py-0.5 px-1.5 rounded-full text-amber-700 font-bold text-xs border border-amber-200">
                        -20%
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="p-4">
                  <ul class="space-y-2">
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('premiumFeature1') }}</span>
                    </li>
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('premiumFeature2') }}</span>
                    </li>
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('premiumFeature3') }}</span>
                    </li>
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('premiumFeature4') }}</span>
                    </li>
                    <li class="flex items-start text-sm">
                      <div class="mt-0.5 mr-2 w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0">
                        <i class="pi pi-check text-neutral-600 text-[10px]"></i>
                      </div>
                      <span class="text-neutral-700">{{ t('premiumFeature5') }}</span>
                    </li>
                  </ul>
                  
                  <!-- Selected indicator -->
                  <div 
                    v-if="activePackage === 'premium'" 
                    class="mt-4 flex items-center justify-center text-amber-600 text-sm font-medium"
                  >
                    <i class="pi pi-check-circle mr-1.5"></i>
                    {{ t('packageSelected') }}
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Continue button -->
            <div class="mt-6">
              <button 
                @click="nextStep" 
                class="w-full bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-full font-medium transition-all duration-300 shadow-sm"
                :disabled="!activePackage"
                :class="{'opacity-50 cursor-not-allowed': !activePackage}"
              >
                {{ t('continueWithSelectedPackage') }}
              </button>
            </div>
          </div>
          
          <!-- Step 2: Contact Form -->
          <div v-if="formStep === 2">
            <div class="mb-6">
              <div class="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-4">
                <div class="flex items-center">
                  <div class="flex-shrink-0 w-12 h-12 rounded-lg bg-white border border-amber-200 flex items-center justify-center mr-4">
                    <i class="pi pi-tag text-amber-500 text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-neutral-800">{{ activePackage === 'basic' ? t('basicPlan') : t('premiumPlan') }}</h4>
                    <p class="text-neutral-600 text-sm">
                      <span class="font-medium">{{ activePackage === 'basic' ? '$99' : '$199' }}</span> 
                      <span class="text-amber-600 ml-1 font-medium">{{ activePackage === 'basic' ? '-15%' : '-20%' }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <form @submit.prevent="submitForm" class="space-y-4">
              <!-- Names -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-1">{{ t('firstName') }} *</label>
                  <input 
                    v-model="formData.firstName" 
                    type="text" 
                    class="w-full p-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none transition-all"
                    required
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-1">{{ t('lastName') }} *</label>
                  <input 
                    v-model="formData.lastName" 
                    type="text" 
                    class="w-full p-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none transition-all"
                    required
                  >
                </div>
              </div>
              
              <!-- Email -->
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">{{ t('email') }} *</label>
                <input 
                  v-model="formData.email" 
                  type="email" 
                  class="w-full p-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none transition-all"
                  required
                >
              </div>
              
              <!-- Wedding Date -->
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">{{ t('weddingDate') }}</label>
                <input 
                  v-model="formData.weddingDate" 
                  type="date" 
                  class="w-full p-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none transition-all"
                >
              </div>
              
              <!-- Additional Notes -->
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-1">{{ t('additionalNotes') }}</label>
                <textarea 
                  v-model="formData.notes" 
                  rows="3"
                  class="w-full p-2.5 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-amber-200 focus:border-amber-400 outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <!-- Form Navigation Buttons -->
              <div class="pt-4 flex gap-4">
                <button 
                  type="button"
                  @click="formStep = 1"
                  class="flex-1 border border-neutral-300 text-neutral-800 py-3 rounded-full font-medium transition-all duration-300 hover:bg-neutral-50 shadow-sm"
                >
                  {{ t('back') }}
                </button>
                
                <button 
                  type="submit" 
                  class="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-full font-medium transition-all duration-300 shadow-sm"
                  :disabled="isSubmitting"
                  :class="{'opacity-75 cursor-wait': isSubmitting}"
                >
                  <span v-if="isSubmitting">
                    <i class="pi pi-spin pi-spinner mr-2"></i>
                    {{ t('submitting') }}
                  </span>
                  <span v-else>{{ t('continueText') }}</span>
                </button>
              </div>
            </form>
          </div>
          
          <!-- Step 3: Success/Confirmation -->
          <div v-if="formStep === 3" class="text-center py-4">
            <div class="mb-8 text-green-500 flex justify-center">
              <i class="pi pi-check-circle text-6xl"></i>
            </div>
            
            <h3 class="text-2xl font-medium text-neutral-800 mb-4">{{ t('thankYou') }}!</h3>
            <p class="text-neutral-600 mb-8 max-w-md mx-auto">{{ t('packageRequestReceived') }}</p>
            
            <div class="space-y-6 max-w-md mx-auto">
              <div>
                <div class="bg-amber-50 p-5 rounded-lg border border-amber-100 text-center">
                  <div class="font-medium text-sm text-neutral-500 mb-2">{{ t('selectedPackage') }}</div>
                  <div class="font-medium text-lg text-neutral-800">{{ activePackage === 'basic' ? t('basicPlan') : t('premiumPlan') }}</div>
                  <div class="text-amber-600 font-medium text-sm mt-1">{{ activePackage === 'basic' ? '$99' : '$199' }}</div>
                </div>
              </div>
              
              <div class="flex gap-4">
                <button 
                  @click="bookConsultation" 
                  class="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white py-3 rounded-full font-medium transition-all duration-300 shadow-sm"
                >
                  {{ t('bookFreeConsultation') }}
                </button>
                
                <button 
                  @click="closeModal" 
                  class="flex-1 border border-neutral-300 text-neutral-800 py-3 rounded-full font-medium transition-all duration-300 hover:bg-neutral-100 shadow-sm"
                >
                  {{ t('close') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useNuxtApp } from '#app'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  selectedPackage: {
    type: String,
    default: '',
    validator: (value) => ['', 'basic', 'premium'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'form-submitted', 'book-consultation'])

// Get access to i18n instance from Nuxt
const nuxtApp = useNuxtApp()

// Create a translation function - proper way with nuxt-i18n-micro
const t = (key) => {
  try {
    return nuxtApp.$i18n.t(key) || key
  } catch (error) {
    console.error(`Translation error for key "${key}":`, error)
    return key
  }
}

// Form state
const formStep = ref(1)
const isSubmitting = ref(false)
const activePackage = ref('')

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  weddingDate: '',
  notes: '',
  packageType: ''
})

// Dynamic modal title based on step
const modalTitle = computed(() => {
  if (formStep.value === 1) return t('chooseYourPackage')
  if (formStep.value === 2) return t('yourDetails')
  if (formStep.value === 3) return t('thankYou')
  return t('selectPackage')
})

// Initialize active package when modal opens
watch(() => props.modelValue, (newVal) => {
  if (newVal === true) {
    // Reset form
    formStep.value = props.selectedPackage ? 2 : 1 // Skip to step 2 if package already selected
    isSubmitting.value = false
    activePackage.value = props.selectedPackage
    formData.value.packageType = props.selectedPackage
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  } else {
    document.body.style.overflow = '' // Restore scrolling
    // Reset form after closing with a delay
    setTimeout(() => {
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        weddingDate: '',
        notes: '',
        packageType: ''
      }
    }, 300)
  }
})

// Update selected package when prop changes
watch(() => props.selectedPackage, (newPackage) => {
  if (newPackage) {
    activePackage.value = newPackage
    formData.value.packageType = newPackage
  }
})

// Select package in modal
const selectPackageInModal = (packageType) => {
  activePackage.value = packageType
  formData.value.packageType = packageType
}

// Next step
const nextStep = () => {
  if (formStep.value === 1 && activePackage.value) {
    formStep.value = 2
  }
}

// Handle form submission
const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Make sure package type is set
    formData.value.packageType = activePackage.value
    
    // Simulate API call to submit form
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Emit form submitted event
    emit('form-submitted', { ...formData.value })
    
    // Move to success step
    formStep.value = 3
  } catch (error) {
    console.error('Error submitting form:', error)
    // Handle error (show message, etc.)
  } finally {
    isSubmitting.value = false
  }
}

// Close modal
const closeModal = () => {
  emit('update:modelValue', false)
}

// Book consultation
const bookConsultation = () => {
  emit('book-consultation')
  closeModal()
}
</script>

<style scoped>
@keyframes modalAppear {
  from { 
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to { 
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-modal-appear {
  animation: modalAppear 0.3s ease-out forwards;
}

/* Custom form element styling */
input, textarea {
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus, textarea:focus {
  border-color: #fcd34d;
  box-shadow: 0 0 0 2px rgba(252, 211, 77, 0.2);
}

/* Improve disabled button state */
button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>