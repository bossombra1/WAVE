<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: 'Membre de l\'équipe' }
})
</script>
 
<template>
  <div class="avatar-wrapper">
    <img 
      :src="src" 
      :alt="alt" 
      class="avatar-img"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.avatar-wrapper {
  position: relative;
  width: 100%;
  /* Conserve un format carré parfait basé sur la largeur de la colonne */
  /* aspect-ratio: 1 / 1;  */
  overflow: hidden;
  border-radius: 110px; /* Coins très légèrement arrondis style Wave */
  background-color: #f3f4f6;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

/* Effet de zoom fluide au survol de la carte parente */
:deep(.group:hover) .avatar-img {
  transform: scale(1.04);
}
</style>