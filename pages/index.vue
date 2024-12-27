<template>
    <div>
        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center justify-center">
            <img src="@/assets/images/hero/hero.png"
                class="absolute inset-0 w-full h-full object-cover filter brightness-50" alt="Wedding Hero">
            <div class="container mx-auto px-4 text-center relative z-10 text-white">
                <div class="container mx-auto px-4 text-center">
                    <h1 class="text-5xl md:text-7xl font-light text-gray-50 mb-6">Creating Your Perfect Day</h1>
                    <p class="text-xl text-gray-100 mb-8">Beautiful websites for your beautiful moments</p>
                    <Button label="Get Started" class="p-button-lg" />
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