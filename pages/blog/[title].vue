<template>
  <div>
    <GeneralNavigation />
    <section class="bg-neutral-50 pt-28 pb-16">
      <div class="container mx-auto px-6">
        <!-- Breadcrumbs for SEO and navigation -->
        <nav class="max-w-3xl mx-auto mb-8" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2 text-sm text-neutral-500">
            <li>
              <NuxtLink to="/" class="hover:text-neutral-800 transition-colors">
                {{ t('home') }}
              </NuxtLink>
            </li>
            <li>
              <span class="mx-2">/</span>
            </li>
            <li>
              <NuxtLink to="/blog" class="hover:text-neutral-800 transition-colors">
                {{ t('blog') }}
              </NuxtLink>
            </li>
            <li>
              <span class="mx-2">/</span>
            </li>
            <li class="text-neutral-800 truncate max-w-sm" aria-current="page">
              {{ post?.title }}
            </li>
          </ol>
        </nav>
        
        <!-- Blog Post Content -->
        <div v-if="post" class="max-w-3xl mx-auto">
          <!-- Post Header -->
          <header class="mb-8">
            <div class="flex items-center space-x-3 mb-4">
              <NuxtLink 
                :to="`/blog?category=${post.category}`" 
                class="inline-block px-3 py-1 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors"
              >
                {{ post.category }}
              </NuxtLink>
              <span class="text-sm text-neutral-500">{{ formatDate(post.date) }}</span>
              <span class="text-sm text-neutral-500">•</span>
              <span class="text-sm text-neutral-500">{{ t('readingTime', { minutes: post.readingTime }) }}</span>
            </div>
            
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-medium text-neutral-800 mb-6 leading-tight">
              {{ post.title }}
            </h1>
            
            <p class="text-lg text-neutral-600 mb-8">
              {{ post.excerpt }}
            </p>
            
            <div class="flex items-center space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden">
                <img 
                  :src="post.author.avatar" 
                  :alt="post.author.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="font-medium text-neutral-800">{{ post.author.name }}</p>
                <p class="text-sm text-neutral-500">{{ post.author.role }}</p>
              </div>
            </div>
          </header>
          
          <!-- Featured Image -->
          <figure class="mb-10 rounded-xl overflow-hidden shadow-sm">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-auto object-cover"
              width="1200"
              height="675"
            />
            <figcaption v-if="post.imageCaption" class="text-center text-sm text-neutral-500 mt-2 italic">
              {{ post.imageCaption }}
            </figcaption>
          </figure>
          
          <!-- Post Content -->
          <!-- <div class="prose prose-neutral prose-lg max-w-none mb-12" v-html="post.content">
          </div>
           -->
          <!-- Tags for SEO and navigation -->
          <div class="mb-12">
            <h3 class="text-lg font-medium text-neutral-800 mb-3">{{ t('tags') }}</h3>
            <div class="flex flex-wrap gap-2">
              <NuxtLink 
                v-for="tag in post.tags" 
                :key="tag"
                :to="`/blog?tag=${tag}`"
                class="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full hover:bg-neutral-200 transition-colors"
              >
                #{{ tag }}
              </NuxtLink>
            </div>
          </div>
          
          <!-- Author Bio for E-E-A-T signals -->
          <div class="bg-white rounded-xl shadow-sm p-6 mb-12">
            <h3 class="text-lg font-medium text-neutral-800 mb-4">{{ t('aboutAuthor') }}</h3>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
                <img 
                  :src="post.author.avatar" 
                  :alt="post.author.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <p class="font-medium text-neutral-800 mb-2">{{ post.author.name }}</p>
                <p class="text-neutral-600 text-sm mb-3">{{ post.author.bio || t('defaultAuthorBio') }}</p>
                <div class="flex space-x-3">
                  <a 
                    v-if="post.author.twitter" 
                    :href="post.author.twitter" 
                    target="_blank" 
                    rel="noopener"
                    class="text-neutral-500 hover:text-neutral-800 transition-colors"
                    aria-label="Twitter"
                  >
                    <i class="pi pi-twitter"></i>
                  </a>
                  <a 
                    v-if="post.author.linkedin" 
                    :href="post.author.linkedin" 
                    target="_blank" 
                    rel="noopener"
                    class="text-neutral-500 hover:text-neutral-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <i class="pi pi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Sharing -->
          <div class="mb-12">
            <h3 class="text-lg font-medium text-neutral-800 mb-4">{{ t('shareThisPost') }}</h3>
            <div class="flex space-x-3">
              <button 
                @click="shareOnFacebook" 
                class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                aria-label="Share on Facebook"
              >
                <i class="pi pi-facebook"></i>
              </button>
              <button 
                @click="shareOnTwitter" 
                class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                aria-label="Share on Twitter"
              >
                <i class="pi pi-twitter"></i>
              </button>
              <button 
                @click="shareOnLinkedIn" 
                class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <i class="pi pi-linkedin"></i>
              </button>
              <button 
                @click="copyLink" 
                class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors"
                aria-label="Copy link"
              >
                <i class="pi pi-link"></i>
              </button>
            </div>
          </div>
          
          <!-- Related Articles -->
          <div class="mb-12">
            <h3 class="text-2xl font-medium text-neutral-800 mb-6">{{ t('relatedPosts') }}</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <article 
                v-for="relatedPost in relatedPosts" 
                :key="relatedPost.id"
                class="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
              >
                <div class="relative h-40 bg-neutral-100">
                  <NuxtLink :to="`/blog/${relatedPost.slug}`">
                    <img 
                      :src="relatedPost.image" 
                      :alt="relatedPost.title"
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </NuxtLink>
                </div>
                <div class="p-4 flex flex-col flex-grow">
                  <div class="flex items-center space-x-2 text-xs text-neutral-500 mb-2">
                    <span>{{ formatDate(relatedPost.date) }}</span>
                    <span>•</span>
                    <span>{{ t('readingTime', { minutes: relatedPost.readingTime }) }}</span>
                  </div>
                  <h4 class="text-base font-medium text-neutral-800 mb-3">
                    <NuxtLink :to="`/blog/${relatedPost.slug}`" class="hover:text-neutral-600 transition-colors">
                      {{ relatedPost.title }}
                    </NuxtLink>
                  </h4>
                  <NuxtLink 
                    :to="`/blog/${relatedPost.slug}`" 
                    class="text-neutral-800 font-medium text-sm hover:text-neutral-600 transition-colors inline-flex items-center mt-2"
                  >
                    {{ t('readMore') }}
                    <i class="pi pi-arrow-right ml-2 text-xs"></i>
                  </NuxtLink>
                </div>
              </article>
            </div>
          </div>
          
          <!-- Newsletter -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-8 md:p-10 text-center">
              <h3 class="text-2xl font-medium text-neutral-800 mb-4">
                {{ t('stayUpdated') }}
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
        
        <!-- Loading State -->
        <div v-else-if="isLoading" class="max-w-3xl mx-auto text-center py-12">
          <div class="w-12 h-12 border-4 border-neutral-300 border-t-neutral-800 rounded-full animate-spin mx-auto mb-4"></div>
          <p class="text-neutral-600">{{ t('loadingPost') }}</p>
        </div>
        
        <!-- Error State -->
        <div v-else class="max-w-3xl mx-auto text-center py-12">
          <div class="bg-white rounded-lg shadow-sm p-8">
            <h2 class="text-2xl font-medium text-neutral-800 mb-4">{{ t('postNotFound') }}</h2>
            <p class="text-neutral-600 mb-6">{{ t('postNotFoundMessage') }}</p>
            <NuxtLink 
              to="/blog" 
              class="inline-block bg-neutral-800 text-white font-medium px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors"
            >
              {{ t('backToBlog') }}
            </NuxtLink>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { useRoute } from 'vue-router'

// Access Nuxt app instance to get i18n
const nuxtApp = useNuxtApp()
const route = useRoute()

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

// State
const post = ref(null)
const isLoading = ref(true)
const allPosts = ref([])
const newsletterEmail = ref('')

// Get related posts based on tags and category
const relatedPosts = computed(() => {
  if (!post.value) return []
  
  // Find posts with matching tags or category
  return allPosts.value
    .filter(p => p.id !== post.value.id) // Exclude current post
    .filter(p => {
      // Check for matching tags or category
      const hasMatchingTag = p.tags.some(tag => post.value.tags.includes(tag))
      const hasSameCategory = p.category === post.value.category
      return hasMatchingTag || hasSameCategory
    })
    .sort((a, b) => {
      // Sort by number of matching tags
      const aMatchCount = a.tags.filter(tag => post.value.tags.includes(tag)).length + (a.category === post.value.category ? 1 : 0)
      const bMatchCount = b.tags.filter(tag => post.value.tags.includes(tag)).length + (b.category === post.value.category ? 1 : 0)
      return bMatchCount - aMatchCount
    })
    .slice(0, 2) // Limit to 2 related posts
})

// Format date for display
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString(undefined, options)
}

// Fetch blog post data
const fetchPostData = async () => {
  isLoading.value = true
  try {
    // In a real app, this would be an API call with the slug from the route
    // For demo purposes, we'll use static data
    const slug = route.params.slug
    
    // Sample blog posts data
    const posts = [
      {
        id: 1,
        slug: 'ultimate-wedding-website-guide',
        title: 'The Ultimate Guide to Creating Your Perfect Wedding Website',
        excerpt: 'Discover how to create a wedding website that truly represents your unique love story and makes planning easier for you and your guests.',
        content: `
          <h2>Why You Need a Wedding Website</h2>
          <p>In today's digital age, a wedding website has become an essential tool for couples planning their big day. It serves as a centralized hub for all wedding-related information, making it easier for both you and your guests to stay organized.</p>
          
          <p>A well-designed wedding website can help you:</p>
          <ul>
            <li>Share important details about your wedding day</li>
            <li>Collect RSVPs digitally</li>
            <li>Provide travel and accommodation information</li>
            <li>Tell your love story</li>
            <li>Showcase your engagement photos</li>
          </ul>
          
          <h2>Essential Elements for Your Wedding Website</h2>
          <p>When creating your wedding website, be sure to include these key elements:</p>
          
          <h3>1. A Personalized Welcome Page</h3>
          <p>Your welcome page sets the tone for your entire wedding website. Include a beautiful cover photo, your names, and your wedding date. This is also a great place to share a brief message welcoming guests to your site.</p>
          
          <h3>2. Your Love Story</h3>
          <p>Share how you met, your journey together, and your proposal story. This personal touch helps guests feel more connected to your celebration, especially those who might not know both of you well.</p>
          
          <h3>3. Event Details</h3>
          <p>Provide clear information about all wedding-related events, including:</p>
          <ul>
            <li>Ceremony date, time, and location</li>
            <li>Reception information</li>
            <li>Dress code</li>
            <li>Schedule of events</li>
            <li>Any additional celebrations (rehearsal dinner, post-wedding brunch, etc.)</li>
          </ul>
          
          <h3>4. RSVP System</h3>
          <p>A digital RSVP system simplifies the process for both you and your guests. Make sure it's intuitive and allows guests to respond for their entire party. Include options for meal preferences if applicable.</p>
          
          <h3>5. Travel Information</h3>
          <p>For out-of-town guests, provide helpful information about:</p>
          <ul>
            <li>Nearby accommodations with special room blocks</li>
            <li>Transportation options</li>
            <li>Directions to venues</li>
            <li>Local attractions and recommendations</li>
          </ul>
          
          <h2>Design Tips for Your Wedding Website</h2>
          <p>Your wedding website should reflect your personality and wedding style. Here are some design tips:</p>
          
          <h3>Choose a Cohesive Color Scheme</h3>
          <p>Select colors that match your wedding palette for a consistent look and feel.</p>
          
          <h3>Use High-Quality Images</h3>
          <p>Include professional engagement photos or high-quality pictures of you as a couple.</p>
          
          <h3>Keep Navigation Simple</h3>
          <p>Make it easy for guests to find information with clear, intuitive navigation.</p>
          
          <h3>Ensure Mobile Compatibility</h3>
          <p>Many guests will view your website on their phones, so ensure it looks great on mobile devices.</p>
          
          <h2>Conclusion</h2>
          <p>A thoughtfully created wedding website is an invaluable tool for modern wedding planning. It enhances communication with your guests, reduces the need for printed materials, and creates excitement for your big day. By including the essential elements and following these design tips, you'll create a wedding website that perfectly represents your unique love story and simplifies the planning process.</p>
        `,
        image: '/assets/images/blog/post1.jpg',
        imageCaption: 'Planning your perfect wedding website',
        category: 'Planning',
        date: '2024-04-15',
        lastUpdated: '2024-04-16',
        readingTime: 8,
        author: {
          name: 'Emily Johnson',
          role: 'Wedding Planner',
          avatar: '/assets/images/team/emily.jpg',
          bio: 'Emily has been planning weddings for over 10 years and specializes in digital wedding solutions. She loves helping couples tell their unique story online.',
          twitter: 'https://twitter.com/emilyjohnson',
          linkedin: 'https://linkedin.com/in/emilyjohnson'
        },
        tags: ['website', 'planning', 'design', 'guide'],
        featured: true
      },
      {
        id: 2,
        slug: 'wedding-website-mistakes',
        title: '10 Common Wedding Website Mistakes to Avoid',
        excerpt: 'Learn about the most common pitfalls couples face when creating their wedding websites and how to avoid them.',
        content: `
          <p>Creating a wedding website is an exciting step in your wedding planning journey, but it's easy to make mistakes that can confuse your guests or diminish the user experience. Let's explore 10 common wedding website mistakes and how to avoid them.</p>
          
          <h2>1. Overcomplicating the Navigation</h2>
          <p>One of the biggest mistakes couples make is creating a website with confusing navigation. Your guests shouldn't have to hunt for important information.</p>
          
          <p><strong>Solution:</strong> Keep your menu simple with clear, descriptive labels. Limit your main navigation to 5-7 essential pages such as Home, Our Story, Events, Travel, Registry, RSVP, and FAQs.</p>
          
          <h2>2. Missing Critical Information</h2>
          <p>It's surprising how often couples forget to include basic details that guests need.</p>
          
          <p><strong>Solution:</strong> Create a checklist of essential information: date, time, locations with addresses, dress code, transportation options, accommodation details, and RSVP deadlines. Have someone not involved in your planning review the site to spot missing information.</p>
          
          <h2>3. Not Making It Mobile-Friendly</h2>
          <p>Many guests will view your website on their phones, and if it's not mobile-friendly, they'll struggle to find information.</p>
          
          <p><strong>Solution:</strong> Choose a responsive wedding website platform that automatically adjusts to different screen sizes. Test your website on multiple devices before sharing it with guests.</p>
          
          <h2>4. Waiting Too Long to Launch</h2>
          <p>Some couples wait until just before sending invitations to launch their website, which doesn't give guests enough time to plan.</p>
          
          <p><strong>Solution:</strong> Launch your website when you send save-the-dates, even if some details aren't finalized. You can always update it as you confirm more information.</p>
          
          <h2>5. Neglecting to Update Information</h2>
          <p>Plans change, and failing to update your website can lead to confusion.</p>
          
          <p><strong>Solution:</strong> Set calendar reminders to review your website monthly during planning. Add an "Updates" section or banner to highlight recent changes.</p>
          
          <h2>6. Making RSVP Too Complicated</h2>
          <p>Complex RSVP systems frustrate guests and lead to incomplete responses.</p>
          
          <p><strong>Solution:</strong> Keep your RSVP form simple and intuitive. Test it with family members before launching. Include clear instructions and only ask for essential information.</p>
          
          <h2>7. Using Too Many Photos</h2>
          <p>While sharing photos is wonderful, too many large images slow down your website and create a cluttered experience.</p>
          
          <p><strong>Solution:</strong> Select 10-15 high-quality images that tell your story. Create a dedicated gallery page if you want to share more. Optimize images for web to improve loading times.</p>
          
          <h2>8. Forgetting to Proofread</h2>
          <p>Typos and grammatical errors appear unprofessional and can sometimes convey incorrect information.</p>
          
          <p><strong>Solution:</strong> Have multiple people review your content before publishing. Read everything aloud to catch awkward phrasing or errors your eyes might miss when reading silently.</p>
          
          <h2>9. Not Considering Privacy</h2>
          <p>Some couples share too much personal information on public wedding websites.</p>
          
          <p><strong>Solution:</strong> Password-protect your website if you're concerned about privacy. Avoid sharing exact home addresses, detailed travel plans, or other sensitive information.</p>
          
          <h2>10. Neglecting the Guest Experience</h2>
          <p>Sometimes couples create websites that reflect their tastes but don't consider what information guests actually need.</p>
          
          <p><strong>Solution:</strong> Put yourself in your guests' shoes. What questions might they have? What information would make their experience easier? Consider adding an FAQ section addressing common questions.</p>
          
          <h2>Conclusion</h2>
          <p>Your wedding website is a powerful tool for communicating with guests and simplifying your planning process. By avoiding these common mistakes, you'll create a website that is both beautiful and functional, enhancing the experience for everyone involved in your special day.</p>
        `,
        image: '/assets/images/blog/post2.jpg',
        category: 'Tips',
        date: '2024-04-10',
        readingTime: 6,
        author: {
          name: 'Michael Roberts',
          role: 'UX Designer',
          avatar: '/assets/images/team/michael.jpg',
          bio: 'Michael combines his expertise in user experience design with his passion for weddings to help couples create intuitive, beautiful digital experiences for their guests.',
          twitter: 'https://twitter.com/michaelroberts',
          linkedin: 'https://linkedin.com/in/michaelroberts'
        },
        tags: ['tips', 'mistakes', 'design', 'planning'],
        featured: false
      },
      {
        id: 3,
        slug: 'multilingual-wedding-websites',
        title: 'Creating Multilingual Wedding Websites for International Guests',
        excerpt: 'Planning a wedding with international guests? Learn how to create a multilingual website that makes everyone feel included.',
        content: `
          <h2>Why Consider a Multilingual Wedding Website?</h2>
          <p>If you're planning a wedding with guests from different countries or language backgrounds, a multilingual website can be a thoughtful way to make everyone feel included and ensure important information is accessible to all.</p>
          
          <h2>Benefits of a Multilingual Wedding Website</h2>
          <ul>
            <li>Shows respect and consideration for all your guests</li>
            <li>Ensures critical information is understood clearly</li>
            <li>Creates a more inclusive experience</li>
            <li>Helps international family members feel valued</li>
            <li>Reduces confusion and questions</li>
          </ul>
          
          <h2>Planning Your Multilingual Wedding Website</h2>
          <h3>1. Identify Your Required Languages</h3>
          <p>Start by determining which languages your guests speak. Focus on including languages that significant groups of your guests will appreciate, especially older relatives who might not be comfortable with a second language.</p>
          
          <h3>2. Choose the Right Platform</h3>
          <p>Select a wedding website platform that supports multiple languages. Look for features like language toggles and the ability to translate entire sections of content.</p>
          
          <h3>3. Determine What Content to Translate</h3>
          <p>At minimum, make sure these sections are available in all your selected languages:</p>
          <ul>
            <li>Event details (dates, times, locations)</li>
            <li>RSVP instructions</li>
            <li>Travel and accommodation information</li>
            <li>Transportation details</li>
            <li>Important cultural customs or expectations</li>
            <li>Dress code information</li>
            <li>Contact information for questions</li>
          </ul>
          
          <h2>Translation Options</h2>
          <h3>Professional Translation</h3>
          <p>For the most accurate results, especially for languages you don't speak fluently, consider hiring a professional translator. This ensures nuance and cultural context are preserved.</p>
          
          <h3>Bilingual Friends or Family</h3>
          <p>If you have bilingual friends or family members, they might be willing to help translate your website content. They'll understand both the language and the context of your wedding.</p>
          
          <h3>Translation Tools</h3>
          <p>While machine translation has improved dramatically, it's best to have a native speaker review any automated translations to catch errors or awkward phrasing.</p>
          
          <h2>Implementation Tips</h2>
          <h3>Clear Language Navigation</h3>
          <p>Make your language selector prominent on every page. Consider using flags alongside language names for quick visual recognition.</p>
          
          <h3>Consistent Structure Across Languages</h3>
          <p>Maintain the same structure and information hierarchy across all language versions to prevent confusion if guests compare notes or switch between languages.</p>
          
          <h3>Cultural Considerations</h3>
          <p>Remember that effective translation goes beyond word-for-word conversion. Consider cultural nuances in how information is presented or how formality is expressed.</p>
          
          <h3>Test With Native Speakers</h3>
          <p>Before launching your site, have native speakers of each language review their respective translations to ensure everything makes sense and conveys the right tone.</p>
          
          <h2>Special Considerations</h2>
          <h3>Date and Time Formats</h3>
          <p>Different countries use different date formats (MM/DD/YYYY vs. DD/MM/YYYY) and time standards (12-hour vs. 24-hour). Be explicit in your notation or adapt these formats for each language version.</p>
          
          <h3>Address Formats</h3>
          <p>Consider including addresses in both local format and an international format to help guests navigating from abroad.</p>
          
          <h3>Currency Information</h3>
          <p>If discussing registries or local costs, consider providing currency conversion information for international guests.</p>
          
          <h2>Conclusion</h2>
          <p>Creating a multilingual wedding website requires additional planning and effort, but it's a meaningful way to make your international guests feel valued and included. By ensuring everyone has access to important information in a language they're comfortable with, you're setting the stage for a smoother, more inclusive celebration where all your loved ones can fully participate.</p>
        `,
        image: '/assets/images/blog/post6.jpg',
        category: 'International',
        date: '2024-03-15',
        readingTime: 8,
        author: {
          name: 'David Chen',
          role: 'International Coordinator',
          avatar: '/assets/images/team/david.jpg',
          bio: 'David specializes in helping couples plan weddings with international components. With a background in event planning and experience in over 15 countries, he brings a global perspective to wedding planning.',
          linkedin: 'https://linkedin.com/in/davidchen'
        },
        tags: ['multilingual', 'international', 'inclusive', 'planning'],
        featured: false
      }
    ]
    
    // Store all posts for related posts functionality
    allPosts.value = posts
    
    // Find the requested post
    const currentPost = posts.find(p => p.slug === slug)
    
    if (currentPost) {
      post.value = currentPost
      
      // Set dynamic SEO metadata
// Set dynamic SEO metadata
useHead({
        title: `${currentPost.title} | Vow Perfect`,
        meta: [
          { name: 'description', content: currentPost.excerpt },
          { property: 'og:title', content: currentPost.title },
          { property: 'og:description', content: currentPost.excerpt },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: `https://vowperfect.com/blog/${currentPost.slug}` },
          { property: 'og:image', content: currentPost.image },
          { name: 'twitter:card', content: 'summary_large_image' },
          { property: 'article:published_time', content: currentPost.date },
          { property: 'article:modified_time', content: currentPost.lastUpdated || currentPost.date }
        ],
        link: [
          { rel: 'canonical', href: `https://vowperfect.com/blog/${currentPost.slug}` }
        ]
      })
    } else {
      post.value = null
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    post.value = null
  } finally {
    isLoading.value = false
  }
}

// Social sharing functions
const shareOnFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnTwitter = () => {
  const text = post.value ? post.value.title : ''
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank', 'width=600,height=400')
}

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  alert(t('linkCopied'))
}

// Newsletter subscription
const subscribeToNewsletter = () => {
  // This would be an API call in a real app
  console.log('Subscribing email:', newsletterEmail.value)
  alert(t('subscriptionSuccess'))
  newsletterEmail.value = ''
}

// Initialize the component
onMounted(() => {
  fetchPostData()
})

</script>