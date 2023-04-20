<template>
  <div class="mini-card">
    <div class="content">
      <span class="badge">{{ jlpt }}</span>
      <div class="kanji">
        <h2>{{ kanji }}</h2>
      </div>
      <div class="meaning">
        <h3>{{ meaning }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['jlpt', 'kanji', 'meaning'],
  data() {
    return {
      baseColor: `var(--c-${this.jlpt.toLowerCase()}-m)`
    }
  }
}
</script>

<style scoped lang="scss">
$base-color: v-bind(baseColor);
.mini-card {
  background-color: white;
  color: var(--c-text-primary);
  width: 180px;
  height: 180px;
  outline: 10px solid $base-color;
  border-radius: 10px;
  cursor: pointer;

  :hover {
  }
}

.content {
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.2;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  & .badge {
    position: absolute;
    top: 10px;
    left: 10px;

    font-weight: bold;
    font-size: 1.5rem;
    color: $base-color;
  }
  & .kanji {
    flex: 2;
    padding-bottom: 5px;
    h2 {
      font-size: 6.5rem;
      font-weight: 400;
      font-family: var(--japanese-font);
    }
  }

  & .meaning {
    flex: 1;
    position: relative;
    border-top: 4px dashed $base-color;
    padding: 3px 10px;
    h3 {
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
