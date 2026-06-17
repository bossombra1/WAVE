<script setup>
/**
 * PartnerItem — MOLÉCULE.
 * Enveloppe l'Atome PartnerLogo et ajoute éventuellement un texte d'accessibilité 
 * ou une gestion de lien cliquable si le partenaire a un site dédié.
 */
import PartnerLogo from '@/components/atoms/PartnerLogo.vue'
import BaseText from '@/components/atoms/BaseText.vue'

defineProps({

  partner: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="partner-item">
    <PartnerLogo 
      :src="partner.logoUrl" 
      :alt="partner.name" 
      variant="grayscale" 
    />
    
    <BaseText v-if="partner.sector" class="partner-item__sector">
      {{ partner.sector }}
    </BaseText>
  </div>
</template>

<style scoped>
.partner-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: transparent;
  border-radius: 8px;
  transition: background-color 0.2s ease;
}

/* Optionnel : On peut ajouter un très léger fond gris au survol de l'item complet */
.partner-item:hover {
  background-color: #f9f9f9;
}

.partner-item__sector {
  margin-top: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  opacity: 0;
  transform: translateY(4px);
  transition: all 0.25s ease;
}

/* On fait apparaître le texte du secteur de manière élégante au survol de la carte */
.partner-item:hover .partner-item__sector {
  opacity: 1;
  transform: translateY(0);
}

/* Gestion responsive */
@media (max-width: 768px) {
  .partner-item {
    padding: 6px;
  }
}
</style>