<template>
  <base-card width="540px">
    <div class="input-group">
      <label>Kanji</label>
      <input type="text" />
    </div>
    <div class="input-group">
      <label for="">Znaczenie</label>
      <input type="text" />
    </div>
    <div class="input-group">
      <label for="">On'yomi</label>
      <input type="text" />
    </div>
    <div class="input-group">
      <label for="">Kun'yomi</label>
      <input type="text" />
    </div>
    <div class="input-group">
      <label for="">Przykłady</label>
      <textarea id="w3review" name="w3review" rows="10" />
    </div>
    <!-- Przyciski -->
    <div class="buttons">
      <base-button btnTxt="Anuluj" className="btn outline" />
      <base-button btnTxt="Zapisz" className="btn" />
    </div>
  </base-card>
</template>

<style scoped lang="scss">
.input-group {
  display: flex;
  flex-direction: column;
  input,
  textarea {
    padding: 5px 10px;
    font-size: 1rem;
    border: 1px solid var(--input-border);
    border-radius: 4px;
  }
  input[type='text'] {
    height: 40px;
  }
  textarea {
    resize: vertical;
  }
  label {
    font-size: 1rem;
    font-weight: medium;
  }
}

.buttons {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
