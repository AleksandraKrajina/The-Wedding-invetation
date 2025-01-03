<template>
    <div class="container mx-auto">
        <!-- Navigation -->
        <GeneralNavigation />

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center">
            <img src="../assets/images/hero/hero.png"
                class="absolute inset-0 w-full h-full object-cover filter brightness-50 px-8 py-40 md:px-4 md:py-44"
                alt="Wedding Hero">
            <div class="container mx-auto px-4 text-center relative z-10 text-white">
                <div class="container mx-auto px-4 text-center">
                    <h1 class="text-5xl md:text-7xl font-light mb-6 animate-fade-up">
                        Creating Your Perfect Day</h1>
                    <p class="text-xl text-gray-100 mb-8 animate-fade-up animation-delay-300">Beautiful websites for
                        your beautiful moments</p>
                    <button class="bg-[#C8A898] p-2 text-gray-900 font-bold">
                        book a consultation, now
                    </button>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="py-20 ">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center space-y-8">
                    <h2 class="text-4xl font-light mb-4">We do all the work, you focus only on the wedding!</h2>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Tell your guests all they need to know about the big day on your customized wedding website -
                        add all your events, photos and videos! All in one of our beautifully designed themes.
                    </p>
                    <button class="bg-[#C8A898] p-2 text-gray-900 font-bold">
                        see demo
                    </button>
                </div>
                <div class="mt-16">
                    <img src="/public/assets/images/mockup.png" class="w-full max-w-3xl mx-auto rounded-lg"
                        alt="Wedding Website Demo">
                </div>
            </div>
        </section>


        <!-- <ProcessSection /> -->

        <!-- Portfolio Preview -->
        <section class="py-20">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-light text-center mb-16">Recent Work</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div v-for="work in portfolio" :key="work.title" class="relative group overflow-hidden bg-black drop-shadow-lg mx-12">
                        <img :src="work.image" :alt="work.title"
                            class="w-full aspect-square object-cover transition-transform group-hover:scale-105 opacity-75">
                        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 
                          transition-opacity flex items-center justify-center">
                            <span class="text-white text-lg">{{ work.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Pricing -->
        <section class="py-20 ">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-light text-center mb-16">Pricing Plans</h2>
                <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div v-for="plan in pricingPlans" :key="plan.name"
                        class="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h3 class="text-2xl mb-4">{{ plan.name }}</h3>
                        <div class="text-4xl mb-6">${{ plan.price }}</div>
                        <ul class="space-y-3 mb-8 text-left">
                            <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                                <i class="pi pi-check text-green-500 mr-2"></i>
                                {{ feature }}
                            </li>
                        </ul>
                        <Button :label="plan.action"
                            :class="plan.featured ? 'p-button-primary' : 'p-button-outlined'" />
                    </div>
                </div>
            </div>
        </section>
        <TestimonialsSection />
        <!-- Contact Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4 max-w-lg">
                <h2 class="text-3xl font-light text-center mb-16">Contact Us</h2>
                <form class="space-y-6">
                    <div>
                        <InputText placeholder="Your Name" class="w-full" />
                    </div>
                    <div>
                        <InputText placeholder="Email" type="email" class="w-full" />
                    </div>
                    <div>
                        <textarea rows="4"
                            class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
                            placeholder="Your Message"></textarea>
                    </div>
                    <Button label="Send Message" class="w-full" />
                </form>
            </div>
        </section>
    </div>
    <GeneralFooter />
</template>

<script setup>
import Button from 'primevue/button';

const scrolled = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        scrolled.value = window.scrollY > 50
    })
})

const pricingPlans = [
    {
        name: 'Basic',
        price: '499',
        features: [
            'Custom Design',
            'Mobile Responsive',
            'RSVP Form',
            '3 Month Hosting'
        ],
        action: 'Get Started',
        featured: false
    },
    {
        name: 'Premium',
        price: '899',
        features: [
            'Everything in Basic',
            'Photo Gallery',
            'Guest List Management',
            'Custom Domain',
            '1 Year Hosting'
        ],
        action: 'Choose Plan',
        featured: true
    }
]
const services = [
    {
        title: 'Custom Design',
        icon: 'pi pi-palette',
        description: 'Unique website designs that reflect your love story'
    },
    {
        title: 'RSVP Management',
        icon: 'pi pi-check-circle',
        description: 'Easy guest list and response management'
    },
    {
        title: 'Photo Gallery',
        icon: 'pi pi-images',
        description: 'Beautiful galleries to share your memories'
    }
]

const portfolio = [
    {
        title: 'Sarah & James',
        image: '/assets/images/demo1/couple1.jpg'
    },
    {
        title: 'Emma & Michael',
        image: '/assets/images/demo1/Hero.jpg'
    },
    {
        title: 'Lisa & David',
        image: '/assets/images/demo1/hero.png'
    }
]
</script>

<style scoped>
.animate-scale {
    animation: scale 20s infinite alternate;
}

.animate-fade-up {
    opacity: 0;
    animation: fadeUp 2s forwards;
}

.animation-delay-300 {
    animation-delay: 300ms;
}

.animation-delay-500 {
    animation-delay: 500ms;
}

@keyframes scale {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>