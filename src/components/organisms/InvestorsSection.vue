<script setup>
/**
 * InvestorsSection — ORGANISME.
 * Gère de manière totalement autonome l'affichage des logos des investisseurs.
 */
import PartnerItem from '@/components/molecules/PartnerItem.vue'

// Importation exclusive des données depuis about.js
import { aboutData } from '@/data/about.js'
const investors = aboutData.investors
</script>

<template>
  <section class="investors-section">
    <div class="investors-container">
      
      <h2 class="investors-title">Soutenu par des <br /> investisseurs réputés</h2>

      <div class="logos-grid">
        <PartnerItem 
          v-for="item in investors" 
          :key="item.name" 
          :partner="item"
          class="logo-item"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.investors-section {
  background-color: #ffffff;
  padding-top: 80px;
  padding-bottom: 90px;
}

.investors-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}

.investors-title {
  color: #1d1d4d;
  font-size: 32px;
  font-weight: 800;
  text-align: center;
  line-height: 1.25;
  letter-spacing: -0.01em;
  max-width: 600px;
  margin: 0;
}

@media (min-width: 768px) {
  .investors-title {
    font-size: 40px;
  }
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  gap: 40px 48px;
  width: 100%;
  max-width: 960px;
}

@media (min-width: 640px) {
  .logos-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 64px;
  }
}

.logo-item :deep(.partner-logo__image) {
  max-height: 40px;
  object-fit: contain;
  filter: none !important;
}

.logo-item :deep(.partner-logo) {
  opacity: 1 !important;
}
</style>