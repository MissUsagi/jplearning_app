<template>
  <base-card card-width="540px">
    <form @submit.prevent="onSave">
      <div>
        <span>Poziom JLPT</span>
        <div class="flex-row">
          <!-- <base-radio-btn
            v-for="(level, index) in jlptLevels"
            :key="index + level"
            :id="level"
            :label="level"
            :model-value="jlptLvl"
            name="jlptLvl"
            @update:modelValue="onInput($event, 'kanjiLvl')"
          /> -->
          <base-radio-btn
            :options="jlptLevels"
            name="jlptLevel"
            @optionChange="onInput($event, 'kanjiLvl')"
          />
        </div>
      </div>
      <div class="grid-container">
        <base-input
          id="kanji_char"
          class="grid-item1"
          label="Kanji"
          v-model="kanji"
          @update:modelValue="onInput($event, 'kanji')"
        />
        <base-input
          id="kanji_meaning"
          class="grid-item2"
          label="Znaczenie"
          v-model="meaning"
          @update:modelValue="onInput($event, 'meanings')"
        />
        <base-input
          id="kanji_onyomi"
          class="grid-item3"
          label="On'yomi"
          v-model="onyomi"
          @update:modelValue="onInput($event, 'onReadings')"
        />
        <base-input
          id="kanji_kunyomi"
          class="grid-item4"
          label="Kun'yomi"
          v-model="kunyomi"
          @update:modelValue="onInput($event, 'kunReadings')"
        />
        <base-textarea
          class="grid-item5"
          label="Przykłady"
          id="kanji"
          rows="10"
          @update:modelValue="onInput($event, 'description')"
        />
      </div>
      <div class="buttons">
        <base-button btnTxt="Anuluj" btnType="button" className="btn outline" />
        <base-button btnTxt="Zapisz" btnType="submit" className="btn primary" />
      </div>
    </form>
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
      jlptLvl: 'N4',
      kanji: '',
      meaning: '',
      onyomi: '',
      kunyomi: '',
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
      console.log(value)
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
