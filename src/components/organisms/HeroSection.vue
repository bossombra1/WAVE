<script setup>
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import StoreButtons from '@/components/molecules/StoreButtons.vue'
import PhoneMockup from '@/components/organisms/PhoneMockup.vue'

// Importation des assets d'images pour les motifs de fond
import anglePatternSky from '@/assets/images/angle_pattern_sky.png'
import roundPatternIndigo from '@/assets/images/round_pattern_indigo.png'
</script>

<template>
  <section class="hero">
    <img 
      :src="anglePatternSky" 
      class="hero__lines" 
      alt="" 
      aria-hidden="true" 
    />

    <img 
      :src="roundPatternIndigo" 
      class="hero__pattern" 
      alt="" 
      aria-hidden="true" 
    />

    <div class="hero__inner container">
      <div class="hero__content">
        <BaseHeading :level="1" class="hero__title">
          Votre allié<br /> busindjzhhh
        </BaseHeading>
        <BaseText class="hero__subtitle">
          Déposez et retirez gratuitement.<br />Payez vos factures sans frais.<br />Transferez de l’argent pour 1%.
        </BaseText>
        <StoreButtons class="hero__stores" />
      </div>  

      <div class="hero__visual">
        <PhoneMockup />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background-color: var(--wave-cyan, #1cb0f6);
  overflow: hidden;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

.hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 90px;
  padding-bottom: 90px;
}

/* --- Bloc Texte (Gauche) --- */
.hero__content {
  display: flex;
  flex-direction: column;
}

.hero__title {
  color: #ffffff;
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0;
}

.hero__subtitle {
  color: #ffffff;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  line-height: 1.45;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 0;
  opacity: 0.95;
}

.hero__stores {
  margin-top: 40px;
}

/* --- Bloc Visuel (Droite) --- */
.hero__visual {
  display: flex;
  justify-content: center;
  align-self: flex-end;
}

.hero__visual :deep(.phone) {
  margin-bottom: -180px; 
}

/* --- Intégration des Vrais Patterns (Images) --- */

/* Lignes de motif en haut à droite */
.hero__lines {
  position: absolute;
  top: 200px; /* Ajuste la position verticale selon le rendu de ton image */
  right: 0; /* Ajuste la position horizontale pour que les lignes sortent légèrement du cadre */
  width: 510px; /* Ajuste la taille selon le rendu de ton image */
  height: auto;
  z-index: 1;
  pointer-events: none;
}

/* Empreinte/Vagues indigo en arrière-plan */
.hero__pattern {
  position: absolute;
  left: 40%;
  bottom: -10px; /* Ajuste la hauteur pour cacher le bas de l'image si nécessaire */
  width: 450px; /* Taille ajustable selon l'image d'origine */
  height: auto;
  z-index: 1;
  pointer-events: none;
}

/* --- Responsive design --- */
@media (max-width: 900px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 60px;
    padding-bottom: 0;
  }

  .hero__content {
    align-items: center;
  }

  .hero__visual {
    margin-top: 40px;
  }

  .hero__visual :deep(.phone) {
    margin-bottom: -50px;
  }

  .hero__pattern {
    left: 50%;
    transform: translateX(-50%);
    bottom: -150px;
    width: 350px;
  }

  .hero__lines {
    width: 180px;
  }
}
</style>