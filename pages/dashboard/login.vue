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
      <div class="flex flex-col gap-6 w-full">
        <div class="flex flex-col gap-2">
          <label for="email" class="text-gray-600">Email</label>
          <InputText 
            id="email" 
            v-model="email" 
            placeholder="Email Address" 
            class="w-full p-3"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <label for="password" class="text-gray-600">Password</label>
          <Password 
            v-model="password" 
            placeholder="Password" 
            :feedback="false"
            toggleMask
            class="w-full"
          />
        </div>
      </div>

      <!-- Forgot Password Link -->
      <div class="flex items-center justify-end w-full">
        <a href="#" class="text-[#C8A898] hover:text-[#bd7a59] transition-all text-sm">
          Forgot your password?
        </a>
      </div>

      <!-- Login Button -->
      <Button 
        label="Sign In" 
        @click="handleLogin"
        class="w-full bg-[#C8A898] border-none hover:bg-[#bd7a59]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Handle login logic here
  console.log('Login attempt:', { email: email.value, password: password.value })
}
</script>

<style scoped>
:deep(.p-password-input) {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
}

:deep(.p-inputtext:enabled:focus) {
  border-color: #C8A898;
  box-shadow: 0 0 0 1px #f7dfd3;
}

:deep(.p-button.p-button-icon-only) {
  padding: 0.75rem;
}

:deep(.p-password i) {
  color: #6b7280;
}
</style>