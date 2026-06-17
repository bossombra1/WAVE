<script setup>
import TheNavbar from '@/components/organisms/TheNavbar.vue'
import TheFooter from '@/components/organisms/TheFooter.vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import TwoColumnsLayout from '@/components/templates/TwoColumnsLayout.vue'
import BlogFeed from '@/components/organisms/BlogFeed.vue'
import SubscribeForm from '@/components/molecules/SubscribeForm.vue'
import BlogBanner from '@/components/organisms/BlogBanner.vue'

defineEmits(['navigate'])
</script>

<template>
  <div class="blog-page">

    <TheNavbar @navigate="$emit('navigate', $event)" />

    <!-- Header "Blog" -->
    <header class="blog-header">
      <BaseHeading level="1" class="blog-header__title">
        Blog
      </BaseHeading>
    </header>

    <!-- Contenu principal + sidebar -->
    <div class="blog-body">
      <TwoColumnsLayout>
        <template #main>
         <BlogFeed @navigate="(page, slug) => $emit('navigate', page, slug)" />
        </template>

        <template #sidebar>
          <div class="sticky-sidebar">
            <SubscribeForm />
          </div>
        </template>
      </TwoColumnsLayout>
    </div>

    <!-- Bannière pleine largeur EN DEHORS du layout -->
    <BlogBanner @navigate="$emit('navigate', $event)" />

    <TheFooter @navigate="$emit('navigate', $event)" />

  </div>
</template>

<style scoped>
/* ── Page wrapper ── */
.blog-page {
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Header "Blog" ── */
.blog-header {
  background-color: #ffffff;
  border-bottom: 1.5px solid #f0f0f5;
  padding: 48px 24px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  animation: fadeInDown 0.5s ease-out forwards;
}

.blog-header__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: #1d1d4d;
  letter-spacing: -0.02em;
  margin: 0;
}

/* ── Zone contenu + sidebar ── */
.blog-body {
  flex: 1; /* prend tout l'espace disponible entre header et bannière */
}

/* ── Sidebar sticky ── */
.sticky-sidebar {
  position: sticky;
  top: 2rem;
}

/* ── Animation header ── */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>