<script setup>
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import { aboutData } from '@/data/about.js'

//  Importations des deux images nécessaires
import InfrastructureImage from '@/assets/images/man-scanning-agent_hued0fdf3db7592fa860b8c5e72bf36b65_8334351_1000x666_resize_q75_box.b46d31a507d9c6be798c67b1a675191f0d3aa1db21f71393583ddab483a27b6e.jpg'
import whitePatternImage from '@/assets/images/round_pattern_transparent_white.png'

const { infrastructure } = aboutData
</script>

<template>
  <section 
    class="infra-section" 
    :style="{ backgroundImage: `url(${whitePatternImage})` }"
  >
    <div class="infra-container">
      <div class="infra-grid">
        
        <div class="infra-visual-block">
          <div class="image-wrapper">
            <img 
              :src="InfrastructureImage" 
              alt="Infrastructure financière Wave" 
              class="main-image"
            />
            
            <div class="caption-badge">
              <p class="caption-text">
                {{ infrastructure.caption }}
              </p>
            </div>
          </div>
        </div>

        <div class="infra-text-block">
          <BaseHeading level="2" class="infra-title">
            {{ infrastructure.title }}
          </BaseHeading>
          
          <div class="infra-paragraphs">
            <BaseText 
              v-for="(paragraph, index) in infrastructure.paragraphs" 
              :key="index"
              class="infra-p"
            >
              {{ paragraph }}
            </BaseText>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Style global de la section avec le fond bleu officiel */
.infra-section {
  width: 100%;
  background-color: #E8F7FC;
  /*  Le motif blanc transparent se positionne en bas */
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 0;
  display: flex;
  align-items: center;
}

.infra-container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

.infra-grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 48px;
}

@media (min-width: 1024px) {
  .infra-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
}

/* Positionnement de l'image (5 colonnes sur 12 à gauche) */
.infra-visual-block {
  position: relative;
  order: 2;
}
@media (min-width: 1024px) {
  .infra-visual-block {
    grid-column: span 5 / span 5;
    order: 1;
  }
}

.image-wrapper {
  position: relative;
  max-width: 440px;
  margin: 0 auto;
}
@media (min-width: 1024px) {
  .image-wrapper {
    max-width: none;
  }
}

.main-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Encadré blanc aux bords droits stricts */
.caption-badge {
  position: absolute;
  bottom: -24px;
  right: -24px;
  z-index: 10;
  background-color: #ffffff;
  padding: 24px 20px;
  max-width: 320px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
  border: 1px solid #f3f4f6;
}

.caption-text {
  font-size: 14px;
  font-weight: 800;
  line-height: 1.4;
  color: #1d1d4d;
  margin: 0;
  text-align: left;
}

/* Positionnement du texte (7 colonnes sur 12 à droite) */
.infra-text-block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  order: 1;
}
@media (min-width: 1024px) {
  .infra-text-block {
    grid-column: span 7 / span 7;
    order: 2;
    padding-left: 64px;
  }
}

.infra-title {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.15;
  color: #1d1d4d;
  letter-spacing: -0.01em;
}
@media (min-width: 768px) {
  .infra-title {
    font-size: 42px;
  }
}

.infra-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.infra-p {
  font-size: 16px;
  line-height: 1.65;
  color: #52627a;
}
@media (min-width: 768px) {
  .infra-p {
    font-size: 18px;
  }
}
</style>