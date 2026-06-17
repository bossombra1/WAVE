<script setup>
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import wavePattern from '@/assets/images/round_pattern_light_blue.svg'

defineEmits(['navigate'])
</script>

<template>
  <section class="banner-section">
    <div class="content-container">
      <BaseHeading level="2" class="banner-title">
        Prêt à changer le monde ?
      </BaseHeading>
      <div>
        <BaseButton @click="$emit('navigate', 'careers')" class="banner-button">
          PARCOURIR NOS OFFRES
        </BaseButton>
      </div>
    </div>

    <div class="pattern-container">
      <img :src="wavePattern" alt="" class="pattern-image" />
    </div>
  </section>
</template>

<style scoped>
/* ── Section principale ── */
.banner-section {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #3D3CE8;
  min-height: 380px;
  display: flex;
  align-items: center;
}

/* ── Contenu texte + bouton ── */
.content-container {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 10% 60px 8%;
  width: 100%;
  max-width: 680px; /* empêche le texte d'aller sous le motif */
}

/* ── Titre ── */
.banner-title {
  font-weight: 900;
  line-height: 1.08;
  margin-bottom: 2rem;
  color: #ffffff;
  font-size: clamp(2rem, 4vw, 3.2rem); /* taille fluide */
  letter-spacing: -0.02em;
  max-width: 520px;
}

/* ── Bouton ── */
.banner-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 9999px;
  background-color: #1dc2ec;
  color: #ffffff;
  font-size: 13px;
  letter-spacing: 0.13em;
  padding: 16px 36px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(29, 194, 236, 0.4); /* halo bleu sous le bouton */
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
}

.banner-button:hover {
  background-color: #19b1d8;
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(29, 194, 236, 0.5);
}

.banner-button:active {
  transform: scale(0.97);
  box-shadow: 0 2px 10px rgba(29, 194, 236, 0.3);
}

/* ── Motif SVG ── */
.pattern-container {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  user-select: none;
  bottom: 0;
  right: 0;
  width: 55%;        /* plus large pour couvrir plus de surface */
  max-width: 680px;  /* plus grand que avant */
  height: 140%;      /* dépasse en hauteur pour l'effet "coupé" */
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.pattern-image {
  width: 100%;
  height: auto;
  transform: translate(8%, 28%); /* décale vers bas-droite pour couper les arcs */
  object-fit: contain;
  object-position: bottom right;
  opacity: 0.9; /* légèrement transparent comme dans l'image */
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .pattern-container {
    width: 50%;
    max-width: 480px;
  }
}

@media (max-width: 768px) {
  .content-container {
    padding: 48px 6%;
    max-width: 100%;
  }

  .banner-title {
    font-size: 2rem;
    letter-spacing: -0.01em;
  }

  .pattern-container {
    width: 70%;
    opacity: 0.5; /* plus discret sur mobile pour ne pas gêner la lecture */
  }
}
</style>