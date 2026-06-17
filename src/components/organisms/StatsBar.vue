<script setup>
/**
 * StatsBar — ORGANISME.
 * Une barre de statistiques autonome et isolée.
 * Idéale pour être placée entre deux grandes sections pour rompre la monotonie visuelle.
 */
import StatItem from '@/components/molecules/StatItem.vue'

defineProps({
  // Attend le tableau de statistiques (ex: businessStats)
  stats: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="stats-bar">
    <div class="stats-bar__container container">
      <div class="stats-bar__grid">
        <StatItem 
          v-for="item in stats" 
          :key="item.value" 
          :stat="item"
          class="stats-bar__item"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.stats-bar {
  background-color: #ffffff;
  padding-top: 56px;
  padding-bottom: 56px;
  width: 100%;
}

.stats-bar__container {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.stats-bar__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes de tailles égales */
  gap: 32px;
  width: 100%;
}

/* Ajout d'une ligne de séparation verticale subtile entre chaque statistique */
.stats-bar__item {
  position: relative;
}

.stats-bar__item:not(:last-child)::after {
  content: "";
  position: absolute;
  right: -16px;
  top: 20%;
  height: 60%;
  width: 1px;
  background-color: #e0e0e0;
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .stats-bar__grid {
    gap: 16px;
  }
  .stats-bar__item:not(:last-child)::after {
    right: -8px;
  }
}

@media (max-width: 768px) {
  .stats-bar {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  /* Sur smartphone, on empile les statistiques verticalement */
  .stats-bar__grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  /* On enlève les séparateurs verticaux pour mettre des séparateurs horizontaux */
  .stats-bar__item:not(:last-child)::after {
    display: none;
  }
  
  .stats-bar__item:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 16px;
  }
}
</style>