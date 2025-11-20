<template>
  <section class="py-20 bg-gray-50 opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <div class="space-y-6">
          <!-- FAQ Item 1 -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <button 
              @click="toggleFaq(0)" 
              class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <h3 class="text-lg font-medium">What makes Vow Perfect different from other platforms?</h3>
              <i 
                class="pi" 
                :class="openIndex === 0 ? 'pi-chevron-up text-[#FFC0CB]' : 'pi-chevron-down'"
              ></i>
            </button>
            
            <div 
              v-show="openIndex === 0" 
              class="p-6 pt-0 text-gray-600 border-t border-gray-100"
            >
              <p>We specialize in creating personalized websites that reflect your unique love story. Unlike template-based platforms, we craft each site from scratch to match your vision, style preferences, and wedding theme. Our focus is on providing a custom solution with dedicated support throughout the entire process.</p>
            </div>
          </div>
          
          <!-- FAQ Item 2 -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <button 
              @click="toggleFaq(1)" 
              class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <h3 class="text-lg font-medium">How does the RSVP system work?</h3>
              <i 
                class="pi" 
                :class="openIndex === 1 ? 'pi-chevron-up text-[#FFC0CB]' : 'pi-chevron-down'"
              ></i>
            </button>
            
            <div 
              v-show="openIndex === 1" 
              class="p-6 pt-0 text-gray-600 border-t border-gray-100"
            >
              <p>Our RSVP system allows your guests to easily respond to your invitation online. They can indicate their attendance, specify the number of guests in their party, and even select meal preferences if you enable that option. You'll receive all responses in an organized dashboard, making it simple to track attendance and manage your guest list. The system can also send automatic reminders to guests who haven't responded.</p>
            </div>
          </div>
          
          <!-- FAQ Item 3 -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <button 
              @click="toggleFaq(2)" 
              class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <h3 class="text-lg font-medium">Can I customize my website further?</h3>
              <i 
                class="pi" 
                :class="openIndex === 2 ? 'pi-chevron-up text-[#FFC0CB]' : 'pi-chevron-down'"
              ></i>
            </button>
            
            <div 
              v-show="openIndex === 2" 
              class="p-6 pt-0 text-gray-600 border-t border-gray-100"
            >
              <p>Yes! We offer advanced customization options in our Premium Plan. This includes custom domain names, additional pages, photo galleries with unlimited images, and more personalized design elements. We can also add special features like countdown timers, interactive maps, and guest message boards. If you have specific customization requests, please let us know during our consultation, and we'll be happy to discuss the possibilities.</p>
            </div>
          </div>
          
          <!-- FAQ Item 4 -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <button 
              @click="toggleFaq(3)" 
              class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <h3 class="text-lg font-medium">How long does it take to create my wedding website?</h3>
              <i 
                class="pi" 
                :class="openIndex === 3 ? 'pi-chevron-up text-[#FFC0CB]' : 'pi-chevron-down'"
              ></i>
            </button>
            
            <div 
              v-show="openIndex === 3" 
              class="p-6 pt-0 text-gray-600 border-t border-gray-100"
            >
              <p>Typically, we can complete your wedding website within 2-3 weeks from our initial consultation. However, the timeline may vary depending on the complexity of your design and any custom features you request. We'll provide you with a specific timeline during our consultation based on your needs and wedding date. Rush options are available for couples with tight deadlines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggleFaq = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}
</script>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>
