<script setup>
/**
 * BusinessFeaturesSection — ORGANISME.
 * Boucle dynamiquement sur toutes les fonctionnalités de Wave Business.
 * Version corrigée : Rétablissement du bon sens des blocs (non inversés) et en-têtes fidèles.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="business-features">
    
    <div 
      v-for="item in features" 
      :key="item.id"
      :id="item.id"
      class="feature-section-row"
      :class="{ 'feature-section-row--dark-bg': item.isDarkBg }"
    >
      <div class="feature-row container">
        
        <div 
          class="feature-row__content"
          :style="{ order: item.imageRight ? 1 : 2 }"
        >
          <div class="feature-row__badge-wrapper">
            <img :src="item.badgeIcon" alt="" class="feature-row__badge-icon" aria-hidden="true" />
            <span class="feature-row__badge-text">{{ item.badgeText }}</span>
          </div>

          <BaseHeading tag="h2" class="feature-row__title">
            {{ item.title }}
          </BaseHeading>

          <BaseText class="feature-row__description">
            {{ item.description }}
          </BaseText>
        </div>

        <div 
          class="feature-row__visual"
          :style="{ order: item.imageRight ? 2 : 1 }"
        >
          <div v-if="item.patternImg" class="feature-row__pattern-wrapper" :class="item.patternClass" aria-hidden="true">
            <img :src="item.patternImg" alt="" class="feature-row__pattern-img" />
          </div>
          
          <div class="feature-row__image-container">
            <img 
              :src="item.visualImg" 
              :alt="item.title" 
              class="feature-row__image" 
            />
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<!-- Remplace uniquement le <style scoped> dans BusinessFeaturesSection.vue -->
<style scoped>
.business-features {
  width: 100%;
}

.feature-section-row {
  background-color: #ffffff;
  padding-top: 110px;
  padding-bottom: 110px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.feature-section-row--dark-bg {
  background-color: #F4F6F8;
}

.feature-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  width: 100%;
}

/* Bloc Texte */
.feature-row__content {
  flex: 1;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  z-index: 3;
}

.feature-row__badge-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.feature-row__badge-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.feature-row__badge-text {
  font-size: 1.6rem;
  font-weight: 800;
  color: #111111;
}

.feature-row__title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: #111111;
  letter-spacing: -0.025em;
  margin-bottom: 28px;
}

.feature-row__description {
  font-size: 1.3rem;
  line-height: 1.55;
  color: #333333;
}

/* Zone Visuelle */
.feature-row__visual {
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
}

.feature-row__image-container {
  position: relative;
  z-index: 2;
  width: 100%;
}

/* ════════════════════════════════════════
   STYLES PAR IMAGE — modifier ici
   chaque image indépendamment
════════════════════════════════════════ */

/* Feature 1 : Paiements en masse — portail web (SVG large) */
.feature-row__image.img--bulkpay {
  width: 100%;
  max-width: 640px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
}

/* Feature 2 : L'appli Business — photo merchantscan (format portrait) */
.feature-row__image.img--merchantscan {
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
  object-fit: cover;
}

/* Feature 3 : Collecte — illustration */
.feature-row__image.img--collections {
  width: 100%;
  max-width: 580px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

/* Feature 4 : API Checkout — maquette téléphone */
.feature-row__image.img--checkout {
  /* 1. On lui redonne une taille normale adaptée à la maquette */
  width: 45%; 
  max-width: 320px; /* Évite qu'il devienne trop grand sur écran géant */
  height: auto;
  
  /* 2. On retire les anciennes propriétés qui écrasaient le style global */
  border-radius: 0; 
  box-shadow: none;

  /* 3. Déplacement et positionnement */
  position: absolute; /* Permet de le faire flotter par-dessus le motif violet */
  top: 50%;
  right: auto; left: 25%;
  transform: translateY(-50%); /* Centre verticalement le téléphone */
  
  /* --- OPTIONS DE DÉPLACEMENT HORIZONTAL --- */
  
  /* Option A : Pour le CENTRER parfaitement dans la zone de droite */
  
 /*  transform: translate(-50%, -50%) */;
  
}

/* --- DECORATIONS D'ARRIÈRE-PLAN --- */
.feature-row__pattern-wrapper {
  position: absolute;
  pointer-events: none;
  z-index: 1;
  display: flex;
  width: 100%;
  height: 100%;
}

.feature-row__pattern-img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.pattern-lilac-right {
  right: -20%;
  bottom: -45%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
}

.pattern-blue-left {
  left: -25%;
  bottom: -35%;
  width: 90%;
  justify-content: flex-start;
  align-items: flex-end;
}

.pattern-lilac-left {
  left: -10%;
  bottom: 10%;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
}

/* --- RESPONSIVE --- */
@media (max-width: 1024px) {
  .feature-row {
    flex-direction: column !important;
    gap: 48px;
  }

  .feature-row__content {
    order: 1 !important;
    max-width: 100%;
  }

  .feature-row__visual {
    order: 2 !important;
  }

  .feature-row__title {
    font-size: 2.6rem;
  }

  .pattern-lilac-right,
  .pattern-blue-left,
  .pattern-lilac-left {
    width: 65%;
    bottom: -15%;
  }

  /* Ajustements responsive par image */
  .feature-row__image.img--merchantscan { max-width: 100%; }
  .feature-row__image.img--checkout     { max-width: 260px; }
}

@media (max-width: 768px) {
  .feature-section-row {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .feature-row__title {
    font-size: 2.1rem;
    margin-bottom: 20px;
  }

  .feature-row__description {
    font-size: 1.15rem;
  }

  .feature-row__image.img--checkout { max-width: 220px; }
}
</style>