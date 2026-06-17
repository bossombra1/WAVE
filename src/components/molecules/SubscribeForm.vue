<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/atoms/BaseInput.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const email = ref('')

const handleSubscribe = () => {
  if (email.value) {
    alert(`Inscription réussie avec : ${email.value}`)
    email.value = ''
  }
}
</script>

<template>
  <div class="subscribe-card">
    <h3 class="subscribe-title">
      Subscribe <span class="subscribe-rss">(RSS)</span>
    </h3>

    <p class="subscribe-desc">
      We'll email you when we write new blog posts!
    </p>

    <form @submit.prevent="handleSubscribe" class="subscribe-form">
      <BaseInput
        v-model="email"
        placeholder="Email Address"
      />

      <BaseButton
        type="submit"
        class="subscribe-btn"
      >
        Subscribe
      </BaseButton>
    </form>
  </div>
</template>

<style scoped>
.subscribe-card {
  background-color: #ffffff;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px 20px;
  max-width: 300px;
  width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04);
}

/* Titre "Subscribe (RSS)" */
.subscribe-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1d1d4d;
  margin: 0 0 6px 0;
  display: flex;
  align-items: center;
  gap: 4px;
  letter-spacing: 0.01em;
}

.subscribe-rss {
  color: #4c49ed; /* bleu violet comme dans l'image */
  font-weight: 500;
  font-size: 0.875rem;
}

/* Description */
.subscribe-desc {
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0 0 16px 0;
  line-height: 1.55;
}

/* Formulaire */
.subscribe-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Bouton Subscribe — override via :deep si nécessaire */
.subscribe-card :deep(.subscribe-btn),
.subscribe-card :deep(button[type="submit"]) {
  width: 100%;
  background-color: #1dc2ec;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 13px 0;
  border-radius: 999px; /* pill complet */
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(29, 194, 236, 0.35);
}

.subscribe-card :deep(button[type="submit"]):hover {
  background-color: #19b1d8;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(29, 194, 236, 0.45);
}

.subscribe-card :deep(button[type="submit"]):active {
  transform: translateY(0);
  box-shadow: 0 1px 4px rgba(29, 194, 236, 0.3);
}
</style>