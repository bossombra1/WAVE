<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    required: true
  } 
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="select-wrapper">
    <label v-if="label" :for="id" class="select-label">{{ label }}</label>
    <select
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="select-input"
    >
      <option value="">{{ label }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.select-label {
  font-size: 0.875rem;
  color: var(--wave-navy);
  font-weight: 500;
}

.select-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid var(--line);
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--ink);
  background-color: var(--white);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  line-height: 1.5;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2314104B' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px;
  padding-right: 40px;
}

.select-input:focus {
  border-color: var(--wave-indigo);
  box-shadow: 0 0 0 3px rgba(65, 54, 245, 0.15), inset 0 1px 2px rgba(0, 0, 0, 0.04);
}

.select-input:hover:not(:focus) {
  border-color: var(--ink-soft);
}

.select-input option {
  color: var(--ink);
  background-color: var(--white);
}
</style>
