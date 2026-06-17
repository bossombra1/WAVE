<script setup>
/**
 * ValueCard — MOLÉCULE.
 * Affiche un numéro (01, 02...) + titre + description.
 * Utilisée dans ValuesGrid (4 cartes).
 */
defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
 
<template>
  <article class="value-card">
    <div class="value-card__number">{{ number }}</div>
    <h3 class="value-card__title">{{ title }}</h3>
    <p class="value-card__description">{{ description }}</p>
  </article>
</template>

<style scoped>
.value-card {
  background: var(--white);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  border-radius: 12px;
}

.value-card__number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--wave-indigo);
  line-height: 1;
}

.value-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--wave-navy);
  margin: 0;
  text-wrap: balance;
}

.value-card__description {
  font-size: 1rem;
  color: var(--ink);
  margin: 0;
  line-height: 1.6;
  text-wrap: pretty;
}
</style>
