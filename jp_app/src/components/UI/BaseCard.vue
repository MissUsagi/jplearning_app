<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cardOutline: {
      type: String,
      default: 'n5'
    },
    width: {
      type: String,
      default: '640px'
    }
  },
  data() {
    return {
      outlineColor: `var(--c-${this.cardOutline}-m)`
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  height: 100%;
  padding: 1.5rem;
  width: v-bind(width);
  background-color: white;
  outline: 10px solid v-bind(outlineColor);
  border-radius: 12px;
  overflow: hidden;
}
</style>
