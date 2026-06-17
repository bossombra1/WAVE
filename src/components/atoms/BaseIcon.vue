<script setup>

import { computed } from 'vue'

// Importation des fichiers depuis assets
import bankIcon from '@/assets/images/bank.png'
import bulbIcon from '@/assets/images/bulb.png'
import coinsIcon from '@/assets/images/coins.png'
import phoneIcon from '@/assets/images/phone.png'
import shieldIcon from '@/assets/images/shield.png'
import headsetIcon from '@/assets/images/headset.png'

const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 28 },
})

const icons = {
 
  bank:    bankIcon,
  send:    coinsIcon,   
  bulb:    bulbIcon,
  phone:   phoneIcon,
  shield:  shieldIcon,
  support: headsetIcon, 

  
  user:    '<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
  cart:    '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 7H6"/>',
}


const isPng = computed(() => {
  const icon = icons[props.name]
  return icon && !icon.includes('<')
})
</script>

<template>
  <img
    v-if="isPng"
    :src="icons[name]"
    :style="{ width: size + 'px', height: size + 'px' }"
    class="base-icon-png"
    alt=""
    aria-hidden="true"
  />

  <svg
    v-else
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="icons[name]"
  />
</template>

<style scoped>
.base-icon-png {
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
}
</style>