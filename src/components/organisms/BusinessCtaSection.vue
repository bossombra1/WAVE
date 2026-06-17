<script setup>
/**
 * BusinessCtaSection — ORGANISME.
 * Section Call to Action de bas de page pour Wave Business.
 * Version fidèle à la maquette originale avec alignement à gauche et motif circulaire.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'

// Importation du motif d'arrière-plan en SVG
import roundPatternUrl from '@/assets/images/round_pattern_light_blue.svg'
</script>

<template>
  <section class="business-cta">
    <div class="business-cta__container container">
      
      <div class="business-cta__content">
        <BaseHeading tag="h2" class="business-cta__title">
          Commencez avec Wave Business
        </BaseHeading>
        
        <div class="business-cta__actions">
          <a href="#contact" class="business-cta__btn-link">
            Contacter l'équipe commerciale
          </a>
        </div>
      </div>

      <div class="business-cta__decor" aria-hidden="true">
        <img :src="roundPatternUrl" alt="" class="business-cta__pattern-img" />
      </div>

    </div>
  </section>
</template>

<style scoped>
.business-cta {
  /* Le bleu officiel vif de Wave visible sur la capture */
  background-color: #1dc2f1; 
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  overflow: hidden; /* Empêche le motif de déborder de la section */
  width: 100%;
}

.business-cta__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2; /* Garde le texte et le bouton au-dessus du motif */
}

/* Alignement net à gauche comme sur l'image */
.business-cta__content {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
}

/* Titre lourd, blanc et imposant */
.business-cta__title {
  font-size: 3.75rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #ffffff !important;
  text-align: left;
}

.business-cta__actions {
  display: flex;
  width: auto;
}

/* Bouton pilule blanc personnalisé pour correspondre à 100% à l'image */
.business-cta__btn-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #1dc2f1; /* Écrit avec la même teinte de bleu */
  font-size: 1.3rem;
  font-weight: 700;
  padding: 18px 44px;
  border-radius: 40px; /* Bords parfaitement ovales/pilule */
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
}

.business-cta__btn-link:hover {
  background-color: #f8fafd;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

/* Positionnement du motif SVG sur le flanc droit */
.business-cta__decor {
  position: absolute;
  right: -5%;
  top: 50%;
  transform: translateY(-50%);
  width: 45%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
  z-index: 1;
}

.business-cta__pattern-img {
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
}

/* --- RESPONSIVE TABLETTE & MOBILE --- */
@media (max-width: 1024px) {
  .business-cta__title {
    font-size: 3rem;
  }
  
  .business-cta__decor {
    width: 35%;
    right: -2%;
  }
}

@media (max-width: 768px) {
  .business-cta {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .business-cta__container {
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
  }

  .business-cta__title {
    font-size: 2.5rem;
    max-width: 100%;
  }

  .business-cta__btn-link {
    font-size: 1.1rem;
    padding: 16px 32px;
    width: 100%; /* S'étend sur toute la largeur sur mobile */
    text-align: center;
  }

  /* Cache ou ajuste le motif sur mobile pour ne pas surcharger le texte */
  .business-cta__decor {
    position: relative;
    transform: none;
    top: 0;
    right: 0;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
  }
}
</style>