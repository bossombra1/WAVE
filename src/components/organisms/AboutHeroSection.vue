<script setup>
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import { aboutData } from '@/data/about.js'

// Importation directe de l'image du motif de lignes bleues
import supportQrImage from '@/assets/images/support-qr.png'

// Extraction des données spécifiques au Hero
const { hero } = aboutData
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-grid">
        
        <div class="hero-text-block">
          <BaseHeading 
            level="1" 
            class="hero-title" 
            v-html="hero.title" 
          />
          
         <BaseText 
            class="hero-description" 
            v-html="hero.description" 
          />
        </div>

        <div class="hero-visual-block">
          <div class="collage-container">
            
            <div class="pattern-box">
              <img 
                :src="supportQrImage" 
                alt="Support Graphique Wave" 
                class="pattern-img"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
  padding: 64px 0;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 96px 0;
  }
}

.hero-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (min-width: 768px) {
  .hero-container {
    padding-left: 48px;
    padding-right: 48px;
  }
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 48px;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
}

/* --- BLOC TEXTE (Prend 7 colonnes à gauche) --- */
.hero-text-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

@media (min-width: 1024px) {
  .hero-text-block {
    grid-column: span 7 / span 7;
  }
}

.hero-title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.15;
  color: #1d1d4d; /* Bleu nuit officiel */
  letter-spacing: -0.02em;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 48px;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 40px;
  }
}

.hero-description {
  max-width: 576px;
  font-size: 18px;
  line-height: 1.625;
  color: #6b7280; /* Gris intermédiaire adouci */
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 20px;
  }
}

/* --- BLOC VISUEL (Prend 5 colonnes à droite) --- */
.hero-visual-block {
  position: relative;
  margin-top: 32px;
}

@media (min-width: 1024px) {
  .hero-visual-block {
    grid-column: span 5 / span 5;
    margin-top: 0;
  }
}

.collage-container {
  position: relative;
  margin: 0 auto;
  display: flex;
  height: 420px; /*  Corrigé pour laisser la place à l'image */
  width: 100%;
  max-width: 450px;
  align-items: center;
  justify-content: center;
}

/* Style de base pour les blocs d'images (bords arrondis Wave) */
.img-wrapper {
  position: absolute;
  overflow: hidden;
  border-radius: 16px;
}

.collage-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Grande image en haut à droite */
.merchant-box {
  right: 0;
  top: 0;
  z-index: 10;
  height: 790px;
  width: 740px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* Petite image de la carte en bas à gauche */
.card-box {
  bottom: 40px;
  left: 0;
  z-index: 20;
  height: 770px;
  width: 770px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/*  TAILLE DE TON UNIQUE IMAGE AUGMENTÉE ICI */
.pattern-box {
  position: absolute;
  bottom: 9px;
  right: 50px;
  z-index: 30;
  height: 480px; /*  Augmenté (était 150px) */
  width: 420px;  /*  Augmenté (était 180px) */
  opacity: 0.9;
  pointer-events: none;
}

.pattern-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>