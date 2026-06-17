<script setup>
import AvatarImage from '@/components/atoms/AvatarImage.vue'

defineProps({
  authorName: {
    type: String,
    required: true
  },
  authorAvatar: {
    type: String,
    required: true
  },
  publishDate: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="author-meta">
    <AvatarImage :src="authorAvatar" :alt="authorName" />
    
    <div class="author-info">
      <span class="author-name">{{ authorName }}</span>
      <span class="author-separator">on</span>
      <span class="author-date">{{ publishDate }}</span>
    </div>
  </div>
</template>

<style scoped>
.author-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
}

.author-info {
  display: flex;
  align-items: baseline;
  gap: 4px;
  flex-wrap: nowrap;
  line-height: 1.4;
}

.author-name {
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  color: #1f2937; /* gris foncé presque noir */
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.author-separator {
  font-size: 0.875rem;
  font-weight: 400;
  color: #9ca3af; /* gris clair */
  margin: 0 1px;
}

.author-date {
  font-size: 0.875rem;
  font-weight: 400;
  color: #9ca3af; /* même gris clair que "on" */
  white-space: nowrap;
}
</style>