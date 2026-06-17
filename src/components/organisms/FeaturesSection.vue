<script setup>
/**
 * FeaturesSection — ORGANISME.
 * Titre + grille de 6 FeatureCard (molécules) générée par v-for sur les
 * données. C'est l'illustration directe de l'écran 2 de la maquette.
 */

import BaseHeading from '@/components/atoms/BaseHeading.vue'
import FeatureCard from '@/components/molecules/FeatureCard.vue'
import { features } from '@/data/features.js'
// Importation des motifs pour la section Features
import anglePatternYellow from '@/assets/images/angle_pattern_yellow.png'
import roundPatternBlue from '@/assets/images/round_pattern_blue.png'
import roundPatternGray from '@/assets/images/round_pattern_gray.png'

// 1. Importation de tes fichiers PNG
import bankIcon from '@/assets/images/bank.png'
import bulbIcon from '@/assets/images/bulb.png'
import coinsIcon from '@/assets/images/coins.png'
import phoneIcon from '@/assets/images/phone.png'
import shieldIcon from '@/assets/images/shield.png'
import headsetIcon from '@/assets/images/headset.png'
</script>

<template>
  <section class="features">
    <img 
  :src="anglePatternYellow" 
  class="features__squiggle" 
  alt="" 
  aria-hidden="true" 
/>

<img 
  :src="roundPatternBlue" 
  class="features__fp" 
  alt="" 
  aria-hidden="true" 
/>

<img 
    :src="roundPatternGray" 
    class="features__bg-gray" 
    alt="" 
    aria-hidden="true" 
  />

    <div class="container">
      <BaseHeading :level="2" class="features__title">
        Wave c’est
      </BaseHeading>

      <div class="features__grid">
        <FeatureCard
          v-for="feature in features"
          :key="feature.id"
          :icon="feature.icon"
          :title="feature.title"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- Conteneur Principal --- */
.features {
  position: relative;
  overflow: hidden;
  background: var(--paper, #f9f9f9);
  padding-top: 96px;
  padding-bottom: 120px;
}

/* Assure que le contenu des cartes passe au-dessus de tous les motifs de fond */
.features .container {
  position: relative;
  z-index: 2;
}

.features__title {
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 800;
  margin-bottom: 56px;
  color: var(--wave-indigo, #1d1b84); /* Optionnel : pour matcher la couleur Wave */
}

/* --- Grille des fonctionnalités --- */
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* --- ÉLÉMENTS DÉCORATIFS (BACKGROUND) --- */

/* 1. La pyramide de traits jaunes (Haut Droite) */
.features__squiggle {
  position: absolute;
  top: 30px;
  right: 10px;
  width: 400px;
  height: auto;
  z-index: 1;
  pointer-events: none; 
}

/* 2. L'empreinte bleue (Bas Gauche) */
.features__fp {
  position: absolute;
  left: -40px;
  bottom: -30px;
  width: 240px;
  height: auto;
  z-index: 1;
  pointer-events: none;
}

/* 3. La grande empreinte grise (Bas Droite) */
.features__bg-gray {
  position: absolute;
  right: -80px;         
  bottom: -40px;       
  width: 580px;         
  height: auto;
  z-index: 1;
  opacity: 0.85;        
  pointer-events: none;
}

/* --- Adaptabilité Écrans (Responsive) --- */
@media (max-width: 900px) {
  .features {
    padding-top: 60px;
    padding-bottom: 80px;
  }

  .features__grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  
  .features__bg-gray {
    width: 340px;
    right: -40px;
    bottom: -20px;
  }

  .features__squiggle {
    top: 15px;
    right: 20px;
    width: 140px;
  }

  .features__fp {
    left: -20px;
    bottom: -15px;
    width: 160px;
  }
}
</style>
