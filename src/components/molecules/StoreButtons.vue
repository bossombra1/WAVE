<script setup>

import StoreBadge from '@/components/atoms/StoreBadge.vue'
</script>

<template>
  <div class="store-buttons">
    <StoreBadge store="google" />
    <StoreBadge store="apple" />
  </div>
</template>

<style scoped>
.store-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
