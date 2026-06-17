<script setup>
/**
 * NavLink — ATOME.
 */
defineProps({
  href: { type: String, default: '#' },
})

// Déclaration de l'événement de clic
const emit = defineEmits(['click'])
</script>

<template>
  <a :href="href" @click.prevent="emit('click')" class="nav-link">
    <slot />
  </a>
</template>

<style scoped>
/* Ton CSS reste identique */
.nav-link {
  text-decoration: none;
  color: var(--black);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  transition: color 0.16s ease;
}
.nav-link:hover {
  color: var(--wave-cyan-deep);
}
</style>