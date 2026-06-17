<template>
  <div class="post-list">
    <BlogCard
  v-for="(post, index) in blogPosts"
  :key="post.id"
  :post="post"
  @navigate="(page, slug) => $emit('navigate', page, slug)"
  class="post-list__item"
  :style="{ animationDelay: `${index * 0.07}s` }"
/>
  </div>
</template>

<script setup>
import { blogPosts } from '@/data/blog.js'
import BlogCard from '@/components/molecules/BlogCard.vue'

defineEmits(['navigate'])
</script>

<style scoped>
/* ── Conteneur de la liste ── */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

/* ── Chaque card ── */
.post-list__item {
  width: 100%;
  opacity: 0;
  animation: fadeSlideIn 0.4s ease forwards;
}

/* Délai en cascade pour chaque card */
.post-list__item:nth-child(1) { animation-delay: 0.05s; }
.post-list__item:nth-child(2) { animation-delay: 0.12s; }
.post-list__item:nth-child(3) { animation-delay: 0.19s; }
.post-list__item:nth-child(4) { animation-delay: 0.26s; }
.post-list__item:nth-child(5) { animation-delay: 0.33s; }

/* ── Animation d'entrée ── */
@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Séparateur visuel entre les cards ── */
.post-list__item:not(:last-child)::after {
  content: '';
  display: block;
  height: 1px;
  background: linear-gradient(to right, #e5e7eb, transparent);
  margin-top: 20px;
}
</style>