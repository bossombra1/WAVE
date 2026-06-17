<script setup>
import { computed } from 'vue'
import { blogPosts } from '@/data/blog.js'
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import AuthorMeta from '@/components/molecules/AuthorMeta.vue'
import SubscribeForm from '@/components/molecules/SubscribeForm.vue'
import PRContact from '@/components/organisms/PRContact.vue'

const props = defineProps({
  slug: { type: String, required: true }
})

defineEmits(['navigate'])

const currentPost = computed(() => {
  return blogPosts.find(post => post.slug === props.slug) || blogPosts[0]
})
</script>

<template>
  <div class="detail-page">

    <TheNavbar @navigate="$emit('navigate', $event)" />

    <article v-if="currentPost" class="detail-article">
      <div class="detail-container">

        <!-- Titre principal -->
        <BaseHeading level="1" class="detail-title">
          {{ currentPost.title }}
        </BaseHeading>

        <!-- Auteur + date -->
        <div class="detail-meta">
          <AuthorMeta
            :author-name="currentPost.author.name"
            :author-avatar="currentPost.author.avatar"
            :publish-date="currentPost.date"
          />
        </div>

        <!-- Séparateur -->
        <hr class="detail-divider" />

        <!-- Corps de l'article -->
        <div class="detail-content" v-html="currentPost.content"></div>

        <!-- Séparateur avant PRContact -->
        <hr class="detail-divider" />

        <!-- Contacts presse + À propos -->
        <PRContact />

        <!-- Séparateur avant Subscribe -->
        <hr class="detail-divider detail-divider--light" />

        <!-- Formulaire subscribe -->
        <div class="detail-subscribe">
          <p class="detail-subscribe__label">
            If you liked this post, you can subscribe to
            <a href="#" class="detail-link">our RSS</a>
            or our mailing list:
          </p>
          <SubscribeForm />
        </div>

      </div>
    </article>

    <TheFooter @navigate="$emit('navigate', $event)" />
  </div>
</template>

<style scoped>
/* ── Page ── */
.detail-page {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Article ── */
.detail-article {
  flex: 1;
  padding-bottom: 80px;
}

/* ── Conteneur centré ── */
.detail-container {
  max-width: 860px;
  margin: 0 auto;
  padding: 48px 24px 0;
}

/* ── Titre principal ── */
.detail-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: #1d1d4d;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

/* ── Meta auteur ── */
.detail-meta {
  margin-bottom: 20px;
}

/* ── Séparateurs ── */
.detail-divider {
  border: none;
  border-top: 1.5px solid #e5e7eb;
  margin: 28px 0;
}

.detail-divider--light {
  border-top-color: #f3f4f6;
}

/* ── Corps de l'article (v-html) ── */
.detail-content {
  font-size: 0.975rem;
  color: #374151;
  line-height: 1.8;
}

/* Paragraphes */
:deep(.detail-content p),
:deep(p) {
  margin-bottom: 1.4rem;
  line-height: 1.8;
  color: #374151;
}

/* Texte en gras — citations et points clés comme dans l'image */
:deep(strong) {
  color: #1d1d4d;
  font-weight: 700;
}

/* Italique — "mobile money" dans l'image */
:deep(em) {
  font-style: italic;
  color: #4b5563;
}

/* Liens bleus */
:deep(a) {
  color: #1dc2ec;
  text-decoration: none;
  border-bottom: none solid rgba(29, 194, 236, 0.3);
  transition: color 0.2s ease, border-color 0.2s ease;
}

:deep(a:hover) {
  color: #4c49ed;
  border-bottom-color: #4c49ed;
}

/* Titres "À propos" dans le contenu */
:deep(h3) {
  font-size: 1.2rem;
  font-weight: 800;
  color: #1d1d4d;
  letter-spacing: -0.01em;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

/* Ligne "Site web / LinkedIn / Email" */
:deep(p a) {
  color: #1dc2ec;
  font-weight: 500;
}

/* Texte en italique final "We work on Wave..." */
:deep(p em a) {
  color: #1dc2ec;
  font-style: italic;
}

/* ── Section Subscribe ── */
.detail-subscribe {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 380px; /* subscribe form reste compact comme dans l'image */
}

.detail-subscribe__label {
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  font-style: italic; /* fidèle à l'image */
}

.detail-link {
  color: #1dc2ec;
  text-decoration: none;
  border-bottom: 1px solid rgba(29, 194, 236, 0.3);
}

.detail-link:hover {
  color: #4c49ed;
  border-bottom-color: #4c49ed;
}
</style>