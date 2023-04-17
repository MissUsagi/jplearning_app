<template>
  <section>
    <div class="container">
      <kanji-card />
    </div>
  </section>
</template>

<script>
import KanjiCard from '../cards/KanjiCard.vue'
export default {
  components: { KanjiCard }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: var(--top-nav-height);
  left: var(--side-nav-width);
  padding: 2rem;
}
</style>
