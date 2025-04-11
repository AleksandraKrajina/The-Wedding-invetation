<template>
    <div class="mx-auto">
        <!-- Navigation with booking modal event handler -->
        <GeneralNavigation @open-booking-modal="openBookingModal" />

        <!-- Hero Section -->
        <LandingHero />

        <!-- Features Section with ID for scrolling -->
        <div id="process">
            <LandingFeaturesSection />
        </div>

        <!-- Portfolio Section with ID for scrolling -->
        <div id="work">
            <LandingTestemonialsSection />
        </div>

        <LandingCTA />
        
        <!-- How It Works Section with package modal event handler -->
        <div>
            <LandingHowItWorksSection @open-package-modal="openPackageModal" />
        </div>

        <LandingTemplates />

        <!-- Pricing Section with ID for scrolling -->
        <div id="pricing">
            <LandingPricingSection
                :show-package-modal="showPackageModal"
                :selected-package="selectedPackage"
                @form-submitted="handlePackageFormSubmitted"
                @book-consultation="openBookingModal"
                @update:show-package-modal="showPackageModal = $event"
            />
        </div>

        <!-- Contact Section with ID for scrolling -->
        <div id="contact">
            <LandingContactSection />
        </div>
    </div>
    <GeneralFooter />

    <!-- Booking Modal -->
    <BookingModal 
        v-if="showBookingModal"
        v-model="showBookingModal" 
        theme="neutral" 
        :google-calendar-url="googleCalendarUrl" 
    />
    
    <!-- Package Selection Modal -->
    <PackageSelectionModal 
        v-model="showPackageModal"
        :selected-package="selectedPackage"
        @form-submitted="handlePackageFormSubmitted"
        @book-consultation="openBookingModal"
    />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';

// State for smooth scrolling and modals
const scrolled = ref(false);
const showBookingModal = ref(false);
const showPackageModal = ref(false);
const selectedPackage = ref('');
const googleCalendarUrl = ref('https://calendar.app.google/booking');

// Function to handle opening the booking modal
const openBookingModal = () => {
    showBookingModal.value = true;
};

// Function to open the package modal (without preselected package)
const openPackageModal = () => {
    selectedPackage.value = ''; // Reset package selection
    showPackageModal.value = true;
};

// Function to handle package form submission
const handlePackageFormSubmitted = (formData) => {
    console.log('Package form submitted:', formData);
    // Here you would typically send this data to your backend API
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
                    observer.unobserve(entry.target); // Stop observing after animation triggers
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    // Handle direct links with hash in URL (for deep linking to sections)
    if (window.location.hash) {
        // Wait for all components to mount
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

// Sample data
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
];

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
];
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