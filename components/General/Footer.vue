# components/TheFooter.vue
<template>
  <footer class="bg-white border-t border-gray-100">
    <div class="container mx-auto px-4 py-8">
      <!-- Main Footer Content -->
      <div class="flex flex-col items-center space-y-4">
        <!-- Logo -->
        <div class="mb-4">
          <img 
            src="/assets/images/logo/4.png"
            alt="Vow Perfect Logo" 
            class="h-8"
          />
        </div>

        <!-- Built with Love Text -->
        <p class="text-gray-600 flex items-center gap-2">
          Built with 
          <i class="pi pi-heart text-rose-400 animate-pulse"></i>
          by Vow Perfect
        </p>

        <!-- Copyright -->
        <p class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} Vow Perfect. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex gap-6 mt-4">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url"
            class="text-gray-400 hover:text-gray-600 transition-colors"
            :aria-label="social.name"
          >
            <i :class="social.icon" class="text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

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
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>