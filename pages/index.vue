<template>
    <div>
        <nav class="fixed w-full z-50 transition-colors"
            :class="{ 'bg-white shadow-md': scrolled, 'bg-transparent': !scrolled }">
            <div class="container mx-auto px-4 py-4 flex justify-between items-center">
                <div class="text-2xl font-light" :class="{ 'text-white': !scrolled, 'text-gray-800': scrolled }">
                    <img src="../assets/images/logo/4.png"
                    class="w-32 p-1" alt="Vow Perfect Logo">
                </div>
                <div class="flex gap-8">
                    <a v-for="item in navItems" :key="item"
                        :class="{ 'text-white': !scrolled, 'text-gray-800': scrolled }"
                        class="hover:opacity-75 transition-opacity" href="#">
                        {{ item }}
                    </a>
                </div>
            </div>
        </nav>
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center">
            <img src="../assets/images/hero/hero.png"
                class="absolute inset-0 w-full h-full object-cover filter brightness-50" alt="Wedding Hero">
            <div class="container mx-auto px-4 text-center relative z-10 text-white">
                <div class="container mx-auto px-4 text-center">
                    <h1 class="text-5xl md:text-7xl font-light mb-6 animate-fade-up">
                        Creating Your Perfect Day</h1>
                    <p class="text-xl text-gray-100 mb-8">Beautiful websites for your beautiful moments</p>
                    <Button label="Get Started" class="p-button-lg" />
                </div>
            </div>
        </section>
        <!-- About us -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <h2 class="text-3xl font-light">About Our Agency</h2>
                        <p class="text-gray-600 leading-relaxed">
                            With over a decade of experience crafting beautiful wedding websites, we understand that
                            your love story is unique. Our passionate team of designers and developers work closely with
                            each couple to create a digital presence that perfectly captures their special day.
                        </p>
                        <div class="grid grid-cols-2 gap-8 mt-8">
                            <div>
                                <div class="text-3xl font-light text-pink-400">500+</div>
                                <p class="text-gray-600">Happy Couples</p>
                            </div>
                            <div>
                                <div class="text-3xl font-light text-pink-400">10+</div>
                                <p class="text-gray-600">Years Experience</p>
                            </div>
                        </div>
                        <Button label="Learn More" class="p-button-outlined mt-4" />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <img src="../assets/images/about/team-1.png" class="w-full aspect-square object-cover"
                            alt="Our Team">
                        <img src="../assets/images/about/team-1.png" class="w-full aspect-square object-cover mt-8"
                            alt="Our Office">
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-light text-center mb-16">Our Services</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="service in services" :key="service.title"
                        class="p-6 text-center hover:shadow-lg transition-shadow">
                        <i :class="service.icon" class="text-4xl text-pink-300 mb-4"></i>
                        <h3 class="text-xl mb-2">{{ service.title }}</h3>
                        <p class="text-gray-600">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Preview -->
        <section class="py-20 bg-neutral-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-light text-center mb-16">Recent Work</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="work in portfolio" :key="work.title" class="relative group overflow-hidden">
                        <img :src="work.image" :alt="work.title"
                            class="w-full aspect-square object-cover transition-transform group-hover:scale-105">
                        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 
                          transition-opacity flex items-center justify-center">
                            <span class="text-white text-lg">{{ work.title }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Pricing -->
        <section class="py-20 bg-neutral-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-light text-center mb-16">Pricing Plans</h2>
                <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
</template>

<script setup>
const navItems = ['Home', 'Services', 'Portfolio', 'Pricing', 'Contact']

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
    },
    {
        name: 'Luxury',
        price: '1499',
        features: [
            'Everything in Premium',
            'Live Chat Support',
            'Wedding Timeline',
            'Gift Registry',
            'Lifetime Hosting'
        ],
        action: 'Contact Us',
        featured: false
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
        image: '/placeholder-1.jpg'
    },
    {
        title: 'Emma & Michael',
        image: '/placeholder-2.jpg'
    },
    {
        title: 'Lisa & David',
        image: '/placeholder-3.jpg'
    }
]
</script>

<style scoped>
.animate-scale {
    animation: scale 20s infinite alternate;
}

.animate-fade-up {
    opacity: 0;
    animation: fadeUp 1s forwards;
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