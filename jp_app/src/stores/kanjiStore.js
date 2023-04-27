import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import dummyData from './dummyData'

export const useKanjiStore = defineStore('kanjiStore', () => {
  const kanjiCharacters = ref([])

  async function getKanjiDatabase() {
    const res = await fetch('http://localhost:5000/dummyData')
    const data = await res.json()
    kanjiCharacters.value = data
  }

  const getKanji = computed(() => kanjiCharacters.value)

  function addKanji(kanji) {
    kanjiCharacters.value.push(kanji)
    console.log(kanjiCharacters.value)
  }

  return { kanjiCharacters, addKanji, getKanji, getKanjiDatabase }
})
