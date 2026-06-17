<script setup>
/**
 * JobFilters — MOLÉCULE.
 * Groupe deux selects : département et bureau.
 * Émet l'objet complet des filtres sélectionnés.
 */
import BaseSelect from '@/components/atoms/BaseSelect.vue'

defineProps({
  departments: {
    type: Array,
    required: true
  },
  offices: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Object,
    required: true
  }
})
 
defineEmits(['update:modelValue'])

const updateFilter = (field, value) => {
  const updated = { ...modelValue, [field]: value }
  $emit('update:modelValue', updated)
}
</script>

<template>
  <div class="job-filters">
    <BaseSelect
      id="department-select"
      label="All departments"
      :options="departments"
      :modelValue="modelValue.department"
      @update:modelValue="updateFilter('department', $event)"
    />
    <BaseSelect
      id="office-select"
      label="All offices"
      :options="offices"
      :modelValue="modelValue.office"
      @update:modelValue="updateFilter('office', $event)"
    />
  </div>
</template>

<style scoped>
.job-filters {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

@media (max-width: 768px) {
  .job-filters {
    flex-direction: column;
    gap: var(--space-3);
  }
}
</style>
