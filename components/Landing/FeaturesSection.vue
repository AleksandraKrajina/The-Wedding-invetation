<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiM5MDkwOTAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
    
    <!-- Decorative circles -->
    <div class="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -right-32 top-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading with modern typography -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">{{ $t('ourPromise') }}</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              {{ $t('whyChooseUs') }}
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            {{ $t('featureSubtitle') }}
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <!-- Feature 1: Personalized Design -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-heart text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">{{ $t('personalizedDesign') }}</h3>
            <p class="text-neutral-600 text-center">{{ $t('personalizedDesc') }}</p>
          </div>
          
          <!-- Feature 2: RSVP System -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-envelope text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">{{ $t('rsvpSystem') }}</h3>
            <p class="text-neutral-600 text-center">{{ $t('rsvpDesc') }}</p>
          </div>
          
          <!-- Feature 3: Full Support -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-users text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">{{ $t('fullSupport') }}</h3>
            <p class="text-neutral-600 text-center">{{ $t('fullSupportDesc') }}</p>
          </div>
          
          <!-- Feature 4: Attention to Detail -->
          <div class="group p-8 rounded-xl bg-white border border-neutral-100 hover:border-stone-200 transition-all duration-300 hover:shadow-sm">
            <div class="relative flex justify-center mb-6">
              <div class="absolute inset-0 bg-stone-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
              <div class="w-16 h-16 rounded-full bg-neutral-50 flex items-center justify-center relative z-10 border border-neutral-200">
                <i class="pi pi-check-circle text-stone-600 text-2xl"></i>
              </div>
            </div>
            <h3 class="text-xl font-medium mb-3 text-neutral-800 text-center group-hover:text-stone-700 transition-colors duration-300">{{ $t('attentionToDetail') }}</h3>
            <p class="text-neutral-600 text-center">{{ $t('attentionDesc') }}</p>
          </div>
        </div>
        
        <!-- Call-to-action -->
        <!-- <div class="mt-16 text-center">
          <a href="#" class="inline-flex items-center justify-center bg-neutral-800 hover:bg-stone-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 group shadow-sm">
            <span>{{ $t('exploreFeatures') }}</span>
            <i class="pi pi-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
          </a>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
// Get automatic i18n functions
const { $t } = useI18n()
</script>

<style scoped>
/* Add any needed custom styles here */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Apply gentle reveal animations when section comes into view */
section {
  animation: fadeIn 1s ease-out forwards;
}
</style>