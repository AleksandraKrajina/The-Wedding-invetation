<script setup>
const socialLinks = [
  {
    name: 'Facebook',
    url: '#',
    icon: 'pi pi-facebook'
  },
  {
    name: 'Instagram',
    url: '#',
    icon: 'pi pi-instagram'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'pi pi-twitter'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'pi pi-linkedin'
  }
]
</script>

<style scoped>
.pi-heart {
  animation: gentlePulse 3s ease-in-out infinite;
}

@keyframes gentlePulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>

<template>
  <footer class="bg-neutral-50 border-t border-neutral-200 py-12">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Logo and Tagline -->
        <div class="flex flex-col items-center mb-8">
          <img src="/assets/images/logo/4.png" alt="Vow Perfect Logo" class="h-8 mb-4" />
          <p class="text-neutral-600 text-center">
            Creating beautiful wedding websites for your special day
          </p>
        </div>

        <!-- Social Links - simplified circle design -->
        <div class="flex justify-center gap-6 mb-8">
          <a v-for="social in socialLinks" :key="social.name" :href="social.url"
            class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-500 hover:text-neutral-800 hover:shadow-sm transition-all duration-300"
            :aria-label="social.name">
            <i :class="social.icon"></i>
          </a>
        </div>

        <!-- Simple navigation -->
        <div class="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-10 text-sm">
          <a href="#" class="text-neutral-600 hover:text-neutral-800 transition-colors">Home</a>
          <a href="#" class="text-neutral-600 hover:text-neutral-800 transition-colors">Services</a>
          <a href="#" class="text-neutral-600 hover:text-neutral-800 transition-colors">Portfolio</a>
          <a href="#" class="text-neutral-600 hover:text-neutral-800 transition-colors">Pricing</a>
          <a href="#" class="text-neutral-600 hover:text-neutral-800 transition-colors">Contact</a>
        </div>

        <!-- Copyright and Made with Love - combined and simplified -->
        <div class="flex flex-col items-center">
          <div class="flex items-center gap-2 text-neutral-500 text-sm mb-2">
            <span>Made with</span>
            <i class="pi pi-heart text-neutral-400"></i>
            <span>by Vow Perfect</span>
          </div>
          <p class="text-neutral-400 text-xs">
            © {{ new Date().getFullYear() }} Vow Perfect. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
