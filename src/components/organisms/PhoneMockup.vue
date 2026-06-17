<script setup>

import appScreen from '@/assets/images/homepage_2.svg'
</script>

<template>
  <div class="phone">
    <img :src="appScreen" alt="Application Wave" class="phone__screen" />
  </div>
</template>

<style scoped>
.phone {
  width: 350px;
  background: #fff;
  border-radius: 42px;
  padding: 12px 12px 0;
  box-shadow: 0 50px 90px -34px rgba(20, 16, 75, 0.55);
  overflow: hidden;
  max-height: 580px;
}
.phone__screen {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 32px 32px 0 0;
}
</style>
