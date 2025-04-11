<template>
  <div class="blog-post-page">
    <GeneralBlogNavigation />
    
    <div v-if="post" class="container mx-auto px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Post Header -->
        <div class="mb-8">
          <!-- Back to Blog Link -->
          <NuxtLink to="/blog" class="inline-flex items-center text-stone-600 hover:text-stone-800 mb-6 transition-colors">
            <i class="pi pi-arrow-left mr-2"></i>
            {{ currentLocale === 'en' ? 'Back to Blog' : 'Nazad na Blog' }}
          </NuxtLink>
          
          <!-- Category and Date -->
          <div class="flex items-center text-sm text-stone-500 mb-4">
            <span>{{ post.category }}</span>
            <span class="mx-2">•</span>
            <span>{{ post.date }}</span>
          </div>
          
          <!-- Post Title -->
          <h1 class="text-3xl md:text-4xl font-light text-neutral-800 mb-6 leading-tight">
            {{ post.title }}
          </h1>
          
          <!-- Author Info -->
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img src="/assets/images/demo1/couple1.jpg" alt="Author" class="w-full h-full object-cover" />
            </div>
            <div>
              <p class="font-medium text-neutral-800">
                {{ currentLocale === 'en' ? 'Vow Perfect Team' : 'Vow Perfect Tim' }}
              </p>
              <p class="text-sm text-stone-500">
                {{ currentLocale === 'en' ? '5 min read' : '5 min čitanja' }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Featured Image -->
        <div class="rounded-xl overflow-hidden mb-10 shadow-sm">
          <img 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-auto"
          />
        </div>
        
        <!-- Post Content -->
        <div class="prose prose-stone max-w-none">
          <p class="text-lg text-neutral-700 mb-6 leading-relaxed">
            {{ post.intro }}
          </p>
          
          <!-- First Section -->
          <h2 class="text-2xl font-medium text-neutral-800 mt-10 mb-4">
            {{ post.sections[0].title }}
          </h2>
          <p class="text-neutral-600 mb-6">
            {{ post.sections[0].content }}
          </p>
          
          <!-- Second Section -->
          <h2 class="text-2xl font-medium text-neutral-800 mt-10 mb-4">
            {{ post.sections[1].title }}
          </h2>
          <p class="text-neutral-600 mb-6">
            {{ post.sections[1].content }}
          </p>
          
          <!-- Third Section -->
          <h2 class="text-2xl font-medium text-neutral-800 mt-10 mb-4">
            {{ post.sections[2].title }}
          </h2>
          <p class="text-neutral-600 mb-6">
            {{ post.sections[2].content }}
          </p>
          
          <!-- Conclusion -->
          <p class="text-neutral-700 mt-10 mb-8">
            {{ post.conclusion }}
          </p>
        </div>
        
        <!-- Share Links -->
        <div class="border-t border-neutral-200 pt-8 mt-10">
          <p class="text-neutral-800 font-medium mb-4">
            {{ currentLocale === 'en' ? 'Share this article:' : 'Podeli ovaj članak:' }}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors">
              <i class="pi pi-twitter"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors">
              <i class="pi pi-linkedin"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:bg-neutral-200 transition-colors">
              <i class="pi pi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Related Posts -->
      <div class="max-w-5xl mx-auto mt-20">
        <h2 class="text-2xl font-medium text-neutral-800 mb-8 text-center">
          {{ currentLocale === 'en' ? 'You might also like' : 'Možda će vam se dopasti' }}
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="relatedPost in relatedPosts" :key="relatedPost.id" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <!-- Featured Image -->
            <div class="relative aspect-[16/9] overflow-hidden">
              <img 
                :src="relatedPost.image" 
                :alt="relatedPost.title"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Post Content -->
            <div class="p-5">
              <h3 class="text-lg font-medium text-neutral-800 mb-2 line-clamp-2">
                <NuxtLink :to="'/blog/' + relatedPost.slug" class="hover:underline">
                  {{ relatedPost.title }}
                </NuxtLink>
              </h3>
              <p class="text-sm text-neutral-600 line-clamp-2 mb-3">
                {{ relatedPost.excerpt }}
              </p>
              <NuxtLink 
                :to="'/blog/' + relatedPost.slug"
                class="text-sm inline-flex items-center text-stone-700 hover:text-stone-900 transition-colors"
              >
                {{ currentLocale === 'en' ? 'Read more' : 'Pročitaj više' }}
                <i class="pi pi-arrow-right ml-1 text-xs"></i>
              </NuxtLink>
            </div>
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
import { useRoute } from 'vue-router'

const nuxtApp = useNuxtApp()
const route = useRoute()
const currentLocale = computed(() => nuxtApp.$i18n?.locale || 'en')

const post = ref(null)
const relatedPosts = ref([])

// Dummy blog post data - in real implementation, this would be fetched from an API or markdown files
const blogPostContent = {
  en: {
    'how-to-choose-perfect-wedding-website': {
      title: 'How to Choose the Perfect Wedding Website Theme',
      category: 'Design Tips',
      date: 'April 5, 2024',
      image: '/assets/images/hero/wallpaper2.jpg',
      intro: 'Your wedding website is often the first digital touchpoint for your guests, setting the tone for your celebration. Choosing the right theme isn\'t just about aesthetics—it\'s about creating a digital experience that reflects your unique love story and provides a preview of your special day.',
      sections: [
        {
          title: 'Consider Your Wedding Style',
          content: 'The theme of your wedding website should align with your actual wedding style and venue. Planning a rustic barn wedding? Choose a theme with natural textures and warm colors. Having a modern city celebration? Look for sleek, minimalist designs. This consistency creates a cohesive experience from the digital invitation to the actual event.'
        },
        {
          title: 'Prioritize Functionality',
          content: 'While aesthetics are important, don\'t sacrifice usability. The most beautiful wedding website won\'t be effective if guests can\'t easily find critical information. Look for themes that offer intuitive navigation, clear organization of details like venue directions, accommodation options, and RSVP functionality. Mobile responsiveness is also essential, as many guests will likely view your site on smartphones.'
        },
        {
          title: 'Reflect Your Personality',
          content: 'Your wedding website is an opportunity to share your personality as a couple. Whether you\'re adventurous, traditional, artistic, or playful, choose a theme that allows your unique characteristics to shine through. Consider how colors, typography, and visual elements combine to tell your story. Many couples include personal touches like how they met, proposal stories, and photos that highlight their journey together.'
        }
      ],
      conclusion: 'Remember that your wedding website is an extension of your invitation and a practical resource for guests. By thoughtfully selecting a theme that balances your aesthetic preferences with functional needs, you create a digital experience that builds excitement for your wedding day while providing all the necessary information your guests require. Take time to explore different options, and don\'t hesitate to request customizations that make the site truly yours.'
    },
    'rsvp-system-benefits': {
      title: '5 Benefits of Using an Online RSVP System',
      category: 'Planning',
      date: 'March 22, 2024',
      image: '/assets/images/hero/hero.png',
      intro: 'Traditional paper RSVP cards are being replaced by digital alternatives that offer convenience, efficiency, and enhanced features. If you\'re on the fence about implementing an online RSVP system for your wedding, this article explores five compelling benefits that might convince you to go digital.',
      sections: [
        {
          title: 'Real-Time Tracking and Organization',
          content: 'One of the most significant advantages of online RSVP systems is the ability to track responses in real-time. No more waiting for mail to arrive or manually tallying attendance. Digital systems automatically organize guest responses, meal preferences, and plus-ones in a centralized dashboard. This immediate visibility allows you to adjust your planning accordingly and follow up with guests who haven\'t responded as the deadline approaches.'
        },
        {
          title: 'Cost and Environmental Savings',
          content: 'Traditional paper RSVP cards require printing costs, extra postage for both outgoing invitations (to include the card) and pre-stamped return envelopes. These expenses add up quickly, especially for larger guest lists. Digital RSVPs eliminate these costs entirely while also being the environmentally friendly option by reducing paper waste. It\'s a win-win for your budget and the planet.'
        },
        {
          title: 'Simplified Guest Experience',
          content: 'Online RSVPs make the response process incredibly convenient for your guests. Rather than filling out a card, finding a stamp, and remembering to mail it back, they can simply visit your wedding website and respond in seconds from any device. This convenience typically results in faster response rates and fewer follow-ups needed for missing RSVPs. Digital systems also make it easy for guests to update their response if their plans change.'
        }
      ],
      conclusion: 'An online RSVP system transforms what was once a tedious administrative task into a streamlined, stress-free process for both couples and their guests. The time and money saved, combined with enhanced features and accuracy, make digital RSVPs an excellent choice for modern weddings. As you plan your celebration, consider how an online system might complement your overall wedding vision while making the planning process more manageable.'
    }
  },
  sr: {
    'how-to-choose-perfect-wedding-website': {
      title: 'Kako izabrati savršenu temu za sajt za venčanje',
      category: 'Saveti za dizajn',
      date: '5. april 2024.',
      image: '/assets/images/hero/wallpaper2.jpg',
      intro: 'Vaš sajt za venčanje je često prva digitalna tačka kontakta za vaše goste, postavljajući ton za vašu proslavu. Izbor prave teme nije samo pitanje estetike—radi se o stvaranju digitalnog iskustva koje odražava vašu jedinstvenu ljubavnu priču i pruža pregled vašeg posebnog dana.',
      sections: [
        {
          title: 'Razmotrite stil vašeg venčanja',
          content: 'Tema vašeg sajta za venčanje treba da bude usklađena sa stvarnim stilom i mestom venčanja. Planirate rustično venčanje u štali? Izaberite temu sa prirodnim teksturama i toplim bojama. Imate modernu gradsku proslavu? Potražite elegantne, minimalističke dizajne. Ova doslednost stvara koherentno iskustvo od digitalnog poziva do stvarnog događaja.'
        },
        {
          title: 'Prioritizirajte funkcionalnost',
          content: 'Iako je estetika važna, nemojte žrtvovati upotrebljivost. Najlepši sajt za venčanje neće biti efikasan ako gosti ne mogu lako pronaći ključne informacije. Potražite teme koje nude intuitivnu navigaciju, jasnu organizaciju detalja poput uputstava za lokaciju, opcije smeštaja i RSVP funkcionalnost. Prilagođenost mobilnim uređajima je takođe ključna, jer će mnogi gosti verovatno pregledati vaš sajt na pametnim telefonima.'
        },
        {
          title: 'Odrazite svoju ličnost',
          content: 'Vaš sajt za venčanje je prilika da podelite svoju ličnost kao par. Bez obzira da li ste avanturistički nastrojeni, tradicionalni, umetnički ili razigrni, izaberite temu koja omogućava da vaše jedinstvene karakteristike dođu do izražaja. Razmotrite kako se boje, tipografija i vizuelni elementi kombinuju da ispričaju vašu priču. Mnogi parovi uključuju lične detalje poput toga kako su se upoznali, priče o veridbi i fotografije koje ističu njihovo zajedničko putovanje.'
        }
      ],
      conclusion: 'Zapamtite da je vaš sajt za venčanje produžetak vašeg poziva i praktičan resurs za goste. Pažljivim odabirom teme koja balansira vaše estetske preferencije sa funkcionalnim potrebama, stvarate digitalno iskustvo koje gradi uzbuđenje za vaš dan venčanja dok istovremeno pružate sve neophodne informacije koje vaši gosti zahtevaju. Odvojite vreme da istražite različite opcije i ne ustručavajte se da zatražite prilagođavanja koja čine sajt zaista vašim.'
    },
    'rsvp-system-benefits': {
      title: '5 prednosti korišćenja online RSVP sistema',
      category: 'Planiranje',
      date: '22. mart 2024.',
      image: '/assets/images/hero/hero.png',
      intro: 'Tradicionalne papirne RSVP kartice zamenjuju se digitalnim alternativama koje nude pogodnost, efikasnost i napredne funkcije. Ako ste neodlučni oko implementacije online RSVP sistema za vaše venčanje, ovaj članak istražuje pet ubedljivih prednosti koje bi vas mogle uveriti da pređete na digitalno.',
      sections: [
        {
          title: 'Praćenje i organizacija u realnom vremenu',
          content: 'Jedna od najznačajnijih prednosti online RSVP sistema je mogućnost praćenja odgovora u realnom vremenu. Nema više čekanja da pošta stigne ili ručnog brojanja prisustva. Digitalni sistemi automatski organizuju odgovore gostiju, preferencije obroka i dodatne goste u centralizovanoj kontrolnoj tabli. Ova trenutna vidljivost vam omogućava da prilagodite svoje planiranje i podsetite goste koji nisu odgovorili kako se rok približava.'
        },
        {
          title: 'Ušteda troškova i očuvanje životne sredine',
          content: 'Tradicionalne papirne RSVP kartice zahtevaju troškove štampanja, dodatne poštarine za odlazne pozivnice (da uključe karticu) i unapred označene povratne koverte. Ovi troškovi se brzo akumuliraju, posebno za veće liste gostiju. Digitalni RSVP-ovi u potpunosti eliminišu ove troškove, a istovremeno su i ekološki prihvatljiva opcija jer smanjuju otpad od papira. To je obostrana korist za vaš budžet i planetu.'
        },
        {
          title: 'Pojednostavljeno iskustvo za goste',
          content: 'Online RSVP-ovi čine proces odgovora neverovatno pogodnim za vaše goste. Umesto da popunjavaju karticu, traže markicu i sete se da je pošalju nazad, oni mogu jednostavno posetiti vaš sajt za venčanje i odgovoriti za nekoliko sekundi sa bilo kog uređaja. Ova pogodnost tipično rezultira bržim stopama odgovora i manjom potrebom za naknadnim proverama za nedostajuće RSVP-ove. Digitalni sistemi takođe olakšavaju gostima da ažuriraju svoj odgovor ako se njihovi planovi promene.'
        }
      ],
      conclusion: 'Online RSVP sistem transformiše ono što je nekada bio naporan administrativni zadatak u pojednostavljen, bezbrižan proces i za parove i za njihove goste. Ušteđeno vreme i novac, u kombinaciji sa poboljšanim funkcijama i preciznošću, čine digitalne RSVP-ove odličnim izborom za moderna venčanja. Dok planirate svoju proslavu, razmotrite kako bi online sistem mogao dopuniti vašu ukupnu viziju venčanja, istovremeno čineći proces planiranja lakšim.'
    }
  }
};

// Get the current slug from the route
const slug = computed(() => route.params.slug)

onMounted(() => {
  // Set the post data based on the slug and current locale
  if (slug.value && blogPostContent[currentLocale.value] && blogPostContent[currentLocale.value][slug.value]) {
    post.value = blogPostContent[currentLocale.value][slug.value]
    
    // Generate some related posts (in a real app, these would be more intelligently selected)
    const dummyRelatedPosts = [
      {
        id: 1,
        slug: 'wedding-website-checklist',
        title: currentLocale.value === 'en' ? 
          'Essential Wedding Website Checklist: What to Include' : 
          'Osnovni spisak za sajt za venčanje: Šta uključiti',
        excerpt: currentLocale.value === 'en' ? 
          'Make sure your wedding website has all the necessary information with our comprehensive checklist.' : 
          'Osigurajte da vaš sajt za venčanje ima sve potrebne informacije sa našim sveobuhvatnim spiskom.',
        image: '/assets/images/template1.jpg'
      },
      {
        id: 2,
        slug: 'personalizing-wedding-website',
        title: currentLocale.value === 'en' ? 
          'Creative Ways to Personalize Your Wedding Website' : 
          'Kreativni načini za personalizaciju sajta za venčanje',
        excerpt: currentLocale.value === 'en' ? 
          'Explore unique ideas to make your wedding website truly special and reflective of your relationship.' : 
          'Istražite jedinstvene ideje da učinite svoj sajt za venčanje zaista posebnim i da odražava vašu vezu.',
        image: '/assets/images/template2.jpg'
      },
      {
        id: 3,
        slug: 'mobile-friendly-wedding-websites',
        title: currentLocale.value === 'en' ? 
          'Why Your Wedding Website Must Be Mobile-Friendly' : 
          'Zašto vaš sajt za venčanje mora biti prilagođen mobilnim uređajima',
        excerpt: currentLocale.value === 'en' ? 
          'Discover the importance of mobile optimization for your wedding website and how it enhances guest experience.' : 
          'Otkrijte važnost optimizacije za mobilne uređaje za vaš sajt za venčanje i kako to poboljšava iskustvo gostiju.',
        image: '/assets/images/hero/wallpaper2.jpg'
      }
    ]
    
    relatedPosts.value = dummyRelatedPosts
  }
})
</script>

<style scoped>
.blog-post-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
}

.prose h2 {
  font-family: 'Playfair Display', serif;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Apply gentle reveal animations */
.blog-post-page {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Style for the post content */
.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

/* Add line-clamp utility classes */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>