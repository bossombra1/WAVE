<script setup>
/**
 * BusinessHeroSection — ORGANISME.
 * Section principale (haut de page) pour Wave Business.
 * Présente la proposition de valeur et affiche les indicateurs clés (StatItem).
 * Version mise à jour pour inclure les images et le motif d'arrière-plan Wave.
 */
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import BaseText from '@/components/atoms/BaseText.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'
import StatItem from '@/components/molecules/StatItem.vue'

// Importation des images spécifiques pour les utiliser dans le template
// Assure-toi que ces chemins correspondent à ton architecture de fichiers
import patternUrl from '@/assets/images/round_pattern_light_blue.svg'
import businessAppUrl from '@/assets/images/business-app.svg'
import businessPortalUrl from '@/assets/images/business-portal.svg'

defineProps({
  // Reçoit le tableau des statistiques depuis les données de la page
  stats: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="business-hero">
    
    <div class="business-hero__main container">
      
      <div class="business-hero__left">
        <BaseHeading tag="h1" class="business-hero__title">
          Augmentez votre portée et vos revenus avec Wave Business
        </BaseHeading>
        
        <BaseText class="business-hero__subtitle">
          Des centaines de milliers d'entreprises de toutes tailles utilisent Wave pour payer leurs employés, recevoir des paiements de leurs clients, collecter de l'argent aux points de vente et accepter des paiements en ligne.
        </BaseText>
        
        <div class="business-hero__actions">
          <BaseButton variant="primary" class="business-hero__cta">
            Contacter l'équipe commerciale
          </BaseButton>
        </div>
      </div>

      <div class="business-hero__right">
        <img :src="patternUrl" alt="" class="business-hero__pattern" aria-hidden="true" />
        
        <div class="business-hero__images-wrapper">
          <img :src="businessPortalUrl" alt="Aperçu du portail de gestion Wave Business" class="business-hero__image business-hero__image--portal" />
          <img :src="businessAppUrl" alt="Aperçu de l'application mobile Wave" class="business-hero__image business-hero__image--app" />
        </div>
      </div>

    </div>


  </section>
</template>

<style scoped>
/* Couleurs de marque et variables locales pour la clarté */
:root {
  --wave-blue-light: #F0FAFF; /* Couleur de fond selon les captures */
  --wave-cyan: #1DC0D1; /* Pour le bouton CTA au survol */
}

.business-hero {
  background-color: var(--wave-blue-light, #F0FAFF); /* Applique la bonne couleur de fond */
  padding-top: 100px;
  padding-bottom: 80px;
  overflow: hidden; /* Important pour que le motif Wave ne crée pas de scrollbar */
}

/* Mise en page Split-Screen pour les grands écrans */
.business-hero__main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px; /* Espace entre le texte et les images */
  margin-bottom: 120px; /* Espace généreux avant les stats */
}

/* Côté gauche : Texte */
.business-hero__left {
  flex: 1; /* Prend la moitié de l'espace disponible */
  max-width: 600px;
}

.business-hero__title {
  font-size: 3.75rem; /* Un peu plus grand selon l'image */
  font-weight: 800;
  line-height: 1.1; /* Titre très serré, compact */
  color: #111111; /* Presque noir pur */
  letter-spacing: -0.04em; /* Espacement de caractères très réduit */
  margin-bottom: 32px;
}

.business-hero__subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #333333; /* Un gris foncé pour le texte */
  max-width: 580px;
  margin-bottom: 48px;
}

/* Côté droit : Images */
.business-hero__right {
  flex: 1;
  position: relative; /* Pour positionner le motif Wave */
  display: flex;
  justify-content: left;
  align-items: left;
}

/* Motif Wave d'arrière-plan */
.business-hero__pattern {
  position: absolute;
  top: 110%;
  left: 70%;
  transform: translate(-50%, -50%); /* Centrage parfait */
  width: 140%; /* Doit dépasser légèrement du conteneur */
  opacity: 1; /* Le motif doit être visible */
  z-index: 1; /* Derrière les images principales */
}

/* Conteneur pour superposer l'app et le portail */
.business-hero__images-wrapper {
  position: relative;
  z-index: 2; /* Devant le motif */
  width: 500%;
  display: flex;
  justify-content: center;
}

.business-hero__image {
  max-width: 500%;
  height: auto;
  border-radius: 12px; /* Coins arrondis pour un look app modern */
}

/* Image du portail (plus grande, en arrière-plan) */
.business-hero__image--portal {
  width: 120%; /* Occupe la majeure partie de la zone d'images */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08); /* Ombre portée subtile pour le relief */
}

/* Image de l'app (plus petite, superposée) */
.business-hero__image--app {
  position: absolute;
  top: 30%; /* Légère superposition en haut */
  left: 30%; /* Décalée vers la droite selon l'image */
  width: 40%; /* Beaucoup plus petite */
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12); /* Ombre plus forte car plus "proche" */
}

/* Surcharge du style du bouton CTA */
.business-hero__cta {
  padding: 18px 40px; /* Bouton plus grand selon l'image */
  font-size: 1rem;
  font-weight: 700;
  border-radius: 40px; /* Très arrondi */
  background-color: var(--wave-blue, #00A4E4); /* Bleu Wave officiel */
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.business-hero__cta:hover {
  background-color: var(--wave-cyan, #1DC0D1); /* Cyan vif au survol */
  transform: translateY(-3px); /* Effet de lévitation au survol */
}

/* Design de la grille des statistiques (inchangée) */
.business-hero__stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1100px;
  border-top: 1px solid rgba(0, 164, 228, 0.1); /* Ligne de séparation bleu très clair */
  padding-top: 64px;
}

.business-hero__stat-card {
  border-right: 1px solid rgba(0, 164, 228, 0.05); /* Séparation verticale subtile */
}

.business-hero__stats-grid > :last-child {
  border-right: none;
}

/* --- RESPONSIVE TABLETTE & MOBILE --- */
@media (max-width: 1024px) {
  /* On passe du split-screen à un empilement vertical pour les tablettes */
  .business-hero__main {
    flex-direction: column-reverse; /* Images d'abord, puis texte pour un meilleur focus */
    text-align: center;
    gap: 80px;
  }

  .business-hero__right {
    width: 100%;
    max-width: 700px;
  }

  .business-hero__left {
    max-width: 700px;
  }

  .business-hero__title {
    font-size: 3.2rem;
  }

  .business-hero__actions {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .business-hero {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .business-hero__title {
    font-size: 2.5rem;
  }

  .business-hero__subtitle {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  /* Ajustements pour les images sur petit écran */
  .business-hero__image--portal {
    width: 90%;
  }

  .business-hero__image--app {
    top: 30%;
    left: 60%;
    width: 40%;
  }

  /* Stats : Un sous l'autre sur smartphone */
  .business-hero__stats-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-top: 48px;
    border-top: none;
  }

  .business-hero__stat-card {
    border-right: none;
    border-bottom: 1px solid rgba(0, 164, 228, 0.05);
    padding-bottom: 16px;
  }

  .business-hero__stats-grid > :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}
</style>