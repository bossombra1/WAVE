<script setup>
/**
 * CareersHero — ORGANISME.
 * Section bannière avec titre, description et image équipe.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import anglePatternYellow from '@/assets/images/angle_pattern_yellow.png'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})
</script>
 
<template>
  <section class="careers-hero">
    <img 
      :src="anglePatternYellow" 
      class="careers-hero__deco" 
      alt="" 
      aria-hidden="true" 
    />
    
    <div class="container careers-hero__inner">
      <div class="careers-hero__content">
        <BaseHeading :level="1" class="careers-hero__title">
          {{ title }}
        </BaseHeading>
        <BaseText class="careers-hero__description">
          {{ description }}
        </BaseText>
      </div>
      
      <div class="careers-hero__visual">
        <img :src="image" :alt="title" class="careers-hero__image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.careers-hero {
  position: relative;
  background: var(--paper);
  overflow: hidden;
  padding: var(--space-7) 0;
}

.careers-hero__deco {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.3;
  z-index: 1;
}

.careers-hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  align-items: center;
}

.careers-hero__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.careers-hero__title {
  color: var(--wave-navy);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
}

.careers-hero__description {
  color: var(--ink);
  font-size: 1.1rem;
  line-height: 1.8;
}

.careers-hero__visual {
  display: flex;
  align-items: center;
  justify-content: center;
}

.careers-hero__image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .careers-hero__inner {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .careers-hero {
    padding: var(--space-5) 0;
  }

  .careers-hero__deco {
    opacity: 0.1;
  }
}
</style>
