<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['color', 'width'],
  data() {
    return {
      outlineColor: 'var(--c-n5-m)'
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  padding: 1.5rem;
  width: v-bind(width);
  min-height: 340px;
  background-color: white;
  outline: 10px solid v-bind(outlineColor);
  border-radius: 12px;
  overflow: hidden;
}
</style>
