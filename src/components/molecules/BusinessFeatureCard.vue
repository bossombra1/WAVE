<script setup>
/**
 * BusinessFeatureCard — MOLÉCULE.
 * Carte de service pour la grille Wave Business.
 * Combine un badge, une icône, un titre (H3) et une description.
 */
import FeatureBadge from '@/components/atoms/FeatureBadge.vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

defineProps({
  // Attend un objet complet représentant un service/feature pro
  feature: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="business-card">
    <div class="business-card__header">
      <div class="business-card__icon-wrapper">
        <BaseIcon :name="feature.icon" class="business-card__icon" />
      </div>

      <FeatureBadge 
        v-if="feature.tag" 
        :text="feature.tag" 
        variant="cyan" 
        class="business-card__badge" 
      />
    </div>

    <BaseHeading tag="h3" class="business-card__title">
      {{ feature.title }}
    </BaseHeading>

    <BaseText class="business-card__description">
      {{ feature.description }}
    </BaseText>
    
    <a v-if="feature.link" :href="feature.link" class="business-card__link">
      En savoir plus →
    </a>
  </div>
</template>

<style scoped>
.business-card {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Effet de survol élégant (léger soulèvement et ombre douce) */
.business-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  border-color: rgba(0, 164, 228, 0.2); /* Légère lueur bleu Wave */
}

.business-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
}

.business-card__icon-wrapper {
  width: 48px;
  height: 48px;
  background-color: var(--wave-blue-light, #f0f9ff);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wave-blue, #00A4E4);
}

.business-card__title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--black, #111111);
  margin-bottom: 12px;
}

.business-card__description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #666666;
  flex-grow: 1; /* Pousse le lien vers le bas si les descriptions varient en taille */
}

.business-card__link {
  margin-top: 20px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--wave-blue, #00A4E4);
  text-decoration: none;
  transition: color 0.2s ease;
}

.business-card__link:hover {
  color: var(--wave-cyan-deep, #1DC0D1);
}

/* Adaptations mobiles */
@media (max-width: 768px) {
  .business-card {
    padding: 24px;
  }
  .business-card__title {
    font-size: 1.1rem;
  }
}
</style>