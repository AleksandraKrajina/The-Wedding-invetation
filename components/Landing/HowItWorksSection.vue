<template>
  <section class="py-20 bg-gray-50 opacity-0 transition-opacity duration-700" data-observe>
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-serif font-light text-center mb-6">
          Creating Your Perfect Day Has Never Been Easier
        </h2>
        <p class="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Our streamlined process ensures your wedding website is beautiful, personalized, and ready on time.
        </p>
        
        <!-- Timeline Style Process -->
        <div class="relative">
          <!-- Vertical Line (Desktop) -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#FFC0CB] bg-opacity-30 top-0"></div>
          
          <!-- Step 1 -->
          <div class="flex flex-col md:flex-row items-center mb-16 md:mb-32 relative">
            <!-- Left Content (Desktop) / Top Content (Mobile) -->
            <div class="md:w-1/2 md:pr-16 text-center md:text-right mb-8 md:mb-0">
              <h3 class="text-2xl font-medium mb-4">1. Discuss Your Vision</h3>
              <p class="text-gray-600">
                We start with understanding your unique love story, style preferences, and wedding details. This helps us create a website that truly reflects your relationship and big day.
              </p>
            </div>
            
            <!-- Center Circle -->
            <div class="absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-0 z-10 hidden md:block">
              <div class="w-16 h-16 rounded-full bg-[#FFC0CB] flex items-center justify-center shadow-md">
                <i class="pi pi-comments text-white text-2xl"></i>
              </div>
            </div>
            
            <!-- Right Content (Desktop only) -->
            <div class="md:w-1/2 md:pl-16 hidden md:block">
              <div class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:scale-105 border-t-4 border-[#FFC0CB]">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mr-4 md:hidden">
                    <i class="pi pi-comments text-[#FFC0CB] text-xl"></i>
                  </div>
                  <ul class="text-gray-600 list-disc pl-5 space-y-2">
                    <li>Share your wedding theme and color palette</li>
                    <li>Tell us your love story and important moments</li>
                    <li>Discuss special features you'd like to include</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Step 2 -->
          <div class="flex flex-col md:flex-row items-center mb-16 md:mb-32 relative">
            <!-- Left Content (Desktop only) -->
            <div class="md:w-1/2 md:pr-16 hidden md:block">
              <div class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:scale-105 border-t-4 border-[#FFC0CB]">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mr-4 md:hidden">
                    <i class="pi pi-desktop text-[#FFC0CB] text-xl"></i>
                  </div>
                  <ul class="text-gray-600 list-disc pl-5 space-y-2">
                    <li>Custom design based on your specifications</li>
                    <li>Integration of RSVP system and guest management</li>
                    <li>Mobile optimization for all devices</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- Center Circle -->
            <div class="absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-0 z-10 hidden md:block">
              <div class="w-16 h-16 rounded-full bg-[#FFC0CB] flex items-center justify-center shadow-md">
                <i class="pi pi-desktop text-white text-2xl"></i>
              </div>
            </div>
            
            <!-- Right Content (Desktop) / Top Content (Mobile) -->
            <div class="md:w-1/2 md:pl-16 text-center md:text-left mb-8 md:mb-0">
              <h3 class="text-2xl font-medium mb-4">2. We Build Your Website</h3>
              <p class="text-gray-600">
                Our expert team creates a beautiful, functional website that perfectly captures your style. We handle all the technical details so you don't have to worry about a thing.
              </p>
            </div>
          </div>
          
          <!-- Step 3 -->
          <div class="flex flex-col md:flex-row items-center relative">
            <!-- Left Content (Desktop) / Top Content (Mobile) -->
            <div class="md:w-1/2 md:pr-16 text-center md:text-right mb-8 md:mb-0">
              <h3 class="text-2xl font-medium mb-4">3. Launch with Confidence</h3>
              <p class="text-gray-600">
                Your beautiful website goes live with our full support. We'll be there to help with any questions or updates as your big day approaches.
              </p>
            </div>
            
            <!-- Center Circle -->
            <div class="absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-0 z-10 hidden md:block">
              <div class="w-16 h-16 rounded-full bg-[#FFC0CB] flex items-center justify-center shadow-md">
                <i class="pi pi-check-circle text-white text-2xl"></i>
              </div>
            </div>
            
            <!-- Right Content (Desktop only) -->
            <div class="md:w-1/2 md:pl-16 hidden md:block">
              <div class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:scale-105 border-t-4 border-[#FFC0CB]">
                <div class="flex items-center">
                  <div class="w-12 h-12 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mr-4 md:hidden">
                    <i class="pi pi-check-circle text-[#FFC0CB] text-xl"></i>
                  </div>
                  <ul class="text-gray-600 list-disc pl-5 space-y-2">
                    <li>Comprehensive testing before going live</li>
                    <li>Ongoing support for updates and changes</li>
                    <li>Guest assistance with RSVP questions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mobile Detail Cards (Only visible on mobile) -->
        <div class="mt-8 md:hidden space-y-6">
          <!-- Step 1 Details -->
          <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#FFC0CB]">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mr-3">
                <i class="pi pi-comments text-[#FFC0CB] text-lg"></i>
              </div>
              <h4 class="font-medium">What to expect:</h4>
            </div>
            <ul class="text-gray-600 list-disc pl-5 space-y-2">
              <li>Share your wedding theme and color palette</li>
              <li>Tell us your love story and important moments</li>
              <li>Discuss special features you'd like to include</li>
            </ul>
          </div>
          
          <!-- Step 2 Details -->
          <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#FFC0CB]">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mr-3">
                <i class="pi pi-desktop text-[#FFC0CB] text-lg"></i>
              </div>
              <h4 class="font-medium">What to expect:</h4>
            </div>
            <ul class="text-gray-600 list-disc pl-5 space-y-2">
              <li>Custom design based on your specifications</li>
              <li>Integration of RSVP system and guest management</li>
              <li>Mobile optimization for all devices</li>
            </ul>
          </div>
          
          <!-- Step 3 Details -->
          <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#FFC0CB]">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 rounded-full bg-[#FFC0CB] bg-opacity-10 flex items-center justify-center mr-3">
                <i class="pi pi-check-circle text-[#FFC0CB] text-lg"></i>
              </div>
              <h4 class="font-medium">What to expect:</h4>
            </div>
            <ul class="text-gray-600 list-disc pl-5 space-y-2">
              <li>Comprehensive testing before going live</li>
              <li>Ongoing support for updates and changes</li>
              <li>Guest assistance with RSVP questions</li>
            </ul>
          </div>
        </div>
        
        <!-- Call to action -->
        <div class="mt-16 text-center">
          <button class="bg-[#FFC0CB] hover:bg-[#FFB0BB] text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Add custom font styling */
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>