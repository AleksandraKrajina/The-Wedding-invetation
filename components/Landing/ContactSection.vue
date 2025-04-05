<template>
  <section class="py-20 bg-white opacity-0 transition-opacity duration-700" id="contact" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-center mb-6">
          Have Questions? We're Here to Help!
        </h2>
        
        <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Choose your preferred way to connect with us. We're ready to answer any questions about our wedding website services.
        </p>

        <div class="space-y-4">
          <!-- Email -->
          <a href="mailto:hello@vowperfect.com"
            class="flex items-center justify-between p-5 rounded-lg border border-gray-200 hover:border-[#FFC0CB] hover:bg-[#FFF0F5] transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <i class="pi pi-envelope text-xl text-[#FFC0CB]"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg">Email</h3>
                <p class="text-gray-600">hello@vowperfect.com</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-gray-300 group-hover:text-[#FFC0CB] transition-all duration-300"></i>
          </a>

          <!-- Phone -->
          <a href="tel:+1234567890"
            class="flex items-center justify-between p-5 rounded-lg border border-gray-200 hover:border-[#FFC0CB] hover:bg-[#FFF0F5] transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <i class="pi pi-phone text-xl text-[#FFC0CB]"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg">Call Us</h3>
                <p class="text-gray-600">(123) 456-7890</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-gray-300 group-hover:text-[#FFC0CB] transition-all duration-300"></i>
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/1234567890" target="_blank"
            class="flex items-center justify-between p-5 rounded-lg border border-gray-200 hover:border-[#FFC0CB] hover:bg-[#FFF0F5] transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <i class="pi pi-whatsapp text-xl text-[#FFC0CB]"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg">WhatsApp</h3>
                <p class="text-gray-600">Message us on WhatsApp</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-gray-300 group-hover:text-[#FFC0CB] transition-all duration-300"></i>
          </a>

          <!-- Messenger -->
          <a href="https://m.me/vowperfect" target="_blank"
            class="flex items-center justify-between p-5 rounded-lg border border-gray-200 hover:border-[#FFC0CB] hover:bg-[#FFF0F5] transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <i class="pi pi-facebook text-xl text-[#FFC0CB]"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg">Messenger</h3>
                <p class="text-gray-600">Connect on Facebook Messenger</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-gray-300 group-hover:text-[#FFC0CB] transition-all duration-300"></i>
          </a>
          
          <!-- Schedule Meeting -->
          <a href="https://calendar.app.google/booking" target="_blank"
            class="flex items-center justify-between p-5 rounded-lg border border-gray-200 hover:border-[#FFC0CB] hover:bg-[#FFF0F5] transition-all duration-300 group">
            <div class="flex items-center gap-5">
              <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                <i class="pi pi-calendar text-xl text-[#FFC0CB]"></i>
              </div>
              <div>
                <h3 class="font-medium text-lg">Book a Free Consultation</h3>
                <p class="text-gray-600">Schedule a 30-minute call with us</p>
              </div>
            </div>
            <i class="pi pi-arrow-right text-gray-300 group-hover:text-[#FFC0CB] transition-all duration-300"></i>
          </a>
        </div>
        
        <p class="text-sm text-gray-500 text-center mt-8">
          Available Monday through Friday, 9:00 AM - 6:00 PM EST
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed
</script>

<style scoped>
/* Add custom font styling */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>