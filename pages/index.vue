<template>
    <div class=" mx-auto">
        <!-- Navigation -->
        <GeneralNavigation />

        <!-- Hero Section -->
        <LandingHero />

        <LandingFeaturesSection />

        <LandingTestemonialsSection />

        <LandingHowItWorksSection />

        <!-- <LandingCTA /> -->
        <LandingTemplates />

        <LandingPricingSection />

        <!-- <LandingFaqSection /> -->

        <LandingContactSection />
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

onMounted(() => {
    const sections = document.querySelectorAll('[data-observe]');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'animate-fadeIn');
                    observer.unobserve(entry.target); // Stop observing after animation triggers
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
});
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