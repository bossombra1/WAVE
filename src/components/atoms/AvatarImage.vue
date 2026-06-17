<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Avatar'
  }
})
</script>

<template>
  <div class="avatar-wrapper">
    <img
      :src="src"
      :alt="alt"
      class="avatar-img"
    />
  </div>
</template>

<style scoped>
.avatar-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.18), 0 0 0 2px #e8e8e8;
  background-color: #d4d4d4; /* fallback si l'image ne charge pas */
  transition: box-shadow 0.2s ease;
}

.avatar-wrapper:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.22), 0 0 0 2px #1dc2ec;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top; /* cadre le visage en haut */
  display: block;
  border-radius: 50%;
  user-select: none;
  transition: opacity 0.2s ease;
}

.avatar-wrapper:hover .avatar-img {
  opacity: 0.92;
}
</style>