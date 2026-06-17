<script setup>
import { ref, onMounted, onUnmounted } from 'vue' // <-- Ajout de onMounted et onUnmounted
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import TestimonialCard from '@/components/molecules/TestimonialCard.vue'
import { testimonials } from '@/data/testimonials.js'
import anglePatternOrange from '@/assets/images/angle_pattern_orange.png'

const current = ref(0)
let timer = null 

// Fonction pour passer au témoignage suivant
const nextTestimonial = () => {
  if (current.value < testimonials.length - 1) {
    current.value++
  } else {
    current.value = 0 // Revient au premier témoignage si on est à la fin
  }
}

// Lancement de l'auto-défilement quand le composant est affiché à l'écran
onMounted(() => {
  timer = setInterval(nextTestimonial, 3000) // Change toutes les 3000ms (3 secondes)
})

// Nettoyage indispensable du timer quand on quitte la page pour éviter les fuites de mémoire
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <section class="testimonials">
    <img 
  :src="anglePatternOrange" 
  class="testimonials__deco" 
  alt="" 
  aria-hidden="true" 
/>

    <div class="container">
      <BaseHeading :level="2" class="testimonials__title">
       Témoignages de nos clients
      </BaseHeading>

      <div class="testimonials__stage">
        <TestimonialCard
          :name="testimonials[current].name"
          :quote="testimonials[current].quote"
          :photo="testimonials[current].photo"
        />
      </div>

      <div class="testimonials__dots">
        <button
          v-for="(t, i) in testimonials"
          :key="t.id"
          class="dot"
          :class="{ 'is-active': i === current }"
          :aria-label="`Témoignage ${i + 1}`"
          @click="current = i"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- Structure Principale --- */
.testimonials {
  position: relative;
  background: var(--wave-maroon, #8c2b1f); 
  padding-top: 80px;
  padding-bottom: 72px;
  overflow: hidden;
}


.testimonials .container {
  position: relative;
  z-index: 2;
}


.testimonials__title {
  text-align: center;
  font-size: clamp(28px, 3.4vw, 44px);
  margin-bottom: 64px;
}


.testimonials :deep(.base-heading) {
  color: #ffffff;
}


.testimonials__stage {
  max-width: 980px;
  margin-inline: auto;
}


.testimonials__dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 36px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.4);
  padding: 0;
  cursor: pointer;
  transition: background 0.2s ease;
}

.dot.is-active {
  background: var(--wave-orange, #FBDE87);
}


.testimonials__deco {
  position: absolute;
  top: -50px;               
  right: 20px;         
  width: 700px;         
  height: auto;          
  z-index: 1;            
  pointer-events: none;  
}


@media (max-width: 900px) {
  .testimonials {
    padding-top: 60px;
    padding-bottom: 56px;
  }

  .testimonials__title {
    margin-bottom: 40px;
  }

  .testimonials__deco {
    width: 180px;        
    top: 0;
    right: -10px;
  }
}
</style>