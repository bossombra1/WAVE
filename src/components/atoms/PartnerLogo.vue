<script setup>
/**
 * PartnerLogo — ATOME.
 * Affiche le logo d'un partenaire commercial.
 */
defineProps({
  // URL complète ou chemin relatif vers l'image du logo (ex: /images/partners/cie.png)
  src: {
    type: String,
    required: true
  },
  // Nom du partenaire pour l'accessibilité (ex: "CIE", "SODECI")
  alt: {
    type: String,
    required: true
  },
  // Type de couleur par défaut : 'grayscale' (recommandé pour Wave) ou 'color'
  variant: {
    type: String,
    default: 'grayscale'
  }
})
</script>

<template>
  <div class="partner-logo" :class="`partner-logo--${variant}`">
    <img :src="src" :alt="alt" class="partner-logo__image" loading="lazy" />
  </div>
</template>

<style scoped>
.partner-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  max-width: 200px; /* Taille maximale standard pour les logos partenaires */
  height: 70px;     /* Hauteur fixe pour aligner parfaitement les logos */
  padding: 10px;
  opacity: 0.7;     /* Légère transparence par défaut */
  transition: all 0.3s ease;
}

.partner-logo__image {
  max-width: 200%;
  max-height: 110%;
  object-fit: contain; /* L'image s'adapte sans être déformée */
  display: block;
}

/* Variante Niveaux de gris (Wave préfère unifier les logos partenaires ainsi) */
.partner-logo--grayscale .partner-logo__image {
  filter: grayscale(100%);
}

/* Effet au survol (hover) pour révéler la couleur et l'opacité */
.partner-logo:hover {
  opacity: 1;
  transform: translateY(-3px); /* Petit effet de lévitation */
}

.partner-logo--grayscale:hover .partner-logo__image {
  filter: grayscale(0%); /* Le logo retrouve sa couleur au survol */
}

/* Version responsive pour les écrans de smartphones */
@media (max-width: 768px) {
  .partner-logo {
    max-width: 100px;
    height: 45px;
  }
}
</style>