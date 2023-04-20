<template>
  <div class="mini-card">
    <div class="content">
      <span class="badge">N4</span>
      <div class="kanji"><h2>家</h2></div>
      <div class="meaning"><h3>DOM</h3></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mini-card {
  background-color: white;
  color: var(--c-text-primary);
  width: 180px;
  height: 180px;
  outline: 10px solid var(--c-kanji-primary-m);
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
    color: var(--c-kanji-primary-m);
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
    border-top: 4px dashed var(--c-kanji-primary-m);
    padding: 3px 10px;
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 1.6rem;
    }
  }
}
</style>
