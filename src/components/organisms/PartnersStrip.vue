<script setup>
/**
 * PartnersStrip — ORGANISME.
 * Gère l'affichage des logos en couleur et des statistiques associées.
 */
import PartnerItem from '@/components/molecules/PartnerItem.vue'
import StatItem from '@/components/molecules/StatItem.vue'
import { partnerStats } from '@/data/partners.js'

defineProps({
  partners: {
    type: Array,
    required: true
  },
  //  AJOUT UNIQUEMENT DE LA PROP POUR LE TITRE DYNAMIQUE
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <section class="partners-strip">
    <div class="partners-strip__container container">
      
      <h3 v-if="title" class="partners-strip__title">{{ title }}</h3>

      <div class="partners-strip__grid">
        <PartnerItem 
          v-for="item in partners" 
          :key="item.name" 
          :partner="item"
          class="partners-strip__item"
        />
      </div>

      <div class="partners-strip__stats">
        <StatItem 
          v-for="stat in partnerStats" 
          :key="stat.value" 
          :stat="stat"
          class="partners-strip__stat-card"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.partners-strip {
  background-color: #ffffff; /* Fond blanc pur comme sur l'image */
  padding-top: 60px;
  padding-bottom: 80px;
}

.partners-strip__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
}

/*  AJOUT UNIQUEMENT DU STYLE POUR LE TITRE SANS TOUCHER AU RESTE */
.partners-strip__title {
  color: #9ca3af; /* Couleur grise text-gray-400 */
  font-size: 0.75rem; /* text-xs */
  font-weight: 700; /* font-bold */
  text-transform: uppercase; /* uppercase */
  letter-spacing: 0.15em; /* tracking-widest */
  margin-bottom: -40px; /* Réduit l'écart avec les logos pour suivre le gap global */
  text-align: center;
}

/* Grille flexible pour répartir les logos */
.partners-strip__grid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px 64px; /* 40px d'espace vertical, 64px horizontal */
  width: 100%;
  max-width: 900px;
}


.partners-strip__item :deep(.partner-logo) {
  opacity: 1 !important;
}

.partners-strip__item :deep(.partner-logo__image) {
  filter: none !important; /* Annule le grayscale s'il restait activé */
}

/* Alignement de la grille de statistiques du bas */
.partners-strip__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  width: 100%;
  max-width: 1000px;
}

/* Style des compteurs alignés à gauche */
.partners-strip__stats :deep(.stat-item) {
  align-items: flex-start;
  text-align: left;
  padding: 0;
}

.partners-strip__stats :deep(.stat-item:hover) {
  transform: none;
}

.partners-strip__stats :deep(.stat-item__Figure) {
  font-size: 2.75rem;
  color: #111111; /* Noir pur */
  font-weight: 800;
}

.partners-strip__stats :deep(.stat-item__label) {
  color: #000000;
  font-size: 1.25rem;
  max-width: 240px;
  margin-top: 8px;
  line-height: 1.4;
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .partners-strip__grid {
    gap: 32px 48px;
  }
  .partners-strip__stats {
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .partners-strip {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .partners-strip__container {
    gap: 48px;
  }
  .partners-strip__grid {
    gap: 24px;
  }
  .partners-strip__stats {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>