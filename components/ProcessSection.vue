<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-light text-center mb-16">Our Process</h2>
      <div class="grid md:grid-cols-4 gap-8">
        <div v-for="(step, idx) in steps" :key="idx" class="text-center relative">
          <div class="w-16 h-16 bg-[#C8A898] rounded-full flex items-center justify-center mx-auto mb-4">
            <i :class="[step.icon, 'text-2xl text-white']"></i>
          </div>
          <h3 class="text-xl mb-2">{{ step.title }}</h3>
          <p class="text-gray-600">{{ step.description }}</p>
          <div v-if="idx < steps.length - 1" class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-[#C8A898]">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    icon: "pi pi-comments",
    title: "Consultation",
    description: "We discuss your vision, style, and requirements"
  },
  {
    icon: "pi pi-pencil",
    title: "Design",
    description: "Our team creates custom mockups for your approval"
  },
  {
    icon: "pi pi-code",
    title: "Development",
    description: "We build your website with attention to detail"
  },
  {
    icon: "pi pi-check-circle",
    title: "Launch",
    description: "Your website goes live with full support"
  }
]
</script>