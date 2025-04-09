<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden">
    <!-- Subtle background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiM5MDkwOTAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
    
    <!-- Decorative circles -->
    <div class="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -right-32 bottom-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading with modern typography -->
        <div class="mb-20 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">{{ $t('ourTemplates') }}</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              {{ $t('findPerfectDesign') }}
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            {{ $t('browseTemplates') }}
          </p>
        </div>
        
        <!-- Templates Container -->
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Template 1: Elegant -->
          <div class="group">
            <div class="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm mb-6 transition-all duration-500 group-hover:shadow-md">
              <!-- Template Preview Image -->
              <img 
                src="/assets/images/template1.jpg" 
                :alt="$t('elegantTemplate')"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              <!-- Overlay with View button -->
              <div class="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button class="bg-white text-neutral-800 px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {{ $t('previewTemplate') }}
                </button>
              </div>
            </div>
            
            <!-- Template Info -->
            <div class="text-center">
              <h3 class="text-xl font-medium text-neutral-800 mb-2">{{ $t('elegant') }}</h3>
              <p class="text-neutral-600">{{ $t('elegantDesc') }}</p>
            </div>
          </div>
          
          <!-- Template 2: Modern -->
          <div class="group">
            <div class="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm mb-6 transition-all duration-500 group-hover:shadow-md">
              <!-- Template Preview Image -->
              <img 
                src="/assets/images/template3.jpg" 
                :alt="$t('modernTemplate')"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              <!-- Overlay with View button -->
              <div class="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button class="bg-white text-neutral-800 px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {{ $t('previewTemplate') }}
                </button>
              </div>
            </div>
            
            <!-- Template Info -->
            <div class="text-center">
              <h3 class="text-xl font-medium text-neutral-800 mb-2">{{ $t('modern') }}</h3>
              <p class="text-neutral-600">{{ $t('modernDesc') }}</p>
            </div>
          </div>
          
          <!-- Template 3: Romantic -->
          <div class="group">
            <div class="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-sm mb-6 transition-all duration-500 group-hover:shadow-md">
              <!-- Template Preview Image -->
              <img 
                src="/assets/images/template2.jpg" 
                :alt="$t('romanticTemplate')"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              <!-- Overlay with View button -->
              <div class="absolute inset-0 bg-neutral-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <button class="bg-white text-neutral-800 px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {{ $t('previewTemplate') }}
                </button>
              </div>
            </div>
            
            <!-- Template Info -->
            <div class="text-center">
              <h3 class="text-xl font-medium text-neutral-800 mb-2">{{ $t('romantic') }}</h3>
              <p class="text-neutral-600">{{ $t('romanticDesc') }}</p>
            </div>
          </div>
        </div>
        
        <!-- View All Templates Button -->
        <div class="mt-16 text-center">
          <button class="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-sm inline-flex items-center">
            <span>{{ $t('viewAllTemplates') }}</span>
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
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Apply gentle reveal animations when section comes into view */
section {
  animation: fadeIn 1s ease-out forwards;
}
</style>