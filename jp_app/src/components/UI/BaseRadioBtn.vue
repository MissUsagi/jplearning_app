<template>
  <div v-for="option in options">
    <label :for="option">
      <input
        type="radio"
        :id="option"
        :name="name"
        :value="option"
        @change="$emit('optionChange', $event.target.value)"
      />
      <span class="checked"> {{ option }} </span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array
  },
  name: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['optionChange'])
</script>

<style scoped lang="scss">
input[type='radio'] {
  display: none;
  &:checked + span {
    background-color: var(--c-kanji-primary-l);
    &:before {
      box-shadow: inset 0 0 0 7px var(--c-kanji-primary-m);
      background-color: white;
    }
  }
}
label {
  display: block;
  cursor: pointer;
  white-space: nowrap;
  font-weight: 500;
  text-transform: capitalize;
  .checked {
    display: inline-flex;
    align-items: center;
    text-align: center;
    padding: 10px;
    margin: 0 5px;
    border-radius: 20px;
    transition: 0.25s ease;
    &:hover {
      background-color: var(--c-kanji-primary-l);
    }
    &::before {
      content: '';
      background-color: white;
      box-shadow: inset 0 0 0 3px var(--c-kanji-primary-m);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 10px;
      transition: 0.25s ease;
    }
  }
}
</style>