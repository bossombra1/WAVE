<template>
  <div class="careers-layout">
    <header class="navbar-wrapper">
      <TheNavbar @navigate="$emit('navigate', $event)" />
    </header>

    <main class="main-content">
      <slot />
    </main>

    <footer class="footer-wrapper">
      <TheFooter @navigate="$emit('navigate', $event)" />
    </footer>
  </div>
</template>

<script setup>
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'

defineEmits(['navigate'])
</script>

<style scoped>
.careers-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Force la hauteur à tout l'écran */
  width: 100%;
}

.main-content {
  flex: 1; /* Pousse le footer vers le bas et le header vers le haut */
  width: 100%;
}

/* Optionnel : Ajoute un bordure rouge pour voir si ton layout s'affiche */
/* .careers-layout { border: 2px solid red; } */
</style>