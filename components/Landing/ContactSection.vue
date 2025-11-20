<template>
  <section class="py-24 bg-neutral-50 relative overflow-hidden" id="contact" data-observe>
    <!-- Subtle background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-50 to-stone-100"></div>
    <div class="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgNDVMMTUgMjBoMzB6IiBzdHJva2U9IiM5MDkwOTAiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
    
    <!-- Decorative circles -->
    <div class="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-stone-200 opacity-20 blur-3xl"></div>
    <div class="absolute -left-32 top-32 w-80 h-80 rounded-full bg-neutral-200 opacity-30 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-3xl mx-auto">
        <!-- Section heading with modern typography -->
        <div class="mb-16 text-center">
          <span class="inline-block text-stone-500 text-sm font-medium tracking-wider uppercase mb-3">Contact</span>
          <h2 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
            <span class="relative inline-block">
              Have Questions? <br>We're Here to Help
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
            </span>
          </h2>
          <p class="text-neutral-600 max-w-lg mx-auto mt-4">
            Choose your preferred way to connect with us. We're ready to answer any questions about our wedding website services.
          </p>
        </div>

        <div class="space-y-4">
          <!-- Email -->
          <a href="mailto:hello@vowperfect.com"
            class="flex items-center justify-between p-5 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-all duration-300">
                <i class="pi pi-envelope text-xl text-neutral-600"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg text-neutral-800">Email</h3>
                <p class="text-neutral-600">hello@vowperfect.com</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-neutral-300 group-hover:text-neutral-800 transition-all duration-300 transform group-hover:translate-x-1"></i>
          </a>

          <!-- Phone -->
          <a href="tel:+1234567890"
            class="flex items-center justify-between p-5 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-all duration-300">
                <i class="pi pi-phone text-xl text-neutral-600"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg text-neutral-800">Call Us</h3>
                <p class="text-neutral-600">(123) 456-7890</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-neutral-300 group-hover:text-neutral-800 transition-all duration-300 transform group-hover:translate-x-1"></i>
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/1234567890" target="_blank"
            class="flex items-center justify-between p-5 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-all duration-300">
                <i class="pi pi-whatsapp text-xl text-neutral-600"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg text-neutral-800">WhatsApp</h3>
                <p class="text-neutral-600">Message us on WhatsApp</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-neutral-300 group-hover:text-neutral-800 transition-all duration-300 transform group-hover:translate-x-1"></i>
          </a>

          <!-- Messenger -->
          <a href="https://m.me/vowperfect" target="_blank"
            class="flex items-center justify-between p-5 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-all duration-300">
                <i class="pi pi-facebook text-xl text-neutral-600"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg text-neutral-800">Messenger</h3>
                <p class="text-neutral-600">Connect on Facebook Messenger</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-neutral-300 group-hover:text-neutral-800 transition-all duration-300 transform group-hover:translate-x-1"></i>
          </a>
          
          <!-- Schedule Meeting -->
          <div
            @click="showModal = true"
            class="flex items-center justify-between p-5 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300 group cursor-pointer">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-200 transition-all duration-300">
                <i class="pi pi-calendar text-xl text-neutral-600"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg text-neutral-800">Book a Free Consultation</h3>
                <p class="text-neutral-600">Schedule a 30-minute call with us</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-neutral-300 group-hover:text-neutral-800 transition-all duration-300 transform group-hover:translate-x-1"></i>
          </div>
        </div>
        
        <div class="mt-12 p-4 bg-white border border-neutral-200 rounded-lg text-center">
          <p class="text-neutral-600">
            <span class="font-medium">Business Hours:</span> Monday through Friday, 9:00 AM - 6:00 PM EST
          </p>
        </div>
      </div>
    </div>

    <!-- Shared BookingModal component -->
    <GeneralBookingModal 
      v-model="showModal" 
      theme="default" 
      :google-calendar-url="googleCalendarUrl" 
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'

const googleCalendarUrl = 'https://calendar.app.google/sZ4ZFaiQuwhHcbMP8'
const showModal = ref(false)
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

section {
  animation: fadeIn 1s ease-out forwards;
}

.cursor-pointer:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}
</style>
