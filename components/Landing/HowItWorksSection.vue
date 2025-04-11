<template>
  <section class="py-24 bg-neutral-50 opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">{{ $t('ourProcess') }}</span>
          <h2 class="text-4xl md:text-5xl font-serif font-light text-neutral-800 mb-6">
            <span class="relative inline-block pb-2">
              {{ $t('processTitle') }}
              <span class="absolute bottom-0 left-0 w-full h-px bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 text-center max-w-xl mx-auto">
            {{ $t('processSubtitle') }}
          </p>
        </div>
        
        <!-- Simplified Process Steps -->
        <div class="grid md:grid-cols-3 gap-10">
          <!-- Step 1 -->
          <div class="flex flex-col">
            <div class="flex items-center mb-5">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-3">
                <span class="text-stone-600 text-sm font-medium">01</span>
              </div>
              <h3 class="text-xl font-medium text-neutral-800">{{ $t('discussVision') }}</h3>
            </div>
            <p class="text-neutral-600 mb-4">
              {{ $t('discussDesc') }}
            </p>
            <div class="space-y-3 text-sm text-stone-500">
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step1Point1') }}</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step1Point2') }}</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step1Point3') }}</span>
              </div>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="flex flex-col">
            <div class="flex items-center mb-5">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-3">
                <span class="text-stone-600 text-sm font-medium">02</span>
              </div>
              <h3 class="text-xl font-medium text-neutral-800">{{ $t('buildWebsite') }}</h3>
            </div>
            <p class="text-neutral-600 mb-4">
              {{ $t('buildDesc') }}
            </p>
            <div class="space-y-3 text-sm text-stone-500">
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step2Point1') }}</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step2Point2') }}</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step2Point3') }}</span>
              </div>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="flex flex-col">
            <div class="flex items-center mb-5">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center mr-3">
                <span class="text-stone-600 text-sm font-medium">03</span>
              </div>
              <h3 class="text-xl font-medium text-neutral-800">{{ $t('launchConfidence') }}</h3>
            </div>
            <p class="text-neutral-600 mb-4">
              {{ $t('launchDesc') }}
            </p>
            <div class="space-y-3 text-sm text-stone-500">
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step3Point1') }}</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step3Point2') }}</span>
              </div>
              <div class="flex items-start">
                <i class="pi pi-check text-stone-400 mr-2 mt-1"></i>
                <span>{{ $t('step3Point3') }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Optional divider -->
        <div class="w-full max-w-xs mx-auto h-px bg-stone-200 my-16"></div>
        
        <!-- Call to action -->
        <div class="text-center">
          <button 
            @click="openPackageModal" 
            class="bg-neutral-800 hover:bg-stone-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-sm inline-flex items-center"
          >
            <span>{{ $t('startJourney') }}</span>
            <i class="pi pi-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Get automatic i18n functions
const { $t } = useI18n()

// Emit event for opening package modal
const emit = defineEmits(['open-package-modal'])

// Function to open the package modal
const openPackageModal = () => {
  emit('open-package-modal')
}
</script>

<style scoped>
/* Add custom font styling */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>