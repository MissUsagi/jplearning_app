<template>
  <base-card width="640px" :card-outline="colorCode">
    <div @click="test">
      <div class="top-section">
        <div class="badge">
          <span>{{ kanjiLvl }}</span>
        </div>
        <div class="badge">
          <!-- dodac ikonke  -->
          <span>X</span>
        </div>
      </div>

      <div class="row">
        <div class="l-side">
          <div>
            <h2>{{ kanji }}</h2>
          </div>
          <div class="description-card readings">
            <div class="reading">
              <span>on: </span>
              <p>{{ onReadings.join(', ') }}</p>
            </div>
            <div class="reading">
              <span>kun: </span>
              <p>{{ kunReadings.join(', ') }}</p>
            </div>
          </div>
        </div>
        <div class="r-side">
          <div>
            <h2 class="kanji-meaning">{{ meanings }}</h2>
          </div>
          <div class="description-card">
            <div v-for="desc in description">
              <p>{{ desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="actions"><span>Usuń</span><span>Edytuj</span></div>
    </div>
  </base-card>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps(['kanjiCharacter'])
const { kanjiCharacter } = toRefs(props)
const { kanjiLvl, kanji, onReadings, kunReadings, description, meanings } = kanjiCharacter.value

const colorCode = kanjiLvl.toLowerCase()
const primaryColor = `var(--c-${colorCode}-m)`
const secondaryColor = `var(--c-${colorCode}-l)`

// TEST SECTION
// const { kanjiLvl, kanji, onReadings, kunReadings, description, meanings } =
//   useKanjiStore().kanjiCharacters[1]
function test() {
  console.log(kanjiLvl)
}
</script>

<style scoped lang="scss">
$base-color: v-bind(primaryColor);
$secondary-color: v-bind(secondaryColor);

.top-section {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}

.actions {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 1.5rem;
  font-weight: bold;
  font-size: 0.8rem;
  color: var(--c-grey);

  span {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
}

.l-side {
  flex: 1;

  h2 {
    text-align: center;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 8rem;
    font-weight: 400;
    line-height: 133px;
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: 700;
    padding-bottom: 0.6rem;
    font-size: 1rem;
  }
}

.r-side {
  flex: 2;
  display: flex;
  flex-direction: column;

  & .kanji-meaning {
    transform: translateY(-1.5rem);
    width: 80%;
    flex: 1;
    text-transform: uppercase;
    border-bottom: 2px dashed $base-color;
    margin-bottom: 0.3rem;
    font-size: 2.3rem;
  }

  & .description-card {
    padding: 1.2rem;
    flex: 2;
    font-size: 1rem;
    line-height: 1.4;

    p {
      margin-bottom: 1rem;
    }
  }
}

.description-card {
  background: $secondary-color;
  border-radius: 5px;
  padding: 0.8rem;
}

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: $base-color;
  border-radius: 7px;
  text-align: center;

  span {
    font-weight: 700;
    font-size: 20px;
    color: white;
  }
}

.readings {
  font-size: 0.8rem;
  font-weight: 700;
}

.reading {
  font-size: 0.6rem;
  padding: 0 0.5rem;
  background: white;
  border-radius: 5px;
}

.reading:first-child {
  margin-bottom: 1rem;
}
</style>
