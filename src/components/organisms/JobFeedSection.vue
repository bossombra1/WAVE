<script setup>
/**
 * JobFeedSection — ORGANISME.
 * Filtres + listing d'emplois réactif.
 * Filtre les jobs par département et bureau sélectionnés.
 */
import { ref, computed } from 'vue'
import BaseHeading from '@/components/atoms/BaseHeading.vue'
import JobFilters from '@/components/molecules/JobFilters.vue'
import JobListingRow from '@/components/molecules/JobListingRow.vue'

defineProps({
  jobs: {
    type: Array,
    required: true
  },
  departments: {
    type: Array,
    required: true
  },
  offices: {
    type: Array,
    required: true
  }
})
 
const filters = ref({
  department: '',
  office: ''
})

const filteredJobs = computed(() => {
  return props.jobs.filter(job => {
    const departmentMatch = !filters.value.department || job.department === filters.value.department
    const officeMatch = !filters.value.office || job.office === filters.value.office
    return departmentMatch && officeMatch
  })
})

const updateFilters = (newFilters) => {
  filters.value = newFilters
}
</script>

<template>
  <section class="job-feed">
    <div class="container">
      <BaseHeading :level="2" class="job-feed__title">
        Nos offres d'emploi
      </BaseHeading>

      <JobFilters
        :departments="departments"
        :offices="offices"
        :modelValue="filters"
        @update:modelValue="updateFilters"
      />

      <div class="job-feed__list">
        <JobListingRow
          v-for="job in filteredJobs"
          :key="job.id"
          :job="job"
          @click="console.log('Job clicked:', job)"
        />
      </div>

      <div v-if="filteredJobs.length === 0" class="job-feed__empty">
        <p>Aucune offre d'emploi ne correspond à vos critères.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.job-feed {
  background: var(--white);
  padding: var(--space-7) 0;
}

.job-feed__title {
  color: var(--wave-navy);
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 800;
  margin: 0 0 var(--space-5) 0;
}

.job-feed__list {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}

.job-feed__empty {
  text-align: center;
  padding: var(--space-5);
  color: var(--ink-soft);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .job-feed {
    padding: var(--space-5) 0;
  }

  .job-feed__list {
    border: none;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
}
</style>
