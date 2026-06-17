<script setup>
/**
 * TheNavbar — ORGANISME.
 */
import TheLogo from '@/components/atoms/TheLogo.vue'
import NavMenu from '@/components/molecules/NavMenu.vue'
import { primaryNav, secondaryNav } from '@/data/navigation.js'

// Transmet l'événement 'navigate' au Layout parent (App.vue)
const emit = defineEmits(['navigate'])

// Gestion de l'aiguillage selon l'attribut href de l'élément cliqué
const handleNavigation = (href) => {
  if (href === '/business' || href === 'business') {
    emit('navigate', 'business')
  } else if (href === 'about' || href === '/about') {
    emit('navigate', 'about')
  } else if (href === 'careers' || href === '/careers') {
    emit('navigate', 'careers')
  } else if (href === 'blog' || href === '/blog' || href === '/fr/blog') {
    emit('navigate', 'blog') //  Déclenche l'affichage de l'index du Blog
  } else {
    emit('navigate', 'home')
  }
}
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <div class="navbar__left">
        <TheLogo @click="emit('navigate', 'home')" style="cursor: pointer;" />
        
        <NavMenu :items="primaryNav" @navigate="handleNavigation" />
      </div>
      <NavMenu :items="secondaryNav" @navigate="handleNavigation" />
    </div>
  </header>
</template>

<style scoped>
.navbar {
  background: #fff;
}
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
}
.navbar__left {
  display: flex;
  align-items: center;
  gap: 56px;
}
</style>