<script setup>
import TheLogo from '@/components/atoms/TheLogo.vue'
import StoreBadge from '@/components/atoms/StoreBadge.vue'
import { footerColumns } from '@/data/footer.js'
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <TheLogo />
        <button class="footer__lang">Français &#9650;</button>
        <small class="footer__copy">&copy; Wave Mobile Money Inc.</small>
      </div>

      <nav v-for="col in footerColumns" :key="col.title" class="footer__col">
        <h4 class="footer__title">{{ col.title }}</h4>
        <a v-for="link in col.links" :key="link.label" :href="link.href" class="footer__link">
          {{ link.label }}
        </a>
      </nav>

      <div class="footer__stores">
        <StoreBadge store="google" />
        <StoreBadge store="apple" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* --- Conteneur Principal --- */
.footer {
  background: #ffffff;
  padding-top: 56px;
  padding-bottom: 72px;
}

/* --- Alignement Flexbox Global --- */
.footer__inner {
  display: flex;
  justify-content: flex-start;
  gap: 80px; 
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

/* --- Identité de marque --- */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex-shrink: 0; 
}

.footer__lang {
  align-self: flex-start;
  background: none;
  border: 0;
  padding: 0;
  font-weight: 800;
  font-size: 0.85rem;
  color: var(--wave-navy, #1d1b84);
  cursor: pointer;
}

.footer__copy {
  color: var(--ink-soft, #7f8c8d);
  font-size: 0.78rem;
}

/* --- Colonnes de liens --- */
.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

.footer__title {
  margin: 0 0 4px;
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--wave-navy, #1d1b84);
  white-space: nowrap; 
}

.footer__link {
  text-decoration: none;
  color: var(--wave-navy, #1d1b84);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer__link:hover {
  color: var(--wave-cyan-deep, #1cb0f6);
}

/* --- Boutons Stores --- */
.footer__stores {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: auto; 
  flex-shrink: 0;
}

.footer__stores :deep(img) {
  height: 44px;
  object-fit: contain;
}


@media (max-width: 900px) {
  .footer__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  
  .footer__stores {
    margin-left: 0;
    justify-self: start;
  }
}

@media (max-width: 480px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>