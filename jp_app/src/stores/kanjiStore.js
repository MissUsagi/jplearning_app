import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import dummyData from './dummyData'

export const useKanjiStore = defineStore('kanjiStore', () => {
  const kanjiCharacters = ref(dummyData)

  const getKanji = computed(() => kanjiCharacters.value)

  function addKanji(kanji) {
    kanjiCharacters.value.push(kanji)
    console.log(kanjiCharacters.value)
  }

  return { kanjiCharacters, getKanji, addKanji }
})
