<template>
  <base-card width="540px">
    <div>
      <span>Poziom JLPT</span>
      <div class="flex-row">
        <base-radio-btn
          v-for="(level, index) in jlptLevels"
          :key="index + level"
          :id="level"
          :value="level"
          :label="level"
          name="jlptLvl"
          @changeEvent="onInput($event, 'kanjiLvl')"
        />
      </div>
    </div>
    <div class="grid-container">
      <base-input class="grid-item1" label="Kanji" @inputEvent="onInput($event, 'kanji')" />
      <base-input class="grid-item2" label="Znaczenie" @inputEvent="onInput($event, 'meanings')" />
      <base-input class="grid-item3" label="On'yomi" @inputEvent="onInput($event, 'onReadings')" />
      <base-input
        class="grid-item4"
        label="Kun'yomi"
        @inputEvent="onInput($event, 'kunReadings')"
      />
      <base-textarea
        class="grid-item5"
        label="Przykłady"
        id="kanji"
        rows="10"
        @inputEvent="onInput($event, 'description')"
      />
    </div>
    <div class="buttons">
      <base-button btnTxt="Anuluj" className="btn outline" />
      <base-button btnTxt="Zapisz" className="btn primary" @clickEvent="onSave" />
    </div>
  </base-card>
</template>

<script>
import BaseRadioBtn from '../UI/BaseRadioBtn.vue'
import { useKanjiStore } from '../../stores/kanjiStore'
export default {
  components: { BaseRadioBtn },
  data() {
    return {
      jlptLevels: ['N5', 'N4', 'N3', 'N2', 'N1'],
      inputLabels: ['Kanji', 'Znaczenie', "On'yomi", "On'yomi"],
      newKanji: {
        id: 9999,
        isDifficult: false,
        kanjiLvl: '',
        kanji: '',
        meanings: '',
        onReadings: [],
        kunReadings: [],
        description: []
      },
      kanjiStore: useKanjiStore()
    }
  },

  methods: {
    onSave() {
      this.newKanji.id++
      this.kanjiStore.addKanji(this.newKanji)
      console.log(this.newKanji)
      this.resetForm()
    },

    onInput(value, tab) {
      if (tab === 'description') {
        const splitIntoArray = value.split(/\r?\n/)
        this.newKanji[tab] = splitIntoArray
      } else if (tab === 'kunReadings' || tab === 'onReadings') {
        const splitIntoArray = value.split(/[ ,]+/)
        this.newKanji[tab] = splitIntoArray
      } else this.newKanji[tab] = value
    },

    // TEST ONLY
    resetForm() {
      this.newKanji = {
        id: '9999',
        isDifficult: false,
        kanjiLvl: '',
        kanji: '',
        meanings: '',
        onReadings: '',
        kunReadings: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.grid-container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0 1rem;
  grid-template-areas:
    'grid-item1 grid-item2 grid-item2 grid-item2'
    'grid-item3 grid-item3 grid-item4 grid-item4'
    'grid-item5 grid-item5 grid-item5 grid-item5';
}

.grid-item1 {
  grid-area: grid-item1;
}

.grid-item2 {
  grid-area: grid-item2;
}

.grid-item3 {
  grid-area: grid-item3;
}

.grid-item4 {
  grid-area: grid-item4;
}

.grid-item5 {
  grid-area: grid-item5;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.buttons {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
