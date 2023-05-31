<template>
  <div class="input-group">
    <label class="input-label" :for="id">{{ label }}</label>
    <input
      class="input-field"
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>


<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    required: false
  }
})
</script>

<style scoped lang="scss">
input[type='text'] {
  height: 40px;
}
.input-group {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
}
.input-field {
  padding: 5px 10px;
  font-size: 1.3rem;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  &:focus {
    outline: var(--c-kanji-primary-m) solid 2px;
  }
}
.input-label {
  font-size: 1rem;
  font-weight: medium;
}
</style>
