<script setup>
/**
 * ValuesGrid — ORGANISME.
 * Grille 2x2 de ValueCard (molécules).
 * Responsive: 2 colonnes sur desktop, 1 colonne sur mobile (<768px).
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import ValueCard from '@/components/molecules/ValueCard.vue'
import anglePatternGreen from '@/assets/images/angle_pattern_green_down.png'

defineProps({
  values: {
    type: Array,
    required: true
  }
})
</script>
 
<template>
  <section class="values-grid">
    <img 
      :src="anglePatternGreen" 
      class="values-grid__deco" 
      alt="" 
      aria-hidden="true" 
    />

    <div class="container">
      <BaseHeading :level="2" class="values-grid__title">
        Nos valeurs
      </BaseHeading>

      <div class="values-grid__grid">
        <ValueCard
          v-for="value in values"
          :key="value.number"
          :number="value.number"
          :title="value.title"
          :description="value.description"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.values-grid {
  position: relative;
  background: var(--paper);
  padding: var(--space-7) 0;
  overflow: hidden;
}

.values-grid__deco {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  z-index: 1;
}

.values-grid .container {
  position: relative;
  z-index: 2;
}

.values-grid__title {
  color: var(--wave-navy);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  margin: 0 0 var(--space-6) 0;
  text-align: center;
}

.values-grid__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
}

@media (max-width: 768px) {
  .values-grid {
    padding: var(--space-5) 0;
  }

  .values-grid__grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .values-grid__deco {
    opacity: 0.1;
  }
}
</style>
