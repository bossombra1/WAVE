<script setup>

defineProps({
  level: { type: [Number, String], default: 2 },
})
</script>

<template>
  <component :is="`h${level}`" class="base-heading">
    <slot />
  </component>
</template>

<style scoped>
.base-heading {
  margin: 0;
  color: var(--wave-navy);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
}
</style>
