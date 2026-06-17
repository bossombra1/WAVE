<script setup>
/**
 * WorkAtWaveSection — ORGANISME.
 * Section culture : texte + carrousel de photos avec autoplay 5s.
 */
import { ref, onMounted, onUnmounted } from 'vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
})
 
const currentImageIndex = ref(0)
let autoplayTimer = null

const goToNext = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const goToPrev = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

const goToImage = (index) => {
  currentImageIndex.value = index
  // Réinitialiser le timer lors d'un clic manuel
  clearInterval(autoplayTimer)
  startAutoplay()
}

const startAutoplay = () => {
  autoplayTimer = setInterval(goToNext, 5000) // 5 secondes
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearInterval(autoplayTimer)
})
</script>

<template>
  <section class="work-at-wave">
    <div class="container">
      <div class="work-at-wave__content">
        <BaseHeading :level="2" class="work-at-wave__title">
          {{ title }}
        </BaseHeading>
        <BaseText class="work-at-wave__description">
          {{ description }}
        </BaseText>
      </div>

      <div class="work-at-wave__carousel">
        <div class="carousel__stage">
          <img 
            :src="images[currentImageIndex]" 
            :alt="`Équipe Wave ${currentImageIndex + 1}`"
            class="carousel__image"
          />
        </div>

        <div class="carousel__controls">
          <button 
            class="carousel__button carousel__button--prev"
            @click="goToPrev"
            aria-label="Image précédente"
          >
            ‹
          </button>
          <button 
            class="carousel__button carousel__button--next"
            @click="goToNext"
            aria-label="Image suivante"
          >
            ›
          </button>
        </div>

        <div class="carousel__dots">
          <button
            v-for="(_, index) in images"
            :key="index"
            class="dot"
            :class="{ 'is-active': index === currentImageIndex }"
            :aria-label="`Image ${index + 1}`"
            @click="goToImage(index)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work-at-wave {
  background: var(--white);
  padding: var(--space-7) 0;
}

.work-at-wave__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 700px;
  margin-bottom: var(--space-6);
}

.work-at-wave__title {
  color: var(--wave-navy);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  margin: 0;
}

.work-at-wave__description {
  color: var(--ink);
  font-size: 1rem;
  line-height: 1.8;
}

.work-at-wave__carousel {
  position: relative;
  max-width: 900px;
}

.carousel__stage {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: var(--paper);
  aspect-ratio: 16 / 9;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0.8;
  }
  to {
    opacity: 1;
  }
}

.carousel__controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 var(--space-3);
  pointer-events: none;
  z-index: 10;
}

.carousel__button {
  pointer-events: all;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  font-size: 1.5rem;
  color: var(--wave-navy);
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel__button:hover {
  background: var(--white);
  transform: scale(1.1);
}

.carousel__dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: var(--space-4);
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: none;
  background: rgba(20, 16, 75, 0.2);
  padding: 0;
  cursor: pointer;
  transition: background 0.2s ease;
}

.dot.is-active {
  background: var(--wave-indigo);
}

@media (max-width: 768px) {
  .work-at-wave {
    padding: var(--space-5) 0;
  }

  .carousel__button {
    width: 36px;
    height: 36px;
    font-size: 1.25rem;
  }

  .carousel__controls {
    padding: 0 var(--space-2);
  }
}
</style>
