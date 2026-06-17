<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Email Address'
  },
  type: {
    type: String,
    default: 'email'
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    class="email-input"
  />
</template>

<style scoped>
.email-input {
  width: 100%;
  padding: 12px 16px;
  border: 1.5px solid #d1d5db; /* gris clair comme dans l'image */
  border-radius: 6px;
  font-size: 0.875rem; /* 14px */
  color: #374151;
  background-color: #ffffff;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  line-height: 1.5;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04); /* légère ombre intérieure */
}

.email-input::placeholder {
  color: #9ca3af; /* gris moyen, comme "Email Address" dans l'image */
  font-weight: 400;
}

.email-input:focus {
  border-color: #1dc2ec;
  box-shadow: 0 0 0 3px rgba(29, 194, 236, 0.15), inset 0 1px 2px rgba(0, 0, 0, 0.04);
}

.email-input:hover:not(:focus) {
  border-color: #9ca3af;
}
</style>