<template>
  <section class="py-20 ">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-light text-center mb-16">What Couples Say</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(testimonial, idx) in testimonials" :key="idx" class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-16 h-16 rounded-full object-cover">
            <div class="ml-4">
              <h3 class="font-medium">{{ testimonial.name }}</h3>
              <p class="text-gray-500">{{ testimonial.date }}</p>
            </div>
          </div>
          <p class="text-gray-600 mb-4">{{ testimonial.text }}</p>
          <div class="flex text-yellow-400">
            <i v-for="star in 5" :key="star" class="pi pi-star-fill mr-1"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: "Sarah & James",
    date: "June 2024",
    text: "Our wedding website was absolutely perfect! The team captured our style perfectly and made the whole process so easy.",
    image: '/assets/images/demo1/couple1.jpg'
  },
  {
    name: "Emily & Michael",
    date: "May 2024",
    text: "The RSVP system saved us so much time. Our guests loved how easy it was to navigate and find all the information.",
    image: '/assets/images/demo1/Hero.jpg'
  },
  {
    name: "Lisa & David",
    date: "April 2024",
    text: "Professional, responsive, and creative. They turned our vision into reality and exceeded our expectations!",
    image: '/assets/images/demo1/couple2.jpeg'
  }
]
</script>
