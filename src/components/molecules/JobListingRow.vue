<script setup>
/**
 * JobListingRow — MOLÉCULE.
 * Une ligne d'offre d'emploi : titre + localisation + département → chevron ">".
 */
defineProps({
  job: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])
</script>
 
<template>
  <div class="job-row" @click="$emit('click')">
    <div class="job-row__info">
      <h4 class="job-row__title">{{ job.title }}</h4>
      <div class="job-row__meta">
        <span class="job-row__location">{{ job.location }}</span>
        <span class="job-row__department">{{ job.department }}</span>
      </div>
    </div>
    <div class="job-row__cta">
      <span class="job-row__arrow">›</span>
    </div>
  </div>
</template>

<style scoped>
.job-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-3);
  border-bottom: 1px solid var(--line);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.job-row:hover {
  background-color: var(--paper);
}

.job-row__info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.job-row__title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--wave-navy);
}

.job-row__meta {
  display: flex;
  gap: var(--space-3);
  font-size: 0.875rem;
}

.job-row__location,
.job-row__department {
  color: var(--ink-soft);
}

.job-row__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.job-row__arrow {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--wave-indigo);
}

@media (max-width: 768px) {
  .job-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .job-row__cta {
    width: auto;
  }
}
</style>
