<script setup>
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import wavePattern from '@/assets/images/round_pattern_light_blue.svg'
</script>

<template>
  <section class="banner-section">
    <div class="content-container">
      <BaseHeading level="2" class="banner-title">
        Prêt à changer le monde ?
      </BaseHeading>

      <div>
        <BaseButton class="banner-button">
          PARCOURIR NOS OFFRES
        </BaseButton>
      </div>
    </div>

    <div class="pattern-container">
      <img :src="wavePattern" alt="" class="pattern-image" />
    </div>
  </section>
</template>

<style scoped>
.banner-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #3D3CE8;
  min-height: 350px; /* Hauteur ajustée pour la bannière */
  display: flex;
  align-items: center; /* Centrage vertical */
}

.content-container {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Marges ajustées : haut/bas 40px, droite 10%, gauche 15% pour décaler le texte */
  padding: 40px 10% 40px 15%; 
  width: 100%;
}

.banner-title {
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #ffffff;
  font-size: 2.8rem;
  max-width: 550px;
}

.banner-button {
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 9999px;
  transition: all 150ms ease;
  background-color: #1dc2ec;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.12em;
  padding: 16px 32px; /* Padding élargi pour l'effet bouton allongé */
  border: none;
  cursor: pointer;
}

.banner-button:active {
  transform: scale(0.95);
}

/* Fix du motif pour qu'il soit à droite comme sur la capture */
.pattern-container {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  bottom: 0;
  right: 0; /* Ancrage à droite */
  width: 50%; 
  max-width: 550px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.pattern-image {
  width: 100%;
  height: auto;
  /* Décale le motif légèrement vers le bas et la droite pour qu'il soit "coupé" */
  transform: translate(15%, 20%); 
  object-fit: contain;
  object-position: bottom right;
}

/* Responsivité basique pour les écrans plus petits */
@media (max-width: 768px) {
  .content-container {
    padding: 40px 5%;
  }
  .banner-title {
    font-size: 2rem;
  }
}
</style>