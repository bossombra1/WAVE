<script setup>
/**
 * StatNumber — ATOME.
 * Permet d'afficher un grand indicateur chiffré (ex: 500K+, 1M+).
 */
defineProps({
  // Le chiffre ou texte principal à afficher en grand (ex: "500K+")
  value: {
    type: String,
    required: true
  },
  // Une couleur alternative facultative (si jamais tu veux du noir ou du cyan deep)
  color: {
    type: String,
    default: 'var(--wave-blue, #00A4E4)'
  }
})
</script>

<template>
  <span class="stat-number" :style="{ color: color }">
    {{ value }}
  </span>
</template>

<style scoped>
.stat-number {
  font-family: var(--font-sans, sans-serif);
  font-size: 3.5rem; /* Taille imposante pour les sections héro/statistiques */
  font-weight: 800;   /* Très gras pour correspondre au design de Wave */
  line-height: 1.1;
  letter-spacing: -0.02em;
  display: inline-block;
  
  /* Petite animation fluide d'apparition lors du chargement de la page */
  animation: fadeInUp 0.6s ease out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Version responsive pour les écrans de smartphones (Abidjan/Sénégal sur mobile) */
@media (max-width: 768px) {
  .stat-number {
    font-size: 2.5rem; /* On réduit un peu la taille sur mobile */
  }
}
</style>