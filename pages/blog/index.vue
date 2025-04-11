<template>
  <div class="blog-page">
    <GeneralBlogNavigation />
    
    <div class="container mx-auto px-6 py-16">
      <!-- Blog Header -->
      <div class="max-w-4xl mx-auto mb-16 text-center">
        <h1 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6 leading-tight">
          <span class="relative inline-block">
            {{ currentLocale === 'en' ? 'Our Blog' : 'Naš Blog' }}
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-stone-300 opacity-50"></span>
          </span>
        </h1>
        <p class="text-neutral-600 max-w-lg mx-auto mt-4">
          {{ currentLocale === 'en' ? 'Insights, tips, and inspiration for your perfect wedding website.' : 'Saveti, inspiracija i informacije za vaš savršeni sajt za venčanje.' }}
        </p>
      </div>

      <!-- Blog Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <!-- Blog Card (repeated for each blog post) -->
        <div v-for="post in blogPosts" :key="post.id" class="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <!-- Featured Image -->
          <div class="relative aspect-[16/9] overflow-hidden">
            <img 
              :src="post.imagePlaceholder" 
              :alt="post.title"
              class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <!-- Post Content -->
          <div class="p-6">
            <!-- Date and Category -->
            <div class="flex items-center text-sm text-stone-500 mb-3">
              <span>{{ post.date }}</span>
              <span class="mx-2">•</span>
              <span>{{ post.category }}</span>
            </div>
            
            <!-- Title -->
            <h2 class="text-xl font-medium text-neutral-800 mb-3 group-hover:text-stone-700 transition-colors duration-300">
              <NuxtLink :to="'/blog/' + post.slug" class="hover:underline">{{ post.title }}</NuxtLink>
            </h2>
            
            <!-- Excerpt -->
            <p class="text-neutral-600 mb-4">{{ post.excerpt }}</p>
            
            <!-- Read More Link -->
            <NuxtLink 
              :to="'/blog/' + post.slug"
              class="inline-flex items-center text-stone-700 hover:text-stone-900 transition-colors duration-300"
            >
              {{ currentLocale === 'en' ? 'Read more' : 'Pročitaj više' }}
              <i class="pi pi-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()
const currentLocale = computed(() => nuxtApp.$i18n?.locale || 'en')

// Dummy blog posts data with placeholder images
const blogPosts = ref([
  {
    id: 1,
    slug: 'how-to-choose-perfect-wedding-website',
    title: currentLocale.value === 'en' ? 
      'How to Choose the Perfect Wedding Website Theme' : 
      'Kako izabrati savršenu temu za sajt za venčanje',
    excerpt: currentLocale.value === 'en' ? 
      'Discover the key elements to consider when selecting a wedding website theme that reflects your personality and style.' : 
      'Otkrijte ključne elemente koje treba razmotriti pri izboru teme za sajt za venčanje koja odražava vašu ličnost i stil.',
    date: currentLocale.value === 'en' ? 'April 5, 2024' : '5. april 2024.',
    category: currentLocale.value === 'en' ? 'Design Tips' : 'Saveti za dizajn',
    imagePlaceholder: 'https://placehold.co/600x400?text=Wedding+Theme'
  },
  {
    id: 2,
    slug: 'rsvp-system-benefits',
    title: currentLocale.value === 'en' ? 
      '5 Benefits of Using an Online RSVP System' : 
      '5 prednosti korišćenja online RSVP sistema',
    excerpt: currentLocale.value === 'en' ? 
      'Learn how an online RSVP system can simplify your guest management and save you time and stress.' : 
      'Saznajte kako online RSVP sistem može pojednostaviti upravljanje gostima i uštedeti vam vreme i stres.',
    date: currentLocale.value === 'en' ? 'March 22, 2024' : '22. mart 2024.',
    category: currentLocale.value === 'en' ? 'Planning' : 'Planiranje',
    imagePlaceholder: 'https://placehold.co/600x400?text=RSVP+System'
  },
  {
    id: 3,
    slug: 'wedding-website-checklist',
    title: currentLocale.value === 'en' ? 
      'Essential Wedding Website Checklist: What to Include' : 
      'Osnovni spisak za sajt za venčanje: Šta uključiti',
    excerpt: currentLocale.value === 'en' ? 
      'Make sure your wedding website has all the necessary information with our comprehensive checklist.' : 
      'Osigurajte da vaš sajt za venčanje ima sve potrebne informacije sa našim sveobuhvatnim spiskom.',
    date: currentLocale.value === 'en' ? 'March 10, 2024' : '10. mart 2024.',
    category: currentLocale.value === 'en' ? 'Planning' : 'Planiranje',
    imagePlaceholder: 'https://placehold.co/600x400?text=Website+Checklist'
  },
  {
    id: 4,
    slug: 'personalizing-wedding-website',
    title: currentLocale.value === 'en' ? 
      'Creative Ways to Personalize Your Wedding Website' : 
      'Kreativni načini za personalizaciju sajta za venčanje',
    excerpt: currentLocale.value === 'en' ? 
      'Explore unique ideas to make your wedding website truly special and reflective of your relationship.' : 
      'Istražite jedinstvene ideje da učinite svoj sajt za venčanje zaista posebnim i da odražava vašu vezu.',
    date: currentLocale.value === 'en' ? 'February 28, 2024' : '28. februar 2024.',
    category: currentLocale.value === 'en' ? 'Design Tips' : 'Saveti za dizajn',
    imagePlaceholder: 'https://placehold.co/600x400?text=Personalize+Website'
  },
  {
    id: 5,
    slug: 'wedding-website-faqs',
    title: currentLocale.value === 'en' ? 
      'Wedding Website FAQs: Everything You Need to Know' : 
      'Česta pitanja o sajtu za venčanje: Sve što treba da znate',
    excerpt: currentLocale.value === 'en' ? 
      'Answers to the most common questions couples have about creating and sharing a wedding website.' : 
      'Odgovori na najčešća pitanja koja parovi imaju o kreiranju i deljenju sajta za venčanje.',
    date: currentLocale.value === 'en' ? 'February 15, 2024' : '15. februar 2024.',
    category: currentLocale.value === 'en' ? 'Guide' : 'Vodič',
    imagePlaceholder: 'https://placehold.co/600x400?text=Wedding+FAQs'
  },
  {
    id: 6,
    slug: 'mobile-friendly-wedding-websites',
    title: currentLocale.value === 'en' ? 
      'Why Your Wedding Website Must Be Mobile-Friendly' : 
      'Zašto vaš sajt za venčanje mora biti prilagođen mobilnim uređajima',
    excerpt: currentLocale.value === 'en' ? 
      'Discover the importance of mobile optimization for your wedding website and how it enhances guest experience.' : 
      'Otkrijte važnost optimizacije za mobilne uređaje za vaš sajt za venčanje i kako to poboljšava iskustvo gostiju.',
    date: currentLocale.value === 'en' ? 'February 2, 2024' : '2. februar 2024.',
    category: currentLocale.value === 'en' ? 'Technology' : 'Tehnologija',
    imagePlaceholder: 'https://placehold.co/600x400?text=Mobile+Friendly'
  }
])
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Apply gentle reveal animations */
.blog-page {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>