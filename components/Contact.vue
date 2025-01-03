<template>
  <section class="py-20 opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-4 max-w-lg">
      <h2 class="text-3xl font-light text-center mb-8">Get in Touch</h2>
      <p class="text-gray-600 text-center mb-12">
        Have questions about our services? We're here to help! Choose your preferred way to connect with us.
      </p>

      <div class="space-y-4">
        <!-- Email -->
        <a href="mailto:hello@vowperfect.com"
          class="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-[#c2967f] hover:bg-[#f7dfd3] transition-colors group">
          <div class="flex items-center gap-4">
            <i class="pi pi-envelope text-2xl text-gray-600 group-hover:text-[#bd7a59]"></i>
            <div>
              <h3 class="font-medium">Email</h3>
              <p class="text-sm text-gray-600">hello@vowperfect.com</p>
            </div>
          </div>
          <i class="pi pi-arrow-right text-gray-400 group-hover:text-pink-500"></i>
        </a>

        <!-- iMessage/Text -->
        <a href="sms:+1234567890"
          class="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-colors group">
          <div class="flex items-center gap-4">
            <i class="pi pi-comments text-2xl text-gray-600 group-hover:text-blue-500"></i>
            <div>
              <h3 class="font-medium">iMessage / Text</h3>
              <p class="text-sm text-gray-600">(123) 456-7890</p>
            </div>
          </div>
          <i class="pi pi-arrow-right text-gray-400 group-hover:text-blue-500"></i>
        </a>

        <!-- WhatsApp -->
        <a href="https://wa.me/1234567890" target="_blank"
          class="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-green-200 hover:bg-green-50 transition-colors group">
          <div class="flex items-center gap-4">
            <i class="pi pi-whatsapp text-2xl text-gray-600 group-hover:text-green-500"></i>
            <div>
              <h3 class="font-medium">WhatsApp</h3>
              <p class="text-sm text-gray-600">Message us on WhatsApp</p>
            </div>
          </div>
          <i class="pi pi-arrow-right text-gray-400 group-hover:text-green-500"></i>
        </a>

        <!-- Messenger -->
        <a href="https://m.me/vowperfect" target="_blank"
          class="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
          <div class="flex items-center gap-4">
            <i class="pi pi-facebook text-2xl text-gray-600 group-hover:text-blue-600"></i>
            <div>
              <h3 class="font-medium">Messenger</h3>
              <p class="text-sm text-gray-600">Connect on Facebook Messenger</p>
            </div>
          </div>
          <i class="pi pi-arrow-right text-gray-400 group-hover:text-blue-600"></i>
        </a>
        <!-- Schedule Meeting -->
        <a href="https://calendar.app.google/booking" target="_blank"
          class="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-purple-200 hover:bg-purple-50 transition-colors group">
          <div class="flex items-center gap-4">
            <i class="pi pi-calendar text-2xl text-gray-600 group-hover:text-purple-600"></i>
            <div>
              <h3 class="font-medium">Schedule a Meeting</h3>
              <p class="text-sm text-gray-600">Book a 30-minute consultation</p>
            </div>
          </div>
          <i class="pi pi-arrow-right text-gray-400 group-hover:text-purple-600"></i>
        </a>
      </div>

      <p class="text-sm text-gray-500 text-center mt-8">
        Available Monday through Friday, 9:00 AM - 6:00 PM EST
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped></style>