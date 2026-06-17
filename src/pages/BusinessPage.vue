<script setup>
/**
 * BusinessPage — PAGE.
 * Point d'entrée principal pour l'offre Wave Business (B2B).
 * Assemble le layout général, les sections de contenu et y injecte les données.
 */
import BusinessLayout from '@/components/templates/BusinessLayout.vue'
import BusinessHeroSection from '@/components/organisms/BusinessHeroSection.vue'
import PartnersStrip from '@/components/organisms/PartnersStrip.vue'
import BusinessFeaturesSection from '@/components/organisms/BusinessFeaturesSection.vue'
import BusinessCtaSection from '@/components/organisms/BusinessCtaSection.vue'

// Importation de tous les fichiers de données structurés précédemment
import { businessStats } from '@/data/stats.js'
import { businessPartners } from '@/data/partners.js'
import { businessFeatures } from '@/data/businessFeatures.js'

// Déclaration de l'événement pour la navigation dynamique (retransmis à App.vue)
defineEmits(['navigate'])
</script>

<template>
  <BusinessLayout @navigate="$emit('navigate', $event)">
    
    <BusinessHeroSection :stats="businessStats" />
    
    <PartnersStrip :partners="businessPartners" />
    
    <BusinessFeaturesSection :features="businessFeatures" />
    
    <BusinessCtaSection />

  </BusinessLayout>
</template>

<style scoped>
/* La page principale n'a pas besoin de styles lourds ici, 
  car l'Atomic Design délègue toute la mise en page (padding, container, grid) 
  directement aux organismes et aux molécules correspondantes.
*/
</style>