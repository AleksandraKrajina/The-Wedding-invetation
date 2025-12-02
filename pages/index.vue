<script setup>
import { ref, onMounted } from 'vue';

// State for smooth scrolling and modals
const scrolled = ref(false);
const showBookingModal = ref(false);
const googleCalendarUrl = ref('https://calendar.app.google/booking');

// Function to handle opening the booking modal
const openBookingModal = () => {
    showBookingModal.value = true;
};

onMounted(() => {
    // Track scrolling for animation effects
    window.addEventListener('scroll', () => {
        scrolled.value = window.scrollY > 50;
    });

    // Set up intersection observer for section animations
    const sections = document.querySelectorAll('[data-observe]');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'animate-fadeIn');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    // Handle direct links with hash in URL
    if (window.location.hash) {
        setTimeout(() => {
            const targetSection = document.querySelector(window.location.hash);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 500);
    }
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


<template>
    <div class="mx-auto">
        <GeneralNavigation @open-booking-modal="openBookingModal" />

        <LandingHero />

        <!-- <LandingHeroVideo /> -->
        <LandingTemplates />
        <div id="process">
            <LandingFeaturesSection />
        </div>
        <div id="work">
            <LandingTestimonialsSection />
        </div>
        <LandingCTA />
        <LandingHowItWorksSection />
        <div id="pricing">
            <LandingPricingSection />
        </div>
        <div id="contact">
            <LandingContactSection />
        </div>
    </div>
    <GeneralFooter />

    <GeneralBookingModal v-if="showBookingModal" v-model="showBookingModal" theme="neutral"
        :google-calendar-url="googleCalendarUrl" />
</template>
