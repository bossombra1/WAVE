<script setup>
/**
 * HomePage — PAGE.
 * Point d'entrée principal pour l'offre grand public (Personal).
 * Enveloppé dans DefaultLayout qui contient la bande orange et la Navbar classique.
 */
import DefaultLayout from '@/components/templates/DefaultLayout.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import FeaturesSection from '@/components/organisms/FeaturesSection.vue'
import TestimonialsSection from '@/components/organisms/TestimonialsSection.vue'

// On déclare l'événement de navigation pour qu'il remonte jusqu'à App.vue
defineEmits(['navigate'])
</script>

<template>
  <DefaultLayout @navigate="$emit('navigate', $event)">
    
    <HeroSection />
    
    <FeaturesSection />
    
    <TestimonialsSection />
    
  </DefaultLayout>
</template>

<style scoped>
/* Les styles de marges et de containers sont gérés directement dans les organismes */
</style>