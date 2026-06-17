<script setup>
defineProps({
  groupAbout: String,
  entityAbout: String,
  website: String,
  contactName: String,
  email: String
})
</script>

<template>
  <div class="press-release">

    <section class="press-section">
      <h3 class="press-section__title">À propos du Groupe Wave Mobile Money</h3>
      <p class="press-section__text">{{ groupAbout }}</p>
    </section>

    <section class="press-section">
      <h3 class="press-section__title">À propos de Wave Digital Finance</h3>
      <p class="press-section__text">{{ entityAbout }}</p>
    </section>

  </div>
</template>

<style scoped>
/* ── Wrapper ── */
.press-release {
  border-top: 1.5px solid #e9eaf0;
  padding-top: 36px;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* ── Chaque section ── */
.press-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 16px;
  border-left: 3px solid #1dc2ec; /* accent Wave bleu sur le côté */
  transition: border-color 0.2s ease;
}

.press-section:hover {
  border-left-color: #4c49ed; /* vire au violet Wave au survol */
}

/* ── Titre de section ── */
.press-section__title {
  font-size: 1rem;
  font-weight: 700;
  color: #1d1d4d;
  letter-spacing: -0.01em;
  line-height: 1.3;
  margin: 0;
}

/* ── Paragraphe ── */
.press-section__text {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0;
  letter-spacing: 0.01em;
}
</style>