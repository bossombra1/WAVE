<script setup>
/**
 * BusinessLayout — GABARIT / TEMPLATE.
 * Gère la structure globale des pages dédiées à l'offre B2B de Wave.
 * Inclut la barre d'annonce pro, la Navbar et le Footer.
 */
// import TheAnnouncementBar from '@/components/organisms/TheAnnouncementBar.vue'
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'

// On déclare que ce Layout transmet l'événement de navigation au composant parent (App.vue)
defineEmits(['navigate'])
</script>

<template>
  <div class="business-layout">
    <TheAnnouncementBar />
    
    <TheNavbar @navigate="$emit('navigate', $event)" />
    
    <main class="business-layout__main">
      <slot />
    </main>
    
    <TheFooter @navigate="$emit('navigate', $event)" />
  </div>
</template>

<style scoped>
.business-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Force le footer à rester en bas si la page a peu de contenu */
  background-color: #ffffff;
}

.business-layout__main {
  flex-grow: 1; /* Permet au contenu principal de prendre tout l'espace disponible */
}
</style>