<template>
  <button class="btn" type="button" @click="clickEventHandler">{{ btnTxt }}</button>
</template>

<script>
export default {
  props: ['btnTxt'],
  methods: {
    clickEventHandler() {
      this.$emit('clickEvent')
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  height: 50px;
  width: 100%;
  border-radius: 25px;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bold;

  &.primary {
    background-color: var(--c-kanji-primary-m);
    color: white;
    border: none;
  }
  &.outline {
    background-color: white;
    color: var(--c-kanji-primary-m);
    border: 1px solid var(--c-kanji-primary-m);
  }

  &:hover {
    font-size: 1.6rem;
  }
}
</style>
