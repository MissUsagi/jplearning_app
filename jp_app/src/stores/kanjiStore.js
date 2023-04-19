import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

export const useKanjiStore = defineStore('kanjiStore', () => {
  const kanjiCharacters = ref([
    {
      id: 1,
      isDifficult: false,
      kanjiLvl: 'N5',
      kanji: '見',
      onReadings: ['ケン'],
      kunReadings: ['み.る', 'み.える', 'み.せる'],
      meanings: 'Patrzeć',
      description: [
        `見る 【みる】 to see, to look, to watch`,
        `見る見る 【みるみる】 very fast, in a twinkle, before one's eyes`
      ]
    },
    {
      id: 2,
      isDifficult: false,
      kanjiLvl: 'N4',
      kanji: '家',
      onReadings: ['カ', 'ケ'],
      kunReadings: ['いえ', 'や', 'うち'],
      meanings: 'Dom',
      description: [
        `家 【いえ】 house, residence, dwelling, family, household, lineage, family name`,
        `家主 【やぬし】 landlord, landlady, house owner, home owner, head of the household`,
        `本家 【ほんけ】 head house (family), birthplace, originator`
      ]
    }
  ])

  const kanji = computed(() => kanjiCharacters.value)

  return { kanjiCharacters, kanji }
})

// // const count = ref(0)
// // const doubleCount = computed(() => count.value * 2)
// const kanji = computed(() => kanjiCharacters.value)
// function increment() {
//   return console.log(kanji)
// }

// return { kanjiCharacters, increment, kanji }
