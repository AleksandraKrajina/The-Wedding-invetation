<template>
  <div>
    <GeneralNavigation class=""/>
    <section class="bg-neutral-50 pt-28 pb-16">
      <div class="container mx-auto px-6">
        <!-- Blog Header Section -->
        <div class="max-w-4xl mx-auto text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-light text-neutral-800 mb-6">
            {{ t('blogTitle') }}
          </h1>
          <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
            {{ t('blogSubtitle') }}
          </p>
        </div>
        
        <!-- Featured Article -->
        <div v-if="featuredPost" class="max-w-6xl mx-auto mb-16 bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="grid md:grid-cols-2 gap-0">
            <div class="relative h-64 md:h-auto bg-neutral-200">
              <img 
                :src="featuredPost.image" 
                :alt="featuredPost.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                  {{ t('featured') }}
                </span>
              </div>
            </div>
            <div class="p-8 md:p-10 flex flex-col">
              <div class="flex items-center space-x-2 text-sm text-neutral-500 mb-3">
                <span>{{ formatDate(featuredPost.date) }}</span>
                <span>•</span>
                <span>{{ t('readingTime', { minutes: featuredPost.readingTime }) }}</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-medium text-neutral-800 mb-4">
                <NuxtLink :to="`/blog/${featuredPost.slug}`" class="hover:text-neutral-600 transition-colors">
                  {{ featuredPost.title }}
                </NuxtLink>
              </h2>
              <p class="text-neutral-600 mb-6 flex-grow">
                {{ featuredPost.excerpt }}
              </p>
              <div class="flex items-center space-x-4">
                <div class="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    :src="featuredPost.author.avatar" 
                    :alt="featuredPost.author.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p class="text-sm font-medium text-neutral-800">{{ featuredPost.author.name }}</p>
                  <p class="text-xs text-neutral-500">{{ featuredPost.author.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Category Filter -->
        <div class="max-w-6xl mx-auto mb-10">
          <div class="flex flex-wrap gap-2 justify-center">
            <button 
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              :class="selectedCategory === '' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'"
              @click="selectedCategory = ''"
            >
              {{ t('allCategories') }}
            </button>
            <button 
              v-for="category in categories" 
              :key="category"
              class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
              :class="selectedCategory === category ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>
        
        <!-- Blog Post Grid -->
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
          >
            <div class="relative h-48 bg-neutral-100">
              <NuxtLink :to="`/blog/${post.slug}`">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </NuxtLink>
              <div class="absolute top-3 left-3">
                <span class="inline-block px-3 py-1 bg-neutral-800 bg-opacity-80 text-white text-xs font-medium rounded-full">
                  {{ post.category }}
                </span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <div class="flex items-center space-x-2 text-xs text-neutral-500 mb-3">
                <span>{{ formatDate(post.date) }}</span>
                <span>•</span>
                <span>{{ t('readingTime', { minutes: post.readingTime }) }}</span>
              </div>
              <h3 class="text-xl font-medium text-neutral-800 mb-3">
                <NuxtLink :to="`/blog/${post.slug}`" class="hover:text-neutral-600 transition-colors">
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="text-neutral-600 text-sm mb-4 flex-grow">
                {{ post.excerpt }}
              </p>
              <NuxtLink 
                :to="`/blog/${post.slug}`" 
                class="text-neutral-800 font-medium text-sm hover:text-neutral-600 transition-colors inline-flex items-center"
              >
                {{ t('readMore') }}
                <i class="pi pi-arrow-right ml-2 text-xs"></i>
              </NuxtLink>
            </div>
          </article>
        </div>
        
        <!-- Pagination -->
        <div class="max-w-xl mx-auto mt-16 flex justify-center">
          <div class="flex space-x-2">
            <button 
              v-if="currentPage > 1"
              @click="currentPage--" 
              class="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-label="Previous page"
            >
              <i class="pi pi-chevron-left text-xs"></i>
            </button>
            
            <button 
              v-for="page in totalPages" 
              :key="page"
              @click="currentPage = page" 
              class="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
              :class="currentPage === page ? 'bg-neutral-800 text-white border-neutral-800' : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100'"
              :aria-label="`Page ${page}`"
              :aria-current="currentPage === page ? 'page' : null"
            >
              {{ page }}
            </button>
            
            <button 
              v-if="currentPage < totalPages"
              @click="currentPage++" 
              class="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-label="Next page"
            >
              <i class="pi pi-chevron-right text-xs"></i>
            </button>
          </div>
        </div>
        
        <!-- Newsletter Signup -->
        <div class="max-w-3xl mx-auto mt-20 bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-8 md:p-10 text-center">
            <h3 class="text-2xl font-medium text-neutral-800 mb-4">
              {{ t('newsletterTitle') }}
            </h3>
            <p class="text-neutral-600 mb-6 max-w-xl mx-auto">
              {{ t('newsletterDescription') }}
            </p>
            <form @submit.prevent="subscribeToNewsletter" class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                v-model="newsletterEmail" 
                :placeholder="t('emailPlaceholder')"
                required
                class="flex-grow px-4 py-3 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent"
              />
              <button 
                type="submit"
                class="bg-neutral-800 text-white font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
              >
                {{ t('subscribe') }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  <GeneralFooter class="pt-20"/>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useNuxtApp } from '#app'

// Access Nuxt app instance to get i18n
const nuxtApp = useNuxtApp()

// Translation function that wraps the i18n.t method
const t = (key, params = {}) => {
  if (!nuxtApp.$i18n) return key
  try {
    return nuxtApp.$i18n.t(key, params) || key
  } catch (error) {
    console.error(`Translation error for key "${key}":`, error)
    return key
  }
}

// Blog State
const blogPosts = ref([])
const featuredPost = ref(null)
const categories = ref([])
const selectedCategory = ref('')
const currentPage = ref(1)
const postsPerPage = ref(9)
const newsletterEmail = ref('')

// Fetch blog posts from API or static data
const fetchBlogPosts = async () => {
  try {
    // In a real app, this would be an API call
    // For demo purposes, we'll use static data
    const posts = [
      {
        id: 1,
        slug: 'ultimate-wedding-website-guide',
        title: 'The Ultimate Guide to Creating Your Perfect Wedding Website',
        excerpt: 'Discover how to create a wedding website that truly represents your unique love story and makes planning easier for you and your guests.',
        content: '...',
        image: '/assets/images/blog/post1.jpg',
        category: 'Planning',
        date: '2024-04-15',
        readingTime: 8,
        author: {
          name: 'Emily Johnson',
          role: 'Wedding Planner',
          avatar: '/assets/images/team/emily.jpg'
        },
        tags: ['website', 'planning', 'design'],
        featured: true
      },
      {
        id: 2,
        slug: 'wedding-website-mistakes',
        title: '10 Common Wedding Website Mistakes to Avoid',
        excerpt: 'Learn about the most common pitfalls couples face when creating their wedding websites and how to avoid them.',
        content: '...',
        image: '/assets/images/blog/post2.jpg',
        category: 'Tips',
        date: '2024-04-10',
        readingTime: 6,
        author: {
          name: 'Michael Roberts',
          role: 'UX Designer',
          avatar: '/assets/images/team/michael.jpg'
        },
        tags: ['tips', 'mistakes', 'design'],
        featured: false
      },
      {
        id: 3,
        slug: 'wedding-rsvp-systems',
        title: 'How to Create an Effective RSVP System for Your Wedding',
        excerpt: 'An effective RSVP system can simplify your wedding planning. Learn how to set up and manage digital RSVPs on your wedding website.',
        content: '...',
        image: '/assets/images/blog/post3.jpg',
        category: 'Planning',
        date: '2024-04-05',
        readingTime: 7,
        author: {
          name: 'Sarah Williams',
          role: 'Event Coordinator',
          avatar: '/assets/images/team/sarah.jpg'
        },
        tags: ['rsvp', 'planning', 'guest-management'],
        featured: false
      },
      {
        id: 4,
        slug: 'wedding-website-design-tips',
        title: '7 Design Tips for a Stunning Wedding Website',
        excerpt: 'Make your wedding website visually appealing with these professional design tips that will impress your guests.',
        content: '...',
        image: '/assets/images/blog/post4.jpg',
        category: 'Design',
        date: '2024-03-28',
        readingTime: 5,
        author: {
          name: 'Michael Roberts',
          role: 'UX Designer',
          avatar: '/assets/images/team/michael.jpg'
        },
        tags: ['design', 'aesthetics', 'typography'],
        featured: false
      },
      {
        id: 5,
        slug: 'wedding-website-content-guide',
        title: 'Essential Content to Include on Your Wedding Website',
        excerpt: 'From travel information to your love story, learn what content will make your wedding website most useful for your guests.',
        content: '...',
        image: '/assets/images/blog/post5.jpg',
        category: 'Content',
        date: '2024-03-20',
        readingTime: 6,
        author: {
          name: 'Emily Johnson',
          role: 'Wedding Planner',
          avatar: '/assets/images/team/emily.jpg'
        },
        tags: ['content', 'information', 'planning'],
        featured: false
      },
      {
        id: 6,
        slug: 'multilingual-wedding-websites',
        title: 'Creating Multilingual Wedding Websites for International Guests',
        excerpt: 'Planning a wedding with international guests? Learn how to create a multilingual website that makes everyone feel included.',
        content: '...',
        image: '/assets/images/blog/post6.jpg',
        category: 'International',
        date: '2024-03-15',
        readingTime: 8,
        author: {
          name: 'David Chen',
          role: 'International Coordinator',
          avatar: '/assets/images/team/david.jpg'
        },
        tags: ['multilingual', 'international', 'inclusive'],
        featured: false
      }
    ]
    
    blogPosts.value = posts
    featuredPost.value = posts.find(post => post.featured)
    
    // Extract categories from posts
    const uniqueCategories = new Set(posts.map(post => post.category))
    categories.value = [...uniqueCategories]
    
  } catch (error) {
    console.error('Error fetching blog posts:', error)
  }
}

// Format date for display
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// Filter posts by category
const filteredPosts = computed(() => {
  let filtered = blogPosts.value
  
  if (selectedCategory.value) {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }
  
  const startIndex = (currentPage.value - 1) * postsPerPage.value
  const endIndex = startIndex + postsPerPage.value
  
  return filtered.slice(startIndex, endIndex)
})

// Calculate total pages
const totalPages = computed(() => {
  let filtered = blogPosts.value
  
  if (selectedCategory.value) {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }
  
  return Math.ceil(filtered.length / postsPerPage.value) || 1
})

// Newsletter subscription
const subscribeToNewsletter = () => {
  // This would be an API call in a real app
  console.log('Subscribing email:', newsletterEmail.value)
  alert(t('subscriptionSuccess'))
  newsletterEmail.value = ''
}

// Initialize the component
onMounted(() => {
  fetchBlogPosts()
})

// Add SEO metadata using Nuxt's useHead
useHead({
  title: 'Blog | Vow Perfect',
  meta: [
    { name: 'description', content: 'Explore our wedding planning blog for tips, ideas, and inspiration for your perfect wedding website and celebration.' },
    { property: 'og:title', content: 'Blog | Vow Perfect' },
    { property: 'og:description', content: 'Explore our wedding planning blog for tips, ideas, and inspiration for your perfect wedding website and celebration.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://vowperfect.com/blog' },
    { property: 'og:image', content: 'https://vowperfect.com/assets/images/blog/blog-cover.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://vowperfect.com/blog' }
  ]
})
</script>

<style scoped>
/* Add any custom styles here */
</style>