# pages/login.vue
<template>
  <div class="py-20 flex items-center justify-center bg-white min-h-screen">
    <div class="max-w-xl w-full flex flex-col items-center gap-8 bg-white pt-12 pb-6 px-6 rounded-lg shadow-[0px_24px_48px_0px_rgba(0,0,0,0.04)]">
      <!-- Logo -->
      <div>
        <img src="/assets/images/logo/vp-logo.png" class="w-24" alt="Vow Perfect Logo">
      </div>
      
      <!-- Title -->
      <h1 class="text-center text-3xl font-light text-gray-900 font-playfair">Welcome Back</h1>
      
      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-gray-600">Email</label>
          <div class="relative">
            <input 
              id="email" 
              v-model="email" 
              type="email"
              placeholder="Email Address" 
              class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none transition-colors"
            />
            <i class="pi pi-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
        
        <div class="flex flex-col gap-2">
          <label for="password" class="text-gray-600">Password</label>
          <div class="relative">
            <input 
              id="password" 
              v-model="password" 
              :type="showPassword ? 'text' : 'password'"
              placeholder="Password" 
              class="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-md focus:border-[#C8A898] focus:ring-1 focus:ring-[#C8A898] outline-none transition-colors"
            />
            <i class="pi pi-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <button 
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
            </button>
          </div>
        </div>

        <!-- Forgot Password Link -->
        <div class="flex items-center justify-end w-full">
          <a href="#" class="text-[#C8A898] hover:text-[#bd7a59] transition-colors text-sm">
            Forgot your password?
          </a>
        </div>

        <!-- Login Button -->
        <a 
        href="/dashboard"
          type="submit"
          class="w-full bg-[#C8A898] hover:bg-[#bd7a59] text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
        >
          <i class="pi pi-sign-in"></i>
        
          <span>Sign In</span>
        </a>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const handleLogin = () => {
  console.log('Login attempt:', { email: email.value, password: password.value })
}
</script>

<style>
@import 'primeicons/primeicons.css';

/* Optional: Add smooth transition for input focus */
input {
  transition: all 0.2s ease;
}

/* Optional: Add hover effect for inputs */
input:hover {
  border-color: #e5e7eb;
}
</style>