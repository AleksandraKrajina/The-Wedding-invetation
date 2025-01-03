<template>
  <section class="py-20 opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-light text-center mb-16">One Time Payment - No Hidden Costs</h2>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div v-for="plan in pricingPlans" 
             :key="plan.name" 
             class="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col flex-1 h-full justify-around relative overflow-hidden">
          <!-- Discount Badge -->
          <div class="absolute top-6 right-6 bg-[#C8A898] text-gray-950 px-3 py-1 rounded-full text-sm">
            Save ${{ parseInt(plan.originalPrice) - parseInt(plan.price) }}
          </div>
          
          <h3 class="text-2xl mb-4">{{ plan.name }}</h3>
          <div class="mb-6">
            <span class="text-gray-400 text-xl line-through block">${{ plan.originalPrice }}</span>
            <span class="text-4xl">${{ plan.price }}</span>
          </div>
          <ul class="space-y-3 mb-8 text-left">
            <li v-for="feature in plan.features" 
                :key="feature" 
                class="flex items-center">
              <i class="pi pi-check text-green-500 mr-2"></i>
              {{ feature }}
            </li>
          </ul>
          <Button 
            :label="plan.action"
            :class="plan.featured ? 'p-button-primary' : 'p-button-outlined'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const pricingPlans = [
    {
        name: 'Basic',
        originalPrice: '499',
        price: '199',
        features: [
            'Custom Design',
            'Mobile Responsive',
            'RSVP Form',
            '1 Year Hosting'
        ],
        action: 'Choose Plan',
        featured: false
    },
    {
        name: 'Premium',
        originalPrice: '899',
        price: '499',
        features: [
            'Everything in Basic',
            'Photo Gallery',
            'Guest List Management',
            'Custom Domain',
            '1 Year Hosting'
        ],
        action: 'Choose Plan',
        featured: true
    }
]
</script>

<style scoped>
</style>