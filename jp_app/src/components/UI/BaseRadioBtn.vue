<template>
  <label :for="id" class="custom-radio-btn">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      @change="$emit('changeEvent', $event.target.value)"
    />
    <span class="checkmark"> {{ label }} </span>
  </label>
</template>

<script>
export default {
  props: ['id', 'name', 'value', 'label'],
  emits: ['changeEvent']
}
</script>

<style scoped lang="scss">
input[type='radio'] {
  display: none;
  &:checked + span {
    background-color: var(--c-kanji-primary-l);
    &:before {
      box-shadow: inset 0 0 0 5px var(--c-kanji-primary-m);
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
  span {
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
      border: 3px solid var(--c-kanji-primary-m);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 10px;
      transition: 0.25s ease;
    }
  }
}
</style>
