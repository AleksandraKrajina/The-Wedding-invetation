<template>
  <nav class="fixed w-full container mx-auto px-6 md:px-2 z-50 bg-white ">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <img src="/assets/images/logo/vp-logo.png" class="w-20 p-2" alt="Vow Perfect Logo">
 
        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden">
          <i class="pi pi-bars text-xl"></i>
        </button>
 
        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8">
          <a v-for="item in navItems" 
             :key="item" 
             class="text-gray-800 hover:opacity-75 transition-opacity" 
             :href="item.link">
            {{ item.name }}
          </a>
        </div>
      </div>
 
      <!-- Mobile Menu -->
      <div v-if="isOpen" 
           class="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
        <div class="flex flex-col space-y-4 px-4 text-center">
          <a v-for="item in navItems" 
             :key="item"
             class="text-gray-800 hover:opacity-75 transition-opacity" 
             href="#"
             @click="isOpen = false">
            {{ item }}
          </a>
        </div>
      </div>
    </div>
  </nav>
 </template>
 
 <script lang="ts" setup>
 const navItems = [{'name':'Home', 'link': '#'}, {'name':'Services', 'link':'#process'}, {'name':'Portfolio', 'link':'#work'}, {'name':'Pricing', 'link':'#price'}, {'name':'Contact', 'link':'#contact'}]
 const isOpen = ref(false)
 </script>