<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input :type="type" @input="inputEventHandler" />
  </div>
</template>

<script>
export default {
  props: ['label', 'type'],
  emits: ['inputEvent'],
  // data() {
  //   return {
  //     // inputValue: ''
  //   }
  // },
  methods: {
    inputEventHandler(e) {
      const inputValue = e.target.value.trim()
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
  input {
    padding: 5px 10px;
    font-size: 1.3rem;
    border: 1px solid var(--input-border);
    border-radius: 4px;
  }
  input[type='text'] {
    height: 40px;
  }
  label {
    font-size: 1rem;
    font-weight: medium;
  }
}
</style>
