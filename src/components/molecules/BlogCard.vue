<script setup>
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import AuthorMeta from '@/components/molecules/AuthorMeta.vue'

defineProps({
  post: {
    type: Object,
    required: true
  }
})

defineEmits(['navigate'])
</script>

<template>
  <article class="blog-card">

    
     <a href="#"
      @click.prevent="$emit('navigate', 'blog-detail', post.slug)"
      class="blog-card__title-link"
    >
      <BaseHeading level="2" class="blog-card__title">
        {{ post.title }}
      </BaseHeading>
    </a>

    <div class="blog-card__meta">
      <AuthorMeta
        :author-name="post.author.name"
        :author-avatar="post.author.avatar"
        :publish-date="post.date"
      />
    </div>

    <p class="blog-card__excerpt">
      {{ post.excerpt }}
    </p>

  </article>
</template>

<style scoped>
/* ── Card container ── */
.blog-card {
  background-color: #ffffff;
  border: 1.5px solid #e9eaf0;
  border-radius: 16px;
  padding: 28px 32px;
  width: 100%;
  max-width: 760px;
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.05),
    0 4px 20px rgba(0, 0, 0, 0.04);
  transition:
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    transform 0.2s ease;
}

.blog-card:hover {
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 12px 32px rgba(0, 0, 0, 0.06);
  border-color: #d1d5db;
  transform: translateY(-2px);
}

/* ── Titre ── */
.blog-card__title-link {
  display: block;
  text-decoration: none;
  margin-bottom: 14px;
}

.blog-card__title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1d1d4d;
  line-height: 1.35;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.blog-card__title-link:hover .blog-card__title {
  color: #4c49ed;
}

/* ── Meta auteur ── */
.blog-card__meta {
  margin-bottom: 18px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6; /* séparateur subtil sous la meta */
}

/* ── Excerpt ── */
.blog-card__excerpt {
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  letter-spacing: 0.01em;
}
</style>