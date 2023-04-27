<template>
  <section>
    <div class="container">
      <!-- <kanji-card v-for="(kanji, index) in getKanji" :kanjiCharacter="kanji" :key="kanji.id" /> -->
      <!-- <kanji-card 
        v-if="kanjiCardVisibility"
        :kanjiCharacter="kanjiToShow"
        @onClose="kanjiCardVisibility = false"
      /> -->
      <kanji-small-card
        v-for="kanji in getKanji"
        :jlpt="kanji.kanjiLvl"
        :kanji="kanji.kanji"
        :meaning="kanji.meanings"
        @click="showKanjiCard(kanji)"
      />
      <component
        is="kanji-card"
        :key="reRenderCard"
        class="modal"
        v-if="kanjiCardVisibility"
        :kanjiCharacter="kanjiToShow"
        @onClose="kanjiCardVisibility = false"
      />
      <kanji-form />
    </div>
  </section>
</template>

<script>
import KanjiCard from '../cards/KanjiCard.vue'
import KanjiSmallCard from '../cards/KanjiSmallCard.vue'
import KanjiForm from '../forms/KanjiForm.vue'
import { mapState, mapActions } from 'pinia'
import { useKanjiStore } from '../../stores/kanjiStore'
export default {
  components: { KanjiCard, KanjiSmallCard, KanjiForm },
  data() {
    return {
      kanjiCardVisibility: false,
      kanjiToShow: '',
      reRenderCard: 0
    }
  },
  computed: {
    ...mapActions(useKanjiStore, ['getKanjiDatabase']),
    ...mapState(useKanjiStore, ['getKanji'])
  },
  methods: {
    showKanjiCard(event) {
      this.kanjiCardVisibility = true
      this.kanjiToShow = event
      this.reRenderCard += 1
    }
  },
  created() {
    this.getKanjiDatabase
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

/* .modal {
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 5;
} */
</style>
