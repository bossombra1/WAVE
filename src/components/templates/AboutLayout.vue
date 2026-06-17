<script setup>
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'

// On déclare que le Layout transmet à son tour l'événement au parent supérieur (App.vue)
defineEmits(['navigate'])
</script>

<template>
  <div class="about-layout min-h-screen flex flex-col bg-white">
    
    <TheNavbar @navigate="$emit('navigate', $event)" />

    <main class="flex-grow">
      <slot />
    </main>

    <TheFooter @navigate="$emit('navigate', $event)" />
    
  </div>
</template>