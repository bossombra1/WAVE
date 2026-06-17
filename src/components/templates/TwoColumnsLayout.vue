<template>
  <div class="blog-layout">
    <div class="blog-layout__grid">

      <main class="blog-layout__main">
        <slot name="main"></slot>
      </main>

      <aside class="blog-layout__sidebar">
        <slot name="sidebar"></slot>
      </aside>

    </div>
  </div>
</template>

<style scoped>
/* ── Wrapper global ── */
.blog-layout {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 24px 80px;
  background-color: #f9fafb; /* fond légèrement grisé comme dans l'image */
}

@media (min-width: 1024px) {
  .blog-layout {
    padding: 64px 64px 100px;
  }
}

/* ── Grille principale ── */
.blog-layout__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: start; /* sidebar reste en haut, ne s'étire pas */
}

@media (min-width: 1024px) {
  .blog-layout__grid {
    grid-template-columns: 1fr 300px; /* main fluide + sidebar fixe 300px */
    gap: 48px;
  }
}

/* ── Colonne principale ── */
.blog-layout__main {
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 0; /* évite le débordement du texte long */
}

/* ── Sidebar ── */
.blog-layout__sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;  /* sidebar fixe au scroll */
  top: 24px;
}

@media (max-width: 1023px) {
  .blog-layout__sidebar {
    position: static; /* pas de sticky sur mobile */
    width: 100%;
    max-width: 340px;
  }
}
</style>