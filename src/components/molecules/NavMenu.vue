<script setup>
import NavLink from '@/components/atoms/NavLink.vue'

defineProps({
  items: { type: Array, required: true }
})

// Déclaration de l'événement qu'on transmet à l'organisme
const emit = defineEmits(['navigate'])
</script>

<template>
  <ul class="nav-menu">
    <li v-for="item in items" :key="item.label">
      <NavLink :href="item.href" @click="emit('navigate', item.href)">
        {{ item.label }}
      </NavLink>
    </li>
  </ul>
</template>

<style scoped>
/* Ton CSS pour la liste (flex, list-style: none, etc.) */
.nav-menu {
  display: flex;
  gap: 24px;
  list-style: none;
}
</style>