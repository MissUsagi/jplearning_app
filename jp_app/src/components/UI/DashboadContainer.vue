<template>
  <section>
    <div class="container">
      <kanji-card />
      <kanji-small-card jlpt="N4" kanji="家" meaning="dom" />
      <kanji-small-card jlpt="N5" kanji="見" meaning="patrzeć" />
      <kanji-form />
    </div>
  </section>
</template>

<script>
import KanjiCard from '../cards/KanjiCard.vue'
import KanjiSmallCard from '../cards/KanjiSmallCard.vue'
import KanjiForm from '../forms/KanjiForm.vue'
export default {
  components: { KanjiCard, KanjiSmallCard, KanjiForm }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
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
