<script setup>
import TheAnnouncementBar from '@/components/organisms/TheAnnouncementBar.vue'
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'

// 1. On déclare que ce Layout peut retransmettre un événement nommé 'navigate'
defineEmits(['navigate'])
</script>

<template>
  <TheAnnouncementBar />
  
  <TheNavbar @navigate="$emit('navigate', $event)" />
  
  <main>
    <slot />
  </main>
  
  <TheFooter />
</template>