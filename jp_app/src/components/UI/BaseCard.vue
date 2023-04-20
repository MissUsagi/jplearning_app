<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // props: ['color'],
  data() {
    return {
      outlineColor: 'var(--c-kanji-primary-m)'
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  padding: 1.5rem;
  width: 640px;
  min-height: 340px;
  background-color: white;
  outline: 10px solid v-bind(outlineColor);
  border-radius: 12px;
  overflow: hidden;
}
</style>
