<script setup>
/**
 * StatItem — MOLÉCULE.
 * Assemble un Atome Chiffre (StatNumber) et un Atome Texte (BaseText) 
 * pour afficher une statistique clé (ex: "500K+" -> "entreprises partenaires").
 */
import StatFigure from '@/components/atoms/StatFigure.vue'
import BaseText from '@/components/atoms/BaseText.vue'

defineProps({
  // Attend un objet avec une structure du type : { value: '1M+', label: 'utilisateurs actifs' }
  stat: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="stat-item">
    <span class="stat-item__Figure">
      {{ stat.value }}
    </span>
    
    <BaseText class="stat-item__label">
      {{ stat.label }}
    </BaseText>
  </div>
</template>

<style scoped>
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center; /* Aligne le chiffre et le texte au centre */
  text-align: center;
  padding: 16px;
  background: transparent;
  transition: transform 0.3s ease;
}

/* Petite animation au survol pour rendre l'interface interactive */
.stat-item:hover {
  transform: translateY(-5px);
}

.stat-item__label {
  margin-top: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #555; /* Couleur grise adoucie pour faire ressortir le chiffre bleu */
  line-height: 1.4;
  max-width: 200px; /* Limite la largeur pour forcer un retour à la ligne propre */
}

/* Version responsive pour adapter l'espacement sur smartphone */
@media (max-width: 768px) {
  .stat-item {
    padding: 8px;
  }
  .stat-item__label {
    margin-top: 8px;
    font-size: 0.85rem;
  }
}
</style>