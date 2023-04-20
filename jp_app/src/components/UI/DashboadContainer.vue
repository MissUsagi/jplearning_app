<template>
  <section>
    <div class="container">
      <kanji-card />
      <kanji-small-card />
    </div>
  </section>
</template>

<script>
import KanjiCard from '../cards/KanjiCard.vue'
import KanjiSmallCard from '../cards/KanjiSmallCard.vue'
export default {
  components: { KanjiCard, KanjiSmallCard }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: var(--top-nav-height);
  left: var(--side-nav-width);
  padding: 2rem;
}

/* tylko do testów */
.container > div {
  margin: 2rem;
}
</style>
