<template>
  <section>
    <div class="container">
      <kanji-card v-for="(kanji, index) in getKanji" :kanjiCharacter="kanji" :key="kanji.id" />
      <kanji-small-card
        v-for="kanji in getKanji"
        :jlpt="kanji.kanjiLvl"
        :kanji="kanji.kanji"
        :meaning="kanji.meanings"
      />
      <kanji-form />
    </div>
  </section>
</template>

<script>
import KanjiCard from '../cards/KanjiCard.vue'
import KanjiSmallCard from '../cards/KanjiSmallCard.vue'
import KanjiForm from '../forms/KanjiForm.vue'
import { mapState } from 'pinia'
import { useKanjiStore } from '../../stores/kanjiStore'
export default {
  components: { KanjiCard, KanjiSmallCard, KanjiForm },
  computed: {
    ...mapState(useKanjiStore, ['getKanji'])
  },
  methods: {
    test() {
      console.log(this.kanjiCharacters)
    }
  }
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
