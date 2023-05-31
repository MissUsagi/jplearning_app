<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  cardOutline: {
    type: String,
    default: 'n5'
  },
  cardWidth: {
    type: String,
    default: '640px'
  }
})

const outlineColor = `var(--c-${props.cardOutline}-m)`
</script>


<style scoped lang="scss">
.card {
  position: relative;
  height: 100%;
  padding: 1.5rem;
  width: v-bind(cardWidth);
  background-color: white;
  outline: 10px solid v-bind(outlineColor);
  border-radius: 12px;
  overflow: hidden;
}
</style>