<script setup>
/**
 * FooterColumn — MOLÉCULE.
 * Regroupe un titre de section et une liste de liens NavLink 
 * alignés verticalement pour composer le Footer.
 */
import NavLink from '@/components/atoms/NavLink.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'

defineProps({
  // Attend un objet du type : { title: 'Produits', links: [{ label: 'Wave Personnel', href: '/' }, ...] }
  column: {
    type: Object,
    required: true
  }
})

// On déclare l'événement pour faire remonter le clic sur les liens si besoin
defineEmits(['navigate'])
</script>

<template>
  <div class="footer-column">
    <BaseHeading tag="h4" class="footer-column__title">
      {{ column.title }}
    </BaseHeading>

    <ul class="footer-column__list">
      <li v-for="link in column.links" :key="link.label" class="footer-column__item">
        <NavLink 
          :href="link.href" 
          @navigate="$emit('navigate', $event)"
          class="footer-column__link"
        >
          {{ link.label }}
        </NavLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 140px;
}

.footer-column__title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--black, #111111);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.footer-column__list {
  display: flex;
  flex-direction: column;
  gap: 12px; /* Espacement vertical entre les liens */
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column__item {
  padding: 0;
  margin: 0;
}

/* Surcharge locale du style des NavLink pour le Footer si nécessaire */
.footer-column__link {
  font-weight: 500;
  color: #666666 !important; /* Couleur plus douce pour le footer */
  font-size: 0.85rem;
  transition: color 0.2s ease;
}

.footer-column__link:hover {
  color: var(--wave-blue, #00A4E4) !important;
}

/* Alignement ou ajustement sur les très petits écrans */
@media (max-width: 576px) {
  .footer-column {
    gap: 12px;
  }
  .footer-column__title {
    font-size: 0.8rem;
  }
}
</style>