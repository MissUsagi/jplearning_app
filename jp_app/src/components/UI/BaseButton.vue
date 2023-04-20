<template>
  <button class="btn" type="button">{{ btnTxt }}</button>
</template>

<script>
export default {
  props: ['btnTxt']
}
</script>

<style scoped lang="scss">
.btn {
  height: 50px;
  width: 100%;
  background-color: var(--c-kanji-primary-m);
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bold;
  &.outline {
    background-color: white;
    color: var(--c-kanji-primary-m);
    border: 1px solid var(--c-kanji-primary-m);
  }
}
</style>
