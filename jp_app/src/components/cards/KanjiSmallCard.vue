<template>
  <div class="kanji-card-small">
    <div class="container">
      <span class="level-badge">{{ jlpt }}</span>
      <div class="char-container">
        <h2 class="kanji-char">{{ kanji }}</h2>
      </div>
      <div class="meaning-container">
        <h3 class="kanji-meaning">{{ meaning }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jlpt: {
      type: String,
      required: false
    },
    kanji: {
      type: String,
      required: true
    },
    meaning: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      baseColor: `var(--c-${this.jlpt.toLowerCase()}-m)`
    }
  }
}
</script>

<style scoped lang="scss">
$base-color: v-bind(baseColor);

.kanji-card-small {
  background-color: white;
  color: var(--c-text-primary);
  width: 180px;
  height: 180px;
  outline: 10px solid $base-color;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    .kanji-char {
      text-shadow: -2px -2px 0 $base-color, 2px -2px 0 $base-color, -2px 2px 0 $base-color,
        2px 2px 0 $base-color;
    }
  }
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  & .level-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: bold;
    font-size: 1.4rem;
    color: $base-color;
  }

  & .char-container {
    .kanji-char {
      flex: 2;
      padding-bottom: 5px;
      font-size: 6.5rem;
      font-weight: 400;
      font-family: var(--japanese-font);
    }
  }

  & .meaning-container {
    flex: 1;
    position: relative;
    border-top: 4px dashed $base-color;
    padding: 3px 10px;

    .kanji-meaning {
      position: absolute;
      text-transform: uppercase;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 1.6rem;
    }
  }
}
</style>
