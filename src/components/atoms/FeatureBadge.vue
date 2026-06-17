<script setup>
/**
 * FeatureBadge — ATOME.
 * Petit badge de mise en avant textuelle (ex: "Frais de 1%", "Sécurisé").
 */
defineProps({
  // Le texte à afficher à l'intérieur du badge
  text: {
    type: String,
    required: true
  },
  // Type de couleur pour le badge : 'primary' (bleu wave), 'success' (vert), 'cyan'
  variant: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <span class="feature-badge" :class="`feature-badge--${variant}`">
    {{ text }}
  </span>
</template>

<style scoped>
.feature-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border-radius: 20px; /* Bords très arrondis style pilule */
  font-family: var(--font-sans, sans-serif);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
  transition: all 0.2s ease;
}

/* Variante Bleue Wave (Par défaut) */
.feature-badge--primary {
  background-color: rgba(0, 164, 228, 0.1);
  color: var(--wave-blue, #00A4E4);
}

/* Variante Cyan Deep (Style Wave) */
.feature-badge--cyan {
  background-color: rgba(29, 192, 209, 0.1);
  color: var(--wave-cyan-deep, #1DC0D1);
}

/* Variante Succès / Vert (Utile pour les mentions gratuites ou positives) */
.feature-badge--success {
  background-color: rgba(46, 204, 113, 0.1);
  color: #2ecc71;
}
</style>