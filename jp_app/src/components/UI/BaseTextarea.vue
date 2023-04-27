<template>
  <div class="input-group">
    <label :for="id">{{ label }}</label>
    <textarea :id="id" :rows="rows" :cols="cols" @blur="inputEventHandler" />
  </div>
</template>

<script>
export default {
  props: ['label', 'id', 'cols', 'rows'],
  methods: {
    inputEventHandler(e) {
      const inputValue = e.target.value
      this.$emit('inputEvent', inputValue)
    }
  }
}
</script>

<style scoped lang="scss">
.input-group {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  textarea {
    font-family: inherit;
    padding: 8px 10px;
    font-size: 1.3rem;
    border: 1px solid var(--input-border);
    border-radius: 4px;
  }
  textarea {
    resize: vertical;
  }
  label {
    font-size: 1rem;
    font-weight: medium;
  }
}
</style>
