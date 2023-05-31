<template>
  <button class="btn" :type="btnType">{{ btnTxt }}</button>
</template>

<script setup>
defineProps({
  btnType: {
    type: String,
    default: 'button'
  },
  btnTxt: {
    type: String,
    default: 'bButton'
  },
  btnClassname: {
    required: false,
    type: String
  }
})
</script>

<style scoped lang="scss">
.btn {
  height: 50px;
  width: 100%;
  border-radius: 25px;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

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
