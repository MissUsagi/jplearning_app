<script>
export default {
  data() {
    return {
      dummyKanji: {
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
      }
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="content">
      <div class="top">
        <div class="badge">
          <span>{{ dummyKanji.kanjiLvl }}</span>
        </div>
        <div class="badge"><span>X</span></div>
      </div>

      <div class="row">
        <div class="l-side">
          <div>
            <h2>{{ dummyKanji.kanji }}</h2>
          </div>
          <div class="desc-card readings">
            <div class="reading">
              <span>on: </span>
              <p>{{ dummyKanji.onReadings }}</p>
            </div>
            <div class="reading">
              <span>kun: </span>
              <p>{{ dummyKanji.kunReadings }}</p>
            </div>
            <div></div>
          </div>
        </div>
        <div class="r-side">
          <div>
            <h2 class="card-header">{{ dummyKanji.meanings }}</h2>
          </div>
          <div class="desc-card description">
            <div v-for="desc in dummyKanji.description">
              <p>{{ desc }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">Edytuj</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  padding: 1.5rem;
  width: 640px;
  min-height: 340px;
  background-color: white;
  outline: 10px solid var(--c-kanji-primary-m);
  border-radius: 12px;
  overflow: hidden;
}
// .content {
//   padding: 1.5rem;
// }
.top {
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

.bottom {
  cursor: pointer;
  position: absolute;
  bottom: 0;
  right: 1.5rem;
  font-weight: bold;
  color: var(--c-grey);
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
  & .card-header {
    transform: translateY(-1.5rem);
    width: 80%;
    flex: 1;
    text-transform: uppercase;
    border-bottom: 2px dashed var(--c-kanji-primary-m);
    margin-bottom: 0.3rem;
    font-size: 2.3rem;
  }
  & .description {
    padding: 1.2rem;
    flex: 2;
    font-size: 1rem;
    line-height: 1.4;

    p {
      margin-bottom: 1rem;
    }
  }
}

.desc-card {
  background: var(--c-kanji-primary-l);
  border-radius: 5px;
  padding: 0.8rem;
}

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--c-kanji-primary-m);
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
